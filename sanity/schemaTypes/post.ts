import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'post',
  title: '文章',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: '标题',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: '路径',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: '内容',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: '普通', value: 'normal'},
            {title: '标题1', value: 'h1'},
            {title: '标题2', value: 'h2'},
            {title: '标题3', value: 'h3'},
            {title: '标题4', value: 'h4'},
            {title: '标题5', value: 'h5'},
            {title: '标题6', value: 'h6'},
            {title: '引用', value: 'blockquote'},
          ],
          marks: {
            decorators: [
              {title: '加粗', value: 'strong'},
              {title: '斜体', value: 'em'},
              {title: '下划线', value: 'underline'},
              {title: '删除线', value: 'strike-through'},
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: '链接',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        {
          type: 'code',
        },
      ],
    }),
    defineField({
      name: 'excerpt',
      title: '摘要',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'coverImage',
      title: '封面图片',
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
    defineField({
      name: 'date',
      title: '发布日期',
      type: 'datetime',
    }),
    defineField({
      name: 'author',
      title: '作者',
      type: 'reference',
      to: [{ type: 'author' }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'coverImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `作者: ${author}`}
    },
  },
}) 