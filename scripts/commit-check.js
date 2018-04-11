let fs = require("fs");
let path = require("path");

let regex = new RegExp(/\[(feat|docs|style|refactor|chore|fix|test|perf)\](\[.*-[0-9]*\])?:.*/g);

let message = fs.readFileSync(path.join(".git", "COMMIT_EDITMSG"), "utf8").toString();

if (!regex.test(message)) {
    console.error(`
    ERROR: commit message should be of this type [type][OPTIONAL-JIRA]: subject

    Commit message was:
        ${message}

    Example:
    - [chore]: update Jenkins file
    - [feat][JIRA-1]: add new cool feature
    `);

    process.exit(1);
}
