import * as imgs from "../assets"

export const getSkillProject = () => {
	const arrImgPort = [imgs.bs3, imgs.css3, imgs.html3, imgs.js3, imgs.react3]
	const nameSkillPort = ["Bootstrap", "Css", "Html", "Javascript", "React js"]

	const arrImgClima = [imgs.html3, imgs.js3, imgs.react3, imgs.tw3]
	const nameSkillClima = ["Html", "Javascript", "React js", "Tailwindcss"]

	const arrImgDeli = [
		imgs.html3,
		imgs.js3,
		imgs.mongo3,
		imgs.node3,
		imgs.react3,
		imgs.tw3,
	]
	const nameSkillDeli = [
		"Html",
		"Javascript",
		"Mongo",
		"Node Js",
		"React Js",
		"Tailwindcss",
	]

	return {
		arrImgPort,
		nameSkillPort,
		arrImgClima,
		nameSkillClima,
		arrImgDeli,
		nameSkillDeli,
	}
}
