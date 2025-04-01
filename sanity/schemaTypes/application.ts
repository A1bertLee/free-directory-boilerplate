import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'application',
  title: '应用',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: '名称',
      type: 'string',
      validation: Rule => Rule.required().max(32),
    }),
    defineField({
      name: 'description',
      title: '描述',
      type: 'text',
      validation: Rule => Rule.max(128),
    }),
    defineField({
      name: 'link',
      title: '链接',
      type: 'url',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'types',
      title: '类型',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'appType' }] }],
    }),
    defineField({
      name: 'featured',
      title: '精选',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'status',
      title: '状态',
      type: 'string',
      options: {
        list: [
          { title: '审核中', value: 'reviewing' },
          { title: '拒绝', value: 'rejected' },
          { title: '通过', value: 'approved' },
        ],
        layout: 'radio',
      },
      initialValue: 'reviewing',
    }),
    defineField({
      name: 'reason',
      title: '原因',
      type: 'string',
      options: {
        list: [
          { title: '请上传更好的logo图片', value: 'rejected: please upload a better logo image' },
          { title: '请上传更好的封面图片', value: 'rejected: please upload a better cover image' },
          { title: '这个独立应用似乎尚未准备好', value: 'rejected: this indie app seems not ready?' },
          { title: '仅支持自建独立应用', value: 'rejected: only support self-built indie app' },
        ],
      },
      hidden: ({ document }) => document?.status !== 'rejected',
    }),
    defineField({
      name: 'image',
      title: 'Logo图片',
      type: 'image',
    }),
    defineField({
      name: 'cover',
      title: '封面图片',
      type: 'image',
    }),
    defineField({
      name: 'user',
      title: '用户',
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
      subtitle: 'status',
      media: 'image',
    },
  },
}) 