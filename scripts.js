
fetch('https://ghibliapi.herokuapp.com/films')
    .then(response =>{
        return response.json()
    })
    .then(data =>{
        data.forEach(movie => { 
            console.log(movie.title)
        });
    })
    .catch(err=>{
        console.log("Error")
    })











// const request = new XMLHttpRequest()

// request.open('GET',  'https://ghibliapi.herokuapp.com/films', true)

// request.onload = function(){
//     let data = JSON.parse(this.response)

//     data.forEach(movie => {
        
//         console.log(movie.title)
//     });

// }

// request.send()