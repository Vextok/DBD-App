const mysql = require('mysql2');

const connection = mysql.createConnection({
  
});


const newPerks = [
  { name: 'Haywire', image: 'killer_perk_images/haywire.jpg' },
  { name: 'Help Wanted', image: 'killer_perk_images/help_wanted.jpg' },
  { name: 'Phantom Fear', image: 'killer_perk_images/phantom_fear.jpg' }
];

newPerks.forEach(perk => {
  const query = 'INSERT INTO killer_perks (perk_name, perk_image) VALUES (?, ?)';
  connection.query(query, [perk.name, perk.image], (err, result) => {
    if (err) throw err;
    console.log('Perk added:', result);
  });
});

connection.end();