function ready(){
       var add = document.getElementsByClassName('store-item-button');
       for(var i = 0; i < add.length; i++){
       	add[i].addEventListener('click', addToCartClicked)
       }

       var result = new URLSearchParams(window.location.search);

       document.getElementById('fnametemp').innerHTML = result.get('fname');
       document.getElementById('lnametemp').innerHTML = result.get('lname');
       document.getElementById('addresstemp').innerHTML = result.get('address')
}



function check(){
	var parentCheckbox = document.getElementById('select-all');
	var checkboxes = document.getElementsByClassName('select-store-item');
	for(var i=0; i < checkboxes.length; i++){
        checkboxes[i].checked = parentCheckbox.checked;
        }
}


function CheckOut(){
	confirm("Are you sure?");
	var firstname = document.getElementById('fname').value;

	if(firstname != "leo"){
		alert("Di ikaw si leo, panget ka");
	}else{
		alert("Ikaw si leo, pogi ka");
		document.getElementById("formTest").submit();
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
