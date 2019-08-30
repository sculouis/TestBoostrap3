# bootstrap 3 的vue 組件寫法
* 使用bootstrap-select
* bootstrap 3 datetimepicker，NPM並沒有安裝所以整包原始碼加進本專案
### 客製化components
* input 關於數字千分位
* checkBox
* radioButton
* datetimepicker
* selecter
* Box  --> 專屬頁面區塊
* BreadCrumb -->麵包屑
* NavBar -->導覽列
```  
<div class="error-text"><span class="icon-error icon-error-size"></span>未完成填寫</div>
```
```
<div id="AddVendor" class="remodal remodal-small" data-remodal-id="SelectVendor" role="dialog" aria-labelledby="VendorTitle" aria-describedby="VendorDesc" data-remodal-options='{ "hashTracking": false }'>
    <button data-remodal-action="close" class="remodal-close" aria-label="Close"></button>
    <div class="col-sm-12"><span id="VendorTitle" class="popup-title-center">供應商選擇</span></div>
    <div class="popup-box">
        <div style="padding-bottom:25px">
            <div class="row">
                <div class="col-sm-3 content-box">
                    <div class="title">身分證字號/統一編號</div>
                    <input type="text" id="VendorIDInquiredInput" class="input" placeholder="請輸入編號">
                </div>
                <div class="col-sm-3 content-box">
                    <div class="title"></div>
                    <div class="area-1">
                        <div class="area-btn-right-1">
                            <a id="VendorDelete" class="btn-02-gray btn-left">
                                <div class="glyphicon glyphicon-remove bt-icon-size"></div>清除
                            </a>
                        </div>
                        <div class="area-btn-right-1">
                            <a id="VendorInquired" class="btn-02-blue btn-left">
                                <div class="icon-search bt-icon-size"></div>查詢
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-12 text-left border">
            <div class="col-sm-12" id="VendorListBox" style="display:none">
                <div class="popup-tr-title">
                    <ul class="w100">
                        <li>
                            <label class="w100 label-box">
                                @{
                                    switch (Model)
                                    {
                                        case EnumFormKind.BPC:
                                        case EnumFormKind.BPA:
                                        case EnumFormKind.BPR:
                                        case EnumFormKind.PR:
                                        case EnumFormKind.QO:
                                        case EnumFormKind.PO:
                                        case EnumFormKind.RT:
                                        case EnumFormKind.RTR:
                                            <div class="table-box w5">&nbsp;</div>
                                            <div class="table-box w15">供應商編號</div>
                                            <div class="table-box w30">供應商名稱</div>
                                            <div class="table-box w20">身分證號/統一編號</div>
                                            <div class="table-box w15">自評表有效日期</div>
                                            <div class="table-box w15">承諾書有效日期</div>
                                            break;
                                        case EnumFormKind.EPP:
                                        case EnumFormKind.EPO:
                                        case EnumFormKind.ENP:
                                        case EnumFormKind.EEA:
                                            <div class="table-box w5">&nbsp;</div>
                                            <div class="table-box w15">供應商編號</div>
                                            <div class="table-box w30">供應商名稱</div>
                                            <div class="table-box w20">身分證號/統一編號</div>
                                            <div class="table-box w20">地址名稱</div>
                                            break;
                                        case EnumFormKind.ESP:
                                            <div class="table-box w5">&nbsp;</div>
                                            <div class="table-box w15">供應商編號</div>
                                            <div class="table-box w30">供應商名稱</div>
                                            <div class="table-box w20">身分證號/統一編號</div>
                                            <div class="table-box w20">地址名稱</div>
                                            <div class="table-box w10">員工編號</div>
                                            break;
                                    }
                                }
                            </label>
                        </li>
                    </ul>
                </div>
                <div class="popup-tbody h160 overflow-auto">
                    <li id="li_tmp" style="display:none">
                        <label class="w100 label-box">
                            @switch (Model)
                            {
                                case EnumFormKind.ESP:
                                    <div class="table-box w5">
                                        <input type="radio" value="" name="VendorSelect" />
                                    </div>
                                    <div class="table-box w15"></div>
                                    <div class="table-box w30"></div>
                                    <div class="table-box w20"></div>
                                    <div class="table-box w20"></div>
                                    <div class="table-box w10"></div>
                                    break;
                                case EnumFormKind.BPC:
                                case EnumFormKind.BPA:
                                case EnumFormKind.BPR:
                                case EnumFormKind.PR:
                                case EnumFormKind.QO:
                                case EnumFormKind.PO:
                                case EnumFormKind.RT:
                                case EnumFormKind.RTR:
                                    <div class="table-box w5">
                                        <input type="radio" value="" name="VendorSelect" />
                                    </div>
                                    <div class="table-box w15"></div>
                                    <div class="table-box w30"></div>
                                    <div class="table-box w20"></div>
                                    <div class="table-box w15"></div>
                                    <div class="table-box w15"></div>
                                    break;
                                default:
                                    <div class="table-box w5">
                                        <input type="radio" value="" name="VendorSelect" />
                                    </div>
                                    <div class="table-box w15"></div>
                                    <div class="table-box w30"></div>
                                    <div class="table-box w20"></div>
                                    <div class="table-box w20"></div>
                                    break;
                            }
                        </label>
                    </li>
                    <ul class="w100" id="VendorList"></ul>
                </div>
            </div>
        </div>
    </div>
    <div class="col-sm-12">
        <div class="popup-btn-row">
            <a data-remodal-action="cancel" class="remodal-cancel-btn">取消</a>
            <a data-remodal-action="confirm" id="VendorConfirm" class="remodal-confirm-btn">帶入</a>
        </div>
    </div>
</div>
```
