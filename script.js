require([
    "esri/Map",
    "esri/layers/CSVLayer",
    "esri/views/MapView",
    "esri/renderers/HeatmapRenderer",
    "esri/widgets/Legend",
    "esri/widgets/Expand",
    "dojo/domReady!"
], function (
    Map,
    CSVLayer,
    MapView,
    HeatmapRenderer,
    Legend,
    Expand
) {

    // CSV Layer URL
    var url = "https://raw.githubusercontent.com/orhuna/WebGIS_SLU_M1/main/Module%202/stl_crime_wgs_84.csv";

    // Create a map with a basemap
    var map = new Map({
        basemap: "dark-gray"
    });

    // Create the MapView
    var view = new MapView({
        map: map,
        container: "viewDiv",
        center: [-90.1994, 38.6270], // St. Louis, MO
        zoom: 10
    });

    // Create a CSVLayer
    var layer = new CSVLayer({
        url: url,
        title: "St. Louis Crime Heatmap",
        copyright: "St. Louis Police Department",
        latitudeField: "Latitude",
        longitudeField: "Longitude"
    });

    // Create a HeatmapRenderer
    var renderer = new HeatmapRenderer({
        blurRadius: 10
    });

    // Set the renderer for the layer
    layer.renderer = renderer;

    // Add the CSVLayer to the map
    map.add(layer);

    // Add legend
    var legend = new Legend({
        view: view,
        layerInfos: [{
            layer: layer,
            title: "Crime Heatmap"
        }]
    });

    var expandLegend = new Expand({
        view: view,
        content: legend,
        expanded: true
    });

    view.ui.add(expandLegend, "bottom-left");

});
