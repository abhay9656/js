
function str(st){
    var sp=st.split("")
    const upp= sp.map((item)=>{
       return item.toUpperCase()
    })
console.log(upp);
}

console.log(str("Hello"));