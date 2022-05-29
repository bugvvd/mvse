import * as vscode from "vscode";
import * as fs from "fs/promises";

import fileSuffix from "./fileSuffix";
import mapper from "../templates/mapper";

export function workSpaceWatcher(): void {
  const folders = vscode.workspace.workspaceFolders;
  if (folders) {
    let pattern = new vscode.RelativePattern(folders[0], fileSuffix);
    let watcher = vscode.workspace.createFileSystemWatcher(pattern);
    // file creation includes: new file, rename file, moving file to another dir, etc.
    watcher.onDidCreate(async (e) => {
      let filePath = e.fsPath;
      let contents = await fs.readFile(filePath);
      if (contents.length) {
        return;
      } else {
        // APPEND title to empty file
        let ext = filePath.substring(
          filePath.lastIndexOf("."),
          filePath.length
        );
        let title = mapper(ext);
        console.log(ext, title);
        await fs.writeFile(filePath, title + Math.random());
      }
    });
    return;
  }
}
