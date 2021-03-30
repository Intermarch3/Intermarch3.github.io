from selenium import webdriver

driver = webdriver.Chrome(executable_path="chromedriver.exe")
driver.get("https://www.ecoledirecte.com/Eleves/3486/CahierDeTexte")

driver.find_element_by_id("username").send_keys("identifiant ( a marqué )")
driver.find_element_by_id("password").send_keys("mot de passe ( a marqué )")
driver.find_element_by_id("connexion").click()
