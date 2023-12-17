let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('btn'));
buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.value){
            case 'equals':
                try{
                    display.value = eval(display.value);
                }catch{
                    display.value = "Error";
                }
                break;
            case 'clear':
                display.value = '';
                break;
            case 'sqrt':
                try{
                    display.value = Math.sqrt(display.value);
                }catch{
                    display.value = "Error";
                }
                break;
            default:
                display.value += e.target.value;
        }
    });
});