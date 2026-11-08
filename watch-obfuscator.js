import chokidar from "chokidar";
import JavaScriptObfuscator from "javascript-obfuscator";
import fs from "fs";
import path from "path";

const sourceFolder = path.resolve("./public/js/adjsMain");
const outputFolder = path.resolve("./public/js/adjs");

console.log("👀 Watching source folder:");
console.log(sourceFolder);

console.log("📦 Obfuscated files will be saved to:");
console.log(outputFolder);

function obfuscate(input) {

    // Ignore .obf.js files
    if (input.endsWith(".obf.js")) {
        return;
    }

    // Get only the filename
    const filename = path.basename(input);

    // Create output path in /public/js
    const output = path.join(
        outputFolder,
        filename.replace(/\.js$/, ".obf.js")
    );

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

const watcher = chokidar.watch(sourceFolder, {
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
    console.log("📝 Edit a .js file inside /public/js/js and save it...");
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
    console.error("❌ Watcher error:");
    console.error(error);
});
