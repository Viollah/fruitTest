describe('fruitNames fruits', ()=>{
    beforeEach(function(){
        localStorage.clear()
    })
    it('This should show all fruitNames' , ()=>{
        const fruitsTest = fruitNamesFruits();

        fruitsTest.display()
        

        assert.deepEqual([{ fruitNames: "Grapes🍇", fruits: "🍇" },
        { fruitNames: "Melon🍈", fruits: "🍈" }, { fruitNames: "Watermelon🍉", fruits: "🍉" }, { fruitNames: "Tangerine🍊", fruits: "🍊" },
        { fruitNames: "Lemon🍋", fruits: "🍋" }, { fruitNames: "Banana🍌", fruits: "🍌" }, {fruitNames: "Pineapple🍍", fruits: "🍍" },
        { fruitNames: "Mango🥭", fruits: "🥭" }, { fruitNames: "Red Apple🍎", fruits: "🍎" }],[{ fruitNames: "Grapes🍇", fruits: "🍇" },
        { fruitNames: "Melon🍈", fruits: "🍈" }, { fruitNames: "Watermelon🍉", fruits: "🍉" }, { fruitNames: "Tangerine🍊", fruits: "🍊" },
        { fruitNames: "Lemon🍋", fruits: "🍋" }, { fruitNames: "Banana🍌", fruits: "🍌" }, {fruitNames: "Pineapple🍍", fruits: "🍍" },
        { fruitNames: "Mango🥭", fruits: "🥭" }, { fruitNames: "Red Apple🍎", fruits: "🍎" }], fruitsTest.values().object)
        
    });

    it('This should sort the fruitNames alphabetically' , ()=>{
        const fruitsTest = fruitNamesFruits();
        
        assert.deepEqual(['Banana🍌 🍌', '"Grapes🍇 🍇', 'Lemon🍋 🍋', 'Mango🥭 🥭', 'Melon🍈 🍈' ,'Pineapple🍍 🍍', 'Red Apple🍎 🍎', 'Tangerine🍊 🍊', 'Watermelon🍉 🍉'], ['Banana🍌 🍌', '"Grapes🍇 🍇', 'Lemon🍋 🍋', 'Mango🥭 🥭', 'Melon🍈 🍈' ,'Pineapple🍍 🍍', 'Red Apple🍎 🍎', 'Tangerine🍊 🍊', 'Watermelon🍉 🍉'],fruitsTest.sortAlphabetically())
    });

    it('This should search for the fruit entered  fruitNames' , ()=>{
        const fruitsTest = fruitNamesFruits();

        assert.deepEqual([{ fruitNames: 'Banana🍌', fruits: '🍌' }], fruitsTest.searchfruitNames("Banana🍌"))
    });

    it('This should add a new fruitNames' , ()=>{
        const fruitsTest = fruitNamesFruits();

        fruitsTest.addingNewfruitNames("Kiwi🥝", "🥝")
        
        assert.deepEqual([{ fruitNames: "Grapes🍇", fruits: "🍇" },
        { fruitNames: "Melon🍈", fruits: "🍈" }, { fruitNames: "Watermelon🍉", fruits: "🍉" }, { fruitNames: "Tangerine🍊", fruits: "🍊" },
        { fruitNames: "Lemon🍋", fruits: "🍋" }, { fruitNames: "Banana🍌", fruits: "🍌" }, {fruitNames: "Pineapple🍍", fruits: "🍍" },
        { fruitNames: "Mango🥭", fruits: "🇮🥭" }, { fruitNames: "Red Apple🍎", fruits: "🍎" }], fruitsTest.values().object);
    });

    it('This should show an error message if the input is not in alphabetically order', ()=>{
        const fruitsTest = fruitNamesFruits();
        fruitsTest.addingNewfruitNames("Kiwi🥝", "🥝");

        assert.deepEqual("Please enter a valid fruitNames name", fruitsTest.returnMessage())
    });

    it('This should show error message  if input is not a fruits emoji', ()=>{
        const fruitsTest = fruitNamesFruits();
        fruitsTest.addingNewfruitNames("Kiwi🥝", "🥝");

        assert.deepEqual("Please enter a valid fruitNames name", fruitsTest.returnMessage())
    });

    it('This should show success message when a fruitNames has been added', ()=>{
        const fruitsTest = fruitNamesFruits();
        fruitsTest.addingNewfruitNames("Strawberry🍓", "🍓");

        assert.deepEqual("Please enter a valid fruitNames name", fruitsTest.returnMessage())
    });

});

