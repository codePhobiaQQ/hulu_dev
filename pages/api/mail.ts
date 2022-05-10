import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
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
    // const info = await transporter.sendMail({
    //   from: "vital.pereg@mail.ru", // sender address
    //   to: "vital.pereg@mail.ru", // list of receivers
    //   subject: "Application from the huntli website", // Subject line
    //   html:
    //     "<b style='text-align: center'>Notification:\n</b>" +
    //     `<p style='display: block'>${req.body.company}</p>` +
    //     `<p style='display: block'>${req.body.name}</p>` +
    //     `<p style='display: block'>${req.body.email}</p>` +
    //     `<p style='display: block'>${req.body.phone}</p>` +
    //     `<p style='display: block'>${req.body.message}</p>`,
    // });

    // const info1 = await transporter.sendMail({
    //   from: "vital.pereg@mail.ru", // sender address
    //   to: req.body.email, // list of receivers
    //   subject: "Вы оставили заявку на сайте huntli", // Subject line
    //   html:
    //     "<b style='text-align: center'>Дорогой друг!\n" +
    //     "Я ждала именно тебя, так работает поле!</b>" +
    //     "<div style='width: 80%; margin-top: 30px'>Рада, что ты подарил себе доступ к моему тёплому сообществу по прогностике по архетипам по году и по месяцам.\n" +
    //     "В течении 1 рабочего дня я приглашу тебя в чат по прогнозу и буду рада видеть тебя в качестве членов этого закрытого клуба.\n</div>" +
    //     "<div style='width: 80%; margin-top: 30px'>Надеюсь, ты верно указал свой номер и проверил активный ли у тебя телеграмм. </div>" +
    //     "<div style='width: 80%; margin-top: 30px'>Если все-таки закралась случайная ошибка в номере и доступ по истечению 1 рабочего дня тебе не открылся, свяжись со мной в телеграмм: <a target='_blank' href='https://t.me/evteeva_iri'>https://t.me/evteeva_iri</a> и мы быстро решим эту проблему.</div>",
    // });

    const apiKey = "5728571df5de391ea0996158a7adeef52361e350";
    const response = await axios.get(
      `https://companydomain.pipedrive.com/api/v1/stages?api_token=${apiKey}`
    );
    const stages: any[] = response.data.data;
    const rightStage = stages.find(
      (el: any) => el.pipeline_name == "Warm Leads WORLD"
    );
    // eslint-disable-next-line camelcase
    const stage_id: number = rightStage.id;
    // eslint-disable-next-line camelcase
    const pipeline_id: number = rightStage.pipeline_id;

    const newDeal = await axios.post(
      `https://companydomain.pipedrive.com/api/v1/deals?api_token=${apiKey}`,
      {
        title: `Huntli.io - Online Form: [${req.body.name}]`,
        pipeline_id,
        stage_id,
        status: "open",
      }
    );

    const newNote = await axios.post(
      `https://companydomain.pipedrive.com/api/v1/notes?api_token=${apiKey}`,
      {
        deal_id: newDeal.data.data.id,
        content: `<b>Request Data</b><br />
        Company: ${req.body.company} <br />
        Name: ${req.body.name} <br />
        Email: <a href="mailto:${req.body.email}">${req.body.email}</a> <br /> 
        Phone: ${req.body.phone} <br />
        Message: ${req.body.message} <br /><br /> 
        <b>Additional information:</b><br />
        Sent from the page: <a href='https://huntli.io'>huntli.io</a>`,
      }
    );

    // @ts-ignore
    return res.json({ ...newNote.data });
  } catch (e) {
    console.log(e);
    // @ts-ignore
    return res.json({ message: e.message });
  }
}
