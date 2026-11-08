<<<<<<< HEAD
<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework. You can also check out [Laravel Learn](https://laravel.com/learn), where you will be guided through building a modern Laravel application.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains thousands of video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the [Laravel Partners program](https://partners.laravel.com).

### Premium Partners

- **[Vehikl](https://vehikl.com)**
- **[Tighten Co.](https://tighten.co)**
- **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
- **[64 Robots](https://64robots.com)**
- **[Curotec](https://www.curotec.com/services/technologies/laravel)**
- **[DevSquad](https://devsquad.com/hire-laravel-developers)**
- **[Redberry](https://redberry.international/laravel-development)**
- **[Active Logic](https://activelogic.com)**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).


For js encrypted
first sun in cmd "npm install --save-dev javascript-obfuscator"
then 
if your file have in => C:\xampp\htdocs\subhas2\assets\js\key-properties.js
then run in cmd => npx javascript-obfuscator .\assets\js\key-properties.js --output .\assets\js\key-properties.obf.js

if your file have in => C:\xampp\htdocs\subhas2\public\js\key-properties.js
then run in cmd => npx javascript-obfuscator .\public\js\key-properties.js --output .\public\js\key-properties.obf.js

If your HTML currently has:

<!-- <script src="/js/key-properties.js"></script> -->

change it to:

<!-- <script src="/js/key-properties.obf.js"></script> -->

Make it automatic

run in cmd "npm install --save-dev chokidar"

then create a file 'watch-obfuscator.js' in project folder

then pest this code in that file
/*
    const chokidar = require("chokidar");
    const JavaScriptObfuscator = require("javascript-obfuscator");

    const input = "./public/js/key-properties.js";
    const output = "./public/js/key-properties.obf.js";

    function obfuscate() {
        const fs = require("fs");

        const code = fs.readFileSync(input, "utf8");

        const result = JavaScriptObfuscator.obfuscate(code, {
            compact: true,
            controlFlowFlattening: true,
            stringArray: true
        });

        fs.writeFileSync(output, result.getObfuscatedCode());

        console.log("✅ Obfuscated file updated!");
    }

    obfuscate();

    chokidar.watch(input).on("change", () => {
        console.log("🔄 Source changed...");
        obfuscate();
    });

*/
or if you want to change multiple file 
/*
    const chokidar = require("chokidar");
    const JavaScriptObfuscator = require("javascript-obfuscator");
    const fs = require("fs");
    const path = require("path");

    const files = [
        "./public/js/key-properties.js",
        "./public/js/login.js",
        "./public/js/validation.js",
        "./public/js/calculator.js"
    ];

    function obfuscate(input) {
        const output = input.replace(/\.js$/, ".obf.js");

        const code = fs.readFileSync(input, "utf8");

        const result = JavaScriptObfuscator.obfuscate(code, {
            compact: true,
            controlFlowFlattening: true,
            stringArray: true
        });

        fs.writeFileSync(output, result.getObfuscatedCode());

        console.log(`✅ Updated: ${path.basename(output)}`);
    }

    // Obfuscate all files initially
    files.forEach(obfuscate);

    // Watch all files
    chokidar.watch(files).on("change", (file) => {
        console.log(`🔄 Changed: ${path.basename(file)}`);
        obfuscate(file);
    });
*/
or If you have many files and want every .js file inside public/js to be obfuscated automatically:
/*
    const chokidar = require("chokidar");
    const JavaScriptObfuscator = require("javascript-obfuscator");
    const fs = require("fs");
    const path = require("path");

    const folder = "./public/js";

    function obfuscate(input) {
        // Don't obfuscate already-obfuscated files
        if (input.endsWith(".obf.js")) return;

        const output = input.replace(/\.js$/, ".obf.js");
        const code = fs.readFileSync(input, "utf8");

        const result = JavaScriptObfuscator.obfuscate(code, {
            compact: true,
            controlFlowFlattening: true,
            stringArray: true
        });

        fs.writeFileSync(output, result.getObfuscatedCode());

        console.log(`✅ ${input} → ${output}`);
    }

    // Existing files
    fs.readdirSync(folder)
        .filter(file => file.endsWith(".js") && !file.endsWith(".obf.js"))
        .forEach(file => {
            obfuscate(path.join(folder, file));
        });

    // Watch for changes/new files
    chokidar.watch(`${folder}/*.js`).on("change", obfuscate);

*/

Then run:

node watch-obfuscator.js

You should see:

👀 Watching JavaScript files...

if not working then run "npm install --save-dev chokidar javascript-obfuscator"
Create:

watch-obfuscator.js

2. Put this code in it
/*
    import chokidar from "chokidar";
    import JavaScriptObfuscator from "javascript-obfuscator";
    import fs from "fs";
    import path from "path";

    const folder = path.resolve("./public/js");

    console.log("👀 Watching folder:");
    console.log(folder);

    function obfuscate(input) {

        // Ignore .obf.js files
        if (input.endsWith(".obf.js")) {
            return;
        }

        const output = input.replace(/\.js$/, ".obf.js");

        console.log(`🔄 Changed: ${input}`);

        try {

            const code = fs.readFileSync(input, "utf8");

            const result = JavaScriptObfuscator.obfuscate(code, {
                compact: true,
                controlFlowFlattening: true,
                stringArray: true
            });

            fs.writeFileSync(
                output,
                result.getObfuscatedCode(),
                "utf8"
            );

            console.log(`✅ Updated: ${output}`);

        } catch (error) {
            console.error("❌ Obfuscation error:");
            console.error(error);
        }
    }

    const watcher = chokidar.watch(folder, {
        persistent: true,
        ignoreInitial: true,
        depth: 10,
        ignored: [
            /(^|[\/\\])\../,
            /\.obf\.js$/
        ]
    });

    watcher.on("ready", () => {
        console.log("✅ Watcher is ready!");
        console.log("📝 Edit a .js file and save it...");
    });

    watcher.on("change", (file) => {
        if (file.endsWith(".js") && !file.endsWith(".obf.js")) {
            obfuscate(file);
        }
    });

    watcher.on("add", (file) => {
        if (file.endsWith(".js") && !file.endsWith(".obf.js")) {
            console.log(`➕ New file: ${file}`);
            obfuscate(file);
        }
    });

    watcher.on("error", (error) => {
        console.error("❌ Watcher error:", error);
    });

*/

just run:

node watch-obfuscator.js

You should see:

👀 Watching JavaScript files...
=======
# javascript
>>>>>>> df27f116e9d631aded1ea258e5b62272819e2eec
