<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Auth\RegisterContller;
use App\Http\Controllers\Api\RoleController;
use App\Http\Controllers\Api\UserController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', [AuthController::class,'login']);
    Route::post('logout', [AuthController::class,'logout']);
    Route::post('refresh', [AuthController::class,'refresh']);
    Route::post('me', [AuthController::class,'me']);

});



Route::prefix('roles')->name('roles.')->group(function() {
    Route::apiResource('role', RoleController::class)
        ->names([
            'index' => 'role.index',
            'store' => 'role.store',
            'show' => 'role.show',
            'update' => 'role.update',
            'destroy' => 'role.destroy',
        ]);
});

Route::prefix('users')->name('users')->group(function(){
    Route::apiResource('user',UserController::class);
});


Route::post('register',[RegisterController::class,'register']);

