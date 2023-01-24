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
        }
        else{
            heroImage.src = json.image.url;
        }
    });
}