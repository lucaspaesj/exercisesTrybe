const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const newOrder = Object.assign({}, order);
  const deliveryPerson = newOrder["order"]["delivery"]["deliveryPerson"];
  const toWhom = newOrder["name"];
  const phoneNumber = newOrder["phoneNumber"];
  const address = Object.values(newOrder["address"]);
  console.log(`Olá ${deliveryPerson}, entrega para ${toWhom}, Telefone: ${phoneNumber}, ${address[0]}, Nº: ${address[1]}, AP: ${address[2]}`);
}

customerInfo(order);

const orderModifier = (order) => {
  const newOrder = Object.assign({}, order);
  newOrder.name = "Luiz Silva";
  newOrder.payment.total = 50;
  console.log(`Olá ${newOrder.name}, o total do seu pedido de ${Object.keys(newOrder.order.pizza)[0]}, ${Object.keys(newOrder.order.pizza)[1]} e ${newOrder.order.drinks.coke.type} é R$${newOrder.payment.total},00`);
}

orderModifier(order);