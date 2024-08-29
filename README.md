# PNPM Workspaces

This project demonstrates the use of pnpm workspaces for efficient management of multiple packages within a monorepo structure.

```
pnpm install
```

There's no need to build the packages, the modules references straight to typescript files.

## Project Structure

The project is organized as follows:

- Root
  - `packages/`
    - `common/`
    - `app/`
  - `package.json`
  - `tsconfig.json`
  - `pnpm-workspace.yaml`

## Workspaces

This project utilizes PNPM Workspaces.
