@echo off
echo PC急救助手 - 启动脚本
echo =========================

echo 正在启动PC急救助手应用...
echo.

REM 尝试使用默认浏览器打开应用
echo 正在打开浏览器...
start "" "index.html"

echo.
echo 如果浏览器没有自动打开，请手动双击index.html文件
echo 或者在浏览器中打开以下文件：
echo file://%CD%\index.html
echo.

echo 应用功能说明：
echo 1. 选择您遇到的电脑故障类型
echo 2. 根据引导式问题提供更多细节
echo 3. 按照诊断流程逐步排查问题
echo 4. 查看最终的诊断结果和解决建议
echo.

pause