$(function() {

//disable copy/paste    
$('input.disablecopypaste').bind('copy paste', function (e) {
       e.preventDefault();
});

//show hide Other title
$('#title select#title').change(function(){

		 //add/remove classes	
        if ( $(this).val() === 'Other') {
        	$('#title_other').addClass('show').removeClass('hidden');
			$('#title_other').removeClass('hidden').addClass('show').removeClass('success');
			$('input[name=title_other]').attr('data-required', true).val('');
        } else{
	 		$('#title_other').removeClass('show').addClass('hidden');
	 		$('input[name=title_other').removeAttr('data-required').val('null');	
	 		$('#title_other').addClass('hidden').removeClass('show');
        }
});


//show hide Other title
$('input:radio[name=country_of_birth]').change(function(){

		 //add/remove classes	
        if ( $(this).val() === 'Other') {
        	$('div.form-group#country_other').addClass('show').removeClass('hidden');
			$('div.form-group#country_other').removeClass('hidden').addClass('show').removeClass('success');
			$('#country_other input[name=country_other]').attr('data-required', true).val('');
        } else{
	 		$('div.form-group#country_other').removeClass('show').addClass('hidden');
	 		$('div.form-group#country_other').addClass('hidden').removeClass('show');
	 		$('#country_other input[name=country_other]').removeAttr('data-required').val('null');	

        }
});




//Error messages
var box_message = '<span class="message-text"><h2>There was a problem submitting the form</h2><p>Please try the following:</p></span>';


	//do validation
	$('#lo1form').validate({
		onChange: true,
		invalid : function() {
			
			//scroll to top
			$('html, body').animate({ scrollTop: $("#error-box").offset().top+(-61)}, 600);
			
			//find error elements and display as list
			var arr = [];
			$(".has-error .form-desc span").each(function(index, elem){
			    arr.push('<li><a href="#'+$(elem).attr('id') + '">' + $(this).text() + '</a></li>' );
			});

			var box_message_list = arr.join('');

			//clear error messages
			$("#error-box").find('.message-text').remove();
			$("#error-box").find('.required').remove();
			$("#error-box").find('.msg').remove();
			
			//append error messages
			$('#error-box').append( box_message + ' <span class="msg"><ol>' +box_message_list + '</ol></span>' ).addClass('error-box');
			
			//Jump to each field 
			$(function() {
			  $('a[href*=#]:not([href=#])').click(function() {
			    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
			        || location.hostname == this.hostname) {
			      var target = $(this.hash);
			      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			      if (target.length) {
			        $('html,body').animate({
			          scrollTop: target.offset().top+(-67)
			        }, 600);
			        return false;
			      }
			    }
			  });
			});

		},
		eachValidField : function() {
			$(this).closest('.form-group').removeClass('has-error').addClass('has-success');
		},
		eachInvalidField : function() {
			$(this).closest('.form-group').removeClass('has-success').addClass('has-error');
		},
		description : {
			start_radios: {
				required 	: '<span class="required" id="start_radios">Required</span>',
				pattern 	: '<span class="pattern" id="start_radios">Error</span>',
				conditional : '<span class="conditional" id="start_radios">Conditional</span>',
				valid 		: ''	
				},
			title: {
				required 	: '<span class="required" id="title">Select your title</span>',
				pattern 	: '<span class="pattern" id="title">Error</span>',
				conditional : '<span class="conditional" id="title">Conditional</span>',
				valid 		: ''	
				},
			title_other: {
				required 	: '<span class="required" id="title_other">Enter your title</span>',
				pattern 	: '<span class="pattern" id="title_other">Error</span>',
				conditional : '<span class="conditional" id="title_other">Conditional</span>',
				valid 		: '<span class="success hidden-xs" id="title_other">&#10004;</span>'	
				},
			country_other: {
				required 	: '<span class="required" id="country_other">Enter your country</span>',
				pattern 	: '<span class="pattern" id="country_other">Error</span>',
				conditional : '<span class="conditional" id="country_other">Conditional</span>',
				valid 		: '<span class="success hidden-xs" id="country_other">&#10004;</span>'	
				},
			surname: {
				required 	: '<span class="required" id="surname">Enter your surname</span>',
				pattern 	: '<span class="pattern" id="surname">Error</span>',
				conditional : '<span class="conditional" id="surname">Conditional</span>',
				valid 		: '<span class="success hidden-xs" id="surname">&#10004;</span>'	
				},
			your_surname: {
				required 	: '<span class="required" id="your_surname">Enter your surname</span>',
				pattern 	: '<span class="pattern" id="your_surname">Error</span>',
				conditional : '<span class="conditional" id="your_surname">Conditional</span>',
				valid 		: '<span class="success hidden-xs" id="your_surname">&#10004;</span>'	
				},
			forname: {
				required 	: '<span class="required" id="forname">Enter your forname</span>',
				pattern 	: '<span class="pattern" id="forname">Error</span>',
				conditional : '<span class="conditional" id="forname">Conditional</span>',
				valid 		: '<span class="success hidden-xs" id="forname">&#10004;</span>'	
				},
			your_forname: {
				required 	: '<span class="required" id="your_forname">Enter your forname</span>',
				pattern 	: '<span class="pattern" id="your_forname">Error</span>',
				conditional : '<span class="conditional" id="your_forname">Conditional</span>',
				valid 		: '<span class="success hidden-xs" id="your_forname">&#10004;</span>'	
				},
			birth: {
				required 	: '<span class="required" id="birth">Enter your date of birth</span>',
				pattern 	: '<span class="pattern" id="birth">Error</span>',
				conditional : '<span class="conditional" id="birth">Conditional</span>',
				valid 		: ''	
				},
			day: {
				required 	: '<span class="required" id="day">Enter the day of your birth</span>',
				pattern 	: '<span class="pattern" id="day">Error</span>',
				conditional : '<span class="conditional" id="day">Conditional</span>',
				valid 		: '<span class="success hidden-xs" id="day">&#10004;</span>'	
				},
			month: {
				required 	: '<span class="required" id="month">Enter the month of your birth</span>',
				pattern 	: '<span class="pattern" id="month">Error</span>',
				conditional : '<span class="conditional" id="month">Conditional</span>',
				valid 		: '<span class="success hidden-xs" id="month">&#10004;</span>'	
				},
			year: {
				required 	: '<span class="required" id="year">Enter the year of your birth</span>',
				pattern 	: '<span class="pattern" id="year">Error</span>',
				conditional : '<span class="conditional" id="year">Conditional</span>',
				valid 		: '<span class="success hidden-xs" id="year">&#10004;</span>'	
				},
			town_of_birth: {
				required 	: '<span class="required" id="town_of_birth">Enter the town of your birth</span>',
				pattern 	: '<span class="pattern" id="town_of_birth">Error</span>',
				conditional : '<span class="conditional" id="town_of_birth">Conditional</span>',
				valid 		: '<span class="success hidden-xs" id="town_of_birth">&#10004;</span>'	
				},
			country_of_birth: {
				required 	: '<span class="required" id="country_of_birth">Select the country of your birth</span>',
				pattern 	: '<span class="pattern" id="country_of_birth">Error</span>',
				conditional : '<span class="conditional" id="country_of_birth">Conditional</span>',
				valid 		: ''	
				},
			telephone: {
				required 	: '<span class="required" id="telephone">Enter your telephone number</span>',
				pattern 	: '<span class="pattern" id="telephone">Error</span>',
				conditional : '<span class="conditional" id="telephone">Conditional</span>',
				valid 		: '<span class="success hidden-xs" id="telephone">&#10004;</span>'	
				},
			alt_telephone: {
				required 	: '<span class="required" id="alt_telephone">Enter your alternative telephone number</span>',
				pattern 	: '<span class="pattern" id="alt_telephone">Error</span>',
				conditional : '<span class="conditional" id="alt_telephone">Conditional</span>',
				valid 		: '<span class="success hidden-xs" id="alt_telephone">&#10004;</span>'	
				},
			email: {
				required 	: '<span class="required" id="email">Enter your email</span>',
				pattern 	: '<span class="pattern" id="email">Error</span>',
				conditional : '<span class="conditional" id="email">Conditional</span>',
				valid 		: '<span class="success hidden-xs" id="email_confirm">&#10004;</span>'	
				},
			email_confirm: {
				required 	: '<span class="required" id="email_confirm">Enter your email again</span>',
				pattern 	: '<span class="pattern" id="email_confirm">Error</span>',
				conditional : '<span class="conditional" id="email_confirm">Conditional</span>',
				valid 		: '<span class="success hidden-xs" id="email_confirm">&#10004;</span>'	
				},
			address1: {
				required 	: '<span class="required" id="address1">Enter your address line 1</span>',
				pattern 	: '<span class="pattern" id="address1">Error</span>',
				conditional : '<span class="conditional" id="address1">Conditional</span>',
				valid 		: '<span class="success hidden-xs" id="address1">&#10004;</span>'	
				},
			address2: {
				required 	: '<span class="required" id="address2">Enter your address line 2/span>',
				pattern 	: '<span class="pattern" id="address2">Error</span>',
				conditional : '<span class="conditional" id="address2">Conditional</span>',
				valid 		: '<span class="success hidden-xs" id="address2">&#10004;</span>'	
				},
			town: {
				required 	: '<span class="required" id="town">Enter your town</span>',
				pattern 	: '<span class="pattern" id="town">Error</span>',
				conditional : '<span class="conditional" id="town">Conditional</span>',
				valid 		: '<span class="success hidden-xs" id="town">&#10004;</span>'	
				},
			county: {
				required 	: '<span class="required" id="county">Enter your county</span>',
				pattern 	: '<span class="pattern" id="county">Error</span>',
				conditional : '<span class="conditional" id="county">Conditional</span>',
				valid 		: '<span class="success hidden-xs" id="county">&#10004;</span>'	
				},
			postcode: {
				required 	: '<span class="required" id="postcode">Enter your postcode</span>',
				pattern 	: '<span class="pattern" id="postcode">Postcode error</span>',
				conditional : '<span class="conditional" id="postcode">Conditional</span>',
				valid 		: '<span class="success hidden-xs" id="postcode">&#10004;</span>'	
				},
			declaration: {
				required 	: '<span class="required" id="declaration">Required</span>',
				pattern 	: '<span class="pattern" id="declaration">Error</span>',
				conditional : '<span class="conditional" id="declaration">Conditional</span>',
				valid 		: ''	
				},
			explanation: {
				required 	: '<span class="required" id="explanation">Required</span>',
				pattern 	: '<span class="pattern" id="explanation">Error</span>',
				conditional : '<span class="conditional" id="explanation">Conditional</span>',
				valid 		: ''	
				},
			relationship: {
				required 	: '<span class="required" id="relationship">Select your relationship to passport holder</span>',
				pattern 	: '<span class="pattern" id="relationship">Error</span>',
				conditional : '<span class="conditional" id="relationship">Conditional</span>',
				valid 		: '<span class="success hidden-xs" id="relationship">&#10004;</span>'	
				}		
			},
				conditional : {
					email_confirm : function() {

						return $(this).val() == $('input#email').val();
					}
			}
	});
});