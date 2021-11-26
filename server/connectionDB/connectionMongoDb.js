const mongoose = require('mongoose');

exports.initDataBases = async () => {
  const url_ = 'mongodb+srv://IgnacioCruz:Ignamajo1319@itktests.4ls31.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
  await mongoose.connect(url_, () => {
    console.log("Connected to databases correctly");
  }).catch(err => console.log(err));
  //main()
}