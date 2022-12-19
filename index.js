let colorBox = document.querySelector(".pallate");
let visitingcard = document.querySelector('.visitingcards')
let bgImage = document.querySelector(".backgroud-image")
let logo = document.querySelector(".background-logo")
let logoAlign = document.querySelector(".logo-align")
let font = document.getElementById('font')
let title = document.querySelector('.title')
let colorBox2 = document.querySelector('.pllate2')
let ownerName = document.querySelector('.owner-name')
let colorBox3 = document.querySelector('.pllate3')
let colorBox4 = document.querySelector('.pllate4')
let address = document.querySelector('.address')

let pllate = [];
let pllate2 = [];
let pllate3 = [];
let pllate4 = [];

for(let i = 0 ; i<20; i++)
{
    pllate[i] = document.createElement("button")
    pllate[i].style.background = `rgb(${Math.floor(Math.random()*255+1)},${Math.floor(Math.random()*255+1)},${Math.floor(Math.random()*255+1)})` ;
    pllate[i].value = pllate[i].style.background;
    colorBox.append(pllate[i])
}
for(let i = 0 ; i<20; i++)
{
    pllate2[i] = document.createElement("button")
    pllate2[i].style.background = `rgb(${Math.floor(Math.random()*255+1)},${Math.floor(Math.random()*255+1)},${Math.floor(Math.random()*255+1)})` ;
    pllate2[i].value = pllate2[i].style.background;
    colorBox2.append(pllate2[i])
}
for(let i = 0 ; i<20; i++)
{
    pllate3[i] = document.createElement("button")
    pllate3[i].style.background = `rgb(${Math.floor(Math.random()*255+1)},${Math.floor(Math.random()*255+1)},${Math.floor(Math.random()*255+1)})` ;
    pllate3[i].value = pllate3[i].style.background;
    colorBox3.append(pllate3[i])
}
for(let i = 0 ; i<20; i++)
{
    pllate4[i] = document.createElement("button")
    pllate4[i].style.background = `rgb(${Math.floor(Math.random()*255+1)},${Math.floor(Math.random()*255+1)},${Math.floor(Math.random()*255+1)})` ;
    pllate4[i].value = pllate4[i].style.background;
    colorBox4.append(pllate4[i])
}



colorBox.addEventListener('click',(event)=>{
    visitingcard.style.background = ""
    visitingcard.style.backgroundColor = event.target.value
    
})
bgImage.addEventListener("change",(event)=>{
   if(event.target.type == "url")
   {
    visitingcard.style.background = `url(${event.target.value})`
    visitingcard.style.backgroundColor = "" 
    visitingcard.style.backgroundSize = "cover"
    visitingcard.style.backgroundPosition = "center"
    event.target.value=""
   }
})

logo.addEventListener("change",(event)=>{
    
if(event.target.type =="url")
{
    visitingcard.firstElementChild.firstElementChild.src = event.target.value 
    event.target.value = ""
}
    
})

logoAlign.addEventListener("click",(event)=>{
  visitingcard.firstElementChild.style.alignSelf = event.target.value
})

document.getElementById('color').addEventListener('input',(event)=>{
    visitingcard.style.backgroundColor = event.target.value 
})


font.addEventListener('input',(event)=>{
   title.style.fontFamily = event.target.value
})

document.getElementById('size').addEventListener("input",(event)=>{
    title.style.fontSize = `${event.target.value}px`
})


colorBox2.addEventListener('click',(event)=>{
    title.style.color = event.target.value
})

document.getElementById('titlecolor').addEventListener('input',(event)=>{
    title.style.color = event.target.value
})

document.getElementById('ownerfont').addEventListener('input',(event)=>{
    ownerName.style.fontFamily = event.target.value

})

colorBox3.addEventListener('click',(event)=>{
    ownerName.style.color = event.target.value
})

document.getElementById('ownersize').addEventListener('input',(event)=>{
    ownerName.style.fontSize = `${event.target.value}px`
})

document.getElementById('ownnercolor').addEventListener('input',(event)=>{
    ownerName.style.color = event.target.value
})

document.getElementById('addressfont').addEventListener('input',(event)=>{
    address.style.fontFamily = event.target.value
})
document.getElementById('addresssize').addEventListener('input',(event)=>{
    address.style.fontSize = `${event.target.value}px`
})
colorBox4.addEventListener('click'||'mouseover',(event)=>{
    address.style.color = event.target.value
})
document.getElementById('addresscolor').addEventListener('input',(event)=>{
    address.style.color = event.target.value
})

let fileBgImage = document.getElementById('bgImage')

var  upImgBg = "";
fileBgImage.addEventListener('input',(event)=>{
    console.log(event.target.value)
    const reader = new FileReader();
    reader.addEventListener("load",()=>{
        upImgBg = reader.result;
        visitingcard.style.background = `url(${upImgBg})`
        visitingcard.style.backgroundPosition = "center"
        visitingcard.style.backgroundSize = "cover"


    });
    reader.readAsDataURL(fileBgImage.files[0])
    fileBgImage.value = ""
}) 

var uplogoImg = ""
let logoIMG = document.getElementById('bgImagelogo')
let img = document.querySelector('img') 
logoIMG.addEventListener('input',(event)=>{
    console.log(event.target.value)
    const reader = new FileReader();
    reader.addEventListener('load',()=>{
        uplogoImg = reader.result
        img.src = uplogoImg
    })
    reader.readAsDataURL(logoIMG.files[0])
    uplogoImg = ""
    logoIMG.value = ""

})