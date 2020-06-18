# NPM Package Template

`A node template package to bootstrap package development.`


### Files & Directories

- [src/](src/) The directory for the source code of the node package.
- [src/index.ts](src/index.ts) A simple Typescript file containing the source code for the node package.
- [test/](test/) The directory for the test code of the node package.
- [test/index.test.ts](test/index.test.ts) A simple typescript file containing the test code for the node package.
- [.eslintrc.json](.eslintrc.json) The configuration file for both Javascript and Typescript linting rules.
- [.gitattributes](.gitattributes) A barebones .gitattributes file for normalizing line endings for all platforms (Windows/Mac/Linux).
- [.gitignore](.gitignore) A barebones .gitignore file for ignoring: vscode specific files, compiled files, and node modules.
- [.prettierrc](.prettierrc) A configuration file for specifying basic code formatting rules.
- [jestconfig.json](jestconfig.json) A configuration file for running tests with Jest.
- [package.json](package.json) The configuration file for the node-package-template. Contains the packages metadata, scripts, and development dependencies.
- [package-lock.json](package-lock.json) The lock file used by the node package manager.
- [README.md](README.md) This simple file for explaining the contents and provided functionality of the package.
- [tsconfig.json](tsconfig.json) A configuration file for the Typescript compiler that includes basic compilation options.


### Provided Functionality

| Function       | Command to Execute               | Explanation                                                                                                         |
| -------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Build          | `npm run build`                  | Compiles code in the src directory and produces a lib directory via [tsc](https://www.npmjs.com/package/typescript) |
| DryRun         | `npm run dryrun`                 | Shows the result of running `npm publish`, but without publishing the package to [npmjs](npmjs.com).                |
| Test           | `npm test`                       | Runs the tests in the test directory with [jest](https://www.npmjs.com/package/jest).                               |
| Lint           | `npm run lint`                   | Lints the code to find codestyle violations with [eslint](https://www.npmjs.com/package/eslint)                     |
| Format         | `npm run format`                 | Formats the code to ensure a consistent codestyle with [prettier](https://www.npmjs.com/package/prettier).          |
| PostBuild      | `npm run build`                  | An npm hook that Lints, formats, and tests the code automatically upon running `npm run build`.                     |
| PrePublishOnly | `npm run publish               ` | An npm hook that stages, commits, and pushes changes to the source code up to [github](https://github.com/).        |

For more information on what the provided functions above do, or the commands that they execute, please refer to the "scripts" section of [package.json](package.json).
