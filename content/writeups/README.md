# Как добавить новый write-up

1. Скопируй `writeups/template.html`.
2. Назови файл по машине, например `writeups/htb-kobold.html`.
3. Внутри файла замени:
   - `Machine Name`
   - платформу и сложность
   - lead-абзац
   - секции разведки, foothold и privilege escalation
4. Не публикуй флаги, реальные пароли, токены, приватные ключи и чужие секреты.
5. В `lab.html` добавь новую карточку в блок `.writeup-list`.

Карточка:

```html
<article class="writeup-card">
  <p class="date">hack the box / easy</p>
  <h3>Machine Name</h3>
  <p>
    Короткое описание: что тренирует машина и чем интересна.
  </p>
  <a href="writeups/htb-machine-name.html">Читать разбор</a>
</article>
```

Рекомендуемая структура статьи:

- Разведка
- Точка входа
- Foothold
- Privilege escalation
- Альтернативный путь, если есть
- Выводы
