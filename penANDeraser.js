let pen = document.querySelector("#pen");
let eraser = document.querySelector("#eraser");
pen.addEventListener("click",penCLicked);
eraser.addEventListener("click",eraserClicked);
function penCLicked()
{
   if(pen.classList.contains("active-tool"))
   {

   }
   else{
      eraser.classList.remove("active-tool");
      eraser.classList.add("fade");
      pen.classList.remove("fade");
      pen.classList.add("active-tool");
   }
}
function eraserClicked(){
  if(eraser.classList.contains("active-tool"))
  {

  }
  else{
      eraser.classList.remove("fade");
      eraser.classList.add("active-tool");
      pen.classList.remove("active-tool");
      pen.classList.add("fade");
  }
}