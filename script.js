let batteryLevel =50;
let isDay = true;
let isLightOn = false;
let isWorking;
console.log("Daytime? ");
console.log(isDay);
console.log("Lights on? ");
console.log(isLightOn);
isDay=false;
isLightOn=!isDay;
console.log("Battery level?");
console.log(batteryLevel +"%");
isWorking=(isLightOn ===true)&&(batteryLevel >0);
console.log("Everything working?");
console.log(isWorking);
