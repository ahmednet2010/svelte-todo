<script lang="ts">
    export let active: boolean;
</script>

<button on:click|self class="p-3 m-2 font-bold text-2xl text-gray-500 hover:bg-red-600 hover:text-white rounded transition-colors will-change-auto capitalize {active &&'bg-red-600 text-white'}">
    <slot/>
</button>