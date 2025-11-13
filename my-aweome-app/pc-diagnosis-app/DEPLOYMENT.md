# 部署和使用说明

## 项目概述

"PC急救助手"是一个纯前端Web应用程序，可以帮助用户诊断和解决常见的电脑故障问题。该应用采用响应式设计，可以在手机浏览器上方便地使用。

## 部署方式

由于这是一个纯静态网站，您可以采用以下任意一种方式来部署：

### 1. GitHub Pages（推荐）

1. 创建一个GitHub账户（如果还没有的话）
2. 创建一个新的仓库，命名为 `pc-rescue-helper`
3. 将本项目的所有文件上传到该仓库
4. 在仓库设置中启用GitHub Pages功能
5. 通过 `https://yourusername.github.io/pc-rescue-helper` 访问应用

### 2. Netlify

1. 访问 [Netlify](https://www.netlify.com/)
2. 注册或登录账户
3. 将本项目的文件打包成zip文件
4. 直接拖拽zip文件到Netlify仪表板进行部署
5. Netlify会自动生成一个公共URL供您访问

### 3. Vercel

1. 访问 [Vercel](https://vercel.com/)
2. 注册或登录账户
3. 创建新项目并导入本项目的代码
4. Vercel会自动部署并提供访问链接

### 4. 本地测试

如果您想在本地测试应用，需要在您的计算机上安装以下任一软件：

#### 使用Python（如果已安装）
```bash
cd pc-diagnosis-app
python -m http.server 8000
```
然后在浏览器中访问 `http://localhost:8000`

#### 使用Node.js（如果已安装）
```bash
cd pc-diagnosis-app
npx serve
```
然后在浏览器中访问 `http://localhost:5000`

## 使用方法

1. 在手机浏览器中打开应用
2. 选择您遇到的电脑问题类型
3. 根据引导式问题提供更多细节
4. 按照诊断流程逐步排查问题
5. 查看最终的诊断结果和解决建议

## 功能特性

- 引导式诊断：通过一系列是/否或选择题，逐步缩小问题范围
- 结果导向：提供明确的故障可能性和解决建议
- 通俗易懂：使用普通用户能理解的语言描述技术问题
- 响应式设计：专为手机端使用优化的界面

## 自定义和扩展

### 修改诊断内容

所有诊断逻辑都存储在 [decision-tree.json](file:///C:/Users/lwp/Desktop/pc-diagnosis-app/decision-tree.json) 文件中，您可以根据需要修改以下内容：

1. 添加新的故障类型
2. 修改现有问题的选项
3. 更新诊断建议内容
4. 调整诊断流程顺序

### 自定义外观

可以通过编辑 [styles.css](file:///C:/Users/lwp/Desktop/pc-diagnosis-app/styles.css) 文件来自定义应用的外观：

1. 修改主题颜色
2. 调整字体大小和样式
3. 优化移动端显示效果
4. 添加新的UI组件样式

### 扩展功能

您可以在此基础上添加更多高级功能：

1. 用户反馈收集系统
2. 诊断历史记录功能
3. 社区问答集成
4. 专业技术支持联系方式

## 技术支持

如果您在部署或使用过程中遇到任何问题，请参考以下资源：

1. [README.md](file:///C:/Users/lwp/Desktop/pc-diagnosis-app/README.md) - 项目详细说明文档
2. [decision-tree.json](file:///C:/Users/lwp/Desktop/pc-diagnosis-app/decision-tree.json) - 诊断逻辑数据结构
3. 浏览器开发者工具 - 调试前端代码

## 注意事项

1. 本应用仅为诊断辅助工具，不能替代专业技术支持
2. 涉及硬件操作时请谨慎行事，避免造成进一步损坏
3. 对于复杂问题，建议寻求专业维修服务
4. 请定期更新诊断数据库以获得最新的解决方案

## 许可证

本项目采用MIT许可证，您可以自由使用、修改和分发。