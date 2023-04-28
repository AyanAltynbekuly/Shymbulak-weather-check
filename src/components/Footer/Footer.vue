<template>
  <footer class="footer">
    <div class="container">
      <img
        class="footer_logo"
        src="../../assets/images/logo-big.png"
        alt="logo"
      />
      <div class="footer_nav">
        <div class="footer_nav_item">
          <h3 class="footer_nav_title">Курорт</h3>
          <a class="footer_link links" href="#">Отели</a>
          <a class="footer_link links" href="#">рестораны</a>
          <a class="footer_link links" href="#">Развлечения</a>
          <a class="footer_link links" href="#">Магазин</a>
          <a class="footer_link links" href="#">Детям</a>
        </div>
        <div class="footer_nav_item">
          <h3 class="footer_nav_title">Катания</h3>
          <a class="footer_link links" href="#">Билеты</a>
          <a class="footer_link links" href="#">Прокат</a>
          <a class="footer_link links" href="#">Школа</a>
          <a class="footer_link links" href="#">Паркинг</a>
        </div>
        <div class="footer_nav_item">
          <h3 class="footer_nav_title">Инфо</h3>
          <a class="footer_link links" href="#">Правила курорта</a>
          <a class="footer_link links" href="#">Новости</a>
          <a class="footer_link links" href="#">Как добраться</a>
          <a class="footer_link links" href="#">Техническая поддержка</a>
        </div>
        <div class="footer_nav_item">
          <h3 class="footer_nav_title">Контакты</h3>
          <div class="footer_link">
            <a href="#" class="footer_social_links links">
              <img
                src="../../assets/images/facebook.png"
                alt="facebook"
                class="footer_social_link"
              />
            </a>
            <a href="#" class="footer_social_links links">
              <img
                src="../../assets/images/youtube.png"
                alt="youtube"
                class="footer_social_link"
              />
            </a>
            <a href="#" class="footer_social_links links">
              <img
                src="../../assets/images/instagram.png"
                alt="instagram"
                class="footer_social_link"
              />
            </a>
            <a href="#" class="footer_social_links links">
              <img
                src="../../assets/images/vk.png"
                alt="vk"
                class="footer_social_link"
              />
            </a>
          </div>
          <a class="footer_link links" href="mailto: info@shymbulak.com"
            >info@shymbulak.com</a
          >
          <a class="footer_link links" href="tel: +77273317777"
            >+7 727 331 77 77</a
          >
        </div>
      </div>
      <a href="#" class="footer_nav__button links">
        <img
          src="../../assets/images/GooglePlay.png"
          alt="Googl play"
          class="button"
        />
      </a>
      <a href="#" class="footer_nav__button links">
        <img
          src="../../assets/images/Appstore.png"
          alt="App Store"
          class="button"
        />
      </a>
      <div class="footer_hr" />
      <div class="footer_by">
        <p>© 2022 ТОО «Chimbulak Development»</p>
        <p>created by YOKO</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  background: #212225;
  padding: 24px 16px;
  margin-top: 40px;
  font-family: Inter;
}

.logo_footer {
  width: 151px;
  height: 80px;
}

.footer_nav {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
}

.footer_nav_item {
  display: flex;
  flex-direction: column;
  margin-right: 40px;
}

.footer_nav_title {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 21px;
  line-height: 120%;
  color: #ffffff;
}

.links {
  text-decoration: none;
}

.footer_link {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  color: #a0a7af;
  margin: 24px 0;
}

.button {
  margin: 40px 40px 40px 0;
}

.footer_social_link {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}

.footer_social_links {
  margin-right: 12px;
}

.footer_social_links:last-child {
  margin-right: 0;
}

.footer_hr {
  height: 1px;
  background: #4f5864;
  margin: 40px 0 20px;
}

.footer_by {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer_by > p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  color: #4f5864;
  margin: 0;
}
</style>
