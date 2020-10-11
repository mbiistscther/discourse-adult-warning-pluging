# discourse-plugin-adult-warning

###### tags: `濡沫`

- [Discourse](https://www.discourse.org/) 外掛：18 禁燈箱
- Author：mbiistscther / Debby

此為 [濡沫論壇](https://community.lezismore.org/) 的 18 禁燈箱。

原製作者： [Hazel](https://github.com/Hazelwu2/discourse-plugin-adult-warning)


![](https://i.imgur.com/IGgVOkG.jpg)

<br/>

## 🛠 Using:

- [SweetAlert2](https://sweetalert2.github.io/)
- jquery.cookie.js

<br/>

## 📝 Update


- **2020.10.11**
    因 Discourse 更新，導致抓不到 `sweetalert2.js` 檔案，所以這邊做修正：

    1. 在 `plugin.rb` 引入`sweetalert2.js` 和 `jquery.cookie.js` 檔案。
    2. 並同樣在  `plugin.rb` 引入此 popup 樣式，如需要修改樣式請在以下檔案修改：
    `assets/stylesheets/adult-warning.scss`

<br/>