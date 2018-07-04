const Log = (ParaText = 'no message', ParaType = 'info', ParaUppercase = false) => {
    const types = {
        warn: 'padding: 4px; border: 1px dashed #863; background: #ffe; color: #863;',
        error: 'padding: 4px; border: 1px dashed #a44; background: #fdd; color: #a44;',
        info: 'padding: 4px; border: 1px dashed #337;  background: #ccf; color: #337;',
        success: 'padding: 4px; border: 1px dashed #373; background: #cfc; color: #373;'
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
