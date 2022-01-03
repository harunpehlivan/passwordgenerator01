$("#generate").click(function(){
  
  /*
   * Set up the variables
   */
  var charset = $('#charset').val();
  var password = '';
  var password_length = parseInt($('#length').val());
  
  /*
   * Fix a random letter from the given 
   * set onto the end of the password
   */
  for(var i = 0; i < password_length; i ++){
    var random_position = Math.floor(Math.random() * charset.length);
    password += charset[random_position];
  }
  
  
  /*
   * ---------------------
   * | Tests             |
   * ---------------------
   *
   * TODO: Add more tests to make sure
   * we have a really good password
   */
  if(password.length == password_length){
    /*
     * If we have successfully generated a
     * password, we need to just make sure
     * that we can display it by escaping
     * any HTML characters
     */
    password = password.replace(/</g, "&lt;").replace(/>/g, "&gt;");
	  var $input = $('<input />', {
      'value': password,
      'readonly': 'readonly',
      'type' : 'text'
    });
    
    $input.prependTo('#passwords');    
  }else{
    /*
     * On the off chance something went wrong,
     * log the various info associated with it
     */
    console.log(password.length , password_length, password);
  }

});