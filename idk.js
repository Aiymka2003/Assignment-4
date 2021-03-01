var startingbid =  document.getElementById("startingbid");

document.getElementById("submit").addEventListener("click", func);
function func(){
	var price = Number(startingbid.value);
	if(price.length== 0){
		alert(" Starting bid empty" );
	}
	var degree = document.getElementById("education").value;
	var networth = document.getElementById("networth").value;
 	var age = document.getElementsByName("age"); 	
 	var skills = document.getElementsByClassName("skill");
 	var reputation = document.getElementsByClassName("reputation");
 	const getCheckboxValuesForLoop = (html_collection, price) => { 
		for (var i=0; i < html_collection.length; i++) {  
			if (html_collection[i].checked && Number.isInteger(Number(html_collection[i].value))) {
				price = price + Number(html_collection[i].value)
			}
			else if (html_collection[i].checked && !Number.isInteger(html_collection[i].value)) {
				price = price * html_collection[i].value
			}	
		}
		return price;
	}
	const getRadioValue = (node_list, price) => {  
    node_list.forEach(item => {
        if (item.checked) {
            price = price * Number(item.value)
        }
    })
    	return price;
	}
	const calculate = () => {
	if(degree == 1.5){
		price *= 1.5
	}else if(degree == 1.2){
		price *= 1.2
	}else if(degree == 1.05){
		price *= 1.05
	}else if(degree == 0.9){
		price *= 0.9
	}
	if(networth == 2){
		price*=2
	}else if(networth == 1.5){
		price*=1.5
	}else if(networth == 1.2){
		price*=1.2
	}
	price = getCheckboxValuesForLoop(skills,price);
	price =getRadioValue(age,price);		
	price =getCheckboxValuesForLoop(reputation,price); 
	var name = document.getElementById("Name").value;
		if(name.length== 0){
			alert("Name is empty")
		}
	var text = document.getElementById("textarea").value;
	document.getElementById("result").innerHTML = name;
	document.getElementById("result1").innerHTML = price;
	document.getElementById("result2").innerHTML = text;
	
	//`The price for your bride ${name} is ${price}. Your love letter is "${}"`;
}	
calculate();



}