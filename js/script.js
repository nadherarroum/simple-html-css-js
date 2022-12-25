function sayHello() {
	var email = document.getElementById("email").value;
	var pass = document.getElementById("password").value;

	console.log("Email : " + email + " \nPassword :" + pass);
	// alert("Email : " + email + " \nPassword :" + pass);
}

function Sum() {
	var x = document.getElementById("nbr1").value;
	var y = document.getElementById("nbr2").value;
	var nbr1 = parseInt(x);
	var nbr2 = parseInt(y);
	var s = nbr1 + nbr2;

	alert(nbr1 + " + " + nbr2 + " = " + s);
}
