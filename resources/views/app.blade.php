<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Laravel with Inertia</title>
    <link rel="apple-touch-icon" href="/pwa-192x192.png">
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#00aba9">
    <meta name="msapplication-TileColor" content="#00aba9">
    <meta name="theme-color" content="#00aba9">
    <link rel="manifest" href="/build/manifest.webmanifest">
		@vite
    <script>
      (function () {
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
		@inertia
	</body>
</html>
