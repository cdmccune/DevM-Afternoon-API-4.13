const residentsButton = document.querySelector(`#residents`)
const filmsButton = document.querySelector(`#films`)
const climateButton = document.querySelector(`#climate`)

residentsClick = () => {
    axios.get("https://swapi.dev/api/planets/?search=Alderaan", )
    .then(res => {
        for (i=0; i<res.data.results[0].residents.length; i++) {
            console.log(res.data.results[0])
            axios.get(`${res.data.results[0].residents[i]}`)
            .then(res => {
                console.log(res.data.name)
                let h2 = document.createElement("h2")
                h2.innerHTML = `${res.data.name}`
                document.body.appendChild(h2)
            })
        }
    })
}

climateClick = () => {
    axios.get("https://swapi.dev/api/planets/?search=Alderaan", )
    .then(res => {
        console.log(res.data.results[0].climate)
        let h2 = document.createElement("h2")
        h2.innerHTML = `Alderaan is ${res.data.results[0].climate}`
        document.body.appendChild(h2)
    })
}

filmsClick = () => {
    axios.get("https://swapi.dev/api/planets/?search=Alderaan", )
    .then(res => {
        for (i=0; i<res.data.results[0].films.length; i++) {
            axios.get(`${res.data.results[0].films[i]}`)
            .then(res => {
                console.log(res.data.title)
                let h2 = document.createElement("h2")
                h2.innerHTML = `${res.data.title}`
                document.body.appendChild(h2)
            })
        }
    })
}

residentsButton.addEventListener(`click`, residentsClick)
climateButton.addEventListener(`click`, climateClick)
filmsButton.addEventListener(`click`, filmsClick)

