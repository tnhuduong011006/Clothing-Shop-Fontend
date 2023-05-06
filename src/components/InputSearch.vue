<script>

export default {
  data() {
    return {
      byName: 'byName'
    }
  },
  props: {
    modelValue: { type: String, default: "" },
  },
  emits: ["submit", "update:modelValue"],
  methods: {
    setRouteName() {
      if (this.$route.path.split('/')[1] == 'admin'){
        this.byName = 'adminByName'
      }
    },
    updateModelValue(e) {
      this.$emit("update:modelValue", e.target.value);
    },
    submit() {
      this.$emit("submit");
    },
  },
  mounted () {
    this.setRouteName();
  }
}

</script>
<template>
    <div class="flex justify-end p-8 gap-2">
      <input id="inputText" type="text" class="rounded border-2 border-gray-200 w-1/3 "
        :value="modelValue"
        @input="updateModelValue"
      />

      <router-link :to="{ name: this.byName, params: { name: modelValue }}" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button" >
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" /> Tìm kiếm
      </router-link>
    </div>
</template>