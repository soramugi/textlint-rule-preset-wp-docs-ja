# textlint-rule-preset-wp-docs-ja

WordPress 日本語ドキュメント（ハンドブック等）向けの `textlint` ルールプリセットです。

## インストール

```bash
npm install --save-dev textlint github:jawordpressorg/textlint-rule-preset-wp-docs-ja
````

## 設定例（.textlintrc）

```json
{
  "rules": {
    "preset-wp-docs-ja": true
  }
}
```

## 含まれるルール一覧

* `@textlint-ja/no-synonyms`
* `ja-hiragana-keishikimeishi`
* `ja-no-abusage`
* `ja-no-redundant-expression`
* `max-kanji-continuous-len`
* `no-dropping-the-ra`
* `no-mixed-zenkaku-and-hankaku-alphabet`
* `ja-space-around-code`
* `prh`（`prh-rules/wordpress.yml`を同梱）

## ライセンス

MIT

