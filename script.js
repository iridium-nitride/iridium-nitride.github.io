function timeUpdate(){
    const options = {
        timeZone: 'Australia/Brisbane',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false 
    };
    const time = new Date().toLocaleTimeString('en-AU', options);
    document.querySelector('#localTime').textContent = time;
}
timeUpdate();
setInterval(timeUpdate, 1000);