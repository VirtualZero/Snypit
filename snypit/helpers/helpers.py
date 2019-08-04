from flask_assets import Bundle

def make_bundles():
    js = Bundle(
        'js/materialize.min.js',
        'fontawesome/fontawesome-all.min.js',
        output='assets/snypit.js',
        filters='jsmin'
    )


    css = Bundle(
        'css/style.css',
        output='assets/snypit.css',
        filters='cssmin'
    )

    admin_js = Bundle(
        'js/materialize.min.js',
        'js/codemirror.js',
        'js/clipboard.min.js',
        'fontawesome/fontawesome-all.min.js',
        'codemirror_modes/clike/clike.js',
        'codemirror_modes/css/css.js',
        'codemirror_modes/http/http.js',
        'codemirror_modes/javascript/javascript.js',
        'codemirror_modes/jinja2/jinja2.js',
        'codemirror_modes/nginx/nginx.js',
        'codemirror_modes/perl/perl.js',
        'codemirror_modes/php/php.js',
        'codemirror_modes/powershell/powershell.js',
        'codemirror_modes/python/python.js',
        'codemirror_modes/ruby/ruby.js',
        'codemirror_modes/sass/sass.js',
        'codemirror_modes/shell/shell.js',
        'codemirror_modes/sql/sql.js',
        'codemirror_modes/vb/vb.js',
        'codemirror_modes/vbscript/vbscript.js',
        'codemirror_modes/xml/xml.js',
        'codemirror_modes/yaml/yaml.js',
        'codemirror_modes/yaml-frontmatter/yaml-frontmatter.js',
        'js/simplescrollbars.js',
        output='assets/snypit_admin.js',
        filters='jsmin'
    )

    admin_css = Bundle(
        'css/codemirror.css',
        'codemirror_themes/colorforth.css',
        'codemirror_themes/3024-day.css',
        'codemirror_themes/3024-night.css',
        'codemirror_themes/abcdef.css',
        'codemirror_themes/ambiance-mobile.css',
        'codemirror_themes/ambiance.css',
        'codemirror_themes/base16-dark.css',
        'codemirror_themes/base16-light.css',
        'codemirror_themes/bespin.css',
        'codemirror_themes/blackboard.css',
        'codemirror_themes/cobalt.css',
        'codemirror_themes/darcula.css',
        'codemirror_themes/dracula.css',
        'codemirror_themes/duotone-dark.css',
        'codemirror_themes/duotone-light.css',
        'codemirror_themes/eclipse.css',
        'codemirror_themes/elegant.css',
        'codemirror_themes/erlang-dark.css',
        'codemirror_themes/gruvbox-dark.css',
        'codemirror_themes/hopscotch.css',
        'codemirror_themes/icecoder.css',
        'codemirror_themes/idea.css',
        'codemirror_themes/isotope.css',
        'codemirror_themes/lesser-dark.css',
        'codemirror_themes/liquibyte.css',
        'codemirror_themes/lucario.css',
        'codemirror_themes/material.css',
        'codemirror_themes/mbo.css',
        'codemirror_themes/mdn-like.css',
        'codemirror_themes/midnight.css',
        'codemirror_themes/monokai.css',
        'codemirror_themes/neat.css',
        'codemirror_themes/neo.css',
        'codemirror_themes/night.css',
        'codemirror_themes/oceanic-next.css',
        'codemirror_themes/panda-syntax.css',
        'codemirror_themes/paraiso-dark.css',
        'codemirror_themes/paraiso-light.css',
        'codemirror_themes/pastel-on-dark.css',
        'codemirror_themes/railscasts.css',
        'codemirror_themes/rubyblue.css',
        'codemirror_themes/seti.css',
        'codemirror_themes/shadowfox.css',
        'codemirror_themes/solarized.css',
        'codemirror_themes/ssms.css',
        'codemirror_themes/the-matrix.css',
        'codemirror_themes/tomorrow-night-bright.css',
        'codemirror_themes/tomorrow-night-eighties.css',
        'codemirror_themes/ttcn.css',
        'codemirror_themes/twilight.css',
        'codemirror_themes/vibrant-ink.css',
        'codemirror_themes/xq-dark.css',
        'codemirror_themes/xq-light.css',
        'codemirror_themes/yeti.css',
        'codemirror_themes/zenburn.css',
        'css/simplescrollbars.css',
        'css/style.css',
        output='assets/snypit_admin.css',
        filters='cssmin'
    )

    return {
        'js': js,
        'css': css,
        'admin_js': admin_js,
        'admin_css': admin_css
    }
