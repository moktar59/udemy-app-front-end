<template>
    <div>
        <bookable-list-item item-title="Cheap Villa" item-content="A very cheap villa" :price="1000"></bookable-list-item>
        <bookable-list-item item-title="Cheap Villa2" item-content="A very cheap villa2" :price="1500"></bookable-list-item>
    </div>
</template>

<script>
import BookableListItem from './BookableListItem'

export default {
  components: {
    BookableListItem
  },
  beforeCreate () {
    console.log("beforeCreate hook called.");
  },
  created() {
    console.log("Created hook called");
  },
  beforeMount () {
    console.log('beforeMount hook called')
  },
  mounted() {
    console.log('Mounted hook called.')
  },
  beforeUpdate() {
    console.log('befoureMount hook called');
  },
  updated() {
    console.log('mounted hook called')
  },
  beforeDestroy() {
    console.log('Destroyed hook called')
  },
  destroyed() {
    console.log('destroyed hook called.')
  }

}
</script>
