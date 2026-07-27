document.addEventListener("DOMContentLoaded", function () {

    let imgData = [];

    fetch('scripts/galeryFiles.json')
        .then(response => response.json())
        .then(data => {
            imgData = data.images;
            renderGalery(imgData);
        });

    function renderGalery(images){
        const imgList = document.getElementById('img-list');
        imgList.innerHTML = '';

        images.forEach(image => {
            const imgItem = document.createElement('div');
            imgItem.classList.add('galery-list');
            imgItem.innerHTML = `
                    <img src="${image.image}" 
                    onclick="popOut('${image.image}')" 
                    alt="${image.title}">
                `;

            imgList.appendChild(imgItem);
        });
    }
});

function openModel(imageSrc)
{
    let model = document.getElementById('myModel');
    let modelImage = document.getElementById('modelImage');
    model.style.display = "block";
    modelImage.src = imageSrc;
    let button = document.getElementById('buttonPlace');
    button.style.display = "block";

};

function popOut(imageSrc)
{
    window.open(imageSrc, '_blank');
};
function closeModel()
{
    let model = document.getElementById("myModel");
    model.style.display = "none";
    let button = document.getElementById('buttonPlace');
    button.style.display = "none";
};