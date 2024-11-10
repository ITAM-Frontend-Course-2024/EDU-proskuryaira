<script lang="ts">
	let note: { id: string; date: string; name: string; content: string } = {
		id: crypto.randomUUID(),
		date: new Date().toLocaleString(),
		name: "",
		content: ""
	};
	function save_note() {
		const newNote = {
			id: crypto.randomUUID(),
			date: new Date().toLocaleString("sv-SE", { timeZone: "Europe/Moscow" }),
			name: note.name,
			content: note.content
		};
		if (newNote.name && !localStorage.getItem(newNote.id)) {
			localStorage.setItem(newNote.id, JSON.stringify(newNote));
		}
	}
</script>

<header>
	<span><a href="/notes_app"><img class="logo" src="/заметки.png" alt="add" /></a></span>
</header>

<main>
	<div>
		<input bind:value={note.name} placeholder="Название заметки" class="note_name" />
	</div>

	<div>
		<textarea bind:value={note.content} placeholder="Заметка" class="note" rows="10" cols="30"
		></textarea>
	</div>

	<div>
		<a href="/notes_app/list_of_notes">
			<button on:click={save_note}>Сохранить</button>
		</a>
		<a href="/notes_app/list_of_notes">
			<button>Перейти к списку заметок</button>
		</a>
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
		height: 666px;
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
