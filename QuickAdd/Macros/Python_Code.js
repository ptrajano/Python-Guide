module.exports = async (params) => {
    const { app } = params;
    const editor = app.workspace.activeLeaf.view.editor;

    editor.replaceSelection("```python\n\n```");

    const cursor = editor.getCursor();
    editor.setCursor({ line: cursor.line - 1, ch: 0 });
};

