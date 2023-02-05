class ColorRand{
    constructor(){
        this.colorType="Hex";
        this.record=this.getRecord();
        this.lastestColor=this.record!=[]?this.record[this.record.length-1]:" ";
        if(this.lastestColor!=" " &&  this.lastestColor!=null && this.lastestColor!=undefined){
            this.update()
        }
    }
    generate(){
        const hexValue=[1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
        var hexColor='#';
        for (let i=0;i<6;i++){
            var index=Math.floor(Math.random()*hexValue.length);
            hexColor+=hexValue[index];
            
        }
        this.lastestColor=hexColor
        this.update()
        this.save()
    }
    getRecord(){
        return window.localStorage.getItem("colorRecord")!=null?JSON.parse(window.localStorage.getItem("colorRecord")):[];
    }
    reset(){
        this.record=[];
        this.lastestColor="&nbsp;"
        document.querySelector(".colorpalet").innerHTML=""
        document.querySelector(".colorpalet").style.cssText=`--scroll-bar-color:transparent`;
        document.querySelector("#container").style.cssText=`--bg-color:transparent;`
        document.querySelector(".colorCode").innerHTML=this.lastestColor;
        this.save()
    }
    update(){
        document.querySelector(".colorpalet").style.cssText=`--scroll-bar-color:${this.lastestColor};`;
        document.querySelector("#container").style.cssText=`--bg-color:${this.lastestColor};`
        document.querySelector(".colorCode").innerText=this.lastestColor;
        this.record=[...this.record,this.lastestColor];
        let tmpHtml="";
        this.record.forEach(item => {
            tmpHtml+= `<div class="color" style="--color-box-bg:${item};">
            ${item}
            </div>`
        });
        document.querySelector(".colorpalet").innerHTML=tmpHtml;
 

    }
    save(){
        window.localStorage.setItem("colorRecord",JSON.stringify(this.record))
    }
    
    
}
const color=new ColorRand;
document.querySelector(".generate").addEventListener("click",()=>{
    color.generate()
})
document.querySelector(".reset").addEventListener("click",()=>{
    color.reset()
})