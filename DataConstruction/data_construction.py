import json

def contruct():
    dic = open('systems-2017-09-21.csv', 'r')
    data = []
    dataHeaders = dic.readline().replace('"', '').replace('\n', '').split(',')
    # dataHeaders.append('includeInAggregate')
    rowCount = 0 # current row
    colCount = 0 # current header (data type)
    for line in dic:
        # if rowCount == 250:
        #     break
        if 'Zombie' in line:# or 'Lynx' in line:
            data.append({})
            entries = line.replace('"','').replace('\n','').split(',')
            colCount = 0
            for entry in entries:
                if colCount < len(dataHeaders):
                    # print rowCount, ' ', colCount
                    data[rowCount][dataHeaders[colCount].strip()] = entry
                    colCount += 1
            data[rowCount]['includeInAggregate'] = True
            # data[rowCount]['rowNumber'] = rowCount
            rowCount += 1
    return data

def isolateCompany(data):
    for entry in data:
        if entry["companyName"] != "Zombie":# and entry["companyName"] != "Lynx":
            data.remove(entry)
    return data

def addRowNumber(data):
    n = 0
    for entry in data:
        entry['rowNumber'] = n
        n += 1
    return data


if __name__ == '__main__':
    data = contruct()
    outfile = open('constructed-data-demo-zombie.js', 'w')
    outfile.write('global.data = ')
    data = isolateCompany(data)
    data = addRowNumber(data)
    json.dump(data, outfile)
    outfile.close()
