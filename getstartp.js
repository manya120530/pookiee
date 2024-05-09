const slider = document.querySelector(".slider_main_box");
  const left_btn = document.getElementById('left');
  const right_btn = document.getElementById('right')
 
  const slider_width = slider.clientWidth;
 
  left_btn.addEventListener("click" , () => {
      slider.scrollBy(-slider_width,0);
  })
 
  right_btn.addEventListener("click" , () => {
      slider.scrollBy(slider_width,0);
  })
  function moveSlider(selectElement) {
    var selectedIndex = selectElement.selectedIndex;
    var sliderBox = document.getElementsByClassName("slider_box")[selectedIndex];
    var sliderContainer = document.querySelector(".slider_main_box");
    var offsetLeft = sliderBox.offsetLeft - sliderContainer.offsetLeft;
    sliderContainer.scrollTo({
        left: offsetLeft,
        behavior: 'smooth'
    });
    if(selectElement.value == "BOYS"){
        window.open("boysgame.html","_self");
    }
    else if(selectElement.value == "GIRLS"){
        window.open("girlsgame.html","_self");
    }
    else if(selectElement.value == "BRAIN"){
        window.open("braingame.html","_self");
    }
    else if(selectElement.value == "KIDS"){
        window.open("kidsgame.html","_self");
    }
    
}
function filterGames() {
    var input, filter, gameContainer, gameBoxes, gameBox, productContainer, productBoxes, productBox, i, txtValue;
    input = document.getElementById("searchBar");
    filter = input.value.toUpperCase();
    
    
    // Filter products
    productContainer = document.querySelector(".product_container");
    productBoxes = productContainer.getElementsByClassName("product_box");
    for (i = 0; i < productBoxes.length; i++) {
        productBox = productBoxes[i];
        txtValue = productBox.textContent || productBox.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            productBox.style.display = "";
        } else {
            productBox.style.display = "none";
        }
    }
}
function searchProducts() {
    var input, filter, productBoxes, productBox, productName;
    input = document.getElementById("searchBar");
    filter = input.value.toUpperCase();
    
    // Check each product box for a match
    productBoxes = document.querySelectorAll(".product_box");
    for (var i = 0; i < productBoxes.length; i++) {
        productBox = productBoxes[i];
        productName = productBox.querySelector("button").textContent.toUpperCase();
        if (productName.includes(filter)) {
            var link = productBox.querySelector("a").href;
            window.location.href = link;
            return;
        }
    }
    
    // If no match found, display a message
    alert("Product not found");
}


