<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * A list of exception types with their corresponding custom log levels.
     *
     * @var array<class-string<\Throwable>, \Psr\Log\LogLevel::*>
     */
    protected $levels = [
        //
    ];

    /**
     * A list of the exception types that are not reported.
     *
     * @var array<int, class-string<\Throwable>>
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed to the session on validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
        $this->reportable(function (Throwable $e) {
            //
        });
    }

    /**
     * Prepare exception for rendering.
     *
     * @param  \Throwable  $e
     * @return \Throwable
     */
    public function render($request, Throwable $e)
    {
        /** @var \Illuminate\Http\Response $response */
        $response = parent::render($request, $e);

        if (! $request->wantsJson()) {
            if (
                in_array($response->status(), [401, 403, 404, 500, 503])
                // && !app()->environment(['local', 'testing'])
            ) {
                $error_description = [
                    401 => 'To view this page, you must first log in.',
                    403 => 'You do not have permission to view the requested page.',
                    404 => 'The requested page does not exist or you do not have permission to view it.',
                    500 => 'There is a problem with the server.',
                    503 => 'The server is currently in maintenance mode.',
                ][$response->status()];

                seo()->title('❌ '.$response->status().' - '.$response->statusText());
                inertia()->share('title', '❌ '.$response->status().' - '.$response->statusText());

                return inertia('error-page', [
                    'status' => $response->status(),
                    'message' => $response->statusText(),
                    'description' => $error_description,
                ])
                    ->toResponse($request)
                    ->setStatusCode($response->status());
            }

            if (in_array($response->status(), [419, 429])) {
                $message = $response->statusText();

                if ($response->status() === 419) {
                    $message = 'Your session is expired. Please refresh the page and try again.';
                }

                return back()
                    ->with('server_toast', [
                        'title' => $message,
                    ]);
            }
        }

        return $response;
    }
}
