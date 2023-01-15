<template>
    <div class="app-container">
        <side-preview></side-preview>
        <graph-editor></graph-editor>
    </div>
</template>

<script>
import SidePreview from '@/components/SidePreview'
import GraphEditor from '@/components/GraphEditor'
export default({
    components: {
        SidePreview,
        GraphEditor,
    }
})
</script>