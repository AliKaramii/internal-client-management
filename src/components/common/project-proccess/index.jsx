import ProcessItem from "./process-item";
const proccessSampleData = [
  {
    step: 1,
    stepTitle: "طراحی ODN plan",
    desc: "طراحی برای واحد های اداری و مسکونی انجام شد",
    date: "1401/05/16",
  },
  {
    step: 2,
    stepTitle: "طراحی رایزردیاگرام",
    desc: "طراحی برای واحد های اداری و مسکونی انجام شد",
    date: "1401/05/26",
  },
  {
    step: 3,
    stepTitle: "لیست متریال پیشنهادی ",
    desc: "متره و متریال پیشنهادی فاطر برای پروژه شما همراه با قیمت برای شما ارسال شد ",
    date: "1401/06/16",
  },
  {
    step: 4,
    stepTitle: "فاکتور تجهیزات برای شما صادر شد",
    desc: "برای پرداخت  50% پیشپرداخت تولید اقدام فرمایید",
    date: "1401/07/22",
  },
  {
    step: 5,
    stepTitle: "ارسال پارت اول کالا",
    desc: "کالای پسیو شما در تاریخ 1401/08/11 برای  ارسال شد",
    date: "1401/07/05",
  },
];
function ProjectProcess() {
  return (
    <>
      {proccessSampleData
        .slice(0)
        .reverse()
        .map((stepData, index) => {
          return <ProcessItem data={stepData} key={index} />;
        })}
    </>
  );
}

export default ProjectProcess;
