import { Router } from 'express';
import { UserRoutes } from '../modules/User/user.route';
import { AuthRoutes } from '../modules/auth/auth.route';
import { ProductRouter } from '../modules/products/products.route';
import { CartRouter } from '../modules/cart/cart.route';
import { MessageRouter } from '../modules/message/message.router';

const router = Router();

router.use('/user', UserRoutes);
router.use('/products', ProductRouter);
router.use('/auth', AuthRoutes);
router.use('/cart', CartRouter);
router.use('/messages', MessageRouter);

export default router;

