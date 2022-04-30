import {writable} from "svelte/store";

const todolist = writable<Data[]>([]);
export default todolist;
