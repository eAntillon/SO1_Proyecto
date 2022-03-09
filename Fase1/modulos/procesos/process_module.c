#include <linux/init.h>
#include <linux/module.h>
#include <linux/kernel.h>
#include <linux/sched/signal.h>
#include <linux/sched.h>
#include <linux/proc_fs.h>
#include <linux/fs.h>
#include <linux/sysinfo.h>
#include <linux/seq_file.h>
#include <linux/slab.h>
#include <linux/mm.h>
#include <linux/uaccess.h>


struct task_struct *task;       
struct task_struct *task_child; 
struct list_head *list; 

MODULE_LICENSE("GPL");
MODULE_AUTHOR("Grupo 6");
MODULE_DESCRIPTION("Modulo de procesos para la fase 1 del proyecto de SO1");
MODULE_VERSION("1.0.0");


static int escribir_a_proc(struct seq_file *file_proc, void *v)
{


    seq_printf(file_proc, "[");
    for_each_process(task)
    {                                                                                                   
        seq_printf(file_proc, "{\"process_id\": %d,\"process_name\": \"%s\", \"state\": \"%ld\"},\n", task->pid, task->comm, task->state);
        list_for_each(list, &task->children)
        { 
            task_child = list_entry(list, struct task_struct, sibling);
            seq_printf(file_proc, "{\"parent_id\": %d,\"parent_name\":\"%s\", \"process_id\": %d, \"process_name\": \"%s\", \"state\": \"%ld\"},\n", task->pid, task->comm, task_child->pid, task_child->comm, task_child->state);
        }
    }
    seq_printf(file_proc, "]");
    return 0;
}

static int abrir_aproc(struct inode *inode, struct file *file)
{
    return single_open(file, escribir_a_proc, NULL);
}

static struct proc_ops archivo_operaciones = {
    .proc_open = abrir_aproc,
    .proc_read = seq_read};

int  processes_module_init(void)
{
    proc_create("process_module", 0, NULL, &archivo_operaciones);
    printk(KERN_INFO "%s", "Módulo lista de procesos del Grupo 6 Cargado\n");
    
    return 0;
}

void processes_module_cleanup(void)
{
    printk(KERN_INFO "%s", "Módulo lista de procesos del Grupo 6 Desmontado\n");
}

module_init(processes_module_init);
module_exit(processes_module_cleanup);