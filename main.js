"use strict";

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgFileNames = ['./images/pic1.jpg', './images/pic2.jpg', './images/pic3.jpg', './images/pic4.jpg', './images/pic5.jpg'];

/* Declaring the alternative text for each image file */
const altTexts = ['Closeup of a human eye', 'Satellite image', 'Purple flowers', 'Egyptian hieroglyphics', 'Moth on a leaf'];

/* Looping through images */
for (const imgFileName of imgFileNames) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', imgFileName);

    let i = imgFileNames.indexOf(imgFileName);
    newImage.setAttribute('alt', altTexts[i]);

    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', () => {
        displayedImage.setAttribute('src', imgFileName);
        displayedImage.setAttribute('alt', altTexts[i]);
    });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    let currentClassName = btn.getAttribute('class');

    if (currentClassName == 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = "Darken";
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }
});
