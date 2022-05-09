import type { NextApiRequest, NextApiResponse } from "next";
import { log } from "util";
// eslint-disable-next-line @typescript-eslint/no-var-requires
var nodemailer = require("nodemailer");

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    console.log(req.body.email);
    console.log(req.body);

    const transporter = await nodemailer.createTransport({
      host: "smtp.mail.ru",
      port: 465,
      pool: true,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "vital.pereg@mail.ru", // generated ethereal user
        pass: "zctvXJ8YFMtZK1KPZu2J", // generated ethereal password
      },
    });
    console.log("created");
    const info = await transporter.sendMail({
      from: "vital.pereg@mail.ru", // sender address
      to: "vital.pereg@mail.ru", // list of receivers
      subject: "Application from the huntli website", // Subject line
      html:
        "<b style='text-align: center'>Notification:\n</b>" +
        `<p style='display: block'>${req.body.company}</p>` +
        `<p style='display: block'>${req.body.name}</p>` +
        `<p style='display: block'>${req.body.email}</p>` +
        `<p style='display: block'>${req.body.phone}</p>` +
        `<p style='display: block'>${req.body.message}</p>`,
    });

    const info1 = await transporter.sendMail({
      from: "vital.pereg@mail.ru", // sender address
      to: req.body.email, // list of receivers
      subject: "Вы оставили заявку на сайте huntli", // Subject line
      html:
        "<b style='text-align: center'>Дорогой друг!\n" +
        "Я ждала именно тебя, так работает поле!</b>" +
        "<div style='width: 80%; margin-top: 30px'>Рада, что ты подарил себе доступ к моему тёплому сообществу по прогностике по архетипам по году и по месяцам.\n" +
        "В течении 1 рабочего дня я приглашу тебя в чат по прогнозу и буду рада видеть тебя в качестве членов этого закрытого клуба.\n</div>" +
        "<div style='width: 80%; margin-top: 30px'>Надеюсь, ты верно указал свой номер и проверил активный ли у тебя телеграмм. </div>" +
        "<div style='width: 80%; margin-top: 30px'>Если все-таки закралась случайная ошибка в номере и доступ по истечению 1 рабочего дня тебе не открылся, свяжись со мной в телеграмм: <a target='_blank' href='https://t.me/evteeva_iri'>https://t.me/evteeva_iri</a> и мы быстро решим эту проблему.</div>",
    });
    // @ts-ignore
    res.json({ info, info1 });
  } catch (e) {
    console.log(e);
    // @ts-ignore
    res.json({ message: e.message });
  }
}
