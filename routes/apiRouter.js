import express from 'express';
import { getAllData } from '../controllers/getAllData.js';
import { getDataByPathParams } from '../controllers/getDataByPathParams.js';

export const router = express.Router();

router.get('/', getAllData);
router.get('/:param/:value', getDataByPathParams);
