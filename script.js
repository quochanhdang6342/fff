const wrapper = document.querySelector(".wrapper"),
selectBtn = wrapper.querySelector(".select-btn"), 
searchInp = wrapper.querySelector("input"), 
options = wrapper.querySelector(".options");  

let countries = ["Australia", "New Zealand", "South Africa"]; 

function addCountry(selectedCountry) { 
    options.innerHTML = "";
    countries.forEach(country => { 
        let isSelected = country == selectedCountry ? "selected" : ""; 
        let li = `<li id="${country}" class="${isSelected}">${country}</li>`; 
        options.insertAdjacentHTML("beforeend", li); 
    });
} 

addCountry();  

function updateName(selectedLi) { 
    searchInp.value = ""; 
    addCountry(selectedLi.innerText); 
    wrapper.classList.remove("active"); 
    selectBtn.firstElementChild.innerText = selectedLi.innerText; 
} 

searchInp.addEventListener("keyup", () => { 
    let arr = []; 
    let searchWord = searchInp.value.toLowerCase(); 
    arr = countries.filter(data => { 
        return data.toLowerCase().startsWith(searchWord); 
    }).map(data => { 
        let isSelected = data == selectBtn.firstElementChild.innerText ? "selected" : ""; 
        return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`; 
    }).join(""); 
    options.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Oops! Country not found</p>`; 
});  

selectBtn.addEventListener("click", () => wrapper.classList.toggle("active")); 

let domain = window.location.hostname; // fetch the domain

document.getElementById("Australia").onclick = function () { 
    location.href = "https://cmtrck.com/link.php?affid=11472&campid=6723&screid=6553&subid="+domain; 
};

document.getElementById("New Zealand").onclick = function () { 
    location.href = "https://cmtrck.com/link.php?affid=11472&campid=6723&screid=6553&subid="+domain; 
};

document.getElementById("South Africa").onclick = function () { 
    location.href = "https://www.sailgeneral.com/299P9SR4/TG8K9TW/?sub1="+domain; 
};