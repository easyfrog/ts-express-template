import  express from 'express';
import dotenv from 'dotenv';

dotenv.config()

const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
    res.send('Express + Typescript Server')
})

app.listen(port, () => {
    console.log(`[Server]: Server is running at http://localhost:${port}`)
}) 

/**

// Use My run_func_serve to serverless
import rfc from 'run_func_serve/run_func_client';

// set server
rfc.init({
    server: 'https://ooomap.com/rest-server'
})

// import { find, updateOne } from './mongoAtlas';
// import mada from 'mongo_atlas_dataapi';

// set data api key
// mada.set_api_key('zaJ3ZQZFUtK7rYUj1TBCSozhIcw68JubftGDHcyn36SKjjmrMwScgyRkUzddEKqg')

async function updatePV() {
    var find_res = await rfc.run(async db => {

        // findOneAndUpdate
        return await db.collection('chuanxin')
            .findOneAndUpdate({
                type: 'pv-count'
            }, {
                $inc: {
                    count: 1
                }
            },{
                projection: {
                    _id: 0
                },
                upsert: true
            })
    })
    
    if (find_res) {
        console.log('find result', find_res.value)
        // set pv_count
        pv_count.set(find_res.value.count + 1)
    }
}

 */