var perPage = 0;

var onresize = function () {
    let width = document.body.clientWidth;

    perPage = width >= 768 ? 2 : 1;
    splide.options.perPage = perPage;
    splide.refresh();
};

window.addEventListener("resize", onresize);

var splide = new Splide(".splide", {
    perPage: 2,
    rewind: true,
    gap: "1rem",
    padding: "2rem",
});
splide.mount();
