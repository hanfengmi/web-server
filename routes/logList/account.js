import User from '../../models/user';

export const account = (req, res) => {
    const { userName, password } = req.body;
    User.findOne({ 'name':userName },function (err, users) {
        if (err) {
            // 查询失败
            console.log('mmmmmmmmmmmmmmmmmm走到这里')
            res.status(200).json({ currentAuthority: "guest", status: "error", type: "account" });
        } else {
            console.log('yyyyyyyyyyyyyyyyyyy come on')
            if (users) {
                console.log(users,123123123123)
                res.status(200).json({ currentAuthority: "guest", status: "error", type: "account",msg:'用户dui' });
                // res.status(200).json({ currentAuthority: "guest", status: "error", type: "account" });
            }else{
                res.status(200).json({ currentAuthority: "guest", status: "error", type: "account",msg:'用户未注册' });
            }
        }
    });




    // res.status(200).json({ currentAuthority: "guest", status: "error", type: "account" });
    // res.status(200).json({ currentAuthority: "admin",status: "ok",type: "account" });
}