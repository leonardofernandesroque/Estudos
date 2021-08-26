function rand(min =1000, max =3000){
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function f1(){
    setTimeout(function(){
        console.log('Massa');
    }, rand());
}

function f2(){
    setTimeout(function(){
        console.log('Rubinho');
    }, rand());
}

function f3(){
    setTimeout(function(){
        console.log('Senna');
    }, rand());
}

f1();
f2();
f3();
console.log('O campeão é : ');