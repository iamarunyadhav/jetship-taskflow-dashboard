<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    public function register(Request $request)
    {
        // Map frontend fields to backend
        $input = $request->all();
        // If frontend sends fullName, map to name
        if (isset($input['fullName'])) {
            $input['name'] = $input['fullName'];
        }
        if (isset($input['confirmPassword'])) {
            $input['password_confirmation'] = $input['confirmPassword'];
        }

        // Validation
        $validator = Validator::make($input, [
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email|max:255',
            'password' => [
                'required',
                'min:8',
                'regex:/[a-z]/',      // at least 1 lowercase letter
                'regex:/[A-Z]/',      // at least 1 uppercase letter
                'regex:/[0-9]/',      // at least 1 number
                'regex:/[@$!%*#?&]/', // at least 1 special char
                'confirmed',          // password_confirmation required
            ]
        ], [
            'password.confirmed' => 'Passwords do not match.',
            'password.regex' => 'Password must have uppercase, lowercase, number and special character.'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Validation errors',
                'errors' => $validator->errors()
            ], 422);
        }

        // Create the user
        $user = User::create([
            'name' => $input['name'],
            'email' => $input['email'],
            'password' => Hash::make($input['password']),
        ]);

        return response()->json([
            'status' => true,
            'message' => 'User registered successfully.',
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email
            ]
        ], 201);
    }
}
