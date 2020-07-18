const fs = require("fs")
const data = require("./data.json")

exports.post = function(req, res) {
  const keys = Object.keys(req.body)

  for(key of keys){
    if(req.body[key] == "") 
      return res.send("Por favor, preencha todos os campos")
  }

  let { avatar_url, name, birth, select, Aula, Acompanhamento } = req.body

  birth = Date.parse(req.body.birth) 
  const id = Number(data.professor.length + 1)
  const create_at = Date.now()

  data.professor.push({ 
    id,
    avatar_url,
    name,
    birth,
    select,
    Aula,
    Acompanhamento,
    create_at,
  })

  console.log(req.body)
  
  fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
    if (err)
      return res.send("Write File error!")
    
    return res.redirect("/teachers")
  })
}