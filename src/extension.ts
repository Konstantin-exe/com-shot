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

✅ Must open a terminal
✅ must commit
❌ commit message must be givin by the user via vsc.form
❌ all changed files must be snapshoted => open tabs must being saved to RAM or HDD
❌ on git checkout the snapshoted files must open as tabs
✅ must show confirmation message
❌ on error show error message

*/
