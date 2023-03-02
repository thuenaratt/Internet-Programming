/*const loadingTextEle  =document.getElementById("loading-text");
const activityNameEle =document.getElementById("activity-Name");
const activityTypeEle =document.getElementById("activity-type");
const activityPartEle =document.getElementById("Participants");
const activityPriceEle =document.getElementById("Price");
const activitylinkEle =document.getElementById("activity-link");
activityNameEle.innerHTML= " ";
activityTypeEle.innerHTML= " ";
activityPartEle.innerHTML= " ";
activityPriceEle.innerHTML= " ";
activitylinkEle.innerHTML= " ";
function getAnActivity(){
    activityNameEle.innerHTML = " ";
    activityTypeEle.innerHTML= " ";
    activityPartEle.innerHTML=" ";
    activityPriceEle.innerHTML=" ";
    activitylinkEle.innerHTML= " ";
    loadingTextEle.hidden =false;
    wrapper.hidden = false;
    fetch(" https://www.boredapi.com/api/activity")
    .then(async (res) => {
        const data = await res.json();
        activityNameEle.innerHTML = "Learn and play a new card game";
        activityTypeEle.innerHTML = `<i class="fa fa-tag" aria-hidden="true"></i>  Type: `+ data ['type'];
        activityPartEle.innerHTML= `<i class="fa fa-users" aria-hidden="true"></i> participates :  ` + data  ['participants'];
        activityPriceEle.innerHTML = `<i class="fa fa-usd" aria-hidden="true"></i> Price : `  + data ['price'];
        activitylinkEle.innerHTML=  `<i class="fa fa-link" aria-hidden="true"></i> link: `  + data ['link'];
    })
    .finally(()=>{
        loadingTextEle.hidden = true;
    })


    
}*/
let wrap = document.querySelector('#wrapper');

function getAnActivity(){
    wrap.innerHTML=`<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`
    fetch(" https://www.boredapi.com/api/activity").then(async (res) => {
        const data = await res.json();
        const tmp = `
            <div id="activity-Name">${data.activity}</div>
            <div id="activity-type"><i class="fa fa-tags" aria-hidden="true"></i>Type: ${data.type}</div>
            <div id="Participants"><i class="fa fa-users" aria-hidden="true"></i>Participants: ${data.participants}</div>
            <div id="Price"><i class="fa fa-usd" aria-hidden="true"></i>price: ${data.price}</div>
            <div id="activity-link"><i class="fa fa-link" aria-hidden="true"></i>Link: ${data.link}</div> 
        `
        wrap.innerHTML = tmp
    })
}

window.addEventListener("load", getAnActivity)