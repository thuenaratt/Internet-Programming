const selection = document.querySelector('.main');
const listUniversity = document.querySelector('.list-university');

function display(){
  listUniversity.innerHTML="";
  document.querySelector('.lds-ring').style.display="flex"
  fetch(`http://universities.hipolabs.com/search?country=${select.value}`).then((res)=>res.json()).then(data=>{
 
    let univer ="";
    if(data.length>0){
      document.querySelector('.not_found').style.display="none"
      data.forEach(item=>{
        univer+= `
        <div>
            <h4>${item.name}</h4>
            <p>(${item.country}-${ item.alpha_two_code})</p><br>
            <p>
            <a href="${item.web_pages}"><i class="fa fa-globe" aria-hidden="true"></i>
          ${item.domains[0]}</a>
            </p>
        </div>
      `
      })
    }else document.querySelector('.not_found').style.display="block";
    document.querySelector('.lds-ring').style.display="none"

    listUniversity.innerHTML = univer;
  })
}

window.onload=display()



