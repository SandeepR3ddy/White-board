let sticky = document.querySelector("#sticky");
sticky.addEventListener("click",addSticky);
function addSticky(e)
{
    //console.log(e);
    let stickyDiv = document.createElement("div");
    stickyDiv.classList.add("sticky");
    stickyDiv.innerHTML = `<div class="sticky">
    <div class="sticky-header">
        <div class="minimise">
        </div>
        <div class="close">
        </div>
    </div>
    <div class="sticky-content" contenteditable="true"></div>
</div> ` ;
    let minimise = stickyDiv.querySelector(".minimise");
    let close = stickyDiv.querySelector(".close");
    let stickyHeader = stickyDiv.querySelector(".sticky-header");
    let stickyContent = stickyDiv.querySelector(".sticky-content");
    minimise.addEventListener("click",function()
    {
        stickyContent.style.display == "none" ? stickyContent.style.display = "block" : stickyContent.style.display = "none" ; 
    })
    close.addEventListener("click",function()
    {
        stickyDiv.remove();
        })
   let stickyHold = false;
   let initialX;
   let initialY;
   stickyHeader.addEventListener("mousedown",function(e){
       stickyHold = true;
        initialX = e.clientX;
        initialY = e.clientY;
   })
   stickyHeader.addEventListener("mousemove",function(e){
    if(stickyHold == true)
      {
          let finalX = e.clientX;
          let finalY = e.clientY;
          let dx = finalX - initialX;
          let dy = finalY - initialY;
          let {top , left} = stickyDiv.getBoundingClientRect();
          //   sticky => top + dy
          //  sticky => left + dx
          stickyDiv.style.top = top + dy + "px";
          stickyDiv.style.left = left +dx + "px";
    
          initialX = finalX;
          initialY = finalY;
      }
   })
   stickyHeader.addEventListener("mouseup",function()
   {
       stickyHold = false;
   })
document.body.append(stickyDiv);
}