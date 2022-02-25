# DURCH - a little game about shooting through

https://user-images.githubusercontent.com/93415777/155751090-872debd4-4ba0-4ce4-99dc-6dddd2b5dfbe.mp4

This is my neuefische web-development-bootcamp capstone project.

It uses the following tools/libraries:

* [Commitlint](https://commitlint.js.org/)
* [Stylelint](https://stylelint.io/)
* [Eslint](https://eslint.org/)
* [Prettier](https://prettier.io/)

## Getting started

**Run the development server:**

```bash
npm run dev
```

## Atomic design

I use atomic design. You can read more about my decision in the
[documentation](./docs/ATOMIC_DESIGN.md).

## Commitlint

I use commitlint to ensure conventional commit messages. You can read more about my decision in
the [documentation](./docs/COMMITS.md).


## Commands

**Run the development server:**

```bash
npm run dev
```

**Build:**

```shell
npm run build
```

**Run stylelint**

```shell
npm run stylelint
```

**Run eslint**

```shell
npm run eslint
```

**Run all linters**

```shell
npm run lint
```

## Skipping linters

If you need to skip a linter you can add the `--no-verify` flag.

> Warning! We strongly advise against skipping linters.

```shell
# Skipping commitlint
git commit README.md -m "this is a dirty commit" --no-verify
# Skipping linters
git push --no-verify
```
