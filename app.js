





let input = document.querySelector('input');
let btn = document.querySelector('button');

let list = document.querySelector('#list');


//button press karke search karna
btn.addEventListener('click' , function(){
    let searchText = input.value;
    // console.log(searchText);
    let data = fetchData(searchText);
    input.value = '';
})


//api call karna and shoe karna
function fetchData(searchText){
    // console.log("function chal gya");
    axios.get(`https://api.tvmaze.com/search/shows?q=${searchText}`)
      .then(function(response){
        console.log(response.data);
        manipulateDom(response.data);
      })

}

//dom change karega cheezen
function manipulateDom(datas){//datas ke andar hai array

    //remove already present movies
    while(list.firstChild){
        list.firstChild.remove();
    }
    
    //add
    for(let data of datas){
        let figure = document.createElement('figure');

        if(data.show.image){
            figure.innerHTML = `
            <img src=${data.show.image.original} />
            <h2>${data.show.name}</h2>
            
            `
            list.appendChild(figure);
        }
    }
}


{/* <p>${data.show.summary}</p> */}
















