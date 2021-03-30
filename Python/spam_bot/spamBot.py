import pyautogui
from time import sleep

sleep(5)  # après avoir lancer le programme, tu a 5 seconde pour clické dans un espace de text et le spam commence
f = open("txt_spamBot", 'r')  # envoye tout le contenu du fichier txt_spambot
for word in f:
    pyautogui.typewrite(word)
    pyautogui.press("enter")