import swal from '../plugin/sweetalert2'
import Cookies from '../plugin/jquery.cookie'
export default {
    name: 'adult-wearning',
    initialize() {
        if ( !Cookies.get('confirm18')) {
            showWarningBox()
        }
        function showWarningBox() {
        const showBoxtext =
        '<p>由於本站生態域內有成人內容，</br>進入濡沫 Lez is more之前，</br>您必須為年滿十八歲之成年人，</br>或您已年滿您所在國家／地區法律所規定之成年最低年齡。</p>';
        swal.fire({
          title: '注意魚雷！',
          html: showBoxtext,
          showCloseButton: false,
          showCancelButton: true,
          focusConfirm: false,
          confirmButtonText: '我了解且已成年',
          confirmButtonAriaLabel: '我了解且已成年',
          confirmButtonColor: '#a64242',
          cancelButtonText: '我未成年',
          cancelButtonAriaLabel: '我未成年',
          cancelButtonColor: '#969696',
          reverseButtons: true,
          allowOutsideClick: false,
          customClass: {
              container: 'ha-container',
              popup: 'ha-popup',
              header: 'ha-header',
              title: 'ha-title',
              closeButton: 'ha-closeBtn',
              content: 'ha-content',
              actions: 'ha-actions',
          }
        }).then((result) => {
          if (result.dismiss === swal.DismissReason.cancel) {
              let redirectSite = "https://lezismore.org/underage/"
              document.location = redirectSite
          } else if (result.value) {
              Cookies.set('confirm18', 'yes',{ expires: 1, path: '/' });;
          }
        })
        };
    }
};