# 博客上传指南

## 当前状态

系统中**未安装Git**，无法直接执行GitHub上传操作。您使用的是Windows 11系统，需要先安装Git工具。

## 必须执行的步骤

### 1. 安装Git

1. **下载Git安装包**
   - 访问官方下载地址：https://git-scm.com/downloads/win
   - 为Windows 11系统选择64位版本（X64）

2. **运行安装程序**
   - 双击下载的安装文件
   - 安装过程中**保持所有默认设置**
   - 安装完成后**重启命令提示符**或终端

3. **验证安装**
   - 按下 Win+R 键，输入 cmd 打开命令提示符
   - 输入 `git --version`
   - 如果显示版本信息，则安装成功

### 2. 配置Git

安装完成后，需要配置您的GitHub用户名和邮箱：

```bash
# 替换为您的GitHub用户名
git config --global user.name "您的GitHub用户名"

# 替换为您的GitHub邮箱
git config --global user.email "您的GitHub邮箱"
```

### 3. 上传博客到GitHub

完成上述配置后，执行以下命令：

```bash
# 进入博客目录
cd d:\blog

# 初始化Git仓库
git init

# 添加所有文件
git add .

# 提交更改
git commit -m "Initial commit of blog"

# 添加远程仓库
git remote add origin https://github.com/luk27thmun/miory.git

# 推送到GitHub
git push -u origin main
```

## 常见问题

- **权限错误**：如果推送时出现权限问题，需要在GitHub上生成访问令牌（Personal Access Token）
- **认证失败**：Windows可能会弹出凭据管理器，输入您的GitHub账号信息
- **分支问题**：如果远程仓库已有分支，可能需要先拉取再推送

## 注意事项

请确保您已：
1. 在GitHub上创建了仓库（https://github.com/luk27thmun/miory.git）
2. 安装并配置了Git
3. 能够访问互联网

一旦您完成Git的安装和配置，我可以协助您完成上传操作。