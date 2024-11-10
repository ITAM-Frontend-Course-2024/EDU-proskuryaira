<script lang="ts">
	let notes: Array<{ id: string; name: string; date: string }> = [];

	export function load_notes() {
		const keys = Object.keys(localStorage);
		notes = keys
			.map(key => {
				const note = JSON.parse(localStorage.getItem(key) as string);
				return { id: key, name: note.name, date: note.date, content: note.content };
			})
			.filter(note => note.name);
	}
	load_notes();

	function delete_note(id: string) {
		localStorage.removeItem(id);
		load_notes();
	}
	export let note;

	let searchTerm = "";
	$: filteredNotes = notes.filter(note =>
		note.name.toLowerCase().includes(searchTerm.toLowerCase())
	);
</script>

<header>
	<h1><a href="/notes_app">&#10024 My notes &#10024</a></h1>
	<span><a href="/notes_app"><img class="logo" src="/заметки.png" alt="add" /></a></span>
	<div class="head_elements">
		<input
			type="search"
			id="inputSearch"
			placeholder="Поиск..."
			title="Поиск по названию заметки"
			bind:value={searchTerm}
		/>
		<span class="creat_newnote_button"
			><a href="/notes_app/create_note" title="Создать новую заметку"
				><img width="50px" height="50px" src="/add_circle.png" alt="add" /></a
			></span
		>
	</div>
</header>

<main>
	<ul class="notes">
		{#each filteredNotes as note}
			<li class="note">
				<a href={`/notes_app/${note.id}`} class="a_note">
					<span class="note_name">{note.name}</span>
					<span class="note_date"
						>{note.date.substring(0, 10)}
						{note.date.substring(11, 16)}<span>
							<span class="content">{note.content.substring(0, 800)}</span>
						</span></span
					></a
				>
				<span><button on:click={delete_note(note.id)}>Удалить заметку</button></span>
			</li>
		{/each}
	</ul>
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
	%color_shared {
		background-color: rgb(172, 137, 167);
	}
	header {
		@extend %color_shared;
		color: rgb(245, 239, 219);
		padding: 10px;
		display: flex;
		flex-direction: column;
		align-items: center;
		h1 {
			font-family: "Sofia", cursive;
			font-weight: 400;
			font-style: normal;
			font-size: 44px;
			a {
				text-decoration: none;
			}
		}
		.logo {
			width: 300px;
		}
		a {
			color: rgb(245, 239, 219);
		}
	}
	.head_elements {
		width: 13%;
		display: flex;
		justify-content: space-between;
		#inputSearch {
			height: 44px;
			border-radius: 30%;
			background-color: rgb(244, 222, 242);
		}
	}
	main {
		display: flex;
		margin: 0;
		font-family: Arial, sans-serif;
		background-color: rgb(244, 222, 242);

		.notes {
			// как будто здесь все-таки нужен flexbox...
			display: grid;
			grid-template-columns: 1fr 1fr 1fr 1fr;
			grid-auto-columns: 240px;
			gap: 20px;

			justify-content: stretch;
			.note {
				display: flex;
				flex-direction: column;
				justify-content: stretch;
				transition: transform 0.5s;

				.a_note {
					display: flex;
					flex-direction: column;
					color: #485b4a;
					text-decoration: none;
				}
				.note_name {
					font-size: 20px;
					color: #715b98;
				}
				.note_date {
					color: #715b98;
				}
				.content {
					@extend %color_shared;
					border-radius: 3%;
					height: 300px;
					width: 310px;
					display: flex;
					flex-direction: column;
					font-size: 14px;
					color: rgb(237, 231, 239);
					padding: 5px;
				}
				button {
					margin: 10px;
					width: 310px;
					background-color: rgb(164, 105, 156);
					color: rgb(252, 226, 244);
				}
			}
			.note:hover {
				transform: scale(1.2);
			}
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
