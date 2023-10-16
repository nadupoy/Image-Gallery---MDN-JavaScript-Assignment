# Image Gallery:

## Summary:
This is my attempt of the [Image gallery](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Image_gallery#assessment_or_further_help) assesment from MDN's [JavaScript tutorial](https://developer.mozilla.org/en-US/docs/Learn/JavaScript).

I would like to express my sincere gratitude and appreciation to the entire team at [MDN Web Docs](https://github.com/mdn) for putting together the knowledge and resources for learning web development and making them accessible.


## What I learned:

The most challenging part in this assignment was how to match each *`<img>`*'s *`src`* attribute to its *`<alt>`* attribute with each loop iteration.

When creating the array of *`alt `* attribute values, I ensured that each *`src`* attribute value corresponded in index value to its *`alt`* attribute value:

```js
...
const imgFileNames = ['./images/pic1.jpg', './images/pic2.jpg', './images/pic3.jpg', './images/pic4.jpg', './images/pic5.jpg'];

const altTexts = ['Closeup of a human eye', 'Satellite image', 'Purple flowers', 'Egyptian hieroglyphics', 'Moth on a leaf'];
...
```
<br>

Consequently, the index value could be used to access the respective *`alt`* attribute value, as shown in the code snippet below:

```js
for (const imgFileName of imgFileNames) {
    ...
    let i = imgFileNames.indexOf(imgFileName);
    newImage.setAttribute('alt', altTexts[i]);
    ...
    newImage.addEventListener('click', () => {
        displayedImage.setAttribute('src', imgFileName);
        displayedImage.setAttribute('alt', altTexts[i]);
    });
}
...
```