import {Router} from 'express';
import {getData,sendData} from '../controller/service'
const router = Router()

router.get('/',getData)

router.post('/',sendData)

export default router