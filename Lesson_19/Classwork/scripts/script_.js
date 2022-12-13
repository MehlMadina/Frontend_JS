// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(resp => resp.json())
//     .then(data => console.log(data));


// fetch("https://fakestoreapi.com/products/000000000")
//   .then(
//     (resp) => {
//       console.log(resp);
//       return resp.json();
//     },
//     (err) => {
//       console.log(err);
//     }
//   )
//   .then(
//     (data) => console.log(data),
//     () => {
//       console.log("json parse error");
//     }
//   );


const promise = new Promise((resolve, rejecte) => {
  const rand_value = Math.random();
  if (rand_value > 0.5) {
    resolve(rand_value);
  } else {
    rejecte(rand_value);
  }
});

promise.then(
  (value) => console.log(`Resolve: ${value}`),
  (value) => console.log(`Reject: ${value}`)
);


function then(resolve, reject) {
  const func = (resolve, rejecte) => {
    const rand_value = Math.random();
    if (rand_value > 0.5) {
      resolve(rand_value);
    } else {
      rejecte(rand_value);
    }
  };

  func(resolve, reject);
}