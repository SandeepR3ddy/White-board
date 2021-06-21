let undo = document.querySelector("#undo");
let redo = document.querySelector("#redo");
undo.addEventListener("click",undoLine);
redo.addEventListener("click",redoLine);
function undoLine(e)
{
   
   if(linesDb.length)
   { 
   let undoline = linesDb.pop();
   RedoLineDb.push(undoline);
   ctx.clearRect(0,0,canvas.width,canvas.height);
   drawLinesFromDB();
   }
}
function redoLine(e)
{
    if(RedoLineDb.length)
    {
      let redoline = RedoLineDb.pop();
      for(let i = 0;i < redoline.length;i++)
      {          
       let pointerobject = redoline[i]; 
       if(pointerobject.type == "md")
       {
           ctx.beginPath();
           ctx.moveTo(pointerobject.x,pointerobject.y);
       }
      else
      {
          ctx.lineTo(pointerobject.x,pointerobject.y);
          ctx.stroke();
      }
      }
      linesDb.push(redoline);
    }
}
function drawLinesFromDB()
{
  if(linesDb.length)
  {
  for(let i = 0;i < linesDb.length;i++)
  {
      let lines = linesDb[i];
      for(let j = 0;j < lines.length;j++)
      {
       let pointerobject = lines[j]; 
       if(pointerobject.type == "md")
       {
           ctx.beginPath();
           ctx.moveTo(pointerobject.x,pointerobject.y);
       }
      else
      {
          ctx.lineTo(pointerobject.x,pointerobject.y);
          ctx.stroke();
      }
      }
      }
  }
}