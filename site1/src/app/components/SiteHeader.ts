class SiteHeaderController {
  constructor() {
    jQuery(function($){
			"use strict";

			$('#menu-main-menu a').click(function(){
			    $('html, body').animate({
			        scrollTop: $( $(this).attr('href') ).offset().top
			    }, 900);
			    return false;
			});

			// OnScroll
			$('body.kl-scrollspy').scrollspy({ target: '#wpk-main-menu' });
			// OnClick
			$('#menu-main-menu > li > a, .chaser li a').on('click',function(e) {
			    if(! $(this).parent('li').hasClass('active'))
			    {
			    	var item = $(this);
				    $(item.attr('href'))[0].scrollIntoView();
				}
			});
			// OnLoad
			var hash = window.location.hash;
			if(hash){
				var target = $('#menu-main-menu > li, .chaser li').find('a[href="'+hash+'"]');
				if(target){
					target.parents('ul').first().find('li').removeClass('active');
					target.parent('li').addClass('active');
					target.scrollIntoView();
				}
			}
		});
  }

}

export const SiteHeader: angular.IComponentOptions = {
  template: require('./SiteHeader.html'),
  controller: SiteHeaderController,
  bindings: {
  }
};
