<!DOCTYPE html>
<html>
    <head>
        <title>Laravel</title>
        <link href="https://fonts.googleapis.com/css?family=Lato:100" rel="stylesheet" type="text/css">
        <base href="http://laravel/">
        
    </head>
    <body>
        <nav>
    <ul>
        <li><a href="#" v-link="{path:'/about'}">About</a></li>
        <li><a href="#" v-link="{path:'/contact'}">Contact</a></li>
    </ul>
  </nav>
  <router-view><router-view>

        <script src="/js/main.js"></script>
    </body>
</html>
