<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('welcome');
// });

// Route::get('/dashboard', function () {
//     return view('dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

// require __DIR__.'/auth.php';

Route::get('/', function () {
    return view('test');
});
Route::get('/dashboard', function () {
    return view('test');
});
Route::get('/dom', function () {
    return view('dom');
});
Route::get('/ele', function () {
    return view('parentElement');
});
Route::get('/etc', function () {
    return view('elementTextnodeComment');
});
route::get('/dc',function(){return view ('dom-create');});
route::get('/cm',function(){return view ('contains-method');});

//Form events
route::get('/fe',function(){return view ('form-events');});

//BOM(Browser Object Models)
route::get('/bom',function(){return view ('bom');});

//LOP(Location Object Properties)
route::get('/lo',function(){return view ('location-Object');});

//HOP(History Object Properties)
route::get('/ho',function(){return view ('history-Object');});

//(Windows pageXOffset & pageYOffset)
route::get('/pxyo',function(){return view ('page-X-Y-Offset');});

//(offsetTop & offsetLeft)
route::get('/otol',function(){return view ('offsetTop-offsetLeft');});

//(scrollTop & scrollLeft)
route::get('/stsl',function(){return view ('scrollTop-scrollLeft');});

//(scrollWidth & scrollHeight)
route::get('/swsh',function(){return view ('scrollWidth-scrollHeight');});

//(offsetWidth & offsetHeight)
route::get('/owoh',function(){return view ('offsetWidth-offsetHeight');});

//(clientWidth & clientHeight)
route::get('/cwch',function(){return view ('clientWidth-clientHeight');});

//(clientX & clientY)
route::get('/cxcy',function(){return view ('clientX-clientY');});

//(pageX & pageY)
route::get('/pxpy',function(){return view ('pageX-pageY');});

//(screenX & screenY)
route::get('/sxsy',function(){return view ('screenX-screenY');});

//(offsetX & offsetY)
route::get('/oxoy',function(){return view ('offsetX-offsetY');});

//(Key Properties)
route::get('/kp',function(){return view ('key-properties');});

//(mouse events)
route::get('/me',function(){return view ('mouse-events');});

//(JavaScript Clipboard Events oncut oncopy onpaste)
route::get('/ce',function(){return view ('oncut-oncopy-onpaste');});

//(JavaScript Events ononline onoffline)
route::get('/olol',function(){return view ('ononline-onoffline');});

//***********************//
// Advanse JS

//(AdvanceJS Template String)
route::get('/adts',function(){return view ('advance-javascript.template-strings');});

//(AdvanceJS Arrow Functions)
route::get('/adaf',function(){return view ('advance-javascript.arrow-functions');});

//(AdvanceJS Rest Operator)
route::get('/adro',function(){return view ('advance-javascript.rest-operator');});

//(AdvanceJS Spread Operator)
route::get('/adso',function(){return view ('advance-javascript.spread-operator');});

//(AdvanceJS Object Literals)
route::get('/adol',function(){return view ('advance-javascript.object-literals');});

//(AdvanceJS Destructuring Array)
route::get('/adda',function(){return view ('advance-javascript.destructuring-array');});

//(AdvanceJS Destructuring Object)
route::get('/addo',function(){return view ('advance-javascript.destructuring-object');});

//***********************//