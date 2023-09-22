export default defineAppConfig({
    pages: [
        'pages/tabBar/home/index',
        'pages/tabBar/personal/index',
    ],
    window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#196DFF',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
    },
    tabBar: {
        // custom: true,
        borderStyle: 'black',
        selectedColor: '#196DFF',
        list: [
            {
                pagePath: 'pages/tabBar/home/index',
                text: '首页'
            },
            {
                pagePath: 'pages/tabBar/personal/index',
                text: '我的'
            }
        ]
    },
})
