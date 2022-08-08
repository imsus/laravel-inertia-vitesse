<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

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

    public function form()
    {
        $title = 'Form Page';

        seo()->title($title);

        return inertia('form-page', [
            'title' => $title,
        ]);
    }

    public function submitForm(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
            'remember' => 'nullable',
        ]);

        sleep(3);
    }
}
