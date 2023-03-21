## What is it?

This is unofficial Zendesk API typings, that is scrambled from the documentation + tested during the development.

## Why?

Having this types included in your project allows you to interact with ZafClient (Zendesk's JS client) in a type safe manner.

## Type X is missing

This is a work in progress, and I have no intentions spending a full day scraping the documentation yet.
If you notice a missing type, please raise an issue / PR with the addition. I am adding types "on the go", as soon as I notice something is missing during my own development cycle.
My aim, however, is to make it complete types package, so eventually I will get there.

## How do I include this in my project?

Simple install the package from `npm`, using any package installer of your choice (`pnpm`, `npm` etc):

- `npm install --save-dev zendesk-types`
- Include the installed types in your `tsconfig.json`, for example:

```
{
	"compilerOptions": {
		"target": "es5",
		"lib": [
			"dom",
			"dom.iterable",
			"esnext"
		],
		"allowJs": true,
		"skipLibCheck": true,
		"strict": true,
		"forceConsistentCasingInFileNames": true,
		"noEmit": true,
		"esModuleInterop": true,
		"module": "esnext",
		"moduleResolution": "node",
		"resolveJsonModule": true,
		"isolatedModules": true,
		"jsx": "preserve",
		"incremental": true
	},
	"include": [
		"next-env.d.ts",
		"**/*.ts",
		"**/*.tsx",
		"../../node_modules/zendesk-types/**/*.d.ts" // path to the package dir
	],
	"exclude": [
		"node_modules"
	]
}
```

The reason it has to be included manually in the `tsconfig.json`, is because it does not distrubute under any organisation, so was not included into DefinitelyTyped repository.

Any PR / help is welcome!
