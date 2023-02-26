let houseData = require('./db.json')
let id = 4;

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houseData);
    },
    createHouse: (req, res) => {
       req.body.id = id;
       console.log(req.body.id)
       houseData.push(req.body);
       id++;
       res.status(200).send(houseData)
    },
    updateHouse: (req, res) => {
        const { id } = req.params;
        const { type } = req.body;
        houseData = houseData.map((house) => {
            if(house.id === +id && type === 'plus') {
                house.price = +house.price + 10000
                
            }
            if(house.id === +id && type === 'minus') {
                house.price = +house.price - 10000
            }
            return house
        })
        res.status(200).send(houseData)
    },
    deleteHouse: (req, res) => {
      for(let i = 0; i < houseData.length; i++) {
        if(houseData[i].id === +req.params.id) {
            houseData.splice(i, 1)
            res.status(200).send(houseData);
        }
      }
    }
}