#include <linux/init.h>
#include <linux/module.h>
#include <linux/proc_fs.h>
#include <linux/sched.h>
#include <linux/uaccess.h>
#include <linux/fs.h>
#include <linux/sysinfo.h>
#include <linux/seq_file.h>
#include <linux/slab.h>
#include <linux/mm.h>

MODULE_LICENSE("GPL");
MODULE_AUTHOR("Grupo 6");
MODULE_DESCRIPTION("Modulo de lectura de RAM");
MODULE_VERSION("1.0.0");

struct sysinfo info;

static int escribir_a_proc(struct seq_file *file_proc, void *v)
{
    si_meminfo(&info);
    int totalram = ((uint64_t)info.totalram * info.mem_unit) / (1024 * 1024);
    int freeram = ((uint64_t)(info.freeram + info.sharedram + info.bufferram) * info.mem_unit) / (1024 * 1024);
    int ramusage = totalram - freeram;
    long long int percent = (ramusage* 100) / totalram ;
    seq_printf(file_proc, "{\"totalram\": %d,\"ramusage\": %d,\"rampercent\": %llu,\"freeram\":%d}", 
        totalram, ramusage, percent, freeram );

    return 0;
}

static int abrir_aproc(struct inode *inode, struct file *file)
{
    return single_open(file, escribir_a_proc, NULL);
}

static struct proc_ops archivo_operaciones = {
    .proc_open = abrir_aproc,
    .proc_read = seq_read};

static int __init ram_module_init(void)
{
    proc_create("ram_module", 0, NULL, &archivo_operaciones);
    printk(KERN_INFO "Módulo RAM del Grupo 6 Cargado \n");
    return 0;
}

static void __exit ram_module_cleanup(void)
{
    remove_proc_entry("ram_module", NULL);
    printk(KERN_INFO "Módulo RAM del Grupo 6 Desmontado\n");
}

module_init(ram_module_init);
module_exit(ram_module_cleanup);