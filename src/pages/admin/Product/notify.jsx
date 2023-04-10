import React from 'react';

export default function Notify({ notify, myCallBack }) {
    const handleSelect = (e) => {
        const id = e.target.id;
        switch (id) {
            case 'po':
                // console.log(notify);
                // call api xóa obj trong notify
                switch (notify.feature) {
                    case 'product':
                        // console.log('product');
                        break;
                    case 'category':
                        // console.log('category');
                        break;
                    case 'user':
                        // console.log('user');
                        break;
                    default:
                        break;
                }
                myCallBack({ ...notify, visible: false, message: '', obj: {} });
                break;
            case 'ne':
                myCallBack({ ...notify, visible: false, message: '', obj: {} });
                break;
            default:
                break;
        }
    };
    if (notify.visible) {
        return (
            <div className="notify">
                <div className="box-notify">
                    <div className="notify-box-top">{notify.message}</div>
                    <div className="notify-box-bot">
                        <div
                            id="po"
                            className="notify-btn notify-po"
                            onClick={handleSelect}
                        >
                            Có
                        </div>
                        <div
                            id="ne"
                            className="notify-btn notify-ne"
                            onClick={handleSelect}
                        >
                            Không
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return;
    }
}
