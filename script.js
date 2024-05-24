function repeatText() {
    const text = document.getElementById('text').value;
    const repeat = parseInt(document.getElementById('repeat').value, 10);
    const emptySpace = document.getElementById('emptySpace').checked;
    const newLine = document.getElementById('newLine').checked;

    let output = '';
    for (let i = 0; i < repeat; i++) {
        output += text;
        if (i < repeat - 1) {
            if (emptySpace) output += ' ';
            if (newLine) output += '\n';
        }
    }

    document.getElementById('output').innerText = output;
}

function copyText() {
    const output = document.getElementById('output');
    const range = document.createRange();
    range.selectNode(output);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
}
