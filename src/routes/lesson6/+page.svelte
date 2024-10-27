<script lang="ts">
    import Counter from "../../component/counter.svelte";
    let isValis: boolean = false;
    let str:string = "123";
    let num:number =  0;
    let arr:number[] = [1, 2, 2];
    let arr_str:string[] = ['1', '2', '2'];
    let a:undefined = undefined;
    let someArray: any[] = [1, 'lala', false];
    function add(a: number, b:number): number{
        return a + b
    }
    let result = add(1, 2)
    console.log(result)
    console.log(add(2, 2))
    // function hello(): void{
    //     console.log("Hello")
    // }

    let id: number | string;
    function printID(id: number | string){
        if (typeof id === "string"){
            console.log("string Id")
        }
        else{
            console.log("NumberId")
        }
        console.log("ID:", id)
    }
    let resultID = printID(1000)
    console.log("hello")

    function PrintSentence(words: string[] | string){
        if (typeof words === "string"){
            console.log(words)
        }else{
            console.log(words.join(" "))
        }
    }
    PrintSentence("Hello, how are u")
    PrintSentence(["Hello", "my", "name"])


    let arr_str1:Array<string> = ['1', '2', '2'] 
        // все равно какого типа входные данные
    function returnAnyThing<T>(num:T):T{
        return num
    }
    
</script>

<div>
    <!-- <Counter handleClick ={hello}/> -->
    hi
</div>