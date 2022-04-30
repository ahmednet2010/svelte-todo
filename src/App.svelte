<script lang="ts">
	import FormTodo from "./lib/FormTodo.svelte";
	import TodoList from "./lib/TodoList.svelte";
	import logo from "./assets/svelte-logo.svg";
	import Showtoggel from "./lib/Showtoggel.svelte";
	export let getDate:any;
	export 	let addDate:any;
	export	let deletDate:any;
	let active = "todo list";
	function changeActive(a:any){
		active = a.target.textContent;
	}
</script>
<main>
	<img src="{logo}" title="" alt="" width="100px" class="m-auto"/>
	<Showtoggel on:click={changeActive} {active}/>
	<div class="container flex flex-row pt-14 m-auto justify-center">
	{#if active === "add todo"}
		<div class="w-3/6 pr-4 pl-4" >
			<FormTodo on:addDate={(e)=>{addDate(e.detail);active="todo list"}}/>
		</div>
	{/if}
	{#if active === "todo list"}
		<div class="w-3/6 pr-4 pl-4">
			<TodoList {getDate} on:addDelet={(id)=>deletDate(id.detail)} on:click={()=>getDate(true)}/>
		</div>
	{/if}
</main>

