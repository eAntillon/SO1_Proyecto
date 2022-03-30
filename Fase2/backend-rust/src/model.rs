use serde::{Deserialize, Serialize};

#[derive(Clone, Debug, PartialEq, Deserialize, Serialize)]
pub struct Log {
    pub game_id: i32,
    pub players: i32,
    pub game_name: String,
    pub winner: i32,
    pub queue: String,
}