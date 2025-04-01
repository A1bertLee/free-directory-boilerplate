export const metadata = {
    title: 'Sanity Studio',
    description: '内容管理系统',
  }

  // 为Studio页面创建自定义布局，确保不与Sanity UI产生冲突
  export default function StudioLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="zh">
        <body style={{ margin: 0, padding: 0 }}>
          {children}
        </body>
      </html>
    );
  }