const mongoose = require('mongoose');

const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/pcat-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const PhotoSchema = new Schema({
  title: String,
  description: String,
});

const Photo = mongoose.model('Photo', PhotoSchema);

/*
Photo.create({
  title: 'Photo 1',
  description: 'Photo 1 description',
});

Photo.find({}, (err,data)=>{
    console.log(data)
})
*/

const id = '61941eae5f4ee98379a4a780';

Photo.findOneAndUpdate(
  id,
  {
    title: 'Photo 11',
    description: 'Photo 11 desctiption updated',
  },
  {
    new: true,
  },
  (err, data) => {
    console.log(data);
  }
);
