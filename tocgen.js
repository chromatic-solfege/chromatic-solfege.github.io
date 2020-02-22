function generateToc( post_id, toc_class ) {
    var toc = "";
    var level = 0;
    var element = document.getElementsByClassName( post_id )[0];
    element.innerHTML = (
        element.innerHTML.replace(
            /<h([\d])>([^<]+)<\/h([\d])>/gi,
            function (str, openLevel, titleText, closeLevel) {
                openLevel  = parseInt( openLevel );
                closeLevel = parseInt( closeLevel );

                if (openLevel != closeLevel) {
                    return str;
                }
                if ( level == 0 ) {
                    level = openLevel -1;
                }

                if (openLevel > level) {
                    toc += (new Array(openLevel - level + 1)).join("<ol>");
                } else if (openLevel < level) {
                    toc += (new Array(level - openLevel + 1)).join("</ol></li>");
                } else {
                    toc += '</li>';
                }

                level = openLevel;

                var anchor = titleText.trim().replace(/ /g, "_");
                var shortenTitleText = titleText.trim().replace( 
                        new RegExp( "^[0-9\.０１２３４５６７８９ " + 
                            // halfwidth period
                            String.fromCharCode( 65294 ) + 
                            // double-width space
                            String.fromCharCode( 12288 ) + "]+\s*", "mg" ),  "" ).trim();

                if ( anchor ) {
                    toc += "<li><a href=\"#" + anchor + "\">" + shortenTitleText + "</a>";
                    return "<h" + openLevel + "><a name=\"" + anchor + "\">"
                        + titleText + "</a></h" + closeLevel + ">";
                } else {
                    return "";
                }
            }
        ));

    if (level) {
        toc += (new Array(level + 1)).join("</ol>");
    }

    if ( toc ) {
        var tocElement = document.createElement("div");
        tocElement.setAttribute( "class" , toc_class );
        tocElement.innerHTML = toc;
        var objectElement = document.getElementsByName('more')[0];
        console.error( objectElement );
        objectElement.parentNode.insertBefore( tocElement, objectElement.nextSibling );
    }
}
console.error( 'toc generator was loaded.' );

{
    var post_id = "main_content";
    var toc_class  = "main_content_class";
    window.addEventListener( 'load', function(){ generateToc(post_id,toc_class)} );
    // setTimeout( generateToc , 1000 );
}

