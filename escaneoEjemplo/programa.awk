#! /usr/bin/awk -f

BEGIN {
  print "ejecutando"
}

nmap -sP 192.168.100.*/24 | awk '/for/ { print $5 }'
