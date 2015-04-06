jQuery(document).ready(function($){
	//open the lateral panel
	$('.cd-btn').on('click', function(event){
		event.preventDefault();
		$('.cd-panel').addClass('is-visible');
	});
	//close the lateral panel
	$('.cd-panel').on('click', function(event){
		if( $(event.target).is('.cd-panel') || $(event.target).is('.cd-panel-close') ) { 
			$('.cd-panel').removeClass('is-visible');
			event.preventDefault();
		}
	});
});

jQuery(document).ready(function($){
	//open the lateral panel
	$('.cd-btn-2').on('click', function(event){
		event.preventDefault();
		$('.cd-panel-2').addClass('is-visible');
	});

	//close the lateral panel
	$('.cd-panel-2').on('click', function(event){
		if( $(event.target).is('.cd-panel-2') || $(event.target).is('.cd-panel-close') ) { 
			$('.cd-panel-2').removeClass('is-visible');
			event.preventDefault();
		}
	});
});

jQuery(document).ready(function($){
	//open the lateral panel
	$('.cd-btn-3').on('click', function(event){
		event.preventDefault();
		$('.cd-panel-3').addClass('is-visible');
	});
	//close the lateral panel
	$('.cd-panel-3').on('click', function(event){
		if( $(event.target).is('.cd-panel-3') || $(event.target).is('.cd-panel-close') ) { 
			$('.cd-panel-3').removeClass('is-visible');
			event.preventDefault();
		}
	});
});
