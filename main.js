canvas = document.getElementById("myCanvas");
 ctx= canvas.getContext("2d");
  ctx.beginPath(); //método utilizado para iniciar um novo caminho (path) em um contexto de desenho 2D. ctx.strokeStyle = "grey";
//define a cor, padrão ou gradiente a ser usado para desenhar contornos (traços) de formas. 
ctx.lineWidth = 1; //define a largura da linha a ser usada para desenhar contornos (traços) de formas.
ctx.rect(150, 143, 430, 200); //cria um retângulo com as dimensões especificadas ctx.stroke();
 //desenha o contorno

 ctx.beginPath(); ctx.strokeStyle = "blue"; 
 ctx.lineWidth = 5; 
 ctx.arc(250, 210, 40 ,0 , 2 * Math.PI); 
 //Em JavaScript, ctx.arc(x, y, raio, anguloInicial, anguloFinal, sentidoAntiHorario) 
 //adiciona um arco ao caminho atual, com o centro na posição (x, y) e o raio especificado. 
 ctx.stroke();

 ctx.beginPath(); ctx.strokeStyle = "black"; 
 ctx.lineWidth = 5; 
 ctx.arc(350, 210, 40 ,0 , 2 * Math.PI);
 ctx.stroke();

 ctx.beginPath(); ctx.strokeStyle = "red"; 
 ctx.lineWidth = 5; 
 ctx.arc(450, 210, 40 ,0 , 2 * Math.PI);
 ctx.stroke();

 ctx.beginPath(); ctx.strokeStyle = "orange"; 
 ctx.lineWidth = 5; 
 ctx.arc(300, 250, 40 ,0 , 2 * Math.PI);
 ctx.stroke();

 ctx.beginPath(); ctx.strokeStyle = "green"; 
 ctx.lineWidth = 5; 
 ctx.arc(400, 250, 40 ,0 , 2 * Math.PI);
 ctx.stroke();
