// chapter 1 start
//ques 1
alert("WElcome To The Site");

//ques 2
var pass = "abcd";
var a = prompt("enter password");
if(pass !== a){
    alert("Invalid password");
}

//ques 3
function HappyCoding(){

    alert("Welcome to JS land \n Happy Coding!");
}
//ques 4
function Sequence(){

    alert("Welcome To JS Land");
    alert("Happy coding");
} 
// chapter 1 End

// chapter 2 start

//ques 1
var username;

//ques 2
var myName;
myName = "Fazla M.Usman"

//ques 3

function Mymessage(){
var message;
message = "Hello World";
alert(message);
}

function StuBio(){
    var name,age,qualification;
    name="Fazla";
    age = 22;
    qualification = "undergraduate BSCS";
    alert(name);
    alert(age);
    alert(qualification);

}

function ShowEmail(){
    var email = "Fazlakhan00@gmail.com";
    alert("My Email Address Is " + email);
}

function ShowBook(){
    var Book = "A Smarter Way To Learn Javascript";
    alert("I am trying to learn from the book \n" + Book);
}

function Pizza(){

    var name = " Pizza \n Pizz\n Piz \n Pi \n P";
    alert(name);
}

function displayMessage(){

    var message = "yah i can write HTML content with javascript";
    document.write(message);
}

function showString(){
    var str = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
    alert(str);
}


//chapter 2 end

//chapter 3 start
function chap3(){
    var age = 22
    alert("My age is " + age);

    var visitCount = 14;
    alert("You have visited this site " + visitCount+ " times");

    var year = 1998;
    document.write("my birth year is " + year);
    document.write("<br />")
    document.write("the data type of year variable is " + typeof(year));
}

function chap3Ques4(){

    var  Visitor_name = "Fazla";
    var Product_title = "T-shitrs";
    var quantity = 6;

    document.write("<b> " + Visitor_name + " </b>" + " Ordered " + " <b> " + quantity ,Product_title + " </b> " + " on XYZ clothing store");
}


//chapter 3 end

//chapter 4 start

//ques 1
var name, section, age;

//ques 2

//chapter 4 end

//chapter 5 start
 function Maths_operations(){
var a = 5;
var b = 3;
var add = a+b;
var sub = a - b;
var mul = a *b;
var div = a/b;
var mod = a%b;
document.write("the sum of " + a + " and " + b + " is " + add);
document.write("<br />");

document.write("the diff of " + a + " and " + b + " is " + sub);
document.write("<br />");

document.write("the product of " + a + " and " + b + " is " + mul);
document.write("<br />");

document.write("the division of " + a + " and " + b + " is " + div);
document.write("<br />");

document.write("the remainder of " + a + " and " + b + " is " + mod);
document.write("<br />");
}


function Ch5Ques_3(){

    var a;
    document.write("the value of variable after declaration is :  " + a);
    document.write("<br/>");
    a = 5;
    document.write("initial value is : " + a);
    document.write("<br/>");
    a++;
    document.write("Value after increment is : " + a);
    document.write("<br/>");
     a = a+7;
    document.write("Value after addition is : " + a);
    document.write("<br/>");
     a--;
    document.write("Value after decrement is : " + a);
    document.write("<br/>");
     a = a%3;
     document.write("The remainder is : " + a);
     document.write("<br/>");


}

function Ch5Ques_4(){

    var ticket_price = 600;
    ticket_price = ticket_price * 5;

    document.write("Total of 5 tickets is : " + ticket_price);
}

function Ch5Ques_5(){

    var num = 4;
    var result = 0;
    for(i = 0; i<=10; i++){

        result = num * i;
        document.write(num + " * " + i + " = " + result);
        document.write("<br/>");
    }    
}


function Ch5Ques_6(){
    var CT = 25;
    var FT = 70;

    var C = (FT - 32) * 5 / 9;
    document.write("70 Fahrenheit into Celcius : " + C);
    document.write("<br/>");

    var F = (CT * 9 / 5) + 32;
    document.write("25 Celcius into Fahrenheit : " + F);

}

function Ch5Ques_7(){

    var item_1 , item_2 , qtyitem_1, qtyitem_2, Ship_charges,total_cost;
    item_1 = 650;
    item_2 = 100;
    qtyitem_1 = 3;
    qtyitem_2 = 7;
    Ship_charges = 100;
    total_cost = (item_1 * qtyitem_1) + (item_2 * qtyitem_2) + 100;

    document.write("Item 1 price is: " + item_1 + "<br/>" + "Ordered quanity of item 1 is: " + qtyitem_1 + "<br/>"+ "Item 2 price is: " + item_2 + "<br/>" +"Ordered quanity of item 2 is: " + qtyitem_2 + "<br/>"+ "Total Cost is : " +total_cost);
}

function Ch5Ques_8(){
    var total_marks , obtained_marks, percentage;
    total_marks = 980;
    obtained_marks = 804;
    percentage = (obtained_marks/total_marks) * 100;
    document.write("Percentage is : " + percentage);
}

function Ch5Ques_9(){

    var dollar,riyal,dollar_qty,riyal_qty,PKR;
    dollar = 104.80;
    riyal = 28;
    dollar_qty = 10;
    riyal_qty = 25;
    PKR = (dollar * dollar_qty) + (riyal * riyal_qty);
    document.write("Total amount in PKR is : " + PKR);
}

function Ch5Ques_10(){

    var calculation, num = 5;
    calculation = ((num + 5) * 10) / 2;
    document.write("Result is : " + calculation);
}

function Ch5Ques_11(){

    var current_year,birth_year,age;
    current_year = 2020;
    birth_year = 1998;
    age = current_year - birth_year;
    document.write("Your age is : " + age);
}

function Ch5Ques_12(){

    var r = 20, pi = 3.142 , circum , area;

    circum = 2 * pi * r;
    area = pi * r * r;

    document.write("The circumference is: " + circum + "<br/>" + "The area is: " + area);

}

function Ch5Ques_13(){

    var fvrt_snack = "rolls balls" , current_age = 22 , max_age = 45 , am_perday = 3 , total = 0;
    total = (max_age - current_age) * am_perday;
    document.write("<h1> The Lifetime Supply Calculator </h1> <br/>");
    document.write("You will need " + total , fvrt_snack + " to last you until the ripe old age of " + max_age); 
}
//chapter 5 end

//chap 6-9 start
function chap_6to9Ques_1(){

    var a = 10;
    document.write("The value of a is : " + a + "<br/><br/>");
    
    document.write("The value of ++a is : " + ++a + "<br/>");
    document.write(" Now the value of a is : " + a + "<br/><br/>");

    document.write("The value of a++ is : " + a++ + "<br/>");
    document.write(" Now the value of a is : " + a + "<br/><br/>");

    document.write("the value of --a is : " + --a + "<br/>");
    document.write(" Now the value of a is : " + a + "<br/><br/>");

    document.write("the value of a-- is : " + a-- + "<br/>");
    document.write(" Now the value of a is : " + a + "<br/><br/>");

}

function chap_6to9Ques_2(){

    var a = 2, b = 1;
    var result = --a - --b + ++b + b--;
    /*
    --a = 1
    --a - --b = 1 - 0 = 1
    --a - --b + ++b =  1 - 0 + 1 = 2
    --a - --b + ++b + b-- = 1 - 0 + 1 + 1 = 3
    */
    document.write("a is : " +a+ "<br/>");
    document.write("b is : " +b+ "<br/>"); 
    document.write("The result is: "+result)
}

function chap_6to9Ques_3(){

    var name = prompt("Enter your name : ");
    alert("Welcome " + name);
}

function chap_6to9Ques_5(){
    var result = 0;
    var num = +prompt("Enter any num : ");
    if(num !== 0){

        for(i = 0; i<=10; i++){

            result = num * i;
            document.write(num + " * " + i + " = " + result);
            document.write("<br/>");
        }

    }

    else{

        for(i = 0; i<=10; i++){

            result = 5 * i;
            document.write(5 + " * " + i + " = " + result);
            document.write("<br/>");
        }
    }
}

function chap_6to9Ques_6(){

    var sub1 = prompt("Enter 1st subject");
    var sub2 = prompt("Enter 2nd subject");
    var sub3 = prompt("Enter 3rd subject");

    var marks1 = +prompt("Enter " +sub1+ " marks");
    var marks2 = +prompt("Enter " +sub2+ " marks");
    var marks3 = +prompt("Enter " +sub3+ " marks");
    var totalmarks = 100;
    var obt_marks = marks1 + marks2 + marks3;
    var percentage = (obt_marks/(totalmarks*3)) * 100;
    document.write("<table>") 
    document.write("<tr> <th>subject</th> <th>total marks</th> <th>obtained marks</th> <th>percentage</th> </tr>");
    document.write("<tr><td>"+sub1+"</td> <td>"+totalmarks+"</td> <td>"+marks1+"</td></tr>");
    document.write("<tr><td>"+sub2+"</td> <td>"+totalmarks+"</td> <td>"+marks2+"</td></tr>");
    document.write("<tr><td>"+sub3+"</td> <td>"+totalmarks+"</td> <td>"+marks3+"</td></tr>");
    document.write("<tr><th></th> <th>"+totalmarks * 3+"</th> <th>"+obt_marks+"</th> <th>"+percentage+"</th></tr>");
    document.write("</table>")
}


//chap 6-9 end

//chap 9-11 start

function chap9to11Ques1(){
var city = prompt("Enter your city");
if(city === "Karachi" || city === "karachi"){
    alert("Welcome to the city of lights");
}
else{

    alert("welcome to the : " +city);
}
}

function chap9to11Ques2(){
    var gender = prompt("Enter your gender");
    if(gender === "Male" || gender === "male"){
        alert("Good morning sir");
    }

    else if(gender === "Female" || gender === "female"){
        alert("Good morning mam");
    }
    else{
    
        alert("error");
    }
}

function chap9to11Ques3(){
    var Traffic_light = prompt("Enter Traffic light color");
    if(Traffic_light === "Red" || Traffic_light === "red"){
        alert("Must Stop!");
    }

    else if(Traffic_light === "Yellow" || Traffic_light === "yellow"){
        alert("Ready to move");
    }

    else if(Traffic_light === "Green" || Traffic_light === "green"){
        alert("Move now");
    }
    else{
    
        alert("invalid traffic light color!!");
    }
}

function chap9to11Ques4(){
var fuel = +prompt("Enter your city");
if(fuel < 0.25){
    alert("Please refill the fuel in your car");
}
else{

    alert("fuel is enough");
}
}

function chap9to11Ques6(){
    var marks1 = +prompt("Enter subject 1 marks");
    var marks2 = +prompt("Enter subject 2 marks");
    var marks3 = +prompt("Enter subject 3 marks");
    var total_marks = 300;
    var obt_marks = marks1 + marks2 + marks3;
    var percentage = (obt_marks/total_marks) * 100;

    document.write("Total marks are : " + total_marks + "<br/>");
    document.write("Obtained marks are : " + obt_marks + "<br/>");
    document.write("Percentage is : " + percentage + "<br/>");
    if(percentage >= 80 && percentage<100){

        document.write("Your grade is A+ <br/>");
        document.write("Remarks : Excellent");

    }
    else if (percentage >= 70 && percentage<80){
        document.write("your grade is A <br/>");
        document.write("Remarks : good");

    }
    else if (percentage >= 60 && percentage<70){
        document.write("your grade is B <br/>");
        document.write("Remarks : Need to improve");

    }
    else {
        document.write("your grade is Fail <br/>");
        document.write("Remarks : Sorry");

    }

}
function chap9to11Ques7(){

    var secret_num = 5;
    var guess_num = +prompt("Guess the secret num ranging from 1 to 10");

    if(guess_num === secret_num){
        alert("Bingo! Correct answer");
    }
    else if (guess_num === secret_num + 1){

        alert("Close enough to the correct answer");
    }
    else{
        alert("wrong ans!!");
    }
}

function chap9to11Ques8(){

    var num = +prompt("enter a num to check wether it is divisible by 3 or not");

    if(num % 3=== 0){
        alert("the num is divisible by 3");
    }
    else{
        alert("the num is not divisible by 3");

    }
}

function chap9to11Ques9(){

    var num = +prompt("enter a num to check whether the num is odd or even");

    if(num % 2=== 0){
        alert("the num is even");
    }
    else{
        alert("the num is odd");

    }
}

function chap9to11Ques10(){
    var T = +prompt("Enter Todays temperature");
    if(T > 40){

        document.write("Its to hot outside");

    }
    else if(T > 30 && T < 40){

        document.write("The Weather today is Normal.");

    }
    else if(T > 20 && T <30){

        document.write("Today’s Weather is cool");

    }
    else {
        document.write("OMG! Today’s weather is so Cool.");

    }

}

function chap9to11Ques11(){
    var num1 = +prompt("Enter first number");
    var num2 = +prompt("Enter second number");
    var operator = prompt("Enter operator");
    var add,sub,mul,div,mod;
    if(operator === '+'){
        add = num1+num2
        alert("Addition is : " + add);

    }
    else if(operator === '-'){

        sub = num1-num2
        alert("difference is : " + sub);

    }
    else if(operator === '*'){

        mul = num1*num2
        alert("product is : " + mul);

    }
    else if(operator === '/'){

        div = num1/num2
        alert("division is : " + div);

    }
    else if(operator === '%'){

        mod = num1%num2
        alert("Mod is : " + mod);

    }

}
//chap 9-11 end

//chap 12- 13 start
/*function chap12to13Ques1(){
    var charc = prompt("Enter single character from alphabets or number");
    if(charc > 64 && charc < 91){

        alert("Letter is uppercase");

    }
    else if(charc > 96 && charc < 123){

        alert("Letter is lowercase");

    }
    else if(charc > 47 && charc <58){

        alert("This is number");

    }
    else {
        alert("Invalid character or invalid number")

    }

}
*/

function chap12to13Ques2(){

    var int1 = +prompt("Enter first number");
    var int2 = +prompt("Enter second number");
     if(int1 > int2){

        alert("the largest num is First number : " + int1);
     }
     else if(int2 > int1){
        alert("the largest num is Second number : " + int2);

     }
     else{

        alert("both numbers are equal");
     }

}

function chap12to13Ques3(){

    var num = +prompt("Enter any number");
     if(num > 0){

        alert("number is positive");
     }
     else if(num < 0){
        alert("number is negative");

     }
     else{

        alert("number is zero");
     }

}

function chap12to13Ques4(){

    var ch = prompt("Enter letter to check it is vowel or consonent");
     if(ch === 'A' || ch === 'E' || ch === 'I' || ch === 'O' || ch === 'U' || ch === 'a' ||  ch === 'e' ||  ch === 'i' ||  ch === 'o' ||  ch === 'u'){

        alert("letter is vowel");
     }
     else{

        alert("letter is consonant");
     }

}

function chap12to13Ques5(){

    var get_pass = prompt("Enter password");
    var pass = "Fazla123"
     if(get_pass === pass || get_pass === "fazla123"){

        alert("Correct! The password you entered matches the original password");
     }
     else{

        alert("you entered wrong password");
     }

}

function chap12to13Ques6(){

    var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
alert(greeting);
}
else{
greeting = "Good evening";
alert(greeting);
}

}

function chap12to13Ques7(){
    var time = +prompt("Enter time in 24 hours format like 1700");
    if(time >= 0000 && time < 1200){

        alert("Good morning");

    }
    else if(time >= 1200 && time < 1700){

        alert("Good afternoon");

    }
    else if(time >= 1700 && time < 2100){

        alert("Good evening");

    }
    else if(time >= 2100 && time < 2359){
        alert("Good Night");

    }
    else{
        
        alert("invalid time");
    };

}
//chap 12- 13 end

//chap 14 to 16 start

var string_arr = ["fazla" , "ali" , "asima"];
var number_arr = [12,13,24];
var boolean_arr = [true,false];
var mixed_arr = ["ali" , 78 , true];

function chap14to16Ques7(){

    var qualifications = ["SSC","HSC"," BCS","BS", "BCOM", "MS", "M. Phil", "PhD"];
    for(var i = 0; i<qualifications.length;i++){


        document.write([i+1] +")"+ qualifications[i]+"</br>");
    }
}
function chap14to16Ques8(){
    var stu = ["ali" , "asma" , "aisha"];
    var marks = [320 , 230 , 480];
    var total = 500;
    document.write("score of " +stu[0]+ "is "+ marks[0]+ "and percentage is " + (marks[0]/total)*100+ "<br/>");
    document.write("score of " +stu[1]+ "is "+ marks[1]+ "and percentage is " + (marks[1]/total)*100+ "<br/>");
    document.write("score of " +stu[2]+ "is "+ marks[2]+ "and percentage is " + (marks[2]/total)*100+ "<br/>");

}

function chap14to16Ques9(){}
function chap14to16Ques10(){

    var arr = [320,230,100,89,56];
    document.write("Default array is " + arr + "<br/>")
    document.write("sorted array is "+arr.sort((a,b )=>a-b));
}

function chap14to16Ques11(){

    var cities = ["karachi" , "lahore" , "quetta" , "muree" , "sibbi"];
    var selected_cities = cities.slice(1 , 4);
    document.write("cities list : " + cities + "<br/>")
    document.write("selected cities list: "+ selected_cities);
}


function chap14to16Ques12(){

    var arr = ["this" , "is" , "my" , "cat"];
    document.write(arr + "<br/>")
    document.write(arr.join(" "));
}
function chap14to16Ques13(){

    var arr = ["Keyboard", "mouse" , "printer" , "monitor"];
    for(var i = 0; i<arr.length; i++){

        document.write(arr[i] + "<br/>");
    }
}
function chap14to16Ques14(){

    var arr = ["Keyboard", "mouse" , "printer" , "monitor"];
    for(var i = 3; i>=0; i--){

        document.write(arr[i] + "<br/>");
    }

}

function chap14to16Ques15(){
    
    
var arr = ["nokia", "samsung" , "iphone"];    
document.write("<select>")
for(var i = 0; i < arr.length; i++){


document.write("<option>"+arr[i]+"</option>");
}

document.write("</select>");
}
//chap 14 to 16 end

//chap 17 to 20 start

function chap17to20Ques3(){
    for(var i =0; i<10; i++){

        document.write(i+1 + "<br/>")
    }
}


function chap17to20Ques4(){

    var result = 0;
    var num = +prompt("Enter any num : ");
    var tab_len = +prompt("Enter table length : ");

        for(i = 0; i<=tab_len; i++){

            result = num * i;
            document.write(num + " * " + i + " = " + result);
            document.write("<br/>");
        

    }
}

function chap17to20Ques7(){

    var items =  ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("search item");
if(items.indexof(search) !== -1){

alert("yes" + search+ "is available");
}else{

alert("no" + search+ "is not available");
}
}

function chap17to20Ques8(){
    var arr = [3,6,28,90,100];
    document.write(arr + "<br/>");
    document.write("largest num in array is: " + Math.max(...arr));

}

function chap17to20Ques9(){
    var arr = [3,6,28,90,100];
    document.write(arr + "<br/>");
    document.write("smallest num in array is: " + Math.min(...arr));

}
function chap17to20Ques10(){

    var a = [];
    for(var i = 1; i<=20; i++){

        a[i] = i*5;
        document.write(" "+a[i]+ " ");

    }
}

//chap 17 to 20 end

