(function($) {
  $.fn.carousel = function(options){

    var defaults = {
        
    };

    var settings = $.extend(defaults, options); 


    var leftBtn = $('.carousel-arrow-left');
    var rightBtn = $('.carousel-arrow-right');
    var elementsList = $('.carousel-list');
 
    var pixelsOffset = 400;
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    var minimumOffset = - ((elementsCount - 5) * pixelsOffset);
    var maximumOffset = 0;
 
    leftBtn.click(function() {
        if (currentLeftValue != maximumOffset) {
            currentLeftValue += 400;
            elementsList.animate({ left : currentLeftValue + "px"}, 1000);
        }        
    });
 
    rightBtn.click(function() {
         if (currentLeftValue != minimumOffset) {
            currentLeftValue -= 400;
            elementsList.animate({ left : currentLeftValue + "px"}, 1000);
        }        
    });
    return this;
  };
})(jQuery);