let login_name: string = "proskuryaira";
let token: null | string = null;
export async function login(login_name: string) {
	let promise = fetch("https://notes.clayenkitten.dev/user/login", {
		method: "POST",
		body: JSON.stringify({ login: login_name }),
		headers: {
			"Content-Type": "application/json"
		}
	});
	let response = await promise;
	let obj = await response.json();
	console.log(obj.token);
	token = obj.token;
}

// public
let notes: Array<{ id: string; header: string; createdAt: string }> = [];
export async function list_public() {
	let response = await fetch("https://notes.clayenkitten.dev/note/public", {
		headers: {
			"Content-Type": "application/json"
		}
	});
	let obj = await response.json();
	notes = obj;
}

let note_name = "note1";
let note_content = "SOmethimg blah blah blah";
export async function create_note() {
	let promise = fetch("https://notes.clayenkitten.dev/note/public", {
		method: "POST",
		body: JSON.stringify({ header: note_name, content: note_content }),
		headers: {
			"Content-Type": "application/json"
		}
	});
}
