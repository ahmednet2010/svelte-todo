import $ from "jquery";
// @ts-ignore
import App from './App.svelte';
import todolist from "./store/Todolist";
import "./App.scss";
const url = "http://localhost:3000/tasks";
let app
$(($:any)=>{
	const getDate:()=>{done:any} =  (order=false) => $.ajax({url: `${url}${order? "?_sort=data":""}`})
	.done((a:any) => todolist.set(a));
	const deletDate:(i:number)=>{done:any} = (i) =>$.ajax({url:`${url}/${i}`,method:"DELETE"})
	.done(()=>getDate());
	const addDate:(e:Data)=>{done:any} = (e) => $.ajax({
		type:"POST",
		url:url,
		data:{
			status:e.status,
			type:e.type,
			task:e.task,
			data:e.data,
			id:Date.now()
		},
		dataType:"json",
		traditional:true
	}).done(()=>getDate());
	app = new App({
		target: document.body,
		props: {
			getDate,
			addDate,
			deletDate
		}
	});
})

export default app;