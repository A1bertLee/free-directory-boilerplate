   // sanity/schemaTypes/appType.ts
   import { defineField, defineType } from 'sanity'

   export default defineType({
     name: 'appType',
     title: '应用类型',
     type: 'document',
     fields: [
       defineField({
         name: 'name',
         title: '名称',
         type: 'localizedString',
       }),
       defineField({
         name: 'slug',
         title: '路径',
         type: 'slug',
         options: {
           source: 'name.en',
           maxLength: 96,
         },
       }),
       defineField({
         name: 'order',
         title: '排序',
         type: 'number',
       }),
       defineField({
         name: 'date',
         title: '日期',
         type: 'datetime',
       }),
     ],
     preview: {
       select: {
         title: 'name.en',
         subtitle: 'slug.current',
       },
     },
   })