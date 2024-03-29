
query = `CREATE TABLE IF NOT EXISTS users (
    id VARCHAR(120) NOT NULL PRIMARY KEY,
    email VARCHAR(100) NOT NULL UNIQUE,
    name VARCHAR(120) NOT NULL,
    verified BOOLEAN NOT NULL DEFAULT 0,
    mobile_number VARCHAR(20) NOT NULL,
    role ENUM('user','admin','super_admin') NOT NULL DEFAULT 'user',
    user_img LONGBLOB,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updated_at DATETIME NOT NULL ON UPDATE CURRENT_TIMESTAMP DEFAULT NULL DEFAULT CURRENT_TIMESTAMP,
    deleted_status enum('0','1') NOT NULL DEFAULT '0'
    );
`

query2 = `ALTER TABLE users
ADD role ENUM('user','admin','super_admin') NOT NULL DEFAULT 'user' AFTER mobile_number;

ALTER TABLE users
ADD password VARCHAR(255) NOT NULL AFTER name;
`

module.exports = {
	up: query,
	down: (queryInterface, Sequelize) => queryInterface.dropTable('users')
};
