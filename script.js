$(document).ready(function()
{
  var symbol= "O";var c=0;
 var arr= ["*","*","*","*","*","*","*","*","*"];
    $(".game").click(function()
    {
          var idd= $(this).attr('id');
         
         symbolonclick(idd,symbol);
         
    }); 
  
  function symbolonclick(idd,symbol)
  {
      
      arr[idd]= symbol;
      c=c +1;
    $("#"+idd).addClass('animated flash');
     $("#"+idd).text(symbol);
     $("#"+idd).css("background","#c299ff");
    console.log(c); 
    if(c == 5)
      {
        var x=wonornot(arr,symbol,idd);
        if(x==0)
          {
        alert("DRAW");
          }
      }
   
    if(c < 5)
      {
    while(1)
      {
      var a = Math.floor(Math.random() * 9);
      if($("#"+a).text() === "")
        {
          break;
        }
     }
      var win=wonornot(arr,symbol,idd);
      if(win == 0)
        {
       symbolclick(a,"X");
        }
     
     }
    
  }
  function wonornot(arr,s,idd)
  {
    if(arr[0]==s && arr[1]==s && arr[2]==s)
      {
        alert("congrats! " + s + " won");
        $("#"+idd).text(s); 
         setTimeout(reset,10000);
        reset();
        return 1;
      }
    else if(arr[3]== s && arr[4]==s && arr[5]==s)
      {
         alert("congrats! " + s + " won");
        $("#"+idd).text(symbol);
         setTimeout(reset,2000);
         
        return 1;
      }
    else if(arr[6]==s && arr[7]==s && arr[8]==s)
      {
        alert("congrats! " + s + " won");
        $("#"+idd).text(symbol);
       setTimeout(reset,2000);
         
        return 1;
      }
    else if(arr[0]== s && arr[3]==s && arr[6]==s)
      {
         alert("congrats! " + s + " won");
        $("#"+idd).text(symbol);
        setTimeout(reset,2000);
         
        return 1;
      }
    else if(arr[1]==s && arr[4]==s && arr[7]==s)
      {
         alert("congrats! " + s + " won");
        $("#"+idd).text(symbol);
         setTimeout(reset,2000);
         
        return 1;
      }
    else if(arr[2]==s && arr[5]==s && arr[8]==s)
      {
         alert("congrats! " + s + " won");
         $("#"+idd).text(symbol);
         setTimeout(reset,2000);
         
        return 1;
      }
    else if(arr[0]==s && arr[4]==s && arr[8]==s)
      {
         alert("congrats! " + s + " won");
        $("#"+idd).text(symbol);
        
         setTimeout(reset,2000);
        return 1;
      }
    else if(arr[2]==s && arr[4]==s && arr[6]==s)
      {
         alert("congrats! " + s + " won");
        $("#"+idd).text(symbol);
        setTimeout(reset,2000);     

        return 1;
      }
    else 
      {
        return 0;
      }
  }

  function symbolclick(idd,symbol)
  {
      $("#"+idd).css("background","#80ff80");
      $("#"+idd).text(symbol);
      arr[idd]=symbol;
      wonornot(arr,symbol)
  }
  
  function reset()
  {
          $(".game").css("background","#5bc0de");
           $(".game").text("");
           c = 0;
           arr= ["*","*","*","*","*","*","*","*","*"];
  }
  
  $("#rst").click(function()
   {
           
           reset();
  });
});