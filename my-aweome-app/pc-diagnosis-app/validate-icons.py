#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import os

def validate_icon(file_path, expected_size):
    """验证图标文件是否符合要求"""
    if not os.path.exists(file_path):
        print(f"[错误] 找不到文件: {file_path}")
        return False
    
    try:
        # 读取文件头信息来判断是否为PNG格式
        with open(file_path, 'rb') as f:
            header = f.read(8)
            
        # PNG文件头应该是 b'\x89PNG\r\n\x1a\n'
        if header[:4] != b'\x89PNG':
            print(f"[错误] {file_path} 不是PNG格式")
            return False
        
        print(f"[正确] {file_path} 是PNG格式")
        print(f"[提示] 请手动确认尺寸为 {expected_size}x{expected_size} 像素")
        return True
        
    except Exception as e:
        print(f"[错误] 无法读取 {file_path}: {str(e)}")
        return False

def main():
    """主函数"""
    print("验证PC急救助手图标文件...")
    print("=" * 40)
    
    # 验证192x192图标
    icon_192 = "icon-192x192.png"
    result1 = validate_icon(icon_192, 192)
    
    # 验证512x512图标
    icon_512 = "icon-512x512.png"
    result2 = validate_icon(icon_512, 512)
    
    print("=" * 40)
    if result1 and result2:
        print("图标文件格式验证通过！")
        print("请手动确认图标尺寸正确后，即可使用PWABuilder等工具将应用打包为APK。")
    else:
        print("部分图标文件存在问题，请参考 FIX_ICON_FILES.md 进行修复。")

if __name__ == "__main__":
    main()