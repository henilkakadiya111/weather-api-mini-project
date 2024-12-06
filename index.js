let cityname=document.getElementById('name');
let btn=document.getElementById('btn');
let ans=document.getElementById('answer');
let temp=document.getElementById('temp');
let wind=document.getElementById('wind');
let humidity=document.getElementById('humidity');
let description=document.getElementById('description');
let img=document.getElementById('img');
async function hello(city) {
    let apikey='82b3cebfd57ed1aa0a67c6fba9b7e3e2';
    let data= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`);
    let info= await data.json();
    console.log(info);
    if(info.cod==404){
        description.innerText=`Invalid CityName`;
        return;
    }
    temp.innerText=((info.main.temp)-273.15).toFixed(2);
    wind.innerText=info.wind.speed;
    humidity.innerText=info.main.humidity;
    description.innerText=info.weather[0].description;
    
}
btn.addEventListener('click',()=>{
if(cityname.value==null){
    return;
}
hello(cityname.value);
})