const selectTag= document.querySelectorAll("select");
const btn= document.querySelector("button");
const fromText= document.querySelector(".from-text");
const toText= document.querySelector(".to-text");




//todo because of multiple querySelect so forEach is used
selectTag.forEach((tag, index)=>{

    // todo as countries is an object 
for(let code in countries){
let option=document.createElement("option");
option.textContent=countries[code];

//todo having by default
if(index==0){
    if(option.textContent==="English"){
        option.selected=true;
    }
}
if(index==1){
   if(option.textContent==="Nepali"){
        option.selected=true;
    } 
}

option.value=code;
tag.append(option);
    }
});

const translate= async()=>{
   

// todo fetching api
const url=`https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;
const response= await fetch(url);
const data=await response.json();
console.log(data);


};
btn.addEventListener("click",()=>{
 let text=fromText.value;
    // console.log(text); 
let translateFrom=selectTag[0].value;
let translateTo=selectTag[1].value;
// console.log(translateFrom,translateTo);
translate();
toText.textContent=data.matches[2].translation;
});

selectTag[0].addEventListener("change",()=>{

})

