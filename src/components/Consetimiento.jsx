import Swal from "sweetalert2";

export const HandleSweetAlertTerminosRenaper = () => {
  Swal.fire({
    html: `
    <p style="color: blue;"><strong>CONSENTIMIENTO INFORMADO</strong></p>
    <br>
    <p>El presente consentimiento para el tratamiento de mis datos personales
    alcanza a los incluidos en mi Documento Nacional de Identidad 
    (INCLUYENDO DATOS BIOMÉTRICOS DE HUELLA DACTILAR Y DE RECONOCIMIENTO FACIAL)
    en confronte con lo que informa el web service del REGISTRO NACIONAL DE LAS PERSONAS.</p>
    <br>
      <br>
    <p style="color: blue;"><strong>DATOS AUTORIZADOS</strong></p>
    <div>
      <br>
      <p>Por medio del presente, en mi carácter de TITULAR DE LOS DATOS presto mi CONSENTIMIENTO para que “IEB” en su carácter de CESIONARIO confronte mis datos personales que se indican en párrafo siguiente con la base de datos del RENAPER, conforme a las especificaciones que a continuación se detallan:
      </p>
      <br>
      <br>
      <p style="color: blue;"><strong>INFORMACIÓN SOBRE EL TRATAMIENTO</strong></p>
      <ul style="text-align:left; padding:20px;">
      <li style="display: flex; align-items: center; margin-bottom: 10px;">
        <div style="width: 10px; height: 10px; background-color: blue; border-radius: 50%; margin-right: 10px; flex-shrink: 0;"></div>
        <span style="vertical-align: middle; flex-grow: 1;">Los datos serán tratados con la exclusiva finalidad de validar mi identidad y verificar la vigencia de mi Documento Nacional de Identidad para realizar la apertura de cuenta comitente.</span>
      </li>
      <li style="display: flex; align-items: center; margin-bottom: 10px;">
        <div style="width: 10px; height: 10px; background-color: blue; border-radius: 50%; margin-right: 10px; flex-shrink: 0;"></div>
        <span style="vertical-align: middle; flex-grow: 1;">Los datos confrontados serán destruidos una vez verificada la validez del Documento Nacional de Identidad y validada la misma, no pudiendo ser almacenados.</span>
      </li>
      <li style="display: flex; align-items: center; margin-bottom: 10px;">
        <div style="width: 10px; height: 10px; background-color: blue; border-radius: 50%; margin-right: 10px; flex-shrink: 0;"></div>
        <span style="vertical-align: middle; flex-grow: 1;">Los datos son facilitados con carácter obligatorio, por cuanto es imprescindible identificar fehacientemente al titular, para asegurar el correcto proceso de identificación.</span>
      </li>
      <li style="display: flex; align-items: center; margin-bottom: 10px;">
        <div style="width: 10px; height: 10px; background-color: blue; border-radius: 50%; margin-right: 10px; flex-shrink: 0;"></div>
        <span style="vertical-align: middle; flex-grow: 1;">El titular de los datos podrá ejercer los derechos de acceso, rectificación y supresión de sus datos en cualquier momento y a su sola solicitud ante el RENAPER.</span>
      </li>
      <li style="display: flex; align-items: center;">
        <div style="width: 10px; height: 10px; background-color: blue; border-radius: 50%; margin-right: 20px; flex-shrink: 0;"></div>
        <span style="vertical-align: middle; flex-grow: 1;">En cumplimiento de la Resolución AAIP Nº 14/2018, le hacemos saber que la AGENCIA DE ACCESO A LA INFORMACIÓN PÚBLICA, en su carácter de Órgano de Control de la Ley N° 25.326, tiene la atribución de atender las denuncias y reclamos que interpongan quienes resulten afectados en sus derechos por incumplimiento de las normas vigentes en materia de protección de datos personales.</span>
      </li>
    </ul>
    `,
    showCloseButton: true,
    focusConfirm: false,
    customClass: {
      container: "my-swal-container",
      popup: "my-swal-popup",
    },
    confirmButtonText: `
      <i class="fa fa-thumbs-up"></i> Entendido!
    `,
    confirmButtonAriaLabel: "Thumbs up, great!",
  });
};
