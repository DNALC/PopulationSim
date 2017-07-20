<!doctype html>
<header>
	<title>Population Simulation</title>
	<link rel="stylesheet" type="text/css" href="./styling.css">
	
</header>

<html style = "height:100%; width:100%;">
	<body style = "height:100%; width:100%; background-color:#566573; background-size:100% 100%;">

		<div id = "app" style = "height:100%; width:100%; top:0px; ">
			<!-- numbering for y-axis linegraph -->
			<p id = "yAxis"style = "position:absolute; top:192.5px; left:680px; ">%"+"Allele</p>
			<p style = "position:absolute; top:1px; left:770px; ">100</p>
			<p style = "position:absolute; top:35px; left:770px; ">90</p>
			<p style = "position:absolute; top:78px; left:770px; ">80</p>
			<p style = "position:absolute; top:120px; left:770px; ">70</p>
			<p style = "position:absolute; top:157px; left:770px; ">60</p>
			<p style = "position:absolute; top:195px; left:770px; ">50</p>
			<p style = "position:absolute; top:235px; left:770px; ">40</p>
			<p style = "position:absolute; top:276px; left:770px; ">30</p>
			<p style = "position:absolute; top:315px; left:770px; ">20</p>
			<p style = "position:absolute; top:355px; left:770px; ">10</p>
			


			<!-- numbering for x-axis linegraph-->
			<p style = "position:absolute; top:420px; left:1390px;" id = "endGen"></p>

			<!--numbering for bargraph x axis-->
			<p style = "position:absolute; top:900px; left:800px; ">0.0</p>
			<p style = "position:absolute; top:900px; left:850px; ">0.1</p>
			<p style = "position:absolute; top:900px; left:900px; ">0.2</p>
			<p style = "position:absolute; top:900px; left:950px; ">0.3</p>
			<p style = "position:absolute; top:900px; left:1000px; ">0.4</p>
			<p style = "position:absolute; top:900px; left:1050px; ">0.5</p>
			<p style = "position:absolute; top:900px; left:1100px; ">0.6</p>
			<p style = "position:absolute; top:900px; left:1150px; ">0.7</p>
			<p style = "position:absolute; top:900px; left:1200px; ">0.8</p>
			<p style = "position:absolute; top:900px; left:1250px; ">0.9</p>
			<p style = "position:absolute; top:900px; left:1290px; ">1.0</p>


			<!-- number of runs-->
			<p id = "RunTotal" style = "position:absolute; top:481px; left:765px; "></p>



			<!--node canvas-->
			<canvas style="border:1px solid #000000; position:absolute; left:20px; top:20px" id = "canvas" height= "400%" width = "500%" ></canvas>
			<!--linegraph-->
			<canvas style="border:1px solid #000000; position:absolute; top:20px; left:800px;" id = "lineGraph" height= "400%" width = "600%"></canvas>
			<!--bargraph-->
			<canvas style="border:1px solid #000000; position:absolute; left:800px; top:500px" id = "barGraph" height= "400%" width = "500%" ></canvas>
		

			<h4 style = "position:absolute; top:410px; left:20px"id = "NodeSelected">DATA FOR NODE #</h4>

			<form style= "position:absolute; top:450px; left:20px">

				<button style = "position:absolute; top:20px; left:225px;"id ="Run">Begin Run</button>
				<button style = "position:absolute; top:20px; left:125px;" id = "enterVals">Confirm Values</button>

				<button style = "position:absolute; top:50px; left:125px;" id = "restart">Restart</button>
				<select id = "startLink" style = "position:absolute; top:50px; left:225px;"></select>
				<p style = "position:absolute; top:33px; left:262px;">to</p>
				<select id = "endLink" style = "position:absolute; top:50px; left:275px;"></select>
				<button style = "position:absolute; top:80px; left:235px; width:75px; height:30px;" id = "link">link</button>
				<button style = "position:absolute; top:130px; left:235px; width:75px; height:30px;" id = "unlink">unlink</button>

				

					Number of Runs:<br>
					<input value  = "1"  id = "NumRuns" type = "number"> </input>
					<br>Starting Percent:<br>
					<input min = "0.0" max = "100.0"step = "0.1" value  = "50.0"  id = "Starting" type = "number"></input>
					<br>Number of Generation:<br>
					<input max = "500" value  = "100"  id = "NumGenerations" type = "number"></input>
					<br>Starting Population:<br>
					<input value  = "100"  id = "StartingPop" type = "number"></input>
					<br>++Survival Percent:<br>
					<input  min = "0.0" max = "100.0" step = "0.1" value  = "100.0" id = "PPSurvival" type = "number"></input>
					<br>+-Survival Percent:<br>
					<input min = "0.0" max = "100.0" step = "0.1" value  = "100.0" id = "PMSurvival" type = "number"></input>
					<br>--Survival Percent:<br>
					<input  min = "0.0" max = "100.0" step = "0.1" value  = "100.0" id = "MMSurvival" type = "number"></input>

			</form>
			
			<select id = "nodeSelect" style= "position:absolute; left:675px; top:495px">


  				<option value="None">None</option>
  				

			</select>
			

		</div>

	</body>
	<script src = "./jquery2.js"></script>
	<script src= "./Node.js"></script>
	<script src= "./main.js"></script>

	
