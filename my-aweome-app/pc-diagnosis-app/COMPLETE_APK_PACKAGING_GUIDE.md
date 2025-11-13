# 完整APK打包指南

本指南将帮助您将PC急救助手Web应用完整打包成Android APK文件，实现直接复制到手机安装的功能。

## 第一步：准备工作

### 1.1 确认项目文件完整
确保以下文件存在于项目根目录：
- [index.html](file:///C:/Users/lwp/Desktop/lwp-1/my-aweome-app/pc-diagnosis-app/index.html)
- [styles.css](file:///C:/Users/lwp/Desktop/lwp-1/my-aweome-app/pc-diagnosis-app/styles.css)
- [app.js](file:///C:/Users/lwp/Desktop/lwp-1/my-aweome-app/pc-diagnosis-app/app.js)
- [decision-tree.json](file:///C:/Users/lwp/Desktop/lwp-1/my-aweome-app/pc-diagnosis-app/decision-tree.json)
- [manifest.json](file:///C:/Users/lwp/Desktop/lwp-1/my-aweome-app/pc-diagnosis-app/manifest.json)
- [icon.svg](file:///C:/Users/lwp/Desktop/lwp-1/my-aweome-app/pc-diagnosis-app/icon.svg)

### 1.2 生成PNG图标文件
应用需要PNG格式的图标文件才能正确打包为APK。

#### 方法一：使用在线转换工具（推荐）
1. 访问 https://convertio.co/svg-png/
2. 上传项目中的 [icon.svg](file:///C:/Users/lwp/Desktop/lwp-1/my-aweome-app/pc-diagnosis-app/icon.svg) 文件
3. 选择目标尺寸：
   - 第一次转换：选择 192x192 像素，下载后重命名为 `icon-192x192.png`
   - 第二次转换：选择 512x512 像素，下载后重命名为 `icon-512x512.png`
4. 将两个PNG文件放置在项目根目录

#### 方法二：使用图像编辑软件
1. 使用Photoshop、GIMP或其他图像编辑软件打开 [icon.svg](file:///C:/Users/lwp/Desktop/lwp-1/my-aweome-app/pc-diagnosis-app/icon.svg)
2. 导出为PNG格式：
   - 第一次导出：设置尺寸为192x192，保存为 `icon-192x192.png`
   - 第二次导出：设置尺寸为512x512，保存为 `icon-512x512.png`

## 第二步：本地测试应用

在打包前，请确保应用能正常运行。

### 2.1 使用Python启动本地服务器（推荐）
如果您的系统已安装Python：

1. 在项目根目录按住Shift键，右键选择"在此处打开PowerShell窗口"
2. 运行以下命令启动服务器：
   ```bash
   python -m http.server 8000
   ```
3. 在浏览器中访问 `http://localhost:8000` 测试应用

### 2.2 使用Node.js启动本地服务器
如果您的系统已安装Node.js：

1. 在项目根目录按住Shift键，右键选择"在此处打开PowerShell窗口"
2. 运行以下命令启动服务器：
   ```bash
   npx http-server
   ```
3. 在浏览器中访问显示的地址测试应用

## 第三步：使用PWABuilder打包APK

### 3.1 访问PWABuilder
1. 打开浏览器，访问 https://www.pwabuilder.com/
2. 在输入框中输入您的本地服务器地址（如 `http://localhost:8000`）

### 3.2 分析和构建
1. 点击"Start"按钮开始分析应用
2. 等待分析完成后，点击"Build PWA"按钮
3. 选择"Android"选项卡
4. 点击"Download"按钮下载APK构建包

### 3.3 配置APK参数
在下载的构建包中，您可以根据需要修改以下配置：
- 应用名称
- 包名（建议使用：com.pcrescuehelper.app）
- 版本号
- 应用图标（使用之前生成的PNG图标）

## 第四步：生成和安装APK

### 4.1 生成APK
1. 解压下载的构建包
2. 按照说明文档完成APK生成过程
3. 最终将获得一个可安装的APK文件

### 4.2 安装到手机
1. 将APK文件通过USB数据线、蓝牙或云存储等方式传输到Android手机
2. 在手机上找到APK文件并点击安装
3. 如果提示"不允许安装未知来源的应用"：
   - 前往设置 -> 安全 -> 允许未知来源应用安装
   - 或在安装时按提示允许安装

## 第五步：测试和使用

1. 在手机上打开"PC急救助手"应用
2. 测试各项功能是否正常
3. 确认诊断流程能正确运行
4. 验证结果展示是否正常

## 常见问题和解决方案

### 问题1：应用无法启动
**可能原因**：文件未完整复制到服务器目录
**解决方案**：确保所有项目文件都在服务器根目录下

### 问题2：样式显示异常
**可能原因**：CSS文件路径错误或跨域问题
**解决方案**：检查CSS链接是否正确，确保所有文件在同一域下

### 问题3：功能无法使用
**可能原因**：JavaScript加载失败
**解决方案**：检查浏览器控制台错误信息，确保JS文件正确加载

### 问题4：图标显示异常
**可能原因**：PNG图标文件缺失或尺寸不正确
**解决方案**：重新生成符合要求的PNG图标文件

## 注意事项

1. **图标要求**：必须提供192x192和512x512像素的PNG格式图标
2. **权限配置**：生成的APK会自动包含必要的网络权限
3. **兼容性测试**：建议在不同Android版本的设备上测试APK
4. **安全性**：从本地安装APK需要开启"未知来源应用安装"权限

通过以上步骤，您就可以成功将PC急救助手打包成Android APK文件，并直接复制到手机上安装使用了。