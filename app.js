// BUDGET CONTROLLER
const budgetController = (function() {

})();

//UI CONTROLLER
const UIController = (function() {
    let DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, //either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            }
        },

        getDOMstrings: function() {
            return DOMstrings;
        }
    }
})();

//GLOBAL APP CONTROLLER
const controller = (function(budgetCtrl, UICtrl) {
    const DOM = UICtrl.getDOMstrings();

    const setupEventListeners = function() {
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        })
    }

    

    const ctrlAddItem = function () {
        //1. Get the filled input data
        let input = UICtrl.getInput();
        //2. Add the item to the budget controller
        //3. Add the item to the UI
        //4. Calculate the budget
        //5. Display the budget on the UI
    }

    return {
        init: function() {
            console.log('Application has started.');
            setupEventListeners();
        }
    }

    

})(budgetController, UIController);

controller.init();