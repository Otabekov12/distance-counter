var elForm = document.querySelector('.form');
var elInput = document.querySelector('.input');
var elError = document.querySelector('.error__text')
var elFootResult = document.querySelector('.foot__result');
var elBikeResult = document.querySelector('.bike__result');
var elCarResult = document.querySelector('.car__result');
var elPlaneResult = document.querySelector('.plane__result');

var ON_FOOT_SPEED = 3.6;
var BIKE_SPEED = 20.1;
var CAR_SPEED = 70;
var PLANE_SPEED = 800;

function calculateTime(distance, speed){
    var hour = Math.floor(distance / speed);
    var minute = Math.floor((distance / speed - hour)*60);
    var secund = Math.floor(((distance / speed - hour)*60 - minute)*60);
    
    if (hour === 0) {
        return minute + ' minut ' + secund + ' secund';
    } else {
        return hour + ' soat ' + minute + ' minut ' + secund + ' secund';
    }

}

elForm.addEventListener('submit', function(evt){
    evt.preventDefault();
    
    var inputValue =Number(elInput.value.trim());
    elInput.value =null;
    
    if(inputValue <= 0 || isNaN(inputValue)){
        alert("Xatolik yuzberdi !!!")
    }
    
    elFootResult.textContent = calculateTime(inputValue, ON_FOOT_SPEED)
    elBikeResult.textContent = calculateTime(inputValue, BIKE_SPEED  )
    elCarResult.textContent = calculateTime(inputValue,  CAR_SPEED )
    elPlaneResult.textContent = calculateTime(inputValue, PLANE_SPEED)
})