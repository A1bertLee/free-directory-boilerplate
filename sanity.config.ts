import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
// import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemaTypes'
import { apiVersion, dataset, projectId } from './sanity/lib/api'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  title: '应用目录管理系统',
  schema: {
    types: schemaTypes,
  },
  plugins: [
    deskTool(),
    // 暂时注释掉 visionTool，解决依赖版本兼容问题
    // visionTool({ defaultApiVersion: apiVersion }),
  ],
})