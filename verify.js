// demo images---------
const images = {
    "HBAZIHYT": "certificates/certificate1.png",
    "HAEWRQXM": "certificates/certificate2.png",
    "HKUIOYRP": "certificates/certificate3.png",
    "HYUYTREL": "certificates/certificate4.png"
};

function showImage() {
    const inputElement = document.getElementById("imageNumber");
    const imageContainer = document.getElementById("displayedImage");
    
    const inputNumber = inputElement.value;
    const imageUrl = images[inputNumber];
    
    if (imageUrl) {
        imageContainer.src = imageUrl;
        imageContainer.style.display = "block";

        const newURL = '#container2';
        window.location.assign(newURL);
    } else {
        imageContainer.style.display = "none";
        alert("Data not found for the entered code.");
    }
}