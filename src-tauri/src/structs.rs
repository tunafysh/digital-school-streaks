use serde::{Serialize, Deserialize};
use surrealdb::RecordId;

#[derive(Serialize, Deserialize)]
pub struct Stage<'a> {
    pub name: &'a str,
    pub color: &'a str,
    pub count: usize,
}

#[derive(Serialize, Deserialize)]
pub struct Pipeline<'a> {
    pub name: &'a str,
    pub stages: Vec<Stage<'a>>,
}

#[derive(Debug, Deserialize)]
pub struct Record {
    #[allow(dead_code)]
    id: RecordId,
}