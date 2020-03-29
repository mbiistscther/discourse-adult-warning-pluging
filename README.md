# discourse-plugin-adult-warning

- Discourse 外掛：18 禁燈箱
- Author：mbiistscther / Debby

此為 [濡沫論壇](https://community.lezismore.org/) 的 18 禁燈箱。

原製作者： [Hazel](https://github.com/Hazelwu2/discourse-plugin-adult-warning)


![](https://i.imgur.com/IGgVOkG.jpg)

---
#### 🚨 注意 ：
此 plugin 不具有 CSS 樣式，需在 Discourse 後台 CSS 修改樣式。
想要圖上的樣式需要複製以下的 CSS 樣式：

``` css
/* 18 禁燈箱 */

.swal2-container.swal2-shown {
    background-color: rgba(0,0,0,.8) !important;
}

.swal2-popup.ha-popup {
  border-radius: 0;
  -webkit-box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.65);
  box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.65);
  background-image:url( 'https://i.imgur.com/beD1CBS.png' );
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 2rem;
  letter-spacing: 0.02rem;
}
.swal2-popup.ha-popup p {
  line-height: 1.7rem;
}
.swal2-popup.ha-popup .ha-actions button {
  font-family: 'Noto Serif TC', serif;
  letter-spacing: 0.02rem;
  margin: 0.5rem;
  box-shadow: 0 3px 6px rgba(209,70,70,0.4);

}
.swal2-popup.ha-popup button:hover, .ha-popup button:focus {
  box-shadow: 0 1px 4px rgba(124,25,35,0.5)
}
.swal2-popup .swal2-title.ha-title {
  font-size: 1.7rem;
  font-weight: 900;
  color: rgba(166,66,66,1);
  transform: translateX(7px);
}
.ha-content > #swal2-content {
  font-size: 1rem;
  text-align: left;
  display: flex !important;
  align-items: center;
}

.ha-actions .swal2-cancel,
.ha-actions .swal2-confirm{
  font-size: .9rem !important;
  border-radius: 0 !important;
  transition: all 0.2s !important;
}


@media screen and (max-width: 767px) {
  .swal2-popup.ha-popup .ha-content {
    background-position: 60% center;
  }
  .swal2-popup.ha-popup .ha-content > #swal2-content {
    flex-direction: column;
    text-align: center;
  }
  .swal2-popup.ha-popup .ha-actions .swal2-cancel {
    margin-bottom: 10px;
  }
}


```