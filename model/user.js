class User {

    // constructor(name,address,country,phone,email,password) {
    //     this.Id=0;
    //     this.Name=name;
    //     this.Address=address;
    //     this.Country=country;
    //     this.Phone=phone;
    //     this.Email=email;
    //     this.Password=password;
    // }

    constructor(obj) {
        obj && Object.assign(this, obj)
    }

    addUserSQL() {

        let sql = `INSERT INTO USERS(name, address,country,phone,email,password) \
                   VALUES('${this.Name}','${this.Address}','${this.Country}',${this.Phone},'${this.Email}','${this.Password}')`;
        return sql;
    }

    static getUserByIdSQL(Id) {
        let sql = `SELECT * FROM USERS WHERE Id = ${Id}`;
        return sql;
    }

    static deleteUserByIdSQL(Id) {
        let sql = `DELETE FROM USERS WHERE Id = ${Id}`;
        return sql;
    }

     updateUserByIdSQL(Id) {
        let sql = `UPDATE users SET  
        Name = '${this.Name}',
        Address ='${this.Address}',
        Country ='${this.Country}',
        Phone ='${this.Phone}',
        Email ='${this.Email}',
        Password ='${this.Password}' 
        WHERE Id = ${Id}`

        return sql;
    }

    static getAllUserSQL() {
        let sql = `SELECT * FROM USERS`;
        return sql;
    }
}

export default User;