$(document).ready(function() {
			$('.resultado').hide();
			$('section').on('click', '.ejemplo', function(event) {
				event.preventDefault();

				//$('.resultado').slideToggle('slow');
				$('.resultado').hide('slow');
				$(this).next('.resultado').slideToggle('slow');

				/* Act on the event */
			});

/**
			
			$('section').on('click', '.ejemplo2', function(event) {
				event.preventDefault();

				$('.resultado2').slideToggle('slow');


				
			});

			$('section').on('click', '.ejemplo3', function(event) {
				event.preventDefault();

				$('.resultado3').slideToggle('slow');


				
			});**/


		});