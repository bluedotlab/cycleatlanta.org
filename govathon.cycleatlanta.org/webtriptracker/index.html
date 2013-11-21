<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Cycle Atlanta: web mapper</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">

        <link rel="stylesheet" href="http://govathon.cycleatlanta.org/css/bootstrap.min.css">
        <link rel="stylesheet" href="http://govathon.cycleatlanta.org/css/bootstrap-responsive.min.css">
        <link rel="stylesheet" href="css/main.css">

        <link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.6.4/leaflet.css" />
        <!--[if lte IE 8]>
          <link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.6.4/leaflet.ie.css" />
        <![endif]-->

        <script src="http://cdn.leafletjs.com/leaflet-0.6.4/leaflet.js"></script>
        <script src="http://beta.mapquestapi.com/sdk/leaflet/v0.1/mq-map.js?key=Fmjtd%7Cluubn9u8ll%2C8g%3Do5-902l0y"></script>
        <script src="http://beta.mapquestapi.com/sdk/leaflet/v0.1/mq-routing.js?key=Fmjtd%7Cluubn9u8ll%2C8g%3Do5-902l0y"></script>
        <script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
        <script src="js/jquery.popupoverlay.js"></script>
        <script type="text/javascript" src="js/map.js"></script>
        <script type="text/javascript">	
		  var _gaq = _gaq || [];
		  _gaq.push(['_setAccount', 'UA-35489732-1']);
		  _gaq.push(['_trackPageview']);
		
		  (function() {
		    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		  })();
  	 </script>
	
	 <style>
  /* Add these styles once per website */
  .popup_background {
    z-index: 2000; /* any number */
  }
  .popup_wrapper {
    z-index: 2001; /* any number + 1 */
  }
  /* Add inline-block support for IE7 */
  .popup_align,
  .popup_content {
    *display: inline;
    *zoom: 1;
  }

  </style>
    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
        <![endif]-->

        <!-- This code is taken from http://twitter.github.com/bootstrap/examples/hero.html -->
	
        <div class="navbar-fixed-top">
            <div class="container">
                <p class="cycleAtl_title"><a href="http://govathon.cycleatlanta.org">Cycle Atlanta <span class="smallText">bike route web mapper</span></a></p>
            </div>
        </div>

        <div class="container"> 
        	<div id="top"><p>A web interface for users to upload trips on the web. <!--<span class="right">-->Click points on the map to record your trip! Click <span class="my_modal_open"><b>here</b></span> for instructions.</p></div>
            <div id="mapBody"></div>
			
			<div id="mapText">

        <header>
        <h1 id="details">Ride Information</h1>
        </header>
        <form method="post" action="process.php">
          Date: <input type="date" name="date" required><br>
          Time of day: <input type="time" name="time" required><br>
          Duration: <br><input class="duration" type="number" name="hours" min="0" required> hours and <input class="duration" type="number" name="minutes" min="0" max="59" required> minutes <br>
          Trip Purpose: <select id="purpose" required>
          <option value = "0"></option>
          <option value = "1">Commute</option>
          <option value = "2">School</option>
          <option value = "3">Work-Related</option>
          <option value = "4">Exercise</option>
          <option value = "5">Social</option>
          <option value = "6">Shopping</option>
          <option value = "7">Errand</option>
          <option value = "8">Other</option>
          </select><br>
        <header>
        <h1 id="details">Additional Details</h1>
        </header>
          Email: <input type="email" name="email"><br>
          Age: <select id="age">
          <option value = "0"></option>
          <option value = "1">Less than 18</option>
          <option value = "2">18-24</option>
          <option value = "3">25-34</option>
          <option value = "4">35-44</option>
          <option value = "5">45-54</option>
          <option value = "6">55-64</option>
          <option value = "7">65+</option>
          </select><br>
          Ethnicity: <select id="ethnicity">
          <option value = "0"></option>
          <option value = "1">White</option>
          <option value = "2">African American</option>
          <option value = "3">Asian</option>
          <option value = "4">Native American</option>
          <option value = "5">Pacific Islander</option>
          <option value = "6">Multi-racial</option>
          <option value = "7">Hispanic / Mexican / Latino</option>
          <option value = "8">Other</option>
          </select><br>
          Home Income: <select id="income">
          <option value = "0"></option>
          <option value = "1">Less than $20,000</option>
          <option value = "2">$20,000 to $39,999</option>
          <option value = "3">$40,000 to $59,999</option>
          <option value = "4">$60,000 to $74,999</option>
          <option value = "5">$75,000 to $99,999</option>
          <option value = "6">$100,000 or greater</option>
          </select><br>
          Gender: <select id="gender">
          <option value = "0"></option>
          <option value = "1">Male</option>
          <option value = "2">Female</option>
          <option value = "3">Other</option>
          </select><br>
          What kind of rider are you? <select id="rider">
          <option value = "0"></option>
          <option value = "1">Strong and fearless</option>
          <option value = "2">Enthused and confident</option>
          <option value = "3">Comfortable but cautious</option>
          <option value = "4">Interested but concerned</option>
          </select><br>
          Comments: <input type="text" name="comments"><br>
          <input id="submit" type="submit">
        </form>     
			</div>
           
            <p class="bottom">This website brought to you by researchers from the <a href="http://participatorypublicslab.net"> Participatory Publics Lab</a> at <a href="http://gatech.edu">Georgia Tech</a>.</p>
            <div id="debug"></div>
		</div> <!-- /container -->		

<!-- jquery popup thingie-->
  <!-- Add content to modal -->
  <div id="my_modal">
   <br><br><br><p style="color:#ffffff; font-size:20px; text-align: center; font-family:Arial">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Click points on the map to record your ride. You can click on&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br> a marker and drag it around to adjust your route. Add some<br> details about your trip and please share a little bit about<br>your bike habits, which can help other cyclists like you. <br><br>

<img src="img/instruct1.png"><img src="img/instruct2.png"><img src="img/instruct3.png"> <br><br>

Thanks for using Cycle Atlanta!</p>
<br><br><br>
    <!-- ...and optionally a button to close the modal 
    <button class="my_modal_close">Close</button>-->
  </div>

  <!-- Add javascript to make it work -->
  <script>
    $(function() {
      $('#my_modal').popup();
    });
  </script>

    </body>
</html>
