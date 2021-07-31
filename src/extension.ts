import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  console.log('Hello from console log');

    /*
    todo: declare type or find callback for sendCommitMessage
    */


  interface TTerminal {
    vscode.window.activeTerminal: Boolean,
  }

  let disposable = vscode.commands.registerCommand(
    'com-shot.saveCommit',
    () => {
      let createNewTerminal = vscode.window.createTerminal({
        name: 'My Command',
        // todo: set current branch for cwd. cwd: "pathToCurrentBranch"
        hideFromUser: false,
      });
      createNewTerminal.show();

      let sendCommitMessage =
      if (vscode.window.activeTerminal === true) {
      vscode.window.activeTerminal
        ? {
            name: 'My Command',
            // sendText: 'hello world',
          }
        : ;
      sendCommitMessage.sendText('he');
    },
  );

  vscode.window.showInformationMessage(
    'Your Commit-SnapShot has being saved',
  );

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}

/* TODO:

- On "git commit" in terminal extension must run or
- On "save commit" as VSC command terminal must do a "git commit" and asking for commit
- all changed files must be snapshoted
- on git checkout the snapshoted files must open as tabs

*/
