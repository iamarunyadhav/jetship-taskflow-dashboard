<?php

// app/Http/Requests/StoreTaskRequest.php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreTaskRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'status' => 'required|string|in:pending,in-progress,completed',
            'priority' => 'required|string|in:low,medium,high',
            'due_date' => 'nullable|date',
            'assigned_to' => 'nullable|string|max:255',
        ];
    }
}

