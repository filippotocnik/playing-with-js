$(function(){

  var sliderWrap = $('.slider-wrap')
  var slider = $('.slider')
  var item = $('.item')
  var itemLength = parseInt($('.item').length)
  var itemWidth = parseInt(item.eq(1).css('width'))
  
  var sliderWidth = itemLength * itemWidth

  slider.css('width', sliderWidth + 'px')

  sliderWrap.css('width', itemWidth + 'px')


  console.log(itemWidth)

   /* START SLIDER */
  $('#next').on('click', function(){
   $('.norape').show()
    var limit = -sliderWidth
    var currentPosition = parseInt($('.slider').css('left'))
    console.log(currentPosition)

    var move = currentPosition - itemWidth
    if (move <= limit) {
         $('.slider').animate({left: 0+"px"}, 10, function(){
           $('.norape').hide()
         }) 
    } else {
      $('.slider').animate({left: move+"px"}, 500, function(){
        $('.norape').hide()
      })
    }
    

  })


  $('#prev').on('click', function(){
    $('.norape').show()
    var limit = 0
    var currentPosition = parseInt($('.slider').css('left'))
    console.log(currentPosition)

    var move = currentPosition + itemWidth
    console.log(move)
    if (move > limit) {
      $('.norape').hide()
    } else {$('.slider').animate({left: move+"px"}, 500, function(){
      $('.norape').hide()
    })}
    
  })
  /* END SLIDER */

})