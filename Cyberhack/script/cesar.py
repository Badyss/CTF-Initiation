def chiffrement_cesar(phrase, decalage):
    alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    phrase_chiffree = ""

    for lettre in phrase:
        if lettre.isalpha():
            est_majuscule = lettre.isupper()
            lettre = lettre.upper()

            if lettre in alphabet:
                indice = alphabet.index(lettre)
                nouvel_indice = (indice + decalage) % 26
                nouvelle_lettre = alphabet[nouvel_indice]

                if not est_majuscule:
                    nouvelle_lettre = nouvelle_lettre.lower()

                phrase_chiffree += nouvelle_lettre
            else:
                phrase_chiffree += lettre
        else:
            phrase_chiffree += lettre

    return phrase_chiffree


phrase_a_chiffrer = input("Entrez la phrase à chiffrer : ")
decalage = int(input("Entrez le décalage (nombre entier) : "))
phrase_chiffree = chiffrement_cesar(phrase_a_chiffrer, decalage)
print("Phrase chiffrée : " + phrase_chiffree)
