/**
 * Created by ivanezko on 25.04.16.
 */




function initDB() {
    myDB = window.sqlitePlugin.openDatabase({name: "test.db", location:1});
    myDB.transaction(function(transaction) {
        transaction.executeSql('CREATE TABLE IF NOT EXISTS items (id integer primary key, barcode text, desc text)', [],
            function(tx, result) {
                console.log("Table created successfully");
            },
            function(error) {
                console.log("Error occurred while creating the table.");
            });
    });
}

function save(barcode, desc) {
    myDB.transaction(function(transaction) {
        var executeQuery = "INSERT INTO items (barcode, desc) VALUES (?,?)";
        transaction.executeSql(executeQuery, [barcode,desc]
            , function(tx, result) {
                console.log('Inserted');
            },
            function(error){
                console.log('Error occurred while insert');
            });
    });
}

function check(barcode) {
    myDB.transaction(function(transaction) {
        transaction.executeSql('SELECT * FROM items where barcode=?', [barcode], function (tx, results) {
            var len = results.rows.length;
            if (len) {
                console.log(results.rows.item(0).desc);
                return results.rows.item(0).desc;
            } else {
                console.log('not found');
                return null;
            }

        }, null);
    });
}
