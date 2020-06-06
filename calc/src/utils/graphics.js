export function getGraphMaximumRadius() {
    const toolbar = document.getElementById('toolbar');
    if (toolbar) {
        const toolBarHeight = toolbar.clientHeight;
        const windowCenterX = window.innerWidth / 2;
        const windowCenterY = window.innerHeight - toolBarHeight / 2;
        const maximumGraphRadius = Math.min(windowCenterX, windowCenterY);
    }
    
    return 0; 
}