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

fetch('status.txt')
  .then(response => {
    if (!response.ok) {
      throw new Error('network response was sab');
    }
    return response.text();
  })
  .then(text => {
    document.querySelector(`#status`).textContent = text;
  })
  .catch(error => {
    document.querySelector(`#status`).textContent = 'failed to load file: ' + error.message;
  });