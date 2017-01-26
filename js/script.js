$(function () {

  $(document).on('click','.click', function () {
    this.remove()
  })

  $(window).on('resize', function () {
    console.log($(window).width())
  })

  $('.square').on('click', function () {
    console.log($(this).css('background-color'))
    if ($(this).css('background-color') == 'rgb(255, 0, 0)') {
      $(this).css('background-color', 'green')
    }
  })

  $('#btn').on('click', function (e) {
    e.preventDefault()

    var firstname = $('input[name=firstname]').val()
    var lastname = $('input[name=lastname]').val()
    var age = $('input[name=age]').val()

    $('#neki').append('<p>Moje ime je ' + firstname + ', pisem se ' + lastname + ', star sem ' + age + '.</p>')


    console.log('clicked!')
  })

  var i = 0

  $('#btn2').on('click', function () {
    console.log('yo')
    i++
    $('#new-button').append('<button class="click">'+ i +'</button>')

    

  })
  
  /* SLIDER */

  $('#next').on('click', function(){
   $('.norape').show()
    var limit = -1800
    var currentPosition = parseInt($('.slider').css('left'))
    console.log(currentPosition)

    var move = currentPosition - 600
    if (move <= limit) {
         $('.slider').animate({left: 0+"px"}, 10, function(){
           $('.norape').hide()
         }) 
        /*$('#next').hide()*/
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

    var move = currentPosition + 600
    console.log(move)
    if (move > limit) {
      $('.norape').hide()
    } else {$('.slider').animate({left: move+"px"}, 500, function(){
      $('.norape').hide()
    })}
    

  })

})