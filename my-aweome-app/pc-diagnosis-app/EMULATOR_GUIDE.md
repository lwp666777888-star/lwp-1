# 在Android模拟器上运行PC急救助手

本指南将详细介绍如何将PC急救助手Web应用运行到Android模拟器上。

## 方案一：打包成APK（推荐）

### 使用PWABuilder在线工具（最简单）

1. **部署应用到Web服务器**
   - 将所有应用文件上传到GitHub Pages、Netlify或Vercel
   - 获取应用的公开URL（例如：https://your-username.github.io/pc-rescue-helper/）

2. **生成APK**
   - 访问 [PWABuilder](https://www.pwabuilder.com/)
   - 在输入框中粘贴您的应用URL
   - 点击"Start"按钮
   - 等待分析完成后，点击"Build PWA"按钮
   - 选择"Android"选项卡
   - 点击"Download"按钮下载APK包

3. **安装到模拟器**
   - 启动Android Studio中的模拟器
   - 将下载的APK文件拖拽到模拟器窗口
   - 或使用adb命令安装：
     ```
     adb install pc-rescue-helper.apk
     ```

### 使用AppsGeyser在线工具

1. 访问 [AppsGeyser](https://www.appsgeyser.com/)
2. 注册或登录账户
3. 选择"Website"选项
4. 输入您的Web应用URL
5. 按照向导完成应用配置
6. 生成并下载APK文件
7. 安装到模拟器

## 方案二：本地构建APK

### 环境准备

1. 安装 [Android Studio](https://developer.android.com/studio)
2. 安装Android SDK
3. 确保已配置ANDROID_HOME环境变量

### 构建步骤

1. **创建Android项目**
   - 打开Android Studio
   - 创建新的项目（Empty Activity）
   - 项目名称：PCRescueHelper
   - 包名：com.pcrescuehelper.app

2. **准备Web文件**
   - 将以下文件复制到 `app/src/main/assets/www/` 目录：
     - index.html
     - styles.css
     - app.js
     - decision-tree.json
     - styles.css

3. **配置MainActivity.java**
   - 修改 `app/src/main/java/com/pcrescuehelper/app/MainActivity.java`
   - 使用WebView加载本地HTML文件：
     ```java
     webView.loadUrl("file:///android_asset/www/index.html");
     ```

4. **配置AndroidManifest.xml**
   - 确保声明了INTERNET权限
   - 设置应用图标和标签

5. **构建APK**
   - 点击"Build" → "Build Bundle(s) / APK(s)" → "Build APK"
   - 等待构建完成

6. **安装到模拟器**
   - 启动Android模拟器
   - 使用adb安装APK：
     ```
     adb install app-debug.apk
     ```

## 方案三：在模拟器浏览器中直接运行

### 方法一：通过本地服务器

1. 在PC上启动本地服务器：
   ```bash
   # 如果安装了Python
   python -m http.server 8000
   
   # 如果安装了Node.js
   npx http-server
   ```

2. 在Android模拟器中：
   - 打开浏览器
   - 访问 `http://[您的PC IP地址]:8000`
   - 例如：`http://192.168.1.100:8000`

### 方法二：传输文件到模拟器

1. 将HTML文件传输到模拟器：
   ```bash
   adb push index.html /sdcard/Download/
   adb push styles.css /sdcard/Download/
   adb push app.js /sdcard/Download/
   adb push decision-tree.json /sdcard/Download/
   ```

2. 在模拟器浏览器中打开：
   - 打开浏览器
   - 访问 `file:///sdcard/Download/index.html`

## 推荐流程

对于快速测试，推荐使用以下流程：

1. **使用在线工具生成APK**
   - 访问PWABuilder
   - 输入应用URL
   - 下载APK文件

2. **安装到模拟器**
   - 启动Android Studio模拟器
   - 将APK文件拖拽到模拟器窗口
   - 点击安装

3. **测试应用**
   - 启动应用
   - 测试各项功能
   - 验证诊断流程是否正常

## 常见问题解决

### 1. APK安装失败
- 确保APK文件完整
- 检查模拟器Android版本兼容性
- 尝试重新生成APK

### 2. 应用无法启动
- 检查AndroidManifest.xml配置
- 确保MainActivity正确配置
- 查看Logcat日志排查错误

### 3. 功能异常
- 检查JavaScript是否启用
- 确保文件路径正确
- 验证WebView设置

### 4. 网络请求失败
- 确保声明了INTERNET权限
- 检查模拟器网络连接
- 验证URL可访问性

## 性能优化建议

1. **减小APK大小**
   - 压缩图片资源
   - 移除不必要的文件
   - 启用代码混淆

2. **提升加载速度**
   - 优化HTML/CSS/JS文件
   - 启用缓存机制
   - 减少HTTP请求

3. **改善用户体验**
   - 添加启动画面
   - 优化响应式设计
   - 提供离线支持

通过以上方法，您就可以成功将PC急救助手应用运行到Android模拟器上了。