const mainDiv = document.getElementById('app');
const textArea = document.getElementById("MainText");
const dateTitle = document.getElementById("date");
const searchIconLocation = "./images/";
const searchIcon = document.getElementById("searchIcon");
let date = new Date().toUTCString().slice(5, 16);
let clockMode = true;

dateTitle.innerHTML = `${date}`;

document.addEventListener('keypress',(e)=>{
    textArea.focus();
    if(clockMode){
        clockMode = false
        textArea.value = ""
        mainDiv.classList.toggle("google");
    }
    if(e.key == 'Enter' && !clockMode){
        let dataSet = textArea.value.split(" ")
        let theUrl = ""
        if(mainDiv.classList[1] == "google"){
            console.log(dataSet.slice(0))
            if(dataSet.slice(0)[0] == 'g:' || dataSet.slice(0)[0] == 'G:'){
                dataSet = dataSet.slice(1)
            }
            theUrl = dataSet.join("+").toLowerCase();
            window.location.href = `https://www.google.com/search?q=${theUrl}`
        }
        else if(mainDiv.classList[1] == "youtube"){
            dataSet = dataSet.slice(1)
            theUrl = dataSet.join("+").toLowerCase();
            if(theUrl != ""){window.location.href = `https://www.youtube.com/results?search_query=${theUrl}`}
            else{window.location.href = 'https://www.youtube.com'}
        }
        else if(mainDiv.classList[1] == "spotify"){
            dataSet = dataSet.slice(1)
            theUrl = dataSet.join("%20").toLowerCase();
            if(theUrl != ""){window.location.href = `https://open.spotify.com/search/${theUrl}`}
            else{window.location.href = 'https://www.spotify.com'}
        }
        else if(mainDiv.classList[1] == "github"){
            window.location.href = `https://github.com/`
        }
        else if(mainDiv.classList[1] == "twitter"){
            window.location.href = `https://twitter.com/`
        }
        else if(mainDiv.classList[1] == "facebook"){
            window.location.href = `https://facebook.com/`
        }
        else if(mainDiv.classList[1] == "instagram"){
            window.location.href = `https://instagram.com/`
        }
    }
})
const setMainTextAsTime = () =>{
    function addZero(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }
    const theDate = new Date();
    textArea.value = `${theDate.getHours()}:${addZero(theDate.getMinutes())}:${addZero(theDate.getSeconds())}`; 
}

const update = () =>{
    if(!clockMode){
        searchIcon.src = `./images/${mainDiv.classList[1]}.svg`;
        searchIcon.style.opacity = "100%";
    }
    else if(clockMode){searchIcon.style.opacity = "0"}
    if(textArea.value == ""){
        clockMode = true;
        mainDiv.className = "app";  
        textArea.blur();  
    }
    else if(textArea.value.split(" ")[0] == "y:" ||
     textArea.value.toLowerCase() == "youtube"||
     textArea.value.split(" ")[0] == "י:"||
     textArea.value.toLowerCase() == "יוטיוב"){
        mainDiv.classList.replace("google","youtube")
    }
    else if(textArea.value.split(" ")[0] == "s:" ||
     textArea.value.toLowerCase() == "spotify"||
     textArea.value.split(" ")[0] == "ס:"||
     textArea.value.toLowerCase() == "ספוטיפי"){
        mainDiv.classList.replace("google","spotify")
    }
    else if(textArea.value.toLowerCase() == "github"||
    textArea.value.toLowerCase() == "גיטהב"){
        mainDiv.classList.replace("google","github")
    }
    else if(textArea.value.toLowerCase() == "twitter"||
    textArea.value.toLowerCase() == "טוויטר"){
        mainDiv.classList.replace("google","twitter")
    }
    else if(textArea.value.toLowerCase() == "facebook"||
    textArea.value.toLowerCase() == "פייסבוק"){
        mainDiv.classList.replace("google","facebook")
    }
    else if(textArea.value.toLowerCase() == "instagram"||
    textArea.value.toLowerCase() == "אינסטגרם"){
        mainDiv.classList.replace("google","instagram")
    }
    else if(!clockMode || textArea.value.split(" ")[0] == "g:"){
        mainDiv.className = "app google";   
    }
    if(clockMode){setInterval(setMainTextAsTime(),1000)}
}

setInterval(update)