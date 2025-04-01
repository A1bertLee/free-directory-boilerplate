import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'user',
  title: '用户',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: '名称',
      type: 'string',
    }),
    defineField({
      name: 'id',
      title: '系统ID',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: '邮箱',
      type: 'string',
    }),
    defineField({
      name: 'avatar',
      title: '头像',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: '链接',
      type: 'url',
    }),
    defineField({
      name: 'date',
      title: '注册日期',
      type: 'datetime',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'email',
    },
  },
}) 