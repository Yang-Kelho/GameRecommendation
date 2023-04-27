import json
import numpy as np


class Recommendation:
    file = open('resources/keyword-matrix.json')
    file2 = open('resources/gameNamesToIDs.json')


    matrix = json.load(file)
    matrix = np.array(matrix)

    df = json.load(file2)

    def get_most_similar(self, cosineArray):

        gameNames = []
        print()
        for val in sorted(cosineArray, reverse=True)[1:11]:
            simIndex = list(cosineArray).index(val)
            gameNames.append(list(self.df.keys())[simIndex])
        return gameNames

    def content_based_rec_by_name(self, gameName):

        gameID = self.df[gameName][0]
        print(f"gameID = {gameID}")
        return self.content_based_rec_by_id(str(gameID))

    def content_based_rec_by_id(self, gameID):

        try:
            for i in range(0, len(list(self.df.values()))):
                if gameID in list(self.df.values())[i]:
                    gameIndex = i

        except ValueError:
            print("Game ID not found.")
        else:
            print(f"10 most similar games to {list(self.df.values())[gameIndex]}, according to genre and tags:")
            cosine_array = self.matrix[gameIndex]
            return self.get_most_similar(cosine_array)
