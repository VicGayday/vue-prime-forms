<template>
  <div v-if="isEditing" v-focustrap>
    <InputText
      v-model="url"
      type="text"
      class="p-inputtext-lg"
      placeholder="https://"
      @blur="fetchLinkTitle"
      autofocus
    />
  </div>

  <div v-else class="link-wrapper">
   <a :href="linkForEdit" target="_blank">{{ url }}</a>
   <i v-if="title" class="pi pi-pencil" @click="editUrl"></i>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import axios from "axios";
import InputText from 'primevue/inputtext';

export default defineComponent({
  name: "InputLink",
  components: {
    InputText
  },
  setup() {
   const isEditing = ref(true);
   const title = ref("");
   const url = ref("");
   const linkForEdit = ref("");

  function editUrl () {
    url.value = linkForEdit.value;
    isEditing.value = true;

  }

   const fetchLinkTitle = async() => {
    try {
      let finalUrl = url.value;
    if (!/^https?:\/\//i.test(finalUrl)) {
      finalUrl = `http://${finalUrl}`;
    }
      const response = await axios.get('http://localhost:3000/proxy', {
      params: {
        url: finalUrl,
      },
    });
      const html = await response.data.toString();
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const titleElement = doc.querySelector("head > title");
      const pageTitle = titleElement ? titleElement.textContent : "";
      title.value = pageTitle;
      url.value = pageTitle;
      linkForEdit.value = finalUrl;
      isEditing.value = false;
    } catch (error) {
      console.log("Error while fetching page title:", error);
      title.value = "";
    }
   }

   return {
    isEditing,
    url,
    title,
    editUrl,
    linkForEdit,
    fetchLinkTitle,
   }
  }
})
</script>

<style scoped>

.link-wrapper {
  display: flex;
  justify-content: space-evenly;
  margin-top: 10px;;
  min-width: 15%;
}

</style>
