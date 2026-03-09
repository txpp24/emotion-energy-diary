# Android APK 打包指南

## 方案1：使用Android Studio打包（推荐）

### 前置条件

1. 安装 **Android Studio**：https://developer.android.com/studio
2. 安装 **Java JDK 17 或更高版本**
3. 配置 **Android SDK**

### 打包步骤

#### 1. 打开Android项目

```bash
cd android
```

或者在项目根目录运行：

```bash
npx cap open android
```

#### 2. 在Android Studio中构建APK

1. 等待Gradle同步完成
2. 点击菜单：**Build** → **Build Bundle(s) / APK(s)** → **Build APK(s)**
3. 等待构建完成
4. 构建完成后，点击通知中的 **locate** 链接
5. APK文件位置：`android/app/build/outputs/apk/debug/app-debug.apk`

#### 3. 生成签名APK（用于上架酷安）

1. 生成签名密钥：

```bash
keytool -genkey -v -keystore emotion-energy-diary.keystore -alias emotion-energy-diary -keyalg RSA -keysize 2048 -validity 10000
```

2. 在 `android/app/build.gradle` 中配置签名：

```gradle
android {
    signingConfigs {
        release {
            storeFile file("emotion-energy-diary.keystore")
            storePassword "your-store-password"
            keyAlias "emotion-energy-diary"
            keyPassword "your-key-password"
        }
    }

    buildTypes {
        release {
            signingConfig signingConfigs.release
            minifyEnabled false
            proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'
        }
    }
}
```

3. 构建签名APK：

点击菜单：**Build** → **Build Bundle(s) / APK(s)** → **Build APK(s)**

选择 **release** 变体，然后点击 **Build**

4. 签名APK位置：`android/app/build/outputs/apk/release/app-release.apk`

## 方案2：使用在线打包平台（无需安装Android Studio）

### 1. AppGyver（推荐）

**网址**：https://www.appgyver.com/

**步骤**：
1. 注册账号
2. 创建新项目
3. 将 `www` 目录下的文件上传
4. 配置应用名称、图标、包名
5. 点击 **Build** → **Download APK**

**优点**：
- 无需安装Android Studio
- 操作简单
- 支持实时预览

### 2. Thunkable

**网址**：https://thunkable.com/

**步骤**：
1. 注册账号
2. 创建新项目
3. 选择 **Web View** 组件
4. 将 `index.html` 的内容粘贴到HTML编辑器
5. 配置应用信息
6. 点击 **Download APK**

### 3. Glide

**网址**：https://www.glideapps.com/

**步骤**：
1. 注册账号
2. 创建新项目
3. 上传HTML文件
4. 配置应用设置
5. 下载APK

### 4. Website 2 APK Builder

**网址**：https://www.website2apk.com/

**步骤**：
1. 访问网站
2. 输入网站URL或上传HTML文件
3. 配置应用信息
4. 生成APK

**优点**：
- 完全免费
- 无需注册
- 快速生成

## 方案3：使用Cordova打包

### 安装Cordova

```bash
npm install -g cordova
```

### 创建Cordova项目

```bash
cordova create emotion-diary com.emotionenergy.diary "情绪能量日记"
cd emotion-diary
```

### 复制文件

将 `www` 目录下的所有文件复制到 `emotion-diary/www` 目录

### 添加Android平台

```bash
cordova platform add android
```

### 构建APK

```bash
cordova build android
```

APK文件位置：`platforms/android/app/build/outputs/apk/debug/app-debug.apk`

## 方案4：使用Apache Cordova Online Builder

**网址**：https://cordova.apache.org/docs/en/latest/guide/cli/

**步骤**：
1. 准备项目文件
2. 访问在线构建服务
3. 上传项目
4. 等待构建完成
5. 下载APK

## 应用配置

### 应用信息

- **应用名称**：情绪能量日记
- **包名**：com.emotionenergy.diary
- **版本**：1.0.0
- **版本代码**：1

### 应用图标

将应用图标（PNG格式，建议512x512）放置到以下位置：

```
android/app/src/main/res/
├── mipmap-hdpi/
│   └── ic_launcher.png (72x72)
├── mipmap-mdpi/
│   └── ic_launcher.png (48x48)
├── mipmap-xhdpi/
│   └── ic_launcher.png (96x96)
├── mipmap-xxhdpi/
│   └── ic_launcher.png (144x144)
└── mipmap-xxxhdpi/
    └── ic_launcher.png (192x192)
```

### 应用权限

在 `android/app/src/main/AndroidManifest.xml` 中配置权限：

```xml
<uses-permission android:name="android.permission.INTERNET" />
```

**注意**：本应用不需要其他权限

## 上架酷安

### 准备材料

1. **APK文件**：app-release.apk
2. **应用图标**：512x512 PNG
3. **应用截图**：至少2张，建议5张
4. **应用描述**：详细说明应用功能
5. **隐私政策**：参考 PERMISSIONS.md
6. **版本说明**：更新日志

### 上架步骤

1. 访问酷安官网：https://www.coolapk.com/
2. 注册开发者账号
3. 进入开发者后台
4. 点击"上传应用"
5. 填写应用信息
6. 上传APK和截图
7. 提交审核

### 审核注意事项

- 应用必须符合酷安规范
- 不能包含违规内容
- 隐私政策必须完整
- 应用功能必须正常

## 常见问题

### Q1: Gradle下载失败怎么办？

**A**:
1. 配置Gradle镜像源
2. 使用Android Studio打包
3. 使用在线打包平台

### Q2: 如何生成签名密钥？

**A**:
```bash
keytool -genkey -v -keystore emotion-energy-diary.keystore -alias emotion-energy-diary -keyalg RSA -keysize 2048 -validity 10000
```

### Q3: 如何测试APK？

**A**:
1. 在手机上安装APK
2. 允许安装未知来源应用
3. 测试所有功能
4. 确认无bug后再上架

### Q4: APK文件太大怎么办？

**A**:
1. 启用代码混淆（minifyEnabled）
2. 压缩图片资源
3. 移除未使用的依赖

### Q5: 如何更新应用？

**A**:
1. 修改版本号和版本代码
2. 重新构建APK
3. 上传到酷安
4. 填写更新日志

## 推荐方案

对于快速上架酷安，我推荐：

1. **使用AppGyver**：操作简单，无需安装Android Studio
2. **使用Website 2 APK Builder**：完全免费，快速生成
3. **使用Android Studio**：功能最全，适合长期维护

选择最适合你的方案即可！
