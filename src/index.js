document.addEventListener("DOMContentLoaded", function () {
    // 1 slide on small screens
    var perPage = document.body.clientWidth >= 768 ? 2 : 1;

    var onresize = function () {
        let width = document.body.clientWidth;

        perPage = width >= 768 ? 2 : 1;
        splide.options.perPage = perPage;
        splide.refresh();
    };

    // Listen when resizing the screen
    window.addEventListener("resize", onresize);

    var splide = new Splide(".splide", {
        perPage: perPage,
        rewind: true,
        gap: "1rem",
        padding: "2rem",
        marginRight: "10rem",
    });

    splide.mount();
});
