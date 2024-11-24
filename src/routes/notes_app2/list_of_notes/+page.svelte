<script lang="ts">
	import "../../../app.css";

	let notes: Array<{ id: string; header: string; createdAt: string }> = [];
	async function list_public() {
		let response = await fetch("https://notes.clayenkitten.dev/note/public", {
			headers: {
				"Content-Type": "application/json"
			}
		});
		let obj = await response.json();
		notes = obj;
	}
	import { onMount } from "svelte";
	onMount(() => {
		list_public();
	});
	let searchTerm = "";
	$: filteredNotes = notes.filter(note =>
		note.header.toLowerCase().includes(searchTerm.toLowerCase())
	);
</script>

<header>
	<h1><a href="/notes_app2">&#10024 My notes &#10024</a></h1>
	<span><a href="/notes_app2"><img class="logo" src="/заметки.png" alt="add" /></a></span>
	<div class="head_elements">
		<input
			type="search"
			id="inputSearch"
			placeholder="Поиск..."
			title="Поиск по названию заметки"
			bind:value={searchTerm}
		/>
		<span class="creat_newnote_button"
			><a href="/notes_app2/create_note" title="Создать новую заметку"
				><img width="50px" height="50px" src="/add_circle.png" alt="add" /></a
			></span
		>
	</div>
</header>

<main>
	<ul class="notes">
		{#each notes as note}
			<li class="note">
				<a href={`/notes_app2/${note.id}`} class="a_note">
					<span class="note_name">{note.header}</span>
					<span class="note_date"
						>{note.createdAt.substring(0, 10)}
						{note.createdAt.substring(11, 16)}<span>
				</a>
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
		height: 60%;
		display: flex;
		margin: 0;
		font-family: Arial, sans-serif;
		background-color: rgb(244, 222, 242);

		.notes {
			display: flex;
			flex-wrap: wrap;
			gap: 80px;

			justify-content: space-between;
			padding: 20px;
			.note {
				display: flex;
				flex-direction: column;
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
				// .content {
				// 	@extend %color_shared;
				// 	border-radius: 3%;
				// 	height: 300px;
				// 	width: 310px;
				// 	display: flex;
				// 	flex-direction: column;
				// 	font-size: 14px;
				// 	color: rgb(237, 231, 239);
				// 	padding: 5px;
				// }
				button {
					margin-top: 10px;
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
