 let listeners = [];

function suscribe(listener) {
  listeners.push(listener);
  return () => { // retorna una función unsuscribe
     listeners = listeners.filter(function(item){item !== listener});
  };
}

let hola = suscribe( function(){ console.log('hola')});

console.log(listeners);

hola();

console.log(listeners);