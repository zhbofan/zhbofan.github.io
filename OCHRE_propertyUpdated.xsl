<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    exclude-result-prefixes="xs"
    version="2.0">
    
    <xsl:template match="/">
        <html>
            <head>
                <!-- Required meta tags -->
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta charset="utf-8"/>
                <title>My Little Underground</title>
                <link rel="icon" type="image/png" href="images/tabicon.png"/>
                <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
                    integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI="
                    crossorigin=""/>
                <script src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js"
                    integrity="sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM="
                    crossorigin=""></script>
                <!-- Bootstrap CSS -->
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-aFq/bzH65dt+w6FI2ooMVUpc+21e0SRygnTpmBvdBgSdnuTN7QbdgL+OapgHtvPp" crossorigin="anonymous"/>
                <link rel="stylesheet" href="css/mlu.css"/>
                
                <script src="https://code.jquery.com/jquery-3.5.0.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js" integrity="sha384-qKXV1j0HvMUeCBQ+QVp7JcfGl760yU08IQ+GpUo5hlbpg51QRiuqHAJz8+BrxE/N" crossorigin="anonymous"></script>
                
            </head>
            
            <body>
                <div id="subHead">
                    <div class="container-fluid">
                        <div class="col d-none d-xl-block">
                            <div class="my-4">
                                <a id="splashTitle" href="https://ochre.lib.uchicago.edu/RSTI/">
                                    <h1><xsl:value-of select="/ino:response/xq:result/ochre/spatialUnit/project/identification/label" xmlns:ino="http://namespaces.softwareag.com/tamino/response2" xmlns:xq="http://namespaces.softwareag.com/tamino/XQuery/result"/></h1>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div id="globalIdDescr" class="container-fluid">
                    <div id="identificationXSL">
                            <h2><xsl:value-of select="/ino:response/xq:result/ochre/spatialUnit/identification/label" xmlns:ino="http://namespaces.softwareag.com/tamino/response2" xmlns:xq="http://namespaces.softwareag.com/tamino/XQuery/result"/></h2>
                    </div>
                    <div id="citationXSL" class="pt-3">
                        Citation URL:  https://pi.lib.uchicago.edu/1001/org/ochre/24fdf4f5-0426-4715-86f2-5ba7331ff093
                    </div>
                    <hr class="d-none d-md-block my-2 ms-3"></hr>
                    <div id="descriptionHeading" class="sectionHeading">
                        <h4>Description</h4>
                    </div>
                    <div id="description">
                        <xsl:value-of select="/ino:response/xq:result/ochre/spatialUnit/description" xmlns:ino="http://namespaces.softwareag.com/tamino/response2" xmlns:xq="http://namespaces.softwareag.com/tamino/XQuery/result"/>
                    </div>   
                </div>
                
                <div>
                    <xsl:apply-templates/>
                </div>          
                    
            </body>
            
        </html>
    </xsl:template>
    
    <xsl:template match="metadata">
        
        <hr class="d-none d-md-block my-2 ms-3"></hr>
        
        <div class="container-fluid" id="metadata">
            <h4>Metadata</h4>
            <div class="section">
                <dl class="row">
                    <dt class="col-sm-3">Dataset</dt>
                    <dd class="col-sm-9">
                        <xsl:value-of select="dataset"/>
                    </dd>
                    
                    <dt class="col-sm-3">Description</dt>
                    <dd class="col-sm-9">
                        <xsl:value-of select="description"/>
                    </dd>
                    
                    <dt class="col-sm-3">Publisher</dt>
                    <dd class="col-sm-9">
                        <xsl:value-of select="publisher"/>
                    </dd>
                    
                    <dt class="col-sm-3">Identifier</dt>
                    <dd class="col-sm-9">
                        <xsl:value-of select="identifier"/>
                    </dd>
                    
                    <dt class="col-sm-3">Language</dt>
                    <dd class="col-sm-9">
                        <xsl:value-of select="language"/>
                    </dd>
                    
                </dl>
            </div>
        </div>

    </xsl:template>
    
    <xsl:template match="availability">
        
        <hr class="d-none d-md-block my-2 ms-3"></hr>
        
        <div class="container-fluid" id="metadata">
            <h4>Availability</h4>
            <div class="section">
                <dl class="row">
                    <dt class="col-sm-3">License</dt>
                    <dd class="col-sm-9">
                        <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
                            <xsl:value-of select="license"/>
                        </a>
                    </dd>  
                </dl>
            </div>
        </div>
        
    </xsl:template>

    <xsl:template match="spatialUnit">
        <hr class="d-none d-md-block my-2 ms-3"></hr>
        
        <div class="container-fluid" id="spatialUnit">
            <h4>Spatial Unit</h4>
            <div class="section">
                <dl class="row">
                    <dt class="col-sm-3">Identification</dt>
                    <dd class="col-sm-9">
                        <xsl:value-of select="identification"/>
                    </dd>
                    <dt class="col-sm-3">Description</dt>
                    <dd class="col-sm-9">
                        <xsl:value-of select="description"/>
                    </dd>
                    <dt class="col-sm-3">Coordinates</dt>
                    <dd class="col-sm-9">
                        <li> Lat: 
                            <xsl:value-of select="coordinates/coord/coordLatitude"/>
                        </li>
                        <li> Lon: 
                            <xsl:value-of select="coordinates/coord/coordLongitude"/>
                        </li>
                    </dd> 
                </dl>
            </div>
            
            <div class="section">
                <h5>Map</h5>
                <div id="map" style="height:60vh; width:80vh; position: relative;"></div>
                <script>
                    var latLng = [<xsl:value-of select="coordinates/coord/coordLatitude"/>, <xsl:value-of select="coordinates/coord/coordLongitude"/>];
                    var map = L.map('map').setView(latLng, 15);
                    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '@; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
                    maxZoom: 19}).addTo(map);
                    L.marker(latLng).addTo(map).bindPopup('<xsl:value-of select="identification/label"/>');
                </script>
            </div>
            
            <xsl:apply-templates select="observations"/>

        </div>
        
    </xsl:template>
    
    <xsl:template match="observations">
        <xsl:apply-templates select="observation"/>
    </xsl:template>
    
    <xsl:template match="properties">
        <hr class="d-none d-md-block my-2 ms-3"></hr>
        <div class="container-fluid" id="properties">
            <h4>Properties</h4>
            <xsl:apply-templates select="property"/>
        </div>
    </xsl:template>
    
    <xsl:template match="property">
        <div>
            <ul>
                <li>
                    <span>
                        <xsl:value-of select="label"/>
                    </span>
                    <xsl:text>: </xsl:text>
                    <span>
                        <xsl:value-of select="value"/>
                    </span>
                    <xsl:apply-templates select="property"/>
                </li>
            </ul>
        </div>
    </xsl:template>



    
    <xsl:template match="text()"></xsl:template>
    
</xsl:stylesheet>