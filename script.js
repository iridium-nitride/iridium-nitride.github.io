fetch('article.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector(`article`).innerHTML = data;
    })
    .catch(error => console.error(`There was an error fetching the article:`, error));

fetch('aside.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector(`aside`).innerHTML = data;
        updateLocalTime();
        setInterval(updateLocalTime, 60000);
    })
    .catch(error => console.error(`There was an error fetching the aside:`, error));

function updateLocalTime() {
    const now = new Date();
    const options = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: 'Australia/Brisbane'
    };
    const brisbaneTime = now.toLocaleTimeString('en-AU', options);
    document.querySelector('#localtime').textContent = brisbaneTime;
}