var bookshelf = require('../../config/bookshelf');

var Product = bookshelf.Model.extend(
    {
        tableName : 'PRODUCTS',
        idAttribute : 'product_id'
    }
);

module.exports = Product;