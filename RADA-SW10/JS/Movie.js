function ready(){
  var addToCartButtons = document.getElementsByClassName('store-item-button')

  for(var i=0; i < addToCartButtons.length; i++){
    addToCartButtons[i].addEventListener('click', addToCartClicked);
  }
}

function addToCartClicked(event){
    var button = event.target;
    var storeItem = button.parentElement.parentElement;
    var title = storeItem.getElementsByClassName('store-item-title')[0].innerHTML;
    var price = storeItem.getElementsByClassName('store-item-price')[0].innerHTML;
    var imageSrc = storeItem.getElementsByClassName('store-item-image')[0].src;
    console.log(title);
    console.log(price);
    console.log(imageSrc);
    addItemToCartItems(title, price, imageSrc);
    updateCartTotalPrice();
}

function addItemToCartItems(title, price, imageSrc){
    //Get the parent of all cart Items
    var cartItems = document.getElementsByClassName('cart-items')[0];

    //Check if the item is already existing in the cart items
    var cartItemtitles = cartItems.getElementsByClassName('cart-item-title');
    for(var i = 0; i  < cartItemtitles.length; i++){
      if(cartItemtitles[i].innerHTML == title){
        alert("This item is already added to cart.");
        return;
      }
    }

    //Create new element -- row cart item
    var cartRow = document.createElement('div');
    cartRow.classList.add('cart-item');
    cartRow.classList.add('row');

    var cartRowContents =
    `<div class="col">
        <img class="cart-item-image" src="${imageSrc}">
        <span class="cart-item-title">${title}</span>
    </div>

    <div class="col">
      <span class="cart-item-price">${price}</span>
      <span class="cart-item-price-base">${price}</span>
    </div>

    <div class="col cart-item-details">
      <input class="cart-item-quantity-input" type="number" name="" value="1">
      <button class="btn btn-danger"> REMOVE </button>
    </div>`

    cartRow.innerHTML = cartRowContents;
    //Add event of buttons in cartRow
    cartRow.getElementsByClassName('cart-item-quantity-input')[0].addEventListener('change', quantityChanged);
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem);
    cartItems.append(cartRow);
}

function quantityChanged(event){
    var input = event.target;
    var cartItem = input.parentElement.parentElement;
    var priceElement =cartItem.getElementsByClassName('cart-item-price-base')[0];
    var price = parseFloat(priceElement.innerHTML.replace('Php', ''));

    // console.log(input.value*price);
    var value = (input.value*price);
    cartItem.getElementsByClassName('cart-item-price')[0].innerHTML = 'Php ' + value;
    updateCartTotalPrice();
}

function removeCartItem(event){
    alert("Are you sure you want to remove the item?");
    var button = event.target;
    button.parentElement.parentElement.remove();
    updateCartTotalPrice();
}

function updateCartTotalPrice(){
    //Get the parent of cart item == cart items
    var cartItems = document.getElementsByClassName('cart-items')[0];
    var cartItemList = cartItems.getElementsByClassName('cart-item');

    var total = 0;
    for(var i = 0; i < cartItemList.length; i++){
      var priceElement = cartItemList[i].getElementsByClassName('cart-item-price')[0];
      // var quantityElement = cartItemList[i].getElementsByClassName('cart-item-quantity-input')[0];
      var price = parseFloat(priceElement.innerHTML.replace('Php', ''));
      //price * quanity
      total += price;//(price * quantityElement.value);
    }
    console.log(total);
    document.getElementsByClassName('cart-total-price')[0].innerHTML = "Php " + total;
}


function onClickFunction(){
        // alert('Show');
}

function check() {
    document.getElementById("myCheck").checked = true;
}
