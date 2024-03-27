const fs = require('fs');
const superagent = require('superagent');

const readDogFile = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};


const writeDogFile = (path, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, err => {
            if(err) reject(err);
            resolve(data);
        })
    })
}

// readDogFile(`${__dirname}/dog.txt`)
//   .then((data) => {
//     console.log(`Breed ${data}`);
//     return superagent
//       .get(`https://dog.ceo/api/breed/${data}/images/random`)


//   })
//   .then((res) => {
//         //console.log(res.body.message);
//         let result = res.body.message;

//         return writeDogFile(`${__dirname}/dog-image.txt`, result)

//   })
//   .then(() => console.log('File have been written with success!!'))
//   .catch((err) => console.log(err.message));



const fetchDogApi = async () => {

  try{
    const data = await readDogFile(`${__dirname}/dog.txt`);
    const res = await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)

    const result = await writeDogFile(`${__dirname}/dog-image.txt`, res.body.message)

    console.log(result)

  }
  catch(err){
    console.log("Message Error", err)
  }
}


fetchDogApi()
















// fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
//   if (err) return err;
//   console.log(`Breed ${data}`);

//   superagent
//     .get(`https://dog.ceo/api/breed/${data}/images/random`)
//     .then((res) => {
//       console.log(res.body);
//       let result = res.body.message;

//       fs.writeFile(`${__dirname}/dog-image.txt`, result, (err) => {
//         if (err) return console.log(err.message);
//         console.log('message writenn succefully!!');
//       });
//     })
//     .catch((err) => {
//       console.log('this is an error!!=>', err.message);
//     });
// });