exports.getAllProducts = (req, res) => {
    res.json([{ id: 1, name: "Laptop" }, { id: 2, name: "Phone" }]);
};

exports.getProductById = (req, res) => {
    const productId = req.params.id;
    res.json({ id: productId, name: `Product ${productId}` });
};
