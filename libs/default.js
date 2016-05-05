$(function() {
    less.pageLoadFinished.then(function() {
        var slideshow = remark.create({
            slideNumberFormat: '',
            sourceUrl: 'content.md',
            highlightLines: true,
            highlightSpans: true,
            highlightLanguage: 'c'
        });
        // slideshow.on('beforeShowSlide', function (slide) {
        //     console.log(slide);
        // });
        MathJax.Hub.Typeset();

        $('#fullscreen').click(function() {
            var elem = document.getElementsByClassName('remark-container')[0];
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.msRequestFullscreen) {
                elem.msRequestFullscreen();
            } else if (elem.mozRequestFullScreen) {
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) {
                elem.webkitRequestFullscreen();
            }
        });
    });
});