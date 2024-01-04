import { createServer } from "miragejs";
import pathes from "../../router/pathes";

createServer({
  routes() {
    this.namespace = "api";

    this.get("/qa", () => {
      return {
        data: [
          {
            title: "چگونه اشتراک خود را تمدید کنیم؟",
            body: "با نیرا تماس بگیرید.",
          },
          {
            title: "چگونه برای مدیریت بخش ها دسترسی ایجاد کنیم؟",
            body: "از گزینه تنظیمات در پروفایل کاربری وارد بخش دسترسی ها شوید و دسترسی جدید را برای مدیر بخش مورد نظر ایجاد کنید. ",
          },
        ],
      };
    });

    this.get("/login", () => {
      return {
        data: [
          { token: "kdfldklknlnlnln113lnnnvslnsvdnl", role: "superadmin" },
        ],
      };
    });

    this.get("/admindashboard", () => {
      return {
        data: [
          {
            title: "استخر",
            icon: "pool",
            path: pathes.POOL,
            body: "اطلاعات رزرو این ماه",
          },
          {
            title: "تشریفات",
            icon: "venue",
            path: pathes.VENUE,
            body: "اطلاعات رزرو این ماه",
          },
        ],
      };
    });

    this.get("/sample-table-rows", () => {
      return {
        data: [
          {
            id: 1,
            date: "1402/03/11",
            commission: "120000",
            commissionStatus: "درانتظار تایید",
            projectName: "لوتوس",
            state: "تهران",
            city: "تهران",
            flors: "11",
            usage: "اداری تجاری",
            owner: "احسان احسانی",
            agent: "احمدی نیا",
            subject: "موضوع نمونه",
            text: "متن نمونه پیام ",
            status: "فعال",
            tel: "091200000",
            operation: "",
          },
          {
            id: 2,
            date: "1402/03/11",
            commission: "120000",
            commissionStatus: "تاییدشده",
            projectName: "برج آرش",
            state: "تهران",
            city: "تهران",
            flors: "11",
            usage: "اداری تجاری",
            owner: "بابک راد",
            agent: "رضا موسوی",
            subject: "موضوع نمونه",
            text: "متن نمونه پیام ",
            status: "فعال",
            tel: "091200000",
            operation: "",
          },
          {
            id: 3,
            date: "1402/03/11",
            commission: "120000",
            commissionStatus: "تاییدشده",
            projectName: "مهرآفرین",
            state: "تهران",
            city: "تهران",
            flors: "22",
            usage: "اداری تجاری",
            owner: "حسین حسینی",
            agent: "کامران دلیر",
            subject: "موضوع نمونه",
            text: "متن نمونه پیام ",
            status: "فعال",
            tel: "091200000",
            operation: "",
          },
          {
            id: 4,
            date: "1402/03/11",
            commission: "120000",
            commissionStatus: "تاییدشده",
            projectName: "مهرآفرین",
            state: "فارس",
            city: "شیراز",
            flors: "44",
            usage: "اداری تجاری",
            owner: "حسین رضایی پور",
            agent: "پور راد",
            subject: "موضوع نمونه",
            text: "متن نمونه پیام ",
            status: "فعال",
            tel: "091200000",
            operation: "",
          },
          {
            id: 5,
            date: "1401/03/11",
            commission: "120000",
            commissionStatus: "تاییدشده",
            projectName: "مهرآفرین",
            state: "تهران",
            city: "تهران",
            flors: "11",
            usage: "اداری تجاری",
            owner: "حسین اکبری",
            agent: "بهرام راد",
            subject: "موضوع نمونه",
            text: "متن نمونه پیام ",
            status: "فعال",
            tel: "091200000",
            operation: "",
          },
          {
            id: 6,
            date: "1403/07/11",
            commission: "120000",
            commissionStatus: "پرداخت شده",
            projectName: "دماوند",
            state: "خراسان",
            city: "مشهد",
            flors: "44",
            usage: "مسکونی",
            owner: "رضا رضایی",
            agent: "سعید سعیدی",
            subject: "موضوع نمونه",
            text: "متن نمونه پیام ",
            status: "غیرفعال",
            tel: "091200000",
            operation: "",
          },
        ],
      };
    });
  },
});
