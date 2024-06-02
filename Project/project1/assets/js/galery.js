$(document).ready(function () {
    const gallery = $("#gallery");

    $.ajax({
        url: 'data/books.json',
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            data.images.forEach(function (image) {
                const imgElement = $("<img>").attr("src", image.src).attr("alt", image.caption);
                imgElement.on("click", function () {
                    showModal(image.src, image.caption);
                });
                gallery.append(imgElement);
            });
        },
        error: function (error) {
            console.error('Error loading images:', error);
        }
    });

    const modal = $("#modal");
    const modalImg = $("#modalImage");
    const captionText = $("#caption");
    const span = $("#close");

    function showModal(src, caption) {
        modal.css("display", "block");
        modalImg.attr("src", src);
        captionText.html(caption);
    }

    span.on("click", function () {
        modal.css("display", "none");
    });

    modal.on("click", function (event) {
        if (event.target === modal[0]) {
            modal.css("display", "none");
        }
    });
});
