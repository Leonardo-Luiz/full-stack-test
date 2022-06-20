let NeDB = require('nedb');
let db = new NeDB({
    filename:'database/tasks.db',
    autoload:true
});

module.exports = app => {

    let route = app.route('/task');

    route.get((req, res) => {

        db.find({}).sort({name:1}).exec((err, tasks)=>{

            if (err) {
                app.utils.error.send(err, req, res);
            } else {

                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json({
                  tasks
                });

            }

        });

    });

    route.post((req, res) => {   

        db.insert(req.body, (err, task)=>{

            if (err) {
                app.utils.error.send(err, req, res);
            } else {

                res.status(200).json(task);

            }

        });

    });

    let routeId = app.route('/task/:id');

    routeId.get((req, res) => {

        db.findOne({_id:req.params.id}).exec((err, task)=>{

            if (err) {
                app.utils.error.send(err, req, res);
            } else {
                res.status(200).json(task);
            }

        });

    });

    routeId.put((req, res) => {
      
        db.update({ _id: req.params.id }, req.body, err => {

            if (err) {
                app.utils.error.send(err, req, res);
            } else {
                res.status(200).json(Object.assign(req.params, req.body));
            }

        });

    });
    
    routeId.delete((req, res)=>{

        db.remove({ _id: req.params.id }, {}, err=>{

            if (err) {
                app.utils.error.send(err, req, res);
            } else {
                res.status(200).json(req.params);
            }

        });

    });

};