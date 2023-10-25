const products = [
    {
        "id": '1',
        "img": require('../img/products/f1.jpg'),
        "article": 'Adidas',
        "category": "men",
        "price": "Rs 592",
        "discount" : "Rs 999",
        "name": "Cartoon Astronaut T-Shirt",
        "details": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati amet, iste odio suscipit, placeat modi praesentium minus temporibus culpa quod veniam voluptates vel laudantium quo ea, dolorum maxime soluta quam ratione a ab quidem dolore. Deserunt ipsum, porro eveniet rem ratione quidem iure obcaecati suscipit doloremque ipsam cum ducimus dolorum labore sapiente'
    },
    {
        "id": '2',
        "img": require('../img/products/f3.jpg'),
        "article": 'Adidas',
        "category": "men",
        "price": "Rs 522",
        "name": "Cartoon Astronaut T-Shirt",
        "details": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati amet, iste odio suscipit, placeat modi praesentium minus temporibus culpa quod veniam voluptates vel laudantium quo ea, dolorum maxime soluta quam ratione a ab quidem dolore. Deserunt ipsum, porro eveniet rem ratione quidem iure obcaecati suscipit doloremque ipsam cum ducimus dolorum labore sapiente'
    },
    {
        "id": '3',
        "img": require('../img/products/f4.jpg'),
        "article": 'Adidas',
        "category": "men",
        "price": "Rs 522",
        "name": "Cartoon Astronaut T-Shirt",
        "details": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati amet, iste odio suscipit, placeat modi praesentium minus temporibus culpa quod veniam voluptates vel laudantium quo ea, dolorum maxime soluta quam ratione a ab quidem dolore. Deserunt ipsum, porro eveniet rem ratione quidem iure obcaecati suscipit doloremque ipsam cum ducimus dolorum labore sapiente'
    },
    {
        "id": '4',
        "img": require('../img/products/f5.jpg'),
        "article": 'Zara',
        "category": "men",
        "discount" : "Rs 1299",
        "price": "Rs 599",
        "name": "Cartoon Astronaut T-Shirt",
        "details": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati amet, iste odio suscipit, placeat modi praesentium minus temporibus culpa quod veniam voluptates vel laudantium quo ea, dolorum maxime soluta quam ratione a ab quidem dolore. Deserunt ipsum, porro eveniet rem ratione quidem iure obcaecati suscipit doloremque ipsam cum ducimus dolorum labore sapiente'
    },
    {
        "id": '5',
        "img": require('../img/products/f6.jpg'),
        "article": 'Adidas',
        "category": "men",
        "price": "Rs 792",
        "discount" : "Rs 899",
        "name": "Cartoon Astronaut T-Shirt",
        "details": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati amet, iste odio suscipit, placeat modi praesentium minus temporibus culpa quod veniam voluptates vel laudantium quo ea, dolorum maxime soluta quam ratione a ab quidem dolore. Deserunt ipsum, porro eveniet rem ratione quidem iure obcaecati suscipit doloremque ipsam cum ducimus dolorum labore sapiente'
    },
    {
        "id": '6',
        "img": require('../img/products/f7.jpg'),
        "article": 'Adidas',
        "category": "men",
        "price": "Rs 1592",
        "name": "Cartoon Astronaut Cargo",
        "details": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati amet, iste odio suscipit, placeat modi praesentium minus temporibus culpa quod veniam voluptates vel laudantium quo ea, dolorum maxime soluta quam ratione a ab quidem dolore. Deserunt ipsum, porro eveniet rem ratione quidem iure obcaecati suscipit doloremque ipsam cum ducimus dolorum labore sapiente'
    },
    {
        "id": '7',
        "img": require('../img/products/f8.jpg'),
        "article": 'Adidas',
        "category": "men",
        "price": "Rs 1092",
        "name": "Cartoon  T-Shirt",
        "details": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati amet, iste odio suscipit, placeat modi praesentium minus temporibus culpa quod veniam voluptates vel laudantium quo ea, dolorum maxime soluta quam ratione a ab quidem dolore. Deserunt ipsum, porro eveniet rem ratione quidem iure obcaecati suscipit doloremque ipsam cum ducimus dolorum labore sapiente'
    },
    {
        "id": '8',
        "img": require('../img/products/n2.jpg'),
        "article": 'Zara',
        "category": "women",
        "price": "Rs 422",
        "name": "Fashinable Shirt",
        "details": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati amet, iste odio suscipit, placeat modi praesentium minus temporibus culpa quod veniam voluptates vel laudantium quo ea, dolorum maxime soluta quam ratione a ab quidem dolore. Deserunt ipsum, porro eveniet rem ratione quidem iure obcaecati suscipit doloremque ipsam cum ducimus dolorum labore sapiente'
    },
    {
        "id": '9',
        "img": require('../img/products/w10.jpg'),
        "article": 'H&M',
        "category": "women",
        "price": "Rs 502",
        "name": "Straingt fitted Jeans",
        "details": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati amet, iste odio suscipit, placeat modi praesentium minus temporibus culpa quod veniam voluptates vel laudantium quo ea, dolorum maxime soluta quam ratione a ab quidem dolore. Deserunt ipsum, porro eveniet rem ratione quidem iure obcaecati suscipit doloremque ipsam cum ducimus dolorum labore sapiente'
    },
    {
        "id": '10',
        "img": require('../img/products/n4.jpg'),
        "article": 'Levise',
        "category": "men",
        "price": "Rs 592",
        "name": "Cartoon Astronaut Shirt",
        "discount" : "Rs 999",
        "details": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati amet, iste odio suscipit, placeat modi praesentium minus temporibus culpa quod veniam voluptates vel laudantium quo ea, dolorum maxime soluta quam ratione a ab quidem dolore. Deserunt ipsum, porro eveniet rem ratione quidem iure obcaecati suscipit doloremque ipsam cum ducimus dolorum labore sapiente'
    },
    {
        "id": '11',
        "img": require('../img/products/n5.jpg'),
        "article": 'Levis',
        "category": "women",
        "price": "Rs 592",
        "name": "Denim Shirt",
        "details": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati amet, iste odio suscipit, placeat modi praesentium minus temporibus culpa quod veniam voluptates vel laudantium quo ea, dolorum maxime soluta quam ratione a ab quidem dolore. Deserunt ipsum, porro eveniet rem ratione quidem iure obcaecati suscipit doloremque ipsam cum ducimus dolorum labore sapiente'
    },
    {
        "id": '12',
        "img": require('../img/products/n6.jpg'),
        "article": 'Adidas',
        "category": "men",
        "price": "Rs 592",
        "name": "Cartoon Astronaut Short",
        "details": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati amet, iste odio suscipit, placeat modi praesentium minus temporibus culpa quod veniam voluptates vel laudantium quo ea, dolorum maxime soluta quam ratione a ab quidem dolore. Deserunt ipsum, porro eveniet rem ratione quidem iure obcaecati suscipit doloremque ipsam cum ducimus dolorum labore sapiente'
    },
    {
        "id": '13',
        "img": require('../img/products/n7.jpg'),
        "article": 'Puma',
        "category": "men",
        "price": "Rs 592",
        "name": "Cartoon Astronaut T-Shirt",
        "details": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati amet, iste odio suscipit, placeat modi praesentium minus temporibus culpa quod veniam voluptates vel laudantium quo ea, dolorum maxime soluta quam ratione a ab quidem dolore. Deserunt ipsum, porro eveniet rem ratione quidem iure obcaecati suscipit doloremque ipsam cum ducimus dolorum labore sapiente'
    },
    {
        "id": '14',
        "img": require('../img/products/n8.jpg'),
        "article": 'Floora',
        "category": "women",
        "price": "Rs 1092",
        
        "name": "T-Shirt",
        "details": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati amet, iste odio suscipit, placeat modi praesentium minus temporibus culpa quod veniam voluptates vel laudantium quo ea, dolorum maxime soluta quam ratione a ab quidem dolore. Deserunt ipsum, porro eveniet rem ratione quidem iure obcaecati suscipit doloremque ipsam cum ducimus dolorum labore sapiente'
    },
    {
        "id": '15',
        "img": require('../img/products/k1.jpg'),
        "article": 'Ascics',
        "category": "kids",
        "price": "Rs 1192",
       
        "name": "Kids Night Wear",
        "details": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati amet, iste odio suscipit, placeat modi praesentium minus temporibus culpa quod veniam voluptates vel laudantium quo ea, dolorum maxime soluta quam ratione a ab quidem dolore. Deserunt ipsum, porro eveniet rem ratione quidem iure obcaecati suscipit doloremque ipsam cum ducimus dolorum labore sapiente'
    },
    {
        "id": '16',
        "img": require('../img/products/k2.jpg'),
        "article": 'nike',
        "category": "kids",
        "price": "Rs 292",
        "name": "Marvel Kids Night Wear",
        "details": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati amet, iste odio suscipit, placeat modi praesentium minus temporibus culpa quod veniam voluptates vel laudantium quo ea, dolorum maxime soluta quam ratione a ab quidem dolore. Deserunt ipsum, porro eveniet rem ratione quidem iure obcaecati suscipit doloremque ipsam cum ducimus dolorum labore sapiente'
    },
    {
        "id": '17',
        "img": require('../img/products/k3.jpg'),
        "article": 'Adidas',
        "category": "kids",
        "price": "Rs 512",
        "name": "Check Night Wears",
        "details": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati amet, iste odio suscipit, placeat modi praesentium minus temporibus culpa quod veniam voluptates vel laudantium quo ea, dolorum maxime soluta quam ratione a ab quidem dolore. Deserunt ipsum, porro eveniet rem ratione quidem iure obcaecati suscipit doloremque ipsam cum ducimus dolorum labore sapiente'
    },
    {
        "id": '18',
        "img": require('../img/products/w1.jpg'),
        "article": 'Woodland',
        "category": "women",
        "price": "Rs 992",
        
        "name": "Slim fit jeans",
        "details": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati amet, iste odio suscipit, placeat modi praesentium minus temporibus culpa quod veniam voluptates vel laudantium quo ea, dolorum maxime soluta quam ratione a ab quidem dolore. Deserunt ipsum, porro eveniet rem ratione quidem iure obcaecati suscipit doloremque ipsam cum ducimus dolorum labore sapiente'
    },
    {
        "id": '19',
        "img": require('../img/products/w2.jpg'),
        "article": 'Adidas',
        "category": "women",
        "price": "Rs 1592",

        "name": "Boyfriend jeans",
        "details": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati amet, iste odio suscipit, placeat modi praesentium minus temporibus culpa quod veniam voluptates vel laudantium quo ea, dolorum maxime soluta quam ratione a ab quidem dolore. Deserunt ipsum, porro eveniet rem ratione quidem iure obcaecati suscipit doloremque ipsam cum ducimus dolorum labore sapiente'
    },
    {
        "id": '20',
        "img": require('../img/products/w3.jpg'),
        "article": 'Shopers',
        "category": "women",
        "price": "Rs 192",
        "name": "Loose  T-Shirt",
        "details": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati amet, iste odio suscipit, placeat modi praesentium minus temporibus culpa quod veniam voluptates vel laudantium quo ea, dolorum maxime soluta quam ratione a ab quidem dolore. Deserunt ipsum, porro eveniet rem ratione quidem iure obcaecati suscipit doloremque ipsam cum ducimus dolorum labore sapiente'
    },
    {
        "id": '21',
        "img": require('../img/products/m1.jpg'),
        "article": 'Arrow',
        "category": "men",
        "price": "Rs 1292",
        "name": "Cartoon Astronaut T-Shirt",
        "details": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati amet, iste odio suscipit, placeat modi praesentium minus temporibus culpa quod veniam voluptates vel laudantium quo ea, dolorum maxime soluta quam ratione a ab quidem dolore. Deserunt ipsum, porro eveniet rem ratione quidem iure obcaecati suscipit doloremque ipsam cum ducimus dolorum labore sapiente'
    },
    {
        "id": '22',
        "img": require('../img/products/m2.jpg'),
        "article": 'Adidas',
        "category": "men",
        "price": "Rs 52192",
        "name": "Cartoon Astronaut T-Shirt",
        "details": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati amet, iste odio suscipit, placeat modi praesentium minus temporibus culpa quod veniam voluptates vel laudantium quo ea, dolorum maxime soluta quam ratione a ab quidem dolore. Deserunt ipsum, porro eveniet rem ratione quidem iure obcaecati suscipit doloremque ipsam cum ducimus dolorum labore sapiente'
    },
    {
        "id": '23',
        "img": require('../img/products/m3.jpg'),
        "article": 'Adidas',
        "category": "men",
        "price": "Rs 892",
        "name": "Cartoon Astronaut T-Shirt",
        "details": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati amet, iste odio suscipit, placeat modi praesentium minus temporibus culpa quod veniam voluptates vel laudantium quo ea, dolorum maxime soluta quam ratione a ab quidem dolore. Deserunt ipsum, porro eveniet rem ratione quidem iure obcaecati suscipit doloremque ipsam cum ducimus dolorum labore sapiente'
    },
    {
        "id": '24',
        "img": require('../img/products/m4.jpg'),
        "article": 'Adidas',
        "category": "men",
        "price": "Rs 712",
        "discount" : "Rs 999",
        "name": "Cartoon Astronaut T-Shirt",
        "details": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati amet, iste odio suscipit, placeat modi praesentium minus temporibus culpa quod veniam voluptates vel laudantium quo ea, dolorum maxime soluta quam ratione a ab quidem dolore. Deserunt ipsum, porro eveniet rem ratione quidem iure obcaecati suscipit doloremque ipsam cum ducimus dolorum labore sapiente'
    },
    {
        "id": '25',
        "img": require('../img/products/k4.jpg'),
        "article": 'Adidas',
        "category": "kids",
        "price": "Rs 1212",
        "name": "Cartoon Astronaut T-Shirt",
        "details": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati amet, iste odio suscipit, placeat modi praesentium minus temporibus culpa quod veniam voluptates vel laudantium quo ea, dolorum maxime soluta quam ratione a ab quidem dolore. Deserunt ipsum, porro eveniet rem ratione quidem iure obcaecati suscipit doloremque ipsam cum ducimus dolorum labore sapiente'
    },
    {
        "id": '26',
        "img": require('../img/products/k5.jpg'),
        "article": 'Adidas',
        "category": "kids",
        "price": "Rs 3332",
        "name": "Cartoon Astronaut T-Shirt",
        "details": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati amet, iste odio suscipit, placeat modi praesentium minus temporibus culpa quod veniam voluptates vel laudantium quo ea, dolorum maxime soluta quam ratione a ab quidem dolore. Deserunt ipsum, porro eveniet rem ratione quidem iure obcaecati suscipit doloremque ipsam cum ducimus dolorum labore sapiente'
    },
    {
        "id": '27',
        "img": require('../img/products/w4.jpg'),
        "article": 'Adidas',
        "category": "women",
        "price": "Rs 5441",
        "name": "Cartoon Astronaut T-Shirt",
        "details": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati amet, iste odio suscipit, placeat modi praesentium minus temporibus culpa quod veniam voluptates vel laudantium quo ea, dolorum maxime soluta quam ratione a ab quidem dolore. Deserunt ipsum, porro eveniet rem ratione quidem iure obcaecati suscipit doloremque ipsam cum ducimus dolorum labore sapiente'
    },
    {
        "id": '28',
        "img": require('../img/products/w5.jpg'),
        "article": 'Adidas',
        "category": "women",
        "price": "Rs 908",
        "discount" : "Rs 999",
        "name": "Cartoon Astronaut T-Shirt",
        "details": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati amet, iste odio suscipit, placeat modi praesentium minus temporibus culpa quod veniam voluptates vel laudantium quo ea, dolorum maxime soluta quam ratione a ab quidem dolore. Deserunt ipsum, porro eveniet rem ratione quidem iure obcaecati suscipit doloremque ipsam cum ducimus dolorum labore sapiente'
    },
    {
        "id": '29',
        "img": require('../img/products/m5.jpg'),
        "article": 'Adidas',
        "category": "men",
        "price": "Rs 1532",
        "discount" : "Rs 1999",
        "name": "Cartoon Astronaut T-Shirt",
        "details": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati amet, iste odio suscipit, placeat modi praesentium minus temporibus culpa quod veniam voluptates vel laudantium quo ea, dolorum maxime soluta quam ratione a ab quidem dolore. Deserunt ipsum, porro eveniet rem ratione quidem iure obcaecati suscipit doloremque ipsam cum ducimus dolorum labore sapiente'
    },
    {
        "id": '30',
        "img": require('../img/products/m6.jpg'),
        "article": 'Adidas',
        "category": "men",
        "price": "Rs 421",
        "name": "Cartoon Astronaut T-Shirt",
        "details": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati amet, iste odio suscipit, placeat modi praesentium minus temporibus culpa quod veniam voluptates vel laudantium quo ea, dolorum maxime soluta quam ratione a ab quidem dolore. Deserunt ipsum, porro eveniet rem ratione quidem iure obcaecati suscipit doloremque ipsam cum ducimus dolorum labore sapiente'
    },
    {
        "id": '31',
        "img": require('../img/products/w6.jpg'),
        "article": 'Adidas',
        "category": "women",
        "price": "Rs 499",
        "name": "Cartoon Astronaut T-Shirt",
        "details": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati amet, iste odio suscipit, placeat modi praesentium minus temporibus culpa quod veniam voluptates vel laudantium quo ea, dolorum maxime soluta quam ratione a ab quidem dolore. Deserunt ipsum, porro eveniet rem ratione quidem iure obcaecati suscipit doloremque ipsam cum ducimus dolorum labore sapiente'
    },
    {
        "id": '32',
        "img": require('../img/products/w7.jpg'),
        "article": 'Adidas',
        "category": "women",
        "price": "Rs 592",
        "name": "Cartoon Astronaut T-Shirt",
        "details": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati amet, iste odio suscipit, placeat modi praesentium minus temporibus culpa quod veniam voluptates vel laudantium quo ea, dolorum maxime soluta quam ratione a ab quidem dolore. Deserunt ipsum, porro eveniet rem ratione quidem iure obcaecati suscipit doloremque ipsam cum ducimus dolorum labore sapiente'
    },
    {
        "id": '33',
        "img": require('../img/products/w8.jpg'),
        "article": 'Adidas',
        "category": "women",
        "price": "Rs 592",
        "discount" : "Rs 799",
        "name": "Cartoon Astronaut T-Shirt",
        "details": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati amet, iste odio suscipit, placeat modi praesentium minus temporibus culpa quod veniam voluptates vel laudantium quo ea, dolorum maxime soluta quam ratione a ab quidem dolore. Deserunt ipsum, porro eveniet rem ratione quidem iure obcaecati suscipit doloremque ipsam cum ducimus dolorum labore sapiente'
    },
    {
        "id": '34',
        "img": require('../img/products/m7.jpg'),
        "article": 'Adidas',
        "category": "men",
        "price": "Rs 592",
        "discount": "Rs 1590",
        "name": "Cartoon Astronaut T-Shirt",
        "details": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati amet, iste odio suscipit, placeat modi praesentium minus temporibus culpa quod veniam voluptates vel laudantium quo ea, dolorum maxime soluta quam ratione a ab quidem dolore. Deserunt ipsum, porro eveniet rem ratione quidem iure obcaecati suscipit doloremque ipsam cum ducimus dolorum labore sapiente'
    },
    {
        "id": '35',
        "img": require('../img/products/k6.jpg'),
        "article": 'Adidas',
        "category": "kids",
        "price": "Rs 852",
        "discount" : "Rs 1199",
        "name": "Cartoon Astronaut T-Shirt",
        "details": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati amet, iste odio suscipit, placeat modi praesentium minus temporibus culpa quod veniam voluptates vel laudantium quo ea, dolorum maxime soluta quam ratione a ab quidem dolore. Deserunt ipsum, porro eveniet rem ratione quidem iure obcaecati suscipit doloremque ipsam cum ducimus dolorum labore sapiente'
    },
    {
        "id": '36',
        "img": require('../img/products/k7.jpg'),
        "article": 'Adidas',
        "category": "kids",
        "price": "Rs 2192",
        "name": "Cartoon Astronaut T-Shirt",
        "details": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati amet, iste odio suscipit, placeat modi praesentium minus temporibus culpa quod veniam voluptates vel laudantium quo ea, dolorum maxime soluta quam ratione a ab quidem dolore. Deserunt ipsum, porro eveniet rem ratione quidem iure obcaecati suscipit doloremque ipsam cum ducimus dolorum labore sapiente'
    },
    {
        "id": '37',
        "img": require('../img/products/m8.jpg'),
        "article": 'Adidas',
        "category": "men",
        "price": "Rs 592",
        "discount" : "Rs 809",
        "name": "Cartoon Astronaut T-Shirt",
        "details": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati amet, iste odio suscipit, placeat modi praesentium minus temporibus culpa quod veniam voluptates vel laudantium quo ea, dolorum maxime soluta quam ratione a ab quidem dolore. Deserunt ipsum, porro eveniet rem ratione quidem iure obcaecati suscipit doloremque ipsam cum ducimus dolorum labore sapiente'
    },
    {
        "id": '38',
        "img": require('../img/products/m9.jpg'),
        "article": 'Adidas',
        "category": "men",
        "price": "Rs 592",
        "name": "Cartoon Astronaut T-Shirt",
        "details": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati amet, iste odio suscipit, placeat modi praesentium minus temporibus culpa quod veniam voluptates vel laudantium quo ea, dolorum maxime soluta quam ratione a ab quidem dolore. Deserunt ipsum, porro eveniet rem ratione quidem iure obcaecati suscipit doloremque ipsam cum ducimus dolorum labore sapiente'
    },
    {
        "id": '39',
        "img": require('../img/products/w8.jpg'),
        "article": 'Adidas',
        "category": "women",
        "price": "Rs 592",
        "discount" : 'Rs 1199',
        "name": "Cartoon Astronaut T-Shirt",
        "details": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati amet, iste odio suscipit, placeat modi praesentium minus temporibus culpa quod veniam voluptates vel laudantium quo ea, dolorum maxime soluta quam ratione a ab quidem dolore. Deserunt ipsum, porro eveniet rem ratione quidem iure obcaecati suscipit doloremque ipsam cum ducimus dolorum labore sapiente'
    },
    {
        "id": '40',
        "img": require('../img/products/w9.jpg'),
        "article": 'Adidas',
        "category": "women",
        "price": "Rs 592",
        "name": "Cartoon Astronaut T-Shirt",
        "details": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati amet, iste odio suscipit, placeat modi praesentium minus temporibus culpa quod veniam voluptates vel laudantium quo ea, dolorum maxime soluta quam ratione a ab quidem dolore. Deserunt ipsum, porro eveniet rem ratione quidem iure obcaecati suscipit doloremque ipsam cum ducimus dolorum labore sapiente'
    },
    {
        "id": '41',
        "img": require('../img/products/k8.jpg'),
        "article": 'Adidas',
        "category": "kids",
        "price": "Rs 592",
        "name": "Cartoon Astronaut T-Shirt",
        "details": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati amet, iste odio suscipit, placeat modi praesentium minus temporibus culpa quod veniam voluptates vel laudantium quo ea, dolorum maxime soluta quam ratione a ab quidem dolore. Deserunt ipsum, porro eveniet rem ratione quidem iure obcaecati suscipit doloremque ipsam cum ducimus dolorum labore sapiente'
    },
    {
        "id": '42',
        "img": require('../img/products/k9.jpg'),
        "article": 'Adidas',
        "category": "kids",
        "price": "Rs 592",
        "name": "Cartoon Astronaut T-Shirt",
        "details": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati amet, iste odio suscipit, placeat modi praesentium minus temporibus culpa quod veniam voluptates vel laudantium quo ea, dolorum maxime soluta quam ratione a ab quidem dolore. Deserunt ipsum, porro eveniet rem ratione quidem iure obcaecati suscipit doloremque ipsam cum ducimus dolorum labore sapiente'
    },
    {
        "id": '43',
        "img": require('../img/products/m10.jpg'),
        "article": 'Adidas',
        "category": "men",
        "price": "Rs 592",
        "name": "Cartoon Astronaut T-Shirt",
        "details": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati amet, iste odio suscipit, placeat modi praesentium minus temporibus culpa quod veniam voluptates vel laudantium quo ea, dolorum maxime soluta quam ratione a ab quidem dolore. Deserunt ipsum, porro eveniet rem ratione quidem iure obcaecati suscipit doloremque ipsam cum ducimus dolorum labore sapiente'
    },
    {
        "id": '44',
        "img": require('../img/products/m11.jpg'),
        "article": 'Adidas',
        "category": "men",
        "price": "Rs 1022",
        "discount" : "Rs 1299",
        "name": "Cartoon Astronaut T-Shirt",
        "details": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati amet, iste odio suscipit, placeat modi praesentium minus temporibus culpa quod veniam voluptates vel laudantium quo ea, dolorum maxime soluta quam ratione a ab quidem dolore. Deserunt ipsum, porro eveniet rem ratione quidem iure obcaecati suscipit doloremque ipsam cum ducimus dolorum labore sapiente'
    },
    {
        "id": '45',
        "img": require('../img/products/w10.jpg'),
        "article": 'Adidas',
        "category": "women",
        "price": "Rs 802",
        "discount" : "Rs 1459",
        "name": "Cartoon Astronaut T-Shirt",
        "details": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati amet, iste odio suscipit, placeat modi praesentium minus temporibus culpa quod veniam voluptates vel laudantium quo ea, dolorum maxime soluta quam ratione a ab quidem dolore. Deserunt ipsum, porro eveniet rem ratione quidem iure obcaecati suscipit doloremque ipsam cum ducimus dolorum labore sapiente'
    },
    {
        "id": '46',
        "img": require('../img/products/w11.jpg'),
        "article": 'Adidas',
        "category": "women",
        "price": "Rs 592",
        "name": "Cartoon Astronaut T-Shirt",
        "details": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati amet, iste odio suscipit, placeat modi praesentium minus temporibus culpa quod veniam voluptates vel laudantium quo ea, dolorum maxime soluta quam ratione a ab quidem dolore. Deserunt ipsum, porro eveniet rem ratione quidem iure obcaecati suscipit doloremque ipsam cum ducimus dolorum labore sapiente'
    },
    {
        "id": '47',
        "img": require('../img/products/w12.jpg'),
        "article": 'Adidas',
        "category": "women",
        "price": "Rs 592",
        "discount" : "Rs 729",
        "name": "Cartoon Astronaut T-Shirt",
        "details": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati amet, iste odio suscipit, placeat modi praesentium minus temporibus culpa quod veniam voluptates vel laudantium quo ea, dolorum maxime soluta quam ratione a ab quidem dolore. Deserunt ipsum, porro eveniet rem ratione quidem iure obcaecati suscipit doloremque ipsam cum ducimus dolorum labore sapiente'
    },
    {
        "id": '48',
        "img": require('../img/products/w13.jpg'),
        "article": 'Adidas',
        "category": "women",
        "price": "Rs 592",
        "name": "Cartoon Astronaut T-Shirt",
        "details": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati amet, iste odio suscipit, placeat modi praesentium minus temporibus culpa quod veniam voluptates vel laudantium quo ea, dolorum maxime soluta quam ratione a ab quidem dolore. Deserunt ipsum, porro eveniet rem ratione quidem iure obcaecati suscipit doloremque ipsam cum ducimus dolorum labore sapiente'
    },
    {
        "id": '49',
        "img": require('../img/products/w14.jpg'),
        "article": 'Adidas',
        "category": "women",
        "price": "Rs 650",
        "discount" : "Rs 699",
        "name": "Cartoon Astronaut T-Shirt",
        "details": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati amet, iste odio suscipit, placeat modi praesentium minus temporibus culpa quod veniam voluptates vel laudantium quo ea, dolorum maxime soluta quam ratione a ab quidem dolore. Deserunt ipsum, porro eveniet rem ratione quidem iure obcaecati suscipit doloremque ipsam cum ducimus dolorum labore sapiente'
    },
    {
        "id": '50',
        "img": require('../img/products/k10.jpg'),
        "article": 'Adidas',
        "category": "kids",
        "price": "Rs 592",
        "name": "Cartoon Astronaut T-Shirt",
        "details": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati amet, iste odio suscipit, placeat modi praesentium minus temporibus culpa quod veniam voluptates vel laudantium quo ea, dolorum maxime soluta quam ratione a ab quidem dolore. Deserunt ipsum, porro eveniet rem ratione quidem iure obcaecati suscipit doloremque ipsam cum ducimus dolorum labore sapiente'
    },
    {
        "id": '51',
        "img": require('../img/products/k11.jpg'),
        "article": 'Adidas',
        "category": "kids",
        "price": "Rs 592",
        "name": "Cartoon Astronaut T-Shirt",
        "details": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati amet, iste odio suscipit, placeat modi praesentium minus temporibus culpa quod veniam voluptates vel laudantium quo ea, dolorum maxime soluta quam ratione a ab quidem dolore. Deserunt ipsum, porro eveniet rem ratione quidem iure obcaecati suscipit doloremque ipsam cum ducimus dolorum labore sapiente'
    },
    {
        "id": '52',
        "img": require('../img/products/k12.jpg'),
        "article": 'Adidas',
        "category": "kids",
        "price": "Rs 592",
        "discount" : "Rs 1099",
        "name": "Cartoon Astronaut T-Shirt",
        "details": 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati amet, iste odio suscipit, placeat modi praesentium minus temporibus culpa quod veniam voluptates vel laudantium quo ea, dolorum maxime soluta quam ratione a ab quidem dolore. Deserunt ipsum, porro eveniet rem ratione quidem iure obcaecati suscipit doloremque ipsam cum ducimus dolorum labore sapiente'
    },
];

export default products