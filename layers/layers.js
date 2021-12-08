ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3826").setExtent([-33173.021551, 2701600.797533, -26750.637063, 2708793.543797]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3826'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__1, 
                style: style__1,
                interactive: false,
                title: '<img src="styles/legend/_1.png" /> 烈嶼自然村'
            });
var format_Build_STR__2 = new ol.format.GeoJSON();
var features_Build_STR__2 = format_Build_STR__2.readFeatures(json_Build_STR__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3826'});
var jsonSource_Build_STR__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Build_STR__2.addFeatures(features_Build_STR__2);
var lyr_Build_STR__2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Build_STR__2, 
                style: style_Build_STR__2,
                interactive: true,
                title: '<img src="styles/legend/Build_STR__2.png" /> Build_STR_廢'
            });
var format_Build_STR__3 = new ol.format.GeoJSON();
var features_Build_STR__3 = format_Build_STR__3.readFeatures(json_Build_STR__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3826'});
var jsonSource_Build_STR__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Build_STR__3.addFeatures(features_Build_STR__3);
var lyr_Build_STR__3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Build_STR__3, 
                style: style_Build_STR__3,
                interactive: true,
                title: '<img src="styles/legend/Build_STR__3.png" /> Build_STR_中'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3826'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__4, 
                style: style__4,
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> 鋼棚'
            });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3826'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__5, 
                style: style__5,
                interactive: true,
                title: '<img src="styles/legend/_5.png" /> 鋼筋水泥'
            });
var format__6 = new ol.format.GeoJSON();
var features__6 = format__6.readFeatures(json__6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3826'});
var jsonSource__6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__6.addFeatures(features__6);
var lyr__6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__6, 
                style: style__6,
                interactive: true,
                title: '<img src="styles/legend/_6.png" /> 鐵皮'
            });
var format__7 = new ol.format.GeoJSON();
var features__7 = format__7.readFeatures(json__7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3826'});
var jsonSource__7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__7.addFeatures(features__7);
var lyr__7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__7, 
                style: style__7,
                interactive: true,
                title: '<img src="styles/legend/_7.png" /> 磚造'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr__1.setVisible(true);lyr_Build_STR__2.setVisible(true);lyr_Build_STR__3.setVisible(true);lyr__4.setVisible(true);lyr__5.setVisible(true);lyr__6.setVisible(true);lyr__7.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr__1,lyr_Build_STR__2,lyr_Build_STR__3,lyr__4,lyr__5,lyr__6,lyr__7];
lyr__1.set('fieldAliases', {'村名': '村名', });
lyr_Build_STR__2.set('fieldAliases', {'Build_STR': 'Build_STR', 'Build_NO': 'Build_NO', '樓高': '樓高', });
lyr_Build_STR__3.set('fieldAliases', {'Build_STR': 'Build_STR', 'Build_NO': 'Build_NO', '樓高': '樓高', });
lyr__4.set('fieldAliases', {'Build_STR': 'Build_STR', 'Build_NO': 'Build_NO', '樓高': '樓高', });
lyr__5.set('fieldAliases', {'Build_STR': 'Build_STR', 'Build_NO': 'Build_NO', '樓高': '樓高', });
lyr__6.set('fieldAliases', {'Build_STR': 'Build_STR', 'Build_NO': 'Build_NO', '樓高': '樓高', });
lyr__7.set('fieldAliases', {'Build_STR': 'Build_STR', 'Build_NO': 'Build_NO', '樓高': '樓高', });
lyr__1.set('fieldImages', {'村名': 'TextEdit', });
lyr_Build_STR__2.set('fieldImages', {'Build_STR': 'TextEdit', 'Build_NO': 'TextEdit', '樓高': 'TextEdit', });
lyr_Build_STR__3.set('fieldImages', {'Build_STR': '', 'Build_NO': '', '樓高': '', });
lyr__4.set('fieldImages', {'Build_STR': 'TextEdit', 'Build_NO': 'TextEdit', '樓高': 'TextEdit', });
lyr__5.set('fieldImages', {'Build_STR': 'TextEdit', 'Build_NO': 'TextEdit', '樓高': 'TextEdit', });
lyr__6.set('fieldImages', {'Build_STR': 'TextEdit', 'Build_NO': 'TextEdit', '樓高': 'TextEdit', });
lyr__7.set('fieldImages', {'Build_STR': 'TextEdit', 'Build_NO': 'TextEdit', '樓高': 'TextEdit', });
lyr__1.set('fieldLabels', {'村名': 'no label', });
lyr_Build_STR__2.set('fieldLabels', {'Build_STR': 'header label', 'Build_NO': 'header label', '樓高': 'header label', });
lyr_Build_STR__3.set('fieldLabels', {'Build_STR': 'inline label', 'Build_NO': 'inline label', '樓高': 'no label', });
lyr__4.set('fieldLabels', {'Build_STR': 'inline label', 'Build_NO': 'inline label', '樓高': 'header label', });
lyr__5.set('fieldLabels', {'Build_STR': 'inline label', 'Build_NO': 'inline label', '樓高': 'no label', });
lyr__6.set('fieldLabels', {'Build_STR': 'no label', 'Build_NO': 'no label', '樓高': 'no label', });
lyr__7.set('fieldLabels', {'Build_STR': 'no label', 'Build_NO': 'no label', '樓高': 'header label', });
lyr__7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});