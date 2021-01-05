function loadDoc()
{ 
		var xhttp = new XMLHttpRequest(); 
		xhttp.onreadystatechange = function() 
		{
			if (this.readyState == 4 && this.status == 200)
			{ 
				document.getElementById("paragraph").innerHTML = this.responseText;
			} 
		}; 
		
		xhttp.open("GET","bookstore.txt",true); 
		xhttp.send();
}
	
	
	
$(document).ready(function() 
{
	
	function Book(title, author)
	{
		this.title = title;
		this.author = author;
	}

	
     $.get("bookstore.txt", function(data, status)
     {
         
		 
	     var arr = data.split("\n");
	     var objList = [];
	
	     for (i = 0; i < arr.length; i+=2)
	     {
			 objList.push(new Book(arr[i].split(":")[1].trim(),
			                       arr[i + 1].split(":")[1].trim()));
		 }
  
         
	     console.log(objList);
	     console.log(data);
	     $('#paragraph').html(data);
		 $('#paragraph').html(objList);
		 
	
     });


});