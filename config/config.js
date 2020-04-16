export default {
    dva: {},
    antd: {},
    singular: true,
    routes: [{
        path: '/',
        component: '../layout',
        routes: [
            {
                path: '/',
                component: './HelloWorld'
            },
            {
                path: '/helloworld',
                component: './HelloWorld'
            },
            {
                path: '/dashboard',
                routes: [
                    { path: '/dashboard/analysis', component: 'Dashboard/Analysis' },
                    { path: '/dashboard/monitor', component: 'Dashboard/Monitor' },
                    { path: '/dashboard/workplace', component: 'Dashboard/Workplace' }
                ]
            },
            {
                path: '/puzzlecards',
                component: './Puzzlecards'
            },
            {
                path: '/puzzlecardspage',
                component: './PuzzlecardsPage'
            },
            {
                path: '/puzzlecardsservice',
                component: './PuzzleCardsService'
            },
            {
                path: '/list',
                component: 'list'
            }
        ]
    }],
    // proxy: {
    //     // '/dev': {
    //     //     // target: 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com',
    //     //     // changeOrigin: true,
    //     // },
    // },
}