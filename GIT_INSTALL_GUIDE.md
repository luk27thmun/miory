# Git安装指南

**重要提醒**：系统中仍然没有检测到Git。您需要先安装Git，然后才能将博客上传到GitHub。以下是在Windows上安装Git的详细步骤：

## 安装步骤

1. **下载Git安装包**
   - 访问官方下载地址：https://git-scm.com/downloads/win
   - 大多数Windows系统都是64位的，请选择X64版本

2. **运行安装程序**
   - 下载完成后，双击安装文件开始安装
   - 安装过程中可以默认选择所有选项，无需特殊配置
   - 如有需要，可以选择自定义安装路径

3. **验证安装**
   - 安装完成后，按下 Win+R 键，输入 cmd 打开命令提示符
   - 输入 `git --version`，如果显示版本信息，则安装成功

4. **配置Git（安装完成后）**
   - 打开命令提示符，输入以下命令配置用户名和邮箱：
     ```
     git config --global user.name "你的GitHub用户名"
     git config --global user.email "你的GitHub邮箱"
     ```

## 安装完成后上传博客到GitHub的步骤

安装完成Git后，请按照以下步骤上传博客：

1. 在博客目录下初始化Git仓库：
   ```
   cd d:\blog
   git init
   ```

2. 添加所有文件到暂存区：
   ```
   git add .
   ```

3. 提交更改：
   ```
   git commit -m "Initial commit of blog"
   ```

4. 添加远程仓库：
   ```
   git remote add origin https://github.com/luk27thmun/miory.git
   ```

5. 推送到GitHub：
   ```
   git push -u origin main
   ```

如果遇到权限问题，可能需要在GitHub上生成访问令牌（token）用于身份验证。