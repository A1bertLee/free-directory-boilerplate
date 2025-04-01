import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'author',
  title: '作者',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: '名称',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'picture',
      title: '头像',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: '替代文本',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'picture',
    },
  },
}) 