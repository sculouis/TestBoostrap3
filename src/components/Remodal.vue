<template>
    <div class="remodal remodal-small remodal-is-initialized remodal-is-closed" data-remodal-id="modal-01" role="dialog" aria-labelledby="modal1Title" aria-describedby="modal1Desc" tabindex="-1">
        <button data-remodal-action="close" class="remodal-close" aria-label="Close"></button>
        <div class="col-sm-12">
            <span id="modal1Title" class="popup-title-left">您即將登出本系統。</span>
        </div>
        <div class="col-sm-12">
            <div class="popup-btn-row">
                <a data-remodal-action="cancel" class="remodal-cancel-btn">取消</a>
                <a data-remodal-action="confirm" class="remodal-confirm-btn">確認</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
    }
}
</script>
