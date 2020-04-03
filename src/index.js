import * as d3 from 'd3';
import { geoPath, geoMercator, select, local } from 'd3';

// importer les fichiers GeoJSON
import localisations from 'Json/map.geojson'


// la taille de la carte
const WIDTH = 800
const HEIGHT = 500

// la projection
const projection = geoMercator()
  .fitExtent([[0, 0], [WIDTH, HEIGHT]], localisations)
  
  // le constructeur d'attribut "d" pour les éléments <path>
const pathCreator = geoPath().projection(projection)


const svg = select('#carte').append('svg')
  .attr('width', WIDTH)
  .attr('height', HEIGHT)

  const groupeRoutes = svg.append('g')

  groupeRoutes.selectAll('path')
  .data(localisations.positions)
  .enter()
  .append('path')
  .attr('d', pathCreator)
  .attr('fill', 'none')
  .attr('stroke', 'lightgray')
  .attr('stroke-width', 3)



