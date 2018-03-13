'use strict';

const { DATABASE } = require('./config');
const knex = require('knex')(DATABASE);

// clear the console before each run
process.stdout.write('\x1Bc');

// Sample select 
// knex
//   .select()
//   .from('restaurants')
//   .limit(2)
//   .debug(true)
//   .then(results => console.log(results));
// //
//
// Destroy the connection pool
// knex.destroy().then(() => {
//   console.log('database connection closed');
// });


//  knex
//   .select()
//   .table('restaurants')
//   .debug(true)
//   .then(results => console.log(results));


// knex
// .select()
// .from('restaurants')
// .where({cuisine:'Italian'})
// .limit(5)
// .debug(true)
// .then(results => console.log(results))


// knex
// .select()
// .from('restaurants')
// .where({cuisine:'Italian'})
// .select('id','name')
// .limit(10)
// .debug(true)
// .then(results => console.log(results))


// knex
// .count()
// .from('restaurants')
// .where({cuisine:'Thai'})
// .debug(true)
// .then(results => console.log(results))


// knex
// .count()
// .from('restaurants')
// .debug(true)
// .then(results => console.log(results))

knex
.count()
.from('restaurants')
.where({cuisine:'Thai'})
.where({address_zipcode:'11372'})
.then(results => console.log(results))