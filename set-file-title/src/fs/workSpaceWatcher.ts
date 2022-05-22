import * as vscode from "vscode";
import fileSuffix from "./fileSuffix";
import * as fs from "fs/promises";

export function workSpaceWatcher() {
  let sft = vscode.window.createOutputChannel("sft");
  sft.appendLine("sft ouput: ");
  // invoke output panel
  sft.show();
  const folders = vscode.workspace.workspaceFolders;
  if (folders) {
    let pattern = new vscode.RelativePattern(folders[0], fileSuffix);
    let watcher = vscode.workspace.createFileSystemWatcher(pattern);
    // file creation includes:
    // new file, rename file, moving file to another dir, etc.
    watcher.onDidCreate(async (e) => {
      sft.appendLine(e.fsPath);
      console.log(e.fsPath);
      let contents = await fs.readFile(e.fsPath);
      console.log("contents", contents.toString());
      // TODO: decouple fs operation file
      if (/title matcher/.test(contents.toString())) {
        // don't add title
        // or change title if suffix changes
      } else {
        //  add title
        fs.writeFile(e.fsPath, "title 1234");
      }
    });
  }
}
