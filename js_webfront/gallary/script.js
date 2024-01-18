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

function selectAll(){
    var images = document.getElementsByClassName("image");
    /*if(images.length == 0){
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
    if(images.length == 0){
        images = document.getElementsByClassName("image-selected");
        var img_leng = images.length
        for (var i = 0; i < img_leng; i++){
            images[0].setAttribute("class","image");
        }
    }
    else{
        var img_leng = images.length
        for (var i = 0; i < img_leng; i++){
            images[0].setAttribute("class","image-selected");
        }
    }
}