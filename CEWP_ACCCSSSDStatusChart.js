<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html> 
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>ACC CCS SD Status</title>

        <link href="/teams/ACCSPC/CSSSPO/SiteAssets/css/all.css" rel="stylesheet">
        <link href="/teams/ACCSPC/CSSSPO/SiteAssets/css/jquery.dataTables.css" rel="stylesheet">
        <link href="/teams/ACCSPC/CSSSPO/SiteAssets/css/bootstrap.min.css" rel="stylesheet">
        
        <style type="text/css">
			#chart, #chart_container {
				height: 500px;
				margin: auto;
				z-index: 50;
			}

			#chart_loading {
				position: absolute;
				background: #ffffff;
				width: 350px;
				left: 50%;
				top: 50%;
				transform: translate(-50%, -50%);
				height: 120px;
				padding: 10px;
				color: #000000;
				margin: auto;
				font-family: "Segoe UI";
				font-size: 16px;
				text-align: center;
				vertical-align: middle;
				display: block;
				z-index: 51;
			}
			.popRow {
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 16px;
				margin-bottom: 1px;
			}
			.highcharts-container {
				overflow: visible !important;
			}
			.highcharts-title {
				color: #000000 !important;
				fill: #000000 !important;
			}
			.chartpopup {
				background: rgba(255, 255, 255, 1);
				min-width: 125px;
			}
			#chartlegend {
				border: 1px solid black;
				margin-top: 5px;
				height: 24px;
			}
				#chartlegend .text {
					font-size: 16px;
					padding-top: 4px;
				}
			.highcharts-figure, .highcharts-data-table table {
				min-width: 310px;
				max-width: 800px;
				margin: 1em auto;
			}
			#container {
				height: 400px;
			}
			.highcharts-data-table table {
				font-family: Verdana, sans-serif;
				border-collapse: collapse;
				border: 1px solid #EBEBEB;
				margin: 10px auto;
				text-align: center;
				width: 100%;
				max-width: 500px;
			}
			.highcharts-data-table caption {
				padding: 1em 0;
				font-size: 1.2em;
				color: #555;
			}
			.highcharts-data-table th {
				font-weight: 600;
				padding: 0.5em;
			}
			.highcharts-data-table td, .highcharts-data-table th, .highcharts-data-table caption {
				padding: 0.5em;
			}
			.highcharts-data-table thead tr, .highcharts-data-table tr:nth-child(even) {
				background: #f8f8f8;
			}
			.highcharts-data-table tr:hover {
				background: #f1f7ff;
			}
        </style>

        <script src="/teams/ACCSPC/CSSSPO/siteassets/js/jquery-3.4.1.min.js"></script>
        <script src="/teams/ACCSPC/CSSSPO/siteassets/js/jquery-ui.js"></script>        
        <script src="/teams/ACCSPC/CSSSPO/siteassets/js/highcharts.js"></script>
        <script src="/teams/ACCSPC/CSSSPO/siteassets/js/jquery.dataTables.js"></script>
        <script src="/teams/ACCSPC/CSSSPO/siteassets/js/modules/export-data.js"></script>
        <script src="/teams/ACCSPC/CSSSPO/siteassets/js/modules/accessibility.js"></script>
        <script src="/teams/ACCSPC/CSSSPO/siteassets/js/bootstrap.bundle.min.js"></script>

        <script type="text/javascript">
            SP.SOD.loadMultiple(["require.js"], function (){
                require.config(
                    {
                        waitSeconds: 0,
                        paths: {
                            "jquery": "/teams/ACCSPC/CSSSPO/siteassets/js/jquery-3.4.1.min",		
                            "jquery-ui": "/teams/ACCSPC/CSSSPO/SiteAssets/js/jquery-ui",
                            //"jquery.cookie": "/teams/CSSSPO/SiteAssets/js/jquery.cookie.min",
                            "dataTables": "/teams/ACCSPC/CSSSPO/siteassets/js/jquery.dataTables",
                            "highcharts": "/teams/ACCSPC/CSSSPO/SiteAssets/js/highcharts",
                            "exporting": "/teams/ACCSPC/CSSSPO/SiteAssets/js/modules/exporting",
                            "export-data": "/teams/ACCSPC/CSSSPO/SiteAssets/js/modules/export-data",
                            "accessibility": "/teams/ACCSPC/CSSSPO/SiteAssets/js/modules/accessibility",
                            "bootstrap": "teams/ACCSPC/CSSSPO/siteassets/js/bootstrap.bundle.min"
                        },
                        shim: {
                            "jquery-ui": {
                                deps: ["jquery"]
                            },
                            "dataTables": {
                                deps: ["jquery"]
                            },                    
                            // "jquery.cookie": {
                            // 	deps: ["jquery"]
                            // },
                            // "jquery.SPServices": {
                            // 	deps: ["jquery"]
                            // },
                            "highcharts":{
                                deps: ["jquery"]
                            },
                            "exporting":{
                                deps: ["highcharts"]
                            },
                            "export-data":{
                                deps: ["highcharts"]
                            },                    
                            "accessibility":{
                                deps: ["highcharts"]
                            },  
                        }
                    }
                )

                require(['jquery', 'jquery-ui', 'highcharts', 'exporting', 'export-data', 'accessibility' ], function(jquery){
                    // Run your code here
                    $(document).ready(function($){
                        var siteUrl = _spPageContextInfo.webAbsoluteUrl;
                        
                        // hideElements();
                
                        // function hideElements() {
                        // 	var $el = ''; 
                        // 	$("#s4-titlerow").hide();			
                        // 	$("#s4-topheader2").hide();
                        // 	$("[class='ms-quickLaunch']").hide();
                        // 	$("#sideNavBox").hide(); 
                        // 	$("#suiteBarTop").hide();	
                        // 	$("#Overbook").parent().parent().hide();
                        // 	$("input[id*='ctl00_ctl40_g_b1ab4fc0_81a2_4b9d_8efe_af24f4b37f35_ctl00_ctl05_ctl10_ctl00_ctl00_ctl05_ctl00_ctl00_btnCheckOverbook']").parent().parent().parent().hide();																	      
                        // }

                        var inDesignMode = document.forms[MSOWebPartPageFormName].MSOLayout_InDesignMode.value;
                        if ( inDesignMode === "1" ) {
                            $( "#SDProjects" ).html( "" ).append( "<div style='margin:5px;text-align:center;font-weight:bold;font-size:14px;font-style:italic;'>Query Suspended During Page Edit Mode</div>" );
                        } else {
                            //setCurrentFY();
                            getProjectsCurrent();
                        }
                    })                
                })

                //var site = null;
                //var loc: String( window.location );
                //var waitmsg = null;
                //var title = null;
                //var ctx: = null;
                //var web: = null;
                //var list = null;
                //var data = null;
                //var json: = null;
                //var listitem = null;
                // var used = 0;
                // var remaining: 0;
                // var pending: 0;
                // var total = 0;
                // var user = null;
                // var userID = null;
                //var qry = null;
                //var html =  "";
                //var currentFY = null;
                //var previousFY = null;
                //var totalAccessions = 0;
                //var totalProject = 0;
                //var overUnder = 0;
                var data = null;        
                var projectnames = null;
                var statuses = null;
                //var FY = [];
                var options = [];
                var currentProjectName = [];
                var currentPercentComplete = [];
                var currentStatus = [];

                function getProjectsCurrent(){

                    //var accumulator;
                    //var url = 'https://usaf.dps.mil/teams/ACCSPC/CSSSPO/_vti_bin/listdata.svc/ACCCSSSDStatus?select=ProjectName,FY,Status&$orderby=Status&$filter=FY eq ' + v.currentFY;
                    var url = 'https://usaf.dps.mil/teams/ACCSPC/CSSSPO/_vti_bin/listdata.svc/ACCCSSSDStatus';
                    $.ajax( {
                        url: url,
                        method: "GET",
                        headers: { "Accept": "application/json; odata=verbose" },
                        success: function ( data ){
                            var results = data.d.results;
                            console.log("results: ",results);
                            var j = jQuery.parseJSON( JSON.stringify( results ) );
                            var projectdata = j;
                            console.log("projectdata: ",projectdata);

                            for ( i = 0; i < projectdata.length; i++ ) {
                                var sd = projectdata[i].StartDate;                               
                                if ( sd !== null &&  projectdata[i].StartDate !== '') {
                                    sd = "NA";
                                } else {
                                    sd = (new Date(cd)).toISOString(); 
                                }   

                                var cd = projectdata[i].CompleteDate;
                                if ( cd !== null &&  projectdata[i].CompleteDate !== '') {
                                    cd = "NA";
                                } else {
                                    cd = (new Date(cd)).toISOString(); 
                                } 
                                var pdata;
                                pdata = {
                                    project: projectdata[i].ProjectName,
                                    status: projectdata[i].Status,
                                    startdate: sd,
                                    completedate: cd,
                                    comments: projectdata[i].Comments,
                                    fy: projectdata[i].FY,
                                    percentcomplete: projectdata[i].PercentComplete
                                }
                                currentProjectName.push(pdata);

                                var percentdata;
                                percentdata = {
                                    percentcomplete: projectdata[i].PercentComplete,                                    
                                    project: projectdata[i].ProjectName,
                                    status: projectdata[i].Status,
                                    startdate: sd,
                                    completedate: cd,
                                    comments: projectdata[i].Comments,
                                    fy: projectdata[i].FY
                                }  
                                currentPercentComplete.push(percentdata);                                
                            }

                            //accumulator = 0;
                            //gather the missions numbers and add them for a total value for YTD
                            // for ( i = 0; i < currentProject.length; i++ ) {
                            // 	accumulator = currentProject[i];
                            // 	v.totalProject = v.totalProject + accumulator;
                            // }
                            // console.log( "totalProject" + v.currentFY, v.totalProject );
                            // getAccessionsCurrent();
                            //DrawChart(currentProjectName, currentPercentComplete, currentStatus);

                            Highcharts.chart( 'container', {
                                chart: {
                                    type: 'column'
                                },
                                title: {
                                    //text: "ACC CSS SD projects by Fiscal Year 20" + v.currentFY
                                    text: "ACC CSS SD projects by Status"
                                },
                                xAxis: {
                                    status: [
                                        'Not Started',
                                        'Planning',
                                        'In Progress',
                                        'Review',
                                        'In-Revision',
                                        'Complete',
                                        'On Hold',
                                    ]
                                },
                                yAxis: [{
                                    min: 0,
                                    title: {
                                        text: 'Percent Complete'
                                    }
                                }, {
                                    title: {
                                        text: 'Project'
                                    },
                                    opposite: true
                                }],
                                legend: {
                                    shadow: false
                                },
                                tooltip: {
                                    shared: true
                                },
                                plotOptions: {
                                    column: {
                                        grouping: false,
                                        shadow: false,
                                        borderWidth: 0
                                    }
                                },
                                series: [{
                                    name: 'Percent Complete',
                                    color: 'rgba(243, 117, 43,1)',
                                    data: currentPercentComplete,
                                    pointPadding: 0.3,
                                    pointPlacement: -0.2
                                }, {
                                    name: 'Project',
                                    color: 'rgba(39, 126, 39,.9)',
                                    data: currentProjectName,
                                    pointPadding: 0.4,
                                    pointPlacement: -0.2
                                }]
                            });
                        },
                        error: function ( data )
                        {
                            failure( data.responseJSON.error );
                        }
                    });
                    
                    // function DrawChart(currentProjectName, currentPercentComplete, currentStatus){
                    //     Highcharts.chart( 'container', {
                    //         chart: {
                    //             type: 'column'
                    //         },
                    //         title: {
                    //             //text: "ACC CSS SD projects by Fiscal Year 20" + v.currentFY
                    //             text: "ACC CSS SD projects by Status"
                    //         },
                    //         xAxis: {
                    //             status: [
                    //                 'Not Started'
                    //                 'Planning'
                    //                 'In Progress',
                    //                 'Review',
                    //                 'In-Revision',
                    //                 'Complete',
                    //                 'On Hold'
                    //             ]
                    //         },
                    //         yAxis: [{
                    //             min: 0,
                    //             title: {
                    //                 text: 'Percent Complete'
                    //             }
                    //         }, {
                    //             title: {
                    //                 text: 'Project'
                    //             },
                    //             opposite: true
                    //         }],
                    //         legend: {
                    //             shadow: false
                    //         },
                    //         tooltip: {
                    //             shared: true
                    //         },
                    //         plotOptions: {
                    //             column: {
                    //                 grouping: false,
                    //                 shadow: false,
                    //                 borderWidth: 0
                    //             }
                    //         },
                    //         series: [{
                    //             name: 'Percent Complete',
                    //             color: 'rgba(243, 117, 43,1)',
                    //             data: currentPercentComplete,
                    //             pointPadding: 0.3,
                    //             pointPlacement: -0.2
                    //         }, {
                    //             name: 'Project',
                    //             color: 'rgba(39, 126, 39,.9)',
                    //             data: currentProjectName,
                    //             pointPadding: 0.4,
                    //             pointPlacement: -0.2
                    //         }]
                    //     } );
                    //     //updateYTD();
                    //}                            
                
                    // 	$( "#inputFY" ).change( changeFY );
                    // } );

                    // function setCurrentFY()
                    // {
                    // 	//set current fiscal year
                    // 	var d = new Date();
                    // 	v.currentYear = d.getFullYear().toString().substr( 2, 2 );
                    // 	var month = d.getMonth();
                    // 	if ( month > 9 ) {
                    // 		v.currentFY = v.currentYear + 1;
                    // 	} else {
                    // 		v.currentFY = v.currentYear;
                    // 	}
                    // 	console.log( "v.currentFY", v.currentFY );
                    // 	getFiscalYears();
                    // }

                    // function getFiscalYears()
                    // {
                    // 	var url = 'https://usaf.dps.mil/teams/ACCSPC/CSSSPO/_vti_bin/listdata.svc/ACCCSSSDStatus?select=ProjectName&$orderby=FY';
                    // 	console.log( "url in CSSSPO: ", url );
                    // 	$.ajax( {
                    // 		url: url,
                    // 		method: "GET",
                    // 		headers: { "Accept": "application/json; odata=verbose" },
                    // 		success: function ( data )
                    // 		{
                    // 			var results = data.d.results;
                    // 			var j = jQuery.parseJSON( JSON.stringify( results ) );
                    // 			//load all entries in the FY column to an array
                    // 			for ( i = 0; i < j.length; i++ ) {
                    // 				FY[i] = j[i].FY;
                    // 			}

                    // 			//remove the duplicates and load to a new array
                    // 			for ( var i = 0; i < FY.length; i++ ) {
                    // 				if ( FY[i] !== FY[i - 1] ) options.push( FY[i] );
                    // 			}
                    // 			console.log( "options", options );
                    // 			loadFilter();
                    // 		},
                    // 		error: function ( data )
                    // 		{
                    // 			failure( data.responseJSON.error );
                    // 		}
                    // 	} );
                    // }

                    // function loadFilter()
                    // {
                    // 	//load all entries in the options array to the FY drop down as options
                    // 	for ( i = 0; i < options.length; i++ ) {
                    // 		//the value is a 2 digit year but the DISPLAY is four
                    // 		$( "#inputFY" ).append( "<option value='" + options[i] + "'" + ">" + "20" + options[i] + "</option>" );
                    // 		//set current selected value to the current FY (this is for display only to reduce confusion.  The code sets everything to the current FY by default)
                    // 		$( "#inputFY" ).val( v.currentFY );
                    // 	}
                    // 	getProjectsCurrent();
                    // }

                    // function changeFY()
                    // {
                    // 	//Get the value of the selected FY, reset v.currentFY to the selected value, clear all arrays and variables to refresh with data related to the selected FY
                    // 	var selectVal = $( "#inputFY" ).val();
                    // 	v.currentFY = selectVal;
                    // 	v.totalProject = 0;
                    // 	//v.totalAccessions = 0;
                    // 	//v.overUnder = 0;
                    // 	currentProject = [];
                    //     currentPercentComplete=[];
                    //     currentStatus = [];
                    // 	//re run functions to display relevant data to the selected FY
                    // 	getProjectsCurrent();
                    // }



                    // function getAccessionsCurrent()
                    // {
                    // 	var accumulator;
                    // 	var url = 'https://hq.tradoc.army.mil/sites/cpg/_vti_bin/listdata.svc/EnlistedAccessionsByFiscalYear?select=Accession,FY,FYmonthorder&$orderby=FYmonthorder&$filter=FY eq ' + v.currentFY;
                    // 	console.log( "url in getAccessionsCurrent: ", url );
                    // 	$.ajax( {
                    // 		url: url,
                    // 		method: "GET",
                    // 		headers: { "Accept": "application/json; odata=verbose" },
                    // 		success: function ( data )
                    // 		{
                    // 			var results = data.d.results;
                    // 			var j = jQuery.parseJSON( JSON.stringify( results ) );
                    // 			console.log( "j: ", j );
                    // 			for ( i = 0; i < j.length; i++ ) {
                    // 				currentAccessions[i] = j[i].Accession;
                    // 			}
                    // 			accumulator = 0;
                    // 			//gather the accessions numbers and add them for a total value for YTD
                    // 			for ( i = 0; i < currentAccessions.length; i++ ) {
                    // 				accumulator = currentAccessions[i];
                    // 				v.totalAccessions = v.totalAccessions + accumulator;
                    // 			}
                    // 			console.log( "currentAccessions" + v.currentFY, currentAccessions );
                    // 			DrawChart();
                    // 		},
                    // 		error: function ( data )
                    // 		{
                    // 			failure( data.responseJSON.error );
                    // 		}
                    // 	} );
                    // }

                    // function updateYTD()
                    // {
                    // 	$( document ).ready( function ()
                    // 	{
                    // 		//removes values for currently selected FY when the filter is changed.
                    // 		//$( "#ytdAccessions h3" ).remove();
                    // 		$( "#ytdProject h3" ).remove();
                    // 		//$( "#ytdOverUnder h3" ).remove();
                    // 		// $( "#ytdAccessions" ).append( "<h3>" + v.totalAccessions + "</h3>" );
                    // 		// $( "#ytdProject" ).append( "<h3>" + v.totalProject + "</h3>" );
                    // 		// v.overUnder = v.totalAccessions - v.totalProject;
                    // 		// $( "#ytdOverUnder" ).append( "<h3>" + v.overUnder + "</h3>" );
                    // 		// if ( v.overUnder < 0 ) {
                    // 		// 	$( "#ytdOverUnder" ).css( "color", "red" );
                    // 		// }
                    // 	} );
                    // }
                }
            });             
        </script>
    </head>
    <body style="background-color: #DDE0E5;">
        <div id="chart" style="">
            <div id="chart_loading">
                <table width="100%" align="center">
                    <tbody>
                        <tr><td align="center"><img src="/_layouts/images/gears_an.gif"></td></tr>
                        <tr><td align="center"><div style="margin-top: 10px; font-size: 16px;">Getting Chart Data...Please wait.</div></td></tr>
                    </tbody>
                </table>
            </div>
            <div id="chart_container"></div>
            <figure class="highcharts-figure">
                <div id="container"></div>
            </figure>
        </div>
    </body>
</html>