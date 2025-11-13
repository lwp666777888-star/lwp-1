# 快速打包PC急救助手为Android APK

本指南将帮助您快速将PC急救助手Web应用打包成Android APK文件，以便直接复制到手机上安装。

## 方法一：使用PWABuilder（推荐，最快）

### 步骤1：准备Web应用
1. 确保您的应用可以正常运行（双击[index.html](file:///C:/Users/lwp/Desktop/lwp-1/my-aweome-app/pc-diagnosis-app/index.html)能正常打开）
2. 确保[manifest.json](file:///C:/Users/lwp/Desktop/lwp-1/my-aweome-app/pc-diagnosis-app/manifest.json)文件存在且配置正确

### 步骤2：使用PWABuilder在线工具
1. 访问 [PWABuilder](https://www.pwabuilder.com/)
2. 在输入框中输入您的Web应用URL（需要先部署到本地服务器）
3. 如果是本地文件，可以通过以下方式创建本地服务器：
   - Windows: 在应用根目录下按住Shift键，右键选择"在此处打开PowerShell窗口"，然后运行命令：
     ```
     python -m http.server 8000
     ```
   - 或者使用Node.js（如果已安装）：
     ```
     npx http-server
     ```
4. 在浏览器中访问 `http://localhost:8000` 确认应用正常运行
5. 在PWABuilder中输入该地址并点击"Start"按钮
6. 等待分析完成后，点击"Build PWA"按钮
7. 选择Android选项并按照提示操作
8. 下载生成的APK文件

### 步骤3：安装到手机
1. 将下载的APK文件通过USB数据线、蓝牙或云存储等方式传输到Android手机
2. 在手机上找到APK文件并点击安装
3. 如果提示"不允许安装未知来源的应用"，请前往设置->安全->允许未知来源应用安装

## 方法二：使用Bubblewrap CLI工具（需要Node.js环境）

### 安装Bubblewrap
```bash
npm install -g @bubblewrap/cli
```

### 初始化项目
```bash
bubblewrap init --manifest=http://localhost:8000/manifest.json
```

### 构建APK
```bash
bubblewrap build
```

## 注意事项

1. **图标文件**：为了获得最佳效果，请提供192x192和512x512像素的PNG格式图标文件
2. **本地测试**：在打包前，请确保应用在本地服务器上能正常运行
3. **权限**：生成的APK会自动包含必要的权限（如INTERNET）
4. **测试**：在发布前，请在不同Android设备上测试APK

## 故障排除

1. **应用无法启动**：检查所有文件是否完整复制到了服务器目录
2. **样式问题**：确保CSS文件正确链接且没有跨域问题
3. **功能异常**：确认JavaScript文件正确加载且没有错误

通过以上方法，您就可以将PC急救助手成功打包成Android APK文件，并直接复制到手机上安装使用了。