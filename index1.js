function create1Image() {
    let img = document.createElement("img");

    img.src = "image2.webp";

     img.src = "image1.webp";

   
    img.width = 300;
    img.height = 200;

   
    img.alt = "Random Image";

    document.body.appendChild(img);
}

function createImage() {

    // First Image
    let img1 = document.createElement("img");
    img1.src = "image1.webp";   // Apni image ka naam likho
    img1.width = 250;
    img1.height = 200;

    // Second Image
    let img2 = document.createElement("img");
    img2.src = "image2.webp";   // Apni second image ka naam likho
    img2.width = 250;
    img2.height = 200;



    document.getElementById();



    // Body me add karo
    document.body.appendChild(img1);
    document.body.appendChild(img2);



}