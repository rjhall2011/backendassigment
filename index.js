// import { v4 as uuidv4} from 'uuidv4';
// uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

const express = require('express')
const {customersData} = require('./dummy')
const app = express()
const port = 3000

app.get('/',(req,res) => {
    // res.send('Hello World!')
    res.json({
        "customers":"/:id"
    })
})

app.get('/customers/:id',(req,res) => {
    const customersID = req.params.id
    // console.log(customersData)
    const customerDetail = customersData[customersID]
    res.json(customerDetail)
})

app.get('/orders/:id', (req,res) => {
    const customersOrder = req.params.id
    res.json({
        
        "id":"uuidv4",
        "streetAddress":"123MiricalCircle",
        "unitNumber":"89",
        "city":"Birmingham",
        "state":"Alabama",

        "items":{
            "id":customersOrder,
            "name":"MacBookPro Case",
            "brand":"Apple",
            "description":"Sliver",
            "price":"1,000.00",
            "quantity":"1"
        },
         1 : {
        customersFirstName: 'Fredd',
        customerLastName: 'Jones',
        age: 35,
        email: 'FredJones22@ykaboo.com',
        streetAdress: '185 Quad Lane',
        city: 'Dallas',
        state: 'Texas',
        CustomersOrders:[{ 
        Orders1:{
            itemsName:'MacBookPro Bag',
            itemsColor: 'Black',
            itemsWarranty:'true',
            itemsQuantity: '1',
            itemsName:'MacBookPro Case',
            itemsColor: 'Grey',
             itemsWarranty:'true',
            itemsQuantity: '1',
        },

        Orders2:{
       itemsName:'MacBookPro Case',
       itemsColor: 'Black',
       itemsWarranty:'true',
       itemsQuantity: '1',
        }
    }]    
    },
    2 : {
        customersFirstName: 'John',
        customerLastName: 'Bryant',
        age: 28,
        email: 'www.JBryant@kaboo.com',
        streetAdress: '123MiricalCircle',
        city: 'Birmingham',
        state: 'Alabama',
        orders:[{
       itemsName:'MacBookPro Case',
       itemsColor: 'Black',
       itemsWarranty:'true',
       itemsQuantity: '1',
        }]
    },
    3 : {
        customersFirstName: 'Jasmine',
        customerLastName: 'Thompson',
        age: 28,
        email: 'www.JThompson11@kaboo.com',
        streetAdress: '113 Moon Ave Apt #57',
        city: 'Carson',
        state: 'California',
        CustomersOrders: [{
        itemsName:'MacBookPro Case',
       itemsColor: 'Black',
       itemsWarranty:'true',
       itemsQuantity: '1',
        }]
    },
    4 : {
        customersFirstName: 'Karin',
        customerLastName: 'Potter',
        age: 30,
        email: 'www.KPot55@kaboo.com',
        streetAdress: '45 HopeCircle AVe',
        city: 'Atlanta',
        state: 'Georgia',
        orders: [{
             itemsName:'MacBookPro Case',
       itemsColor: 'Pearl',
       itemsWarranty:'true',
       itemsQuantity: '1',
        }]
    }, 
    5 : {
        customersFirstName: 'Olivia',
        customerLastName: 'Beams',
        age: 25,
        email: 'www.OliviaKnight@kaboo.com',
        streetAdress: '1731 Calk Street Apt. #747',
        city: 'Ward St',
        state: 'Louisiana',
        orders: [{
        itemsName:'MacBookPro Case',
       itemsColor: 'Black',
       itemsWarranty:'true',
       itemsQuantity: '1',
        }]
    },
    })
    
})

app.get('/orders',(req,res) => {
    res.json({
        "orders":[
            {  "id":"uuidv4",
        "streetAddress":"123MiricalCircle",
        "unitNumber":"89",
        "city":"Birmingham",
        "state":"Alabama",

        "items":{
            "id":customersOrder,
            "name":"MacBookPro Case",
            "brand":"Apple",
            "description":"Sliver",
            "price":"1,000.00",
            "quantity":"1"
        }}
        ]
    })
})

app.listen(port,() => {
    console.log(`Example app listening on port ${port}`)
})
