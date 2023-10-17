const lastName = document.querySelector('.last-name');
        const pro = document.querySelector('.pro');

        lastName.addEventListener('mouseover', () => {
            if(lastName){
                lastName.style.color = 'rgb(205, 201, 17)';
                lastName.style.transitionDuration = '0.2s';
            }
            
        })
    lastName.addEventListener('mouseout', () => {
            if(lastName){
                lastName.style.color ='var(--secondary-color)';
                lastName.style.transitionDuration = '0.2s' ;
            }
        })
        document.onload = display()

        
    function display() {
            let i=0;
            let sentence = 'SOFTWARE DEVELOPER.';
            setInterval( () => {
                pro.innerHTML += sentence.charAt(i);
                i++;
                pro.style.transitionDuration = '0.2s'
    },150)
            
}
