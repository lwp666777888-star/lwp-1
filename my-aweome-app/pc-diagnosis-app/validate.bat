@echo off
echo PC急救助手 - 文件验证脚本
echo =========================

echo 检查必需的文件是否存在...
if exist index.html (
    echo [✓] index.html 存在
) else (
    echo [✗] index.html 不存在
)

if exist styles.css (
    echo [✓] styles.css 存在
) else (
    echo [✗] styles.css 不存在
)

if exist app.js (
    echo [✓] app.js 存在
) else (
    echo [✗] app.js 不存在
)

if exist decision-tree.json (
    echo [✓] decision-tree.json 存在
) else (
    echo [✗] decision-tree.json 不存在
)

echo.
echo 文件验证完成！
echo 请将所有文件部署到Web服务器上以测试应用功能。
pause