import { Sequelize, DataTypes } from "sequelize";
import Database from "../dbs/init-mysql";
import Resource from "./resource";

Database.getInstance().sync({ force: false }).then(() => {
    console.log('yes re-sync done!')
})
// Config relation in the database

const db = {
    sequelize: Database.getInstance(),
    Sequelize,
    Resource
};


export default db;
