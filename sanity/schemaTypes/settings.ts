import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'settings',
  title: '网站设置',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: '网站标题',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: '副标题',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: '网站描述',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: '普通', value: 'normal'},
          ],
          marks: {
            decorators: [
              {title: '加粗', value: 'strong'},
              {title: '斜体', value: 'em'},
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
      ],
    }),
    defineField({
      name: 'footer',
      title: '页脚',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    }),
    defineField({
      name: 'ogImage',
      title: '社交媒体图片',
      type: 'image',
      description: '当分享网站链接时显示的图片',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: '替代文本',
        },
        {
          name: 'metadataBase',
          type: 'string',
          title: '元数据基础URL',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
    },
  },
}) 