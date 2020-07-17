//This is sample AJAX request in javascript + jQuery

var url = 'https://api.jsonbin.io/b/5f1197559180616628435dcd/1';
$.ajax({'url': url,
  type: 'GET',
  dataType: 'json',
  success: function (res) {
    var data = res.data;
    document.write("ID    -    Name     -     Country<br>");
    for(var i=0; i<data.length; i++){
      document.write(data[i].id+" - "+data[i].name+" - "+data[i].country+"<br>");
    }
  }
});
