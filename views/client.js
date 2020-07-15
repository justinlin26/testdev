

async function sendtoPage(){
    console.log("hello world!");
const form = document.querySelector('form');

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    const formData = new FormData(form);
    const lname = formData.get('lname');
    const fname = formData.get('fname');
    const cname = formData.get('cname');
    const cdesc = formData.get('cd');
    if(lname.trim()&&fname.trim()&&cname.trim()&&cdesc.trim()){
      const data = {
          lname,
          fname,
          cname,
          cdesc
      } ;
      fetch('https://testdev3.herokuapp.com/create',{
        method:'POST',
        body: JSON.stringify(data),
        headers:{
            'content-type':'application/json'
        }
      });
    }
});
}