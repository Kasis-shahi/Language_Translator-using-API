const selectTag = document.querySelectorAll("select");
const btn = document.querySelector("button");
const fromText = document.querySelector(".from-text");
const toText = document.querySelector(".to-text");
const restart = document.querySelector(".restart");




//todo because of multiple querySelect so forEach is used
selectTag.forEach((tag, index) => {

    // todo as countries is an object 
    for (let code in countries) {
        let option = document.createElement("option");
        option.textContent = countries[code];

        //todo having by default
        if (index == 0) {
            if (option.textContent === "English") {
                option.selected = true;
            }
        }
        if (index == 1) {
            if (option.textContent === "Nepali") {
                option.selected = true;
            }
        }

        option.value = code;
        tag.append(option);
    }
});

//todo main api function 
const translate = async (texts, translateFroms, translateTos) => {
    // todo fetching api
    const url = `https://api.mymemory.translated.net/get?q=${texts}&langpair=${translateFroms}|${translateTos}`;
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    return data;


};
//todo to use btn
btn.addEventListener("click", async () => {
    let text = fromText.value;
    // console.log(text); 
    let translateFrom = selectTag[0].value;
    let translateTo = selectTag[1].value;
    // console.log(translateFrom,translateTo);
    //todo translate function ko value use garna
    // translate(text,translateFrom,translateTo);
    //todo now i can use data
    let data = await translate(text, translateFrom, translateTo);
    toText.value = data.matches[2].translation;
});

//todo while it is triggering
selectTag[0].addEventListener("change", async () => {
    let text = fromText.value;
    // console.log(text); 
    let translateFrom = selectTag[1].value;
    let translateTo = selectTag[0].value;


    let data = await translate(text, translateFrom, translateTo);
    console.log(data);
    fromText.value = data.matches[0].translation;

    

   
    


});


