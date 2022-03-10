function fruitNamesFruits() {

    let fruitList = [{ fruitNames: "Grapes🍇", fruits: "🍇" },
    { fruitNames: "Melon🍈", fruits: "🍈" }, { fruitNames: "Watermelon🍉", fruits: "🍉" }, { fruitNames: "Tangerine🍊", fruits: "🍊" },
    { fruitNames: "Lemon🍋", fruits: "🍋" }, { fruitNames: "Banana🍌", fruits: "🍌" }, {fruitNames: "Pineapple🍍", fruits: "🍍" },
    { fruitNames: "Mango🥭", fruits: "🇮🥭" }, { fruitNames: "Red Apple🍎", fruits: "🍎" }];
  
  
  

    let userMessage = ""
  
    if (localStorage['fruitList']) {
        fruitList = JSON.parse(localStorage.getItem('fruitList'))
    }
  
    function display() {
      let filter = fruitList.map(function (element) {
        return element.fruitNames + " " + element.fruits
  
      });
      return filter
    
    }
  
    function sortAlphabetically() {
  
      let mappedfruitNames = fruitList.map(function (element) {
        return element.fruitNames + " " + element.fruits
  
      });
      let sortfruitNames= mappedfruitNames.sort()
      return sortfruitNames
  
    }
  
    function searchfruitNames(fruitNamesToSearch) {
  
      const searchFilter = fruitList.filter(function (fruitNames) {
        return fruitNames.fruitNames.includes(fruitNamesToSearch)
      })
  
      return searchFilter
  
    }
  
    function fruitNamesExists(newfruitNames) {
      return fruitList.some(function (element) {
        return element.fruitNames === newfruitNames;
      });
    }
  
    function fruitsExists(newfruits) {
      return fruitList.some(function (element) {
        return element.fruits === newfruits;
      });
    }
  
    function addingNewfruitNames(newfruitNames, newfruits) {
      const fruitsRegex = /[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/
      
      if (fruitNamesExists(newfruitNames) == false && fruitsExists(newfruits) == false) {
        if (newfruitNames.match("^[a-zA-Z]*$")) {
          if (fruitsRegex.test(newfruits)) {
            fruitList.push({ fruitNames: newfruitNames, fruits: newfruits })
            localStorage.setItem('fruitList', JSON.stringify(fruitList))
            userMessage = "The fruitNames and fruits entered has been entered successfully"
  
          }
          else if(!fruitsRegex.test(newfruits)) {
            userMessage = "Please enter a valid fruits"
           
          }
        }
        else if(!newfruitNames.match("^[a-zA-Z]*$")){
          userMessage = "Please enter a valid fruitNames name"
        }
      }
      else if (fruitNamesExists(newfruitNames) == true || flagExists(newFlag) == true) {
        userMessage = "The fruitNames or fruits entered already exists"
      }
  
      values().object
  
    }
  
    function values() {
      return {
        object: fruitList,
      }
    }
  
    function returnMessage(){
      return userMessage
    }
  
    return {
      display,
      sortAlphabetically,
      searchfruitNames,
      values,
      addingNewfruitNames,
      fruitNamesExists,
      fruitsExists,
      returnMessage
    }
  
  }