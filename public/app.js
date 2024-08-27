//constant vars
const canvas = d3.select('.canvas')
const svg = canvas.append('svg')
    .attr('height',600)
    .attr('width',600)

const group = svg.append('g')
    .attr('transform','translate(100,100)')

//append shapes to svg
group.append('rect')
    .attr('height', 100)
    .attr('width', 200)
    .attr('x',10)
    .attr('y',10)
    .attr('fill', 'blue')

group.append('circle')
    .attr('cx',300)
    .attr('cy',60)
    .attr('r',50)
    .attr('fill', 'lightblue')

group.append('line')
    .attr('x1', 370)
    .attr('x2', 400)
    .attr('y1', 20)
    .attr('y2', 120)
    .attr('stroke', 'black')