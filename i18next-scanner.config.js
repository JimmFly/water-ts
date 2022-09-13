var fs = require("fs");
var chalk = require("chalk");

module.exports = {
  input: [
    "**/src/*.{ts,tsx}",
    // Use ! to filter out files or directories
    "!**/i18n/**",
    "!**/node_modules/**",
  ],
  output: "./dist",
  options: {
    debug: true,
    func: {
      list: ["i18next.t", "i18n.t", "t"],
      extensions: [".ts", ".tsx"],
    },
    lngs: ["en", "zh"],
    ns: ["en", "zh"],
    defaultLng: "en",
    defaultNs: "en",
    defaultValue: "__STRING_NOT_TRANSLATED__",
    resource: {
      loadPath: "./src/i18n/resource/{{ns}}.json",
      savePath: "i18n/resource/{{ns}}.json",
      jsonIndent: 2,
      lineEnding: "\n",
    },
    nsSeparator: false, // namespace separator
    keySeparator: false, // key separator
    interpolation: {
      prefix: "{{",
      suffix: "}}",
    },
  },
  transform: function customTransform(file, enc, done) {
    const parser = this.parser;
    const content = fs.readFileSync(file.path, enc);
    let count = 0;

    parser.parseFuncFromString(
      content,
      { list: ["i18next._", "i18next.__"] },
      (key, options) => {
        parser.set(
          key,
          Object.assign({}, options, {
            nsSeparator: false,
            keySeparator: false,
          })
        );
        ++count;
      }
    );

    if (count > 0) {
      console.log(
        `i18next-scanner: count=${chalk.cyan(count)}, file=${chalk.yellow(
          JSON.stringify(file.relative)
        )}`
      );
    }

    done();
  },
};
