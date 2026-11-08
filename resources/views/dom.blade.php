<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap Layout</title>
    <!-- Bootstrap CSS Link -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
  </head>
  <body class="d-flex flex-column min-vh-100">

    <!-- Header -->
    {{-- <header class="navbar navbar-dark bg-dark px-3" id="header" style="border: 1px solid red; background-color:orange" onclick="xyz()"> --}}
    {{-- <header class="navbar navbar-dark px-3" id="header" style="border: 1px solid red;color:violet; background-color:orange" onclick="xyz()"> --}}
    <header class="navbar navbar-dark px-3" id="header" style="border: 1px solid red;color:violet; background-color:orange">
      {{-- <a class="navbar-brand" href="#">Welcome to </a> --}}
      <a class="navbar-brand" href="#">My Website</a>
    </header>

    <!-- Body Container (Sidebar + Main Content) -->
    <div class="container-fluid flex-grow-1 d-flex flex-column flex-md-row p-0">
      
      <!-- Sidebar -->
      <nav class="col-md-3 col-lg-2 bg-light p-3 border-end" id="sidebar">
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link active">Home</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link">About</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link">Services</a></li>
        </ul>
      </nav>

      <!-- Main Content Area -->
      <main class="col-md-9 col-lg-10 p-4">
        <div id="content" class="test">
          <h1>Welcome</h1>
          <img src="https://mcdn.wallpapersafari.com/medium/59/27/Rgi0S5.jpg" alt="image1">
          <p class="list">Main page content goes here...</p>
          <p>Here is a list of essential tools for web development:</p>
          <ul class="list">
              <li>Visual Studio Code</li>
              <li>Google Chrome DevTools</li>
              <li>Git and GitHub</li>
          </ul>
        </div>

      </main>

    </div>
    
    <!-- Footer -->
    <footer class="bg-dark text-white text-center py-3 mt-auto" id="footer">
      <p class="mb-0">&copy; 2026 My Website</p>
    </footer>

    <!-- Bootstrap JS Bundle Link -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
    <script src="js/dom-main.obf.js"></script>
  </body>
</html>
