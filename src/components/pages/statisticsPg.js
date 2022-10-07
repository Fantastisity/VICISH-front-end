import React, { useState, useEffect } from "react";
 import ReactApexChart from "react-apexcharts";
 import Axios from "axios";

 const StatisticsPg = () => {
    const [place, setPlace] = useState([]);
    const [popular, setPop] = useState([]);
    const [classic, setClassic] = useState([]);
    const [art, setArt] = useState([]);
    const [gallery, setGallery] = useState([]);
    const [park, setPark] = useState([]);
    const [garden, setGarden] = useState([]);
    const [museum, setMuseum] = useState([]);
    const [library, setLibrary] = useState([]);
    const [cinema, setCinema] = useState([]);

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
                }
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

      const gen = () => {
        for (var i in place) {
            if (i == 17) {
                state2.series.push(Object.values(popular[i])[0])
                state2.series.push(Object.values(classic[i])[0])
                state2.series.push(Object.values(art[i])[0])
                state2.series.push(Object.values(gallery[i])[0])
                state2.series.push(Object.values(park[i])[0])
                state2.series.push(Object.values(garden[i])[0])
                state2.series.push(Object.values(museum[i])[0])
                state2.series.push(Object.values(library[i])[0])
                state2.series.push(Object.values(cinema[i])[0])
                continue
            }
            state.options.xaxis.categories.push(Object.values(place[i])[0])
            state.series[0].data.push(Object.values(popular[i])[0])
            state.series[1].data.push(Object.values(classic[i])[0])
            state.series[2].data.push(Object.values(art[i])[0])
            state.series[3].data.push(Object.values(gallery[i])[0])
            state.series[4].data.push(Object.values(park[i])[0])
            state.series[5].data.push(Object.values(garden[i])[0])
            state.series[6].data.push(Object.values(museum[i])[0])
            state.series[7].data.push(Object.values(library[i])[0])
            state.series[8].data.push(Object.values(cinema[i])[0])
        }
        return (
            <>
            <ReactApexChart options={state.options} series={state.series} type="bar" height={350} />
            <br></br>
            <ReactApexChart options={state2.options} series={state2.series} type="radialBar" height={390} />
            </>
        );
      }

    useEffect(() =>{
        Axios.get("http://vicish.herokuapp.com/statistics/place").then((response) => {
          setPlace(response.data);
          
        })

        Axios.get("http://vicish.herokuapp.com/statistics/popular-music").then((response) => {
          setPop(response.data);
        })
        Axios.get("http://vicish.herokuapp.com/statistics/classic-music").then((response) => {
            setClassic(response.data);
            
        })
        Axios.get("http://vicish.herokuapp.com/statistics/art").then((response) => {
          setArt(response.data);
          
        })
        Axios.get("http://vicish.herokuapp.com/statistics/gallery").then((response) => {
          setGallery(response.data);
          
        })
        Axios.get("http://vicish.herokuapp.com/statistics/park").then((response) => {
          setPark(response.data);
          
        })
        Axios.get("http://vicish.herokuapp.com/statistics/garden").then((response) => {
          setGarden(response.data);
          
        })
        Axios.get("http://vicish.herokuapp.com/statistics/museum").then((response) => {
          setMuseum(response.data);
          
        })
        Axios.get("http://vicish.herokuapp.com/statistics/library").then((response) => {
          setLibrary(response.data);
          
        })
        Axios.get("http://vicish.herokuapp.com/statistics/cinema").then((response) => {
          setCinema(response.data);
          
        })

        
      },[])
      
     return(
         <div>
            {gen()}
         </div>

     )
 }

 export default StatisticsPg;
