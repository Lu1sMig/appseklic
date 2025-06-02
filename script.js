document.getElementById('consultarBtn').addEventListener('click', function() {
    
    const serieInput = document.getElementById('serieInput').value.trim().toUpperCase();
    const resultadoDiv = document.getElementById('resultado');

    fetch('data1.json')
        .then(response => response.json())
        .then(data => {
            const equipo = data.find(item => item["serie"] === serieInput);

            if (equipo) {
                resultadoDiv.innerHTML = `
                    <p><strong>N° Reg:</strong> ${equipo["N°\n Reg"] || ""}</p>
                    <p><strong>ID-OC:</strong> ${equipo["ID-OC"] || ""}</p>
                    <p><strong>OC:</strong> ${equipo["oc"] || ""}</p>
                    <p><strong>OC Fecha:</strong> ${equipo["OC_fecha"] || ""}</p>
                    <p><strong>Modelo:</strong> ${equipo["MODELO"] || ""}</p>
                    <p><strong>Cod Patrimonial:</strong> ${equipo["COD PAT"] || ""}</p>
                    <p><strong>Cod Barra:</strong> ${equipo["COD BARRA"] || ""}</p>
                    <p><strong>Serie:</strong> ${equipo["serie"] || ""}</p>
                    <p><strong>LIC Item:</strong> ${equipo["LIC-ITEM"] || ""}</p>
                    <p><strong>Software:</strong> ${equipo["SOFTWARE"] || ""}</p>
                    <p><strong>Licencia Vendida:</strong> ${equipo["LICENCIA-VENDIDA"] || ""}</p>
                    <p><strong>Licencia Generada:</strong> ${equipo["LICENCIA GENERADA"] || ""}</p>
                    <p><strong>Fecha Generación:</strong> ${equipo["FECHA GENERACION"] || ""}</p>
                    <p><strong>Guías Remisión Remitente:</strong> ${equipo["GuiasRemisionRemitente"] || ""}</p>
                    <p><strong>RUC Empresa:</strong> ${equipo["RUC EMPRESA"] || ""}</p>
                    <p><strong>Empresa:</strong> ${equipo["EMPRESA"] || ""}</p>
                    <p><strong>Teléfono 1:</strong> ${equipo["TELF."] || ""}</p>
                    <p><strong>Teléfono 2:</strong> ${equipo["TELF"] || ""}</p>
                    <p><strong>Dependencia:</strong> ${equipo["DEPENDENCIA"] || ""}</p>
                    <p><strong>Distrito Fiscal:</strong> ${equipo["DF"] || ""}</p>
                    <p><strong>Sede:</strong> ${equipo["SEDE"] || ""}</p>
                    <p><strong>Estado:</strong> ${equipo["ESTADO"] || ""}</p>
                    <p><strong>Producto:</strong> ${equipo["PRODUCTO"] || ""}</p>
                `;
            } else {
                resultadoDiv.innerHTML = `<p style="color:red;">No se encontró la serie ingresada.</p>`;
            }
        })
        .catch(error => {
            resultadoDiv.innerHTML = `<p style="color:red;">Error al cargar los datos.</p>`;
            console.error('Error:', error);
        });
});

function reiniciarPagina() {
    //recarga la pagina.
      let reload = document.getElementById("reload");
      reload.addEventListener(`click`, _ => {
      location.reload();
      });
  }