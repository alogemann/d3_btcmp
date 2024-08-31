const svg = d3.select('svg')

d3.json('menu.json').then(data => {

    //create y scale
    const y = d3.scaleLinear()
        .domain([0,1000])
        .range([0,250])

    //join data to rects
    const rects = svg.selectAll('rect')
        .data(data)

    //append data to rect in DOM
    rects.attr('width', 50)
        .attr('height', data => y(data.orders))
        .attr('fill', 'orange')
        .attr('x', (d,i) => i * 70)

    //append data to enter selection
    rects.enter()
        .append('rect')
        .attr('width', 50)
        .attr('height', data => y(data.orders))
        .attr('fill', 'orange')
        .attr('x', (d,i) => i * 70)
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