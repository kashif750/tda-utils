const getEmailTemplate = (template_key) => {
	let template = "";
	switch (template_key) {
		case "forgot_password":
			template = `<!DOCTYPE html>
      <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
      <head>
          <meta charset="utf-8">
      <meta name="viewport" content="width=device-width,initial-scale=1">
      <meta name="x-apple-disable-message-reformatting">
      <title></title>
          <!--[if mso]>
      <style>
          table {border-collapse:collapse;border-spacing:0;border:none;margin:0;}
          div, td {padding:0;}
          div {margin:0 !important;}
          </style>
      <noscript>
          <xml>
          <o:OfficeDocumentSettings>
              <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
          </xml>
      </noscript>
      <![endif]-->
      <style>
          table, td, div, h1, p {
          font-family: Arial, sans-serif;
          }
          @media screen and (max-width: 530px) {
          .unsub {
              display: block;
              padding: 8px;
              margin-top: 14px;
              border-radius: 6px;
              background-color: #555555;
              text-decoration: none !important;
              font-weight: bold;
          }
          .col-lge {
              max-width: 100% !important;
          }
          }
          @media screen and (min-width: 531px) {
          .col-sml {
              max-width: 27% !important;
          }
          .col-lge {
              max-width: 73% !important;
          }
          }
      </style>
      </head>
      <body style="margin:0;padding:0;word-spacing:normal;background-color:#fff;">
      <div role="article" aria-roledescription="email" lang="en" style="text-size-adjust:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;background-color:#fff;">
          <table role="presentation" style="width:100%;border:none;border-spacing:0;">
          <tr>
              <td align="center" style="padding:0;">
              <!--[if mso]>
              <table role="presentation" align="center" style="width:600px;">
              <tr>
              <td>
              <![endif]-->
              <table role="presentation" style="width:94%;max-width:600px;border:none;border-spacing:0;text-align:left;font-family:Arial,sans-serif;font-size:16px;line-height:22px;color:#363636;">
                  <tr>
                  <td style="padding:40px 30px 30px 30px;text-align:center;font-size:24px;font-weight:bold;">
                      <a href="https://web.tda.it22.cloud/" style="text-decoration:none;"><img src="https://assets.it22.nl/tda/logo.png" width="165" alt="Logo" style="width:165px;max-width:80%;height:auto;border:none;text-decoration:none;color:#ffffff;"></a>
                  </td>
                  </tr>
                  <tr style="text-align: center;">
                  <td style="padding:30px;background-color:#ffffff;">
                      <h1 style="margin-top:0;margin-bottom:16px;font-size:26px;line-height:32px;font-weight:bold;letter-spacing:-0.02em;">Tour de Amsterdam - Forgot Password</h1>
                      <p style="margin:0;">We have received forgot password request for your email. Please click on <a href="{{ resetPasswordUrl }}" style="color:#3BB0E5;text-decoration:underline;">this link</a>, to reset your password.</p>
                  </td>
                  </tr>
                  <tr>
                  <td style="text-align:center;padding:0 30px 11px 30px;font-size:0;background-color:#ffffff;border-bottom:1px solid #f0f0f5;border-color:rgba(201,201,207,.35);">
                      <div class="col-lge" style="display:inline-block;width:100%;max-width:395px;vertical-align:top;padding-bottom:20px;font-family:Arial,sans-serif;font-size:16px;line-height:22px;color:#363636;">
                      <p style="margin:0;text-align:center;"><a href="{{ resetPasswordUrl }}" style="background: #3BB0E5; text-decoration: none; padding: 10px 25px; color: #ffffff; border-radius: 4px; display:inline-block; mso-padding-alt:0;text-underline-color:#008c3c"><!--[if mso]><i style="letter-spacing: 25px;mso-font-width:-100%;mso-text-raise:20pt">&nbsp;</i><![endif]--><span style="mso-text-raise:10pt;font-weight:bold;">Reset Password</span><!--[if mso]><i style="letter-spacing: 25px;mso-font-width:-100%">&nbsp;</i><![endif]--></a></p>
                      </div>
                      <!--[if mso]>
                      </td>
                      </tr>
                      </table>
                      <![endif]-->
                  </td>
                  </tr>
                  <tr>
                  <td style="padding:30px;text-align:center;font-size:12px;color:#404040;">
                      <p style="margin:0;font-size:14px;line-height:20px;">&copy; Tour de Amsterdam 2021-{{ currentYear }}</p>
                  </td>
                  </tr>
              </table>
              <!--[if mso]>
              </td>
              </tr>
              </table>
              <![endif]-->
              </td>
          </tr>
          </table>
      </div>
      </body>
      </html>`;
			break;
		case "contact_us":
			template = `<!DOCTYPE html>
      <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
      <head>
          <meta charset="utf-8">
      <meta name="viewport" content="width=device-width,initial-scale=1">
      <meta name="x-apple-disable-message-reformatting">
      <title></title>
          <!--[if mso]>
      <style>
          table {border-collapse:collapse;border-spacing:0;border:none;margin:0;}
          div, td {padding:0;}
          div {margin:0 !important;}
          </style>
      <noscript>
          <xml>
          <o:OfficeDocumentSettings>
              <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
          </xml>
      </noscript>
      <![endif]-->
      <style>
          table, td, div, h1, p {
          font-family: Arial, sans-serif;
          }
          @media screen and (max-width: 530px) {
          .unsub {
              display: block;
              padding: 8px;
              margin-top: 14px;
              border-radius: 6px;
              background-color: #555555;
              text-decoration: none !important;
              font-weight: bold;
          }
          .col-lge {
              max-width: 100% !important;
          }
          }
          @media screen and (min-width: 531px) {
          .col-sml {
              max-width: 27% !important;
          }
          .col-lge {
              max-width: 73% !important;
          }
          }
      </style>
      </head>
      <body style="margin:0;padding:0;word-spacing:normal;background-color:#fff;">
      <div role="article" aria-roledescription="email" lang="en" style="text-size-adjust:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;background-color:#fff;">
          <table role="presentation" style="width:100%;border:none;border-spacing:0;">
          <tr>
              <td align="center" style="padding:0;">
              <!--[if mso]>
              <table role="presentation" align="center" style="width:600px;">
              <tr>
              <td>
              <![endif]-->
              <table role="presentation" style="width:94%;max-width:600px;border:none;border-spacing:0;text-align:left;font-family:Arial,sans-serif;font-size:16px;line-height:22px;color:#363636;">
                  <tr>
                  <td style="padding:40px 30px 30px 30px;text-align:center;font-size:24px;font-weight:bold;">
                      <a href="https://web.tda.it22.cloud/" style="text-decoration:none;"><img src="https://assets.it22.nl/tda/logo.png" width="165" alt="Logo" style="width:165px;max-width:80%;height:auto;border:none;text-decoration:none;color:#ffffff;"></a>
                  </td>
                  </tr>
                  <tr style="text-align: center;">
                  <td style="padding:30px;background-color:#ffffff;">
                      <h1 style="margin-top:0;margin-bottom:16px;font-size:26px;line-height:32px;font-weight:bold;letter-spacing:-0.02em;">{{ subject }}</h1>
                      <p style="margin:0;">
                          <strong>Email: </strong> {{ email }}
                      </p>
                      <p style="margin:0;">
                          <strong>Message: </strong> {{ message }}
                      </p>
                  </td>
                  </tr>
                  <tr>
                  <td style="text-align:center;padding:0 30px 11px 30px;font-size:0;background-color:#ffffff;border-bottom:1px solid #f0f0f5;border-color:rgba(201,201,207,.35);">
                      <div class="col-lge" style="display:inline-block;width:100%;max-width:395px;vertical-align:top;padding-bottom:20px;font-family:Arial,sans-serif;font-size:16px;line-height:22px;color:#363636;"></div>
                      <!--[if mso]>
                      </td>
                      </tr>
                      </table>
                      <![endif]-->
                  </td>
                  </tr>
                  <tr>
                  <td style="padding:30px;text-align:center;font-size:12px;color:#404040;">
                      <p style="margin:0;font-size:14px;line-height:20px;">&copy; Tour de Amsterdam 2021-{{ currentYear }}</p>
                  </td>
                  </tr>
              </table>
              <!--[if mso]>
              </td>
              </tr>
              </table>
              <![endif]-->
              </td>
          </tr>
          </table>
      </div>
      </body>
      </html>`;
			break;

		default:
			template = "";
			break;
	}
	return template;
};
export default getEmailTemplate;
