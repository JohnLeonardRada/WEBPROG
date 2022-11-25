function ready(){
    var addToCartButtons = document.getElementsByClassName('store-item-button');
    for (var i=0; i < addToCartButtons.length; i++){
        addToCartButtons[i].addEventListener('click', addToCartClicked);
    }

    var imageLinks = document.getElementsByClassName('store-item-image');
    for (var i=0; i < imageLinks.length; i++){
        imageLinks[i].addEventListener('click', showDesc);
    }
}

function ready1(){
    var add = document.getElementsByClassName('btn-primary');
    for(var i = 0; i < add.length; i++){
        add[i].addEventListener('click', addToCartClicked)
    }

    var result = new URLSearchParams(window.location.search);
    document.getElementById('usernametemp').innerHTML = result.get('username');
}

function ready2(){
    var add = document.getElementsByClassName('btn-primary');
    for(var i = 0; i < add.length; i++){
        add[i].addEventListener('click', addToCartClicked)
    }

    var result = new URLSearchParams(window.location.search);
    document.getElementById('usernametemp').innerHTML = result.get('username');
}

function detail(){
    var add = document.getElementsByClassName('store-item-button');
    for(var i = 0; i < add.length; i++){
        add[i].addEventListener('click', addToCartClicked)
    }

    var result = new URLSearchParams(window.location.search);
    document.getElementById('fnametemp').innerHTML = result.get('fname');
    document.getElementById('lnametemp').innerHTML = result.get('lname');
    document.getElementById('addresstemp').innerHTML = result.get('address')
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

function showDesc(event){
    var imageLink = event.target;
    var storeItem = imageLink.parentElement;

    var title = storeItem.getElementsByClassName('store-item-title')[0].innerHTML;
    var desc = storeItem.getElementsByClassName('store-item-desc')[0].innerHTML;

    console.log(title);
    console.log(desc);

    document.getElementsByClassName('movie-title')[0].innerHTML = title;
    document.getElementsByClassName('movie-des')[0].innerHTML = desc;
}

function addItemToCartItems(title, price, imageSrc){
    //Get the parent of all cart items
    var cartItems = document.getElementsByClassName('cart-items')[0];

    //check if the item is already existing in the cart items
    var cartItemTitles = cartItems.getElementsByClassName('cart-item-title');
    for (var i = 0; i < cartItemTitles.length; i++){
        if(cartItemTitles[i].innerHTML == title){
            alert("Item is already added!");
        return;
        }
    }

    //Create new element -- row cart items
    var cartRow = document.createElement('div');
        cartRow.classList.add('cart-item');
        cartRow.classList.add('row');

    var cartRowContents = `
     
        <input type="checkbox" name="checkbox" id="checkbox" class="select-store-item">
        <div class="col">
            <img class="cart-item-image" src="${imageSrc}">
            <span class="cart-item-title">${title}</span>
        </div>

        <div class="col">
            <span class="cart-item-price">${price}</span>
            <span class="cart-item-price-base">${price}</span>
        </div>

        <div class="col cart-item-details">
            <input class="cart-item-quantity-input" type="number" name="" value="1">
            <button class="btn btn-danger"> Remove </button>
        </div>`
        cartRow.innerHTML = cartRowContents

        //add event of button in cartRow
        cartRow.getElementsByClassName('cart-item-quantity-input')[0].addEventListener('change', quantityChanged);
        cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem);

        cartItems.append(cartRow);
}

function removeCartItem(event){
    alert("Are you sure want to remove the item?")
    var button = event.target;
        button.parentElement.parentElement.remove();
    updateCartTotalPrice();
}

function quantityChanged(event){
    var input = event.target;
    console.log(input.value);

    var cartItem = input.parentElement.parentElement;
    var priceElement = cartItem.getElementsByClassName('cart-item-price-base')[0];
    var price = parseFloat(priceElement.innerHTML.replace('Php', ''));
    console.log(input.value*price);
    var value = (input.value*price);

    cartItem.getElementsByClassName('cart-item-price')[0].innerHTML = 'Php' + value;
    updateCartTotalPrice();
}

function updateCartTotalPrice(){
    // get the parent of cart item == cart items
    var cartItems = document.getElementsByClassName('cart-items')[0];
    var cartItemsList = cartItems.getElementsByClassName('cart-item');

    var total = 0;
    for (var i = 0; i < cartItemsList.length; i++) {
        var priceElement = cartItemsList[i].getElementsByClassName('cart-item-price')[0];
        //var quantityElement = cartItemsList[i].getElementsByClassName('cart-item-quantity-input')[0];
        var price = parseFloat(priceElement.innerHTML.replace('Php', ''));
        // price * quantity
        total += price; //* quantityElement.value);
    }
    console.log(total);
    document.getElementsByClassName('cart-total-price')[0].innerHTML = "Php " + total;
}

function CheckboxFunction(){
    // <!-- Get the select-all checkbox(parent) -->
    var parentCheckbox = document.getElementById('select-all');

    // <!-- Get all the checkboxes(select-store-item class) -->
    var checkboxes = document.getElementsByClassName('select-store-item')

    // <!-- Loop  thru all the checkboxes(select-store-item)
    // and mark it to whatever is the value of the parent(select-all) -->
    for(var i=0; i < checkboxes.length; i++){
        checkboxes[i].checked = parentCheckbox.checked;
    }
}

function RemovesSelectedCheckbox(){
    var confirmation = confirm("Are you sure?");
     
    if(confirmation){
        var checkboxes = document.getElementsByClassName('select-store-item');

        //From all the checkboxes, get only those marked as checked and store it in a variable
        var checkedHolder = [];
        var counter = 0;
        for(var i=0; i < checkboxes.length; i++){
            if(checkboxes[i].checked){
              checkedHolder[counter] = checkboxes[i].parentElement;
              counter++;
            }
        }

        for(var i = 0; i < checkedHolder.length; i++){
            checkedHolder[i].remove();
        }

        document.getElementById('select-all').checked = false;
        }
        updateCartTotalPrice();
}

function SubmitFunction(){
    alert('Submitted!');

    if(document.getElementById('username').value=="leo"){
        document.getElementById('formTest').submit();
    }
}

function CheckOut(){
    confirm("Are you sure?");
    var username = document.getElementById('username').value;

    if(username != "leo"){
        alert("Invalid Username Input!");
    }else{
        alert("Correct Username Input!");
        document.getElementById("formTest").submit();
    }
}

function CheckOut1(){
    confirm("Are you sure?");
    var username = document.getElementById('username1').value;

    if(username != "leo"){
        alert("Invalid Username Input!");
    }else{
        alert("Correct Username Input!");
        document.getElementById("formTest").submit();
    }
}

function PurchaseFunction(){
    //Get the parent that holds all cart-item(card-items)
    var cartItems = document.getElementsByClassName("cart-items")[0];
    //Get all the cart-item inside the parent
    var cartItemList = cartItems.getElementsByClassName("cart-item");

    var itemList = [];
    for(var i = 0; i < cartItemList.length; i++){
        var title = cartItemList[i].getElementsByClassName("cart-item-title")[0].innerHTML;
        var price = cartItemList[i].getElementsByClassName("cart-item-price")[0].innerHTML;
        itemList[i] = {titleValue: title, priceValue: price};
    }

    console.log(itemList);
    sessionStorage.setItem("itemList", JSON.stringify(itemList));

    alert("Item Purchased");
    window.location.href = "OrderForm.html";s
}

function onLoadItemsRedirectPage(title, price){
    var itemList = JSON.parse(sessionStorage.getItem("itemList"));
    var itemPurchased = document.getElementsByClassName("item-purchased")[0];

    for(var i = 0; i < itemList.length; i++){

    var cartRow = document.createElement('div');
        cartRow.classList.add('cart-item-title');
        cartRow.classList.add('cart-item-price');
        cartRow.classList.add('row');

    var cartRowContents =
        `<div class="col">
            <span class="cart-item-title">${itemList[i].titleValue}</span>
        </div>

        <div class="col">
          <span class="cart-item-price">${itemList[i].priceValue}</span>
        </div>`

        cartRow.innerHTML = cartRowContents;
        itemPurchased.append(cartRow);
      }
}




