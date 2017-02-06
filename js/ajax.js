$(function() {

  $('#jquery-btn').on('click', function() {

    jqAjax();

  })


  $('#form1').on('click', function() {

    submitForm();

  })


  var jsBtn = document.getElementById('js-btn')

  jsBtn.addEventListener('click', function() {

    standardAjax();

  })

})


function jqAjax() {

  $.ajax({
    type: 'GET',
    url: 'ajax.php',
    success: function(resp) {
      var returnObj = JSON.parse(resp);
      alert('Json je spisal ' + returnObj['author'] + ' ob ' + returnObj['time'])
    },
    error: function() {
      console.log('not successful ajax')
    }
  });
}



function standardAjax() {
  var request = new XMLHttpRequest();
  request.open('GET', 'ajax.php', true);

  request.onreadystatechange = function() {
    if (this.readyState === 4) {
      if (this.status >= 200 && this.status < 400) {

        // Success!
        var resp = this.responseText;
        var returnObj = JSON.parse(resp);
        alert('Json je spisal ' + returnObj['author'] + ' ob ' + returnObj['time'])
      } else {

        console.log('not successful ajax')
          // Error :(
      }
    }
  };

  request.send();
  request = null;
}

function submitForm() {



}