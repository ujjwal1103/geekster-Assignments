  
        var timer = document.getElementById('timer');
        let bar = document.getElementById("bar")
        let  minute =  5;
        let time = minute*60;
       
        
        let id = setInterval(counter,1000)
        function counter(){
           if(time){
            const newMinutes = Math.floor(time/60);
            seconds = time % 60;
            timer.innerHTML = `${newMinutes} : ${seconds}`;
            bar.style.width= "1%" ;
            time--;}
            if(seconds === 00){
                timer.innerHTML = "00 : 00"
            }
        
    }
        let stop = document.getElementById('stop').addEventListener('click',()=>{
            bar.style.width = "0%"
            clearInterval(id);
        })
        let resume = document.getElementById('resume')
        resume.addEventListener('click',()=>{
           id =  setInterval(counter,1000)
        })
        let reset = document.getElementById('reset');
        reset.addEventListener('click',()=>{
            timer.innerHTML = `${minute} : ${00}`;
            clearInterval(id);
            minute = 5;
            time = minute*60;

        })