<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Requests\Auth\RegisterRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Facades\JWTAuth;

class RegisterController extends Controller
{
    public function register(RegisterRequest $request)
    {
        // Создание пользователя
        $user = new User([
            'name' => $request->get('name'),
            'email' => $request->get('email'),
            'role_id'=>1,
            'password' => Hash::make($request->get('password')),
        ]);

        $user->save();

        // Создание токена для пользователя
        $token = JWTAuth::fromUser($user);

        // Возвращение данных
        return response()->json([
            'message' => 'User successfully registered',
            'user' => $user,
            'token' => $token,
        ], 201);
    }
}
