/*   develop a simple web page that will have a number being displayed on it and two buttons one for the increase and decreases when someone click on increase number keeps itself 

	increasing by 1 every one second and if someone clicks on decrease number should keep itself decreasing every one second.


	please note: both increase and decrease simultaneously must not be possible*/
 

	let btn1 = document.getElementById('btn1');
	let btn2 = document.getElementById('btn2');
	let output = document.getElementById('output');
	
	let id,id2;

	let fun = (counter) =>{
	btn1.addEventListener('click',()=>{
		
	  id =  setInterval(()=>{
			if(counter >= 0){
			counter +=1;
			output.innerText =counter;}
		},1000) }
	);
	btn2.addEventListener('click',()=>{
		
	   id2 = setInterval(()=>{
		   if(counter > 0){
			clearInterval(id)
			counter -=1;
			console.log("clicked")
			output.innerText = counter;
		}
		},1000) 
	})}
	fun(0)

	let btn3 = document.getElementById('dark');
	btn3.addEventListener('click',() =>{
		let container = document.querySelector('.container')
		let text = document.querySelector('.container h1');
		if(btn3.className =='light'){
		container.style.backgroundColor = 'black';
		text.style.color = 'white'
		btn3.innerText = 'Light'
		btn3.classList.remove('light')
		btn3.classList.add('dark')
		console.log("clicked")}
		else{
		container.style.backgroundColor = 'white';
		text.style.color = 'black'
		btn3.classList.remove('dark')
		btn3.classList.add('light')
		btn3.innerText = 'Dark'
		}
	})