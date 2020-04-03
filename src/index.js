import * as d3 from 'd3';
import { geoPath, geoMercator, select } from 'd3';

// importer les fichiers GeoJSON
import localisations from 'Json/map.geojson'


// la taille de la carte
const WIDTH = 800
const HEIGHT = 500

// la projection
const projection = geoMercator()
  .fitExtent([[0, 0], [WIDTH, HEIGHT]], batiments) // centrer la carte sur les bâtiments
  

