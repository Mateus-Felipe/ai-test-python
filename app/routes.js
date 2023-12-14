import { Router, Request, Response } from 'express'
import { pytest } from './controllers/pytest';
import { pytest as pytesttwo } from './controllers/pytesttwo';
const router = Router();

router.get('/', (req, res, next) => { res.json('Ok') });
router.get('/ai', (req, res, next) => { res.json('Ok') });
router.get('/python', (req, res, next) => pytest(req, res));
router.get('/pythontwo', (req, res, next) => pytesttwo(req, res));

export default router;