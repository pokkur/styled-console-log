const Log = (ParaText = 'no message', ParaType = 'info', ParaUppercase = false) => {
    const types = {
        warn: 'padding: 4px; border: 1px dashed #E91E63; background: rgba(233, 30, 99, 0.2); color: #E91E63;',
        error: 'padding: 4px; border: 1px dashed #ff9800; background: rgba(255, 152, 0, 0.2); color: #ff9800;',
        info: 'padding: 4px; border: 1px dashed #795548;  background: rgba(121, 85, 72, 0.2); color: #795548;',
        success: 'padding: 4px; border: 1px dashed #2196f3; background: rgba(33, 150, 243, 0.2); color: #2196f3;'
    }

    let style
    const type = ParaType
    switch (type) {
        case 'warn':
            style = types.warn
            break
        case 'error':
            style = types.error
            break
        case 'success':
            style = types.success
            break
        case 'info':
        default:
            style = types.info
    }

    let text = ParaText
    const upperCase = ParaUppercase
    if (upperCase) {
        text = text.toUpperCase()
    }
    /* eslint-disable no-console */
    return console.log(`%c${text}`, style)
}

export default Log
