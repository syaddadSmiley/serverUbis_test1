

module.exports = (sequelize, DataTypes) => {
	const Workspaces = sequelize.define('workspaces', {
		id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true,
		},
		id_user: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
		},
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
		mobile_number: {
			type: DataTypes.STRING,
            allowNull: false,
		},
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        longtitude: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        latitude: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		createdAt:{
			type: DataTypes.DATE, field: 'created_at',
		},
		updatedAt: {
			type: DataTypes.DATE, field: 'updated_at',
		},
		deleted_status: {
			type: DataTypes.STRING,
		},

	}, {});
	Workspaces.associate = function (models) {
	};
	return Workspaces;
};
