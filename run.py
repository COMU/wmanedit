from flask import Flask, Response, render_template, flash, request, redirect, url_for, send_file
from wtforms import Form, TextField, TextAreaField, validators, SelectField
from wtforms.validators import input_required, DataRequired
from flask_bootstrap import Bootstrap
import gzip
from io import StringIO

app = Flask(__name__, static_folder='static')
app.secret_key = 'some_secret'

kl = (1, 2, 3, 4, 5, 6, 7, 8, 9)
kategori_list = [(kl[0], 'Executable programs or shell commands'),
(kl[1], 'System calls'),
(kl[2], 'Library calls'),
(kl[3], 'Special files'),
(kl[4], 'File formats and convertions'),
(kl[5], 'Games'),
(kl[6], 'Miscellaneous(including macro packages and conventions)'),
(kl[7], 'System administration commands'),
(kl[8], 'Kernel routines')]
@app.route('/' , methods=['POST', 'GET'])
def template():
    title = "MAN EDITOR"
    class ReusableForm(Form):
        content = TextAreaField('Text', render_kw={"rows": 70, "cols": 11})
        file_name = TextField(validators=[validators.Required("Please enter your file name!"), validators.Length(min=1, max=30)])
        kategori = SelectField('Choose! Your manual page is what?', choices=kategori_list)

    form = ReusableForm(request.form)
    content = form['content']
    file_name = form['file_name']
    kategori = form["kategori"].data

    if request.method == 'POST':
        form = ReusableForm(request.form)
        content = request.form['content']
        file_name = request.form['file_name']
        content = content.replace("\"ql-indent-1\"", "ql-indent-1")
        content = content.replace("\"manname\"", "manname")
        content = content.replace("\"mansynopsis\"", "mansynopsis")
        content = content.replace("\"mandescription\"", "mandescription")
        content = content.replace("\"manoptions\"", "manoptions")
        content = content.replace("\"manfiles\"", "manfiles")
        content = content.replace("\"manenvironment\"", "manenvironment")
        content = content.replace("\"mandiognastics\"", "mandiognastics")
        content = content.replace("\"manbugs\"", "manbugs")
        content = content.replace("\"manauthor\"", "manauthor")
        content = content.replace("\"manseealso\"", "manseealso")
        replace_html = ["<p>", "</p>", "<strong>", "</strong>", "<u>", "</u>", "<p class=ql-indent-1>", "<br>",
        "<span class=ql-cursor>", "<strong class=manname>","<strong class=mansynopsis>", "<strong class=mandescription>",
        "<strong class=manoptions>", "<strong class=manfiles>", "<strong class=manenvironment>", "<strong class=mandiognastics>",
        "<strong class=manbugs>", "<strong class=manauthor>", "<strong class=manseealso>"]
        replace_man = ["\n.IP ", "", "\n.B ", "", "\n.I ", "", "\n.RE ", "\n.br ", "\n", "\n.SH ", "\n.SH ", "\n.SH ", "\n.SH ", "\n.SH ",
        "\n.SH ", "\n.SH ", "\n.SH ", "\n.SH ", "\n.SH "]
        s = 0
        for i in replace_html:
            content = content.replace(i, replace_man[s])
            s = s+1

        with gzip.open('/home/bselin/Masaüstü/my-project/newmanedit/indirilen/busra.gz', 'w') as f:
            f.write(bytes(content, 'utf-8'))
        return download(file_name, kategori)
        print(content)
        #return render_template('run.html', title = content, form=form)
    return render_template('run.html', title = title, form=form)
def download(file_name, kategori):
    return send_file('/home/bselin/Masaüstü/my-project/newmanedit/indirilen/busra.gz', mimetype='application/x-gzip', attachment_filename = file_name + "." + kategori + '.gz', as_attachment=True)

if __name__ == '__main__':
    app.run(host='127.0.0.1', port= 8000)
