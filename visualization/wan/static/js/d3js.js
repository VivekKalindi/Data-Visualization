
// Set Dimensions
const xSize = 500; 
const ySize = 500;
const margin = 40;
const xMax = xSize - margin*2;
const yMax = ySize - margin*2;

// Create Random Points
// const numPoints = 500;
// const data = [];
// for (let i = 0; i < numPoints; i++) {
// data.push([Math.random() * xMax, Math.random() * yMax]);
// }

///////// script for data fetch from database /////////

fetch('/api/data/')
.then(response => response.json())
.then(data => {
    // Call a function to create D3.js chart using the fetched data
    createChart(data.data);
})
.catch(error => console.error('Error:', error));

  //////  ends here   //////

// Append SVG Object to the Page
const svg = d3.select("#myPlot")
.append("svg")
.append("g")
.attr("transform","translate(" + margin + "," + margin + ")");

// X Axis
const x = d3.scaleLinear()
.domain([0, 500])
.range([0, xMax]);

svg.append("g")
.attr("transform", "translate(0," + yMax + ")")
.call(d3.axisBottom(x));

console.log(d3);
// Y Axis
const y = d3.scaleLinear()
.domain([0, 500])
.range([ yMax, 0]);

svg.append("g")
.call(d3.axisLeft(y));  
// text("data");

// text label for the x axis
svg.append("text")      
        .attr("x", 200 )
        .attr("y",  -20 )
        .style("text-anchor", "middle")
        .style("font-size", "25px")
        .text("D3.js chart");

// // Add X axis label:
// svg.append("text")
//     .attr("text-anchor", "end")
//     .attr("x", width)
//     .attr("y", height + margin.top + 20)
//     .text("X axis title");

// // Y axis label:
// svg.append("text")
//     .attr("text-anchor", "end")
//     .attr("transform", "rotate(-90)")
//     .attr("y", -margin.left+20)
//     .attr("x", -margin.top)
//     .text("Y axis title")


// Dots
svg.append('g')
.selectAll("dot")
.data(data).enter()
.append("circle")
.attr("cx", function (d) { return d[0] } )
.attr("cy", function (d) { return d[1] } )
.attr("r", 3)
.style("fill", "dark");
