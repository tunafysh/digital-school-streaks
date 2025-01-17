// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/

#[tauri::command]
fn close(window: tauri::Window) {
    window.close().unwrap();
}

#[tauri::command]
fn minimize(window: tauri::Window) {
    window.minimize().unwrap();
}


#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![close, minimize])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}