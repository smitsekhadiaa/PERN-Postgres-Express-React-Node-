const Pool=require("pg").Pool;

const pool=new Pool({
    user:"postgres",
    password:"smitsekhadia99",
    host:"localhost",
    port:5432,
    database:"perntodo"
});

//now we are connected to our database at postgre

module.exports=pool;