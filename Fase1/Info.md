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