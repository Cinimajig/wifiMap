
///// Configuració ////////////////////////////////////////////////////////////////////
//Default map position
var LAT_LON_INICAL 				= {
							lat: getQueryVariable('lat') || 41.616950,
							lng: getQueryVariable('lng') || 0.8665
						}; 
//Default Zoom
var ZOOM_INICIAL 				= 19;
//en: Relation between signal dB and distance to AP 
var FACTOR_COBERTURA_DISTANCIA 			= 0.0000011;

//cat:Relació entre els dB i la distancia al AP. Com més gran mes es distanciaran els clients amb poca cobertura
//Frames per second
var FPS 					= 20;
//RPM Revolucions per minut dels usuaris. RPM màxima dels usuaris amb mes cobertura
var RPM 					= 2;
//en:User label left padding
var DESPLACAMENT_HORITZONTAL_ETIQUETA_USUARIS 	= 49;
//Auto refresh period in seconds																						//cat:Deplaçament de l'etiqueta de clients cap a la dreta (en pixels)
var AUTO_ACTUALITZACIO 				= 60;

//en:User "note" in controler properties to paint user in a different color
var NOTA_USUARIS_DIFERENTS 			= "professor";
																						//cat:Cadena que cerquem a la propietat "note" de Unifi per pintar l'usuari de color diferent
//en: Bytes consumed by user for warning color (from last association)
var CONSUM_DADES_ALT				= 300 * 1000000
//en: Bytes consumed by user for alert color (from last association)
var CONSUM_DADES_EXTREM				= 600 * 1000000 
///////////////////////////////////////////////////////////////////////////////////////
