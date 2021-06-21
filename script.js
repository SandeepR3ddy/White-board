let canvas = document.querySelector("#canvas");
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight - 100 ;
window.addEventListener("resize", function(e)
{
    canvas.width = window.innerWidth ;
    canvas.height = window.innerHeight - 100 ; 
})
const ctx = canvas.getContext("2d");
let isPenDown = false;
let linesDb = [];
let RedoLineDb = [];
let lines = [];
canvas.addEventListener("mousedown",function(e)
  {
     isPenDown = true;
     let x = e.clientX;
     let y = e.clientY - 100;
     ctx.beginPath();
     ctx.moveTo(x,y);
     let pointObject = {
         x : x,
         y : y,
         type : "md"
     }
     lines.push(pointObject);
})
canvas.addEventListener("mousemove",function(e)
{
    if(isPenDown)
    {
        let x = e.clientX;
        let y = e.clientY - 100;
        ctx.lineTo(x,y);
        ctx.stroke();
        let pointObject = {
            x : x,
            y : y,
            type : "mm"
        }
     lines.push(pointObject);
    }
})
canvas.addEventListener("mouseup",function(e)
{
    isPenDown = false;
    linesDb.push(lines);
    //console.log(lines);
    lines = []; 
})