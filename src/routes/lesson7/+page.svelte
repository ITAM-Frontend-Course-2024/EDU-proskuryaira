<script lang="ts">
	let text = "";
	let token: null | string = null;
	async function login() {
		let promise = fetch("https://notes.clayenkitten.dev/user/login", {
			method: "POST",
			body: JSON.stringify({ login: "proskuryaira" }),
			headers: {
				"Content-Type": "application/json"
			}
		});
		let response = await promise;
		let obj = await response.json();
		console.log(obj.token);
		token = obj.token;
	}

	token = "81a7b856-6a19-4aa5-88cd-150c39ab2f58"; // потом надо убрать

	async function get_username() {
		if (!token) return;
		let promise = fetch("https://notes.clayenkitten.dev/user/whoami", {
			// method: "GET",      метод GET по умолчанию
			headers: {
				"Content-Type": "application/json",
				Authorization: token
			}
		});
		let response = await promise;
		let text1 = await response.text();
		text = text1;
	}

	async function list() {
		if (!token) return;
		let response = await fetch("https://notes.clayenkitten.dev/note", {
			headers: {
				"Content-Type": "application/json",
				Authorization: token
			}
		});
		let obj = await response.json();
		console.log(obj.token);
	}

	let note_name = "note1";
	let note_content = "SOmethimg blah blah blah";
	async function create_note() {
		if (!token) return;
		let promise = fetch("https://notes.clayenkitten.dev/note", {
			method: "POST",
			body: JSON.stringify({ header: note_name, content: note_content }),
			headers: {
				"Content-Type": "application/json",
				Authorization: token
			}
		});
	}
	// public
	let notes: Array<{ id: string; header: string; createdAt: string }> = [];
	async function list_public() {
		let response = await fetch("https://notes.clayenkitten.dev/note/public", {
			headers: {
				"Content-Type": "application/json"
			}
		});
		let obj = await response.json();
		// console.log(obj);
		notes = obj;
	}
</script>

<button on:click={login}>Авторизация</button>
<button on:click={get_username}>Get name</button>
<button on:click={list}>List of notes?</button>
<div><button on:click={create_note}>create_note</button></div>
<div><button on:click={list_public}>list_public</button></div>
{notes.forEach(note => { console.log(note);})}
<p>{text}</p>

<ul class="notes">
    {#each notes as note}
        <li class="note">
            <!-- <a href={`/notes_app/${note.id}`} class="a_note"> -->
                <span class="note_name">{note.header}</span>
                <span class="note_date"
                    >{note.createdAt.substring(0, 10)}
                    {note.createdAt.substring(11, 16)}<span>
                        <!-- <span class="content">{note.content.substring(0, 800)}</span> -->
            <!-- </a> -->
            <!-- <span><button on:click={delete_note(note.id)}>Удалить заметку</button></span> -->
        </li>
    {/each}
</ul>