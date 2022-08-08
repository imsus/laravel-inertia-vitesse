<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class ErrorController extends Controller
{
    public function show(Request $request, int $error_id)
    {
        validator([
            'error_id' => $error_id,
        ], [
            'error_id' => [
                'required',
                Rule::in([401, 403, 404, 419, 429, 500, 503]),
            ],
        ])->validate();

        return abort($error_id);
    }
}
