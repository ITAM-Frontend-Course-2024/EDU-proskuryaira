<main>
	<h1><a href="/notes_app">&#10024 My notes &#10024</a></h1>
	<span
		><a href="/notes_app/list_of_notes"
			><img width="90%" height="90%" src="/заметки.png" alt="add" /></a
		></span
	>
	<div>
		<a href="/notes_app/create_note"><button>Создать заметочку</button></a>
		<a href="/notes_app/list_of_notes"><button>Все заметочки</button> </a>
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
	a {
		text-decoration: non;
	}
	main {
		background-color: rgb(172, 137, 167);
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 800px;
		justify-content: center;
		a {
			text-decoration: none;
			color: antiquewhite;
		}
		h1 {
			font-family: "Sofia", cursive;
			font-weight: 400;
			font-style: normal;
			font-size: 54px;
		}
		button {
			border-radius: 39%;
			height: 33px;
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
