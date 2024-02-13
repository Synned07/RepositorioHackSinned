#!/usr/bin/env python3
#_*_ coding:utf-8 _*_ 

from ds_store import DSStore

ruta = '.DS_Store'

with DSStore.open(ruta, 'r+') as d:

    print(d)
    # d['foo.txt']['Iloc'] = (128, 128)

    # print(d['.']['bwsp'])
    # print(d['.']['icvp'])