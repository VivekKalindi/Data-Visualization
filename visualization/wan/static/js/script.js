
    

    //   
    // 
    //  script for 4line chart streatched
    // 
    var options = {
        chart: {
          height: 350,
          width: "100%",
          type: "line"
        },
        series: [
          {
            name: "Area 1",
            data: [{x: '2022-01-01', y:'3'},
                  {x: '2022-01-02', y:'4'},
                  {x: '2022-01-04', y:'6'},
                  {x: '2022-01-06', y:'11'},
                  {x: '2022-01-07', y:'9'},
                  {x: '2022-01-08', y:'10'},
                  ]
          },
          
          {name: "Area 2",
            data: [{x: '2022-01-01', y:'1'},
                  {x: '2022-01-02', y:'3'},
                  {x: '2022-01-03', y:'5'},
                  {x: '2022-01-04', y:'5'},
                  {x: '2022-01-07', y:'8'},
                  {x: '2022-01-08', y:'7'}]
          },
           {name: "Area 3",
            data: [{x: '2019-01-01', y:'6'},
                  {x: '2022-01-02', y:'7'},
                  {x: '2022-01-03', y:'13'},
                  {x: '2022-01-04', y:'11'},
                  {x: '2022-01-07', y:'14'},
                  {x: '2022-01-08', y:'15'}]
          },
           {name: "Area 4",
            data: [{x: '2022-01-01', y:'11'},
                  {x: '2022-01-02', y:'12'},
                  {x: '2022-01-03', y:'15'},
                  {x: '2022-01-04', y:'16'},
                  {x: '2022-01-07', y:'16'},
                  {x: '2022-01-08', y:'18'}]
          }
          
        ],
        markers: {
          size: 5,
          // discrete: [{
          //   seriesIndex: 0,
            // For dataPointIndex: 0 there is no discrete marker at all!
            // dataPointIndex: 2,
            
            // Also docs says its "fill" and "stroke", but "fillColor" and "strokeColor" are working
          //   fillColor: "#0A0",
          //   strokeColor: "#FFF",
          //   size: 7
          // }
          // ]
        }
      };
      
      var chart = new ApexCharts(document.querySelector("#chart"), options);
      
      chart.render();


      try{
        chart.updateOptions({
            title: {
            text: 'People Counting (Last 7 Days)'
          }
        })
        }
        catch(e){
        alert(e)
        }
      

    //   
    // 
    // 
    ////////////// area chart ////////////
    // 
    var options = {
        colors : ['#b84644', '#223B5A'],
        chart: {
          height: 390,
          width: 750,
          type: "area"
        },
        dataLabels: {
          enabled: false
        },
        series: [{
          type: 'area',
          data: [45, 52, 38, 45, 19, 23, 2]
        }, {
          type: 'area',
          data: [25,56,12,34,21,45,12]
        }],
        stroke: {
              curve: 'straight'
            },
        fill: {
          type: "solid",
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.6,
            opacityTo: 0.8,
            stops: [0, 90, 100]
          }
        },
        xaxis: {
          categories: ['10:00', '11:00','12:00','1:00','2:00','3:00','4:00','5:00','6:00'
          ]
        },
          yaxis: [
              {
                title: {
                  text: 'Data In Thousands',
                }
              },]
              
      };
      
      var chart = new ApexCharts(document.querySelector("#areachart"), options);
      
      chart.render();

      try{
        chart.updateOptions({
            title: {
            text: 'People Coonting (By Hour)'
          }
        })
        }
        catch(e){
        alert(e)
        }
      
////////////////////////////////////////////////////////////////////////////////////////////


      //////////// script for 4line chart streatch/////////

    //   
    ///////////// last chart ///////////////////
    // 
    //  script for 4line chart streatched
    // 
    var options = {
        chart: {
          height: 350,
          width: "100%",
          type: "line"
        },
        series: [
          {
            name: "Entrance",
            data: [{x: '2022-01-01', y:'3'},
                  {x: '2022-01-05', y:'4'},
                  {x: '2022-01-10', y:'6'},
                  {x: '2022-01-15', y:'11'},
                  {x: '2022-01-20', y:'9'},
                  {x: '2022-01-25', y:'10'},
                  {x: '2022-01-30', y:'11'},
                  ]
          },
          
          {name: "Area 1",
            data: [{x: '2022-01-01', y:'1'},
                  {x: '2022-01-02', y:'3'},
                  {x: '2022-01-03', y:'5'},
                  {x: '2022-01-04', y:'5'},
                  {x: '2022-01-07', y:'8'},
                  {x: '2022-01-08', y:'7'},
                  {x: '2022-01-30', y:'7'}]
          },
           {name: "Area 2",
            data: [{x: '2022-01-01', y:'5'},
                  {x: '2022-01-02', y:'4'},
                  {x: '2022-01-03', y:'1'},
                  {x: '2022-01-04', y:'8'},
                  {x: '2022-01-07', y:'6'},
                  {x: '2022-01-08', y:'9'},
                  {x: '2022-01-30', y:'9'}]
          },
           {name: "Area 3",
            data: [{x: '2022-01-01', y:'2'},
                  {x: '2022-01-02', y:'5'},
                  {x: '2022-01-03', y:'7'},
                  {x: '2022-01-04', y:'2'},
                  {x: '2022-01-07', y:'9'},
                  {x: '2022-01-08', y:'11'},
                  {x: '2022-01-30', y:'5'}]
          }
          
        ],
        markers: {
          size: 5,
          // discrete: [{
          //   seriesIndex: 0,
            // For dataPointIndex: 0 there is no discrete marker at all!
            // dataPointIndex: 2,
            
            // Also docs says its "fill" and "stroke", but "fillColor" and "strokeColor" are working
          //   fillColor: "#0A0",
          //   strokeColor: "#FFF",
          //   size: 7
          // }
          // ]
        },
        yaxis: [
            {
              title: {
                text: 'Data In Thousands',
              }
            },]
      };
      
      var chart = new ApexCharts(document.querySelector("#linechart4"), options);
      
      chart.render();

      try{
        chart.updateOptions({
            title: {
            text: 'People Coonting (Last 30 Days)'
          }
        })
        }
        catch(e){
        alert(e)
        }

      

// colors : ['#b84644', '#223B5A'],