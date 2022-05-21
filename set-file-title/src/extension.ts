// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  console.log(
    'Congratulations, your extension "set-file-title" is now active!'
  );
  context.subscriptions.push(
    // The command has been defined in the package.json file
    vscode.commands.registerCommand("set-file-title.activate", () => {
      // The code you place here will be executed every time your command is executed
      // Display a message box to the user
      vscode.window.showInformationMessage(`sft extentsion activated`);
    })
  );
  vscode.commands.executeCommand("set-file-title.activate");

  context.subscriptions.push(
    // The command has been defined in the package.json file
    vscode.commands.registerCommand("set-file-title.initialize", () => {
      vscode.window.showInformationMessage(`sft extentsion initialized`);
    })
  );
  vscode.commands.executeCommand("set-file-title.initialize");

  // context.subscriptions.push(
  //   // The command has been defined in the package.json file
  //   vscode.commands.registerCommand("set-file-title.initialize", () => {
  //     vscode.window.showInformationMessage(`sft extentsion initialized`);
  //   })
  // );
  // vscode.commands.executeCommand("set-file-title.initialize");
}

// this method is called when your extension is deactivated
export function deactivate() {}
