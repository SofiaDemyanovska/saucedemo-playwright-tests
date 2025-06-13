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

## ✅ Покриті позитивні тести

- Успішний логін з валідними обліковими даними  
- Перевірка URL після логіну (`/inventory`)  
- Відсутність повідомлення про помилку після валідного логіну  
- Видимість ключових елементів після логіну:
  - Кнопка "Add to cart"
  - Іконка кошика
  - Дропдаун сортування
  - Логотип Sauce Labs
  - Бургер-меню → перехід за посиланням "About"
- Логаут повертає на сторінку логіну  
- Сортування товарів за ціною (від дешевших до дорожчих)  
- Додавання товару в кошик і перевірка вмісту кошика  

---

## ❌ Покриті негативні тести

- Порожнє поле логіну з валідним паролем  
- Валідний логін із порожнім паролем  
- Повністю невалідні облікові дані  
- Обидва поля порожні  
- Логін користувача `locked_out_user`  
- Надмірно довгі значення у полях логіну та пароля 

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

