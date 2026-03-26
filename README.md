# Easy Growth OS (Skeleton)

一个空的 Java Spring Boot 项目骨架，用于承载以下业务目标：

- 以 **OpenClaw** 为消息与 Agent 运行底座。
- 以 **CEO + 多部门数字人** 为组织方式。
- 以 **审批流** 为核心控制机制。
- 以 **前端中台** 为监控界面。

## 目录规划（仅骨架）

- `agent/`：OpenClaw 消息与 Agent 运行相关能力。
- `organization/`：CEO 与多部门数字人组织模型。
- `workflow/`：审批流引擎与流程编排。
- `console/`：前端中台接口与监控聚合。
- `common/config/`：基础配置。

> 当前为“空项目骨架”，仅完成启动类与基础测试，便于后续模块化扩展。

## 启动

```bash
mvn spring-boot:run
```

## 测试

```bash
mvn test
```
