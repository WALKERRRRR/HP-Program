import json

def contruct():
    dic = open('systems-2017-09-21.csv', 'r')
    data = []
    dataHeaders = dic.readline().replace('"', '').replace('\n', '').split(',')
    rowCount = 0 # current row
    colCount = 0 # current header (data type)
    for line in dic:
        if rowCount == 250:
            break
        data.append({})
        entries = line.replace('"','').replace('\n','').split(',')
        entryNum = 0
        for entry in entries:
            entryNum += 1
            if entryNum <= len(dataHeaders):
                data[rowCount][dataHeaders[colCount]] = entry
            colCount += 1
        rowCount += 1
        colCount = 0
    return data



if __name__ == '__main__':
    data = contruct()
    outfile = open('constructed-data-250.js', 'w')
    outfile.write('global.data = ')
    json.dump(data, outfile)
    outfile.close()
