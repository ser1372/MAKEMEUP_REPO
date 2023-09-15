<script>
import { ref, onMounted } from 'vue'
import { getPermissions } from "@/repositories/roleRepository"

export default {
  setup() {
    const roles = ref([])

    onMounted(async () => {
      const fetchedRoles = await getPermissions()

      roles.value = fetchedRoles.roles
    })

    return {
      roles,
    }
  },
}
</script>

<template>
  <VTable v-if="roles && roles.length > 0">
    <thead>
      <tr>
        <th class="text-uppercase">
          ID
        </th>
        <th>
          Name
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in roles"
        :key="item.name"
      >
        <td>
          {{ item.id }}
        </td>
        <td class="text-center">
          {{ item.name }}
        </td>
      </tr>
    </tbody>
  </VTable>
</template>


