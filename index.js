'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const { PORT, CLIENT_ORIGIN } = require('./config');

const app = express();

const dogs = [
  {
    imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Zeus',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away'
  },
  { 
    imageURL: 'https://i.ytimg.com/vi/GF60Iuh643I/hqdefault.jpg', 
    imageDescription: 'Swingin\' all smug like', 
    name : 'Breh', 
    sex : 'Male', 
    age: '7', 
    breed: 'Pit Bull', 
    story: 'Got too cool'
  }, 
  { 
    imageURL: 'https://i.ytimg.com/vi/3PYLBEQYA00/hqdefault.jpg', 
    imageDescription: 'Why did you give me a cucumber?', 
    name : 'Zero',
    sex : 'Male',  
    age: '2', 
    breed: 'Mutt', 
    story: 'One day he just fell from the sky'
  }
]; 
const cats = [ 
  {
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street'
  }, 
  { 
    imageURL:'http://www.krugerpark.co.za/images/1-lion-charge-gc590a.jpg', 
    imageDescription: 'She is on a mission for meat', 
    name: 'Sweetheart', 
    sex: 'Female', 
    age: 11, 
    breed: 'Part lion, part assasin', 
    story: 'Ate previous owner'
  }, 
  { 
    imageURL:'https://steemitimages.com/DQmQrtzstdGA77KZqY2CQ2AFVdqfmfympWmgRssbCUNGsU5/30708632_1822218814463863_480317844957954048_n.jpg', 
    imageDescription: 'Planning global domination', 
    name: 'Lil\' Demon',
    sex: 'Female', 
    age: 22, 
    breed: 'Egyptian God', 
    story: 'Owner deceased due to uknown pagan rituals'
  }
]; 

app.use(
  morgan(process.env.NODE_ENV === 'production' ? 'common' : 'dev', {
    skip: (req, res) => process.env.NODE_ENV === 'test'
  })
);

app.use(
  cors({
    origin: CLIENT_ORIGIN
  })
);

app.get('/api/cat', (req, res) => { 
  
  //returns first cat
  res.json(cats[0]); 
}); 

app.delete('/api/cat', (req, res) => { 

  //removes first cat
  cats.splice(0, 1); 

  res.status(204).end();   
}); 

app.get('/api/dog', (req, res) => { 

  //returns first dog
  res.json(dogs[0]); 
}); 

app.delete('/api/dog', (req, res) => { 

  //removes first dog
  dogs.splice(0, 1); 

  res.status(204).end(); 
})


function runServer(port = PORT) {
  const server = app
    .listen(port, () => {
      console.info(`App listening on port ${server.address().port}`);
    })
    .on('error', err => {
      console.error('Express failed to start');
      console.error(err);
    });
}

if (require.main === module) {
  runServer();
}

module.exports = { app };
