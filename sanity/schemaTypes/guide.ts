import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'guide',
  title: '指南',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: '名称',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: '路径',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: '摘要',
      type: 'text',
    }),
    defineField({
      name: 'link',
      title: '链接',
      type: 'url',
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
      title: 'name',
      subtitle: 'slug.current',
    },
  },
}) 