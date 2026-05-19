let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price){

cart.push({name, price});

localStorage.setItem("cart", JSON.stringify(cart));

alert("Product Added To Cart");

updateCart();
}

function removeItem(index){

cart.splice(index,1);

localStorage.setItem("cart", JSON.stringify(cart));

updateCart();
}

function updateCart(){

const cartContainer = document.getElementById("cartItems");
const checkoutBtn = document.getElementById("checkoutBtn");

if(!cartContainer) return;

cartContainer.innerHTML="";

let message="Hello SASHÉEN, I want to order:%0A";
let total=0;

cart.forEach((item,index)=>{

total += item.price;

message += `- ${item.name} : $${item.price}%0A`;

cartContainer.innerHTML += `
<div class="cart-item">
${item.name} - $${item.price}
<br><br>
<button class="remove-btn" onclick="removeItem(${index})">
Remove
</button>
</div>
`;

});

message += `%0ATotal: $${total}`;

if(cart.length > 0){

checkoutBtn.style.display="block";

checkoutBtn.href=
`https://wa.me/201031026980?text=${message}`;

}else{

checkoutBtn.style.display="none";
}

}

window.onload = updateCart;