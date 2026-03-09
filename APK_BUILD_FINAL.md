# 最简单的APK打包方案

由于本地环境配置复杂，强烈推荐使用在线打包平台。

## 🚀 方案1：Website 2 APK Builder（最简单、完全免费）

### 为什么推荐这个方案？

✅ **完全免费** - 无需支付任何费用
✅ **无需注册** - 直接使用，不需要账号
✅ **无需安装软件** - 不需要Android Studio或SDK
✅ **无需配置** - 不需要配置Gradle、许可证等
✅ **快速生成** - 1-3分钟即可生成APK
✅ **操作简单** - 只需上传文件和填写信息

### 详细步骤：

#### 步骤1：准备文件

确保 `www` 文件夹包含以下文件：
- ✅ index.html
- ✅ styles.css
- ✅ app.js
- ✅ manifest.json

#### 步骤2：访问网站

打开浏览器，访问：**https://www.website2apk.com/**

#### 步骤3：上传文件

1. 点击页面上的 **"Upload Website"** 按钮
2. 选择 **"Upload Files"** 选项
3. 点击 **"Select Files"** 或拖拽文件
4. 选择 `www` 文件夹（可以一次性上传整个文件夹）
5. 等待上传完成

#### 步骤4：配置应用信息

填写以下信息：

| 字段 | 值 |
|------|-----|
| **App Name** | 情绪能量日记 |
| **Package Name** | com.emotionenergy.diary |
| **Version** | 1.0.0 |
| **Version Code** | 1 |
| **Icon** | 上传 assets/icon.svg 或其他图标文件（PNG格式，建议512x512）|
| **Orientation** | Portrait（竖屏）|
| **Theme Color** | #667eea（应用主题色）|

#### 步骤5：生成APK

1. 检查所有信息填写正确
2. 点击 **"Generate APK"** 按钮
3. 等待生成完成（通常1-3分钟）
4. 下载生成的APK文件

#### 步骤6：测试APK

1. 将APK文件传输到手机
2. 在手机设置中允许安装未知来源应用
3. 点击APK文件安装
4. 测试所有功能是否正常

---

## 📱 方案2：AppGyver（功能强大）

### 优点：

✅ 功能强大，支持更多自定义
✅ 可以实时预览应用
✅ 支持添加插件
✅ 可以生成签名APK

### 详细步骤：

#### 步骤1：注册账号

1. 访问：**https://www.appgyver.com/**
2. 点击右上角的 **"Sign Up"**
3. 填写邮箱和密码
4. 验证邮箱

#### 步骤2：创建新项目

1. 登录后点击 **"Create New Project"**
2. 选择 **"Start from scratch"**
3. 命名项目：`情绪能量日记`
4. 选择平台：**Android**

#### 步骤3：添加Web View组件

1. 点击左侧的 **"Add Component"**
2. 选择 **"Web View"** 组件
3. 在右侧的HTML编辑器中：
   - 将 `www/index.html` 的内容复制粘贴进去
   - 或者点击 **"Upload Files"** 上传整个 `www` 文件夹

#### 步骤4：配置应用设置

点击 **"App Settings"** 标签页，配置以下信息：

| 设置项 | 值 |
|--------|-----|
| **App Name** | 情绪能量日记 |
| **Package Name** | com.emotionenergy.diary |
| **Version** | 1.0.0 |
| **Icon** | 上传图标文件 |
| **Status Bar** | Default（默认）|
| **Orientation** | Portrait（竖屏）|
| **Theme Color** | #667eea |

#### 步骤5：下载APK

1. 点击顶部的 **"Build"** 按钮
2. 等待构建完成（通常2-5分钟）
3. 点击 **"Download APK"** 按钮
4. 下载生成的APK文件

---

## 🎯 方案3：使用Android Studio（适合长期维护）

如果你已经安装了Android Studio，可以使用这个方案。

### 步骤1：打开项目

1. 打开Android Studio
2. 点击 **"Open an Existing Project"**
3. 选择项目目录：`d:\软件开发\Emotion Energy Diary\android`

### 步骤2：接受许可证

1. 等待Gradle同步完成
2. 如果提示需要接受许可证，点击 **"Accept"**
3. 等待SDK下载完成

### 步骤3：构建APK

1. 点击菜单：**Build** → **Build Bundle(s) / APK(s)** → **Build APK(s)**
2. 等待构建完成
3. 点击通知中的 **"locate"** 链接
4. APK文件位置：`android\app\build\outputs\apk\debug\app-debug.apk`

### 步骤4：生成签名APK（用于上架）

1. 生成签名密钥：

```bash
keytool -genkey -v -keystore emotion-energy-diary.keystore -alias emotion-energy-diary -keyalg RSA -keysize 2048 -validity 10000
```

2. 在 `android\app\build.gradle` 中配置签名

3. 构建 **Release** APK

---

## 📋 上架酷安准备

### 准备材料清单：

- ✅ **APK文件**：使用上述方法生成的APK
- ✅ **应用图标**：512x512 PNG格式
- ✅ **应用截图**：至少2张，建议5张（不同页面）
  - 首页
  - 记录页面
  - 趋势页面
  - 设置页面
  - 历史记录页面
- ✅ **应用描述**：参考README.md
- ✅ **隐私政策**：使用PERMISSIONS.md的内容
- ✅ **版本说明**：更新日志

### 上架步骤：

1. 访问酷安：**https://www.coolapk.com/**
2. 注册开发者账号
3. 进入开发者后台
4. 点击 **"上传应用"**
5. 填写应用信息：
   - 应用名称：情绪能量日记
   - 应用描述：极简、轻量、隐私安全的情绪记录应用
   - 应用分类：工具
   - 标签：情绪、日记、记录、治愈
6. 上传APK文件
7. 上传应用截图
8. 上传应用图标
9. 填写隐私政策链接
10. 提交审核

---

## 🔧 常见问题

### Q1: APK无法安装？

**A**: 检查手机设置：
- Android 8.0+：设置 → 安全 → 允许未知来源应用
- Android 7.0及以下：设置 → 安全 → 未知来源

### Q2: 应用闪退？

**A**: 检查以下几点：
1. 确保所有文件都已上传（index.html、styles.css、app.js）
2. 检查manifest.json配置是否正确
3. 在不同手机上测试

### Q3: 图标不显示？

**A**: 
1. 确保上传了正确的图标文件
2. 图标格式：PNG或SVG
3. 图标尺寸：建议512x512

### Q4: 功能不正常？

**A**: 
1. 确保app.js已上传
2. 检查浏览器控制台是否有错误
3. 确保localStorage功能正常

### Q5: APK文件太大？

**A**: 
1. 启用代码混淆（minifyEnabled）
2. 压缩图片资源
3. 移除未使用的依赖

---

## 🎯 推荐方案

为了快速上架酷安，我强烈推荐：

1. **Website 2 APK Builder** - 最简单、最快、完全免费
2. **AppGyver** - 功能强大，适合自定义

选择Website 2 APK Builder，3分钟内就能生成APK！
