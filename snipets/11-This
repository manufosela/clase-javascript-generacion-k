var name = 'John';
// const name = 'John';

const obj1 = {
  name: 'Mary',
  whoIam: function() {
    const name = 'James';
    setTimeout(function() {
      console.log('1 ->' + this.name); // this es Timeout en Node y Window en Navegador
    }, 1000);
  }
};


const obj2 = {
  name: 'Mary',
  whoIam: function() {
    const name = 'James';
    setTimeout(() => {
      console.log('2 ->' + this.name); // this es obj2
    }, 1000);
  }
};

const obj3 = {
  name: 'Mary',
  whoIam: () => {
    const name = 'James';
    setTimeout(() => {
      console.log('3 ->' + this.name); // this es global
    }, 1000);
  }
};

const obj4 = {
  name: 'Mary',
  whoIam: () => {
    const name = 'James';
    setTimeout(function() {
      console.log('4 ->' + this.name); // this es Timeout en Node y Window en Navegador
    }, 1000);
  }
};

obj1.whoIam();
obj2.whoIam();
obj3.whoIam();
obj4.whoIam();

/*

PREGUNTA:
¿En obj2, como harias para que el console.log mostrase el valor de James?

*/