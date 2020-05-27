
const form = document.querySelector('form');

form.addEventListener('submit',(event)=>{
    event.preventDefault;
    const formData = new FormData(form);
    const search = formData.get('search');
    const searchData = {
        search
    };
    
})