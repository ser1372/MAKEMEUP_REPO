<?php

namespace App\Repositories;

use Illuminate\Support\Collection;
use App\Models\Role;

class RoleRepository
{
    public function roles(): Collection
    {
        return Role::all();
    }

}
