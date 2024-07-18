// const {envs} = require('./config/env')
import  {envs} from './config/env.js'
// const {starServer} = require('./serve/server')
import {starServer} from './serve/server.js'
const main = ()=>{
    console.log(envs)
    starServer({
        port:envs.PORT,
        public_path: envs.PUBLIC_PATH
    })

}

(async ()=>{

    main()
}
)()