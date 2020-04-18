if('serviceWorker' in navigator) {
    try {
        navigator.serviceWorker.register('../sw.js');
        console.log('SW Registered')
    } catch (error)
    {
        console.log('SW registration failed')
    }
} 
