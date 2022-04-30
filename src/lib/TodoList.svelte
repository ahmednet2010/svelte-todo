<script lang="ts">
    import Skeleton from "./Skeleton.svelte";
    import todolist from "../store/Todolist";
    import jQuery from "jquery";
	import { onMount, onDestroy } from 'svelte';
    import { createEventDispatcher } from 'svelte';
    export let getDate: any;
    let Timeout:NodeJS.Timeout;
    onMount(()=>{
	Timeout =	setTimeout(() => {
			getDate().done((a:any) => {
				todolist.set(a)
			})
		}, 5000)
        jQuery("#todo").fadeIn(1000)
	})
    onDestroy(()=>{
        clearTimeout(Timeout);
    })
    const dispatch = createEventDispatcher();
    function deletDateEvent(id:number){
        dispatch("addDelet",id);
    }
</script>

<ul id="todo" class="hidden">
    {#if $todolist &&  $todolist.length > 0 }
    {#each $todolist as Task (Task.id)}
        <li class='text-xl capitalize {Task.type} p-2 mb-2 rounded-xl text-stone-50 relative'>
            <span class="tooltip text-center inline-block w-2/6 whitespace-nowrap text-ellipsis overflow-hidden">{Task.task}
                <span class="tooltiptext p-2">{Task.task}</span>
            </span>
            <span class="text-center inline-block w-2/6">
                {#if Task.status}
                {#if Array.isArray(Task.status)}
                {#each Task.status as status,index (index)}
                    <span class="inline text-sm {status}">{status}</span>
                {/each}
                {:else}
                <span class="inline text-sm {Task.status}">{Task.status}</span>
                {/if}
                {/if}
            </span>
            <span class="inline-block w-1/6 text-center" on:click|self>{Task.data}</span>
            <span class="inline-block w-auto text-right">
                Delete
                <input type="checkbox" on:click={deletDateEvent.bind(null,Task.id)}/>
            </span>
            
        </li>
        {/each}
    {:else}
        <Skeleton num={5}/>
    {/if}	
</ul>