const User = require('../models/User')

module.exports = {
    index: async (req, res) => {
        try {
            users = await User.find()
            res.status(200).json({
                status: true,
                data: users,
                method: req.method,
                url:req.url
            })
        } catch (error) {
            res.status(400).json({sucess: false})

        }
        if(users.length > 0){
            
        }else{
            res.json({
                status: false,
                message: "Data masih kosong"
            })
        }
      },
      store: (req, res) => {
        users.push(req.body)
        res.json({
            status: true,
            data: users,
            method: req.method,
            url:req.url,
            message: "Data berhasil ditambahkan"
        })
      },
      update: (req, res) => {
        const id = req.params.id
        users.filter(user =>  {
            if(user.id == id){
                user.nama = req.body.nama
                user.email = req.body.email
                return user
            }
        })
        res.json({
            status: true,
            data: users,
            method: req.method,
            url:req.url,
            message: "Data berhasil diubah"
        })
      },
      delete: (req, res) => {
        const id = req.params.id
        users = users.filter(user => user.id != id)
    
        res.json({
            status: true,
            data: users,
            method: req.method,
            url:req.url,
            message: "Data berhasil dihapus"
        })
      }
}