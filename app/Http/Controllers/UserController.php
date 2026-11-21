<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class UserController extends Controller
{
    public function index()
    {
        return view('advance-javascript.fetch-api');
    }

    // 2. READ - Get All Students
    public function getAll()
    {
        $students = User::all();

        return response()->json($students);
    }

    // 3. INSERT - Create Student
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email'
        ]);

        $student = User::create($validated);

        return response()->json([
            'message' => 'Student inserted successfully',
            'student' => $student
        ], 201);
    }

    // 4. UPDATE - Update Student
    public function update(Request $request, $id)
    {
        $student = User::findOrFail($id);

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => [
                'required',
                'email',
                Rule::unique('users', 'email')->ignore($student->id)
            ]
        ]);

        $student->update($validated);

        return response()->json([
            'message' => 'Student updated successfully',
            'student' => $student
        ]);
    }

    // 5. DELETE - Delete Student
    public function destroy($id)
    {
        $student = User::findOrFail($id);

        $student->delete();

        return response()->json([
            'message' => 'Student deleted successfully'
        ]);
    }
}
