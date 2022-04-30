<script lang="ts">
    import Button from "../components/Button.svelte";
    export let active: string;
</script>
<div class="p-2 m-auto w-3/6 flex flex-row justify-center border-b-2 border-red-600 border-solid  text-center">
  <Button on:click active={active === "add todo"}>add todo</Button>
  <Button on:click active={active === "todo list"}>todo list</Button>
</div>