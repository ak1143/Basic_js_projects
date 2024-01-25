
let input=document.querySelector('input');
let button=document.querySelector('button');
let result=document.querySelector('#result');

async function fetching(){
    try {
        console.log(input.value);
        let url=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=3e293fe309b50799f2f07c1af5b8c1ef`)
        let data=await url.json();
        console.log(data);
        let imgdata = data.weather[0].main;
        console.log(imgdata);
        result.innerHTML=
        `<div class="first">
        <img src="images/${imgdata}.png" alt="" srcset="">
        <h3>${Math.floor(data.main.temp)}</h3>
        <h3>${input.value}</h3>
        </div>
        <div class="second">
        <img src="images/humidity.png" alt="" srcset="">
        <div class="humidity">
            <h3>${data.main.humidity}%</h3>
            <h3>Humidity</h3>
        </div>
        <img src="images/wind.png" alt="">
        <div class="wind">
            <h3>${data.wind.speed}km/hr</h3>
            <h3>Wind Speed</h3>
        </div>
    </div>`
    input.value='';
    } 
    catch{  
       result.innerHTML=`<h4>city name is wrong</h4>`; 
    }
}

button.addEventListener('click',fetching);