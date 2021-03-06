$(document).ready(function() {
	    var $country = $("#sele");
	    $country.on("change", function (ev) {
			var country_id = $(ev.currentTarget).val();
			openerp.jsonRpc('/addmission/' + country_id, 'call', {}).done(function (data) {
				if (data.length > 0){
					$.each(data, function(key, value) {
	                	$('#state').append($("<option />").attr("value", value.id).text(value.name));
	            	});
	           	} else {
	           		$('#state option').remove();
	           		$('#state').append($("<option />").attr("value", 0).text('State...'));
	           	}
			});
	    });
		$('#datetimepicker').datepicker({
                dateFormat: 'yy-mm-dd'
            });

		$('#datetimepicker_sec').datepicker({
                dateFormat: 'yy-mm-dd'
            });

        $('#datetimepicker_join').datepicker({
        		dateFormat: 'yy-mm-dd'
            });

		$('#sp').click(function(){
			$('#disability').show();
		});
		$('#list_other').click(function(){
			$('#visible_list').show();
		});

		$('#bank_type').click(function(){
			$('#visible_bank_field').show();
		});

		$('#not_sp').click(function(){
			$('#disability').hide();
		});
		$('input#citiz').click(function(){
			$('#nrc').show();
			if($('#citizenship').is(':visible')){
				$('#citizenship').hide();
			}
			if($('#passport').is(':visible')){
				$('#passport').hide();
			}
		});
		$('input#not_citiz').click(function(){
			$('#citizenship').show();
			$('#passport').show();
			if($('#nrc').is(':visible')){
				$('#nrc').hide();
			}
		});
		$('#working').click(function(){
			$('#employed').show();
			if ($('#teacher').is(':checked')){
				$('#school_data').show();
				if($('#empl_data').is(':visible')){
					$('#empl_data').hide();
				}
			}
			if ($('#not_teacher').is(':checked')){
				$('#empl_data').show();
				if($('#school_data').is(':visible')){
					$('#school_data').hide();
				}
			}
		});
		$('#not_working').click(function(){
			$('#employed').hide();
			if($('#school_data').is(':visible')){
				$('#school_data').hide();
			}
			if($('#empl_data').is(':visible')){
				$('#empl_data').hide();
			}
		});
		$('#teacher').click(function(){
			$('#school_data').show();
			if($('#empl_data').is(':visible')){
				$('#empl_data').hide();
			}
		});
		$('#not_teacher').click(function(){
			$('#empl_data').show();
			if($('#school_data').is(':visible')){
				$('#school_data').hide();
			}
		});
		$('#gform_next_button_2_4').on("click", function() {
			var has_empty = false;
			$('#page1 input[type!="hidden"], #page1 select').each(function () {
				if (($(this).is(':visible')) && ($(this).attr('required'))){
					if (!$(this).val()) {
						$(this).closest('div').addClass('has-error');
						$(this).focus();
						has_empty = true;
						return false;
					} else {
						$(this).closest('div').removeClass('has-error');
					}
				}
			});
			if (!$('input#citiz').is(':checked') && !$('input#not_citiz').is(':checked')){
				if (!$('span#selection').is(':visible')){
					$('#cit').append('<span id="selection" style="color:#790000;">Please select above option.</span>');
				}
				has_empty = true;
				return false;
			} else {
				if ($('span#selection').is(':visible')){
					$('span#selection').remove();
				}
			}
			var email = $('input[name=email]').val();
			var c_email = $('input[name=confirm_email]').val();
			var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
			if(email && !pattern.test(email)) {
				$('input[name=email]').closest('div').addClass('has-error');
				if (!$('span#msg').is(':visible')){
					$('input[name=email]').closest('div').append('<span id="msg" style="color:#790000;">email is not valid.</span>');
				}
				$('input[name=email]').focus();
				has_empty = true;
				return false;
			} else {
				if ($('span#msg').is(':visible')){
					$('span#msg').remove();
				}
			}
			if (email != '' && email != c_email) {
				$('input[name=confirm_email]').closest('div').addClass('has-error');
				if (!$('span#msg1').is(':visible')){
					$('input[name=confirm_email]').closest('div').append('<span id="msg1" style="color:#790000;">email confirmation is not match.</span>')		}
				$('input[name=confirm_email]').focus();
				has_empty = true;
				return false;
			} else {
				if ($('span#msg1').is(':visible')){
					$('span#msg1').remove();
				}
			}
			if (has_empty) {
				return false;
			} else {
				$('#page1').hide();
				$('#page2').show();
			}
		});
		$('#gform_next_button_2_32').on("click", function() {
			var has_empty = false;
			$('#page2 input[type!="hidden"], #page2 select').each(function () {
				if (($(this).is(':visible')) && ($(this).attr('required'))){
					if (!$(this).val()) {
						$(this).closest('div').addClass('has-error');
						$(this).focus();
						has_empty = true;
						return false;
					} else {
						$(this).closest('div').removeClass('has-error');
					}
				}
			});
			if (has_empty) {
				return false;
			} else {
				$('#page2').hide();
				$('#page3').show();
			}
		});
		$('#gform_submit_button_2_35').on("click", function() {
			var has_empty = false;
			$('#page3 input[type!="hidden"], #page3 select').each(function () {
				if (($(this).is(':visible')) && ($(this).attr('required'))){
					if (!$(this).val()) {
						$(this).closest('div').addClass('has-error');
						$(this).focus();
						has_empty = true;
						return false;
					} else {
						$(this).closest('div').removeClass('has-error');
					}
				}
			});
			if (has_empty) {
				return false;
			} else {
				$('#main_form').submit();
			}
		});
});
