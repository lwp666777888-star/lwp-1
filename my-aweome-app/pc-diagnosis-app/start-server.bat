@echo off
chcp 65001 >nul
echo PC急救助手 - 本地服务器启动脚本
echo =========================

REM 检查Python是否安装
python --version >nul 2>&1
if %errorlevel% == 0 (
    echo [✓] Python环境已安装
    echo 启动本地服务器...
    python start-server.py
) else (
    echo [!] 未检测到Python环境
    echo 请先安装Python:
    echo 1. 访问 https://www.python.org/downloads/
    echo 2. 下载并安装Python
    echo 3. 重新运行此脚本
    echo.
    echo 或者使用在线工具打包APK:
    echo 1. 访问 https://www.pwabuilder.com/
    echo 2. 按照QUICK_APK_PACKAGING.md中的说明操作
    echo.
    pause
    exit /b
)