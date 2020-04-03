import * as d3 from 'd3';
import { geoPath, geoMercator, select, local } from 'd3';

const data = require('./Json/map.geojson');


localPaths = data.features.map(pathCreator);

// la taille de la carte
const WIDTH = 800
const HEIGHT = 500

const svg = d3.select('body')
.append('svg')
.attr('width', WIDTH)
.attr('height', HEIGHT)
const DATA = result;

const pathCreator = d3.geoPath().projection(projection)
  
const svg = d3.select(container)

svg.selectAll('path')
  .data(cantons.features)
  .enter()
  .append('path')
  .attr('d', pathCreator)


