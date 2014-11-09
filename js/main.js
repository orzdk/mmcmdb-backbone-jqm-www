require.config({
    paths:{
        text:'libs/require/text',
        domReady:'libs/require/domReady',
        underscore:'libs/underscore/underscore',
		Backbone:'libs/backbone/backbone-1.1.2',
        jquery:'libs/jquery/jquery-1.11.1.min',
        jqm:'libs/jquery.mobile/jquery.mobile-1.4.5.min',
        jqmNavigator:'libs/jquery.mobile/jqmNavigator'
    },
    shim:{
        Backbone:{
            deps:['underscore', 'jquery'],
            exports:'Backbone'
        },
        underscore:{
            exports:'_'
        },
        jqm:{
            deps:['jquery', 'jqmNavigator']
        }
    }
});

require(['domReady', 'views/HomeView', 'jqm'],
    function (domReady, HomeView) {

        domReady(function () {	
            function onDeviceReady(desktop) {
			
				pushNotification = window.plugins.pushNotification;
			
				pushNotification.register(
					function(a,b){alert('push success' + a + b)},
					function(){console.log('error')},
					{
						"senderID":"1062308005163",
						"ecb":"onNotification"
					}
				);
	
                if (desktop !== true)
                    cordova.exec(null, null, 'SplashScreen', 'hide', []);

                $.mobile.pageContainer = $('#container');
                $.mobile.defaultPageTransition = 'slide';
                
                $.mobile.jqmNavigator.pushView(new HomeView());
            }

            if (navigator.userAgent.match(/(iPad|iPhone|Android)/)) {
                document.addEventListener('deviceready', onDeviceReady, false);
            } else {
                onDeviceReady(true);
            }

        });

    });


