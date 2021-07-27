import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // process.stdout.write('Hello world!');
  console.log('Hello from console log');

  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "com-shot" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    'com-shot.saveCommit',
    () => {
      // The code you place here will be executed every time your command is executed
      // Display a message box to the user
      vscode.window.showInformationMessage(
        'Your Commit-SnapShot has being saved',
      );
      if (process.argv[2] === 'commit') {
        vscode.window.showWarningMessage('you made a commit');
      }
    },
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
