const mysql = require('mysql')

module.exports = ()=>{
    //创建连接对象
    let connection = mysql.createConnection({
        host:"localhost",
        port:3306,
        user:"root",
        password:"root",
        database:"userliu"
    })
    //连接数据库
    connection.connect((error)=>{
        if(error){
            console.log("数据库连接失败");
            
        }else{
            console.log("数据库连接成功");
            
        }
    });
    //操作数据库  增删改查 异步
    //sql语句 [参数] callback(error,data)=>{}
    return new Promise((resolve,reject)=>{
        connection.query('select * from userliu',(error,data)=>{
            if(error){
                reject(error)
            }else{
                resolve(data)
            }
            connection.end() // 关闭连接
        })
    })
  
}