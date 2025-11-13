# 项目结构说明

```
pc-diagnosis-app/
│
├── index.html              # 应用主页面
├── styles.css              # 样式文件
├── app.js                  # 应用逻辑和交互处理
├── decision-tree.json      # 诊断决策树数据
├── README.md               # 项目说明文档
├── DEPLOYMENT.md           # 部署和使用说明
├── start.bat               # Windows启动脚本
└── PROJECT_STRUCTURE.md    # 项目结构说明（当前文件）
```

## 文件详细说明

### [index.html](file:///C:/Users/lwp/Desktop/pc-diagnosis-app/index.html)
- 应用的主页面文件
- 包含所有页面结构和UI元素
- 引入CSS和JavaScript文件

### [styles.css](file:///C:/Users/lwp/Desktop/pc-diagnosis-app/styles.css)
- 应用的样式表文件
- 包含响应式设计规则
- 优化移动端显示效果

### [app.js](file:///C:/Users/lwp/Desktop/pc-diagnosis-app/app.js)
- 应用的核心逻辑文件
- 处理用户交互和页面切换
- 控制诊断流程和结果显示

### [decision-tree.json](file:///C:/Users/lwp/Desktop/pc-diagnosis-app/decision-tree.json)
- 诊断决策树数据文件
- 以JSON格式存储所有诊断逻辑
- 便于维护和扩展诊断内容

### [README.md](file:///C:/Users/lwp/Desktop/pc-diagnosis-app/README.md)
- 项目概述和功能说明
- 技术架构和使用方法
- 开发者说明和扩展建议

### [DEPLOYMENT.md](file:///C:/Users/lwp/Desktop/pc-diagnosis-app/DEPLOYMENT.md)
- 详细的部署和使用说明
- 多种部署方式介绍
- 自定义和扩展指南

### [start.bat](file:///C:/Users/lwp/Desktop/pc-diagnosis-app/start.bat)
- Windows系统的启动脚本
- 自动检测环境并启动本地服务器
- 提供友好的用户提示信息

## 设计理念

### 模块化设计
- 将UI、样式、逻辑和数据分离
- 便于维护和团队协作
- 提高代码复用性

### 数据驱动
- 诊断逻辑存储在JSON文件中
- 便于非技术人员维护内容
- 支持动态更新诊断流程

### 响应式优先
- 移动端优先的设计理念
- 适配不同屏幕尺寸
- 提供良好的用户体验

## 扩展建议

### 功能扩展
1. 添加用户反馈收集功能
2. 实现诊断历史记录
3. 集成社区问答系统
4. 添加多语言支持

### 技术优化
1. 使用前端框架（如React、Vue）重构
2. 实现PWA支持，提供离线使用能力
3. 添加数据分析功能
4. 优化性能和加载速度

### 内容完善
1. 持续更新诊断数据库
2. 添加更多故障类型
3. 完善解决方案建议
4. 提供视频教程链接