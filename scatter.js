var svg = document.getElementById("svg");
var info = [[30.1,456],[30.5,509],[30.6,497],[31.3,596],[31.7,573],[32.6,661],[33.1,741],[32.7,809],[32.8, 717]];

var plot = function(){
	var container = d3.select("svg");
	circles = container.selectAll("circle").data(info).enter();
	circles.append("circle").attr("cy", function(d){return (((d[0] * -1) + 34) * 100 ) + 80}).attr("cx", function(d) {return d[1] - 100}).attr("r", 5).attr("fill","black");
	svg.append(circles);
};

plot();