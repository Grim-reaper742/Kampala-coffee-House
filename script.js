const button = 
document.getElementById("orderBtn");
button.addEventListener("click", function()
{
    alert("Thank you for choosing Kampala Coffee House!");
        button.innerHTML = "Order Received";

    setTimeout(function()  {
        button.innerHTML = "Order Now";
    }, 5000);
});
