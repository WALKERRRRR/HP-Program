
def construct(data):

    return


def getData():
    dic = open('systems-2017-09-21.csv', 'r')
    data = []
    dataHeaders = dic.readline
    for line in dic:
        return



if __name__ == '__main__':
    data = getData()
    data = construct(data)
    f = open('constructed-data', 'w')
    f.write(data)
