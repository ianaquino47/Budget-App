// BUDGET CONTROLLER
const budgetController = (function() {
    
})();

//UI CONTROLLER
const UIController = (function() {

})();

//GLOBAL APP CONTROLLER
const controller = (function(budgetCtrl, UICtrl) {

    const ctrlAddItem = function () {
        //1. Get the filled input data
        //2. Add the item to the budget controller
        //3. Add the item to the UI
        //4. Calculate the budget
        //5. Display the budget on the UI
        console.log('it\'s working')
    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem)

    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    })

})(budgetController, UIController);