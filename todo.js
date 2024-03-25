const input=document.getElementById("input");
const list=document.getElementById("li");
function add(){
     if(input.value ===''){
        alert("add something")
     }
     else{
            let li=document.createElement('li');
            li.innerHTML = `${input.value}
            <i class="fa-solid fa-xmark" id="close"></i>`;
            list.appendChild(li);
            li.querySelector("i").addEventListener("click",()=>{
            li.remove();
            save()
            });
            li.addEventListener('click',()=>{
             li.classList.toggle("done");
             save()
             })
     }
   input.value="";
   save()
}
  function save(){
    localStorage.setItem("data",list.innerHTML);
  }
  function show(){
    list.innerHTML=localStorage.getItem("data");
  }
show()
