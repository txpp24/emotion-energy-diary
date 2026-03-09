# 图标文件说明

## 需要的图标文件

为了完整打包应用，请在 `assets` 目录下放置以下图标文件：

### Windows
- `icon.ico` - Windows应用图标（推荐尺寸：256x256）

### macOS
- `icon.icns` - macOS应用图标（推荐尺寸：1024x1024）

### Linux
- `icon.png` - Linux应用图标（推荐尺寸：512x512）

## 临时解决方案

如果没有准备图标文件，可以：

1. 使用在线工具生成图标：
   - https://www.icoconverter.com/
   - https://cloudconvert.com/png-to-ico

2. 或者从以下网站下载免费图标：
   - https://www.flaticon.com/
   - https://www.iconfinder.com/

3. 或者暂时使用任何图片文件，后续可以替换

## 修改配置

如果暂时没有图标，可以修改 `package.json` 中的 `build` 配置，注释掉图标相关配置：

```json
"win": {
  "target": ["nsis", "portable"]
  // "icon": "assets/icon.ico"
}
```

这样打包时将使用默认图标。
