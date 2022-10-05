import React from "react";
 import ReactApexChart from "react-apexcharts";


 const state = {   
     series: [{
       name: 'Popular music',
       data: [44, 55, 41, 67, 22, 43, 21, 49]
     }, {
       name: 'Classical music concerts/ Musicals and operas',
       data: [13, 23, 20, 8, 13, 27, 33, 12]
     }, {
       name: 'Performing arts',
       data: [11, 17, 15, 15, 21, 14, 15, 13]
     }, {
         name: 'Art galleries',
         data: [13, 23, 20, 8, 13, 27, 33, 12]
       },{
         name: 'Libraries and Archives',
         data: [13, 23, 20, 8, 13, 27, 33, 12]
       },
 ],
     options: {
       chart: {
         type: 'bar',
         height: 350,
         stacked: true,
         stackType: '100%'
       },
       responsive: [{
         breakpoint: 480,
         options: {
           legend: {
             position: 'bottom',
             offsetX: -10,
             offsetY: 0
           }
         }
       }],
       xaxis: {
         categories: ['Melbourne - Inner East', 'Melbourne - Inner South', 'Melbourne - North East', 'Melbourne - North West', 'Melbourne - South East', 'Melbourne - West','Geelong','Bendigo'

         ],
       },
       fill: {
         opacity: 1
       },
       legend: {
         position: 'right',
         offsetX: 0,
         offsetY: 50
       },
     },


   };

   const state2 = {

     series: [76, 67, 61, 90],
     options: {
       chart: {
         height: 390,
         type: 'radialBar',
       },
       plotOptions: {
         radialBar: {
           offsetY: 0,
           startAngle: 0,
           endAngle: 270,
           hollow: {
             margin: 5,
             size: '30%',
             background: 'transparent',
             image: undefined,
           },
           dataLabels: {
             name: {
               show: false,
             },
             value: {
               show: false,
             }
           }
         }
       },
       colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
       labels: ['Popular music', 'Performing arts', 'Art galleries', 'Museums'],
       legend: {
         show: true,
         floating: true,
         fontSize: '16px',
         position: 'left',
         offsetX: 760,
         offsetY: 20,
         labels: {
           useSeriesColors: true,
         },
         markers: {
           size: 0
         },
         formatter: function(seriesName, opts) {
           return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
         },
         itemMargin: {
           vertical: 3
         }
       },
       responsive: [{
         breakpoint: 480,
         options: {
           legend: {
               show: false
           }
         }
       }]
     },


   };

 const StatisticsPg = () => {
     return(
         <div>
         <div>123</div>
         <ReactApexChart options={state.options} series={state.series} type="bar" height={350} />
         <br></br>
         <ReactApexChart options={state2.options} series={state2.series} type="radialBar" height={390} />
         </div>

     )
 }

 export default StatisticsPg;
