class Slingshot
{
   constructor(a,b)
   {
    var options = 
    {
       bodyA:a,
       pointB:b,
       stiffness:0.5,
       length:10
    }
    this.sling = Constraint.create(options);
    World.add(world,this.sling);
   }
   display()
   {
      if(this.sling.bodyA)
      {
         var p1=this.sling.bodyA.position;
         var p2=this.sling.pointB;
         push()
          strokeWeight(5);
          line(p1.x,p1.y,p2.x,p2.y);
          //rect(p1.x,p1.y,p2.x,p2.y);
         pop();
      }
   }
   fly()
   {
     this.sling.bodyA=null
   }
   attach(body)
   {
      this.sling.bodyA=body;
   }
}