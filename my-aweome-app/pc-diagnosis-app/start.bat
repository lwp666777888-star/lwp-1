@echo off
title PC急救助手启动器
echo ================================
echo        PC急救助手启动器
echo ================================
echo.

echo 正在启动PC急救助手应用...
echo.

REM 检查index.html文件是否存在
if exist "index.html" (
    echo [✓] 找到应用文件
    echo.
    
    REM 尝试使用默认浏览器打开应用
    echo 正在打开浏览器...
    start "" "index.html"
    
    echo.
    echo 应用已在浏览器中打开！
    echo 如果没有自动打开，请手动双击index.html文件
    echo.
) else (
    echo [✗] 未找到index.html文件
    echo 请确保所有应用文件都在当前目录中
    echo.
    pause
    exit /b
)

echo 应用功能：
echo • 引导式故障诊断
echo • 多种电脑问题解决方案
echo • 详细的解决建议
echo • 适合在手机上使用
echo.

echo 如需打包成手机应用，请查看APK_PACKAGING.md文件
echo.

pause