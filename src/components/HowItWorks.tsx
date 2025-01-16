import { GiftIcon, MapIcon, MedalIcon, PlaneIcon } from "../components/Icons";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "异步优先",
    description:
      "NoneBot 基于 Python asyncio / trio 编写，并在异步机制的基础上进行了一定程度的同步函数兼容。",
  },
  {
    icon: <MapIcon />,
    title: "完整的类型注解",
    description:
      "NoneBot 参考 PEP 484 等 PEP 完整实现了类型注解，通过 Pyright（Pylance） 检查。配合编辑器的类型推导功能，能将绝大多数的 Bug 杜绝在编辑器中（编辑器支持）。",
  },
  {
    icon: <PlaneIcon />,
    title: "开箱即用",
    description:
      "NoneBot 提供了使用便捷、具有交互式功能的命令行工具--nb-cli，使得用户初次接触 NoneBot 时更容易上手。使用方法请阅读本文档指南以及 CLI 文档。",
  },
  {
    icon: <GiftIcon />,
    title: "插件系统",
    description:
      "插件系统是 NoneBot 的核心，通过它可以实现机器人的模块化以及功能扩展，便于维护和管理。",
  },
];

export const HowItWorks = () => {
  return (
    <section id="howItWorks" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold ">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          特色
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        需要注意的是，NoneBot 仅支持 Python 3.9 以上版本
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card key={title} className="bg-muted/50">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
