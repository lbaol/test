/*
  山寨co2
*/
function* gen(){
 
  var a = yield Promise.resolve('a-resolve');
  console.log(a);
  var b = yield Promise.resolve('b-resolve');
  console.log(b);
  var c = yield Promise.resolve('c-resolve');
  console.log(c);
  
}

//自动执行

function run(fn){

  var gen  = fn();

  function next(data){
    var res = gen.next(data);
    if(res.done == true) return;
    res.value.then(next);
  }

  next();

}


run(gen);
run(gen);