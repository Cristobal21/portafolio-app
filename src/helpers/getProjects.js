import * as img from "../assets"

const getProjects = () => {
	const html_img = img.html3
	const css_img = img.css3
	const bs_img = img.bs3
	const js_img = img.js3
	const react_img = img.react3
	const node_img = img.node3
	const tw_img = img.tw3
	// const mongo_img = img.mongo3

	const projects = [
		{
			id: "01",
			nombre: "Portafolio Web",
			descripcion:
				"Mi propia web personal ha sido mi primer proyecto web que he desarrollado desde que he comenzado a estudiar.",
			tecnologias: {
				bootstrap: "Bootstrap",
				css: "Css",
				html: "Html",
				javascript: "Javascript",
				react: "React js",
			},
			bs_img,
			css_img,
			html_img,
			js_img,
			react_img,
		},
		{
			id: "02",
			nombre: "Clima app",
			descripcion:
				"Buscador que rescata información básica de ciudades y clima actual de dichos lugares, usando dos APIs diferentes.",
			tecnologias: {
				html: "Html",
				javascript: "Javascript",
				tailwindcss: "Tailwindcss",
				react: "React js",
			},
			html_img,
			js_img,
			tw_img,
			react_img,
		},
		{
			id: "03",
			nombre: "Formulario Despachos - En desarrollo",
			descripcion:
				"Formulario de registro para pedidos y despachos, conectado a MongoDB.",
			tecnologias: {
				html: "Html",
				javascript: "Javascript",
				mongodb: "Mongo db",
				nodejs: "Node js",
				tailwindcss: "Tailwindcss",
				react: "React js",
			},
			html_img,
			js_img,
			node_img,
			tw_img,
			react_img,
		},
	]

	return {
		projects,
	}
}
export default getProjects
