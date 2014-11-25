(function() {

    Alfresco.WebPreview.prototype.Plugins.FreemindPreview = function(wp, attributes)
    {
       this.wp = wp;
       this.attributes = YAHOO.lang.merge(Alfresco.util.deepCopy(this.attributes), attributes);
       return this;
    };

    Alfresco.WebPreview.prototype.Plugins.FreemindPreview.prototype = {
        attributes:
        {
            /**
            * Decides if the node's content or one of its thumbnails shall be displayed.
            * Leave it as it is if the node's content shall be used.
            * Set to a custom thumbnail definition name if the node's thumbnail contains the image to display.
            *
            * @property src
            * @type String
            * @default null
            */
            src: null,

            /**
            * Maximum size to display given in bytes if the node's content is used.
            * If the node content is larger than this value the image won't be displayed.
            * Note! This doesn't apply if src is set to a thumbnail.
            *
            * @property srcMaxSize
            * @type String
            * @default "500000"
            */
            srcMaxSize: "500000"
        },

        report: function() {
            // nothing to report div element is always supported
        },
        display: function() {
            var newEl = document.createElement("div");
            newEl.id="flashcontent";

            var swfUrl = Alfresco.constants.URL_CONTEXT + "res/components/shareFreemindPreview/visorFreemind.swf"
            var fo = new FlashObject(swfUrl, "visorFreeMind", "100%", "100%", 6, "#9999ff");
		    fo.addParam("quality", "high");
		    fo.addParam("bgcolor", "#a0a0f0");
		    fo.addVariable("openUrl", "_blank");
		    fo.addVariable("startCollapsedToLevel","5");
		    fo.addVariable("maxNodeWidth","200");
		    //
		    fo.addVariable("mainNodeShape","elipse");
		    fo.addVariable("justMap","false");
		    fo.addVariable("initLoadFile",this.wp.getContentUrl());
		    fo.addVariable("defaultToolTipWordWrap",200);
		    fo.addVariable("offsetX","left");
		    fo.addVariable("offsetY","top");
		    fo.addVariable("buttonsPos","top");
		    fo.addVariable("min_alpha_buttons",20);
		    fo.addVariable("max_alpha_buttons",100);
		    fo.addVariable("CSSFile", "/share/res/components/shareFreemindPreview/flashfreemind.css");
		    fo.addVariable("baseImagePath", "/share/res/components/shareFreemindPreview/");
		    fo.addVariable("scaleTooltips","false");


            this.wp.getPreviewerElement().innerHTML = "Waiting for freemind preview";

            this.wp.getPreviewerElement().appendChild(newEl);
		    fo.write("flashcontent");

            return newEl.innerHTML;
        }
    };

})();
