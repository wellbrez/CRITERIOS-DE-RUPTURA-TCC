export default function sketch(p){
    let canvas;
    let color="red";
    let x = 0;
    p.setup = () => {
      canvas = p.createCanvas(300, 200);
      p.noStroke();
      p.background(color);
      p.ellipse(75, 100, 100, 100);
    }
    p.draw = () => 
    {
        p.background(color);
        p.text("CmCisalhamento",x, 100, 100, 100);
        x++;
    }
    p.updateWithProps = (props) => {
       //Make sure the canvas has been created
       if(canvas)
       {
        color = props.color || "blue";
       }
       
        
    }
}