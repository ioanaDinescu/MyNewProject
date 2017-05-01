
function win()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for( var i=0; i < 10; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

		if(text=='rXKzUONeYQ' || text=='sFzjLQnLAY')
		{document.getElementById('display').innerHTML="<h4>You are the lucky winner!<br> You've won: </h4> <h2>Bottle of Pepsi</h2>";
		document.getElementById('p').src='images/p1.jpg';}
		else if( text=='qkVfMUTqJo')
			{document.getElementById('display').innerHTML="<h4>You are the lucky winner!<br> You've won: </h4> <h2> Sony Tablet</h2>";
			document.getElementById('p').src='images/p2.png';}
			else if(text=='CRnG6K5LzZ')
				{document.getElementById('display').innerHTML="<h4>You are the lucky winner!<br> You've won: </h4><h2> Trip to Paris</font></h2>";
				document.getElementById('p').src='images/p3.jpg';}
				else {document.getElementById('display').innerHTML="<h2>  Better luck next time!</font></h2>";
	document.getElementById('p').src='images/sad.png';}
}

function win1()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for( var i=0; i < 10; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
		if(text=='oo1BYsOXZl' || text=='dOrbeU9dbG')
		{document.getElementById('display').innerHTML="<h4>You are the lucky winner!<br> You've won: </h4> <h2> Milka pencilcase</h2>";
		document.getElementById('p').src='images/m1.png';}
		else if( text=='hnjoeKNTnA' || text=='aTb46ySdND')
			{document.getElementById('display').innerHTML="<h4>You are the lucky winner!<br> You've won: </h4> <h2>Milka cup + milka coffee</h2>";
			document.getElementById('p').src='images/m2.png';}
			else if(text=='z9eEKDn2S6')
				{document.getElementById('display').innerHTML="<h4>You are the lucky winner!<br> You've won: </h4><h2> Milka Tassimo expressor</font></h2>";
				document.getElementById('p').src='images/m3.jpg';}
				else {document.getElementById('display').innerHTML="<h2>  Better luck next time!</font></h2>";
	document.getElementById('p').src='images/sad.png';}
}

function win2()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for( var i=0; i < 10; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
		if(text=='jZ3qLws1BA' || text=='ryg40tTZOU')
		{document.getElementById('display').innerHTML="<h4>You are the lucky winner!<br> You've won: </h4> <h2> Bike</h2>";
		document.getElementById('p').src='images/a1.jpg';}
		else if( text=='DljIo9eTRY' || text=='atzWPu7JQr')
			{document.getElementById('display').innerHTML="<h4>You are the lucky winner!<br> You've won: </h4> <h2>Trip to Predeal</h2>";
			document.getElementById('p').src='images/a2.jpg';}
			
				else {document.getElementById('display').innerHTML="<h2>  Better luck next time!</font></h2>";
	document.getElementById('p').src='images/sad.png';}
}

function exit()
{
   window.location.assign("luck.html");
}
function exit1()
{
   window.location.assign("luck1.html");
}
function exit2()
{
   window.location.assign("luck2.html");
}