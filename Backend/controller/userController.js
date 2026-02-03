let user = [];
let id=1;
exports.createUser=(req,res)=>{
    const {name,email}=req.body;
    const newUser={
        id:id++,
        name,
        email
    };
    user.push(newUser);
    res.status(200).json(newUser);
}

exports.getUser=(req,res)=>{
    res.status(200).json(users);
};
exports.getUserById=(req,res)=>{
    const myuser=user.find((t)=>t.id===parseInt(req.params.id));
    if(myuser===undefined)return res.status(404).json({message:"user not found"});
    res.status(200).json(myuser)
};
exports.editUser=(req,res)=>{
    const myuser=user.find((t)=>t.id===parseInt(req.params.id));
    if(myuser===undefined)
        return res.status(404).json({message:"user not found"});
    myuser.name=req.body.name ===undefined?myuser.name:req.body.name;
    myuser.email=req.body.email||myuser.email;
    res.status(200).json(myuser)
};
    exports.deleteUser=(req,res)=>{}