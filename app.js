const buttons= document.querySelectorAll('button');
const screen= document.getElementById('screen');
for (let btn of buttons)
{
    btn.addEventListener('click', (e)=> {
        const buttonText=e.target.innerText;
        
        if (buttonText==='x')
        {
            screen.value += '*';
        }
        else if (buttonText === 'C')
        {
            screen.value = "";
        }
        else if (buttonText=== '=')
        {
            screen.value= eval(screen.value);
        }
        else 
        {
            screen.value += buttonText;
        }
    })
}