/**
 * Middleware utility function for handling Express-style middleware in Next.js API routes.
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @param {Function} fn - Middleware function
 * @returns {Promise<any>}
 */
export default function runMiddleware(req, res, fn) {
	return new Promise((resolve, reject) => {
		fn(req, res, (result) => {
			if (result instanceof Error) {
				return reject(result);
			}

			return resolve(result);
		});
	});
}
