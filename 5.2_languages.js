let language= prompt('PLEASE enter you language of choice');

switch(language) {
    case('mandarin'):
    window.alert('Most number of native speakers!')
    break;
    case('spanish'):
    window.alert('2nd place in a number of native speakers')
    break;
    case('english'):
    window.alert('3rd place')
    break;
    case('hindi'):
    window.alert('Number 4')
    break;
    case('arabic'):
    window.alert('5th most spoken language')
    break;
    default:
        window.alert('Not in top 5!')
}