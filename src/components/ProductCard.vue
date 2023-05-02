<script>
    export default {
        props: {
            product: { type: Object, required: true },
        },
    };
</script>

<template>
    <div>
        <div class="p-1">
            <strong>Tên:</strong>
            {{ product.ten }}
        </div>
        <div class="p-1">
            <strong>Loại:</strong>
            {{ product.loai }}
        </div>
        <div class="p-1">
            <strong>Cửa hàng:</strong>
            {{ product.cua_hang }}
        </div>
        <div class="p-1">
            <strong>Giá:</strong>
            {{ product.gia }}
        </div>
    </div>
</template>