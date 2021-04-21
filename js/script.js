const ageSubmitButton = document.getElementById('submit_1_1');
console.log(ageSubmitButton);

function displayYear(){
    const ageValue = document.getElementById('input_1_1').value;
    const paraText = document.getElementById('paragraph_1');

    const date = new Date().getFullYear();
    const userAge = date - ageValue;

    paraText.innerHTML = `Your year of birth is ${userAge}`;
}

ageSubmitButton.addEventListener('click', displayYear);


// year calculation
const yearSubmitButton = document.getElementById('submit_1_2');
console.log(yearSubmitButton);

function displayYearsBetweenDates(){
    const dateValue_1 = document.getElementById('input_1_2').value + "";
    const dateValue_2 = document.getElementById('input_1_3').value + "";
    console.log(dateValue_1); 
    console.log(dateValue_2); 

    //first date
    const date1year = dateValue_1.slice(0,4);
    console.log(date1year);
    const date1month = dateValue_1.slice(5,7);
    console.log(date1month);
    const date1day = dateValue_1.slice(8,11);
    console.log(date1day);

    //second date
    const date2year = dateValue_2.slice(0,4);
    console.log(date2year);
    const date2month = dateValue_2.slice(5,7);
    console.log(date2month);
    const date2day = dateValue_2.slice(8,11);
    console.log(date2day);
    const paraText_1 = document.getElementById('paragraph_2');


    var date1, date2;  
    //define two date object variables with dates inside it  
    date1 = new Date("07/15/2015");
    date1 = new Date(date1month+"/"+date1day+"/"+date1year);  
    date2 = new Date("11/28/2016");  
    date2 = new Date(date2month+"/"+date2day+"/"+date2year);  

    //calculate time difference  
    var time_difference = date2.getTime() - date1.getTime();  

    //calculate days difference by dividing total milliseconds in a day  
    var days_difference = time_difference / (1000 * 60 * 60 * 24);  
      
    // document.write("Number of days between dates <br>" +   
    //                 date1 + " and <br>" + date2 + " are: <br>"   
    //                 + days_difference + " days");  

    // const date = new Date().getFullYear();
    // const userAge = date - ageValue;

    paraText_1.innerHTML = `Number of years between the two dates is<br>   
    ${Math.round(days_difference/365)} years`;
}

yearSubmitButton.addEventListener('click', displayYearsBetweenDates);

