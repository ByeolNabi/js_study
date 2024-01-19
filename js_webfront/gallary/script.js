var req = new XMLHttpRequest();
req.open("GET","http://127.0.0.1:5501/js_webfront/gallary/json/img_list.json");
req.onreadystatechange = function(){
    console.log("hi")
    if(this.readyState == 4){ // 모든 데이터가 정상적으로 수신되었을 떄
        var data = JSON.parse(this.response);
        for(var i=0; i<data.length; i++){
            var div = document.createElement("div");
            div.setAttribute("class","image");
            div.onclick = function(){
                /*if(this.getAttribute("class") == "image image-selected"){
                    this.setAttribute("class","image");
                }
                else if("image"){
                    this.setAttribute("class","image image-selected");
                }*/
                this.classList.toggle("image-selected");
            }
            var img = document.createElement("img");
            img.src = data[i];
            div.appendChild(img);
            document.body.appendChild(div);
        }
    }
}
req.send();

function selectAll(btn){
    /*
    if(images.length == 0){
        images = document.getElementsByClassName("image-selected");
        for (var i = 0; i < images.length; i++){
            images[i].setAttribute("class","image");
        }
    }
    else{
        for (var i = 0; i < images.length; i++){
            images[i].setAttribute("class","image-selected");
        }
    }*/
    var images = document.getElementsByClassName("image");
    for(var i = 0; i < images.length;++i){
        if(btn.value == "Select All"){
            images[i].classList.add("image-selected");
        }
        else if(btn.value == "Unselect All"){
            images[i].classList.remove("image-selected");
        }
    }
    btn.value = btn.value == "Select All"?"Unselect All":"Select All";
}