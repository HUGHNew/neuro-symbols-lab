import type { NavbarConfig } from '@vuepress/theme-default'

export const zh: NavbarConfig = [
    {
        text: "团队介绍",
        link: "/team/"
    },
    {
        text: "xx",
        link: "/"
    },
    {
        text: "xx",
        link: "/"
    },
    {
        text: "xx",
        link: "/"
    },
    {
        text: "xx",
        link: "/"
    },
    {
        text: "逆合成路线预测",
        children: [
            {
                text: "Molecular Property Prediction",
                link: "http://neusymlab.cn/mpnn"
            },
            {
                text: "Synthetic planning platform",
                link: "http://neusymlab.cn/spp/"
            }
        ]
    },
    {
        text: "数学解题系统",
        link: "/"
    }
]