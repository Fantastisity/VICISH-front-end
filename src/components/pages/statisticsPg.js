import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import Axios from "axios";
import statisticBg from "../../images/statisticBg.png";
import libPic from "../../images/libPic.png"
import cinPic from "../../images/cinPic.png"
import artPic from "../../images/artPic.png"
import parPic from "../../images/parPic.png"
import zooPic from "../../images/zooPic.png"

const StatisticsPg = () => {
 const [stat, setStat] = useState([]);

   var state = {   
       series: [{
         name: 'Popular music',
         data: []
       }, {
         name: 'Classical music concerts/ Musicals and operas',
         data: []
       }, {
         name: 'Performing arts',
         data: []
       }, 
       {
           name: 'Art galleries',
           data: []
         }, {
           name: 'Zoological parks, wildlife parks and aquariums',
           data: []
         },
         {
          name: 'Botanic gardens',
          data: []
        },
        {
          name: 'Museums',
          data: []
        },
         {
           name: 'Libraries and Archives',
           data: []
         },
         {
          name: 'Cinemas',
          data: []
        }
   ],
       options: {
         chart: {
           type: 'bar',
           height: 500,
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
           categories: [],
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

       series: [],
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
               },
             }
           }
         },
         colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
         labels: ['Popular music', 'Classical music concerts/ Musicals and operas', 
         'Performing arts', 'Art galleries', 'Zoological parks, wildlife parks and aquariums',
         'Botanic gardens', 'Museums', 'Libraries and Archives','Cinemas'],
         legend: {
           show: true,
           floating: true,
           fontSize: '15px',
           position: 'left',
           offsetX: 560,
           width: 500,
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

     const gen = () => {
       for (var i in stat) {
           if (i == 15) {
               state2.series.push(stat[i].Popular_music)
               state2.series.push(stat[i].Classical_music)
               state2.series.push(stat[i].Performing_arts)
               state2.series.push(stat[i].Art_galleries)
               state2.series.push(stat[i].Zoological_parks)
               state2.series.push(stat[i].Botanic_gardens)
               state2.series.push(stat[i].Museums)
               state2.series.push(stat[i].Libraries_and_Archives)
               state2.series.push(stat[i].Cinemas)
               continue
           }
           state.options.xaxis.categories.push(stat[i].Place)
           state.series[0].data.push(stat[i].Popular_music)
           state.series[1].data.push(stat[i].Classical_music)
           state.series[2].data.push(stat[i].Performing_arts)
           state.series[3].data.push(stat[i].Art_galleries)
           state.series[4].data.push(stat[i].Zoological_parks)
           state.series[5].data.push(stat[i].Botanic_gardens)
           state.series[6].data.push(stat[i].Museums)
           state.series[7].data.push(stat[i].Libraries_and_Archives)
           state.series[8].data.push(stat[i].Cinemas)
       }
       return (
           <div style={{ backgroundColor: "#FFF4E2" }}>
           <div className="headerBg" style={{backgroundImage:`url(${statisticBg}`, backgroundSize:"cover"}}>Venues and Events Statistics</div>
           <div style={{display:"flex", marginLeft:"5%", marginTop:"5%"}}>
             <div style={{backgroundColor:"#FFFFFF", borderRadius:"20px", width:"30%"}}>
               <div>Select</div>
               <ReactApexChart options={state2.options} series={state2.series} type="radialBar" height={350} />
             </div>
             <div style={{backgroundColor:"#FFFFFF", borderRadius:"20px", width:"60%", marginLeft:"5%"}}>
               Text
             </div>
           </div>
           <div style={{marginTop:"5%", marginLeft:"5%",borderRadius:"20px",width:"85%",backgroundColor:"#FFFFFF"}}>
             <div style={{display:"inline-flex"}}>
             <div><img src={zooPic} style={{width:"320px", height:"300px"}}></img></div>
             <div><img src={parPic} style={{width:"320px", height:"300px"}}></img></div>
             <div><img src={artPic} style={{width:"320px", height:"300px"}}></img></div>
             <p style={{width:"320px", height:"300px", backgroundColor:"#FFF4E2"}}>xxxxx</p>
             </div>
             <div style={{display:"inline-flex"}}>
             <p style={{width:"320px", height:"300px", backgroundColor:"#F0AB98"}}>xxxxx</p>
             <div><img src={libPic} style={{width:"320px", height:"300px"}}></img></div>
             <p style={{width:"320px", height:"300px", backgroundColor:"#EC7F6A"}}>xxxxx</p>
             <div><img src={cinPic} style={{width:"320px", height:"300px"}}></img></div>
             </div>
             
           </div>
           
           <div style={{marginTop:"5%", marginLeft:"5%",borderRadius:"20px", width:"90%",backgroundColor:"#FFFFFF"}}>
           <ReactApexChart options={state.options} series={state.series} type="bar" height={350}/>
           </div>
           {/* <ReactApexChart options={state2.options} series={state2.series} type="radialBar" height={390} />
           <ReactApexChart options={state.options} series={state.series} type="bar" height={350} /> */}
           
           </div>
       );
     }

   useEffect(() =>{
     Axios.get("https://vicish.herokuapp.com/statistics").then((response) => {
         setStat(response.data);
       })
     },[])
     
    return(
        <div>
           {stat && gen()}
        </div>

    )
}

export default StatisticsPg;
