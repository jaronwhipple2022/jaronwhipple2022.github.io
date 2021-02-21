let imagesToLoad = document.querySelectorAll('img[data-src]');

const imgOptions = {
    threshold: 0,
    rootMargin: "0px, 0px, 50px, 0px"
};

const LoadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onLoad = () => {
        image.removeAttribute('data-src');
    };
};

imagesToLoad.forEach((img) => {
    LoadImages(img);
});

if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items,observer) => {
        items.foreach((item) => {
            if(item.isIntersecting) {
                LoadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    }, imgOptions);
    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
} else {
    imagesToLoad.forEach((img) => {
        LoadImages(img);
    });
}