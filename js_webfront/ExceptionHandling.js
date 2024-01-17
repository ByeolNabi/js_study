function errFunc(){
    throw "THROW ERROR!";
    console.log("this code will not be executed");
}

function func(){
    try{
        console.log("function try- 1");
        errFunc();
        console.log("function try - 2");
    }
    // error는 catch를 찾아간다. 따라서 global catch까지 찾아간다.
    // 한번 catch에 잡히면 error는 끝이다.

    // catch(e){
    //     console.log("catch error : ", e);
    // }
    finally{
        console.log("finally in fuc");
    }
}

try{
    console.log("global try - 1");
    //throw "error";  // throw를 이용해서 에러를 발생시킨다면 의미가 있나.
    func();
    console.log("global try - 2");
}
catch(e){
    console.log("catch error : ", e);
}
finally{
    console.log("finally global");
}