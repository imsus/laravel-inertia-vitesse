<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    {{ seo()->render() }}
    <meta name="theme-color" content="#00aba9">
    <link rel="apple-touch-icon" sizes="180x180" href="/build/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/build/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/build/favicon-16x16.png">
    <link rel="manifest" href="/build/manifest.webmanifest">
    @vite
    <script>
        (function() {
            const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
            const setting = localStorage.getItem('vueuse-color-scheme') || 'auto'
            if (setting === 'dark' || (prefersDark && setting !== 'light'))
                document.documentElement.classList.toggle('dark', true);
            document.documentElement.style.setProperty("color-scheme", setting);
            document.querySelector('meta[name=theme-color]').setAttribute('content', '#000000');
        })()
    </script>
</head>

<body class="font-sans antialiased">
    <div id="overlay-container"></div>
    @inertia
</body>

</html>
