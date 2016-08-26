$(function(){

  $('form').submit(function(event){
    event.preventDefault();

    var info = $(this).serialize().replace(/\+{1,}(?![A-Za-z0-9])/g,"");
    var test = info.split('&')
    var body   = test[0].replace(/comment%5Bbody%5D=/i, ""); //i -> Case-insensitive search.
    var author = test[1].replace(/comment%5Bauthor%5D=/i, "");

    console.log('input body:'+body);
    console.log('input author:'+author);
    console.log("***** variable info *****");
    console.log( info );
    console.log("***** fin info *****");

    if(body != ""){
      if(author != ""){
        //Ruta a la que se hace post, información que se manda(info), información que se recive(data) ***STRING***
        $.post('/new_comment', info, function(data){
          console.log("***** variable data *****");
          var comment = data.split(',');
          console.log(data);
          console.log(comment);
          comment = "<li>"+comment[0]+"<span class=\"author\">"+comment[1]+"</span></li>"
          console.log(comment);
          console.log("***** fin data *****");
          $( "#comment_list" ).append(comment);//importante usar .empty() o las respuestas se acumulan
          $("#alert").empty().append("<strong>Tu comentario fue añadido con éxito</strong>").css({"color":"green"});
        });
        $("#add_field").find("div").remove();//remueve el formulario de comentario
      }//end if(author != "")
      else{
        $("#alert").empty().append("<strong>El autor no puede estar vacío</strong>").css({"color":"red"});
      }
    }//end if(body != "")
    else{
      $("#alert").empty().append("<strong>El comentario no puede estar vacío</strong>").css({"color":"red"});
    }    

  });//end $(form).submit


  $("#new_comment_button").click(function() {
    var intId = $("#add_field div").length + 1;
    var fieldWrapper = $("<div class=\"fieldwrapper\" id=\"field" + intId + "\"/>");
      //var fName = $("<input type=\"text\" class=\"fieldname\" />");
        //name=\"question[body"+ intId +"]\" 
    var fName = $("<input type=\"text\" name=\"comment[body]\"n placeholder=\"Escribe tu comentario :) \" style=\"width: 99%;\"><br><input type=\"text\" name=\"comment[author]\"n placeholder=\"Firma\"><br><input type=\"submit\" value=\"Envíar\">");
      //var fType = $("<select class=\"fieldtype\"><option value=\"checkbox\">Checked</option><option value=\"textbox\">Text</option><option value=\"textarea\">Paragraph</option></select>");
    var removeButton = $("<input type=\"button\" value=\"Descartar\" /><br>");
    removeButton.click(function() {
        $(this).parent().remove();
    });
    if ( intId == 1 ){
      fieldWrapper.append(fName);
        //fieldWrapper.append(fType);
      fieldWrapper.append(removeButton);
      $("#add_field").append(fieldWrapper);
    }
  });      

});

