class PhotoGalleryController {
  images: Image[];
  popupimage: string;
  serviceimages: any;

  constructor() {
    const img_1 = './images/quickgal/1.jpg';
    const img_2 = './images/quickgal/2.jpg';
    const img_3 = './images/quickgal/3.jpg';
    const img_4 = './images/quickgal/4.jpg';
    const img_5 = './images/quickgal/5.jpg';
    const img_6 = './images/quickgal/6.jpg';
    const img_7 = './images/quickgal/7.jpg';
    const img_8 = './images/quickgal/8.jpg';
    const img_9 = './images/quickgal/9.jpg';
    let image_1 = new Image(img_1, "Going to the <strong>grand lake</strong><br>with my friends.");
    let image_2 = new Image(img_2, " I love this city<br><a href='#'>@NY</a>");
    let image_3 = new Image(img_3, "Everyday Meeting<br><a href='#'>@The office</a>");
    let image_4 = new Image(img_4, "Teambuilding hangout<br><a href='#'>@Crazy Mountain</a>");
    let image_5 = new Image(img_5, "Going places<br><a href='#'>@Crazy Mountain</a>");
    let image_6 = new Image(img_6, "Le Tour Eiffel<br><a href='#'>@Paris</a>");
    let image_7 = new Image(img_7, "Teambuilding hangout<br><a href='#'>@PalmBeach</a>");
    let image_8 = new Image(img_8, "Into the fog<br><a href='#'>@Mistic lake</a>");
    let image_9 = new Image(img_9, "Teambuilding hangout<br><a href='#'>@Crazy Mountain</a>");
    this.images = [image_1, image_2, image_3, image_4, image_5, image_6, image_7, image_8, image_9];
    this.popupimage = './images/_niches/restaurant/pop-up.png';
    let serviceimage1 = './images/_niches/restaurant/service1.png';
    let serviceimage2 = './images/_niches/restaurant/service2.png';
    let serviceimage3 = './images/_niches/restaurant/service3.png';
    this.serviceimages = {
      img1: serviceimage1,
      img2: serviceimage2,
      img3: serviceimage3
    }
    /*
     * Initialization script for Animated sparkles
     */
    jQuery(function($){
    	"use strict";

    	/*--------------------------------------------------------------------------------------------------
     Sparkles
     --------------------------------------------------------------------------------------------------*/
    	var Spark = function(sparkles_container){
    		this.sparkles_container = $(sparkles_container);
    		this.s = ["shiny-spark1", "shiny-spark2", "shiny-spark3", "shiny-spark4", "shiny-spark5", "shiny-spark6"];
    		this.i = this.s[this.random(this.s.length)];
    		this.n = document.createElement("span");
    		this.newSpeed().newPoint().display().newPoint().fly();
    	};
    	Spark.prototype.display = function ()
    	{
    		$(this.n).attr("class", this.i).css("z-index", this.random(3)).css("top", this.pointY).css("left", this.pointX);
    		this.sparkles_container.append(this.n);
    		return this
    	};
    	Spark.prototype.fly = function ()
    	{
    		var a = this;
    		$(this.n).animate({top: this.pointY, left: this.pointX}, this.speed, "linear", function ()
    		{
    			a.newSpeed().newPoint().fly();
    		})
    	};
    	Spark.prototype.newSpeed = function ()
    	{
    		this.speed = (this.random(10) + 5) * 1100;
    		return this
    	};
    	Spark.prototype.newPoint = function ()
    	{
    		var parentPos = this.sparkles_container,
    			parentSlideshow = parentPos.closest('.kl-slideshow'),
    			parentPh = parentPos.closest('.page-subheader');
    		if(parentSlideshow.length > 0) {
    			parentPos = parentSlideshow;
    		} else if(parentPh.length > 0) {
    			parentPos = parentPh;
    		}
    		this.pointX = this.random( parentPos.width() );
    		this.pointY = this.random( parentPos.height() );
    		return this
    	};
    	Spark.prototype.random = function (a)
    	{
    		return Math.ceil(Math.random() * a) - 1
    	};

    	var enable_header_sparkles = function( parentSelector ){
    		var sparkles = parentSelector.find('.th-sparkles:visible');
    		if( sparkles ){
    			$.each(sparkles,function(x,y){
    				// if (jQuery.browser.msie && jQuery.browser.version < 9) {
    				// 	return;
    				// }
    				var a = 40,
    					i = 0;
    				for (i; i < a; i++) {
    					new Spark( y );
    				}
    			});
    		}
    	};

    	var parentSelector = $('.kl-slideshow, .page-subheader')
    	if(parentSelector) {
    		parentSelector.find('.th-sparkles').css('display','block');
    		enable_header_sparkles(parentSelector);
    	}
    });

    var $body = jQuery("body")
    /**** Initialize carousels based on CarouFredSel
    	* .caroufredsel class mandatory
    	* data-setup attribute needed (please find examples within the site)
    	*/
    	var initCarouFredSels = function(dom){
    		// check if dom param is added, if not use $body
    		dom = typeof dom !== 'undefined' ? dom : $body;
    		// start carousel trigger with options
    		var cfs_container = jQuery(dom).find(".caroufredsel:not(.custom)");
    		// check if element exists so it can begin the job
    		if (!cfs_container.length) return;
    		// iterate through finds
    		jQuery.each( cfs_container, function(index, el) {
    			var _el = jQuery(el),
    				_data_attribs = _el.attr("data-setup"),
    				_options = typeof _data_attribs != 'undefined' ? JSON.parse(_data_attribs) : '{}',
    				_nav = jQuery('<div class="cfs--navigation"><a href="#" class="cfs--prev"></a><a href="#" class="cfs--next"></a></div>'),
    				_pag = jQuery('<div class="cfs--pagination"></div>'),
    				_cfParent = _el.closest('.caroufredsel').parent();

    			if(_options.navigation)
    				( _options.appendToParent  ? _cfParent : _el ).append(_nav);

    			if(_options.pagination)
    				( _options.appendToParent ? _cfParent : _el ).append(_pag);

    			if(_options.swipe_touch || _options.swipe_mouse)
    				_el.addClass('stl-swiper');

    			var doCarouFredSels = function(){
    				_el.children('ul.slides').carouFredSel({
    					responsive: _options.hasOwnProperty('responsive') ? _options.responsive : true,
    					width: _options.hasOwnProperty('width') ? _options.width : null,
    					height: _options.hasOwnProperty('height') ? _options.height : null,
    					align: _options.hasOwnProperty('align') ? _options.align : 'left',
    					scroll: {
    						items: _options.hasOwnProperty('scroll') ? _options.scroll : 1,
    						fx : _options.hasOwnProperty('fx') ? _options.fx : "scroll"
    					},
    					items: {
    						visible: _options.hasOwnProperty('items') ? _options.items : 1,
    						minimum: _options.hasOwnProperty('items_minimum') ? _options.items_minimum : 1,
    						start: _options.hasOwnProperty('items_start') ? _options.items_start : 0,
    						width:_options.hasOwnProperty('items_width') ? _options.items_width : null,
    						height: _options.hasOwnProperty('items_height') ? _options.items_height : null
    					},
    					auto: {
    						play: _options.hasOwnProperty('autoplay') ? _options.autoplay : true,
    						timeoutDuration: _options.hasOwnProperty('auto_duration') ? _options.auto_duration : 10000
    					},
    					prev : {
    						button  : ( _options.appendToParent ? _cfParent : _el.closest('.caroufredsel') ).find('.cfs--prev'),
    						key     : "left"
    					},
    					next : {
    						button  : ( _options.appendToParent ? _cfParent : _el.closest('.caroufredsel') ).find('.cfs--next'),
    						key     : "right"
    					},
    					pagination: {
    						container: ( _options.appendToParent ? _cfParent : _el.closest('.caroufredsel') ).find('.cfs--pagination'),
    						anchorBuilder: function(nr, item) {
    							return '<a href="#'+nr+'"></a>';
    						}
    					},
    					swipe: {
    						// onTouch: _options.hasOwnProperty('swipe_touch') || Modernizr.touch ? _options.swipe_touch : false,
    						// onMouse: _options.hasOwnProperty('swipe_mouse') || Modernizr.touch ? _options.swipe_mouse : false
                onTouch: _options.hasOwnProperty('swipe_touch') || true ? _options.swipe_touch : false,
    						onMouse: _options.hasOwnProperty('swipe_mouse') || true ? _options.swipe_mouse : false
    					}
    				});
    			};

    			cfs_container.imagesLoaded(doCarouFredSels);

    		});
    	};
    // end Initialize carousels based on CarouFredSel

    /* Photo Gallery Alternative - Caroufredsel */
    	if(jQuery.fn.carouFredSel != 'undefined') {

    	/* Caroufredsel Trigger with options */
    		initCarouFredSels(jQuery("body"));

    		/**
    		 * PhotoGallery Widget
    		 */

    		jQuery('.photogallery-widget .caroufredsel').each(function(index, el) {

    			var _cfs_main = jQuery(el),
    			_cfs_main_slides = _cfs_main.children('ul.slides');

    			_cfs_main_slides.children('li').slice(10).remove();

    			var updPhotoGalWdgtCounter = function(c) {
    					var cfscounter = c.closest('.caroufredsel').find('.cfs-counter'),
    						current = c.triggerHandler( 'currentPosition' );
    					cfscounter.html( ( current+1 ) +" of "+ c.children().length );
    				},
    				doPhotoGalWdgt = function (){
    					_cfs_main_slides.carouFredSel({
    						responsive: true,
    						width: 850,
    						items: 1,
    						auto: 10000,
    						prev : {
    							button  : _cfs_main.find('.cfs--prev'),
    							key     : "left"
    						},
    						next : {
    							button  : _cfs_main.find('.cfs--next'),
    							key     : "right"
    						},
    						scroll: {
    							fx: 'crossfade',
    							onBefore: function( data ) {
    								updPhotoGalWdgtCounter( _cfs_main_slides );
    							}
    						},
    						onCreate: function( data ) {
    							updPhotoGalWdgtCounter( _cfs_main_slides );
    						},
    						pagination: {
    							container: _cfs_main.next('.cfs--pagination'),
    							anchorBuilder: function(nr, item) {
    								var th = _cfs_main.height()/5,
    									ths = _cfs_main_slides.children('li'),
    									thbg = ths.eq(nr-1).attr('data-thumb'),
    									thdesc = ths.eq(nr-1).find('.pg-caption'),
    									thdesc_html = thdesc.length > 0 ? thdesc.get(0).outerHTML : '';
    								return '<div class="pg-thumb" style="height: '+th+'px"><a href="#'+nr+'" style="background-image:url('+thbg+');"></a>'+ thdesc_html +'</div>';
    							}
    						},
    						swipe: {
    							// onTouch: Modernizr.touch ? true : false,
    							// onMouse: Modernizr.touch ? true : false
                  onTouch: true,
    							onMouse: true
    						}
    					});
    				}
    			// append pagination
    			_cfs_main.after('<div class="cfs--pagination"></div>');
    			// Load Carousel after images are loaded
    			_cfs_main.imagesLoaded(doPhotoGalWdgt);

    		});

    	} // end checking if carouFredSel is loaded
    /* end Photo Gallery Alternative - Caroufredsel */


  }
}

class Image {
  private src: string;
  private caption: string;

  constructor(_src: string, _caption: string) {
    this.src = _src;
    this.caption = _caption;
  }
}

export const PhotoGallery: angular.IComponentOptions = {
  template: require('./PhotoGallery.html'),
  controller: PhotoGalleryController,
  bindings: {
  }
};
