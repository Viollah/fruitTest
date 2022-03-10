const fruitName = document.querySelector(".nameInput")
const fruitsIcon = document.querySelector(".IconInput")
const sortBtn = document.querySelector(".sort")
const searchBtn = document.querySelector(".search-button")
const searchValue = document.querySelector(".search")
const gettingNewfruitName = document.querySelector(".insertNewfruitName")
const gettingNewFruit = document.querySelector(".insertNewFruit")
const addingNewfruitNamesToArray = document.querySelector(".adding")
const sortDisplay = document.querySelector(".order")
const searchDispay = document.querySelector(".search-results")
const errorMessage2 = document.querySelector(".error")
const successful = document.querySelector(".success")
const errorMessage = document.querySelector(".messages")

functionfruits =fruitNamesFruits();

// get a reference to the template script tag
var templateSource = document.querySelector(".templateName").innerHTML;

// compile the template
var userTemplate = Handlebars.compile(templateSource);

// get a reference to the template script tag
var templateSourceFruit = document.querySelector(".templateIcon").innerHTML;

// compile the template
var userTemplateFruit = Handlebars.compile(templateSourceFruit);

fruitName.innerHTML = userTemplate({ fruitName: fruitNames})
fruitsIcon.innerHTML = userTemplateFruit({ icons: fruits })


var fruitName=fruitfunction();

//
function search() {
  let searchInput = searchValue.value
  functionfruits.searchfruitNames(searchInput)
  fruitNames.innerHTML = userTemplate({ fruitNames: functionfruits.searchfruitNames(searchInput) })
}
searchValue.addEventListener('keyup', search)
//

// search
// const search = () =>{
//   const searchbox = document.getElementById("search-item").value.toUpperCase();
//   const fruitsitems= document.getElementById("product-list");
//   const product = document.querySelectorAll(".product");
//   const productname= document.getElementsByTagName("h2");

//   for(var i=0; i<productname.length;i++){
//       let match = product[i].getElementsByTagName('h2')[0];

//       if(match){
//        let textvalue =  match.textContent || match.innerHTML;

//        if(textvalue.toUpperCase().indexOf(searchbox)>-1){
//            product[i].style.display = "";
//        }else{
//           product[i].style.display = "none"; 
//        }

//       }
//   }
// }

//
function refresh() {
  functionfruits.display()
}
fruitNamesName.innerHTML = userTemplate({ fruitNames: functionfruits.display() })


function sort() {
  functionfruits.sortAlphabetically()
  fruitNamesName.innerHTML = userTemplate({ fruitNames: functionfruits.sortAlphabetically() })
}
sortBtn.addEventListener('click', sort)
//
// function sortAlphabetically() {

//   let sortedfruitNames = fruitNames.sort()

//   fruitName.innerHTML = userTemplate({fruitName: sortedfruitNames})
//   fruitsIcon.innerHTML = userTemplateFruit({ icons: sortedFruitIcon })
// }
// sortBtn.addEventListener('click', sortAlphabetically)
//
function addingNew() {
  const newfruitNames = gettingNewfruitNamesName.value
  const newfruits = gettingNewfriuts.value
  const newfruitNamesNameUpper = newfruitNames.charAt(0).toUpperCase() + newfruitNames.slice(1);

  if (newfruitNamesNameUpper != "" && newfruits != "") {
    functionfruits.addingNewfruitNames(newfruitNamesNameUpper, newfruits)
    errorMessage2.innerHTML = functionfruits.returnMessage()
    
  }
  else if (newfruitNamesNameUpper == "") {
    errorMessage2.innerHTML = "Please enter a fruitNames name"
  }
  else if (newfruits == "") {
    errorMessage2.innerHTML = "Please insert a fruits emoji"
  }

  setTimeout(function () {
    errorMessage2.innerHTML = "";
    successful.innerHTML = "";
  }, 3000);

  fruitNamesName.innerHTML = userTemplate({ fruitNames: functionfruits.values().object })
}
addingNewfruitNamesNameToArray.addEventListener('click', addingNew)
addingNewfruitNamesNameToArray.onclick = function () {
  modal.style.display = "none";
}

//

// function addingNewFruit() {
//   const newFruits = gettingNewFruitName.value
//   const newFruits2 = gettingNewFruit.value
//   fruitName.innerHTML = userTemplate({fruitName: fruitNames})
//   fruitNames[fruitNames.length]= newFruits;
//   fruitsIcon.innerHTML = userTemplateFruit({ icons: fruits })
//   fruits[fruits.length]= newFruits2;

//   }
 


addingNewFruitNameToArray.addEventListener('click', addingNewFruit)
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

