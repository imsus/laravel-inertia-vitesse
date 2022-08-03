<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    $title = 'Home Page';

    seo()->title($title);

    return inertia('welcome', [
        'title' => $title,
    ]);
});

Route::get('/about', function () {
    $title = 'About Page';

    seo()->title($title);

    return inertia('about', [
        'title' => $title,
    ]);
});

if (app()->environment('local')) {
    Route::get('/error/401', fn () => abort(401));
    Route::get('/error/403', fn () => abort(403));
    Route::get('/error/404', fn () => abort(404));
    Route::get('/error/419', fn () => abort(419));
    Route::get('/error/429', fn () => abort(429));
    Route::get('/error/500', fn () => abort(500));
    Route::get('/error/503', fn () => abort(503));
}
