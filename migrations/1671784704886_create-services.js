queries = `
CREATE TABLE IF NOT EXISTS services (
    id VARCHAR(120) NOT NULL PRIMARY KEY,
    id_ws VARCHAR(120) NOT NULL,
    id_type_ws VARCHAR(120) NOT NULL,
    id_user VARCHAR(120) NOT NULL,
    start_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    finish_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL ON UPDATE CURRENT_TIMESTAMP DEFAULT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_ws) REFERENCES workspaces(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (id_type_ws) REFERENCES type_ws(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (id_user) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE
);
`

module.exports = {
    "up": queries,
    "down": ""
}