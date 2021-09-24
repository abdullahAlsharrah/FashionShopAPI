const { Order, OrderItem, Product } = require("../db/models");

exports.checkout = async (req, res, next) => {
  try {
    const newOrder = await Order.create({
      price: req.body.price,
      house: req.body.house,
      street: req.body.street,
      phone: req.body.phone,
      block: req.body.block,
      ave: req.body.ave,
      area: req.body.area,
    });
    const cart = req.body.items.map((item) => ({
      ...item,
      orderId: newOrder.id,
    }));
    const newOrderItems = await OrderItem.bulkCreate(cart);
    res.status(201).json(newOrderItems);
  } catch (error) {
    next(error);
  }
};

exports.orderss = async (req, res, next) => {
  try {
    const invoicesList = await Order.findAll({
      include: [
        {
          model: Product,
          as: "products",
        },
      ],
    });
    res.json(invoicesList);
  } catch (error) {
    next(error);
  }
};

exports.fetchOrder = async (orderId, next) => {
  try {
    const order = await Order.findByPk(orderId);
    return order;
  } catch (error) {
    next(error);
  }
};

exports.deleteOrder = async (req, res, next) => {
  try {
    await req.order.destroy();
    res.status(401).end();
  } catch (error) {
    next(error);
  }
};
exports.updateOrder = async (req, res, next) => {
  try {
    await req.order.update({
      ...req.order,
      done: !req.order.done,
    });
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
