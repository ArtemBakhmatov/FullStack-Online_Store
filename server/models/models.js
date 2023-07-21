const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING},
    role: { type: DataTypes.STRING, defaultValue: "USER"}
});

const Basket = sequelize.define('basket', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const BasketDevice = sequelize.define('basket_device', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Device = sequelize.define('device', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    price: { type: DataTypes.INTEGER, allowNull: false },
    rating: { type: DataTypes.INTEGER, defaultValue: "0" },
    img: { type: DataTypes.STRING, allowNull: false}
});

const Type = sequelize.define('type', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false }
});

const Brand = sequelize.define('brand', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false }
});

const Rating = sequelize.define('rating', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    rate: { type: DataTypes.INTEGER, allowNull: false }
});

const DeviceInfo = sequelize.define('device_info', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false }
});

// связующая таблица между типом и брендом
const TypeBrand = sequelize.define('type_brand', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
});

User.hasOne(Basket);    // связь между пользователем и корзиной
Basket.belongsTo(User); // Корзина принадлежит пользователю

User.hasMany(Rating);   // один пользаветль может иметь несколько оценок
Rating.belongsTo(User); // Оценка принадлежит пользователю

Basket.hasMany(BasketDevice);   // корзина может иметь несколько устройств для удаления
BasketDevice.belongsTo(Basket); // устройств для удаления принадлежит корзине

Type.hasMany(Device);
Device.belongsTo(Type);

Brand.hasMany(Device);
Device.belongsTo(Brand);

Device.hasMany(Rating);
Rating.belongsTo(Device);

Device.hasMany(BasketDevice);
BasketDevice.belongsTo(Device);

Device.hasMany(DeviceInfo, { as: 'info'});
DeviceInfo.belongsTo(Device);

// вид связи между типом и брендом
Type.belongsToMany(Brand, { through: TypeBrand }); 
Brand.belongsToMany(Type, { through: TypeBrand });

module.exports = {
    User,
    Basket,
    BasketDevice,
    Device,
    Type,
    Brand,
    Rating,
    TypeBrand,
    DeviceInfo
}

//Device.hasMany(DeviceInfo);
//DeviceInfo.belongsTo(Device);
// hasMany(DeviceInfo) -> Содержит много записей
// belongsTo(Device) -> это сущность принадлежит Device
// hasMany(DeviceInfo) и belongsTo(Device) -> получается двух сторонняя связь

// define() -> Установить('название модели', объект)
// DataTypes.INTEGER -> число
// DataTypes.STRING -> строка
// defaultValue -> название 
// allowNull -> разрешить значение Null
// unique -> уникальный (т.е к примеру в системе одинаковых емайл не должно быть)
// primaryKey -> первичный ключ
// autoIncrement -> при создании каждого нового объетка id будет 1, 2 и т.д