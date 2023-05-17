<?php

namespace App\Http\Controllers;
use Inertia\Inertia;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $data = [
            'name' => 'John Doe',
            'age' => 30,
        ];
    
        return Inertia::render('Home', $data);
    }
}
