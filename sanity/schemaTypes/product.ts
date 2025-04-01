import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'product',
  title: '产品',
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
      name: 'desc',
      title: '描述',
      type: 'localizedString',
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
        },
        {
          type: 'image',
        },
        {
          type: 'code',
        },
      ],
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
    }),
    defineField({
      name: 'coverImage',
      title: '封面图片',
      type: 'image',
    }),
    defineField({
      name: 'category',
      title: '分类',
      type: 'reference',
      to: [{ type: 'category' }],
    }),
    defineField({
      name: 'tags',
      title: '标签',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'tag' }] }],
    }),
    defineField({
      name: 'guides',
      title: '指南',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'guide' }] }],
    }),
    defineField({
      name: 'featured',
      title: '精选',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'visible',
      title: '可见',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'website',
      title: '网站',
      type: 'url',
    }),
    defineField({
      name: 'github',
      title: 'GitHub',
      type: 'url',
    }),
    defineField({
      name: 'priceLink',
      title: '价格链接',
      type: 'url',
    }),
    defineField({
      name: 'price',
      title: '价格',
      type: 'string',
      options: {
        list: [
          { title: '免费', value: 'Free' },
          { title: '免费和付费', value: 'Free & Paid' },
          { title: '付费', value: 'Paid' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'source',
      title: '来源',
      type: 'string',
    }),
    defineField({
      name: 'submitter',
      title: '提交者',
      type: 'reference',
      to: [{ type: 'user' }],
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
      subtitle: 'category.name.en',
      media: 'logo',
    },
  },
}) 