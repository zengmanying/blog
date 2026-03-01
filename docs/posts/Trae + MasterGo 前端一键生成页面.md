---
title: "Trae + MasterGo 前端一键生成页面"
date: 2025-05-19
description: "使用 Trae 编辑器配合 MasterGo MCP Server 实现设计到代码的一键生成"
category: 技术文章
tags:
  - 前端
  - MCP
  - Trae
  - MasterGo
---

# Trae + MasterGo 前端一键生成页面


MCP 作为一种标准化的上下文管理协议，为设计师和开发团队提供了更高效的协作方式。通过支持 MCP，MasterGo 不仅打破了工具间的信息孤岛，还为复杂的设计到开发流程提供了强大的技术支撑。

借助 MasterGo MCP Server，设计师和开发团队可以实现更智能的设计到代码转换。MCP Server 提供结构化的布局信息，与 AI 编码工具（如 Cursor / Vscode / Trae）无缝集成，避免了传统设计到开发流程中因页面截图等方式带来的误差，极大提升了工作效率。

# 前置安装

##### 1.  安装Trae编辑器

在<https://www.trae.ai/> 下载安装包安装Trae编辑器

##### 2.  在Trae插件市场安装Cline

![微信截图\_20250519094421.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/db075e5f1d294320a00dfa034dfbb8df~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg6Ieq54S25Y23YmFsYWxh:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjg3Njc5NDE0MTE2MjA5MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1772895648&x-orig-sign=Vi6yVRmOrWR%2BCqIFsfi6CKm0GTg%3D)

##### 3.  给Cline 配置大模型

我的配置如下，大家也可以自行配置

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/2d922086fd0344a8883fc8c74fc525e0~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg6Ieq54S25Y23YmFsYWxh:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjg3Njc5NDE0MTE2MjA5MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1772895447&x-orig-sign=zpKw4VG640KuINcsmyWtuXHcYMc%3D)

##### 4.  安装mastergo-magic-mcp

首先在MasterGo官网（<https://mastergo.com/files/account?tab=security）> 安全设置中生成令牌并复制

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/8dfe5669209a4e8d8da68c4d0768dcff~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg6Ieq54S25Y23YmFsYWxh:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjg3Njc5NDE0MTE2MjA5MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1772895447&x-orig-sign=oFLrmBYAXpzIT98Ct%2FwEG4utMlQ%3D)

然后在Trae编辑器Cline里配置 mastergo-magic-mcp

在Cline中打开MCP Servers 配置JSON文件，在JSON文件里添加如下mastergo-magic-mcp 配置代码

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/1950018e47b24ac8b1d3d32780ac2d21~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg6Ieq54S25Y23YmFsYWxh:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjg3Njc5NDE0MTE2MjA5MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1772895447&x-orig-sign=glL0jdigA2%2BwcVgjMi9U%2B7tCZCY%3D)

**windows 配置：**

```json
    {
      "mcpServers": {
        "mastergo-magic-mcp": {
          "command": "cmd",
          "args": [
            "/c",
            "npx",
            "-y",
            "@mastergo/magic-mcp",
            "--token=<MG_MCP_TOKEN>",
            "--url=https://mastergo.com"
          ]
        }
      }
    }
```

**mac配置：**

```JSON
{
  "mcpServers": {
    "mastergo-magic-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@mastergo/magic-mcp",
        "--token=<MG_MCP_TOKEN>",
        "--url=https://mastergo.com"
      ],
      "env": {
        "NPM_CONFIG_REGISTRY": "https://registry.npmjs.org/"
      }
    }
  }
}
```

配置好后你会看到如下图，mastergo-magic-mcp 已在MCP Servers列表中了

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/e6a9f51bf77e481ea65897901b4d2a88~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg6Ieq54S25Y23YmFsYWxh:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjg3Njc5NDE0MTE2MjA5MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1772895447&x-orig-sign=JLrvz0vh%2FcHFHDtkHcG%2BgEnJi%2FE%3D)

到这我们前置安装、配置工作就完成了，接下来我们进入开发阶段。

# 使用mastergo-magic-mcp 开发页面

### 1. 复制容器链接

我们在MasterGo里找一个设计页面，然后复制容器链接

我找了AntDesign Pro 给大家做示范，为了减少大模型token我们选择页面里的一小块。

选中块图层右键 -> 复制/粘贴为 -> 复制容器链接

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/cebffe22660549de8a1a4af869d1614f~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg6Ieq54S25Y23YmFsYWxh:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjg3Njc5NDE0MTE2MjA5MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1772895447&x-orig-sign=r%2Bm%2BvTY9dcU3rma084xvDEF16SE%3D)

### 2. 在Trae里生成代码

##### 1. 初始化工程

我们可以先用vite初始化一个vue工程，并安装ant-design-vue 及 @ant-design/icons-vue，在main.ts 里全局引入。

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/1130a12e3dee4c3d8fa9ad8fa992b13c~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg6Ieq54S25Y23YmFsYWxh:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjg3Njc5NDE0MTE2MjA5MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1772895447&x-orig-sign=aSCVxdh3jdxScJMYLGxPqo%2FwAR8%3D)

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/0e1d747d3bce4f7f95e32d50875fd391~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg6Ieq54S25Y23YmFsYWxh:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjg3Njc5NDE0MTE2MjA5MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1772895447&x-orig-sign=VhWQ64mkRXISjOCb%2Bv4ehWJO1zs%3D)

##### 2. 生成提示语

然后在Cline里点击新建任务，在提示词输入框里粘贴我们刚才复制的页面链接，还可以加入使代码生成更精确的其他提示语

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/c8648cc8cb2f40c79ad63d6eff735130~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg6Ieq54S25Y23YmFsYWxh:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjg3Njc5NDE0MTE2MjA5MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1772895447&x-orig-sign=%2BW9NSu71Kp3k9sBxk%2FEdRu0K86A%3D)

##### 3. 生成代码

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/824438be1bb24a0d90c6e6073077dab3~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg6Ieq54S25Y23YmFsYWxh:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjg3Njc5NDE0MTE2MjA5MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1772895447&x-orig-sign=ZiBqtZxSpdzXjnNj9b6vMsI4Bto%3D)

##### 4. 预览效果

我们启动工程，打开页面看下还原效果，还原程度应该达到了 99% 哈哈哈

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/45ec2d04ed564eb6a3bfdcbd3f77669e~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg6Ieq54S25Y23YmFsYWxh:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjg3Njc5NDE0MTE2MjA5MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1772895447&x-orig-sign=hAbKF%2BHHj0PgNE4pOYKLsfs6ZXs%3D)

除了还原ant-design, 各主流前端框架都可以，自定义前端框架也是可以的。具体操作可查看MasterGo官网。
