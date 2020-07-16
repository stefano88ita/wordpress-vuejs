<html>
    <head>
        <?php wp_head(); ?>
    </head>
    <body>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>This is a dummy content <i class="fa fa-user" aria-hidden="true"></i></h1>
                    <div id="app">
                        <hello-world :msg='data.msg'></hello-world>
                    </div>
                </div>
            </div>
        </div>
        <script>
            var data = {
                msg: 'This is a dummy variable'
            }
        </script>
        <?php wp_footer(); ?>
    </body>
</html>