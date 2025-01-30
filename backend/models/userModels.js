const {getDb} = require('./database')


const createUser = async (email, uid, createdAt) => {
    const db = getDb()
    let user = db.collection('db1');
    try{
        await user.createIndex({email: 1}, {unique: true})
        await user.createIndex({uid: 1}, {unique: true})

        const result = await user.insertOne({email, uid, createdAt})
        return result
    }
    catch(error){
        console.log(error)
        throw error;
    }
}

const findByUser = async (email) => {
    try {
        const db = getDb()
        let user = db.collection('db1');
        const userEmail = await user.findOne({email})
        return userEmail
    } catch (error) {
        console.error("User not found", error)
        throw error;
    }
}

module.exports = {
    createUser,
    findByUser
}