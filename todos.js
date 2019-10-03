const SeleniumInfra = require("./seleniumInfra")
const seleniumInfra = new SeleniumInfra()

class TodosPage{
    constructor(URL){
        seleniumInfra.getURL(URL)

    }
// // //Exercise 1//    
async insertAndDelete(todoText) {
  
    //insert the "todoText", into the input
    await seleniumInfra.write(todoText, "id", "todo-input")
    
    //click the button "add" to add the todoText into the list
    await seleniumInfra.clickElement("id", "addToDo")

    //Find the new div that was inserted as a result of clicking “Add”, check if he's exists at all 
    let findNewDiv = await seleniumInfra.isElementExists("className", "todo")

    //check if the new div exist - 
    if(findNewDiv){
        console.log("found a new div")
        //if he exist, get the text from the new div
        let find = await seleniumInfra.getTextFromElement("className", "todo")
        //check if the text is the same text as inside of "todoText": 
        if(todoText == find){
            console.log("New div has the same text")
        }
        else{
            console.log("Error: New div does not has the same text")
        }  
    }
    else{
        console.log("Error: Can’t find a new div")
    }

    //click on the delete button:
    await seleniumInfra.clickElement("className", "delete")

    //check if the div that insert before is delete:
    //"findNewDiv" check if there any div, from line 19. so if he doesnt exist, the div was delete
    if(findNewDiv){
        console.log("The div was deleted")
    }
    else{
    console.log("The div was not deleted")
    }
}

// // Exercise 2//  
// async insertAndComplete(todoText) {
//     //insert the "todoText", into the input
//     await seleniumInfra.write(todoText, "id", "todo-input")

//      //click the button "add" to add the todoText into the list
//     await seleniumInfra.clickElement("id", "addToDo")

//     //Find the new div that was inserted as a result of clicking “Add”, check if he's exists at all 
//     let findNewDiv1 = await seleniumInfra.isElementExists("className", "todo")
  
//     //check if the new div exist - 
//     if(findNewDiv1){
//         console.log("found a new div")
//     }
//     else{
//         console.log("Error: Can’t find a new div")
//     }

//     //click on the green button:
//     await seleniumInfra.clickElement("tagName", "i")

//     //Check if the div was clicked/checked
//     let complete = await seleniumInfra.isElementExists("className", "complete")
//     if(complete){
//         console.log("the new div was checked")
//     }
//     else{
//         console.log("Error: the new div was NOT checked")
//     }
// }

// Exercise 3//  
// async insertTwoDeleteFirst(todoText1, todoText2) {
//      //insert the "todoText1", into the input
//     await seleniumInfra.write(todoText1, "id", "todo-input")

//     //click the button "add" to add the todoText into the list
//     await seleniumInfra.clickElement("id", "addToDo")

//     //Find the new div that was inserted as a result of clicking “Add”, check if he's exists at all
//     // as he should be the FIRST child of the div
//     let gettodoText1= await seleniumInfra.getTextFromElement("css", ".todo:nth-child(1)")
//     if(gettodoText1){
//         console.log("found a new div")
//     }
//     else{
//         console.log("Error: Can’t find a new div")
//     }
//     //insert the "todoText2", into the input
//     await seleniumInfra.write(todoText2, "id", "todo-input")

//     //click the button "add" to add the todoText into the list
//     await seleniumInfra.clickElement("id", "addToDo")

//     //Find the new div that was inserted as a result of clicking “Add”, check if he's exists at all
//     // as he should be the SECOND child of the div
//     let gettodoText2= await seleniumInfra.getTextFromElement("css", ".todo:nth-child(2)")
//     if(gettodoText2){
//         console.log("found a new div")
//         }
//     else{
//         console.log("Error: Can’t find a new div")
//         }
    
//     //Click the delete (red) button on the first task (todoText1)
//     //find the first child whice is todoText1
//     let deletefirst = await seleniumInfra.findElementBy("css", ".todo:nth-child(1)")    

//     //click on the red button and the delete the first child
//     await seleniumInfra.clickElement("className", "delete", null, deletefirst)

//     //get the text from who is now the first child
//     let checkDelete = await seleniumInfra.getTextFromElement("css", ".todo:nth-child(1)")
    
//     //check if the new first child is the todoText1, if hes not- then the first one delete
//     if(checkDelete == todoText1){
//         console.log("Error: the first div was NOT deleted")
//     }
//     else{
//         console.log("the first div was deleted")
//     }
// }
    
}

module.exports = TodosPage