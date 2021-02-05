import React, {Component} from 'react'
import * as d3 from 'd3'

class D3PlaygroundComponent extends Component {
    componentDidMount() {
        const data =
            { "name": "Root", "children": [
                    { "name": "E", "children": [ {"name": "A-1" }, {"name": "A-2" }, {"name":"A-3"}, {"name":"A-4"}, { "name":"A-5"} ] },
                    { "name": "J", "children": [ {"name": "B-1" } ] },
                    { "name": "M" },
                    { "name": "P", "children": [ {"name": "D-1" }, {"name": "D-2" }, {"name": "D-3", "children": [ {"name": "D-3-i"}, {"name":"D-3-ii"} ] } ] },
                    { "name": "S" },
                    { "name": "T" }
                ] };
        this.drawBarChart(data)
    }

    drawBarChart(data) {
        const canvasHeight = 960
        const canvasWidth = 500
        const margin = {left: 100, top: 100, right: 50, bottom: 50}

        const svgCanvas = d3.select(this.refs.canvas)
            .append("svg")
            .attr("width", canvasWidth)
            .attr("height", canvasHeight)
            .style("border", "1px solid black")

        const g = svgCanvas.append("g").attr('transform', 'translate(' + margin.left +','+margin.right+')');
        const root = d3.hierarchy(data);

        const tree = d3.tree().size([canvasWidth-margin.left-margin.right, canvasHeight-margin.top-margin.bottom]);

        const link = g.selectAll(".link")
            .data(tree(root).links())
            .enter().append("path")
            .attr("class", "link")
            .attr("fill","none")
            .attr("stroke","#ccc")
            .attr("d", d3.linkHorizontal()
                .x(function(d) { return d.x; })
                .y(function(d) { return d.y; }));

        const node = g.selectAll(".node")
            .data(root.descendants())
            .enter().append("g")
            .attr("class", function (d) {
                return "node" + (d.children ? " node--internal" : " node--leaf");
            })
            .attr("transform", function (d) {
                return "translate(" + d.x + "," + d.y + ")";
            });

        node.append("circle")
            .attr("r", 2.5);

        node.append("text")
            .text(function(d) { return d.data.name; })
            .attr('y',-10)
            .attr('x',-10)
            .attr('text-anchor','middle');

        showcase()

        function showcase() {
            horizontalTree();
        }

        function horizontalTree() {
            // Transition to horizontal
            ///
            // g.transition().attr("transform",'translate('+ margin.left +','+ margin.right +')').duration(5000);
            tree.size([canvasHeight-margin.top-margin.bottom,canvasWidth-margin.left-margin.right]);
            link.data(tree(root).links())
                .transition()
                .attr("d", d3.linkHorizontal()
                    .x(function(d) { return d.y; })
                    .y(function(d) { return d.x; }))
                .duration(1000);

            node.transition()
                .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; })
                .duration(1000);
        }

    }



    render() {
        return <div ref="canvas"/>
    }
}

export default D3PlaygroundComponent