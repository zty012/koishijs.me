import pilot from "../assets/pilot.png";
import { Statistics } from "./Statistics";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  关于{" "}
                </span>
                NoneBot
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                NoneBot2 是一个现代、跨平台、可扩展的 Python
                聊天机器人框架（下称 NoneBot），它基于 Python
                的类型注解和异步优先特性（兼容同步），能够为你的需求实现提供便捷灵活的支持。同时，NoneBot
                拥有大量的开发者为其开发插件，用户无需编写任何代码，仅需完成环境配置及插件安装，就可以正常使用
                NoneBot。
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
