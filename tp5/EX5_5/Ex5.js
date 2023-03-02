const getData=()=>{
    fetch('https://jsonplaceholder.typicode.com/photos').then(res=>res.json()).then(data=>{
        render(data)
    })
}
const render = (data)=>{
    let tmp = "";
    data.forEach(item => {
        tmp += `
        <div class="box">
        <img src="${item.thumbnailUrl}" alt="${item.title}">
        <div class="infor">
            <div>${item.title}</div>
            <div>AlbumId:${item.albumId}</div>
            <div>CategoryId:${item.id}</div>
        </div>
        <a href="/views.html">see more</a>
    </div>  
        `
    })
    document.querySelector('.container').innerHTML = tmp
}
window.addEventListener('load',getData());
