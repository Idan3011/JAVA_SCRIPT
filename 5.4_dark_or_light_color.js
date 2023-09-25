let color =prompt('PLEASE enter a dsirable color:');
let colorLowerCase = color.toLowerCase();
let colorOfChoice= ['yellow', 'pink', 'orange', 'blue', 'purple', 'brown'];

console.log(colorLowerCase);

switch(colorLowerCase){
    case colorOfChoice[0]:
    case colorOfChoice[1]:
    case colorOfChoice[2]:
    window.alert('Light Color!!')
    break;
    case colorOfChoice[3]:
    case colorOfChoice[4]:
    case colorOfChoice[5]:
    window.alert('Dark Color!!')
    break;
    default:
    window.alert('Unkown Color')
}