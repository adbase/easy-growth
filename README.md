# Easy Growth OS

前后端分离：后端为 **Spring Boot** REST API，前端为 **React（Vite + TypeScript）**。

## 仓库结构

| 目录 | 说明 |
|------|------|
| `backend/` | Java 17+ · Spring Boot 3.3，业务包：`agent`、`organization`、`workflow`、`console`、`common/config` |
| `frontend/` | React 19 + Vite，开发时通过代理访问 `/api` → `http://localhost:8080` |

## 业务目标（骨架）

- 以 **OpenClaw** 为消息与 Agent 运行底座。
- 以 **CEO + 多部门数字人** 为组织方式。
- 以 **审批流** 为核心控制机制。
- 以 **前端中台** 为监控界面。

## 本地开发

**1. 启动后端（端口 8080）**

```bash
cd backend
mvn spring-boot:run
```

健康检查：<http://localhost:8080/api/health>

**2. 启动前端（端口 5173）**

```bash
cd frontend
npm install
npm run dev
```

浏览器打开 Vite 提示的地址；首页会请求 `/api/health`（经 Vite 代理到后端）。

**3. 测试后端**

```bash
cd backend
mvn test
```

## 联调说明

- 开发环境：前端使用 **同源相对路径** `fetch('/api/...')`，由 Vite `server.proxy` 转发到后端，无需处理跨域。
- 若前端单独部署到其它域名访问后端，后端已配置 `app.cors`（见 `backend/src/main/resources/application.yml`），可按环境追加 `allowed-origin-patterns`。

## 生产构建（简述）

- 后端：`cd backend && mvn -Pprod package`（按需加 profile）。
- 前端：`cd frontend && npm run build`，将 `frontend/dist` 静态资源交由 Nginx 等托管；API 仍指向同一域名的 `/api` 或由网关反代到 Spring Boot。
