// npm init -y
// touch .gitignore -> node_modules
// npm install sequelize sequelize-cli express express-group-routes mysql2
// sequelize init
// edit config -> mysql
// sequelize db:create

// create table/model
// sequelize model:generate --name NamaTableGakPakeS --attributes namaAtribut1:string,namaAtribut2:integer

// run migration
// sequelize db:migrate

// new migration
// sequelize migration:create --name nama-migration

// promise all migration example
// let migrations = []
// migrations.push(queryInterface.addColumn('Students', 'email', {type: Sequelize.TEXT}))
// migrations.push(queryInterface.addColumn('Students', 'tinggi badan', {type: Sequelize.INTEGER}))
// return Promise.all(migrations)

// create new seed
// sequelize seed:generate --name nama-seed

// run seed
// sequelize db:seed namaSeed
// sequelize db:seed:all
