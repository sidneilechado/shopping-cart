import { Router } from 'express';

import user from './user';

export default function (): Router {
	const router = Router();

	router.use('/user', user());

	return router;
}
