<template>
  <div class="q-pa-xs">
    <q-input
      class="text-h5"
      label="标题"
      v-model="articleInput.title"
      :rules="[val => val.length <= 100 || '文章标题过长，不能超过100！']"
    />
    <q-editor
      v-model="articleInput.content"
      :dense="$q.screen.lt.md"
      :toolbar="[
        [
          {
            label: $q.lang.editor.align,
            icon: $q.iconSet.editor.align,
            fixedLabel: true,
            options: ['left', 'center', 'right', 'justify']
          }
        ],
        ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
        ['token', 'hr', 'link', 'custom_btn'],
        ['fullscreen'],
        [
          {
            label: $q.lang.editor.formatting,
            icon: $q.iconSet.editor.formatting,
            list: 'no-icons',
            options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'code']
          },
          {
            label: $q.lang.editor.fontSize,
            icon: $q.iconSet.editor.fontSize,
            fixedLabel: true,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'size-1',
              'size-2',
              'size-3',
              'size-4',
              'size-5',
              'size-6',
              'size-7'
            ]
          },
          {
            label: $q.lang.editor.defaultFont,
            icon: $q.iconSet.editor.font,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'default_font',
              'arial',
              'arial_black',
              'comic_sans',
              'courier_new',
              'impact',
              'lucida_grande',
              'times_new_roman',
              'verdana'
            ]
          },
          'removeFormat'
        ],
        ['quote', 'unordered', 'ordered', 'outdent', 'indent'],

        ['undo', 'redo'],
        ['viewsource']
      ]"
      :fonts="{
        arial: 'Arial',
        arial_black: 'Arial Black',
        comic_sans: 'Comic Sans MS',
        courier_new: 'Courier New',
        impact: 'Impact',
        lucida_grande: 'Lucida Grande',
        times_new_roman: 'Times New Roman',
        verdana: 'Verdana'
      }"
    />
    <div class="q-pt-xs column">
      <q-checkbox
        color="cyan"
        style="max-width:100px;"
        v-model="articleInput.isOpen"
        label="是否公开"
      />
      <q-btn
        label="保存"
        class="tool-bar text-white"
        style="max-width:100px;"
      />
    </div>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  props: ["article"],
  data() {
    return {
      articleInput: {
        title: "",
        content: "",
        isOpen: true
      }
    };
  },
  mounted() {
    if (this.article != undefined && this.article != null) {
      this.articleInput = this.article;
    }
  }
};
</script>
