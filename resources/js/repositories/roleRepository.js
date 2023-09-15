import axios from "axios"

export async function getPermissions() {
  const response = await axios.get('api/role/roles')

  return response.data
}
