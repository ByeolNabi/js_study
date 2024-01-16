var sum = 0;

for(var i = 0; i <= 50; i++){
    sum += i;
}

// 스코프를 만들어서 변수가 섞이는 것을 방지할 수 있음
(function (){
    for(var i = 0; i <= 5; i++){
        console.log(i);
    }
})()

for(;i<=100;i++){
    sum += i;
}

console.log(sum)

//=============
// 콜백함수를 만들때 외부에서 선언하지 않아도 된다.
setTimeout(
    function(){
        console.log("timeout");
    }, 3000
)