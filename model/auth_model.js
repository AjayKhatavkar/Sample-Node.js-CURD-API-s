class Auth{

    constructor(obj){
        obj && Object.assign(this, obj);
    }

    getUserByIdSQL() {
        let sql = `SELECT Id,Name,Address,Country,Phone,Email,Password FROM USERS WHERE Email = '${this.Email}' AND Password = '${this.Password}'`
        return sql;
    }
}

export default Auth;