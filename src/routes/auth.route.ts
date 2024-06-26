import { Router } from 'express'
import { asyncWrapper } from '../utils/wrapper'
import {
  registerUser,
  getAllUsers,
  loginUser,
  refreshUserToken,
  googleOauthPost,
  googleOauthGet,
  verifyOTP,
} from '../controller/auth.controller'

const router = Router()

router.get('/', asyncWrapper(getAllUsers))
router.post('/register', asyncWrapper(registerUser))
router.post('/otp', asyncWrapper(verifyOTP))
router.post('/login', asyncWrapper(loginUser))

router.post('/oauth', asyncWrapper(googleOauthPost))
router.get('/oauth', asyncWrapper(googleOauthGet))

router.post('/refresh', asyncWrapper(refreshUserToken))

export { router as authRoutes }
