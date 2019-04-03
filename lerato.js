//Challenge 1    
    

function currentDayTime()
{
        var today = new Date();
        var day = today.getDay();
        var daylist = ["Sunday","Monday","Tuesday","Wednesday ",
        "Thursday","Friday","Saturday"];
  
        var hr = today.getHours();
        var min = today.getMinutes();
        var sec = today.getSeconds();
        var antePost = (hr >= 12)? " PM ":" AM ";
        hr = (hr >= 12)? hr - 12: hr;

    if (hr===0 && antePost===' PM ') 
   { 
        if (min===0 && sec===0)
       { 
         hr=12;
         antePost=' Noon';
        }
      
         else
        { 
            hr=12;
            antePost=' PM';
        } 
    } 
      
   if (hr===0 && antePost===' AM ') 
   { 
      if (min===0 && sec===0)
      { 
      hr=12;
      antePost=' Midnight';
      } 
      else
      { 
      hr=12;
      antePost=' AM';
      } 
    } 
    alert("Today is : " + daylist[day] + "\nCurrent Time : " + hr + antePost + " : " +
     min + " : " + sec);

}
    
    //Challenge 2

    function getUrl()
    {
       alert("URL: " + document.URL); 
    }
    
    
    //Challenge 3
    
    function javaString(str)
    {
       
    var str = prompt("enter a word");  
        
    if (str.length < 4)
    {
        return false;
    }
    front = str.substring(0, 4);
        
        if (front == 'Java' || front == 'java') 
    {
        alert(true);
        
    }
        
    else 
    {
        alert(false);
        
    }
       
    }

    

    
//Challenge 4
function maxNum()
{
    
   var a = prompt("enter value 1");
   var b = prompt("enter value 2");
    var c = prompt("enter value 3");
   window.alert("The Maximum Number Is: " + Math.max(a,b,c));
};

    
//Challenge 5    
    
 function capitalLetter() 
{
    var str = prompt("enter your name");
    str = str.split(" ");

    for (let i = 0, x = str.length; i < x; i++) 
    {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }
    alert(str);
    return str.join(" ");
}
    
    
//Challenge 6
    
 function timeConversion()
 { 
    var number = prompt("enter a number");   
  var hrs = Math.floor(number / 60);  
  var mins = number % 60;
  alert(hrs + "h" + mins);
  
           
}



