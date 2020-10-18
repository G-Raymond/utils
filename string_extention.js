function replaceNull(value,length) {
    //判断截取的值是否为空
    if(value == null || value==undefined || value == "" || value=='undefined'){
        return "-";
    }
    //判断长度是否为空
    if(length == null || length == ''){
        return value;
    }
    return value.toString().substr(0,length);
}