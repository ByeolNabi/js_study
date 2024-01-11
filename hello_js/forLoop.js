var arr = [1,2,3,4,5,6,7,8,9]

for(let i = 0; i < arr.length; ++i){
    console.log("arr의",i,"번째 값은",arr[i],"입니다.");
}
console.log();

var obj = {
    name: "object",
    age: 10,
    weight: 5,
    hobby: "coding",
    lang : "js"
}

// dictionary를 기존 for문으로 순회하기 위해서는 keys(obj)를 이용해서 key값들을 배열로 전환시켜야한다.
var key_list = Object.keys(obj)
for(let i = 0; i < key_list.length; ++i){
    console.log(key_list[i]+"의 벨류 값은",obj[key_list[i]],"입니다.");
}
console.log();

// for in 을 이용한 dict obj 반복 방법
for(var key in obj){
    console.log(key+"의 벨류 값은",obj[key],"입니다.");
}