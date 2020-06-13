

function sendtoPage(){
   var query = document.getElementById("search-bar").value;
   const data = {query};
   const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
         'Content-Type':'application/json'
      }
   };
   fetch("/search", options);
}

async function create(){
   
   var ln = document.getElementById("lname").value;
   var fn = document.getElementById("fname").value;
   var cn = document.getElementById("cname").value;
   var cd = document.getElementById("cd").value;
   const data = {ln, fn, cn, cd};
   const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
         'Content-Type':'application/json'
      }
   };
   fetch("/create", options);
}

