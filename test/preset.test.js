const { TextlintKernel } = require("@textlint/kernel");
const preset = require("../index");
const markdownPlugin = require("@textlint/textlint-plugin-markdown").default;

describe("textlint-rule-preset-wp-docs-ja", () => {
  const kernel = new TextlintKernel();

  const lintText = async (text) => {
    const rules = Object.entries(preset.rules).map(([ruleId, rule]) => {
      return {
        ruleId,
        rule,
        options: preset.rulesConfig[ruleId],
      };
    });

    const result = await kernel.lintText(text, {
      ext: ".md",
      filePath: "sample.md",
      rules,
      plugins: [
        {
          pluginId: "markdown",
          plugin: markdownPlugin,
        },
      ],
    });

    return result.messages;
  };

  it("should not throw with clean input", async () => {
    const text = "これはテスト文章です。";
    const messages = await lintText(text);
    expect(Array.isArray(messages)).toBe(true);
  });

  it("should detect spacing around parentheses: y( => y (", async () => {
    const text = "これは y(テスト) の例です。";
    const messages = await lintText(text);
    const hasPrh = messages.some(
      (msg) => msg.ruleId === "prh" && msg.message.includes("y (")
    );
    expect(hasPrh).toBe(true);
  });

  it("should detect missing space after en-dash: – 5 => –5", async () => {
    const text = "差は – 5 ポイントでした。";
    const messages = await lintText(text);
    const hasPrh = messages.some(
      (msg) => msg.ruleId === "prh" && msg.message.includes("–5")
    );
    expect(hasPrh).toBe(true);
  });

  it("should detect smart quote normalization: n’ => n ’", async () => {
    const text = "n’が正しく表示されるか確認します。";
    const messages = await lintText(text);
    const hasPrh = messages.some(
      (msg) => msg.ruleId === "prh" && msg.message.includes("n ’")
    );
    expect(hasPrh).toBe(true);
  });

  it("should detect compacted English word/number: but 6 => but6", async () => {
    const text = "The result was but 6 items.";
    const messages = await lintText(text);
    const hasPrh = messages.some(
      (msg) => msg.ruleId === "prh" && msg.message.includes("but6")
    );
    expect(hasPrh).toBe(true);
  });

  it("should detect half-width quote with no space: “a => “ a", async () => {
    const text = "これは“a”という用語です。";
    const messages = await lintText(text);
    const hasPrh = messages.some(
      (msg) => msg.ruleId === "prh" && msg.message.includes("“ a")
    );
    expect(hasPrh).toBe(true);
  });

  it("should detect PRH replacement: ロール => 権限グループ", async () => {
    const text = "ロールの設定を確認してください。";
    const messages = await lintText(text);
    const hasPrh = messages.some(
      (msg) => msg.ruleId === "prh" && msg.message.includes("権限グループ")
    );
    expect(hasPrh).toBe(true);
  });

  it("should detect PRH replacement: エントリー => エントリ", async () => {
    const text = "新しいエントリーを作成します。";
    const messages = await lintText(text);
    const hasPrh = messages.some(
      (msg) => msg.ruleId === "prh" && msg.message.includes("エントリ")
    );
    expect(hasPrh).toBe(true);
  });

  it("should detect PRH replacement: Wordpress => WordPress", async () => {
    const text = "Wordpress";
    const messages = await lintText(text);
    const hasPrh = messages.some(
      (msg) => msg.ruleId === "prh" && msg.message.includes("WordPress")
    );
    expect(hasPrh).toBe(true);
  });

  it("should detect long kanji sequence: 共通脆弱性識別子", async () => {
    const text = "共通脆弱性識別子に従って対応してください。";
    const messages = await lintText(text);
    const hasLongKanji = messages.some(
      (msg) => msg.ruleId === "max-kanji-continuous-len"
    );
    expect(hasLongKanji).toBe(true);
  });
});
