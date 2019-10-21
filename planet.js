class planets{
 constructor(l1,l2,l3,w1,w2,w3,num){
   this.l1=l1;this.l2=l2;this.l3=l3;
   this.w1=w1;this.w2=w2;this.w3=w3;
   this.ang=0;this.num=num;
 }
  
 planet1(){
// push();
  rotateZ(this.w1*this.ang);
  translate(this.l1,this.l1,0);
  fill(200,20,100);
  if(this.num==3){stroke(0,0,250); point(0,0,0);}
  this.planet2();
  //pop();
}

planet2(){
 //push();
  rotateZ(this.w2*this.ang);
  translate(this.l2,this.l2,0);
  fill(200,20,100);
 // ellipse(0,0,30,30);
  if(this.num==2||this.num==3){stroke(250,0,0);point(0,0,0);}
 this.planet3();
  //pop();
}

 planet3(){
 //push();
  rotateZ(this.w3*this.ang);
  translate(this.l3,this.l3,0);
  fill(200,20,100);
 // ellipse(0,0,30,30);
  stroke(0,250,0);point(0,0,0);
 // pop();
}

display(){
this.planet1();//this.planet2();this.planet3();
  this.ang=this.ang+0.1;
}
  
}