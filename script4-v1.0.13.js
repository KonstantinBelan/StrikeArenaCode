    window.onload = function () {
        var scr = $(".uc-scroll .t396__artboard");
        scr.mousedown(function () {
            var startX = this.scrollLeft + event.pageX;
            scr.mousemove(function () {
                this.scrollLeft = startX - event.pageX;
                return false;
            });
        });
        $(window).mouseup(function () {
            scr.off("mousemove"); 
        });
    }

    $(document).ready(function() {
        var blockIds = ['#rec810740870', '#rec813256096', '#rec815723720', '#rec831597250', '.uc-slider-img-1', '.uc-slider-img-2']; // массив идентификаторов блоков
        adjustScreenZoom(blockIds); 
    
        $(window).resize(function() {
            adjustScreenZoom(blockIds); 
        });
    });
    
    function adjustScreenZoom(blockIds) {
        var screenWidth = $(window).width();
        var zoomLevel;

        if (screenWidth <= 320) {
            zoomLevel = screenWidth / 320;
        } else if (screenWidth <= 480) {
            zoomLevel = screenWidth / 480; 
        } else if (screenWidth <= 768) {
            zoomLevel = screenWidth / 768; 
        } else {
            zoomLevel = screenWidth / 1200; 
        }
    
        blockIds.forEach(function(blockId) {
            $(blockId).css('zoom', zoomLevel);
        });
    }
