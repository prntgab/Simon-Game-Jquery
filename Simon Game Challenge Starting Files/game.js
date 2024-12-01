let greenBtn = $('#green').click(function(){
    alert("yooo");
});

let redBtn = $('#red').click(function(){
    alert("yooo");
});

let blueBtn = $('#blue').click(function(){
    alert("yooo");
});

let yellowBtn = $('#yellow').click(function(){
    alert("yooo");
});

let randomNumber = () => Math.floor(Math.random() * 4) + 1;

const buttonColor ={
    red: 1,
    blue: 2,
    green: 3,
    yellow: 4   
};


const levelUp = () =>{
    
}



const compareColor = () => {
    const randomNum = randomNumber();
    let colorMatch = 0;

    for(let color in buttonColor){
        if(buttonColor[color] === randNum){
            colorMatch = color;
            break;
        }
    }
    return color;
}
