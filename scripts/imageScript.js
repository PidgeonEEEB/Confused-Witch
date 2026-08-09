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
            const img = document.createElement('img');

            img.src = image.image;
            img.alt = image.title;

            img.onclick = function () { 
                openModel(image);
             };

            imgItem.appendChild(img);
            imgList.appendChild(imgItem);
        });
    }
});

function openModel(imageSrc)
{
    let model = document.getElementById('myModel');
    let modelImage = document.getElementById('modelImage');
    let descr = document.getElementById('description2');
    model.style.display = "flex";
    modelImage.src = imageSrc.image;

    const descItem = document.createElement('p');
    descItem.classList.add('description2');
    descItem.innerHTML = `${model.description}`;
    if(imageSrc.description != null)
    {
        descr.innerHTML = `${imageSrc.description}`;
    }
    else{
        description.innerHTM = ` `;
    } 


};

function popOut(imageSrc)
{
    window.open(imageSrc, '_blank');
};
function closeModel()
{
    let model = document.getElementById("myModel");
    model.style.display = "none";
};
