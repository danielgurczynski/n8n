(function () {
	const script = document.currentScript;

	const inferBasePath = () => {
		if (!script) return '/';

		try {
			const url = new URL(script.src, window.location.origin);
			const pathname = url.pathname;
			const knownSuffix = '/static/base-path.js';

			if (pathname.endsWith(knownSuffix)) {
				const candidate = pathname.slice(0, -knownSuffix.length) || '/';
				return candidate.endsWith('/') ? candidate : `${candidate}/`;
			}

			const lastSlash = pathname.lastIndexOf('/');
			if (lastSlash >= 0) {
				const candidate = pathname.slice(0, lastSlash + 1) || '/';
				return candidate;
			}
		} catch (error) {
			// ignore URL parsing issues and fall through to default
		}

		return '/';
	};

	let basePath = '/{{BASE_PATH}}/';

	if (basePath.includes('{{BASE_PATH}}')) {
		basePath = inferBasePath();
	}

	if (!basePath.startsWith('/')) {
		basePath = `/${basePath}`;
	}

	if (!basePath.endsWith('/')) {
		basePath = `${basePath}/`;
	}

	window.BASE_PATH = basePath;
})();
