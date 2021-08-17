<template>
<div>
    <div class="modal d-none" ref="lightbox">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <slot name="light-box-header"/>
                </div>
                <div class="modal-body">
                    <slot name="light-box-body"/>
                </div>
            <div class="modal-footer">
                <slot name="light-box-footer"/>
                <button type="button" @click="closeModal" class="btn">No, Cancel</button>
            </div>
            </div>
        </div>
    </div>
    <div class="modal-backdrop fade d-none" ref="backdrop"></div>
    </div>
</template>

<script>
export default {
    name: "LightBox",
    methods: {
        closeModal() {
            this.$refs.lightbox.classList.remove("d-inline");
            this.$refs.backdrop.classList.remove("d-inline");
            this.$refs.lightbox.classList.add("d-none");
            this.$refs.backdrop.classList.add("d-none");

        },
        openModal() {
            this.$refs.lightbox.classList.remove("d-none");
            this.$refs.backdrop.classList.remove("d-none");
            this.$refs.lightbox.classList.add("d-inline");
            this.$refs.backdrop.classList.add("d-inline");
        }
    }
}
</script>

<style>
.modal-backdrop
{
    opacity:0.5 !important;
}
</style>