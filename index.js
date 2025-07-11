const path = require("path");

module.exports = {
  rules: {
    "@textlint-ja/no-synonyms":
      require("@textlint-ja/textlint-rule-no-synonyms").default,
    "ja-hiragana-keishikimeishi": require("textlint-rule-ja-hiragana-keishikimeishi"),
    "ja-no-abusage": require("textlint-rule-ja-no-abusage").default,
    "ja-no-redundant-expression":
      require("textlint-rule-ja-no-redundant-expression").default,
    "max-kanji-continuous-len": require("textlint-rule-max-kanji-continuous-len"),
    "no-dropping-the-ra": require("textlint-rule-no-dropping-the-ra").default,
    "no-mixed-zenkaku-and-hankaku-alphabet": require("textlint-rule-no-mixed-zenkaku-and-hankaku-alphabet"),
    "ja-space-around-code": require("textlint-rule-ja-space-around-code"),
    prh: require("textlint-rule-prh").default,
  },
  rulesConfig: {
    // 文章中の同義語を表記ゆれをチェックする
    // https://github.com/textlint-ja/textlint-rule-no-synonyms
    "@textlint-ja/no-synonyms": true,
    // 漢字よりもひらがなで表記したほうが読みやすい形式名詞を指摘する
    // https://github.com/lostandfound/textlint-rule-ja-hiragana-keishikimeishi
    "ja-hiragana-keishikimeishi": true,
    // よくある誤用をチェックする
    // https://github.com/textlint-ja/textlint-rule-ja-no-abusage
    "ja-no-abusage": true,
    // 冗長な表現を禁止する
    // https://github.com/textlint-ja/textlint-rule-ja-no-redundant-expression
    "ja-no-redundant-expression": true,
    // 漢字が連続する最大文字数を制限する（最大5文字）
    // https://github.com/textlint-ja/textlint-rule-max-kanji-continuous-len
    "max-kanji-continuous-len": {
      max: 5,
    },
    // ら抜き言葉を検出する
    // https://github.com/textlint-ja/textlint-rule-no-dropping-the-ra
    "no-dropping-the-ra": true,
    // 全角と半角アルファベットの混在をチェックする
    // https://github.com/textlint-ja/textlint-rule-no-mixed-zenkaku-and-hankaku-alphabet
    "no-mixed-zenkaku-and-hankaku-alphabet": true,
    // インラインコードの前後にスペースを入れる
    // https://github.com/textlint-ja/textlint-rule-preset-ja-spacing/tree/master/packages/textlint-rule-ja-space-around-code
    "ja-space-around-code": {
      before: true,
      after: true,
    },
    // ymlファイルをもとに表記をチェックする
    // https://github.com/textlint-rule/textlint-rule-prh
    prh: {
      rulePaths: [path.resolve(__dirname, "prh-rules/wordpress.yml")],
    },
  },
};
