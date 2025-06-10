# 🧪 Playwright Automation — SauceDemo Login Tests

Автоматизовані тести логіну для демо-сайту [SauceDemo](https://www.saucedemo.com)  
Зроблено з використанням **Playwright + Page Object Model** (POM) ❤️

## 📁 Структура проєкту

/pages
loginPage.js # POM клас для логін-форми

/tests
login-positive.spec.js # позитивні сценарії
login-negative.spec.js # негативні сценарії

playwright.config.js # конфіг Playwright
package.json # npm-скрипти

## 🚀 Функціонал, що покривається

### ✅ Позитивні тести:
- Успішний логін з валідними даними
- Перевірка наявності елементів на сторінці після логіну:
  - Add to cart
  - Burger menu
  - Dropdown сортування

### ❌ Негативні тести:
- Порожнє поле логіну
- Порожнє поле пароля
- Невірні дані

## ⚙️ Як запускати

### Встановлення залежностей

```bash
npm install

Запуск тестів
npm run test

Перегляд HTML-звіту після тестів
npm run test
npm run test:report

🧠 Технології
* Playwright
* JavaScript (Node.js)
* Page Object Model
* HTML Reporter

Дані для логіну
* Username: standard_user 
* Password: secret_sauce


## 📌 Авторка
Софія Демʼяновська — QA Lead / Senior General QA

