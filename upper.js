
function str(st){  
    const upp= st.split("").map((item)=>{
       return item.charAt(0).toUpperCase()+item.slice(1)
    })
  return upp.join('');
}

console.log(str("hello js"));