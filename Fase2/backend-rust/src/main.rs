mod model;
use model::Log;

use actix_cors::Cors;
use actix_web::{get, web, App, HttpResponse, HttpServer, Responder};
use dotenv;
use futures::StreamExt;
use mongodb::error::Error;
use mongodb::{Client, Collection};

#[get("/")]
async fn hello() -> impl Responder {
    HttpResponse::Ok().body("Hello world!")
}

#[get("/get_logs")]
async fn get_logs(client: web::Data<Client>) -> HttpResponse {
    println!("Request for logs");
    let collection: Collection<Log> = client
        .database(&dotenv::var("DATABASE_NAME").unwrap())
        .collection(&dotenv::var("DATABASE_COLL_NAME").unwrap());
    match collection.find(None, None).await {
        Ok(c) => {
            let results: Vec<Result<Log, Error>> = c.collect().await;
            let mut logs: Vec<Log> = Vec::new();
            for result in results {
                if let Ok(log) = result {
                    logs.push(log);
                }
            }
            HttpResponse::Ok().json(logs)
        }
        Err(e) => {
            println!("{}", e);
            HttpResponse::InternalServerError().body("Error")
        }
    }
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    println!("server running! {}", dotenv::var("DATABASE_URL").unwrap());
    dotenv::dotenv().ok();
    let client = Client::with_uri_str(dotenv::var("DATABASE_URL").unwrap())
        .await
        .expect("failed to connect");
    HttpServer::new(move || {
        App::new()
            .wrap(Cors::permissive())
            .app_data(web::Data::new(client.clone()))
            .service(hello)
            .service(get_logs)
    })
    .bind(("0.0.0.0", 8080))?
    .run()
    .await
}
