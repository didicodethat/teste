const margin = {top: 20, right: 20, bottom: 70, left: 40},
width = 600 - margin.left - margin.right,
height = 300 - margin.top - margin.bottom;

const x = d3.scale.ordinal().rangeRoundBands([0, width], .05);

const y = d3.scale.linear().range([height, 0]);

const xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

const yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")

const svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", 
        "translate(" + margin.left + "," + margin.top + ")");

d3.json("./sequence.json", (error, jsonData) => {
    const data = jsonData.map((value, index) => ({
        index: index,
        value: value
    }));
    yAxis.ticks(jsonData.length)

    x.domain(data.map((d) => d.index));
    y.domain([0, d3.max(data, (d) => d.value)]);

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", "-.55em")
        .attr("transform", "rotate(-90)" );

    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Number");

    svg.selectAll("bar")
        .data(data)
        .enter().append("rect")
        .style("fill", "steelblue")
        .attr("x", (d) => x(d.index))
        .attr("width", x.rangeBand())
        .attr("y", (d) => y(d.value))
        .attr("height", (d) => height - y(d.value));

});