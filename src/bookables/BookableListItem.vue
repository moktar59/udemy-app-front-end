<template>
    <div>
        <h1>{{ itemTitle }}</h1>
        <div>{{ itemContent}}</div>
    </div>
</template>

<script>
export default {
  props: { itemTitle: String, itemContent: String, price: Number }
}
</script>
