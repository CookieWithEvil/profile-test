let isNext = true;

const clearClass = () => {
  if($('li.active').length > 1){
    while($('li.active').length){
      $('li.active').removeClass('active');
    }
  }
}

const slider = simpleslider.getSlider({
  container: $('#slider')[0],
  onChange: () => {
    $(`.slider__nav_item:nth-child(${slider.currentIndex() + 1})`).addClass('active');
    $(`.slider__nav_item:nth-child(${slider.prevIndex() + 1})`).removeClass('active');
  }
});
const manager = new Hammer.Manager($('#slider')[0]);
const Swipe = new Hammer.Swipe({direction: Hammer.DIRECTION_HORIZONTAL});

manager.add(Swipe);



manager.on('swipeleft', function() {
  if (isNext) {
    slider.reverse();
    isNext = false;
  }
  slider.next();

  clearClass()
  $(`.slider__nav_item:nth-child(${slider.currentIndex() + 1})`).addClass('active');
});

manager.on('swiperight', function() {
  if (!isNext) {
    slider.reverse();
    isNext = true;
  }
  slider.next();

  clearClass();
  $(`.slider__nav_item:nth-child(${slider.currentIndex() + 1})`).addClass('active');
});
