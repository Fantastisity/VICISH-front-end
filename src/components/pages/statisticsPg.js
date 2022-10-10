import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import Axios from "axios";
import statisticBg from "../../images/statisticBg.png";
import libPic from "../../images/libPic.png";
import cinPic from "../../images/cinPic.png";
import artPic from "../../images/artPic.png";
import parPic from "../../images/parPic.png";
import zooPic from "../../images/zooPic.png";
import { Doughnut } from 'react-chartjs-2';
import "chartjs-plugin-datalabels";

const StatisticsPg = () => {
  const [stat, setStat] = useState([]);

  var state = {
    series: [
      {
        name: "Popular music",
        data: [],
      },
      {
        name: "Classical music concerts/ Musicals and operas",
        data: [],
      },
      {
        name: "Performing arts",
        data: [],
      },
      {
        name: "Art galleries",
        data: [],
      },
      {
        name: "Zoological parks, wildlife parks and aquariums",
        data: [],
      },
      {
        name: "Botanic gardens",
        data: [],
      },
      {
        name: "Museums",
        data: [],
      },
      {
        name: "Libraries and Archives",
        data: [],
      },
      {
        name: "Cinemas",
        data: [],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 500,
        stacked: true,
        stackType: "100%",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      xaxis: {
        categories: [],
      },
      fill: {
        opacity: 1,
      },
      legend: {
        position: "right",
        offsetX: -20,
        offsetY: 30,
      },
    },
  };

  const data = {
    labels: ["Popular music",
    "Classical music concerts/ Musicals and operas",
    "Performing arts",
    "Art galleries",
    "Zoological parks, wildlife parks and aquariums",
    "Botanic gardens",
    "Museums",
    "Libraries and Archives",
    "Cinemas"],
    datasets: [
      {
        label: '# of Visits',
        data: [],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
          "rgba(214, 111, 164, 0.8)",
          'rgba(156, 214, 111, 0.8)',
          'rgba(201, 179, 162, 0.8)'
        ],
        borderColor:  [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
          "rgba(214, 111, 164, 0.8)",
          'rgba(156, 214, 111, 0.8)',
          'rgba(201, 179, 162, 0.8)'
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    cutoutPercentage: 50,
    layout: {
      padding: 0
    },
    legend: {
      display: true,
      position: "right",
      align: "middle",
      labels: {
        boxWidth: 30,
        padding: 20
      }
    },
    plugins: {
      datalabels: {
        color: "#1f4e56",
        font: {
          weight: "bold",
          size: 16
        },
        padding: 6,
        formatter: (value) => {
          return value;
        }
      }
    }
  };

  const gen = () => {
    for (var i in stat) {
      if (i == 15) {
        data.datasets[0].data.push(stat[i].Popular_music);
        data.datasets[0].data.push(stat[i].Classical_music);
        data.datasets[0].data.push(stat[i].Performing_arts);
        data.datasets[0].data.push(stat[i].Art_galleries);
        data.datasets[0].data.push(stat[i].Zoological_parks);
        data.datasets[0].data.push(stat[i].Botanic_gardens);
        data.datasets[0].data.push(stat[i].Museums);
        data.datasets[0].data.push(stat[i].Libraries_and_Archives);
        data.datasets[0].data.push(stat[i].Cinemas);
        continue;
      }
      state.options.xaxis.categories.push(stat[i].Place);
      state.series[0].data.push(stat[i].Popular_music);
      state.series[1].data.push(stat[i].Classical_music);
      state.series[2].data.push(stat[i].Performing_arts);
      state.series[3].data.push(stat[i].Art_galleries);
      state.series[4].data.push(stat[i].Zoological_parks);
      state.series[5].data.push(stat[i].Botanic_gardens);
      state.series[6].data.push(stat[i].Museums);
      state.series[7].data.push(stat[i].Libraries_and_Archives);
      state.series[8].data.push(stat[i].Cinemas);
    }
    return (
      <div style={{ backgroundColor: "#FFF4E2" }}>
        <div
          className="headerBg"
          style={{
            backgroundImage: `url(${statisticBg}`,
            backgroundSize: "cover",
          }}
        >
          Venues and Events Statistics
        </div>
        <div style={{ display: "flex", marginLeft: "4%", marginTop: "5%", gap: "2%" }}>
        <div
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "20px",
              width: "40%",
              boxShadow: '1px 2px 9px #F4AAB9'
            }}
          >
            <p style={{ padding: "12%", fontSize: "20px" }}>
              We selected sixteen regions in Victoria and surveyed nine types of
              recreational activities in each area, including music festivals,
              art shows, art galleries, zoos, and cinemas. The participation
              rate varies by region, but it can be seen that the most frequently
              visited recreational areas are cinemas, followed by music
              festivals, and art festivals.
            </p>
          </div>
          <div
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "20px",
              width: "52%",
              marginRight: "3%",
              boxShadow: '1px 2px 9px #F4AAB9'
            }}
          >
            {/* <ReactApexChart
              options={state2.options}
              series={data.datasets[0].data}
              type="radialBar"
              height={350}
            /> */}
            <Doughnut data={data} options={options}/>
          </div>
        </div>

        <div style={{
            marginTop: "5%",
            marginLeft: "3rem",
            marginRight: "10%",
            borderRadius: "20px",
            backgroundColor: "#FFFFFF",
            boxShadow: '5px 5px 9px #F4AAB9',
            padding: "1%",
            width:"fit-content",
            display: "flex"
          }}>
             <div style={{display:"inline-flex", gap: "1%"}}>
             <div><img src={zooPic} style={{width:"320px", height:"300px"}}></img></div>
             <div><img src={parPic} style={{width:"320px", height:"300px"}}></img></div>
             <div><img src={artPic} style={{width:"320px", height:"300px"}}></img></div>
             <p style={{width:"320px", height:"300px", backgroundColor:"#FFF4E2", padding: "2%", fontWeight: "600"}}>Melbourne has many places desires to visit Federation Square,
              Melbourne's cultural hub, features avant-garde art from the
              Australian Centre for the Moving Image (ACMI) and Aboriginal works
              from the Ian Potter Centre at the National Gallery of Victoria
              (NGV Australia), showcasing different aspects of Australia's human
              culture.</p>
             </div>
             <div style={{display:"inline-flex", gap: "1%"}}>
             <p style={{width:"320px", height:"300px", backgroundColor:"#F0AB98", padding: "2%", fontWeight: "600"}}>Melbourne is just over an hour's drive south to the Mornington Peninsula, with its bays, beaches, wineries and orchards. You can also enjoy a Turkish bath in the spa area</p>
             <div><img src={libPic} style={{width:"320px", height:"300px"}}></img></div>
             <p style={{width:"320px", height:"300px", backgroundColor:"#EC7F6A", padding: "2%", fontWeight: "600"}}>Melbourne's most fashionable venues are in the South Yarra district, such as the popular Two Birds One Stone breakfast place. Chapel Street separates this neighbourhood from the popular Two Birds One Stone breakfast restaurant and is lined with boutiques all the way to Prahran, where you can visit the crowded Parham Market and turn into the eclectic Greville Street.</p>
             <div><img src={cinPic} style={{width:"320px", height:"300px"}}></img></div>
             </div>
             
        </div>

        <div
          style={{
            marginTop: "5%",
            marginLeft: "3rem",
            borderRadius: "20px",
            width: "82rem",
            backgroundColor: "#FFFFFF",
            boxShadow: '1px 2px 9px #F4AAB9'
          }}
        >
          <ReactApexChart
            options={state.options}
            series={state.series}
            type="bar"
            height={350}
          />
        </div>
        {/* <ReactApexChart options={state2.options} series={data.datasets[0].data} type="radialBar" height={390} />
           <ReactApexChart options={state.options} series={state.series} type="bar" height={350} /> */}
      </div>
    );
  };

  useEffect(() => {
    Axios.get("https://vicish.herokuapp.com/statistics").then((response) => {
      setStat(response.data);
    });
  }, []);

  return <div>{stat && gen()}</div>;
};

export default StatisticsPg;
