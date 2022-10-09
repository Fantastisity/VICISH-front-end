import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import Axios from "axios";
import statisticBg from "../../images/statisticBg.png";
import libPic from "../../images/libPic.png";
import cinPic from "../../images/cinPic.png";
import artPic from "../../images/artPic.png";
import parPic from "../../images/parPic.png";
import zooPic from "../../images/zooPic.png";

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

  const state2 = {
    series: [],
    options: {
      chart: {
        height: 390,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          inverseOrder: false,
          startAngle: 0,
          endAngle: 270,
          offsetX: -200,
          offsetY: 0,
          hollow: {
              margin: 5,
              size: '50%',
              background: 'transparent',
              image: undefined,
              imageWidth: 150,
              imageHeight: 150,
              imageOffsetX: 0,
              imageOffsetY: 0,
              imageClipped: true,
              position: 'front',
              dropShadow: {
                enabled: false,
                top: 0,
                left: 0,
                blur: 3,
                opacity: 0.5
              }
          },
          dataLabels: {
            name: {
              show: true,
            },
            value: {
              show: false,
            },
          },
        },
      },
      colors: [
        "#f23000",
        "#f24900",
        "#f28100",
        "#f2a500",
        "#e9f507",
        "#aaf507",
        "#62f507",
        "#07f57e",
        "#07f5ed",
      ],
      labels: [
        "Popular music",
        "Classical music concerts/ Musicals and operas",
        "Performing arts",
        "Art galleries",
        "Zoological parks, wildlife parks and aquariums",
        "Botanic gardens",
        "Museums",
        "Libraries and Archives",
        "Cinemas",
      ],
      legend: {
        show: true,
        floating: true,
        fontSize: "15px",
        position: "left",
        offsetX: 347,
        width: 500,
        offsetY: 35,
        labels: {
          useSeriesColors: true,
        },
        markers: {
          size: 0,
        },
        formatter: function (seriesName, opts) {
          return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
        },
        itemMargin: {
          vertical: 3,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              show: false,
            },
          },
        },
      ],
    },
  };

  const gen = () => {
    for (var i in stat) {
      if (i == 15) {
        state2.series.push(stat[i].Popular_music);
        state2.series.push(stat[i].Classical_music);
        state2.series.push(stat[i].Performing_arts);
        state2.series.push(stat[i].Art_galleries);
        state2.series.push(stat[i].Zoological_parks);
        state2.series.push(stat[i].Botanic_gardens);
        state2.series.push(stat[i].Museums);
        state2.series.push(stat[i].Libraries_and_Archives);
        state2.series.push(stat[i].Cinemas);
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
              width: "70%",
              marginRight: "3%",
              boxShadow: '1px 2px 9px #F4AAB9'
            }}
          >
            <ReactApexChart
              options={state2.options}
              series={state2.series}
              type="radialBar"
              height={350}
            />
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
            width:"fit-content"
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
            width: "94%",
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
        {/* <ReactApexChart options={state2.options} series={state2.series} type="radialBar" height={390} />
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
