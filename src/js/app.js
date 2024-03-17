document.addEventListener("DOMContentLoaded", function() {
    // Create the image gallery
    console.log("test")
    const images = [
        "https://acre-image-collections.s3.amazonaws.com/image-6578722caea701702392364_medium.jpg",
        "https://acre-images.s3.amazonaws.com/image-5ac62b9e561041522936734_medium.jpeg",
        "https://acre-image-collections.s3.amazonaws.com/image-65787222618211702392354_medium.jpg",
        "https://acre-image-collections.s3.amazonaws.com/image-657872175b22e1702392343_medium.jpg",
        "https://acre-image-collections.s3.amazonaws.com/image-657871ff7d8401702392319_medium.jpg",
        "https://acre-image-collections.s3.amazonaws.com/image-6576286c7c4b61702242412_medium.jpg",
        "https://acre-image-collections.s3.amazonaws.com/image-6578af5f9af671702408031_medium.jpg",
        "https://acre-images.s3.amazonaws.com/image-5b01cdf4b2e9a1526844916.jpg",
        "https://acre-image-collections.s3.amazonaws.com/image-6578722caea701702392364_medium.jpg",
        "https://acre-images.s3.amazonaws.com/image-5ac62b9e561041522936734_medium.jpeg",
        "https://acre-image-collections.s3.amazonaws.com/image-65787222618211702392354_medium.jpg",
        "https://acre-image-collections.s3.amazonaws.com/image-657872175b22e1702392343_medium.jpg",
        "https://acre-image-collections.s3.amazonaws.com/image-657871ff7d8401702392319_medium.jpg",
        "https://acre-image-collections.s3.amazonaws.com/image-6576286c7c4b61702242412_medium.jpg",
        "https://acre-image-collections.s3.amazonaws.com/image-6578af5f9af671702408031_medium.jpg",
        "https://acre-images.s3.amazonaws.com/image-5b01cdf4b2e9a1526844916.jpg",
        "https://acre-image-collections.s3.amazonaws.com/image-6578722caea701702392364_medium.jpg",
        "https://acre-images.s3.amazonaws.com/image-5ac62b9e561041522936734_medium.jpeg",
        "https://acre-image-collections.s3.amazonaws.com/image-65787222618211702392354_medium.jpg",
        "https://acre-image-collections.s3.amazonaws.com/image-657872175b22e1702392343_medium.jpg",
        "https://acre-image-collections.s3.amazonaws.com/image-657871ff7d8401702392319_medium.jpg",
        "https://acre-image-collections.s3.amazonaws.com/image-6576286c7c4b61702242412_medium.jpg",
        "https://acre-image-collections.s3.amazonaws.com/image-6578af5f9af671702408031_medium.jpg",
        "https://acre-images.s3.amazonaws.com/image-5b01cdf4b2e9a1526844916.jpg",
        "https://acre-image-collections.s3.amazonaws.com/image-6578722caea701702392364_medium.jpg",
        "https://acre-images.s3.amazonaws.com/image-5ac62b9e561041522936734_medium.jpeg",
        "https://acre-image-collections.s3.amazonaws.com/image-65787222618211702392354_medium.jpg",
        "https://acre-image-collections.s3.amazonaws.com/image-657872175b22e1702392343_medium.jpg",
        "https://acre-image-collections.s3.amazonaws.com/image-657871ff7d8401702392319_medium.jpg",
        "https://acre-image-collections.s3.amazonaws.com/image-6576286c7c4b61702242412_medium.jpg",
        "https://acre-image-collections.s3.amazonaws.com/image-6578af5f9af671702408031_medium.jpg",
        "https://acre-images.s3.amazonaws.com/image-5b01cdf4b2e9a1526844916.jpg",
        "https://acre-image-collections.s3.amazonaws.com/image-6578722caea701702392364_medium.jpg",
        "https://acre-images.s3.amazonaws.com/image-5ac62b9e561041522936734_medium.jpeg",
        "https://acre-image-collections.s3.amazonaws.com/image-65787222618211702392354_medium.jpg",
        "https://acre-image-collections.s3.amazonaws.com/image-657872175b22e1702392343_medium.jpg",
        "https://acre-image-collections.s3.amazonaws.com/image-657871ff7d8401702392319_medium.jpg",
        "https://acre-image-collections.s3.amazonaws.com/image-6576286c7c4b61702242412_medium.jpg",
        "https://acre-image-collections.s3.amazonaws.com/image-6578af5f9af671702408031_medium.jpg",
        "https://acre-images.s3.amazonaws.com/image-5b01cdf4b2e9a1526844916.jpg",
        "https://acre-image-collections.s3.amazonaws.com/image-6578722caea701702392364_medium.jpg",
        "https://acre-images.s3.amazonaws.com/image-5ac62b9e561041522936734_medium.jpeg",
        "https://acre-image-collections.s3.amazonaws.com/image-65787222618211702392354_medium.jpg",
        "https://acre-image-collections.s3.amazonaws.com/image-657872175b22e1702392343_medium.jpg",
        "https://acre-image-collections.s3.amazonaws.com/image-657871ff7d8401702392319_medium.jpg",
        "https://acre-image-collections.s3.amazonaws.com/image-6576286c7c4b61702242412_medium.jpg",
        "https://acre-image-collections.s3.amazonaws.com/image-6578af5f9af671702408031_medium.jpg",
        "https://acre-images.s3.amazonaws.com/image-5b01cdf4b2e9a1526844916.jpg",
        "https://acre-image-collections.s3.amazonaws.com/image-6578722caea701702392364_medium.jpg",
        "https://acre-images.s3.amazonaws.com/image-5ac62b9e561041522936734_medium.jpeg",
        "https://acre-image-collections.s3.amazonaws.com/image-65787222618211702392354_medium.jpg",
        "https://acre-image-collections.s3.amazonaws.com/image-657872175b22e1702392343_medium.jpg",
        "https://acre-image-collections.s3.amazonaws.com/image-657871ff7d8401702392319_medium.jpg",
        "https://acre-image-collections.s3.amazonaws.com/image-6576286c7c4b61702242412_medium.jpg",
        "https://acre-image-collections.s3.amazonaws.com/image-6578af5f9af671702408031_medium.jpg",
        "https://acre-images.s3.amazonaws.com/image-5b01cdf4b2e9a1526844916.jpg",
        "https://acre-image-collections.s3.amazonaws.com/image-6578722caea701702392364_medium.jpg",
        "https://acre-images.s3.amazonaws.com/image-5ac62b9e561041522936734_medium.jpeg",
        "https://acre-image-collections.s3.amazonaws.com/image-65787222618211702392354_medium.jpg",
        "https://acre-image-collections.s3.amazonaws.com/image-657872175b22e1702392343_medium.jpg",
        "https://acre-image-collections.s3.amazonaws.com/image-657871ff7d8401702392319_medium.jpg",
        "https://acre-image-collections.s3.amazonaws.com/image-6576286c7c4b61702242412_medium.jpg",
        "https://acre-image-collections.s3.amazonaws.com/image-6578af5f9af671702408031_medium.jpg",
        "https://acre-images.s3.amazonaws.com/image-5b01cdf4b2e9a1526844916.jpg",
        "https://acre-image-collections.s3.amazonaws.com/image-6578722caea701702392364_medium.jpg",
        "https://acre-images.s3.amazonaws.com/image-5ac62b9e561041522936734_medium.jpeg",
        "https://acre-image-collections.s3.amazonaws.com/image-65787222618211702392354_medium.jpg",
        "https://acre-image-collections.s3.amazonaws.com/image-657872175b22e1702392343_medium.jpg",
        "https://acre-image-collections.s3.amazonaws.com/image-657871ff7d8401702392319_medium.jpg",
        "https://acre-image-collections.s3.amazonaws.com/image-6576286c7c4b61702242412_medium.jpg",
        "https://acre-image-collections.s3.amazonaws.com/image-6578af5f9af671702408031_medium.jpg",
        "https://acre-images.s3.amazonaws.com/image-5b01cdf4b2e9a1526844916.jpg",
    ];

    const gallery = document.querySelector(".image-gallery");

    images.forEach((image, index) => {
        const container = document.createElement("div");
        container.classList.add("col-lg-3", "col-md-6", "col-sm-12", "image-container"); // Bootstrap grid classes

        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("id", `image-checkbox-${index}`);
        checkbox.classList.add("image-checkbox");

        const overlay = document.createElement("div");
        overlay.classList.add("image-overlay");

        const img = new Image();
        img.classList.add("image");
        img.src = image;

        // Check the associated checkbox when the image is clicked
        img.addEventListener("click", function() {
            checkbox.checked = !checkbox.checked;
        });

        container.appendChild(checkbox);
        container.appendChild(overlay);
        container.appendChild(img);

        gallery.appendChild(container);
    });

    // Lazy load images when they are in viewport
    document.addEventListener("scroll", function() {
        const images = document.querySelectorAll(".image");
        images.forEach(image => {
            if (isInViewport(image) && !image.src) {
                image.src = image.dataset.src;
            }
        });
    });

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
});
