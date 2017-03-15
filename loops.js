function forLoop(array) {
    for (let i = 0; i < 25; i++) {
      array.push( "I am " + (i + 1) + " strange loops" );
    }
    return array
}

function whileLoop(n) {
  while (n > 0) {
    console.log(n);
    --n;
  }
  return 'done'
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
    array.pop()
  } while (array.length > 0 && maybeTrue())
  return 'false'
}