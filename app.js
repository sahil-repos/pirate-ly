//contants,inputs
var btn = document.querySelector("#btn-check");
var txt_input = document.querySelector("#txt-input");
var txt_output = document.querySelector("#txt-output");
var api_url = "https://api.funtranslations.com/translate/pirate.json";

//append text to complete api url
function createApiUrl(text)
{
    return(api_url+"?text="+text);
}

function errorHandler(error)
{
    alert("Unexpected error: "+error);
}

//fetch api for pirate call
async function fetchText(url) {
    try{
        let response = await fetch(url);

        console.log(response.status); // 200
        console.log(response.statusText); // OK

        if (response.status === 200) {
            let data = await response.json();
            txt_output.innerText=data.contents.translated
            // handle data
        }else{
            alert(response.statusText);
        }
        }
    catch(error){
        console.log(error)
    }
}

function setPiratedText(){
    fetchText(createApiUrl(txt_input.value));
}

btn = btn.addEventListener("click",setPiratedText);

