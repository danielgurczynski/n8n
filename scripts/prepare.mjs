#!/usr/bin/env node

import { execSync } from 'node:child_process';

// Skip lefthook install in CI or Docker build
if (process.env.CI || process.env.DOCKER_BUILD) {
	process.exit(0);
}

const pnpmCandidates = ['pnpm', 'corepack pnpm', 'npx pnpm'];
let pnpmCommand;

for (const candidate of pnpmCandidates) {
	try {
		execSync(`${candidate} --version`, { stdio: 'ignore' });
		pnpmCommand = candidate;
		break;
	} catch (error) {
		// try next candidate
	}
}

if (!pnpmCommand) {
	throw new Error('Could not find a pnpm executable. Install pnpm or enable it via corepack.');
}

execSync(`${pnpmCommand} lefthook install`, { stdio: 'inherit' });
