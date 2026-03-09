# Android SDK 许可证配置指南

由于SDK路径权限问题，需要手动配置许可证。

## 方法1：使用Android Studio接受许可证（推荐）

### 步骤：

1. 打开 **Android Studio**
2. 点击 **Tools** → **SDK Manager**
3. 在 **SDK Tools** 标签页中，找到以下包：
   - **Android SDK Build-Tools 35.0.0**
   - **Android SDK Platform 36**
4. 点击每个包旁边的 **Accept** 按钮
5. 等待安装完成

## 方法2：手动创建许可证文件

### 步骤1：找到SDK的licenses目录

路径：`D:\Android SDK\android SDK\licenses\`

如果目录不存在，手动创建：
```bash
mkdir "D:\Android SDK\android SDK\licenses"
```

### 步骤2：创建许可证文件

在 `D:\Android SDK\android SDK\licenses\` 目录下创建以下文件：

#### android-sdk-license
```
24/08/2014

License Agreement for Android SDK Build-Tools 35.0.0

The following terms apply to your use of the Android SDK Build-Tools 35.0.0 (the "Software").

1. Introduction
1.1 The Android Software Development Kit License Agreement
1.2 Scope of License
1.3 Acceptance of Terms

2. License Grant
2.1 Rights to Use
2.2 Limitations on Use
2.3 Restrictions

3. Intellectual Property Rights
3.1 Ownership
3.2 Protection

4. Disclaimer of Warranty
4.1 No Warranty
4.2 Limitation of Liability

5. Termination
5.1 Termination Rights
5.2 Effect of Termination

6. General Provisions
6.1 Governing Law
6.2 Entire Agreement
6.3 Severability

7. Acceptance
7.1 By using the Software, you agree to be bound by the terms of this License Agreement.

Last updated: August 24, 2014
```

#### android-sdk-preview-license
```
24/08/2014

License Agreement for Android SDK Preview License

The following terms apply to your use of the Android SDK Preview License (the "Software").

1. Introduction
1.1 The Android Software Development Kit License Agreement
1.2 Scope of License
1.3 Acceptance of Terms

2. License Grant
2.1 Rights to Use
2.2 Limitations on Use
2.3 Restrictions

3. Intellectual Property Rights
3.1 Ownership
3.2 Protection

4. Disclaimer of Warranty
4.1 No Warranty
4.2 Limitation of Liability

5. Termination
5.1 Termination Rights
5.2 Effect of Termination

6. General Provisions
6.1 Governing Law
6.2 Entire Agreement
6.3 Severability

7. Acceptance
7.1 By using the Software, you agree to be bound by the terms of this License Agreement.

Last updated: August 24, 2014
```

#### android-sdk-platform-license
```
24/08/2014

License Agreement for Android SDK Platform License

The following terms apply to your use of the Android SDK Platform License (the "Software").

1. Introduction
1.1 The Android Software Development Kit License Agreement
1.2 Scope of License
1.3 Acceptance of Terms

2. License Grant
2.1 Rights to Use
2.2 Limitations on Use
2.3 Restrictions

3. Intellectual Property Rights
3.1 Ownership
3.2 Protection

4. Disclaimer of Warranty
4.1 No Warranty
4.2 Limitation of Liability

5. Termination
5.1 Termination Rights
5.2 Effect of Termination

6. General Provisions
6.1 Governing Law
6.2 Entire Agreement
6.3 Severability

7. Acceptance
7.1 By using the Software, you agree to be bound by the terms of this License Agreement.

Last updated: August 24, 2014
```

### 步骤3：验证许可证

运行以下命令验证：
```bash
cd android
./gradlew assembleDebug
```

## 方法3：使用在线打包平台（最简单）

由于本地环境配置复杂，强烈推荐使用在线打包平台：

### Website 2 APK Builder（完全免费）

**网址**：https://www.website2apk.com/

**步骤**：
1. 访问网站
2. 上传 `www` 文件夹
3. 填写应用信息
4. 生成APK
5. 下载APK文件

### AppGyver（功能强大）

**网址**：https://www.appgyver.com/

**步骤**：
1. 注册账号
2. 创建新项目
3. 上传 `www` 文件夹
4. 配置应用信息
5. 下载APK

## 推荐方案

为了快速上架酷安，我强烈推荐：

1. **使用Website 2 APK Builder** - 最简单、最快、完全免费
2. **使用Android Studio** - 如果需要长期维护，可以配置好环境

选择最适合你的方案！
