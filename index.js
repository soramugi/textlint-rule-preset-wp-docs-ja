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
    "@textlint-ja/no-synonyms": true,
    "ja-hiragana-keishikimeishi": true,
    "ja-no-abusage": true,
    "ja-no-redundant-expression": true,
    "max-kanji-continuous-len": {
      max: 5,
    },
    "no-dropping-the-ra": true,
    "no-mixed-zenkaku-and-hankaku-alphabet": true,
    "ja-space-around-code": {
      before: true,
      after: true,
    },
    prh: {
      rulePaths: [path.resolve(__dirname, "prh-rules/wordpress.yml")],
    },
  },
};
