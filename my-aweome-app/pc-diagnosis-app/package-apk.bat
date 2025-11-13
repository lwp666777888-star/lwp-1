@echo off
chcp 65001 >nul
echo PC急救助手 - APK打包助手
echo =========================
echo.

REM 检查必要文件
echo [1/5] 检查必要文件...
if not exist "index.html" (
    echo [错误] 找不到 index.html 文件
    goto error
)
if not exist "styles.css" (
    echo [错误] 找不到 styles.css 文件
    goto error
)
if not exist "app.js" (
    echo [错误] 找不到 app.js 文件
    goto error
)
if not exist "decision-tree.json" (
    echo [错误] 找不到 decision-tree.json 文件
    goto error
)
if not exist "manifest.json" (
    echo [错误] 找不到 manifest.json 文件
    goto error
)
echo [完成] 所有必要文件存在
echo.

REM 检查图标文件
echo [2/5] 检查图标文件...
if not exist "icon-192x192.png" (
    echo [警告] 找不到 icon-192x192.png 文件
    set /p create_icons=是否需要生成图标文件说明？(y/n): 
    if /i "%%create_icons%%"=="y" (
        echo 请参考 FIX_ICON_FILES.md 生成正确的PNG图标文件
        echo.
    )
) else (
    echo [信息] 找到 icon-192x192.png 文件
)

if not exist "icon-512x512.png" (
    echo [警告] 找不到 icon-512x512.png 文件
    set /p create_icons=是否需要生成图标文件说明？(y/n): 
    if /i "%%create_icons%%"=="y" (
        echo 请参考 FIX_ICON_FILES.md 生成正确的PNG图标文件
        echo.
    )
) else (
    echo [信息] 找到 icon-512x512.png 文件
)
echo [完成] 图标文件检查完毕
echo.

REM 启动本地服务器
echo [3/5] 启动本地服务器...
echo 请确保已安装Python环境
echo 按任意键启动本地服务器进行测试...
pause >nul
start "" "start-server.bat"
echo.

REM 打包说明
echo [4/5] APK打包说明...
echo.
echo 现在请按照以下步骤操作：
echo 1. 在浏览器中访问 http://localhost:8000 测试应用
echo 2. 确认应用功能正常后，访问 https://www.pwabuilder.com/
echo 3. 在PWABuilder中输入 http://localhost:8000
echo 4. 点击"Start"开始分析
echo 5. 分析完成后点击"Build PWA"
echo 6. 选择Android平台并下载APK构建包
echo 7. 按照构建包中的说明完成APK生成
echo.

REM 完成
echo [5/5] 准备完成！
echo.
echo 请按照上述说明完成APK打包过程
echo 打包完成后，将APK文件复制到手机即可安装使用
echo.
echo 如需更多帮助，请参考以下文档：
echo - COMPLETE_APK_PACKAGING_GUIDE.md
echo - QUICK_APK_PACKAGING.md
echo - FIX_ICON_FILES.md
echo.
pause
exit /b

:error
echo.
echo [错误] 缺少必要文件，请检查项目完整性
echo.
pause
exit /b 1