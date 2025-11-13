# 图标生成说明

PC急救助手需要PNG格式的图标文件才能正确打包为APK。本项目提供了SVG格式的图标，您需要将其转换为PNG格式。

## 所需图标尺寸
- 192x192 pixels (icon-192x192.png)
- 512x512 pixels (icon-512x512.png)

## 转换方法

### 方法1：使用在线工具（推荐）
1. 访问 https://convertio.co/svg-png/
2. 上传项目中的 icon.svg 文件
3. 选择目标尺寸（192x192 和 512x512）
4. 下载并重命名为相应文件名
5. 将PNG文件放置在项目根目录

### 方法2：使用图像编辑软件
1. 使用Photoshop、GIMP或其他图像编辑软件打开 icon.svg
2. 导出为PNG格式，分别设置尺寸为192x192和512x512
3. 保存为 icon-192x192.png 和 icon-512x512.png

### 方法3：使用命令行工具（需要ImageMagick）
如果已安装ImageMagick，可以在项目根目录运行以下命令：

```bash
magick convert -background none -resize 192x192 icon.svg icon-192x192.png
magick convert -background none -resize 512x512 icon.svg icon-512x512.png
```

完成图标生成后，您就可以使用PWABuilder等工具将应用打包为APK了。