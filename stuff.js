function reStart(){
 alert("taking a break?"); setup();
}

function length1(){
 val1=document.getElementById("ran1").valueAsNumber;
}

function length2(){
 val2=document.getElementById("ran2").valueAsNumber;
}

function length3(){
 val3=document.getElementById("ran3").valueAsNumber;
}

function weigths(){
  let str=document.getElementById("inp1").value;
  let strAr=[];
  strAr=str.split(',');
  w1a=strAr[0];w2a=strAr[1];w3a=strAr[2];
  
}

function intro(){
	document.getElementById("par2").innerHTML=strintro;
	
}
let strintro="Think of this as a planet (blue path) rotating around a sun with a moon (red path) rotating around the planet and an asteriod (green path) rotating around the moon in a two dimensional plane.  Then, take that plane and rotate it 3 dimensionally.  The sliders give radius and the weighted ratios is a comparison of cycles.  Ex. 1,3 5 would be mean for every planet revolution the moon would have done 3 revolutions around the planet and the asteroid would have done 5 revolutions around the moon.";