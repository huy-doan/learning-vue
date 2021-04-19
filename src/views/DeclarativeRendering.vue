<template>

</template>

<script>
import Calculate from "@/components/Calculate";
export default {
  name: "DeclarativeRendering"
  components: {
    Calculate
  },
  computed: {
    count() {
      return "counter";
    }
  }
}
</script>