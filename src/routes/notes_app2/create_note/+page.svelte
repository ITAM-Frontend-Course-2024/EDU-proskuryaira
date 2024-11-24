<script lang="ts">
	import "../../../app.css";
	let note: { id: string; date: string; name: string; content: string } = {
		id: crypto.randomUUID(),
		date: new Date().toLocaleString(),
		name: "Заметка " + new Date().toLocaleString().substring(0, 10),
		content: "Дорогой дневник..."
	};
	async function create_note() {
		let promise = fetch("https://notes.clayenkitten.dev/note/public", {
			method: "POST",
			body: JSON.stringify({ header: note.name, content: note.content }),
			headers: {
				"Content-Type": "application/json"
			}
		});
	}
	function save_note() {
		create_note();
		window.location.href = "/notes_app2/list_of_notes";
	}
</script>

<header>
	<span><a href="/notes_app2"><img class="logo" src="/заметки.png" alt="add" /></a></span>
</header>

<main>
	<div>
		<input bind:value={note.name} placeholder="Название заметки" class="note_name" />
		<a href="/notes_app2/list_of_notes"> Перейти к списку заметок </a>
	</div>

	<div>
		<textarea bind:value={note.content} placeholder="Заметка" class="note" rows="10" cols="30"
		></textarea>
	</div>

	<div>
		<button on:click={save_note}>Сохранить</button>
	</div>
</main>
<footer>
	<span class="f_item">
		<span>Телеграм: <a class="link" href="https://t.me/proskuryaira">tg:proskuryaira</a></span>
		<img
			class="icon"
			src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/1200px-Telegram_2019_Logo.svg.png"
			alt=""
		/>
	</span>
	<span class="f_item">
		<a class="link" href="https://t.me/proskuryaira">Проскурякова Ирина 2024 </a>
		<img
			class="icon"
			src="https://i.pinimg.com/564x/6f/f0/3d/6ff03d9b05ef19a761a821983a8ce68f.jpg"
			alt=""
		/>
	</span>
</footer>

<style lang="scss">
	%color_input {
		background-color: rgb(244, 222, 242);
		color: rgb(93, 2, 60);
	}
	header {
		background-color: rgb(172, 137, 167);
		.logo {
			width: 160px;
		}
	}
	main {
		background-color: rgb(172, 137, 167);
		height: 690px;
		.note_name {
			@extend %color_input;
			height: 30px;
			border-radius: 10%;
		}
		.note {
			@extend %color_input;
			width: 100%;
			height: 300px;
		}
		button {
			height: 32px;
			border-radius: 10%;
			background-color: rgb(255, 240, 254);
			padding: 5px;
		}
	}
	footer {
		background-color: rgb(172, 137, 167);
		color: antiquewhite;
		display: flex;
		text-align: center;
		justify-content: center;
		.icon {
			width: 17px;
			position: relative;
			bottom: -4px;
		}
		.f_item {
			padding: 15px;
		}
		.link {
			color: antiquewhite;
		}
	}
</style>
