<script lang="ts">
import { createEventDispatcher } from 'svelte';
import jQuery from "jquery";
import { onMount } from 'svelte';
const dispatch = createEventDispatcher();
let formData = {status:[],type:"",task:"",data:""};
    function handleSumnit(e:any|SubmitEvent) {
        e.target.reset();
        dispatch("addDate",formData);
    }
    onMount(()=>{
        jQuery("#addtodo").fadeIn(1000)
	})
</script>
<form class="hidden" id="addtodo" on:submit|preventDefault={handleSumnit}>
    <h1 class="text-4xl p-3 bg-cyan-700 text-cyan-50 mb-5 rounded-lg hover:bg-lime-700">Too do!</h1>
    <div class="flex flex-col">
        <input bind:value={formData.task} class="p-2 m-2" type="text" name="task"  placeholder="Task" required/>
        <input bind:value={formData.data} class="p-2 m-2" type="date" name="data" required/>
        <div class="text-center p-2 m-2">
            <label for="Important" class="label-status">
                <input bind:group={formData.status} type="checkbox" id="Important" name="Important" value="Important" />
                <span class="dot rounded-md Important"></span>
                Important

            </label>
            <label for="immediate" class="label-status">
            <input bind:group={formData.status} class="p-2 m-2" type="checkbox" id="immediate" name="immediate" value="immediate" />
            <span class="dot rounded-md immediate"></span>
            immediate
            </label>
            <label for="notUrgent" class="label-status">
                <input bind:group={formData.status} class="p-2 m-2" type="checkbox" id="notUrgent" name="notUrgent" value="notUrgent" />
                <span class="dot rounded-md notUrgent"></span>
                not urgent
            </label>
        </div>
        <select id="type" name="type" class="p-2 m-2" bind:value={formData.type} required>
            <option value="job">job</option>
            <option value="home" selected>home</option>
            <option value="person">person</option>
        </select>
        <input type="submit" name="Add" value="ADD" class="w-2/6 m-auto p-2 bg-cyan-700 hover:bg-lime-700 text-cyan-50 text-lg font-bold"/>
    </div>
</form>