# 情绪能量日记 - 完整打包指南

## 📋 目录
- [桌面端打包](#桌面端打包)
- [手机端打包](#手机端打包)
- [在线打包平台](#在线打包平台)
- [常见问题](#常见问题)

---

## 🖥️ 桌面端打包

### Windows

#### 方法1：使用 build.bat（推荐，最简单）
```bash
# 双击运行 build.bat 文件
# 或在命令行执行：
build.bat
```

#### 方法2：手动打包
```bash
# 1. 安装依赖
npm install

# 2. 打包Windows应用
npm run build:win
```

#### 打包产物
- `dist/情绪能量日记 Setup 1.0.0.exe` - 安装程序（推荐）
- `dist/情绪能量日记 1.0.0.exe` - 便携版（无需安装）

### macOS

```bash
# 1. 安装依赖
npm install

# 2. 打包macOS应用
npm run build:mac
```

#### 打包产物
- `dist/情绪能量日记-1.0.0.dmg` - DMG安装包
- `dist/情绪能量日记-1.0.0-mac.zip` - ZIP压缩包

### Linux

```bash
# 1. 安装依赖
npm install

# 2. 打包Linux应用
npm run build:linux
```

#### 打包产物
- `dist/情绪能量日记-1.0.0.AppImage` - AppImage格式（通用）
- `dist/emotion-energy-diary_1.0.0_amd64.deb` - DEB包（Ubuntu/Debian）

---

## 📱 手机端打包

### 方案1：Capacitor（推荐，功能最完整）

#### 安装Capacitor
```bash
npm install @capacitor/core @capacitor/cli @capacitor/android @capacitor/ios
npx cap init
```

#### 配置capacitor.config.json
```json
{
  "appId": "com.emotionenergy.diary",
  "appName": "情绪能量日记",
  "webDir": ".",
  "bundledWebRuntime": false
}
```

#### 添加平台
```bash
# Android
npx cap add android

# iOS（需要Mac）
npx cap add ios
```

#### 同步代码
```bash
npx cap sync
```

#### 打包应用
```bash
# Android - 打开Android Studio
npx cap open android
# 然后在Android Studio中：Build > Build Bundle(s) / APK(s) > Build APK(s)

# iOS - 打开Xcode
npx cap open ios
# 然后在Xcode中：Product > Archive
```

### 方案2：Apache Cordova

#### 安装Cordova
```bash
npm install -g cordova
```

#### 创建项目
```bash
cordova create emotion-diary com.emotionenergy.diary "情绪能量日记"
cd emotion-diary
```

#### 复制文件
将以下文件复制到 `www` 目录：
- `index.html`
- `styles.css`
- `app.js`
- Chart.js CDN链接需要改为本地引用

#### 添加平台
```bash
# Android
cordova platform add android

# iOS（需要Mac）
cordova platform add ios
```

#### 打包
```bash
# Android
cordova build android
# APK位置: platforms/android/app/build/outputs/apk/

# iOS
cordova build ios
# 需要在Xcode中完成签名和打包
```

### 方案3：Ionic（混合开发）

```bash
# 安装Ionic
npm install -g @ionic/cli

# 创建项目
ionic start emotion-diary blank --type=angular

# 将HTML/CSS/JS集成到Ionic项目中
# 然后使用Capacitor打包
ionic capacitor add android
ionic capacitor add ios
ionic capacitor sync
ionic capacitor open android
```

---

## 🌐 在线打包平台（零代码）

### 1. AppGyver（推荐）

**网址**: https://www.appgyver.com/

**步骤**:
1. 注册并登录 AppGyver
2. 创建新应用
3. 导入文件：
   - 将 `index.html` 内容复制到 AppGyver 的页面编辑器
   - 将 `styles.css` 添加到样式部分
   - 将 `app.js` 添加到脚本部分
4. 配置应用图标和名称
5. 点击"Publish"生成应用
6. 下载 Android APK 和 iOS IPA

**优点**:
- 完全零代码
- 支持实时预览
- 自动处理权限和配置
- 支持推送通知（可选）

### 2. Thunkable

**网址**: https://thunkable.com/

**步骤**:
1. 注册并登录 Thunkable
2. 创建新项目
3. 使用"Web Viewer"组件加载本地HTML
4. 配置应用设置
5. 构建并下载应用

**优点**:
- 界面友好
- 支持拖拽式设计
- 提供丰富的组件库

### 3. Glide

**网址**: https://www.glideapps.com/

**步骤**:
1. 注册并登录 Glide
2. 创建新应用
3. 使用"Custom App"模板
4. 导入HTML文件
5. 配置并发布

**优点**:
- 最简单易用
- 支持数据绑定
- 快速原型开发

### 4. Bubble

**网址**: https://bubble.io/

**步骤**:
1. 注册并登录 Bubble
2. 创建新应用
3. 使用"HTML Embed"组件
4. 粘贴HTML代码
5. 配置并部署

**优点**:
- 功能强大
- 支持复杂逻辑
- 可视化编程

### 5. Adalo

**网址**: https://www.adalo.com/

**步骤**:
1. 注册并登录 Adalo
2. 创建新应用
3. 使用"Web View"组件
4. 加载本地HTML
5. 构建并发布

**优点**:
- 界面美观
- 支持数据库
- 易于上手

---

## 🔧 高级配置

### 自定义应用图标

#### Windows (ICO)
```bash
# 使用在线工具转换
# https://www.icoconverter.com/
# 推荐: 256x256 PNG -> ICO
```

#### macOS (ICNS)
```bash
# 使用 iconutil 命令
mkdir icon.iconset
sips -z 16 16     icon.png --out icon.iconset/icon_16x16.png
sips -z 32 32     icon.png --out icon.iconset/icon_16x16@2x.png
sips -z 32 32     icon.png --out icon.iconset/icon_32x32.png
sips -z 64 64     icon.png --out icon.iconset/icon_32x32@2x.png
sips -z 128 128   icon.png --out icon.iconset/icon_128x128.png
sips -z 256 256   icon.png --out icon.iconset/icon_128x128@2x.png
sips -z 256 256   icon.png --out icon.iconset/icon_256x256.png
sips -z 512 512   icon.png --out icon.iconset/icon_256x256@2x.png
sips -z 512 512   icon.png --out icon.iconset/icon_512x512.png
sips -z 1024 1024 icon.png --out icon.iconset/icon_512x512@2x.png
iconutil -c icns icon.iconset
```

#### Android (PNG)
```bash
# 需要多种尺寸
# 48x48, 72x72, 96x96, 144x144, 192x192, 512x512
# 放置在 res/mipmap-* 目录
```

#### iOS (PNG)
```bash
# 需要多种尺寸
# 60x60, 120x120, 180x180, 76x76, 152x152, 167x167, 1024x1024
# 使用 Xcode 的 Asset Catalog 管理
```

### 修改应用名称

#### package.json
```json
{
  "name": "emotion-energy-diary",
  "productName": "情绪能量日记",
  "build": {
    "appId": "com.emotionenergy.diary"
  }
}
```

#### Android (AndroidManifest.xml)
```xml
<application
    android:label="情绪能量日记"
    ...>
</application>
```

#### iOS (Info.plist)
```xml
<key>CFBundleDisplayName</key>
<string>情绪能量日记</string>
```

### 添加应用权限

#### Android (AndroidManifest.xml)
```xml
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
```

#### iOS (Info.plist)
```xml
<key>NSPhotoLibraryUsageDescription</key>
<string>需要访问相册以导出数据</string>
```

---

## ❓ 常见问题

### Q1: 打包失败，提示找不到图标文件？

**A**: 临时解决方案：
1. 注释掉 `package.json` 中的图标配置
2. 或在 `assets` 目录放置对应格式的图标文件

### Q2: iOS打包需要开发者账号吗？

**A**: 
- 真机调试：免费开发者账号（7天有效期）
- App Store发布：付费开发者账号（$99/年）
- 越狱设备：无需签名

### Q3: Android打包失败？

**A**: 
1. 确保安装了 Java JDK 8 或更高版本
2. 设置 ANDROID_HOME 环境变量
3. 更新 Android SDK

### Q4: 如何在手机上测试？

**A**: 
1. **Android**: 直接安装 APK
2. **iOS**: 
   - 使用 TestFlight（推荐）
   - 或通过 Xcode 直接安装到设备
   - 或使用 AltStore（越狱/非越狱）

### Q5: 数据如何在桌面和手机间同步？

**A**: 
- 使用"导出CSV"功能
- 通过云盘或邮件传输
- 在目标设备导入（需要开发导入功能）

### Q6: 应用体积太大？

**A**: 
- 使用 CDN 加载 Chart.js（已实现）
- 压缩图片资源
- 启用代码分割

### Q7: 如何更新应用？

**A**: 
- **桌面**: 重新打包并覆盖安装
- **Android**: 重新签名并安装新版本
- **iOS**: 通过 App Store 或 TestFlight 更新

---

## 📊 打包方案对比

| 方案 | 难度 | 时间 | 功能 | 推荐度 |
|------|------|------|------|--------|
| Electron (桌面) | ⭐ | 10分钟 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Capacitor (手机) | ⭐⭐ | 30分钟 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Cordova (手机) | ⭐⭐ | 30分钟 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| AppGyver (在线) | ⭐ | 15分钟 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Thunkable (在线) | ⭐ | 20分钟 | ⭐⭐⭐ | ⭐⭐⭐ |
| Glide (在线) | ⭐ | 10分钟 | ⭐⭐⭐ | ⭐⭐⭐ |

---

## 🎯 推荐打包流程

### 最快方案（1小时内完成）

1. **桌面应用**（10分钟）
   ```bash
   npm install
   npm run build:win
   ```

2. **手机应用**（20分钟）
   - 使用 AppGyver 在线平台
   - 导入 HTML/CSS/JS
   - 一键生成 APK

### 完整方案（2-3小时）

1. **桌面应用**（10分钟）
   ```bash
   npm install
   npm run build:win
   npm run build:mac
   npm run build:linux
   ```

2. **手机应用**（1-2小时）
   - 使用 Capacitor
   - 配置 Android Studio
   - 配置 Xcode（iOS）
   - 打包 APK 和 IPA

---

## 📞 获取帮助

- 查看 [README.md](README.md) 获取完整文档
- 查看 [QUICKSTART.md](QUICKSTART.md) 获取快速开始指南
- 搜索 Electron/Capacitor 官方文档

---

**祝你打包顺利！** 🚀
