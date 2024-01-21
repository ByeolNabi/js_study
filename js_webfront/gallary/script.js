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
            // 이미지 확대 축소
            // 임시 함수로 묶을 거라면 this를 사용할 수 없다는 것을 항상 기억하자
            // 태그에 접근하기 위해서는 document.div와 같이 접근할 수 없다. getElements...(), child[idx]와 같은 형태를 이용하자
            // 이미지 수정을 위해 태그에 직접 style을 추가하는 것이 맞는 판단일까? css파일에 접근할 수 있는지도 고민해보자.
            div.onmouseover = function(){
                var target_e = this
                this.timerID = setTimeout( function( ){ // 그냥 태그에 저장해버리기
                    target_e.classList.add("image-magnified");
                    /*
                    var target_i = target_e.getElementsByTagName("img")[0];
                    (function(){
                        target_i.width = target_i.width * 1.2;
                        target_i.height = target_i.height * 1.2;
                    })();
                    */
                }, 500);
            }
            div.onmouseout = function(){
                clearTimeout(this.timerID)
                this.classList.remove("image-magnified");
                /*
                var target_i = this.getElementsByTagName("img")[0];
                (function(){
                    if(target_i.hasAttribute("width")){
                        target_i.removeAttribute("width");
                    }
                    if(target_i.hasAttribute("height")){
                        target_i.removeAttribute("height");
                    }
                })();
                */
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

function slideShow(btn){
    var images = document.getElementsByClassName("image");
    var idx_range = images.length;
    var index = 0;
    images[0].classList.add("image-magnified");

    var intervalID = setInterval( function(){
        images[index].classList.remove("image-magnified");
        console.log(index);
        if(idx_range != index){
            index++;
            images[index].classList.add("image-magnified");
        } else{
            clearInterval(intervalID);
        }
    }, 1000);

}