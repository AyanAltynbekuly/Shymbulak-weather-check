<template>
  <header class="header">
    <!-- Left side buttons -->
    <div class="header-left">
      <!-- Logo -->
      <a href="/" class="header-logo">
        <img src="../../assets/images/logo.png" alt="Logo" />
      </a>
      <!-- Live -->
      <button class="header-button">
        <i class="fa-solid fa-video"></i> LIVE
      </button>
      <button class="header-button">
        <i class="fa-solid fa-cloud-sun"></i>12°C
      </button>
      <!-- Weather -->
      <div class="button-container">
        <button
          class="header-button"
          :class="{ active: isSummer }"
          @click="isSummer = true"
        >
          ЛЕТО
        </button>
        <button
          class="header-button"
          :class="{ active: !isSummer }"
          @click="isSummer = false"
        >
          ЗИМА
        </button>
      </div>
      <!-- Search -->
      <button class="header-button">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>

    <!-- Right side buttons -->
    <div class="header-right">
      <!-- Language -->
      <button class="header-button">RU</button>
      <!-- Profile -->
      <button class="header-button"><i class="fa-solid fa-user"></i></button>
      <!-- Saved -->
      <button class="header-button"><i class="fa-solid fa-heart"></i></button>
      <!-- Cart -->
      <button class="header-button">
        <i class="fa-solid fa-cart-shopping"></i>
      </button>
    </div>
  </header>
</template>

<style>
.button-container {
  margin-right: 1rem;
  padding: 0.5rem 1rem;
  background-color: #eee;
  color: #333;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 16px;
  font-family: Inter;
  background: #ffffff;
  border: 1px solid #dae9f4;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-family: Inter;
}

.header-left {
  display: flex;
  align-items: center;
  font-family: Inter;
}

.header-right {
  display: flex;
  align-items: center;
  font-family: Inter;
}

.header-button {
  margin-right: 1rem;
  padding: 0.5rem 1rem;
  color: #333;
  font-size: 1rem;
  cursor: pointer;
  font-family: Inter;
  background: #ffffff;
  border: 1px solid #dae9f4;
  border-radius: 16px;
  font-family: Inter;
}

.header-logo img {
  max-width: 100%;
  height: auto;
}
</style>
