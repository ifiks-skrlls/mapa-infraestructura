var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Pealolnlimitelimitepenalolenshp__comunas_1 = new ol.format.GeoJSON();
var features_Pealolnlimitelimitepenalolenshp__comunas_1 = format_Pealolnlimitelimitepenalolenshp__comunas_1.readFeatures(json_Pealolnlimitelimitepenalolenshp__comunas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pealolnlimitelimitepenalolenshp__comunas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pealolnlimitelimitepenalolenshp__comunas_1.addFeatures(features_Pealolnlimitelimitepenalolenshp__comunas_1);
var lyr_Pealolnlimitelimitepenalolenshp__comunas_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pealolnlimitelimitepenalolenshp__comunas_1, 
                style: style_Pealolnlimitelimitepenalolenshp__comunas_1,
                popuplayertitle: "Peñalolénlimite — limitepenalolenshp__comunas",
                interactive: false,
                title: '<img src="styles/legend/Pealolnlimitelimitepenalolenshp__comunas_1.png" /> Peñalolénlimite — limitepenalolenshp__comunas'
            });
var format_Puntosdeinfraestructura_2 = new ol.format.GeoJSON();
var features_Puntosdeinfraestructura_2 = format_Puntosdeinfraestructura_2.readFeatures(json_Puntosdeinfraestructura_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puntosdeinfraestructura_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntosdeinfraestructura_2.addFeatures(features_Puntosdeinfraestructura_2);
var lyr_Puntosdeinfraestructura_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Puntosdeinfraestructura_2, 
                style: style_Puntosdeinfraestructura_2,
                popuplayertitle: "Puntos de infraestructura",
                interactive: true,
    title: 'Puntos de infraestructura<br />\
    <img src="styles/legend/Puntosdeinfraestructura_2_0.png" /> Punto Verde<br />\
    <img src="styles/legend/Puntosdeinfraestructura_2_1.png" /> Reciclaje Aceite Cocina<br />\
    <img src="styles/legend/Puntosdeinfraestructura_2_2.png" /> Reciclaje Aceite Vegetal<br />\
    <img src="styles/legend/Puntosdeinfraestructura_2_3.png" /> Reciclaje Vidrio<br />\
    <img src="styles/legend/Puntosdeinfraestructura_2_4.png" /> <br />'
        });

lyr_GoogleRoad_0.setVisible(true);lyr_Pealolnlimitelimitepenalolenshp__comunas_1.setVisible(true);lyr_Puntosdeinfraestructura_2.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_Pealolnlimitelimitepenalolenshp__comunas_1,lyr_Puntosdeinfraestructura_2];
lyr_Pealolnlimitelimitepenalolenshp__comunas_1.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'shape_leng': 'shape_leng', 'dis_elec': 'dis_elec', 'cir_sena': 'cir_sena', 'cod_comuna': 'cod_comuna', 'codregion': 'codregion', 'st_area_sh': 'st_area_sh', 'st_length_': 'st_length_', 'Region': 'Region', 'Comuna': 'Comuna', 'Provincia': 'Provincia', });
lyr_Puntosdeinfraestructura_2.set('fieldAliases', {'Nombre': 'Nombre', 'Tipo': 'Tipo', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', });
lyr_Pealolnlimitelimitepenalolenshp__comunas_1.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'shape_leng': 'TextEdit', 'dis_elec': 'Range', 'cir_sena': 'Range', 'cod_comuna': 'Range', 'codregion': 'Range', 'st_area_sh': 'TextEdit', 'st_length_': 'TextEdit', 'Region': 'TextEdit', 'Comuna': 'TextEdit', 'Provincia': 'TextEdit', });
lyr_Puntosdeinfraestructura_2.set('fieldImages', {'Nombre': 'TextEdit', 'Tipo': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Dirección': '', });
lyr_Pealolnlimitelimitepenalolenshp__comunas_1.set('fieldLabels', {'fid': 'no label', 'objectid': 'no label', 'shape_leng': 'no label', 'dis_elec': 'no label', 'cir_sena': 'no label', 'cod_comuna': 'no label', 'codregion': 'no label', 'st_area_sh': 'no label', 'st_length_': 'no label', 'Region': 'no label', 'Comuna': 'no label', 'Provincia': 'no label', });
lyr_Puntosdeinfraestructura_2.set('fieldLabels', {'Nombre': 'inline label - always visible', 'Tipo': 'inline label - always visible', 'Latitud': 'hidden field', 'Longitud': 'hidden field', 'Dirección': 'inline label - always visible', });
lyr_Puntosdeinfraestructura_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});