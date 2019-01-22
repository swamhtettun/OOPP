function request(method, url, callback){
    var xml=new XMLHttpRequest();
    xml.open(method, url, true);
    xml.onreadystatechange = function(){
        if (xml.readyState === 4 && xml.status===200){
            callback(xml.response);
           }
    }
    return xml;
}
