'use strict';
const Twitter = require('twitter');
const config = require('./config');

const T = new Twitter(config);

// Set up search params
const params = {
  q: '#nodejs',
  count: 10,
  result_type: 'recent',
  lang: 'en'
}
 T.get('search/tweets', params, function(err, data, response){
   if(!err){
    //  Loop thru returned tweets
    for (let i = 0; i < data.statuses.length; i++) {
      // Get tweet ID from data


      //======= FAVORITE A POST =======//
      // let id = {id: data.statuses[i].id_str};
      // T.post('favorites/create', id, function(err, response){
      //   if(err) {console.log(err[0].message);}
      //   else {
      //     let username = response.user.screen_name;
      //     let tweetID = response.id_str;
      //     console.log('Favorited: ', `https://twitter.com/${username}/status/${tweetID}`);
      //    }
      //  });

      //======= FAVORITE A USER =======//
      // let screen_name = data.statuses[i].user.screen_name;
      // T.post('friendships/create', {screen_name}, function(err, res){
      //   if(err)console.log(err);
      //   console.log(screen_name, ': **FOLLOWED**');
      // });

    }
   }else {
     console.log(err);
   }
 });
