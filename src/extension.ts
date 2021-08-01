import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    'com-shot.saveCommit',
    () => {
      let newTerminal = vscode.window.createTerminal({
        name: 'My Command',
        hideFromUser: false,
        // todo: set current branch for cwd. cwd: "pathToCurrentBranch"
      });
      newTerminal.show();

      newTerminal.sendText('git commit -m "Test commit"');

      vscode.window.showInformationMessage(
        'Your Commit-SnapShot has being saved',
      );

      context.subscriptions.push(disposable);
    },
  );
}

export function deactivate() {}

/* TODO:

- On "git commit" in terminal extension must run or
- On "save commit" as VSC command terminal must do a "git commit" and asking for commit
- all changed files must be snapshoted
- on git checkout the snapshoted files must open as tabs

*/
