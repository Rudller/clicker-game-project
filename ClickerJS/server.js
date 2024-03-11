var browserSync = require('browser-sync');
var nodemon = require('nodemon');

// BrowserSync konfiguracja
browserSync({
    files: ["public/**/*.*"], // ścieżka do plików, które powinny odświeżać przeglądarkę
    online: false,
    open: false,
    port: 3001,
    proxy: 'localhost:3000', // port, na którym działa Express.js
    ui: { port: 3002 }
});

// Nodemon konfiguracja
nodemon({
    script: 'app.js', // plik startowy serwera Express.js
    stdout: false // ważne: to musi być 'false', aby działało 'restart'
}).on('readable', function() {
    this.stdout.on('data', function(chunk) {
        if(/^Listening/.test(chunk)) {
            browserSync.reload();
        }
        process.stdout.write(chunk);
    });
    this.stderr.pipe(process.stderr);
});