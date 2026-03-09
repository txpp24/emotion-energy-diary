# 临时图标说明

由于没有实际的图标文件，这里提供几个解决方案：

## 方案1：使用默认图标（推荐快速测试）

修改 `package.json`，注释掉图标配置：

```json
"build": {
  "appId": "com.emotionenergy.diary",
  "productName": "情绪能量日记",
  "directories": {
    "output": "dist"
  },
  "files": [
    "**/*",
    "!dist/**"
  ],
  "win": {
    "target": ["nsis", "portable"]
    // "icon": "assets/icon.ico"
  },
  "mac": {
    "target": ["dmg", "zip"]
    // "icon": "assets/icon.icns"
  },
  "linux": {
    "target": ["AppImage", "deb"]
    // "icon": "assets/icon.png"
  }
}
```

## 方案2：使用在线工具生成图标

### Windows (ICO)
访问: https://www.icoconverter.com/
- 上传任意 PNG 图片
- 选择 256x256 尺寸
- 下载并重命名为 `icon.ico`
- 放到 `assets` 目录

### macOS (ICNS)
访问: https://cloudconvert.com/png-to-icns
- 上传任意 PNG 图片
- 下载并重命名为 `icon.icns`
- 放到 `assets` 目录

### Linux (PNG)
- 使用任意 PNG 图片
- 推荐尺寸: 512x512
- 重命名为 `icon.png`
- 放到 `assets` 目录

## 方案3：使用提供的SVG图标

项目中已包含 `assets/icon.svg`，可以：
1. 在线转换为所需格式
2. 或直接使用（部分打包工具支持）

## 方案4：使用免费图标网站

推荐网站：
- Flaticon: https://www.flaticon.com/
- IconFinder: https://www.iconfinder.com/
- Icons8: https://icons8.com/

搜索关键词：emotion, diary, mood, energy

## 快速测试

如果只是想快速测试应用，可以：
1. 使用方案1（注释掉图标配置）
2. 直接运行 `npm start` 测试
3. 后期再添加图标

## 注意事项

- 图标文件必须放在 `assets` 目录
- 文件名必须与 `package.json` 中配置的一致
- 建议使用高分辨率图片（至少 512x512）
