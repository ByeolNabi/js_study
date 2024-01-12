function print_age(){
    console.log(this.age);
}

var person = {
    name : "김대규",
    age : 25,
    show_age : print_age
}

var dog = {
    name : "뽀삐",
    age : 3,
    sound : "멍멍",
    show_age : print_age
}

person.show_age();
dog.show_age();

// 뭔가 c++에서 봤던 this이다.