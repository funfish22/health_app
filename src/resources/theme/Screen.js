export const gridBreakpoint = {
    sm: '767px',
    lg: '992px',
    xl: '1200px'
}

export default {
    sm: `screen and (max-width: ${gridBreakpoint.sm})`,
    lg: `screen and (max-width: ${gridBreakpoint.lg})`,
    xl: `screen and (max-width: ${gridBreakpoint.xl})`,
}