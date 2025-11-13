#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import http.server
import socketserver
import webbrowser
import os

# 设置端口号
PORT = 8000

# 切换到当前目录
os.chdir(os.path.dirname(os.path.abspath(__file__)))

# 创建处理器
Handler = http.server.SimpleHTTPRequestHandler

# 创建服务器
with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"服务器启动在 http://localhost:{PORT}")
    print("请在浏览器中打开上述地址来测试应用")
    print("按 Ctrl+C 停止服务器")
    
    # 自动打开浏览器
    webbrowser.open(f"http://localhost:{PORT}")
    
    try:
        # 启动服务器
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n服务器已停止")