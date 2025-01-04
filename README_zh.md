# bilibili-following-exporter

一个用于导出B站关注列表的工具集，支持Python脚本和浏览器插件两种使用方式。

[![GitHub license](https://img.shields.io/github/license/fangd123/bilibili-following-exporter)](https://github.com/fangd123/bilibili-following-exporter/blob/main/LICENSE)

[![GitHub stars](https://img.shields.io/github/stars/fangd123/bilibili-following-exporter)](https://github.com/fangd123/bilibili-following-exporter/stargazers)

[![中文](https://img.shields.io/badge/语言-中文-red.svg)](README_CN.md)

## 功能特点

- ✨ 支持导出完整的B站关注列表
- 📊 数据导出为Excel格式，方便查看和分析
- 🚀 提供Python脚本和浏览器插件两种使用方式
- 🔄 自动处理分页，支持大量关注数据
- 💡 包含丰富的用户信息（认证状态、会员状态等）

## 导出数据包含字段

- UID
- 用户名
- 个性签名
- 关注时间
- 认证状态
- 认证信息
- 会员状态

## 使用方法


### Python脚本版本

1. 克隆仓库
```bash
git clone https://github.com/fangd123/bilibili-following-exporter.git
cd bilibili-following-exporter
```

2. 安装依赖
```bash
pip install -r requirements.txt
```

3. 运行脚本
```bash
python bili_following.py
```

4. 根据提示输入：
   - 要查询的用户UID
   - Cookie中的SESSDATA值（需要登录B站后获取）

##### 如何从Chrome浏览器获取B站Cookie

方法一：使用开发者工具

1. 打开Chrome浏览器并访问[B站](https://www.bilibili.com/)
2. 确保已经登录你的B站账号
3. 按下`F12`键或`右键点击 → 检查`打开Chrome开发者工具
4. 切换到"Network（网络）"标签页
5. 勾选"Preserve log（保留日志）"选项
6. 刷新页面
7. 在网络日志中点击任意一个对bilibili.com的请求
8. 在请求详情中，找到"Headers（标头）"部分
9. 向下滚动找到"Request Headers（请求标头）"中的"Cookie"字段
10. 在cookie字符串中找到`SESSDATA=xxx`部分
11. 仅复制`SESSDATA=`后面的值部分（不要包含末尾的分号）

方法二：使用Application标签页

1. 打开Chrome浏览器并访问[B站](https://www.bilibili.com/)
2. 确保已经登录
3. 按下`F12`键或`右键点击 → 检查`打开开发者工具
4. 切换到"Application（应用程序）"标签页
   - 如果看不到Application标签，点击`>>`图标找到它
5. 在左侧边栏展开"Cookies"，点击"https://www.bilibili.com"
6. 找到Name列中显示"SESSDATA"的行
7. 复制"Value（值）"列中的内容

注意事项：

- Cookie是敏感信息，请注意保管
- 不要将你的Cookie分享给他人
- Cookie会在一定时间后过期
- 如果你退出登录，该Cookie将失效
- 建议在使用完脚本后及时删除保存的Cookie信息

常见问题：

**Q: 为什么找不到Application标签？**
A: 如果在顶部标签栏中看不到Application，点击标签栏最右侧的`>>`箭头，在下拉菜单中找到Application。

**Q: Cookie复制后显示无效怎么办？**
A: 
1. 确保你已经登录B站
2. 尝试重新登录后再次获取Cookie
3. 确保只复制了SESSDATA的值，不要包含`SESSDATA=`这部分

**Q: Cookie多久会过期？**
A: B站的Cookie通常会在几天到几周内过期，具体时间可能会变化。建议在使用时重新获取Cookie。


### 浏览器插件版本（Tampermonkey）

1. 安装 [Tampermonkey](https://www.tampermonkey.net/) 浏览器扩展

2. 点击[这里](https://github.com/fangd123/bilibili-following-exporter/raw/main/userscript/bili_following.user.js)安装脚本

3. 访问任意B站用户空间页面（例如：https://space.bilibili.com/xxxxxx）

4. 点击页面右下角的"导出关注列表"按钮

## 注意事项

- 需要登录B站账号才能获取数据
- 请合理控制请求频率，避免对B站服务器造成压力
- 导出的数据仅供个人使用，请勿用于商业用途
- Python版本需要 Python 3.6 或更高版本

## 项目结构

```
bilibili-following-exporter/
├── README.md
├── requirements.txt
├── python/
│   └── bili_following.py
└── userscript/
    └── bili_following.user.js
```

## 更新日志

### v1.0.0 (2024-01-04)
- 🎉 首次发布
- ✨ 支持Python脚本和浏览器插件两种使用方式
- 📦 完整的关注列表导出功能

## 贡献指南

欢迎提交 Issue 和 Pull Request，一起完善这个工具！

1. Fork 本仓库
2. 创建新的功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交改动 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交 Pull Request

## 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件

## 作者

- GitHub: [@fangd123](https://github.com/fangd123)

## 致谢

- 感谢网友提供的B站API服务解析
- 感谢所有贡献者的支持

## 免责声明

本工具仅供学习和研究使用，请勿用于商业用途。使用本工具时请遵守B站的用户协议和相关法律法规。对于因使用本工具而导致的任何问题，本项目概不负责。