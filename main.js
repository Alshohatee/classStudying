function fetchDate() {
    return  fetch('https://api.kanye.rest')
    .then(response => response.json())
    .then(json=> renderData( json ))

}



function renderData(data) {
    const main = document.getElementById('text')
    console.log(data)
    const p = document.createElement('p')
    p.innerHTML = `<strong> ${data.quote}</strong>`
    main.appendChild(p)

}


document.addEventListener('onclick', function () {
    fetchDate()
})

function fetchDate2() {
    return  fetch('https://michael-scott-quote.herokuapp.com/v1/random')
    .then(response => console.log(response.json()))
    // .then(json=> {
    //     return renderData( json )
    // })

}

function renderData2(data) {
    const main = document.getElementById('text')
        console.log(data)
        const p = document.createElement('p')
        p.innerHTML = `<strong> ${data}</strong>`
        main.appendChild(p)
    
    
}


function getRandomQuote() {
  const quote = document.getElementById("text");
  const http = new XMLHttpRequest();
  const url = "https://michael-scott-quote.herokuapp.com/v1/random";
  http.open("GET", url);
  http.send();

  http.onreadystatechange = function(error) {
    if (this.readyState == 4 && this.status) {
      quote.innerHTML = http.responseText;
    }
  };
}

