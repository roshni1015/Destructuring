function f() {
    return [1, 2, 3];
  }
  
  const [a, , b] = f();
  console.log(a); 
  console.log(b); 
  
  const [c] = f();
  console.log(c); 