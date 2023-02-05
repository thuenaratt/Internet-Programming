class Counter{
    constructor(number){
        this.number=number!=null || number!=undefined ?number:0;
        document.querySelector(".counter").innerText=this.number;
    }
    increase(){
        this.number++;
        this.update()
    }
    decrease(){
        this.number>0 ?this.number--:this.number=0;
        this.update()
    }
    reset(){
        this.number=0;
        this.update()
    }
    update(){
        document.querySelector(".counter").innerText=this.number;
        this.save()
    }
    save(){
        window.localStorage.setItem("num",this.number)
    }
}

let counter=new Counter(window.localStorage.getItem("num")!=null?window.localStorage.getItem("num"):0);
document.querySelector(".Decrease").addEventListener("click",()=>{
    counter.decrease();
})
document.querySelector(".Reset").addEventListener("click",()=>{
    counter.reset();
})
document.querySelector(".Increase").addEventListener("click",()=>{
    counter.increase();
})
