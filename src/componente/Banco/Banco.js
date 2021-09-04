import SQLite from 'react-native-sqlite-storage' 
SQLite.DEBUG(true); 
SQLite.enablePromise(true); 
const database_name = "projetoPI.db";
const database_version = "1.0"; 
const database_displayname = "crud projeto4"; 
const database_size = 200000; 
export default class Banco { 
    conectar() { 
        let db; 
        return new Promise((resolve) => { 
            console.log("verificando a conexão"); 
            SQLite.echoTest().then(() => { 
                console.log("estar tudo OK seguindooo!!"); 
                console.log("abrindo o banco"); 
                SQLite.openDatabase(database_name, database_version, database_displayname, database_size).then(DB => { 
                    db = DB; 
                    console.log("banco de dados aBERTO"); 
                    db.executeSql("SELECT 1 FROM Cadastro LIMIT 1").then( 
                        () => { 
                            console.log("O banco de dados estar pronto") 
                        }).catch((error) => { 
                            console.log("erro recebido:", error); 
                            console.log("o banco de dados não estar pronto"); 
                            db.transaction((tx) => { 
                                tx.executeSql("CREATE TABLE IF NOT EXISTS Cadastro(id INTEGER PRIMARY KEY AUTOINCREMENT,nome varchar(60), login varchar(10, senha int(10))");
                            }).then(() => { 
                                console.log("TABELA criada!!!!"); 
                            }).catch(error => { 
                                console.log(error); 
                            }); 
                        }); 
                    resolve(db); 
                }).catch(error => { 
                    console.log("teste echotest"); 
                }); 
            }).catch(error => { 
                console.log("teste echotest"); 
            }); 
        }) 
    } 
    desconectar(db) { 
        if (db) { 
            console.log("fechando o banco") 
            db.close().then(status => { 
                console.log("O banco estar desconectado"); 
            }).catch(error => { 
                this.errorCB(error); 
            }); 
        } 

        else { 
            console.log("A conexão com o banco não estar aberta"); 
        } 
    } 
    listar() { 
        return new Promise((resolve) => { 
            const Cadastro = []; 
            this.conectar().then((db) => { 
                db.transaction((tx) => { 
                    tx.executeSql('SELECT* FROM Cadastro', []).then(([tx, results]) => { 
                        console.log("Consulta completa"); 
                        var len = results.rows.length; 
                        for (let i = 0; i < len; i++) { 
                            let row = results.rows.Cadastro(i);
                            const { id, nome, login, senha} = row; 
                            Cadastro.push({  id, nome, login,senha }); 
                        } 
                        console.log(Cadastro); 
                        resolve(Cadastro); 
                    }); 
                 }).then((result) => { 
                    this.desconectar(db); 
                }).catch((err) => { 
                    console.log(err); 
                }); 
            }).catch((err) => { 
                console.log(err); 
            }); 
        }); 
    } 
    deletar(id) {  
        console.log("apagando") 
        return new Promise((resolve) => {     
            this.conectar().then((db) => {       
                db.transaction((tx) => {     
                    tx.executeSql('DELETE FROM Cadastro WHERE id = ?', [id]).then(([tx, results]) => {           
                        console.log(results);           
                        resolve(results);         
                    });       
                }).then((result) => {         
                    this.desconectar(db);       
                }).catch((err) => {         
                    console.log(err);       
                });     
            }).catch((err) => {       
                console.log(err);     
            });   
        });   
    } 
    buscarId(id) {   
        console.log(id);   
        return new Promise((resolve) => {     
            this.conectar().then((db) => {       
                db.transaction((tx) => {    
                    tx.executeSql('SELECT * FROM Cadastro id = ?', [id]).then(([tx,results]) => {           
                      console.log(results);          
                      if(results.rows.length > 0) {             
                          let row = results.rows.Cadastro(0);             
                          resolve(row);           
                      }         
                  });       
                }).then((result) => {         
                    this.desconectar(db);       
                }).catch((err) => {         
                    console.log(err);       
                });     
            }).catch((err) => {       
                console.log(err);     
            });   
        });   
    } 
    add(cadastro) {   
        return new Promise((resolve) => {     
            this.conectar().then((db) => {       
                db.transaction((tx) => {      
                    tx.executeSql('INSERT INTO Cadastro VALUES (?, ?, ?, ?, ?)', [cadastro.id, cadastro.nome, cadastro.login, cadastro.senha]).then(([tx, results]) => {  
                        resolve(results);         
                    });       
                }).then((result) => {         
                    this.desconectar(db);       
                }).catch((err) => {         
                    console.log(err);       
                });     
            }).catch((err) => {       
                console.log(err);     
            });   
        });   
    } 
    atualiza(id, cadastro) {
        return new Promise((resolve) => {
            this.conectar().then((db) => {
                db.transaction((tx) => {       
                    tx.executeSql('UPDATE Cadastro SET  nome = ?,login=?, senha = ?, WHERE id = ?', [ cadastro.nome, cadastro.login,cadastro.senha, id]).then(([tx, results]) => {
                        resolve(results);
                    });
                }).then((result) => {
                    this.desconectar(db);
                }).catch((err) => {
                    console.log(err);
                });
            }).catch((err) => {
                console.log(err);
            });
        });
    }
 
  

} 