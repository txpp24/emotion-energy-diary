# 快速开始指南

## 🚀 5分钟快速上手

### 第一步：安装依赖
```bash
npm install
```

### 第二步：运行应用
```bash
npm start
```

应用将在新窗口中打开，你可以立即开始使用！

## 📦 一键打包（Windows）

双击运行 `build.bat` 文件，或在命令行执行：
```bash
npm run build:win
```

打包完成后，在 `dist` 目录中找到：
- `情绪能量日记 Setup 1.0.0.exe` - 安装版
- `情绪能量日记 1.0.0.exe` - 便携版（无需安装）

## 🎯 核心功能使用

### 1. 记录情绪
- 点击情绪标签（开心、平静、焦虑等）
- 拖动滑块设置能量值（1-10分）
- 输入触发原因（一句话）
- 点击"保存记录"

### 2. 查看趋势
- 右侧图表自动显示能量趋势
- 点击"周/月"按钮切换时间范围

### 3. 历史记录
- 底部显示所有历史记录
- 点击"×"删除单条记录
- 点击"导出CSV"备份数据

### 4. 治愈文案
- 顶部显示随机治愈文案
- 点击✨按钮切换文案

## 📱 手机端打包

### 最简单方案：使用Capacitor

1. 安装Capacitor：
```bash
npm install @capacitor/core @capacitor/cli @capacitor/android @capacitor/ios
npx cap init
```

2. 添加平台：
```bash
npx cap add android
npx cap add ios
```

3. 同步并打包：
```bash
npx cap sync
npx cap open android  # 在Android Studio中打包APK
npx cap open ios      # 在Xcode中打包IPA
```

### 在线打包平台（零代码）

推荐使用 **AppGyver** 或 **Thunkable**：
1. 注册账号
2. 导入 index.html、styles.css、app.js
3. 一键生成 Android APK 和 iOS IPA

## 🔧 常见问题

### Q: 打包失败怎么办？
A: 确保已安装 Node.js，然后重新运行 `npm install`

### Q: 如何修改治愈文案？
A: 编辑 `app.js` 文件中的 `healingQuotes` 数组

### Q: 数据存储在哪里？
A: 本地存储，不上传任何数据。位置：
- Windows: `%APPDATA%\emotion-energy-diary\`
- macOS: `~/Library/Application Support/emotion-energy-diary/`

### Q: 如何备份和恢复数据？
A: 点击"导出CSV"按钮导出数据，或复制整个应用目录

## 💡 小贴士

- 每天记录一次，养成习惯
- 定期导出CSV备份
- 可以在多台设备间复制应用目录（包含数据）
- 无需联网，随时随地使用

## 📞 技术支持

遇到问题？查看 README.md 获取详细文档。

---

**开始记录你的情绪能量吧！** 🌟
