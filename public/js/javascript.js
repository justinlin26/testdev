

async function sendtoPage(){
   console.log("hello");
  document.location.href = 'http://testdev3.herokuapp.com/search';
}

async function create(){
   console.log("hello");
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

