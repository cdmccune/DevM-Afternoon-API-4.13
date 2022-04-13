const button = document.querySelector(`button`)

buttonClick = () => {
    // console.log("button clicked")
    // hi = document.createElement("h2")
    // hi.innerHTML = "ajshfdkahsf"
    // document.body.appendChild(hi)

    axios.get("https://swapi.dev/api/planets/?search=Alderaan", )
    .then(res => {
        for (i=0; i<res.data.results[0].residents.length; i++) {
            console.log(res.data.results[0].residents[i])
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

button.addEventListener(`click`, buttonClick)

