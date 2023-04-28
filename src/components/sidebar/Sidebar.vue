<script>
import { collapsed, toggleSidebar, sidebarWidth } from "./state";
import SidebarLink from "./SidebarLink.vue";
export default {
  props: {},
  components: { SidebarLink },
  setup() {
    return {
      collapsed,
      toggleSidebar,
      sidebarWidth,
    };
  },
};
</script>

<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <h1>
      <span v-if="collapsed"> </span>
    </h1>

    <SidebarLink to="/" icon="fa-solid fa-house"> Главная </SidebarLink>
    <SidebarLink to="/tickets" icon="fa-solid fa-cable-car">
      Билеты
    </SidebarLink>
    <SidebarLink to="/rental" icon="fa-solid fa-person-booth">
      Прокат
    </SidebarLink>
    <SidebarLink to="/school" icon="fa-solid fa-graduation-cap">
      Школа
    </SidebarLink>
    <SidebarLink to="/entertainments" icon="fa-regular fa-star">
      Развлечения
    </SidebarLink>
    <SidebarLink to="/hotels" icon="fa-solid fa-hotel"> Отели </SidebarLink>
    <SidebarLink to="/restaurants" icon="fa-solid fa-utensils">
      Рестораны
    </SidebarLink>
    <SidebarLink to="/shop" icon="fa-solid fa-shop"> Магазин </SidebarLink>
    <SidebarLink to="/for-kids" icon="fa-solid fa-children">
      Детям
    </SidebarLink>
    <SidebarLink to="/parking" icon="fa-solid fa-parking">
      Паркинг
    </SidebarLink>
    <SidebarLink to="/info" icon="fa-solid fa-info"> Инфо </SidebarLink>

    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
      <i class="fa-solid fa-bars" fa-xl style="color: #000000"> </i>
    </span>
  </div>
</template>

<style>
:root {
  --sidebar-bg-color: #ffffff;
  --sidebar-item-hover: #75b6f2;
  --sidebar-item-active: #75b6f2;
}
</style>

<style scoped>
.sidebar {
  color: #4f5864;
  background-color: var(--sidebar-bg-color);
  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;
  transition: 0.3s ease;
  display: flex;
  flex-direction: column;
}
.sidebar h1 {
  height: 0.5em;
}
.collapse-icon {
  position: absolute;
  padding: 0.75em;
  color: rgba(255, 255, 255, 0.7);
  transition: 0.2s linear;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>
