//  ***** LIGHTBOX AREA  ***** 
const lightbox = document.createElement('div')
const images = document.querySelectorAll('img:not(.avatar):not(.icon)')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

images.forEach(image => {
    image.addEventListener('click', e => {
        lightbox.classList.add('active')
        const img = document.createElement('img')
        img.src = image.src
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(img)
        //  This blocks the background from scrolling when lightbox is open - must set overflow in main css otherwise on the first time you click on the modal the page will scroll to the top
        document.body.style.overflowY = 'hidden'

        // Adding a close button in the top-right corner of the lightbox
        const closeButton = document.createElement('button')
        closeButton.innerText = '×'
        closeButton.style.position = 'absolute'
        closeButton.style.top = '10px'
        closeButton.style.right = '15px'
        closeButton.style.fontSize = '50px'
        closeButton.style.border = 'none'
        closeButton.style.background = 'none'
        closeButton.style.color = 'black'
        closeButton.style.cursor = 'pointer'
        closeButton.addEventListener('click', () => {
            lightbox.classList.remove('active')
            document.body.style.overflowY = 'scroll'
        })
        lightbox.appendChild(closeButton)
    })
})


lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
    document.body.style.overflowY = 'scroll'
})



const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};
