# Laravel Inertia Vitesse

A template to start your Laravel project with InertiaJS and [antfu/vitesse][1] frontend flavor.

# Installation
1. Click "Use this template" in github interface
2. or use `degit` to clone `npx degit imsus/laravel-inertia-vitesse`
3. Install dependencies
    1. PHP dependencies `composer install`
    2. JS dependencies `npm install` or `bun install`

# Usage

## Developing
1. Run `npm run dev` or `bun run dev`
2. Open `http://localhost:8000/`

## Building
1. Run `npm run build` or `bun run build`
2. Build files will be generated in `public/build`

## Deployment
1. On your server, git clone
2. Run build step
3. Run optimize `php artisan optimize`

# Upgrading
1. Since this is a template you need to check the latest version by comparing diff on each commit. You can [compare and check changes on github here][2]

[1]: https://github.com/antfu/vitesse
[2]: https://github.com/imsus/laravel-inertia-vitesse/commits/main
