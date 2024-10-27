<script>
	import Image from "../../component/image.svelte";
    let display_number  = '';
    let operand;
    let operator;
    const select = (num) => () => (display_number += num);
    const clear = () => (display_number = '')
    let result;
    const operations = (operation) => () => (operand = display_number, display_number = '', operator = operation);
    operand = Number(operand);
    function equals() {
        display_number = Number(display_number);
        if (operator === "+") {
        result = Number(operand) + Number(display_number);
        } else if (operator === "-") {
        result = operand - display_number;
        } else if (operator === "*") {
        result = operand * display_number;
        } else if (operator === "/") {
        result = operand / display_number;
        }
        display_number = result.toString()
    }
</script>

<main>
    <div class = 'calculator'>
        <h1>Calculator</h1>
        <div class = 'display'>{display_number}</div> 
            <div class = "buttons">
                <button on:click={select(7)}>7</button>
                <button on:click={select(8)}>8</button>
                <button on:click={select(9)}>9</button>
                <button on:click={operations('*')}>×</button>
                <button on:click={select(4)}>4</button>
                <button on:click={select(5)}>5</button>
                <button on:click={select(6)}>6</button>
                <button on:click={operations('-')}>-</button>
                <button on:click={select(1)}>1</button>
                <button on:click={select(2)}>2</button>
                <button on:click={select(3)}>3</button>
                <button on:click={operations('+')}>+</button>
                <button on:click={clear}>C</button>
                <button on:click={select('.')}>.</button>
                <button on:click={equals}>=</button>
                <button on:click={operations('/')}>÷</button>
            </div>
    </div>
</main>
<style>
    h1{
        font-family: "Tiny5", sans-serif;
        font-size: 40px;
    }
    main{
        display: grid;
        place-items: center;
        
    }
    .calculator{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-top: 100px;
        background-color: rgb(226, 177, 170);
        background-image: url('/backgroundpink.jpeg');
        /* padding: 100px */
        width: 400px;
        height: 500px;
    }
    .buttons{
        display: grid;
        grid-template-columns: repeat(4, 60px);
    }
    button{
        border-radius: 40%;
        border: none;
        width: 60px; height: 60px;
        box-shadow: 10px 5px 5px rgb(245, 90, 90);
        font-family: "Tiny5", sans-serif;
        font-size: 25px;
    }

    .display{
        height: 56px;
        width: 240px;
        background-color: rgb(231, 92, 92);
        text-align: right;
        font-size: 43px;
        box-shadow: 10px 5px 5px rgb(245, 90, 90);
    }  
</style>