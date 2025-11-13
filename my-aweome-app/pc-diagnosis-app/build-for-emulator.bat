@echo off
title PC急救助手 - 模拟器打包工具
echo ======================================
echo      PC急救助手模拟器打包工具
echo ======================================
echo.

:begin
echo 选择打包方式：
echo 1. 使用在线工具打包（推荐）
echo 2. 本地构建APK
echo 3. 查看详细说明
echo 4. 退出
echo.

choice /c 1234 /m "请选择打包方式"

if errorlevel 4 goto :exit
if errorlevel 3 goto :instructions
if errorlevel 2 goto :local_build
if errorlevel 1 goto :online_build

:online_build
echo.
echo 使用在线工具打包：
echo ==================
echo 1. 部署应用到GitHub Pages或其他静态托管服务
echo 2. 访问 https://www.pwabuilder.com/
echo 3. 输入您的应用URL
echo 4. 点击"Start"按钮
echo 5. 选择"Android"选项卡
echo 6. 点击"Download"下载APK
echo 7. 将APK安装到模拟器：
echo    adb install pc-rescue-helper.apk
echo.
echo 提示：如果您还没有部署应用，建议先部署到GitHub Pages
echo.
pause
goto :menu

:local_build
echo.
echo 本地构建APK需要以下环境：
echo ==========================
echo 1. Android Studio
echo 2. Android SDK
echo 3. Java Development Kit
echo.
echo 构建步骤：
echo ==========
echo 1. 安装Android Studio
echo 2. 创建新的Android项目（Empty Activity）
echo 3. 将Web文件复制到 app/src/main/assets/www/
echo 4. 修改MainActivity.java使用WebView加载本地文件
echo 5. 构建APK：Build ^> Build Bundle(s) / APK(s) ^> Build APK
echo 6. 安装到模拟器：adb install app-debug.apk
echo.
echo 详细说明请查看 APK_PACKAGING.md 文件
echo.
pause
goto :menu

:instructions
echo.
echo 在模拟器中运行应用的详细说明：
echo ================================
echo.
echo 方法一：打包成APK
echo 1. 使用在线工具生成APK
echo 2. 启动Android模拟器
echo 3. 将APK文件拖拽到模拟器窗口安装
echo 4. 启动应用
echo.
echo 方法二：浏览器中运行
echo 1. 启动Android模拟器
echo 2. 在模拟器中打开浏览器
echo 3. 输入文件路径或URL
echo.
echo 方法三：使用Android Studio
echo 1. 在Android Studio中创建项目
echo 2. 配置WebView加载本地HTML
echo 3. 运行到模拟器
echo.
pause
goto :menu

:menu
echo.
echo 选择操作：
echo 1. 返回主菜单
echo 2. 退出
echo.
choice /c 12 /m "请选择"

if errorlevel 2 goto :exit
if errorlevel 1 goto :start

:exit
echo.
echo 感谢使用PC急救助手打包工具！
echo.
pause
exit /b

:start
cls
goto :begin