$(document).ready(function (){
//standard practice with jQuery to wrap document like so to ensure js doesn't fire before the page loads!



setInterval(displayTime, 1000);
function displayTime() {
    var rightNow = moment().format('dddd, MMMM Do YYYY');
    $("#currentDay").text(rightNow);
}
//this sets the time and places it under heading using moment


// VVV  anytime the save button is clicked.. 
$(".saveBtn").on("click", function(){
    
    var textValue = $(this).siblings(".description").val();
    //hooked into the html of the txt box - this is going to be the value varible we put in local storage

    var textTime = $(this).parent().attr("id");
    //this hooks into the row that the text box is on -also our key variable

    localStorage.setItem(textTime, textValue)
    //sets our key and value to local storage!

    $(".hide").attr("class", "localstorage")
    //takes the element with the hide class and replaces it with my localstorage class which displays text letting the user know they saved to local storage 

    


    console.log(textTime);
    console.log(textValue);

})



function changeColors(){
    //VV for all the class rows we're iterating through using each
    $(".row").each(function(){
        var currentHour = moment().format("HH");
        //putting the current hour in a variable
        var textBox = $(this).attr("id");
        //this is grabbing the ID for the attr we defined above
       currentHour = parseInt(currentHour)
       textBox = parseInt(textBox)
       //this makes sure both variables are integers 
        console.log(currentHour)
        console.log(textBox)

        //this if statement is what determines which class is added
        if (currentHour > textBox) {
            // if the hr right now is GREATER than the textbox integer, add past class
            $(this).addClass("past");
        } else if ( currentHour === textBox) {
            //if the hours are the same, add present
            $(this).addClass("present");
        } else {
            //and lastly if the current hour isn't greater or equal to the hour of the text box, add the future class
            $(this).addClass("future");
        }

    });

}

changeColors();
//this calls that function


//function init intializes this retrieval
function init() {
    //VV thats jQuery selecting the html associated
    $("#9 .description").val(localStorage.getItem("9"));
    // .val is inputing the value to that html grabbed
    $("#10 .description").val(localStorage.getItem("10"));
    //local storage.getItem is what will be the new value input into the box 
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));
    }
init();
})