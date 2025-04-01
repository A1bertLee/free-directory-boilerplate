import { defineType } from 'sanity'

export default defineType({
  name: 'code',
  title: '代码',
  type: 'object',
  fields: [
    {
      name: 'language',
      title: '语言',
      type: 'string',
    },
    {
      name: 'filename',
      title: '文件名',
      type: 'string',
    },
    {
      name: 'code',
      title: '代码',
      type: 'text',
    },
  ],
}) 