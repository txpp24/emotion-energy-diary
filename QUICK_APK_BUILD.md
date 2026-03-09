# 快速打包APK指南

由于本地环境配置复杂，推荐使用在线打包平台，无需安装任何软件。

## 推荐方案：Website 2 APK Builder（完全免费）

### 步骤1：准备文件

1. 打开 `www` 文件夹
2. 确认以下文件存在：
   - index.html
   - styles.css
   - app.js
   - manifest.json

### 步骤2：访问打包网站

**网址**：https://www.website2apk.com/

### 步骤3：上传文件

1. 点击 **"Upload Website"**
2. 选择 **"Upload Files"**
3. 将 `www` 文件夹中的所有文件上传
4. 或者直接上传 `www` 文件夹

### 步骤4：配置应用信息

填写以下信息：

- **App Name**: 情绪能量日记
- **Package Name**: com.emotionenergy.diary
- **Version**: 1.0.0
- **Version Code**: 1
- **Icon**: 上传 assets/icon.svg 或其他图标文件
- **Orientation**: Portrait（竖屏）

### 步骤5：生成APK

1. 点击 **"Generate APK"**
2. 等待生成完成（通常1-3分钟）
3. 下载生成的APK文件

---

## 备选方案：AppGyver（功能更强）

### 步骤1：注册账号

**网址**：https://www.appgyver.com/

1. 点击 **"Sign Up"**
2. 使用邮箱注册
3. 验证邮箱

### 步骤2：创建项目

1. 登录后点击 **"Create New Project"**
2. 选择 **"Start from scratch"**
3. 命名项目：情绪能量日记

### 步骤3：添加Web View组件

1. 点击 **"Add Component"**
2. 选择 **"Web View"**
3. 将 `www/index.html` 的内容复制到HTML编辑器
4. 或者上传整个 `www` 文件夹

### 步骤4：配置应用设置

1. 点击 **"App Settings"**
2. 配置应用名称、图标、包名
3. 设置主题颜色：#667eea
4. 配置权限：无需特殊权限

### 步骤5：下载APK

1. 点击 **"Build"**
2. 等待构建完成
3. 下载APK文件

---

## 备选方案：使用Cordova Online Builder

### 步骤1：准备项目

1. 创建新文件夹 `cordova-project`
2. 将 `www` 文件夹复制到 `cordova-project`
3. 在 `cordova-project` 中创建 `config.xml`：

```xml
<?xml version='1.0' encoding='utf-8'?>
<widget id="com.emotionenergy.diary" version="1.0.0" xmlns="http://www.w3.org/ns/widgets">
    <name>情绪能量日记</name>
    <description>极简、轻量、隐私安全的情绪记录应用</description>
    <author email="your-email@example.com">Your Name</author>
    <content src="index.html" />
    <access origin="*" />
    <preference name="Orientation" value="portrait" />
    <preference name="Fullscreen" value="false" />
</widget>
```

### 步骤2：访问在线构建

**网址**：https://cordova.apache.org/docs/en/latest/guide/cli/

或使用 **PhoneGap Build**：https://build.phonegap.com/

### 步骤3：上传项目

1. 注册账号
2. 点击 **"Upload"**
3. 上传 `cordova-project` 文件夹
4. 配置应用信息
5. 点击 **"Build"**

---

## 测试APK

### 安装到手机

1. 将APK文件传输到手机
2. 在手机设置中允许安装未知来源应用
3. 点击APK文件安装
4. 测试所有功能

### 常见问题

**Q1: APK无法安装？**

A: 检查手机设置，允许安装未知来源应用

**Q2: 应用闪退？**

A: 检查index.html、styles.css、app.js是否都已上传

**Q3: 图标不显示？**

A: 确保上传了正确的图标文件（PNG或SVG格式）

**Q4: 功能不正常？**

A: 确保所有依赖文件都已上传，特别是app.js

---

## 上架酷安

### 准备材料

1. **APK文件**：使用上述方法生成的APK
2. **应用图标**：512x512 PNG格式
3. **应用截图**：至少2张，建议5张（不同页面）
4. **应用描述**：参考README.md
5. **隐私政策**：使用PERMISSIONS.md的内容
6. **版本说明**：更新日志

### 上架步骤

1. 访问酷安：https://www.coolapk.com/
2. 注册开发者账号
3. 进入开发者后台
4. 点击"上传应用"
5. 填写应用信息
6. 上传APK和截图
7. 提交审核

---

## 最快方案

如果你想要最快生成APK，推荐：

1. **Website 2 APK Builder** - 完全免费，无需注册，直接上传文件
2. **AppGyver** - 功能强大，支持自定义，但需要注册

选择Website 2 APK Builder是最快最简单的方法！
