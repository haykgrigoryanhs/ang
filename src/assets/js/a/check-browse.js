function getInternetExplorerVersion()
{
    var rv = -1;
    if (navigator.appName == 'Microsoft Internet Explorer')
    {
        var ua = navigator.userAgent;
        var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null)
            rv = parseFloat( RegExp.$1 );
    }
    return rv;
}
if(getInternetExplorerVersion()>0 && getInternetExplorerVersion()<10){
    window.location.replace("/errors/unsupported-browser/"+getInternetExplorerVersion())
}
