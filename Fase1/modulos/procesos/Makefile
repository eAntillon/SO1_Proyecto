obj-m += process_module.o

all:
	make -C /lib/modules/$(shell uname -r)/build M=$(PWD) modules
clean:
	make -C /lib/modules/$(shell uname -r)/build M=$(PWD) clean
run:
	sudo insmod process_module.ko
remove:
	sudo rmmod process_module.ko