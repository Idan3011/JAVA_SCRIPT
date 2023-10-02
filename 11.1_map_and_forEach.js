const newReleases = [
    {
      id: 70111470,
      title: 'Die Hard',
      boxart: 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
      uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
      rating: [4.0],
      bookmark: [],
    },
    {
      id: 654356453,
      title: 'Bad Boys',
      boxart: 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
      uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
      rating: [5.0],
      bookmark: [{ id: 432534, time: 65876586 }],
    },
    {
      id: 65432445,
      title: 'The Chamber',
      boxart: 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
      uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
      rating: [4.0],
      bookmark: [],
    },
    {
      id: 675465,
      title: 'Fracture',
      boxart: 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
      uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
      rating: [5.0],
      bookmark: [{ id: 432534, time: 65876586 }],
    },
  ];

function forEachTest (array){
    let idName = [];
    let titleName =[];
    let idAndName =[];
    array.forEach(arr => {
        idName.push(arr.id)
    });
    array.forEach(arr => {
        titleName.push(arr.title);
    });
    idName.forEach(value => {
        const obj = {id: value};
        idAndName.push(obj);
    
    }    
    )
    titleName.forEach(value => {
        const obj = {title: value};
        idAndName.push(obj)
    })
    return idAndName
}

//console.log(forEachTest(newReleases))

function mapTest (array){
    const idAndTitle =[];
    const idName = array.map(arr => {return arr.id});
    const titleName = array.map(arr => {return arr.title});
    for(let i =0; i<idName.length; i++){
        for(let j=0; j<titleName.length; j++){
            const obj = {id: idName[i], title: titleName[j]};
            idAndTitle.push(obj)
        }
        return idAndTitle
    }
    
}

console.log(mapTest(newReleases))
