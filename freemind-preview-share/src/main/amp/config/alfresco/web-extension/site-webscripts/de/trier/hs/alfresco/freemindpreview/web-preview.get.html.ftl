<#if page??>
<@markup id="freemindjs" target="js" action="after" scope="template">
    <@script type="text/javascript" src="${page.url.context}/res/components/shareFreemindPreview/flashobject.js" />
    <@script type="text/javascript" src="${page.url.context}/res/components/shareFreemindPreview/FreemindPreview.js" />
</@>
<@markup id="freemindcss" target="css" action="before" scope="template">
    <@link href="${page.url.context}/res/components/shareFreemindPreview/flashfreemind.css" />
</@>
<#else>
<@markup id="freemindjs" target="js" action="after" scope="template">
    <@script type="text/javascript" src="/res/components/shareFreemindPreview/flashobject.js" />
    <@script type="text/javascript" src="/res/components/shareFreemindPreview/FreemindPreview.js" />
</@>
<@markup id="freemindcss" target="css" action="before" scope="template">
    <@link href="/res/components/shareFreemindPreview/flashfreemind.css" />
</@>
</#if>

