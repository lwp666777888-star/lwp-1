# 修复图标文件说明

PC急救助手需要正确格式的PNG图标文件才能打包为APK。当前项目中的图标文件存在格式问题，需要重新生成。

## 问题说明

当前项目中的[icon-192x192.png](file:///C:/Users/lwp/Desktop/lwp-1/my-aweome-app/pc-diagnosis-app/icon-192x192.png)文件实际上是一个SVG文件，而非PNG格式。这会导致APK打包工具无法正确识别图标。

## 解决方案

### 方案一：使用在线工具生成图标（推荐）

1. 访问 https://convertio.co/svg-png/
2. 上传项目中的 [icon.svg](file:///C:/Users/lwp/Desktop/lwp-1/my-aweome-app/pc-diagnosis-app/icon.svg) 文件
3. 选择目标尺寸：
   - 第一次转换：选择 192x192 像素，下载后重命名为 `icon-192x192.png`
   - 第二次转换：选择 512x512 像素，下载后重命名为 `icon-512x512.png`
4. 删除项目中现有的错误图标文件
5. 将新生成的PNG文件放置在项目根目录

### 方案二：使用图像编辑软件

1. 使用Photoshop、GIMP或其他图像编辑软件打开 [icon.svg](file:///C:/Users/lwp/Desktop/lwp-1/my-aweome-app/pc-diagnosis-app/icon.svg)
2. 导出为PNG格式：
   - 第一次导出：设置尺寸为192x192，保存为 `icon-192x192.png`
   - 第二次导出：设置尺寸为512x512，保存为 `icon-512x512.png`
3. 删除项目中现有的错误图标文件
4. 将新生成的PNG文件放置在项目根目录

### 方案三：使用命令行工具（需要ImageMagick）

如果已安装ImageMagick，可以在项目根目录运行以下命令：

```bash
# 删除现有的错误图标文件
del icon-192x192.png

# 从SVG生成PNG图标
magick convert -background none -resize 192x192 icon.svg icon-192x192.png
magick convert -background none -resize 512x512 icon.svg icon-512x512.png
```

## 验证图标文件

生成图标后，请确保：
1. 文件确实是PNG格式（可以通过文件头信息验证）
2. 尺寸正确（192x192和512x512像素）
3. 文件放置在项目根目录

完成图标修复后，您就可以使用PWABuilder等工具将应用打包为APK了。