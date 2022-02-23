obj-m += ram_module.o

all:
	make -C /lib/modules/$(shell uname -r)/build M=$(PWD) modules
clean:
	make -C /lib/modules/$(shell uname -r)/build M=$(PWD) clean
run:
	sudo insmod ram_module.ko
remove:
	sudo rmmod ram_module.ko