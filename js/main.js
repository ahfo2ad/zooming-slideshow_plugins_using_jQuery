$(document).ready(function () {

    $('.zooming img').on('click', function () {
        $('.zooming img').imageZoom({ "zoom": "200" })
    });
    
    $('.slideshow').slideshowPlugin({
        effect: 'sliding',
    });
});
