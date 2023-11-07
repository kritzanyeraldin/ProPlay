import { MOCKED_ADMIN_PATHS, MOCKED_USER_PATHS } from '../config/constants'

export const getAllowedRoutes = (routes, user) => {
	const allowedPaths = getAllowedPaths(user)

	const allowedRoutes = routes.filter(route =>
		allowedPaths.includes(route.path)
	)

	return allowedRoutes
}

export const getAllowedPaths = user =>
	user.isAdmin ? MOCKED_ADMIN_PATHS : MOCKED_USER_PATHS
