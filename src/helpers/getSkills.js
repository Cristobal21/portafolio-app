import { useState } from "react"

export const getSkills = () => {
  const [htmlSt, setHtmlSt] = useState(false)
  const [reactSt, setReactSt] = useState(false)
  const [cssSt, setCssSt] = useState(false)
  const [gitSt, setGitSt] = useState(false)
  const [nodeSt, setNodeSt] = useState(false)
  const [javascriptSt, setJavascriptSt] = useState(false)
  const [bstrapSt, setBstrapSt] = useState(false)
  const [twSt, setTwSt] = useState(false)
  const [mongoSt, setMongoSt] = useState(false)

  const enterHtml = () => {
    setHtmlSt(true)
  }
  const leaveHtml = () => {
    setHtmlSt(false)
  }

  const enterCss = () => {
    setCssSt(true)
  }
  const leaveCss = () => {
    setCssSt(false)
  }

  const enterGit = () => {
    setGitSt(true)
  }
  const leaveGit = () => {
    setGitSt(false)
  }

  const enterJs = () => {
    setJavascriptSt(true)
  }
  const leaveJs = () => {
    setJavascriptSt(false)
  }

  const enterReact = () => {
    setReactSt(true)
  }
  const leaveReact = () => {
    setReactSt(false)
  }

  const enterBs = () => {
    setBstrapSt(true)
  }
  const leaveBs = () => {
    setBstrapSt(false)
  }

  const enterNode = () => {
    setNodeSt(true)
  }
  const leaveNode = () => {
    setNodeSt(false)
  }

  const enterTw = () => {
    setTwSt(true)
  }
  const leaveTw = () => {
    setTwSt(false)
  }

  const enterMongo = () => {
    setMongoSt(true)
  }
  const leaveMongo = () => {
    setMongoSt(false)
  }

  return {
    htmlSt,
    reactSt,
    cssSt,
    gitSt,
    nodeSt,
    javascriptSt,
    bstrapSt,
    twSt,
    mongoSt,
    enterHtml,
    leaveHtml,
    enterCss,
    leaveCss,
    enterGit,
    leaveGit,
    enterJs,
    leaveJs,
    enterReact,
    leaveReact,
    enterBs,
    leaveBs,
    enterNode,
    leaveNode,
    enterTw,
    leaveTw,
    enterMongo,
    leaveMongo,
  }
}
