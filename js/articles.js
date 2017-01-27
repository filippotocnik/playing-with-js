$(function() {
  var i = -1;
  var offset = $(window).height() / 2
  $('.article').each(function() {
    $('.sidebar').append('<div class="progress"><div class="data"></div></div>')


    i++;
    var elStart = $(this).offset().top
    var elEnd = $(this).offset() + $(this).css('height')
    var scrollPosition = $(document).scrollTop();
    console.log(scrollPosition)
    console.log(elStart)
      //console.log(offset)
    if ((scrollPosition) > elStart) {
      $('.data').eq(i).addClass('active')
    } else {
      $('.data').eq(i).removeClass('active')
    }

  })

  $(window).on('scroll', function() {
    var i = -1;
    var offset = $(window).height() / 2

    $('.article').each(function() {

      i++;
      var elStart = $(this).offset().top
      var elEnd = parseInt($(this).offset().top) + parseInt($(this).css('height'))
      var scrollPosition = $(document).scrollTop();
      //console.log(scrollPosition)
      //console.log(elStart)
      console.log(elEnd)
      if ((scrollPosition) > elStart) {
        var percent = parseInt(scrollPosition) / parseInt(elEnd);
        console.log(percent)
        if (percent > 100) {
          percent = 100
        }


        $('.data').eq(i).addClass('active')
        $('.data').eq(i).css('width', percent * 100 + '%')
      } else {
        $('.data').eq(i).removeClass('active')
      }
    })

  })

})