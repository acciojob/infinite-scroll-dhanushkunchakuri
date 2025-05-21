//your code here!
let list=document.getElementById("infi-list");
let count=1;

for(let i=1;i<=10;i++){
	let ele=document.createElement("li");
	ele.textContent=`Item ${count++}`;
	list.appendChild(ele);
}

window.addEventListener("scroll",()=>{
	if(window.innerHeight + window.scrollY >= document.body.offsetHeight){
		for(let i=0;i<2;i++){
			let li=document.createElement("li");
			li.textContent = "Item"+count++;
			list.appendChild(i);
		}
	}
	
});
