import { indent } from "../../utils";
// eslint-disable-next-line import/no-unresolved, import/extensions
import { PdfDownload } from "!!./PdfDownload";

export const pdfDownloadCode = `
<head>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="https://static.qgov.net.au/formio-qld/v1/v1.x.x-latest/formio-script.min.js"></script>
</head>
<body>
  <script>
${indent(
  PdfDownload.toString().replaceAll(
    "_helpers_FormioLoader__WEBPACK_IMPORTED_MODULE_0__",
    "FormioLoader"
  ),
  2
)}
    FormioScript.init().then(() => {
      const div = PdfDownload();
      document.body.append(div);
    });
  </script>
</body>
`;