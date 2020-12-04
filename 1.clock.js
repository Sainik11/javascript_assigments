window.onload = function(){
    
    document.querySelector('.twelveHrs').style.display = '';
    document.querySelector('.twentyFourHrs').style.display = 'none';
    getTwelveHrs();
    getTwentyFourHrs();

    function getTwelveHrs(){
        const currentTime = new Date();
        let hour = currentTime.getHours();
        let min = currentTime.getMinutes();
        let sec = currentTime.getSeconds();
 
        let am_pm = "AM";

        if(hour == 0){
            hour = 12;
        }
    
        if(hour > 12){
            hour = hour - 12;
            am_pm = "PM";
        }
    
        hour = (hour < 10) ? "0" + hour : hour;
        min = (min < 10) ? "0" + min : min;
        sec = (sec < 10) ? "0" + sec : sec;

        document.querySelector(".twelveHrs").innerText = hour + " : " + min + " : " + sec + " " + am_pm;
    
        setInterval(getTwelveHrs);
    }

    function getTwentyFourHrs(){
        const currentTime = new Date();
        let hour = currentTime.getHours();
        let min = currentTime.getMinutes();
        let sec = currentTime.getSeconds();
    
        hour = (hour < 10) ? "0" + hour : hour;
        min = (min < 10) ? "0" + min : min;
        sec = (sec < 10) ? "0" + sec : sec;

        document.querySelector(".twentyFourHrs").innerText = hour + " : " + min + " : " + sec + " ";
        setInterval(getTwentyFourHrs); 
    }
};

function displayTwelveHrs() {
    document.querySelector('.twentyFourHrs').style.display = 'none';
    document.querySelector('.twelveHrs').style.display = '';
}
   
function displayTwentyFourHrs() {
    document.querySelector('.twelveHrs').style.display = 'none';
    document.querySelector('.twentyFourHrs').style.display = '';
}










