export async function load({ params }: any) {
	const noteId = params.noteId;

	const response = await fetch(`https://notes.clayenkitten.dev/note/public/${noteId}`, {
		headers: {
			"Content-Type": "application/json"
		}
	});
	const noteData = await response.json();

	return {
			note: noteData
	};
}
