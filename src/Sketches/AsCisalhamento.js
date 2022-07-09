export default function sketch(p){
    let canvas;
    let ensaios = {compr:0,trac:0,cis:0};
    let propriedades = {sigmax:0,sigmay:0,tauxy:0};
    let layout={};
    let pex = 0;
    let pey = 0;
    let coordenadas = ["σa","σb"];
    let canvasx = 100;
    let canvasy = 100;
    let fs=.5;
    let resultado = "Falha";
    let fsfill = "gray";
    function linhasPrincipais(p,canvas)
    {
        p.push()
        p.strokeWeight(3);
        p.stroke(50,50,50);
        p.fill(50,50,50)
        p.line(-canvas.width/2,0,canvas.width/2-15,0);
        p.line(0,canvas.height/2,0,-canvas.height/2+15);
        p.noStroke();
        p.triangle(0,-canvas.height/2,6,-canvas.height/2+15,-6,-canvas.height/2+15)
        p.triangle(canvas.width/2,0,canvas.width/2-15,6,canvas.width/2-15,-6);
        p.textSize(20);
        p.text(coordenadas[0],canvas.width/2-30,-10)
        p.text(coordenadas[1],10,-canvas.height/2+20)
        p.pop()
        
        
    }
    function linhasSecundarias(p,canvas,escala)
    {
        p.push();
        p.strokeWeight(1);
        p.stroke(0,0,0,120);
        p.line(-canvas.width/2,canvas.height/2,canvas.width/2,canvas.height/2);
        p.line(-canvas.width/2,-canvas.height/2,-canvas.width/2,canvas.height/2);
        p.line(canvas.width/2,-canvas.height/2,canvas.width/2,canvas.height/2);
        p.line(-canvas.width/2,-canvas.height/2,canvas.width/2,-canvas.height/2);

        let espacamento;
        if (escala>14.89) espacamento = 2;
        else if(escala>2.98) espacamento = 5;
        else if(escala>1.49) espacamento = 25;
        else if(escala > 0.72) espacamento = 50
        else espacamento=100;
        for(let i = 0;i<canvas.width/2;i+=espacamento*escala)
        {
            p.line(i,-canvas.height/2,i,canvas.height/2);
            p.line(-i,-canvas.height/2,-i,canvas.height/2);
        }
        for(let j = 0;j<canvas.height/2;j+=espacamento*escala)
        {
            p.line(-canvas.width/2,j,canvas.width/2,j);
            p.line(-canvas.width/2,-j,canvas.width/2,-j);
        }
        p.pop();
    }
    function ponto(x,y,p,escala)
    {
        let xtext;
        if(x>0) xtext = (x/Math.abs(x)*10/escala) || 0;
        else xtext = (x/Math.abs(x)*100/escala) || 0;
        let ytext = (y/Math.abs(y)*20/escala) || 20/escala;
        let ytext2 = (y/Math.abs(y)*40/escala) || 40/escala;
        p.push();
        p.translate(x,y);
        p.vertex(x,y);
        p.textSize(12/escala);
        p.push()
      p.strokeWeight(1/escala);
      p.stroke(63,76,107);
      p.fill("black");
      p.text(coordenadas[0]+" = "+x.toFixed(2)+" MPa",xtext,Math.min(ytext,ytext2));
      p.text(coordenadas[1]+" = "+(-y).toFixed(2)+" MPa",xtext,Math.max(ytext,ytext2));
      p.pop()
        p.pop();
    }
    function pontoEnvoltoriaSeguranca(x,y,p,escala,fs)
    {
        p.push();
        p.translate(x/fs,y/fs);
        p.vertex(x/fs,y/fs);
        p.pop();
    }
    function calcularFs()
    {
        if(pex*pey>0)
        {
            fs = 1/Math.max(Math.abs(pex),Math.abs(pey))*ensaios.trac;
        }
        else
        {
            fs = 1/(pex-pey)*ensaios.trac;
        }



        if(fs>=1)
        {
            resultado = "Seguro";
            fsfill = [0,255,0];
        }
        else
        {
            resultado = "Falha";
            fsfill = [255,0,0]
        }
        return fs;
    }

    p.setup = () => {
      canvas = p.createCanvas(document.querySelector("canvas").parentElement.parentElement.clientWidth,document.querySelector("canvas").parentElement.parentElement.clientHeight-1);
      p.noStroke();
      p.background("transparent");
      p.textFont("montserrat");
      //p.ellipseMode(p.CENTER);
      //p.ellipse(0, 0, 100, 100);
    }
    p.draw = () => 
    {
        fs = calcularFs();
        p.resizeCanvas(document.querySelector("canvas").parentElement.parentElement.clientWidth,document.querySelector("canvas").parentElement.parentElement.clientHeight-1)
        let arraypontos = [Math.abs(pex),Math.abs(pey),ensaios.trac,ensaios.compr,ensaios.cis]
        var maxcoord = arraypontos.reduce(function(a, b) {
            return Math.max(a, b);
          }, -Infinity);

        let escala = canvas.width/4/(maxcoord||0.01)*0.8;
        //escala = canvas.width/4/(maxcoord + 170/escala);

        p.clear();
        p.push();
        p.translate(canvas.width/2,canvas.height/2)
        linhasSecundarias(p,canvas,escala);
        
        p.push();
        p.scale(escala);
        p.fill(63,76,107);
        
        p.beginShape();
        ponto(ensaios.trac,0,p,escala);
        ponto(ensaios.trac,-ensaios.trac,p,escala);
        ponto(0,-ensaios.trac,p,escala);
        ponto(-ensaios.trac,0,p,escala);
        ponto(-ensaios.trac,ensaios.trac,p,escala);
        ponto(0,ensaios.trac,p,escala);
        ponto(ensaios.trac,0,p,escala);
        p.endShape();
        p.stroke(fsfill);
        p.strokeWeight(2/escala);
        p.fill(0,0,0,0);
        p.beginShape();
        pontoEnvoltoriaSeguranca(ensaios.trac,0,p,escala,fs);
        pontoEnvoltoriaSeguranca(ensaios.trac,-ensaios.trac,p,escala,fs);
        pontoEnvoltoriaSeguranca(0,-ensaios.trac,p,escala,fs);
        pontoEnvoltoriaSeguranca(-ensaios.trac,0,p,escala,fs);
        pontoEnvoltoriaSeguranca(-ensaios.trac,ensaios.trac,p,escala,fs);
        pontoEnvoltoriaSeguranca(0,ensaios.trac,p,escala,fs);
        pontoEnvoltoriaSeguranca(ensaios.trac,0,p,escala,fs);
        p.endShape();

        p.fill(0,0,0,0)
        p.fill(fsfill)
        p.strokeWeight(3/escala)
        p.ellipse(pex,-pey,8/escala,8/escala);
        p.ellipse(pey,-pex,8/escala,8/escala);
        p.pop();
        p.push();
        p.textFont("arial");
        linhasPrincipais(p,canvas);
        
        //p.text(escala,0,0);
        
        p.pop();
        p.pop();
        p.push();
        p.fill(63,76,107);
        p.stroke(fsfill);
        p.rect(canvas.width-140,canvas.height-80,140,80,5)
        p.fill(fsfill);
        p.strokeWeight(2);
        p.textFont("montserrat");
        p.textSize(20);
        p.text(`F.S.: ${fs.toFixed(2)}`,canvas.width-110,canvas.height-70,120,70)
        p.text(`${resultado}`,canvas.width-100,canvas.height-40,120,70)
        p.pop();
        //p.text(ensaios,x, 100, 100, 100);
    }
    p.updateWithProps = (props) => {
       //Make sure the canvas has been created
       if(canvas)
       {
           layout = props.layout;
           ensaios = props.ensaios;
           propriedades = props.propriedades;
           ensaios = {
                compr:(0),
                trac:(ensaios.trac),
                cis:(0),
            } 
            let meio = (propriedades.sigmax+propriedades.sigmay)/2;
            let raio = Math.sqrt((propriedades.tauxy)**2+(propriedades.sigmay-meio)**2);
            pex = meio + raio;
            pey = meio - raio;
            
            
       }
       
        
    }
}