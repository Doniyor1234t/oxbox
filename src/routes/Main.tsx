import MainLand from "components/EyeLand/Main";
import cls from "./style.module.scss";
import About from "components/AboutProject/About";
import Process from "components/HowItWork/Process";
import Benefits from "components/Benefits/Benefits";
import Faqs from "components/Faqs/Faqs";
import AppView from "src/components/AppView/AppView";

export const Main = () => {
  return (
    <main className={cls.main}>
      <MainLand />
      <About />
      <Process />
      <Benefits />
      <Faqs />
      <AppView />
    </main>
  )
};