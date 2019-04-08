import React, { Component } from 'react';

import Context from  '../../components/Context/Context';

const data=[
    {
        fid:1,
        title:'编程入门教程',
        context:[
            {
                id:1,
                subTitle:'HTML教程',
                content:'HTML 指超文本标签语言。HTML 是通向 WEB 技术世界的钥匙在 W3Cschool 的 HTML 教程中，您将学习如何使用 HTML 来创建站点。HTML 非常容易学习！你会喜欢它的！',
            },
            {
                id:2,
                subTitle:'HTML5教程',
                content:'HTML 5 是下一代的 HTML。HTML5 仍处于完善之中。然而，大部分现代浏览器已经具备了某些 HTML5 支持。在 W3Cschool 的 HTML 5 教程中，您将了解 HTML5 中的新特性。',
            },
            {
                id:3,
                subTitle:'CSS教程',
                content:'CSS 指层叠样式表（Cascading Style Sheets）。在我们的 CSS 教程中，您将学习如何使用 CSS 同时控制整个站点的样式和布局。通过与 XHTML 结合，CSS 可以帮助我们实行表现与结构分离的开发模式。通过使用 CSS 来提升工作效率！',
            },
        ]
    },
    {
        fid:2,
        title:'前端开发教程',
        context:[
            {
                id:1,
                subTitle:'HTML教程',
                content:'HTML 指超文本标签语言。HTML 是通向 WEB 技术世界的钥匙在 W3Cschool 的 HTML 教程中，您将学习如何使用 HTML 来创建站点。HTML 非常容易学习！你会喜欢它的！',
            },
            {
                id:2,
                subTitle:'HTML5教程',
                content:'HTML 5 是下一代的 HTML。HTML5 仍处于完善之中。然而，大部分现代浏览器已经具备了某些 HTML5 支持。在 W3Cschool 的 HTML 5 教程中，您将了解 HTML5 中的新特性。',
            },
            {
                id:3,
                subTitle:'CSS教程',
                content:'CSS 指层叠样式表（Cascading Style Sheets）。在我们的 CSS 教程中，您将学习如何使用 CSS 同时控制整个站点的样式和布局。通过与 XHTML 结合，CSS 可以帮助我们实行表现与结构分离的开发模式。通过使用 CSS 来提升工作效率！',
            },
        ]
    },
];


class Document extends Component {
    render() {
        return (
            <div>
                {
                    data.map((v,k)=><Context key={k} {...v} />)
                }
            </div>
        );
    }
}

export default Document;