   // sanity/schemaTypes/localizedString.ts
   import { defineType, defineField } from 'sanity'

   const languages = [
     {id: 'en', title: 'English', isDefault: true},
     {id: 'zh', title: '简体中文'},
   ]

   export default defineType({
     name: 'localizedString',
     title: '多语言文本',
     type: 'object',
     fields: languages.map(lang => 
       defineField({
         name: lang.id,
         title: lang.title,
         type: 'string'
       })
     )
   })