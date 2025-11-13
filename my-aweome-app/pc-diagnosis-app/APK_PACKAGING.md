# 将PC急救助手打包成Android APK

本指南将帮助您将现有的Web应用打包成Android APK文件，以便在Android设备上安装和使用。

## 方法一：使用在线工具（推荐）

### PWABuilder（最简单）
1. 访问 [PWABuilder](https://www.pwabuilder.com/)
2. 在输入框中输入您的Web应用URL（如果是本地文件，需要先部署到服务器）
3. 点击"Start"按钮
4. 等待分析完成后，点击"Build PWA"按钮
5. 选择Android选项并按照提示操作
6. 下载生成的APK文件

### AppsGeyser
1. 访问 [AppsGeyser](https://www.appsgeyser.com/)
2. 注册或登录账户
3. 选择"Website"选项
4. 输入您的Web应用URL
5. 按照向导完成应用配置
6. 生成并下载APK文件

## 方法二：使用Android Studio（需要开发环境）

### 环境准备
1. 安装 [Android Studio](https://developer.android.com/studio)
2. 安装Android SDK

### 构建步骤
1. 打开Android Studio
2. 创建新的项目（Empty Activity）
3. 将以下文件复制到 `app/src/main/assets/` 目录：
   - index.html
   - styles.css
   - app.js
   - decision-tree.json
4. 将 [MainActivity.java](file:///C:/Users/lwp/Desktop/pc-diagnosis-app/MainActivity.java) 的内容复制到您的MainActivity.java文件
5. 将 [AndroidManifest.xml](file:///C:/Users/lwp/Desktop/pc-diagnosis-app/AndroidManifest.xml) 的内容复制到您的AndroidManifest.xml文件
6. 在 `app/src/main/res/mipmap/` 目录中添加应用图标
7. 点击"Build" -> "Build Bundle(s) / APK(s)" -> "Build APK"
8. 构建完成后，点击通知中的"locate"链接找到APK文件

## 方法三：使用Cordova/PhoneGap

### 环境准备
1. 安装Node.js
2. 安装Cordova：`npm install -g cordova`

### 构建步骤
1. 创建Cordova项目：
   ```
   cordova create pc-rescue-helper com.pcrescuehelper.app PCRescueHelper
   cd pc-rescue-helper
   ```
2. 添加Android平台：
   ```
   cordova platform add android
   ```
3. 将您的Web文件复制到 `www` 目录
4. 构建APK：
   ```
   cordova build android
   ```

## 注意事项

1. **图标文件**：为了获得最佳效果，请提供192x192和512x512像素的PNG格式图标文件
2. **权限**：确保在AndroidManifest.xml中声明了必要的权限（如INTERNET）
3. **测试**：在发布前，请在不同Android设备上测试APK
4. **签名**：发布到应用商店前需要对APK进行签名

## 文件结构

构建APK时需要的文件结构：
```
app/
├── src/
│   └── main/
│       ├── assets/
│       │   └── www/
│       │       ├── index.html
│       │       ├── styles.css
│       │       ├── app.js
│       │       └── decision-tree.json
│       ├── java/
│       │   └── com/
│       │       └── pcrescuehelper/
│       │           └── app/
│       │               └── MainActivity.java
│       └── AndroidManifest.xml
```

## 故障排除

1. **JavaScript不工作**：确保在WebView设置中启用了JavaScript
2. **文件无法加载**：检查文件路径是否正确，确保使用`file:///android_asset/`前缀
3. **样式问题**：确保CSS文件正确链接且没有跨域问题
4. **构建失败**：检查Android SDK是否正确安装，环境变量是否设置

通过以上方法，您就可以将PC急救助手Web应用成功打包成Android APK文件了。