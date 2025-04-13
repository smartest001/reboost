var backgroundImage = document.getElementsByClassName("page-background")

const images = ['backgeoundq.jpg', 'background2.jpg', 'background3.jpg'];
let currIndex = 0;

const changeBackgroundImage = () => {
    backgroundImage.style.backgroundImage = `url('${images[currIndex]}')`;
    currIndex = (currIndex + 1) % images.length;
};


setInterval(changeBackgroundImage, 3000);