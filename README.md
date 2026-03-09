# 情绪能量日记 (Emotion Energy Diary)

一款极简、轻量、隐私安全的情绪记录应用。支持桌面端（Electron）和移动端（Android）。

## 功能特点

✨ **快速记录** - 选择情绪标签、打分能量值、输入触发原因，一键保存

🔒 **本地存储** - 数据存储在本地，不上传、不联网、不泄露隐私

📊 **趋势图表** - 自动生成周/月能量折线图，直观显示情绪规律

💝 **治愈文案** - 每日随机推送一句小众治愈文案，温暖治愈

📤 **数据导出** - 支持导出CSV格式，方便备份和分析

## 快速开始

### 安装依赖

```bash
npm install
```

### 运行应用

```bash
npm start
```

## 打包成桌面应用

### Windows

```bash
npm run build:win
```

打包完成后，安装包和可执行文件将在 `dist` 目录中：
- `情绪能量日记 Setup 1.0.0.exe` - 安装程序
- `情绪能量日记 1.0.0.exe` - 便携版

### macOS

```bash
npm run build:mac
```

打包完成后，将在 `dist` 目录中生成：
- `情绪能量日记-1.0.0.dmg` - DMG安装包
- `情绪能量日记-1.0.0-mac.zip` - ZIP压缩包

### Linux

```bash
npm run build:linux
```

打包完成后，将在 `dist` 目录中生成：
- `情绪能量日记-1.0.0.AppImage` - AppImage格式
- `emotion-energy-diary_1.0.0_amd64.deb` - DEB包

## 手机端打包方案

由于Electron主要针对桌面端，如需打包成手机APP，推荐以下方案：

### 方案1：使用Capacitor（推荐）

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

3. 同步代码：
```bash
npx cap sync
```

4. 打包：
```bash
# Android
npx cap open android
# 然后在Android Studio中打包APK

# iOS
npx cap open ios
# 然后在Xcode中打包IPA
```

### 方案2：使用Apache Cordova

1. 安装Cordova：
```bash
npm install -g cordova
```

2. 创建项目：
```bash
cordova create emotion-diary com.emotionenergy.diary "情绪能量日记"
cd emotion-diary
```

3. 将index.html、styles.css、app.js复制到www目录

4. 添加平台并打包：
```bash
cordova platform add android
cordova build android
```

### 方案3：使用在线打包平台

- **AppGyver** - https://www.appgyver.com/
- **Thunkable** - https://thunkable.com/
- **Glide** - https://www.glideapps.com/

这些平台支持导入HTML/CSS/JS文件，一键生成Android和iOS应用。

## 技术栈

- **Electron** - 跨平台桌面应用框架
- **Chart.js** - 图表库
- **localStorage** - 本地数据存储
- **原生JavaScript** - 无需复杂框架

## 数据存储位置

- **Windows**: `%APPDATA%\emotion-energy-diary\`
- **macOS**: `~/Library/Application Support/emotion-energy-diary/`
- **Linux**: `~/.config/emotion-energy-diary/`

## 隐私说明

✅ 所有数据存储在本地设备
✅ 不联网、不上传任何数据
✅ 不收集用户信息
✅ 无广告、无追踪

## 系统要求

- Windows 10 或更高版本
- macOS 10.13 或更高版本
- Linux (主流发行版)

## 开发说明

### 项目结构

```
emotion-energy-diary/
├── main.js          # Electron主进程
├── index.html       # 主页面
├── styles.css       # 样式文件
├── app.js           # 应用逻辑
├── package.json     # 项目配置
└── assets/          # 资源文件（图标等）
```

### 自定义文案

编辑 `app.js` 文件中的 `healingQuotes` 数组，添加或修改治愈文案。

## 许可证

MIT License

## 致谢

感谢所有为开源社区做出贡献的开发者。
