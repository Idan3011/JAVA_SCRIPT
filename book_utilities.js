const book1 = {
    name: '5 AM Club',
    author: 'Robin Sharma',
    publish: 2018
}

const book2 = {
    name: 'atomic habits',
    author: 'James Clear',
    publish: 2019
}

let bookUtils = {
    getFirstPublished() {
        const {publish}=this;
        if(book1.publish< book2.publish) {
            console.log(book1.publish)
        } else{
            console.log(book2.publish)
        }
    },
    setNewEdition(obj, k, v) {
        const {publish}=this;
        const copy = {...obj};
        copy[k]=v;
        return copy;          
    },
    setLanguage(obj, k, v){
        const copy = {...obj};
        copy[k]=v;
        return copy
    },
    setTranslation(obj, k, v){
     if(!obj[k]){
        obj[k]={};
     }
     Object.assign(obj[k], v)
},
    setPublisher(obj, k, v){
        const {name, publish, author} =this;
    if(!obj[k]) {
        obj[k]={};
    }
    Object.assign(obj[k],v)
}
}

//bookUtils.getFirstPublished();
const res = bookUtils.setNewEdition(book1, 'publish' , 2020 );
//console.log(res)
const res1 = bookUtils.setLanguage(book2, 'language' , 'English' );
//console.log(res1)

bookUtils.setTranslation(book1, 'translation' , {'language': 'English', 'translation': 'Spanish'});

//console.log(book1);

bookUtils.setPublisher(book2, 'Publisher',{name: 'Atomic Habit', publish: 2018 })

console.log(book2)
