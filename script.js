$(document).ready(function (){
//standard practice with jQuery to wrap document like so to ensure js doesn't fire before the page loads!



setInterval(displayTime, 1000);
function displayTime() {
    var rightNow = moment().format('dddd, MMMM Do YYYY');
    $("#currentDay").text(rightNow);
}


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
    $(".row").each(function(){
        var currentHour = moment().format("HH");
        var textBox = $(this).attr("id");
       currentHour = parseInt(currentHour)
       textBox = parseInt(textBox)
        console.log(currentHour)
        console.log(textBox)


        if (currentHour > textBox) {
            $(this).addClass("past");
        } else if ( currentHour === textBox) {
            $(this).addClass("present");
        } else {
            $(this).addClass("future");
        }

    });

}

changeColors();

 
})