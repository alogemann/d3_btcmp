//create svg
const svg = d3.select('.canvas')
    .append('svg')
        .attr('width', 600)
        .attr('height', 600)

//create margins for graph
const margin = {top: 20, right: 20, bottom: 100, left: 100}
const graphHeight = 600 - margin.top - margin.bottom
const graphWidth = 600 - margin.right - margin.left     

const graph = svg.append('g')
    .attr('width', graphWidth)
    .attr('height', graphHeight)
    .attr('transform', `translate(${margin.left},${margin.top})`)

const xAxisGroup = graph.append('g')
    .attr('transform', `translate(0,${graphHeight})`)
const yAxisGroup = graph.append('g')

d3.json('menu.json').then(data => {

    //constants 
    const max = d3.max(data, d => d.orders)

    //create y scale
    const y = d3.scaleLinear()
        .domain([0,max])
        .range([graphHeight,0])

    const x = d3.scaleBand()
        .domain(data.map(itm => itm.name))
        .range([0,500])
        .paddingInner(0.2)
        .paddingOuter(0.2)

    //checks
    console.log(x("veg pasta"))
    console.log(x.bandwidth())

    //join data to rects
    const rects = graph.selectAll('rect')
        .data(data)

    //append data to rect in DOM
    rects.attr('width', x.bandwidth)
        .attr('height', data => graphHeight - y(data.orders))
        .attr('fill', 'orange')
        .attr('x', d => x(d.name))
        .attr('y', d => y(d.orders))

    //append data to enter selection
    rects.enter()
        .append('rect')
        .attr('width', x.bandwidth)
        .attr('height', data => graphHeight - y(data.orders))
        .attr('fill', 'orange')
        .attr('x', d => x(d.name))
        .attr('y', d => y(d.orders))

    //create axis
    const xAxis = d3.axisBottom(x)
    const yAxis = d3.axisLeft(y)

    xAxisGroup.call(xAxis)
    yAxisGroup.call(yAxis)
})


/* const svg = d3.select('svg');

d3.json('planets.json')
    .then(d => {
        const circles = svg.selectAll('circle').data(d)

        // add data to circles already in DOM
        circles.attr('cy', 200)
            .attr('cx', d=> d.distance)
            .attr('r', d => d.radius)
            .attr('fill', d => d.fill)
        
        //add circles and attr to enter selection
        circles.enter()
            .append('circle')
            .attr('cy', 200)
            .attr('cx', d=> d.distance)
            .attr('r', d => d.radius)
            .attr('fill', d => d.fill)
    }) */