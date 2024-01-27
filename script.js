function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourHand = document.getElementById('hour-hand');
    const minuteHand = document.getElementById('minute-hand');
    const secondHand = document.getElementById('second-hand');

    //calculate angles for watch hamds 

    const hourAngle = (hours % 12 + minutes / 60) * 30;
    const minuteAngle = (minutes + seconds / 60) * 6;
    const secondAngle = seconds * 6;

    //Apply rotation to watch hands with smooth transitions

    hourHand.style.transform = `translate(-50%, -100%) rotate(${hourAngle}deg)`;
    minuteHand.style.transform = `translate(-50%, -100%) rotate(${minuteAngle}deg)`;
    secondHand.style.transform = `translate(-50%, -100%) rotate(${secondAngle}deg)`;
}

   //Initial update to avoid delay in displaying the hands
   
   updateClock();

   //Update clock every second

   setInterval(updateClock, 1000);


   

  