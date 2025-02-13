function debug() {
    document.getElementById('DebugResult').innerHTML = JSON.stringify(new Function('return ' + document.getElementById('DebugText').value)())
}
