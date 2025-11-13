# PC急救助手

一款帮助用户诊断和解决电脑故障的Web应用，可通过手机浏览器访问。

## 功能特点

- **引导式诊断**：通过一系列是/否或选择题，逐步缩小问题范围
- **结果导向**：提供明确的故障可能性和解决建议
- **通俗易懂**：使用普通用户能理解的语言描述技术问题
- **响应式设计**：适配手机端使用，方便随时诊断

## 核心功能

1. **故障分类诊断**：
   - 不开机、不通电
   - 蓝屏（BSOD）
   - 运行卡顿、反应慢
   - 无法上网
   - 没有声音
   - 电脑过热、噪音大
   - 其他问题

2. **智能诊断流程**：
   - 基于决策树的诊断逻辑
   - 多步骤引导式问题排查
   - 实时进度显示
   - 针对性的解决建议

3. **结果展示**：
   - 故障可能性排序
   - 详细的解决建议
   - 送修时的专业表述建议

## 技术架构

- **前端**：HTML5 + CSS3 + JavaScript
- **数据结构**：JSON格式的决策树
- **响应式**：移动端优先设计
- **无需后端**：纯前端应用，可直接部署

## 文件结构

```
pc-diagnosis-app/
├── index.html          # 主页面
├── styles.css          # 样式文件
├── app.js              # 应用逻辑
├── decision-tree.json  # 诊断决策树数据
└── README.md           # 说明文档
```

## 使用方法

1. 将所有文件部署到Web服务器或直接在本地打开[index.html](file:///C:/Users/lwp/Desktop/pc-diagnosis-app/index.html)
2. 通过手机浏览器访问应用
3. 根据引导选择电脑故障现象
4. 按照诊断流程逐步排查
5. 查看最终诊断结果和建议

## 打包为Android APK

您可以将此Web应用打包为Android APK文件，直接复制到手机上安装使用。

### 方法一：使用PWABuilder（推荐）

1. 参考 [QUICK_APK_PACKAGING.md](file:///C:/Users/lwp/Desktop/lwp-1/my-aweome-app/pc-diagnosis-app/QUICK_APK_PACKAGING.md) 文件中的详细说明
2. 访问 [PWABuilder](https://www.pwabuilder.com/)
3. 按照指南操作完成APK生成

### 方法二：使用在线工具

1. 访问 [AppsGeyser](https://www.appsgeyser.com/)
2. 注册账户并按照向导操作
3. 输入您的Web应用URL完成打包

## 扩展开发

### 添加新的故障类型

1. 在[decision-tree.json](file:///C:/Users/lwp/Desktop/pc-diagnosis-app/decision-tree.json)的`root`节点`options`数组中添加新的选项
2. 在`nodes`对象中定义新的问题节点
3. 在`results`对象中定义诊断结果

### 修改诊断流程

1. 编辑[decision-tree.json](file:///C:/Users/lwp/Desktop/pc-diagnosis-app/decision-tree.json)中的节点内容
2. 调整问题顺序或选项
3. 更新诊断建议内容

### 自定义样式

1. 修改[styles.css](file:///C:/Users/lwp/Desktop/pc-diagnosis-app/styles.css)文件
2. 调整颜色、字体、间距等样式属性
3. 优化移动端显示效果

## 技术建议

### 数据结构优化

- 将所有问题和诊断路径构建成决策树JSON文件，便于管理和更新
- 为每一种可能的最终结果建立结果库，根据用户路径匹配并弹出

### 结果库建设

- 为每种故障建立详细的结果描述
- 包含故障可能性排序和针对性建议
- 提供送修时的专业表述模板

### 学习功能（未来扩展）

- 添加用户反馈功能，收集诊断结果准确性
- 基于用户反馈优化决策树
- 实现智能推荐诊断路径

## 浏览器兼容性

- Chrome for Android/iOS
- Safari Mobile
- Firefox for Android
- Edge Mobile

## 开发者说明

此应用采用纯前端技术实现，无需后端支持，可直接部署在任何静态文件服务器上。核心逻辑通过JavaScript操作DOM实现页面切换和诊断流程控制，诊断数据存储在JSON文件中便于维护和扩展。

## 许可证

MIT License