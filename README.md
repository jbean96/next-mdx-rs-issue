This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## MDX RS Issue

Repo for minimal example of a bug where enabling `mdxRs` makes it so the `remark` plugin `remark-frontmatter` does not strip the YAML frontmatter from an
MDX file.

Run `yarn next dev` from the root directory and navigate to `localhost:3000` and observer that there's an `<hr />` element at the top with the content of the
front matter on the page. 

If you remove `mdxRs` from the `next.config.mjs` the front matter is omitted.
