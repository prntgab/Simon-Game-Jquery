$(document).ready(function(){
    let greenBtn = $('#green').click(function(){
        alert("yooo");
        return 3;
    });

     $('#red').click(function(){
        return 1;
    });
    let redBtn =    $('.red').css({
        "-webkit-box-shadow": "inset -1px -1px 99px 25px #FFFFFF", 
        "box-shadow": "inset -1px -1px 99px 25px #FFFFFF"
    });
    
    let blueBtn = $('#blue').click(function(){
        alert("yooo");
        return 2;
    });

    let yellowBtn = $('#yellow').click(function(){
        const matchedColors = findColor(array, buttonColor); 
        return 4;
       
    });
});
//yellow = start
//blue next level

let randomNumber = () => Math.floor(Math.random() * 4) + 1;

const buttonColor ={
    red: 1,
    blue: 2,
    green: 3,
    yellow: 4   
};



let levelUp = () =>{
    let arrColor = [];
    for(let i = 0; i < 4; i++){ 
        randomNumber();
        arrColor.push(randomNumber())
    }
    return arrColor;
}

let array = levelUp();

let findColor = (arr, obj) => {
    let result = [];
    for(let i = 0; i < arr.length; i++){
        for(const key in obj){
            if(obj[key] === arr[i]){
                result.push(key)
            }
        }
    }
    for (const key in obj)
        $(`#${key}`).css("color", "#FFFFFF"); //this where i finsih
    console.log(result);
    return result;
}

let simonSaysDelay = async (arr) => {
    for(let i = 0; i < arr.length; i++ ){
       
    }
}






// const compareColor = () => {
//     const randomNum = randomNumber();
//     let colorMatch = 0;

//     for(let color in buttonColor){
//         if(buttonColor[color] === randNum){
//             colorMatch = color;
//             break;
//         }
//     }
//     return color;
// }
