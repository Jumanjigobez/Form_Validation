//Function to get elements
elem = (x)=>{
	return document.querySelector(x);
}

//Form submittion codes

var form = elem(".s_form"),
	f_name = elem(".f_name"),
	l_name = elem(".l_name"),
	email = elem(".email"),
	psk = elem(".psk"),

	styleElem = document.head.appendChild(document.createElement("style"));


var setError = (element)=>{
	let parent = element.parentElement;
	let error = parent.querySelector(".error");
	let error_icon = parent.querySelector(".e_icon");

	element.style = "border: 1px solid var(--Red);";
	styleElem.innerHTML += `
			.${element.getAttribute("class")}::placeholder{
				visibility: hidden;
			}
		`;
	error.style.display = "block";
	error_icon.style.display = "block";

}
var removeError = (element)=>{
	let parent = element.parentElement;
	let error = parent.querySelector(".error");
	let error_icon = parent.querySelector(".e_icon");

	element.style = "border: 1px solid var(--Blue);";
	styleElem.innerHTML += `
			.${element.getAttribute("class")}::placeholder{
				visibility: visible;
			}
		`;
	error.style.display = "none";
	error_icon.style.display = "none";
}

var validateEmail = (mail)=> {
    let res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return res.test(String(mail).toLowerCase());
}
var setErrorEmail = (element)=>{
	let parent = element.parentElement;
	let error = parent.querySelector(".error");
	let error_icon = parent.querySelector(".e_icon");

	element.style = "border: 1px solid var(--Red);";
	error.innerText = "Looks like this is not an email";
	error_icon.style.display = "block";

}


form.onsubmit = (e)=>{
	const f_name_value = f_name.value.trim(),
		  l_name_value = l_name.value.trim(),
		  email_value = email.value.trim(),
		  psk_value = psk.value.trim();

	if(f_name_value === ""){
		setError(f_name);
		e.preventDefault();
	}else{
		removeError(f_name);
	}

	if(l_name_value === ""){
		setError(l_name);
		e.preventDefault();
	}else{
		removeError(l_name);
	}

	if(email_value === ""){
		setError(email);
		e.preventDefault();
	}else if(!validateEmail(email_value)){
		setErrorEmail(email);
		e.preventDefault();
	}else{
		removeError(email);
	}

	if(psk_value === ""){
		setError(psk);
		e.preventDefault();
	}else{
		removeError(psk);
	}


}

