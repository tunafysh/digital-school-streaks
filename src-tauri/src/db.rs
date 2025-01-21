use surrealdb::{engine::local::{Db, RocksDb}, Surreal};
use std::{env::{self, consts::OS}, fs, thread::Result};
use whoami::username;

use crate::structs::*;

pub async fn init() -> Surreal<Db> {
    let mut path = format!("/home/{}/.local/streaks", username()).to_string();
    if OS == "windows" {
        if fs::exists("C:\\Program Files\\Streaks").unwrap() == false {
            fs::create_dir("C:\\Program Files\\Streaks").unwrap();
        }
        
        path = "C:\\Program Files\\Streaks".to_string();

    }

    let db = Surreal::new::<RocksDb>(path).await.unwrap();
    db.use_ns("streaks").use_db("pipelines");
    db    
}

// #[tauri::command]
// pub async fn create_pipeline(db: &Surreal<Db>, name: &str, color: &str) -> Result<()> {
//     let pipeline: Pipeline = Pipeline {
//         name: name,
//         stages: vec![Stage {
//             name: "Workshop",
//             color: "#00FF00",
//             count: 0,
//         }],
//     };
//     let res: Option<Record> = db.create(name).content(pipeline).await.unwrap();
//     Result::Ok(())
// }

// #[tauri::command]
// pub fn get_pipelines(db: &Surreal<Db>) -> Vec<Pipeline> {
//     db.use_ns("streaks").use_db("pipelines");
//     let pipelines = db.select("*");
// }

// #[tauri::command]
// pub fn create_stage(db: &Surreal<Db>, pipeline: &str, name: &str, color: &str) {
//     db.use_ns("streaks").use_db("stages");
//     db.create();
// }