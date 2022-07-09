import PySimPleGui as sg

layout = [[sg.Text("hello from simple gui")], [sg.Button("OK")]]

# create window
windows = sg.Window("demo", layout)

while True:
    event, values = window.read()
    # end progrm if user closes window
    # press ok button
    if event == "OK" or event == sg.WIN_CLOSED:
        break

window.close()
