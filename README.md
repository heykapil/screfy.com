<h1 align="center">
  <img src="https://raw.githubusercontent.com/screfy/screfy.com/canary/.github/logo.png" /><br/>
  Personal Website
</h1>

<p align="center"><a href="https://screfy.com" target="_blank"><img src="https://img.shields.io/website?style=for-the-badge&url=https%3A%2F%2Fscrefy.com&labelColor=000000" alt="website status" /></a>&nbsp;<a href="https://github.com/screfy/screfy.com/releases" target="_blank"><img src="https://img.shields.io/github/package-json/v/screfy/screfy.com?style=for-the-badge&labelColor=000000" alt="version" /></a>&nbsp;<a href="https://github.com/screfy/screfy.com/blob/canary/LICENSE" target="_blank"><img src="https://img.shields.io/github/license/screfy/screfy.com?style=for-the-badge&labelColor=000000" alt="license" /></p>

## Development Setup

### Prerequisites

- [Node.js][node]
- Package Manager (this project is using [pnpm][pnpm])

### Setting Up a Project

1. [Clone][cloning-a-repo] this repository:

   ```bash
   git clone https://github.com/screfy/screfy.com.git
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Start the development server:

   ```bash
   pnpm dev
   ```

4. Open development site: [`http://localhost:3000`](http://localhost:3000).

## Deployment

This project is deployed on [Vercel][vercel].

## Continuous Integration

I use [GitHub Actions][gh-actions] for Continuous Integration. Check out my [Workflows][workflows].

## License

This project is licensed under the [MIT license](LICENSE).

[node]: https://nodejs.org
[pnpm]: https://pnpm.io
[cloning-a-repo]: https://help.github.com/en/articles/cloning-a-repository
[vercel]: https://vercel.com
[gh-actions]: https://github.com/features/actions
[workflows]: https://github.com/screfy/screfy.com/actions
