class SqlOperation  {
    tableName;
    constructor(name) {
        this.tableName = name;
    }
    list() {
        let sql = `select * from ${this.tableName}`;
        return sql;
    }
    insert(args) {
        let sql = `insert into ${this.tableName} values (`;
        for (let i = 0; i < args.length-1; i++) {
            if(args[i]===null) {
                sql += "null,"

            }else{
                sql =sql+"'"+ args[i] + "',"
            }
        }
        sql =sql +"'"+ args[args.length-1] + "')";
        console.log(sql)
        return sql;
    }
    delete(args) {
        let sql = `delete from ${this.tableName} where `;
        for (const k in args) {
            sql = sql + k + "='" + args[k] + "' and "//注意单引号
        }
        sql = sql.slice(0,-5);
        console.log(sql)
        return sql;
    }
    query(targets,args) {//args存在的话，内容要求为键值对{name: "123"}
        let sql = "select ";
        if(args===undefined||args===null) {
            for (let i = 0; i < targets.length; i++) {
                sql =sql + targets[i] + ","
            }
            sql = sql.slice(0,-1);
            sql = sql +` from ${this.tableName}`;
        }else{
            for (let i = 0; i < targets.length; i++) {
                sql =sql + targets[i] + ","
            }
            sql = sql.slice(0,-1);
            sql = sql +` from ${this.tableName} where `;
            //条件查询
            for (const k in args) {
                sql = sql + k + "='" + args[k] + "' and "//注意单引号
            }
            sql = sql.slice(0,-5);
        }
        console.log(sql)
        return sql;
    }
    update(target, args) {//target 和 args都是键值对
        let sql = `update ${this.tableName} set `;
        for (const k in target) {
            sql = sql + k + "='" + target[k] + "' and "//注意单引号
        }
        sql = sql.slice(0,-5)+" where ";

        for (const k in args) {
            sql = sql + k + "='" + args[k] + "' and "//注意单引号
        }
        sql = sql.slice(0,-5);
        console.log(sql)
        return sql;
    }
}

module.exports = {
    SqlOperation
}