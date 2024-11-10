export function load({ params }: any) {
	const noteId = params.noteId;
	const noteData = JSON.parse(localStorage.getItem(noteId) ?? "{}");

	return {
		note: {
			id: `${noteId}`,
			date: `${noteData.date}`,
			name: `${noteData.name}`,
			content: `${noteData.content} `
		}
	};
}
