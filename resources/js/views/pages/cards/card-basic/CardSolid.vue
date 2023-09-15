<script setup>
import avatar from '@images/avatars/no-avatar.png'

const solidCardData = [
  {
    cardBg: '#3B5998',
    title: 'Facebook Card',
    icon: 'bxl-facebook',
    text: 'You\'ve read about the importance of being courageous, rebellious and imaginative. These are all vital ingredients.',
    avatarImg: avatar,
    avatarName: 'Eugene Clarke',
    likes: '3.2k',
    share: '49',
  },
]
</script>

<template>
  <VRow>
    <VCol
      v-for="data in solidCardData"
      :key="data.icon"
      cols="12"
      md="6"
      lg="4"
    >
      <VCard :color="data.cardBg">
        <VCardItem>
          <template #prepend>
            <VIcon
              size="1.9rem"
              color="white"
              :icon="data.icon"
            />
          </template>
          <VCardTitle class="text-white">
            {{ data.title }}
          </VCardTitle>
        </VCardItem>

        <VCardText>
          <p class="clamp-text text-white mb-0">
            {{ data.text }}
          </p>
        </VCardText>

        <VCardText class="d-flex justify-space-between align-center flex-wrap">
          <div class="text-no-wrap">
            <VAvatar
              size="34"
              :image="data.avatarImg"
            />
            <span class="text-white ms-2">{{ data.avatarName }}</span>
          </div>

          <div class="d-flex align-center">
            <IconBtn
              icon="bx-heart"
              color="white"
              class="me-1"
            />
            <span class="text-subtitle-2 text-white me-4">{{ data.likes }}</span>

            <IconBtn
              icon="bx-share-alt"
              color="white"
              class="me-1"
            />
            <span class="text-subtitle-2 text-white">{{ data.share }}</span>
          </div>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
