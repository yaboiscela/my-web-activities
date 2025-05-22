
function Button2(){

/*     let count = 0;

    const handleClick = (name) => {
        if(count < 3){
            count++;
            console.log(`${name} you clicked me ${count} time/s`)
        }
        else{
            console.log(`${name} stop clicking me!`);
        }
    };

    return(<button onClick={() => handleClick ("Scela")}>click me</button>) */

    const handleClick = (e) => e.target.textContent = "Ouch";

    return(<button onClick={(e) => handleClick(e)}>click me</button>);

    
}
export default Button2