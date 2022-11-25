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

    function addToCartClicked(event){
        //alert("Show");
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
        alert("Movie is already added");
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

        // for(var i = 0; i < cartItems.length; i++){
        // cartItems[i]
        // }
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

    function removeCartItem(event){
        var button = event.target;
        button.parentElement.parentElement.remove();
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
          //
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
        }updateCartTotalPrice();
      }

      function SubmitFunction(){
        alert('Submitted!');

        if(document.getElementById('username').value=="leo"){
              document.getElementById('formTest').submit();
        }

      }