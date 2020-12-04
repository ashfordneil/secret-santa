use anyhow::Result;
use rocket::Rocket;
use rocket_contrib::serve::StaticFiles;

#[rocket::get("/healthz")]
fn healthz() -> &'static str {
    "API server has launched 🚀"
}

#[tokio::main]
async fn main() -> Result<()> {
    Rocket::ignite()
        .mount("/", StaticFiles::from("../frontend/build").rank(1))
        .mount("/api", rocket::routes![healthz])
        .launch()
        .await?;

    Ok(())
}
