
class Compania{
	constructor(){
		this.c = new Trabajador;
	}

	darTrabajador(){
		return this.c;
	}

	modificarsalario(mods){
		this.c.salario1(mods);
	}

	calcularEdad(an,mn,dn,aa,ma,da){
		this.c.edad(an,mn,dn,aa,ma,da);
	}

	calcularAntiguedad(ai,mi,di,aa,ma,da){
		this.c.ingreso(ai,mi,di,aa,ma,da);
	}

	calcularPrestaciones(salario,antiguedad){
		this.c.prestaciones(salario,antiguedad);
	}

	calcularCesantias(cesa){
		this.c.cesantias(cesa);
	}

	calcularIntereses(inte){
		this.c.intereses(inte);
	}

}

class Trabajador{
	constructor(){
		this.nombre;
		this.apellido;
		this.sexo;
		this.fechanacimiento = 0;
		this.fechaingreso = 0;
		this.salario = 0;
		this.calcularEdad = 0;
		this.calcularAntiguedad = 0;
		this.calcularPrestaciones = 0;
		this.calcularCesantias = 0;
		this.calcularIntereses = 0;
	}

	darNombre(){
		return this.nombre;
	}

	darApellido(){
		return this.apellido;
	}

	darSexo(){
		return this.sexo;
	}

	darFechaNacimiento(){
		return this.fechanacimiento;
	}

	darFechaIngreso(){
		return this.fechaingreso;
	}

	darSalario(){
		return this.salario;
	}
	
	darCalcularEdad(){
		return this.calcularEdad;
	}

	darCalcularAntiguedad(){
		return this.calcularAntiguedad;
	}

	darCalcularPrestaciones(){
		return this.calcularPrestaciones;
	}

	darCalcularCesantias(){
		return this.calcularCesantias;
	}

	darCalcularIntereses(){
		return this.calcularIntereses;
	}

	salario1(mods){
		this.salario=mods;
	}

	edad(an,mn,dn,aa,ma,da){
		if(an>aa || an==aa && mn>ma ||
		   an==aa && mn==ma && dn>da){
			const err = 'fecha erronea';
			this.calcularEdad = err;
		}else{
			this.calcularEdad = aa-an;
			if(ma>mn){
				this.calcularEdad = aa-an;
			}else if(ma<mn){
				this.calcularEdad = (aa-an)-1;
			}else{
				if(da<dn){
					this.calcularEdad = (aa-an)-1;
				}else{
					this.calcularEdad = aa-an;
				}
			}
		}
	}

	ingreso(ai,mi,di,aa,ma,da){
		if(ai>aa || ai==aa && mi>ma || 
		   ai==aa && mi==ma && di>da){
			const err = 'ERROR';
			this.calcularAntiguedad = err;
			//document.getElementById('calcantiguedad').value = err;
		}else{
			this.calcularAntiguedad = aa-ai;
			if(ma>mi){
				this.calcularAntiguedad = aa-ai;
			}else if(ma<mi){
				this.calcularAntiguedad = (aa-ai)-1;
			}else{
				if(da<di){
					this.calcularAntiguedad = (aa-ai)-1;
				}else{
					this.calcularAntiguedad = aa-ai;
				}
			}
		}
	}

	prestaciones(salario,antiguedad){
		this.calcularPrestaciones = (antiguedad*salario)/12;
	}

	cesantias(cesa){
		this.calcularCesantias = (cesa*261)/365;
	}

	intereses(inte){
		this.calcularIntereses = (inte*261*0.12)/365;
	}

}

let comp = new Compania;

function modificar_sala(){
	let modificar = prompt ("ingrese el nuevo valor");
	let mod = parseInt(modificar);

	comp.modificarsalario(mod);

	const salario2 = comp.darTrabajador().darSalario();
	document.getElementById('sal').value = salario2;
}

function edad_mod(){
	const fecha = document.getElementById('fec1').value;
	
	const act = new Date();
	const anoact = parseInt(act.getFullYear());
	const mesact = parseInt(act.getMonth()+1);
	const diaact = parseInt(act.getDate());

	const anofecha = parseInt(String(fecha).substring(0, 4));
	const mesfecha = parseInt(String(fecha).substring(5, 7));
	const diafecha = parseInt(String(fecha).substring(8, 10));

	comp.calcularEdad(anofecha, mesfecha, diafecha, anoact, mesact, diaact);

	const eda = comp.darTrabajador().darCalcularEdad();
	document.getElementById('edact').value = eda;
}

function ant_mod(){
	const fechant = document.getElementById('fect2').value;
	
	const act = new Date();
	const anoact = parseInt(act.getFullYear());
	const mesact = parseInt(act.getMonth()+1);
	const diaact = parseInt(act.getDate());

	const anoant = parseInt(String(fechant).substring(0, 4));
	const mesant = parseInt(String(fechant).substring(5, 7));
	const diaant = parseInt(String(fechant).substring(8, 10));

	comp.calcularAntiguedad(anoant, mesant, diaant, anoact, mesact, diaact);

	const ant = comp.darTrabajador().darCalcularAntiguedad();
	//const err = 'Años';
	document.getElementById('edact2').value = ant;


	//let actnt = new Date();
	//let actont = actnt.getFullYear() - fechant.getFullYear();
	//document.getElementById('edact2').value = actont;
}

function cal_prest(){
	var salas = document.getElementById('sal').value;
	var ante = document.getElementById('edact2').value;
	
	comp.calcularPrestaciones(salas,ante);

	const pres = comp.darTrabajador().darCalcularPrestaciones();
	document.getElementById('calpresta').value = pres;
}

function cal_cesa(){
	var ccesa = document.getElementById('sal').value;
	
	comp.calcularCesantias(ccesa);

	const rescesa = comp.darTrabajador().darCalcularCesantias();
	document.getElementById('cesa1').value = rescesa;
}

function in_calcesa(){
	var incesa = document.getElementById('cesa1').value;
	
	comp.calcularIntereses(incesa);

	const resint = comp.darTrabajador().darCalcularIntereses();
	document.getElementById('cesa2').value = resint;

}