document.getElementById('consultarBtn').addEventListener('click', function() {
    const serieInput = document.getElementById('serieInput').value.trim().toUpperCase();
    const resultadoDiv = document.getElementById('resultado');

    fetch('data2.json')
        .then(response => response.json())
        .then(data => {
            const equipo = data.find(item => item.serie === serieInput);

            if (equipo) {
                resultadoDiv.innerHTML = `
                    <p><strong>N° Reg:</strong> ${equipo.NReg}</p>
                    <p><strong>ID-OC:</strong> ${equipo.ID_OC}</p>
                    <p><strong>OC:</strong> ${equipo.oc}</p>
                    <p><strong>OC Fecha:</strong> ${equipo.OC_fecha}</p>
                    <p><strong>Modelo:</strong> ${equipo.MODELO}</p>
                    <p><strong>Cod Patrimonial:</strong> ${equipo.COD_PAT}</p>
                    <p><strong>Cod Barra:</strong> ${equipo.COD_BARRA}</p>
                    <p><strong>Serie:</strong> ${equipo.serie}</p>
                    <p><strong>LIC Item:</strong> ${equipo.LIC_ITEM}</p>
                    <p><strong>Software:</strong> ${equipo.SOFTWARE}</p>
                    <p><strong>Licencia Vendida:</strong> ${equipo.LICENCIA_VENDIDA}</p>
                    <p><strong>Licencia Generada:</strong> ${equipo.LICENCIA_GENERADA}</p>
                    <p><strong>Fecha Generación:</strong> ${equipo.FECHA_GENERACION}</p>
                    <p><strong>Guías Remisión Remitente:</strong> ${equipo.GuiasRemisionRemitente}</p>
                    <p><strong>RUC Empresa:</strong> ${equipo.RUC_EMPRESA}</p>
                    <p><strong>Empresa:</strong> ${equipo.EMPRESA}</p>
                    <p><strong>Teléfono 1:</strong> ${equipo.TELF1}</p>
                    <p><strong>Teléfono 2:</strong> ${equipo.TELF2}</p>
                    <p><strong>Dependencia:</strong> ${equipo.DEPENDENCIA}</p>
                    <p><strong>Distrito Fiscal:</strong> ${equipo.DF}</p>
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
