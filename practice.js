let boxes = document.querySelectorAll(".box");
let resetBtn =  document.querySelector("#resetbtn");
let newBtn =  document.querySelector("#newbtn");
let winMsg = document.querySelector(".winblock");
let winMsgPara = document.querySelector(".winpara");
let turn = true;
let winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if(turn){
            box.innerHTML = "<h1>O</h1>";
            turn = false;

        }
        else
        {
            box.innerHTML = "<h1>X</h1>";
            turn = true;
        }
        box.disabled = true;
        checkPattern();

    })
})
let disableFun = () => {
    for(let box of boxes){
        box.disabled=true;
    }
    
}
let enableFun = () => {
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
    winMsg.style.display="none";
}
let showWinner = (winner) => {
    winMsgPara.innerText = `Congratulations the winner is ${winner}`;
    winMsg.style.display="flex";
 disableFun();
  
}
let checkPattern = () => {
     for(pattern of winPatterns){
          let pose1 =  boxes[pattern[0]].innerText;
           let pose2 = boxes[pattern[1]].innerText;
         let pose3 = boxes[pattern[2]].innerText;
         if ( pose1 != "" && pose2 != "" && pose3 != "" ){
            if(pose1 == pose2 && pose2 === pose3){
             showWinner(pose1);
            }
         }
     }
}
resetBtn.addEventListener("click", enableFun);
newBtn.addEventListener("click", enableFun);
