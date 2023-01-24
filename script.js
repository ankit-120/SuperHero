// const searchHero = () =>{
    //     const name = document.getElementById('searchByName').value;
//     console.log(name);
//     let p = fetch(`${baseUrl}/search/${name}`);
//     p.then(resp => {
//         return resp.json();
//     }).then(json => {
//         console.log(json.results[0]);
//         heroImage.src = json.results[0].image.url;
//     })
// }

//API for superheroes
const baseUrl = 'https://www.superheroapi.com/api.php/2338622222982775';
//target the image tag
const heroImage = document.getElementById('heroImage');

//target the searchByNameBtn
const searchByNameBtn = document.getElementById('searchByNameBtn');
searchByNameBtn.onclick = () =>{
    const name = document.getElementById('searchByName').value;
    searchHero(name,0);
}

//target the searchByIdBtn
const searchByIdBtn = document.getElementById('searchByIdBtn');
searchByIdBtn.onclick = () =>{
    const id = document.getElementById('searchById').value;
    searchHero('',id);
}


const createStats = (str,obj) =>{
    const stats = document.getElementById('stats');
    str += `name : ${obj.name}<br>`;
    str += `id : ${obj.id}<br>`;
    const biography = Object.values(obj.biography);
    str += `full-name : ${biography[0]}<br>`
    str += `place-of-birth : ${biography[3]}<br>`
    str += `first-appearance : ${biography[4]}<br>`
    str += `publisher : ${biography[5]}<br>`
    str += `alignment : ${biography[6]}<br>`
    const powerstats = Object.keys(obj.powerstats);
    powerstats.forEach(item => {
        str += `${item} : ${obj.powerstats[item]}<br>`;
    });
    stats.innerHTML = str;
}

//main function to search hero
const searchHero = (name,id) =>{
    let p;
    if(id==0){
        p = fetch(`${baseUrl}/search/${name}`);
    }
    else{
        p = fetch(`${baseUrl}/${id}`)
    }
    p.then(resp => {
        return resp.json();
    }).then(json => {
        if(id==0){
            heroImage.src = json.results[0].image.url;
            createStats('',json.results[0]);
            // const powerstats = Object.keys(json.results[0].powerstats);
            // console.log(powerstats);

            // powerstats.forEach(item => {
            //     statsString += `${item} ${json.results[0].powerstats[item]}<br>`;
            // });
            // console.log(statsString);
            // stats.innerHTML = statsString;
        }
        else{
            heroImage.src = json.image.url;
        }
    });
}