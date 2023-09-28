let sentece ='Hello World!';
function isString(str,func){
    if(typeof str ==='string'){
        func()
    } else{
        console.log(`${str} isnt a string`)
    }
}

function string(){
    console.log(sentece)
}

isString(sentece,string)