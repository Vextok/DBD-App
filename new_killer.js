const mysql = require('mysql2');

const connection = mysql.createConnection({
  
});

const newKiller = {
  name: 'The Animatronic',
  keyword1: 'Ranged',
  keyword2: 'Mobility',
  imageUrl: 'killer_images/the_animatronic.jpg'
};


const query = 'INSERT INTO killers (killer_name, killer_keyword, killer_keyword2, image_url) VALUES (?, ?, ?, ?)';

connection.query(
  query,
  [newKiller.name, newKiller.keyword1, newKiller.keyword2, newKiller.imageUrl],
  (err, result) => {
    if (err) throw err;
    console.log('Killer added:', result);
    connection.end();
  }
);
