var mysql = require("mysql");
var inquirer = require("inquirer");

// connection for mysql
var connection = mysql.createConnection({
    host: "localhost",
// Port
    port: 8889,
// Username
user: "root",

// Password
password: "",
database: "productsDB"

});

// function to begin game in node
connection.connect(function(err) {

    if (err) throw err;
    // begin
    start();

})

// begin of question prompt
function start() {
    inquirer.prompt({
    
        name: "postOrBid",
        type: "rawlist",
        message: "Would you like to [POST] or [BID] on an auction?",
        // choices: ["ID of product", "How many units", "Exit"],
        choices: ["POST","BID"]
    }).then(function(answer) {
        if(answer.postOrBid.toUpperCase()=="POST"){
            postAuction();

        } else {

        }
    })

}

// inquirer prompt for questions
var postAuction = function() {
    inquirer.prompt([{
        name: "item",
        type: "input",
        message: "What is the item you want to submit?"
    },
    {
        name: "category",
        type: "input",
        message: "What category would you like to place it in?"
    },
    {
        name: "startingBid",
        type: "input",
        message: "What would you like your starting bid to be?",
            validate: function(vaule) {
                if(isNaN(value)==false){
                    return true;
                } else {
                    return false;
                }
            }
    }])

    // inserts answers into chart and begins auction
    .then(function(answer){
        connection.query("INSERT INTO auctions SET ?", {
            itemname:answer.item,
            category:answer.category,
            startingbid:answer.startingBid,
            highestbid:answer.startingBid
        },
        function(err,res){
            console.log("Your auction was created succesfully!");
            start();
        
        })
    })
    
}

// auction begins

var bidAuction = function () {
    connection.query("SELCT * FROM auctions", function (err, res) {
        console.log(res;
        inquirer.prompt({
            name: "choice",
            type: "rawlist",
            choices: function (value) {
                var choiceArray = [];
                for (var i = 0; i < res.length; i++) {
                    choiceArray.push(res[i].itemname):
                }
                return choiceArray;
            },
            message: "What auction would you like to bid on?"
        })

        // choosing which auction to bid on
            .then)function(answer) {
                for (var i = 0; i < res.length; i++) {
                    if (res[i].itemname == answer.choice) {
                        var choseItem = res[i];

                        name: "bid",
                            type: "input",
                                message: "How much would you like to bid?",
                                    validate: function(value) {
                                        if (isNaN(value) == false) {
                                            return true;
                                        } else {
                                            return false
                                        }
                                    }
                    })
// choosing an item you would like
                    .then(function (answer) {
                        if (chosenItem.highestbid < parseInt(answer.bid)) {
                            connection.query("UPDATE auctions SET ? WHERE ?",
                                [{
                                    hightestbid: answer.bid

                                },
                                {
                                    id: chosenItem.id
                                }],
                                    function(err, res) {
                                        console.log("Bid Succesful!");
                                        start();
                                    });

                                } else {
                                    console.log("Bid too low");
                                    start();
                                }
                            })
                        }
                    }
                }
            })     
                
        })
    }       
            


//     .then(function(answer) {
//         switch(answer.action) {
//             case "What is the ID of the product?",
//             idquestion();
//             break;

//             case "How many Units of product",
//             unitquestion();
//             break;

//             case "Exit":
//             connection.end();

//         }
//     })
// }

// function idquestoin() {
//     inquirer.prompt([
//        {
//         type: "input",
//         message: "Unit ID?",
//         name: "ID"
//        } 
//     ]).then(function(answer) {
//         connection.query(
//             "select * item_id = ?", answer.ID, function(error, results) {
//                 if (error) throw error;

//                 for (i = 0; i < results.length; i++) {
//                     console.log("unit" + results[i].position + "|"+ "id:")
//                 }
//             }
//         )
//     }
// }
