$(document).ready(function() {

        
  $('#review').on('click',function(e){
      e.preventDefault()
      $('#review_form').slideToggle(300);

      if ($(this).text() == "Add Review") { 
        $(this).text("Close Review"); 
      } 
        else { 
        $(this).text("Add Review");
      }; 
           
  });

  var newsletter = $('.newsletter').find('input').eq(1)
  var newsletter_content = $('.newsletter').children().eq(1)


  newsletter.on('click',function(ev){
      ev.preventDefault()
      newsletter_content.text('Thank You for signing up to our Newsletter!')
                         
  });

  var review_form = $('#review_form').children();
  var review_form_btn =  $('#review_form_btn');
  var review = $('#review_comment').val();  

   review_form_btn.on('click',function(ev){
             
    if ($('#review_comment').val() == "") {       
          $('#review_comment').css('border', '1px solid red');
          $('.alert_review').fadeIn(300);
          $('#review_comment').attr('placeholder', 'Please enter a review');
          ev.preventDefault();                 
    } 
                          
  });

    $(function() {
     $("#review_form")
        .on('ajax:beforeSend', function() { // set this code to happen just before the ajax request is made
          $("input[type='submit']") // make changes to the submit button
            .val('Saving...') // change the text on the button
            .attr('disabled', 'disabled');
            $('.alert_review').hide(); 
            $('.notice_review').fadeIn(300);
           
        })
        .on('ajax:complete', function() {
          $("input[type='submit']")
            .val('Add Review')
            .removeAttr('disabled');  
        }, function(){
          $("#review_comment").val('');
          $('#review_form').slideUp(300);     
          $("#review").text('Add Review');      
      });
  });


 });