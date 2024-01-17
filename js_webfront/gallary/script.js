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
                // image image-selecte이면 회색으로 안 바뀜 image-selected에서 image로 하면 바뀜
                this.setAttribute("class","image-selected image"); // css 에서 다중 클래스일 떄에 css가 안 덮어씌워지는 경우도 있나.?

            }
            var img = document.createElement("img");
            img.src = data[i];
            div.appendChild(img);
            document.body.appendChild(div);
        }
    }
}
req.send();