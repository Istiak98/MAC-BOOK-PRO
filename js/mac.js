 /*-----Memory Part-----*/
const gb8 = document.getElementById("gb-8");
const gb16 = document.getElementById("gb-16");

 /*-----Storage Part-----*/
const st256 =document.getElementById("st-256");
const st512=document.getElementById("st-512");
const st1TB=document.getElementById("st-1TB");

/*-----Delivery Part----*/
const db25=document.getElementById("db-25");
const db21=document.getElementById("db-21");

/*-----Bill Part-----*/
const bestField=document.getElementById("best-price")
const memoryField =document.getElementById("memory-cost");
const storageField =document.getElementById("storage-cost");
const deliveryField=document.getElementById("delivery-charge")

const total=document.getElementById("total-price");
const gtotal=document.getElementById("total-price1");


 /*-----Memory-----*/
gb8.addEventListener('click',function(){
    memoryField.innerText='0';
    gTotal(); 
    buttonEnabled();
 })
gb16.addEventListener('click',function(){
    memoryField.innerText='180';
    gTotal(); 
    buttonEnabled();
 })

 /*-----Storage-----*/
st256.addEventListener('click',function(){
    storageField.innerText='0'; 
    gTotal();
    buttonEnabled(); 
 })

st512.addEventListener('click',function(){
    storageField.innerText='100'; 
    gTotal(); 
    buttonEnabled();
 })
st1TB.addEventListener('click',function(){
    storageField.innerText='180';  
    gTotal(); 
    buttonEnabled();

 })

/*-----Delivery-----*/
db25.addEventListener('click',function(){
   deliveryField.innerText='0';
   gTotal(); 
   buttonEnabled();
 })
db21.addEventListener('click',function(){
   deliveryField.innerText='20';
   gTotal(); 
   buttonEnabled();
 })


/*-----Bill-----*/
 function gTotal()
{
    const bestCharge=Number(bestField.innerText);
    const memoryCharge= Number(memoryField.innerText);
    const storageCharge=Number(storageField.innerText);
    const deliveryCharge=Number(deliveryField.innerText);
    const grandTotal=bestCharge+memoryCharge+storageCharge+deliveryCharge;
    total.innerText=grandTotal;
    gtotal.innerText=grandTotal;
}
function buttonDisabled() {
    const btnDisabled = document.getElementById('apply-btn');
    btnDisabled.disabled = true;
}
function buttonEnabled() {
    const btnEnabled = document.getElementById('apply-btn');
    btnEnabled.disabled = false ;
}

/*-----promo-----*/
document.getElementById("apply-btn").addEventListener('click', function()
{
        const promoField = document.getElementById('promo-code');
        const promo = promoField.value;
    if(promo == 'stevekaku')
    {
        const gtt=parseFloat(document.getElementById("total-price1").innerText)
        const totalValue = parseFloat(gtt * .20);
        const finalTotal = (gtt - totalValue);
        document.getElementById("total-price1").innerText = finalTotal;
        // document.getElementById("total-price").innerText = finalGrandTotal;
        promoField.value='';
        buttonDisabled();
    }
    else
    {
        promoField.value='';
    }

})


