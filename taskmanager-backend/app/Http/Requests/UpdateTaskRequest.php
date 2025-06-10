<?php

// app/Http/Requests/UpdateTaskRequest.php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateTaskRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'title' => 'sometimes|required|string|max:255',
            'description' => 'nullable|string',
            'status' => 'sometimes|required|string|in:pending,in-progress,completed',
            'priority' => 'sometimes|required|string|in:low,medium,high',
            'due_date' => 'nullable|date',
            'assigned_to' => 'nullable|string|max:255',
        ];
    }
}

