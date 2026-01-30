const currencyfirst=document.getElementById("currencyfirst");
const currencyfirstworth=document.getElementById("worthfirst");

const currencysecand=document.getElementById("currencysecand");
const currencysecandworth=document.getElementById("worthsecand");

const exchangerate=document.getElementById("exchangerate")
updaterate()

function updaterate(){
    fetch(`https://v6.exchangerate-api.com/v6/4684a5904837ecc79d6560bf/latest/${currencyfirst.value}`).then((res)=>res.json()).then((data)=>{
        const rate=data.conversion_rates[currencysecand.value]
        console.log(rate)
        exchangerate.innerText=`1 ${currencyfirst.value}= ${ rate + " "+currencysecand.value}`

        currencysecandworth.value=(currencyfirstworth.value* rate).toFixed(2)
})
}





currencyfirst.addEventListener("change",updaterate)


currencysecand.addEventListener("change",updaterate)

currencyfirstworth.addEventListener("change",updaterate)