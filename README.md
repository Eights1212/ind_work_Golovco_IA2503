## Индивидуальный проект по дисциплине JavaScript
### Тема проекта:  
# Budget Tracker - веб-приложение для учета расходов

### Государственный университет Молдовы  
### Факультет математики и информатики  
### Кафедра прикладной информатики  

**Выполнил:**  
Головко Станислав
студент I курса, группа IA2503  

**Преподаватель:**  
Nartea N., asis. univ. 

**Кишинёв, 2026**

---

# Содержание

1. Цель работы  
2. Постановка задачи  
3. Описание проекта  
4. Используемые технологии  
5. Структура проекта  
6. Реализация требований  
7. Объяснение переменных  
8. Примеры использования  
9. Вывод  
10. Библиография  

---

# 1. Цель работы

Цель проекта - разработать веб-приложение с использованием чистого JavaScript.

В ходе выполнения необходимо продемонстрировать работу с:
- DOM
- событиями
- массивами объектов
- пользовательским вводом
- фильтрацией
- сортировкой
- адаптивным интерфейсом

---

# 2. Постановка задачи

Создать приложение, позволяющее вести учет личных расходов и доходов.
Пользователь должен иметь возможность:
- добавлять записи
- удалять записи
- фильтровать записи
- сортировать
- искать
- просматривать баланс
- использовать удобный интерфейс

---

# 3. Описание проекта

Budget Tracker - приложение для учета финансов.
Программа позволяет хранить список расходов и доходов.  
Каждая запись содержит:

- название
- сумму
- тип операции

Реализованы:

- добавление записей
- удаление
- фильтрация
- поиск
- сортировка
- модальное окно
- адаптивность

---

# 4. Используемые технологии

В работе использовались:

- HTML5
- CSS3
- JavaScript ES6

---

# 5. Структура проекта

Проект состоит из файлов:

- index.html
- style.css
- script.js
- README.md

---

# 6. Реализация требований

## Работа с DOM

Создание элементов:

```javascript
let div = document.createElement("div");
```

Добавление элементов:

```javascript
list.appendChild(div);
```

Изменение:

```javascript
div.className = "record " + item.type;
```

Удаление:

```javascript
records = records.filter(function(x){
    return x.id !== item.id;
});
```

---

## Работа с событиями

Открытие окна:

```javascript
document.getElementById("openModal").onclick = function() {
}
```

Закрытие:

```javascript
document.getElementById("closeBtn").onclick = function() {
}
```

Сохранение:

```javascript
document.getElementById("saveBtn").onclick = function() {
}
```

---

## Валидация

Проверка введенных данных:

```javascript
if(title === "" || amount <= 0) {
    msg.textContent = "Введите данные правильно";
}
```

---

## Работа с массивами объектов

Создание массива:

```javascript
let records = [];
```

Добавление объекта:

```javascript
records.push(obj);
```

---

## Фильтрация

```javascript
let filtered = records.filter(function(item){
    return item.type === type;
});
```

---

## Сортировка

```javascript
records.sort(function(a,b){
    return a.amount - b.amount;
});
```

---

## Поиск

```javascript
item.title.toLowerCase().includes(text)
```

---

## ES6

Использовано:

- let
- const
- filter
- sort
- forEach
- Date.now()

Пример:

```javascript
id: Date.now()
```

---

## Адаптивность

```css
@media(max-width: 650px){
}
```

---

# 7. Объяснение переменных

## records

Основной массив.

Содержит все записи пользователя.

Пример:

```javascript
let records = [];
```

---

## list

Контейнер для отображения записей.

Пример:

```javascript
list.appendChild(div);
```

---

## balance

Переменная для отображения баланса.

Пример:

```javascript
balance.textContent = total;
```

---

## count

Показывает количество записей.

Пример:

```javascript
count.textContent = records.length;
```

---

## msg

Элемент для вывода ошибок.

Используется при некорректном вводе.

Пример:

```javascript
msg.textContent = "Введите данные правильно";
```

---

## modal

Модальное окно.

Используется для ввода новых данных.

Пример:

```javascript
modal.classList.remove("hidden");
```

---

## titleInput

Поле ввода названия.

Пример:

```javascript
titleInput.value
```

---

## amountInput

Поле ввода суммы.

Пример:

```javascript
amountInput.value
```

---

## typeInput

Выбор типа записи.

Пример:

```javascript
typeInput.value
```

---

# 8. Примеры использования

## Создание записи

```javascript
let obj = {
    id: Date.now(),
    title: title,
    amount: amount,
    type: typeInput.value
};
```

---

## Добавление в массив

```javascript
records.push(obj);
```

---

## Отображение

```javascript
show(records);
```

---

## Удаление

```javascript
records = records.filter(function(x){
    return x.id !== item.id;
});
```

---

## Фильтр

```javascript
records.filter(function(item){
    return item.type === type;
});
```

---

## Поиск

```javascript
records.filter(function(item){
    return item.title.toLowerCase().includes(text);
});
```

---

## Сортировка

```javascript
records.sort(function(a,b){
    return a.amount - b.amount;
});
```

---

## Проверка

```javascript
if(title === "" || amount <= 0)
```

---

## Открытие окна

```javascript
modal.classList.remove("hidden");
```

---

## Закрытие окна

```javascript
modal.classList.add("hidden");
```

---

## Подсчёт баланса

```javascript
if(item.type === "income") {
    total = total + item.amount;
}
```

---

## Подсчёт количества

```javascript
count.textContent = records.length;
```

---

# 9. Вывод

В ходе выполнения проекта было создано веб-приложение для учета финансов.

Были реализованы:

- работа с DOM
- обработка событий
- валидация
- массивы объектов
- поиск
- сортировка
- фильтрация
- адаптивный интерфейс
- модальное окно

Проект полностью соответствует требованиям задания.

---

# 10. Библиография

1. MDN Web Docs  
2. JavaScript.info  
3. GitHub Documentation  
4. ECMAScript ES6  
5. HTML5 Documentation  
6. CSS Reference  
7. Moodle курс JavaScript  

---

# Инструкция запуска

1. Скачать проект  
2. Открыть папку  
3. Запустить index.html  
