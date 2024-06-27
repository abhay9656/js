
function str(st){  
   return st.split(" ").map((item)=>{
       return item.charAt(0).toUpperCase()+item.slice(1)
    }).join(' ')
}

console.log(str("hello js"));

