# Live Markdown — Syntax Reference

This is the full syntax supported by the Live Markdown tool, including its custom
extensions beyond standard Markdown. Kept up to date as features are added.

---

## Headers

```
# My Heading
```
Renders as an `<h1>`.

---

## Bold & Italic

```
**bold text**
*italic text*
_italic text_
```

- `**...**` → bold
- `*...*` or `_..._` → italic (both supported)

---

## Links

```
[link text](https://example.com)
```

Renders as a clickable `<a>` tag.

---

## Images

```
![alt text](image-url)
```

Renders as an `<img>` tag using the given URL.

### Image width (custom extension)

```
![alt text](image-url)(width)
```

Add a `(width)` block immediately after the image, with a plain number (pixels).
Example:

```
![logo](imgs/logo.png)(150)
```

If no `(width)` block is given, the image renders at its natural size — confirmed
working correctly.

---

## Checkboxes (custom syntax — not GitHub-style)

```
[] An unchecked task
[x] A completed task
```

Note: this project intentionally uses `[]` / `[x]` with **no space and no leading
dash**, unlike GitHub's `- [ ]` / `- [x]` convention.

---

## Bullet Lists

```
- item one
- item two
```

---

## Horizontal Rule

```
---
```

Renders as an `<hr>`. Requires exactly three dashes — `--` (two dashes) will
not trigger it.

---

## Inline Code

```
`some code here`
```

Uses standard Markdown backtick syntax to mark inline code.

If you need a **literal single quote** to appear in text (e.g. contractions like
`don't` or `it's`), that's safe to type — this project doesn't treat single quotes
as special syntax.

---

## Page Background (custom directive)

```
!bg(#hexcolor)
```

Sets the background color of the rendered preview pane. Example:

```
!bg(#ffe8d6)
```

Works anywhere in the document, but placing it at the top is recommended for
readability — it makes the background setting easy to spot at a glance, and
matches how it behaves if you use more than one.

If multiple `!bg(...)` calls appear in the same document, **the first one wins**
— any later ones are ignored. This is another reason to place it at the top:
it's the one that will actually take effect.

---

## Quick Reference Table

| Feature | Syntax |
|---|---|
| Header | `# text` |
| Bold | `**text**` |
| Italic | `*text*` or `_text_` |
| Link | `[text](url)` |
| Image | `![alt](url)` |
| Image with width | `![alt](url)(width)` |
| Checkbox (unchecked) | `[] text` |
| Checkbox (checked) | `[x] text` |
| Bullet list | `- item` |
| Horizontal rule | `---` |
| Inline code | `` `code` `` |
| Background color | `!bg(#hexcolor)` — place at top; first one wins if repeated |

---

*This is a living document — update it whenever new syntax is added or changed.*