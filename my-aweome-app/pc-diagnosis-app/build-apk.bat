@echo off
echo PC急救助手 - APK构建脚本
echo =========================

REM 检查是否安装了Android Studio或Android SDK
echo 检查Android SDK环境...
if exist "%ANDROID_HOME%" (
    echo [✓] Android SDK路径: %ANDROID_HOME%
) else (
    echo [!] 未找到Android SDK环境
    echo 请安装Android Studio或设置ANDROID_HOME环境变量
    echo.
    echo 或者使用在线工具将Web应用转换为APK:
    echo 1. 访问 https://www.pwabuilder.com/
    echo 2. 输入您的Web应用URL
    echo 3. 按照提示生成APK文件
    echo.
    echo 其他推荐的在线工具:
    echo • https://www.appsgeyser.com/
    echo • https://gonative.io/
    echo • https://bubblewrap.dev/
    echo.
    pause
    exit /b
)

REM 创建临时构建目录
echo 创建构建目录...
mkdir build 2>nul
mkdir build\assets 2>nul

REM 复制文件到构建目录
echo 复制应用文件...
copy index.html build\assets\ >nul
copy styles.css build\assets\ >nul
copy app.js build\assets\ >nul
copy decision-tree.json build\assets\ >nul
copy manifest.json build\assets\ >nul

echo 复制图标文件...
if exist icon-192x192.png (
    copy icon-192x192.png build\assets\ >nul
    echo [✓] 已复制 icon-192x192.png
) else (
    echo [!] 未找到icon-192x192.png图标文件
    echo 请将icon.svg转换为PNG格式或提供PNG图标文件
)

if exist icon-512x512.png (
    copy icon-512x512.png build\assets\ >nul
    echo [✓] 已复制 icon-512x512.png
) else (
    echo [!] 未找到icon-512x512.png图标文件
    echo 请将icon.svg转换为PNG格式或提供PNG图标文件
)

REM 创建Android项目结构
echo 创建Android项目结构...
mkdir build\app\src\main\assets\www 2>nul
xcopy build\assets build\app\src\main\assets\www /E /Y >nul

echo.
echo 构建完成！
echo.
echo 要生成APK文件，请执行以下步骤：
echo 1. 安装Android Studio
echo 2. 创建新的Android项目
echo 3. 将Web文件放入assets/www目录
echo 4. 使用WebView加载本地HTML文件
echo 5. 构建APK
echo.
echo 或者使用在线工具：
echo 访问 https://www.pwabuilder.com/ 生成APK
echo.
echo 图标文件说明：
echo 提供了icon.svg文件，您可以使用在线工具将其转换为PNG格式：
echo • 访问 https://convertio.co/svg-png/
echo • 上传icon.svg文件
echo • 选择目标尺寸（192x192 和 512x512）
echo • 下载并重命名为相应文件名
echo.
pause