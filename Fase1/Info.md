## MongoDB database

- HOST= mongodb://34.72.202.175:27017
- USERNAME= proyecto
- PASSWORD= 7T4MGIMvis

`docker run --name database -d -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=proyecto -e MONGO_INITDB_ROOT_PASSWORD=7T4MGIMvis mongo`


## Cloud Function
`POST https://us-central1-nimble-service-343418.cloudfunctions.net/function-1`

*  **Body content**

   **Required:**
    ```
    {
        "nombreVM": string,
        "endpoint": string,
        "data": array[{}],  // información que retorno el servidor al cliente
        "date": string
    }
    ```
* **Response**

    ```
    {
        "message": "Datos almacenado en base de datos"
    }
    ```

## Load Balancing
- URL http://35.209.225.6/<endpoint>

## VM Servers

### VM1
- ip: 35.206.82.146
- user

### VM2
- ip 35.226.199.209
- user

