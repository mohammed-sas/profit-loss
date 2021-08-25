const costPrice = document.querySelector("#cost-price");
const numShares = document.querySelector("#no-of-shares");
const sellingPrice = document.querySelector("#selling-price");
const outputDiv = document.querySelector("#output");
const submitBtn = document.querySelector("#submit-btn");
const imgDiv = document.querySelector("#image-div");

submitBtn.addEventListener("click", profitLoss);
function profitGif(){
    imgDiv.style.display="block";
imgDiv.innerHTML="<img src=images/money.gif>";
}

function lossGif(){
    imgDiv.style.display="block";
    imgDiv.innerHTML="<img src=images/money-loss.gif>"
}
function profitLoss() {
    imgDiv.style.display="none";
    let cp = Number(costPrice.value);
    let shares = Number(numShares.value);
    let sp = Number(sellingPrice.value);
    if(cp <=0 || shares <=0 || sp <=0){
        alert("Enter positive values");
        return;
    }
    if (sp > cp) {
        let profit = sp - cp;
        let profitPercentage = (profit / cp) * 100;
        let totalProfit = profit * shares;
        let text = "The profit gained is Rs." + totalProfit + "/- and the profit percentage is " + profitPercentage + "%";
        profitGif();
        display(text, "green");
    } else if (cp > sp) {
        let loss = cp - sp;
        let lossPercentage = (loss / cp) * 100;
        let text = "The loss is Rs." + loss*shares + "/- and the loss percentage is " + lossPercentage + "%";
        lossGif();
        display(text, "red");

    } else {
        let text ="Neither a loss nor a profit";
        display(text,"black");
    }

}

function display(text, color) {
    outputDiv.style.color = color;
    outputDiv.innerText = text;

}