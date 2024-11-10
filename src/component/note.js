   // notes.js
   export function load_notes() {
    const keys = Object.keys(localStorage);
    const notes = keys.map(key => {
        const note = JSON.parse(localStorage.getItem(key) as string);
        return { id: key, name: note.name, date: note.date };
    }).filter(note => note.name);
    
    return notes; // Не забудьте вернуть массив заметок
}
