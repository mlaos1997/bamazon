// Dependencies
const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
	host: "localhost",
	port: 3306,

	//Username
	user: "root",

	//Password
	password: "root",
	database: "bamazon_DB"
});

connection.connect(function(err) {
	if(err) throw err;
	console.log("Listening to server");
	start();
});


function start() {
	connection.query("SELECT * FROM products", function(err, results){
		if (err) throw err;
		// once you have the items, prompt the user for which they'd like to purhcase
		inquirer
			.prompt([
			{
				name: "choice",
				type: "rawlist",
				choices: function() {
					var choiceArray = [];
					for (var i = 0; i < results.length; i++) {
						choiceArray.push(results[i].product_name);
					}
					return choiceArray;
				},
				message: "Please enter the ID of the item you would like to purchase:"
			},
			{
				name: "units",
				type: "input",
				message: "How many units would you like to purchase?"
			}
				])
				  .then(function(answer) {
				  	var chosenItem;
				  	for(var i = 0; i < results.length; i++) {
				  		if(results[i].product_name === answer.choice) {
				  			chosenItem = results[i].product_name;
				  		}
				  	}

				  		 if (chosenItem.stock_quantity < parseInt(answer.choice)) {
				  			connection.query(
				  				"UPDATE products SET ? WHERE ?",
				  				[
				  				  {
				  				  	stock_quantity: answer.units - stock_quantity
				  				  },
				  				  {
				  				  	id: chosenItem.id
				  				  }
				  				],
				  				function(error) {
				  					if (error) throw err;
  									console.log("You have succesfully purhcased an " + chosenItem + ", quantity: " + answer.units + " units! Thanks for using bamazon!");
				  					start();
				  								}
				  				);
				  			  } else { 
		  					  console.log("Insufficient quantity! Try again");
				  			  start();
				  			  }
				  			  
				  	});
				  });
			};