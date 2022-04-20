# Manual Técnico

#### Arquitectura del proyecto
![This is a alt text.](./pictures/arquitectura.PNG "Pagina Web- Funcionamiento.")

## Especificaciones necesarias para ejecutar el proyecto
- Sistema operativo libre
- Docker: versión +18.09.7
- Docker compose: versión +1.20

## Frontend:
La aplicación se encuentra en un contenedor de docker el cual se ejecuta en la nube utilizando la herramienta de cloud run.

## Backend:
Se manejan dos rutas para controlar el tráfico de datos, ambas rutas utilizan la tecnología de procedimientos remotos o gRPC para poder manejar el envío y recepcion de información, la principal diferencia entre ambas rutas es el manejador de colas que se implementa, en la primera se utiliza RabbitMQ y en la segunda se utiliza Kafka. Para el cliente se utilizó una máquina virtual y para la ruta como tal se utilizó otra máquina virtual, de manera que, tenemos un total de 4 máquinas virtuales.

## Bases de datos
Se utilizarón 3 bases de datos: redis, tidb y mongodb. Estas almacenan la información respectiva de cada juego realizado para luego ser mostrado en el frontend. Cada base de datos es implementada en una máquina virtual independiente.

## Balanceador de carga

## Generador de tráfico
Este se realizó utilizando locust en el lenguaje de programación python, este leerá un archivo .json que contendrá los datos que se enviarán aleatoriamente generando ciertos parámetros necesarios para ser procesados por las rutas.