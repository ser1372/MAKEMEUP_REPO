import axios from "axios"

export async function getPermissions() {
  const response = await axios.get(route('roles.role.index'))

  return response.data
}
