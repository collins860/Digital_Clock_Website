  // assigning the html ids as variable 
const hour = document.getElementById('hour');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const ampm = document.getElementById('ampm');

// the updateclock function 
function updateclock(){
  let h= new Date().getHours();
  let m= new Date().getMinutes();
  let s= new Date().getSeconds();
  let ampmel= "AM";

  //an if statement with a statement saying 
  //if hour is less than 12 deduct hour - 12
  // and change ampmel value to PM
  if(h >= 12){
    h = h - 12;
    ampmel = "PM";
  }

  // telling h when it's less than 0 it should 
  //add 0 + h or(:) leave it that way  
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

//changing the html id to get the updateclock function
  hour.innerText = h;
  minutes.innerText = m;
  seconds.innerText = s;
  ampm.innerText = ampmel;

  // setting a time out that when it within 1sec(1000) 
  //call back the updateclock function
  setTimeout(()=>{
    updateclock();
  }, 1000)
}

// calling the fuction 
updateclock()