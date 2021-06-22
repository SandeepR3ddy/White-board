let photoDiv = document.querySelector("#photo");
let photoUploadInput = document.querySelector("#photo-upload");
let downloadDiv = document.querySelector("#download");
photoDiv.addEventListener("click", function () {
    photoUploadInput.click();
})
photoUploadInput.addEventListener("change", function (event) {
    let fileObject = event.target.files[0];
    let filePath = URL.createObjectURL(fileObject);
    let img = document.createElement("img");
    img.setAttribute("src", filePath);
    img.classList.add("sticky-image");
   // addSticky(img);
})
downloadDiv.addEventListener("click", function (e) {
    console.log(e);
    let imagePath = canvas.toDataURL("image/jpg");
    let aTag = document.createElement("a");
    aTag.download = "canvas.jpg";
    aTag.href = imagePath;
    aTag.click();
})