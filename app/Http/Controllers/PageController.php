<?php

namespace App\Http\Controllers;

class PageController extends Controller
{
    public function home()
    {
        $title = 'Home Page';

        seo()->title($title);

        return inertia('welcome', [
            'title' => $title,
        ]);
    }

    public function about()
    {
        $title = 'About Page';

        seo()->title($title);

        return inertia('about', [
            'title' => $title,
        ]);
    }
}
