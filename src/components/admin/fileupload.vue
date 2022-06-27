<template>
  <!-- <div
    class="bg-gray-400/30 w-full z-50 fixed top-0 left-0 right-0 backdrop-blur-md grid h-screen place-items-center"
  > -->
  <div
    :class="imageData != null ? 'border-gray-300' : ' border-transparent'"
    class="border px-4 py-4 w-full mt-2 rounded-md"
  >
    <div class="w-full py-2">
      <input
        id="file"
        class="hidden rounded-lg"
        type="file"
        @change="previewImage"
        accept="image/*"
      />
    </div>

    <div v-if="imageData" class="w-full rounded-md px-2 py-2">
      <div class="">
        <div>
          <label class="mt-2">Directory</label><br />
          <select v-model="selected" class="inputs">
            <option>postimagearchive</option>
            <option>archivegeneral</option>
          </select>
        </div>

        <div class="w-full">
          <label class="mt-2">Generated Filename</label><br />
          <input type="text" :value="generatedval" class="inputs" />
        </div>

        <div class="w-full">
          <label class="mt-2">Image link</label><br />
          <input type="text" :value="generatedurl" class="inputs" />
        </div>
      </div>
    </div>
    <div v-if="imageData != null">
      <img class="preview" :src="picture" />
      <br />
      <button
        :class="selected == '' ? 'bg-red-500' : 'bg-green-500 hover:shadow-md'"
        class="border-sm text-white px-6 py-1.5 rounded-md"
        @click="onUpload"
        :disabled="selected == '' ? true : false"
      >
        <span v-html="uploadbuttontext"></span>
      </button>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { fileNameGen } from "../../../src/func";
export default {
  props: {
    messageboxShow: {
      show: false,
      id: null,
      text: null,
    },
  },
  isDisabled: false,
  name: "Upload",
  data() {
    return {
      imageData: null,
      picture: null,
      uploadValue: 0,
      generatedval: "",
      generatedurl: "",
      selected: "",
      uploadbuttontext: "Please select directory!",
    };
  },
  watch: {
    imageData(newa) {
      this.generatedval = uuidv4() + fileNameGen(this.imageData.name);
    },
    selected(newa) {
      this.uploadbuttontext = "Upload";
    },
    generatedurl(newa) {
      var copyText = document.getElementById("myInput");

      /* Copy the text inside the text field */
      navigator.clipboard.writeText(this.generatedurl);

      /* Alert the copied text */
    },
  },
  methods: {
    previewImage(event) {
      this.uploadValue = 0;
      this.picture = null;
      this.imageData = event.target.files[0];
    },

    onUpload() {
      const storage = getStorage();
      const fileurl = this.selected + "/" + this.generatedval;
      const storageRef = ref(storage, fileurl);
      uploadBytes(storageRef, this.imageData).then((snapshot) => {
        getDownloadURL(ref(storage, fileurl))
          .then((url) => {
            this.generatedurl = url;
            this.uploadbuttontext =
              "<i class='far fa-check'></i> Link copied to clipboard";
          })
          .catch((error) => {
            console.log(error);
          });
      });
    },
  },
};
</script>
<style scoped>
.z-799 {
  z-index: 7999999999;
}

input#file {
  display: inline-block;
  width: 100%;
  padding: 30px 0 0 0;
  height: 30px;
  overflow: hidden;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  background: url("https://cdn1.iconfinder.com/data/icons/hawcons/32/698394-icon-130-cloud-upload-512.png")
    center center no-repeat #e4e4e4;

  background-size: 30px 30px;
}
</style>
