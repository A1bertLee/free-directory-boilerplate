import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'category',
  title: '分类',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: '名称',
      type: 'localizedString',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: '路径',
      type: 'slug',
      options: {
        source: 'name.en',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'group',
      title: '组',
      type: 'reference',
      to: [{ type: 'group' }],
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