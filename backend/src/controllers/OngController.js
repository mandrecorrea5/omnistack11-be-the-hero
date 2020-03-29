const connection = require('../database/connection');
const genarateUniqueId = require('../utils/gerenateUniqueId');
 
module.exports = {
    async create(request, response){
        const {name, email, whatsapp, city, uf} = request.body;

        const id = genarateUniqueId();

        await connection('ongs').insert({
            id, name, email, whatsapp, city, uf
        })
        
        console.log(id, name, email, whatsapp, city, uf)
            
        return response.json({ id });
    },

    async read (request, response){
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    }
}