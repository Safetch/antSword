//
// 默认代码模板
//
// @params
// :encode  SHELL编码
// :conn    数据库连接字符串
// :sql     执行SQL语句
// :db      数据库名
// :table   表名

module.exports = (arg1, arg2, arg3, arg4, arg5, arg6) => ({
  show_databases: {
    _: 'yv66vgAAADIBMQoACQCGCQBfAIcJAF8AiAgAiQoABwCKCACLBwCMCgAHAI0HAI4KAI8AkAcAkQgAkgcAkwcAlAoACQCVCABgCgAHAJYKAJcAmAoAlwCZCABiCACaCQBfAJsIAJwJAF8AnQgAngkAXwCfBwCgCAChCgAbAKIIAKMIAKQIAKUIAKYIAKcLAA0AqAsACwCpCwANAKkLAAsAqgoAXwCrCgBfAKwKABsArQcArgoAKgCGCACvCgAqALAKAA4AsQoAKgCxCwANALIKABsAsQoAswC0CAC1CgA1ALYHALcKADUAuAoANQC5CgC6ALsKADUAvAgAvQoANQC+BwC/CgA1AMAKADwAwQoANQDCCgA1AMMKACoAxAgAxQoAPADGCgA8AMcIAMgIAMkKAAcAygoABwDLBwDMBwDNCADOCADPCAB4CgA1ANAIANEIANIKADUA0woANQDUCADVCgDWANcLANgA2QsA2gDbCwDcAN0LAN4A3wsA3gDgCwDcAOELANwA4ggA4wgA5AoAXwDlBwDmAQAHcmVxdWVzdAEAJ0xqYXZheC9zZXJ2bGV0L2h0dHAvSHR0cFNlcnZsZXRSZXF1ZXN0OwEACHJlc3BvbnNlAQAoTGphdmF4L3NlcnZsZXQvaHR0cC9IdHRwU2VydmxldFJlc3BvbnNlOwEAB2VuY29kZXIBABJMamF2YS9sYW5nL1N0cmluZzsBAAJjcwEADHJhbmRvbVByZWZpeAEABjxpbml0PgEAAygpVgEABENvZGUBAA9MaW5lTnVtYmVyVGFibGUBAAZlcXVhbHMBABUoTGphdmEvbGFuZy9PYmplY3Q7KVoBAA1TdGFja01hcFRhYmxlBwCUBwDmBwCOBwCUBwCgBwC3AQACRUMBACYoTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvU3RyaW5nOwEACkV4Y2VwdGlvbnMBAAZkZWNvZGUHAL8HAM0BAApleGVjdXRlU1FMAQBvKExqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nO1opTGphdmEvbGFuZy9TdHJpbmc7BwDnBwDoBwDpBwDqBwDrAQANc2hvd0RhdGFiYXNlcwEAOChMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9TdHJpbmc7AQAKU291cmNlRmlsZQEAE1Nob3dfZGF0YWJhc2VzLmphdmEMAGgAaQwAYABhDABiAGMBAB1qYXZheC5zZXJ2bGV0LmpzcC5QYWdlQ29udGV4dAwA7ADtAQAKZ2V0UmVxdWVzdAEAD2phdmEvbGFuZy9DbGFzcwwA7gDvAQAQamF2YS9sYW5nL09iamVjdAcA8AwA8QDyAQAlamF2YXgvc2VydmxldC9odHRwL0h0dHBTZXJ2bGV0UmVxdWVzdAEAC2dldFJlc3BvbnNlAQAmamF2YXgvc2VydmxldC9odHRwL0h0dHBTZXJ2bGV0UmVzcG9uc2UBABNqYXZhL2xhbmcvRXhjZXB0aW9uDADzAPQMAPUA9gcA9wwA+AD5DAD6APsBABRhbnRzd29yZHJhbmRvbVByZWZpeAwAZwBlAQAGYmFzZTY0DABkAGUBAA9hbnRzd29yZENoYXJzZXQMAGYAZQEAFmphdmEvbGFuZy9TdHJpbmdCdWZmZXIBAAAMAGgA/AEAAy0+fAEAA3w8LQEAEWFudHN3b3JkYXJnZW5jb2RlAQAPYW50c3dvcmRhcmdjb25uAQAJdGV4dC9odG1sDAD9APwMAP4A/AwA/wB2DAB4AHYMAIIAgwwBAAEBAQAXamF2YS9sYW5nL1N0cmluZ0J1aWxkZXIBAAlFUlJPUjovLyAMAQABAgwBAwEEDAEFAQYHAQcMAQgA/AEAA2hleAwAbABtAQAQamF2YS9sYW5nL1N0cmluZwwBCQEKDABoAQsHAQwMAQ0BDgwBDwEQAQAQMDEyMzQ1Njc4OUFCQ0RFRgwBEQEEAQAdamF2YS9pby9CeXRlQXJyYXlPdXRwdXRTdHJlYW0MARIBEwwAaAEUDAEVARYMARcBGAwBAAEZAQABLAwBGgEUDAEDAHYBABZzdW4ubWlzYy5CQVNFNjREZWNvZGVyAQAMZGVjb2RlQnVmZmVyDAEbAO8MARwBHQEAAltCAQAgamF2YS9sYW5nL0NsYXNzTm90Rm91bmRFeGNlcHRpb24BABBqYXZhLnV0aWwuQmFzZTY0AQAKZ2V0RGVjb2RlcgwBHgEEAQACDQoBAAEKDAEfASAMASEBIgEAEyZjaGFyYWN0ZXJFbmNvZGluZz0HASMMASQBJQcA6AwBJgEnBwDpDAEoASkHAOoMASoBKwcA6wwBLAETDAEtARAMAS4BLwwBMAEQAQAOc2hvdyBkYXRhYmFzZXMBAAEJDAB7AHwBAB1kYXRhYmFzZS9teXNxbC9TaG93X2RhdGFiYXNlcwEAE1tMamF2YS9sYW5nL1N0cmluZzsBABNqYXZhL3NxbC9Db25uZWN0aW9uAQASamF2YS9zcWwvU3RhdGVtZW50AQASamF2YS9zcWwvUmVzdWx0U2V0AQAaamF2YS9zcWwvUmVzdWx0U2V0TWV0YURhdGEBAAdmb3JOYW1lAQAlKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL0NsYXNzOwEAEWdldERlY2xhcmVkTWV0aG9kAQBAKExqYXZhL2xhbmcvU3RyaW5nO1tMamF2YS9sYW5nL0NsYXNzOylMamF2YS9sYW5nL3JlZmxlY3QvTWV0aG9kOwEAGGphdmEvbGFuZy9yZWZsZWN0L01ldGhvZAEABmludm9rZQEAOShMamF2YS9sYW5nL09iamVjdDtbTGphdmEvbGFuZy9PYmplY3Q7KUxqYXZhL2xhbmcvT2JqZWN0OwEACGdldENsYXNzAQATKClMamF2YS9sYW5nL0NsYXNzOwEAEGdldERlY2xhcmVkRmllbGQBAC0oTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvcmVmbGVjdC9GaWVsZDsBABdqYXZhL2xhbmcvcmVmbGVjdC9GaWVsZAEADXNldEFjY2Vzc2libGUBAAQoWilWAQADZ2V0AQAmKExqYXZhL2xhbmcvT2JqZWN0OylMamF2YS9sYW5nL09iamVjdDsBABUoTGphdmEvbGFuZy9TdHJpbmc7KVYBAA5zZXRDb250ZW50VHlwZQEAFHNldENoYXJhY3RlckVuY29kaW5nAQAMZ2V0UGFyYW1ldGVyAQAGYXBwZW5kAQAsKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZ0J1ZmZlcjsBAC0oTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvU3RyaW5nQnVpbGRlcjsBAAh0b1N0cmluZwEAFCgpTGphdmEvbGFuZy9TdHJpbmc7AQAJZ2V0V3JpdGVyAQAXKClMamF2YS9pby9QcmludFdyaXRlcjsBABNqYXZhL2lvL1ByaW50V3JpdGVyAQAFcHJpbnQBAAhnZXRCeXRlcwEABCgpW0IBABcoW0JMamF2YS9sYW5nL1N0cmluZzspVgEAEWphdmEvbGFuZy9JbnRlZ2VyAQAIcGFyc2VJbnQBABUoTGphdmEvbGFuZy9TdHJpbmc7KUkBAAlzdWJzdHJpbmcBABUoSSlMamF2YS9sYW5nL1N0cmluZzsBAAt0b1VwcGVyQ2FzZQEABmxlbmd0aAEAAygpSQEABChJKVYBAAZjaGFyQXQBAAQoSSlDAQAHaW5kZXhPZgEABChJKUkBABwoSSlMamF2YS9sYW5nL1N0cmluZ0J1aWxkZXI7AQAFd3JpdGUBAAlnZXRNZXRob2QBAAtuZXdJbnN0YW5jZQEAFCgpTGphdmEvbGFuZy9PYmplY3Q7AQAEdHJpbQEAB3JlcGxhY2UBAEQoTGphdmEvbGFuZy9DaGFyU2VxdWVuY2U7TGphdmEvbGFuZy9DaGFyU2VxdWVuY2U7KUxqYXZhL2xhbmcvU3RyaW5nOwEABXNwbGl0AQAnKExqYXZhL2xhbmcvU3RyaW5nOylbTGphdmEvbGFuZy9TdHJpbmc7AQAWamF2YS9zcWwvRHJpdmVyTWFuYWdlcgEADWdldENvbm5lY3Rpb24BACkoTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL3NxbC9Db25uZWN0aW9uOwEAD2NyZWF0ZVN0YXRlbWVudAEAFigpTGphdmEvc3FsL1N0YXRlbWVudDsBAAxleGVjdXRlUXVlcnkBACgoTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL3NxbC9SZXN1bHRTZXQ7AQALZ2V0TWV0YURhdGEBAB4oKUxqYXZhL3NxbC9SZXN1bHRTZXRNZXRhRGF0YTsBAA5nZXRDb2x1bW5Db3VudAEADWdldENvbHVtbk5hbWUBAARuZXh0AQADKClaAQAJZ2V0U3RyaW5nACEAXwAJAAAABQABAGAAYQAAAAEAYgBjAAAAAQBkAGUAAAABAGYAZQAAAAEAZwBlAAAABgABAGgAaQABAGoAAAAvAAIAAQAAAA8qtwABKgG1AAIqAbUAA7EAAAABAGsAAAAOAAMAAAAJAAQACgAJAAsAAQBsAG0A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',
    [arg1]: '#{newbase64::encode}',
    [arg2]: '#{newbase64::conn}'
  },
  show_tables: {
    _: 'yv66vgAAADIBMwoACQCHCQBgAIgJAGAAiQgAigoABwCLCACMBwCNCgAHAI4HAI8KAJAAkQcAkggAkwcAlAcAlQoACQCWCABhCgAHAJcKAJgAmQoAmACaCABjCACbCQBgAJwIAJ0JAGAAnggAnwkAYACgBwChCACiCgAbAKMIAKQIAKUIAKYIAKcIAKgIAKkLAA0AqgsACwCrCwANAKsLAAsArAoAYACtCgBgAK4KABsArwcAsAoAKwCHCACxCgArALIKAA4AswoAKwCzCwANALQKABsAswoAtQC2CAC3CgA2ALgHALkKADYAugoANgC7CgC8AL0KADYAvggAvwoANgDABwDBCgA2AMIKAD0AwwoANgDECgA2AMUKACsAxggAxwoAPQDICgA9AMkIAMoIAMsKAAcAzAoABwDNBwDOBwDPCADQCADRCAB5CgA2ANIIANMIANQKADYA1QoANgDWCADXCgDYANkLANoA2wsA3ADdCwDeAN8LAOAA4QsA4ADiCwDeAOMLAN4A5AgA5QgA5goAYADnBwDoAQAHcmVxdWVzdAEAJ0xqYXZheC9zZXJ2bGV0L2h0dHAvSHR0cFNlcnZsZXRSZXF1ZXN0OwEACHJlc3BvbnNlAQAoTGphdmF4L3NlcnZsZXQvaHR0cC9IdHRwU2VydmxldFJlc3BvbnNlOwEAB2VuY29kZXIBABJMamF2YS9sYW5nL1N0cmluZzsBAAJjcwEADHJhbmRvbVByZWZpeAEABjxpbml0PgEAAygpVgEABENvZGUBAA9MaW5lTnVtYmVyVGFibGUBAAZlcXVhbHMBABUoTGphdmEvbGFuZy9PYmplY3Q7KVoBAA1TdGFja01hcFRhYmxlBwCVBwDoBwCPBwCVBwChBwC5AQACRUMBACYoTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvU3RyaW5nOwEACkV4Y2VwdGlvbnMBAAZkZWNvZGUHAMEHAM8BAApleGVjdXRlU1FMAQBvKExqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nO1opTGphdmEvbGFuZy9TdHJpbmc7BwDpBwDqBwDrBwDsBwDtAQAKc2hvd1RhYmxlcwEASihMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9TdHJpbmc7AQAKU291cmNlRmlsZQEAEFNob3dfdGFibGVzLmphdmEMAGkAagwAYQBiDABjAGQBAB1qYXZheC5zZXJ2bGV0LmpzcC5QYWdlQ29udGV4dAwA7gDvAQAKZ2V0UmVxdWVzdAEAD2phdmEvbGFuZy9DbGFzcwwA8ADxAQAQamF2YS9sYW5nL09iamVjdAcA8gwA8wD0AQAlamF2YXgvc2VydmxldC9odHRwL0h0dHBTZXJ2bGV0UmVxdWVzdAEAC2dldFJlc3BvbnNlAQAmamF2YXgvc2VydmxldC9odHRwL0h0dHBTZXJ2bGV0UmVzcG9uc2UBABNqYXZhL2xhbmcvRXhjZXB0aW9uDAD1APYMAPcA+AcA+QwA+gD7DAD8AP0BABRhbnRzd29yZHJhbmRvbVByZWZpeAwAaABmAQAGYmFzZTY0DABlAGYBAA9hbnRzd29yZENoYXJzZXQMAGcAZgEAFmphdmEvbGFuZy9TdHJpbmdCdWZmZXIBAAAMAGkA/gEAAy0+fAEAA3w8LQEAEWFudHN3b3JkYXJnZW5jb2RlAQAPYW50c3dvcmRhcmdjb25uAQANYW50c3dvcmRhcmdkYgEACXRleHQvaHRtbAwA/wD+DAEAAP4MAQEAdwwAeQB3DACDAIQMAQIBAwEAF2phdmEvbGFuZy9TdHJpbmdCdWlsZGVyAQAJRVJST1I6Ly8gDAECAQQMAQUBBgwBBwEIBwEJDAEKAP4BAANoZXgMAG0AbgEAEGphdmEvbGFuZy9TdHJpbmcMAQsBDAwAaQENBwEODAEPARAMAREBEgEAEDAxMjM0NTY3ODlBQkNERUYMARMBBgEAHWphdmEvaW8vQnl0ZUFycmF5T3V0cHV0U3RyZWFtDAEUARUMAGkBFgwBFwEYDAEZARoMAQIBGwEAASwMARwBFgwBBQB3AQAWc3VuLm1pc2MuQkFTRTY0RGVjb2RlcgEADGRlY29kZUJ1ZmZlcgwBHQDxDAEeAR8BAAJbQgEAIGphdmEvbGFuZy9DbGFzc05vdEZvdW5kRXhjZXB0aW9uAQAQamF2YS51dGlsLkJhc2U2NAEACmdldERlY29kZXIMASABBgEAAg0KAQABCgwBIQEiDAEjASQBABMmY2hhcmFjdGVyRW5jb2Rpbmc9BwElDAEmAScHAOoMASgBKQcA6wwBKgErBwDsDAEsAS0HAO0MAS4BFQwBLwESDAEwATEMATIBEgEAEXNob3cgdGFibGVzIGZyb20gAQABCQwAfAB9AQAaZGF0YWJhc2UvbXlzcWwvU2hvd190YWJsZXMBABNbTGphdmEvbGFuZy9TdHJpbmc7AQATamF2YS9zcWwvQ29ubmVjdGlvbgEAEmphdmEvc3FsL1N0YXRlbWVudAEAEmphdmEvc3FsL1Jlc3VsdFNldAEAGmphdmEvc3FsL1Jlc3VsdFNldE1ldGFEYXRhAQAHZm9yTmFtZQEAJShMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9DbGFzczsBABFnZXREZWNsYXJlZE1ldGhvZAEAQChMamF2YS9sYW5nL1N0cmluZztbTGphdmEvbGFuZy9DbGFzczspTGphdmEvbGFuZy9yZWZsZWN0L01ldGhvZDsBABhqYXZhL2xhbmcvcmVmbGVjdC9NZXRob2QBAAZpbnZva2UBADkoTGphdmEvbGFuZy9PYmplY3Q7W0xqYXZhL2xhbmcvT2JqZWN0OylMamF2YS9sYW5nL09iamVjdDsBAAhnZXRDbGFzcwEAEygpTGphdmEvbGFuZy9DbGFzczsBABBnZXREZWNsYXJlZEZpZWxkAQAtKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL3JlZmxlY3QvRmllbGQ7AQAXamF2YS9sYW5nL3JlZmxlY3QvRmllbGQBAA1zZXRBY2Nlc3NpYmxlAQAEKFopVgEAA2dldAEAJihMamF2YS9sYW5nL09iamVjdDspTGphdmEvbGFuZy9PYmplY3Q7AQAVKExqYXZhL2xhbmcvU3RyaW5nOylWAQAOc2V0Q29udGVudFR5cGUBABRzZXRDaGFyYWN0ZXJFbmNvZGluZwEADGdldFBhcmFtZXRlcgEABmFwcGVuZAEALChMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9TdHJpbmdCdWZmZXI7AQAtKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZ0J1aWxkZXI7AQAIdG9TdHJpbmcBABQoKUxqYXZhL2xhbmcvU3RyaW5nOwEACWdldFdyaXRlcgEAFygpTGphdmEvaW8vUHJpbnRXcml0ZXI7AQATamF2YS9pby9QcmludFdyaXRlcgEABXByaW50AQAIZ2V0Qnl0ZXMBAAQoKVtCAQAXKFtCTGphdmEvbGFuZy9TdHJpbmc7KVYBABFqYXZhL2xhbmcvSW50ZWdlcgEACHBhcnNlSW50AQAVKExqYXZhL2xhbmcvU3RyaW5nOylJAQAJc3Vic3RyaW5nAQAVKEkpTGphdmEvbGFuZy9TdHJpbmc7AQALdG9VcHBlckNhc2UBAAZsZW5ndGgBAAMoKUkBAAQoSSlWAQAGY2hhckF0AQAEKEkpQwEAB2luZGV4T2YBAAQoSSlJAQAcKEkpTGphdmEvbGFuZy9TdHJpbmdCdWlsZGVyOwEABXdyaXRlAQAJZ2V0TWV0aG9kAQALbmV3SW5zdGFuY2UBABQoKUxqYXZhL2xhbmcvT2JqZWN0OwEABHRyaW0BAAdyZXBsYWNlAQBEKExqYXZhL2xhbmcvQ2hhclNlcXVlbmNlO0xqYXZhL2xhbmcvQ2hhclNlcXVlbmNlOylMamF2YS9sYW5nL1N0cmluZzsBAAVzcGxpdAEAJyhMamF2YS9sYW5nL1N0cmluZzspW0xqYXZhL2xhbmcvU3RyaW5nOwEAFmphdmEvc3FsL0RyaXZlck1hbmFnZXIBAA1nZXRDb25uZWN0aW9uAQApKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9zcWwvQ29ubmVjdGlvbjsBAA9jcmVhdGVTdGF0ZW1lbnQBABYoKUxqYXZhL3NxbC9TdGF0ZW1lbnQ7AQAMZXhlY3V0ZVF1ZXJ5AQAoKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9zcWwvUmVzdWx0U2V0OwEAC2dldE1ldGFEYXRhAQAeKClMamF2YS9zcWwvUmVzdWx0U2V0TWV0YURhdGE7AQAOZ2V0Q29sdW1uQ291bnQBAA1nZXRDb2x1bW5OYW1lAQAEbmV4dAEAAygpWgEACWdldFN0cmluZwAhAGAACQAAAAUAAQBhAGIAAAABAGMAZAAAAAEAZQBmAAAAAQBnAGYAAAABAGgAZgAAAAYAAQBpAGoAAQBrAAAALwACAAEAAAAPKrcAASoBtQACKgG1AAOx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',
    [arg1]: '#{newbase64::encode}',
    [arg2]: '#{newbase64::conn}',
    [arg3]: '#{newbase64::db}'
  },
  show_columns: {
    _: 'yv66vgAAADIBOQoACQCKCQBjAIsJAGMAjAgAjQoABwCOCACPBwCQCgAHAJEHAJIKAJMAlAcAlQgAlgcAlwcAmAoACQCZCABkCgAHAJoKAJsAnAoAmwCdCABmCACeCQBjAJ8IAKAJAGMAoQgAogkAYwCjBwCkCAClCgAbAKYIAKcIAKgIAKkIAKoIAKsIAKwIAK0LAA0ArgsACwCvCwANAK8LAAsAsAoAYwCxCgBjALIKABsAswcAtAoALACKCAC1CgAsALYKAA4AtwoALAC3CwANALgKABsAtwoAuQC6CAC7CgA3ALwHAL0KADcAvgoANwC/CgDAAMEKADcAwggAwwoANwDEBwDFCgA3AMYKAD4AxwoANwDICgA3AMkKACwAyggAywoAPgDMCgA+AM0IAM4IAM8KAAcA0AoABwDRBwDSBwDTCADUCADVCAB8CgA3ANYIANcIANgKADcA2QoANwDaCADbCgDcAN0LAN4A3wsA4ADhCwDiAOMLAOQA5QsA5ADmCwDiAOcLAOIA6AgA6QgA6ggA6wgA7AoAYwDtBwDuAQAHcmVxdWVzdAEAJ0xqYXZheC9zZXJ2bGV0L2h0dHAvSHR0cFNlcnZsZXRSZXF1ZXN0OwEACHJlc3BvbnNlAQAoTGphdmF4L3NlcnZsZXQvaHR0cC9IdHRwU2VydmxldFJlc3BvbnNlOwEAB2VuY29kZXIBABJMamF2YS9sYW5nL1N0cmluZzsBAAJjcwEADHJhbmRvbVByZWZpeAEABjxpbml0PgEAAygpVgEABENvZGUBAA9MaW5lTnVtYmVyVGFibGUBAAZlcXVhbHMBABUoTGphdmEvbGFuZy9PYmplY3Q7KVoBAA1TdGFja01hcFRhYmxlBwCYBwDuBwCSBwCYBwCkBwC9AQACRUMBACYoTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvU3RyaW5nOwEACkV4Y2VwdGlvbnMBAAZkZWNvZGUHAMUHANMBAApleGVjdXRlU1FMAQBvKExqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nO1opTGphdmEvbGFuZy9TdHJpbmc7BwDvBwDwBwDxBwDyBwDzAQALc2hvd0NvbHVtbnMBAFwoTGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvU3RyaW5nOwEAClNvdXJjZUZpbGUBABFTaG93X2NvbHVtbnMuamF2YQwAbABtDABkAGUMAGYAZwEAHWphdmF4LnNlcnZsZXQuanNwLlBhZ2VDb250ZXh0DAD0APUBAApnZXRSZXF1ZXN0AQAPamF2YS9sYW5nL0NsYXNzDAD2APcBABBqYXZhL2xhbmcvT2JqZWN0BwD4DAD5APoBACVqYXZheC9zZXJ2bGV0L2h0dHAvSHR0cFNlcnZsZXRSZXF1ZXN0AQALZ2V0UmVzcG9uc2UBACZqYXZheC9zZXJ2bGV0L2h0dHAvSHR0cFNlcnZsZXRSZXNwb25zZQEAE2phdmEvbGFuZy9FeGNlcHRpb24MAPsA/AwA/QD+BwD/DAEAAQEMAQIBAwEAFGFudHN3b3JkcmFuZG9tUHJlZml4DABrAGkBAAZiYXNlNjQMAGgAaQEAD2FudHN3b3JkQ2hhcnNldAwAagBpAQAWamF2YS9sYW5nL1N0cmluZ0J1ZmZlcgEAAAwAbAEEAQADLT58AQADfDwtAQARYW50c3dvcmRhcmdlbmNvZGUBAA9hbnRzd29yZGFyZ2Nvbm4BAA1hbnRzd29yZGFyZ2RiAQAQYW50c3dvcmRhcmd0YWJsZQEACXRleHQvaHRtbAwBBQEEDAEGAQQMAQcAegwAfAB6DACGAIcMAQgBCQEAF2phdmEvbGFuZy9TdHJpbmdCdWlsZGVyAQAJRVJST1I6Ly8gDAEIAQoMAQsBDAwBDQEOBwEPDAEQAQQBAANoZXgMAHAAcQEAEGphdmEvbGFuZy9TdHJpbmcMAREBEgwAbAETBwEUDAEVARYMARcBGAEAEDAxMjM0NTY3ODlBQkNERUYMARkBDAEAHWphdmEvaW8vQnl0ZUFycmF5T3V0cHV0U3RyZWFtDAEaARsMAGwBHAwBHQEeDAEfASAMAQgBIQEAASwMASIBHAwBCwB6AQAWc3VuLm1pc2MuQkFTRTY0RGVjb2RlcgEADGRlY29kZUJ1ZmZlcgwBIwD3DAEkASUBAAJbQgEAIGphdmEvbGFuZy9DbGFzc05vdEZvdW5kRXhjZXB0aW9uAQAQamF2YS51dGlsLkJhc2U2NAEACmdldERlY29kZXIMASYBDAEAAg0KAQABCgwBJwEoDAEpASoBABMmY2hhcmFjdGVyRW5jb2Rpbmc9BwErDAEsAS0HAPAMAS4BLwcA8QwBMAExBwDyDAEyATMHAPMMATQBGwwBNQEYDAE2ATcMATgBGAEAAQkBAA5zZWxlY3QgKiBmcm9tIAEAAS4BAAogbGltaXQgMCwwDAB/AIABABtkYXRhYmFzZS9teXNxbC9TaG93X2NvbHVtbnMBABNbTGphdmEvbGFuZy9TdHJpbmc7AQATamF2YS9zcWwvQ29ubmVjdGlvbgEAEmphdmEvc3FsL1N0YXRlbWVudAEAEmphdmEvc3FsL1Jlc3VsdFNldAEAGmphdmEvc3FsL1Jlc3VsdFNldE1ldGFEYXRhAQAHZm9yTmFtZQEAJShMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9DbGFzczsBABFnZXREZWNsYXJlZE1ldGhvZAEAQChMamF2YS9sYW5nL1N0cmluZztbTGphdmEvbGFuZy9DbGFzczspTGphdmEvbGFuZy9yZWZsZWN0L01ldGhvZDsBABhqYXZhL2xhbmcvcmVmbGVjdC9NZXRob2QBAAZpbnZva2UBADkoTGphdmEvbGFuZy9PYmplY3Q7W0xqYXZhL2xhbmcvT2JqZWN0OylMamF2YS9sYW5nL09iamVjdDsBAAhnZXRDbGFzcwEAEygpTGphdmEvbGFuZy9DbGFzczsBABBnZXREZWNsYXJlZEZpZWxkAQAtKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL3JlZmxlY3QvRmllbGQ7AQAXamF2YS9sYW5nL3JlZmxlY3QvRmllbGQBAA1zZXRBY2Nlc3NpYmxlAQAEKFopVgEAA2dldAEAJihMamF2YS9sYW5nL09iamVjdDspTGphdmEvbGFuZy9PYmplY3Q7AQAVKExqYXZhL2xhbmcvU3RyaW5nOylWAQAOc2V0Q29udGVudFR5cGUBABRzZXRDaGFyYWN0ZXJFbmNvZGluZwEADGdldFBhcmFtZXRlcgEABmFwcGVuZAEALChMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9TdHJpbmdCdWZmZXI7AQAtKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZ0J1aWxkZXI7AQAIdG9TdHJpbmcBABQoKUxqYXZhL2xhbmcvU3RyaW5nOwEACWdldFdyaXRlcgEAFygpTGphdmEvaW8vUHJpbnRXcml0ZXI7AQATamF2YS9pby9QcmludFdyaXRlcgEABXByaW50AQAIZ2V0Qnl0ZXMBAAQoKVtCAQAXKFtCTGphdmEvbGFuZy9TdHJpbmc7KVYBABFqYXZhL2xhbmcvSW50ZWdlcgEACHBhcnNlSW50AQAVKExqYXZhL2xhbmcvU3RyaW5nOylJAQAJc3Vic3RyaW5nAQAVKEkpTGphdmEvbGFuZy9TdHJpbmc7AQALdG9VcHBlckNhc2UBAAZsZW5ndGgBAAMoKUkBAAQoSSlWAQAGY2hhckF0AQAEKEkpQwEAB2luZGV4T2YBAAQoSSlJAQAcKEkpTGphdmEvbGFuZy9TdHJpbmdCdWlsZGVyOwEABXdyaXRlAQAJZ2V0TWV0aG9kAQALbmV3SW5zdGFuY2UBABQoKUxqYXZhL2xhbmcvT2JqZWN0OwEABHRyaW0BAAdyZXBsYWNlAQBEKExqYXZhL2xhbmcvQ2hhclNlcXVlbmNlO0xqYXZhL2xhbmcvQ2hhclNlcXVlbmNlOylMamF2YS9sYW5nL1N0cmluZzsBAAVzcGxpdAEAJyhMamF2YS9sYW5nL1N0cmluZzspW0xqYXZhL2xhbmcvU3RyaW5nOwEAFmphdmEvc3FsL0RyaXZlck1hbmFnZXIBAA1nZXRDb25uZWN0aW9uAQApKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9zcWwvQ29ubmVjdGlvbjsBAA9jcmVhdGVTdGF0ZW1lbnQBABYoKUxqYXZhL3NxbC9TdGF0ZW1lbnQ7AQAMZXhlY3V0ZVF1ZXJ5AQAoKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9zcWwvUmVzdWx0U2V0OwEAC2dldE1ldGFEYXRhAQAeKClMamF2YS9zcWwvUmVzdWx0U2V0TWV0YURhdGE7AQAOZ2V0Q29sdW1uQ291bnQBAA1nZXRDb2x1bW5OYW1lAQAEbmV4dAEAAygpWgEACWdldFN0cmluZwAhAGMACQAAAAUAAQBkAGUAAAABAGYAZwAA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',
    [arg1]: '#{newbase64::encode}',
    [arg2]: '#{newbase64::conn}',
    [arg3]: '#{newbase64::db}',
    [arg4]: '#{newbase64::table}'
  },
  query: {
    _: 'yv66vgAAADIBUQoACQCSCQBqAJMJAGoAlAgAlQoABwCWCACXBwCYCgAHAJkHAJoKAJsAnAcAnQgAngcAnwcAoAoACQChCABrCgAHAKIKAKMApAoAowClCABtCACmCQBqAKcIAKgJAGoAqQgAqgkAagCrBwCsCACtCgAbAK4IAK8IALAIALEIALIIALMIALQLAA0AtQsACwC2CwANALYLAAsAtwoAagC4CgBqALkKABsAugcAuwoAKwCSCAC8CgArAL0KAA4AvgoAKwC+CwANAL8KABsAvgoAwADBCADCCgA2AMMHAMQKADYAxQoANgDGCgDHAMgKADYAyQgAygoANgDLBwDMCgA2AM0KAD0AzgoANgDPCgA2ANAKACsA0QgA0goAPQDTCgA9ANQIANUIANYKAAcA1woABwDYBwDZBwDaCADbCADcCACDCADdCgDeAN8IAOAKADYA4QgA4ggA4wgA5AoABwDlCgDmAOcIAOgKADYA6QgA6ggA6woANgDsCgA2AO0IAO4KAO8A8AsA8QDyCwDzAPQLAPUA9gsA9wD4CwD3APkLAPUA+gsA9QD7CgBqAPwIAP0KAGoA/gcA/wEAB3JlcXVlc3QBACdMamF2YXgvc2VydmxldC9odHRwL0h0dHBTZXJ2bGV0UmVxdWVzdDsBAAhyZXNwb25zZQEAKExqYXZheC9zZXJ2bGV0L2h0dHAvSHR0cFNlcnZsZXRSZXNwb25zZTsBAAdlbmNvZGVyAQASTGphdmEvbGFuZy9TdHJpbmc7AQACY3MBAAxyYW5kb21QcmVmaXgBAAY8aW5pdD4BAAMoKVYBAARDb2RlAQAPTGluZU51bWJlclRhYmxlAQAGZXF1YWxzAQAVKExqYXZhL2xhbmcvT2JqZWN0OylaAQANU3RhY2tNYXBUYWJsZQcAoAcA/wcAmgcAoAcArAcAxAEAAkVDAQAmKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZzsBAApFeGNlcHRpb25zAQAGZGVjb2RlBwDMBwDaAQAMQmFzZTY0RW5jb2RlAQAKZXhlY3V0ZVNRTAEAbyhMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztaKUxqYXZhL2xhbmcvU3RyaW5nOwcBAAcBAQcBAgcBAwcBBAEABXF1ZXJ5AQBKKExqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZzsBAApTb3VyY2VGaWxlAQAKUXVlcnkuamF2YQwAcwB0DABrAGwMAG0AbgEAHWphdmF4LnNlcnZsZXQuanNwLlBhZ2VDb250ZXh0DAEFAQYBAApnZXRSZXF1ZXN0AQAPamF2YS9sYW5nL0NsYXNzDAEHAQgBABBqYXZhL2xhbmcvT2JqZWN0BwEJDAEKAQsBACVqYXZheC9zZXJ2bGV0L2h0dHAvSHR0cFNlcnZsZXRSZXF1ZXN0AQALZ2V0UmVzcG9uc2UBACZqYXZheC9zZXJ2bGV0L2h0dHAvSHR0cFNlcnZsZXRSZXNwb25zZQEAE2phdmEvbGFuZy9FeGNlcHRpb24MAQwBDQwBDgEPBwEQDAERARIMARMBFAEAFGFudHN3b3JkcmFuZG9tUHJlZml4DAByAHABAAZiYXNlNjQMAG8AcAEAD2FudHN3b3JkQ2hhcnNldAwAcQBwAQAWamF2YS9sYW5nL1N0cmluZ0J1ZmZlcgEAAAwAcwEVAQADLT58AQADfDwtAQARYW50c3dvcmRhcmdlbmNvZGUBAA9hbnRzd29yZGFyZ2Nvbm4BAA5hbnRzd29yZGFyZ3NxbAEACXRleHQvaHRtbAwBFgEVDAEXARUMARgAgQwAgwCBDACOAI8MARkBGgEAF2phdmEvbGFuZy9TdHJpbmdCdWlsZGVyAQAJRVJST1I6Ly8gDAEZARsMARwBHQwBHgEfBwEgDAEhARUBAANoZXgMAHcAeAEAEGphdmEvbGFuZy9TdHJpbmcMASIBIwwAcwEkBwElDAEmAScMASgBKQEAEDAxMjM0NTY3ODlBQkNERUYMASoBHQEAHWphdmEvaW8vQnl0ZUFycmF5T3V0cHV0U3RyZWFtDAErASwMAHMBLQwBLgEvDAEwATEMARkBMgEAASwMATMBLQwBHACBAQAWc3VuLm1pc2MuQkFTRTY0RGVjb2RlcgEADGRlY29kZUJ1ZmZlcgwBNAEIDAE1ATYBAAJbQgEAIGphdmEvbGFuZy9DbGFzc05vdEZvdW5kRXhjZXB0aW9uAQAQamF2YS51dGlsLkJhc2U2NAEACmdldERlY29kZXIBAAxqYXZhLnZlcnNpb24HATcMATgAgQEAAzEuOQwBOQEnAQAKZ2V0RW5jb2RlcgEADmVuY29kZVRvU3RyaW5nAQAWc3VuLm1pc2MuQkFTRTY0RW5jb2RlcgwBOgE7BwE8DAE1AT0BAAZlbmNvZGUMAT4BHQEAAg0KAQABCgwBPwFADAFBAUIBABMmY2hhcmFjdGVyRW5jb2Rpbmc9BwFDDAFEAUUHAQEMAUYBRwcBAgwBSAFJBwEDDAFKAUsHAQQMAUwBLAwBTQEpDAFOAU8MAVABKQwAhgCBAQADCXwJDACHAIgBABRkYXRhYmFzZS9teXNxbC9RdWVyeQEAE1tMamF2YS9sYW5nL1N0cmluZzsBABNqYXZhL3NxbC9Db25uZWN0aW9uAQASamF2YS9zcWwvU3RhdGVtZW50AQASamF2YS9zcWwvUmVzdWx0U2V0AQAaamF2YS9zcWwvUmVzdWx0U2V0TWV0YURhdGEBAAdmb3JOYW1lAQAlKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL0NsYXNzOwEAEWdldERlY2xhcmVkTWV0aG9kAQBAKExqYXZhL2xhbmcvU3RyaW5nO1tMamF2YS9sYW5nL0NsYXNzOylMamF2YS9sYW5nL3JlZmxlY3QvTWV0aG9kOwEAGGphdmEvbGFuZy9yZWZsZWN0L01ldGhvZAEABmludm9rZQEAOShMamF2YS9sYW5nL09iamVjdDtbTGphdmEvbGFuZy9PYmplY3Q7KUxqYXZhL2xhbmcvT2JqZWN0OwEACGdldENsYXNzAQATKClMamF2YS9sYW5nL0NsYXNzOwEAEGdldERlY2xhcmVkRmllbGQBAC0oTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvcmVmbGVjdC9GaWVsZDsBABdqYXZhL2xhbmcvcmVmbGVjdC9GaWVsZAEADXNldEFjY2Vzc2libGUBAAQoWilWAQADZ2V0AQAmKExqYXZhL2xhbmcvT2JqZWN0OylMamF2YS9sYW5nL09iamVjdDsBABUoTGphdmEvbGFuZy9TdHJpbmc7KVYBAA5zZXRDb250ZW50VHlwZQEAFHNldENoYXJhY3RlckVuY29kaW5nAQAMZ2V0UGFyYW1ldGVyAQAGYXBwZW5kAQAsKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZ0J1ZmZlcjsBAC0oTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvU3RyaW5nQnVpbGRlcjsBAAh0b1N0cmluZwEAFCgpTGphdmEvbGFuZy9TdHJpbmc7AQAJZ2V0V3JpdGVyAQAXKClMamF2YS9pby9QcmludFdyaXRlcjsBABNqYXZhL2lvL1ByaW50V3JpdGVyAQAFcHJpbnQBAAhnZXRCeXRlcwEABCgpW0IBABcoW0JMamF2YS9sYW5nL1N0cmluZzspVgEAEWphdmEvbGFuZy9JbnRlZ2VyAQAIcGFyc2VJbnQBABUoTGphdmEvbGFuZy9TdHJpbmc7KUkBAAlzdWJzdHJpbmcBABUoSSlMamF2YS9sYW5nL1N0cmluZzsBAAt0b1VwcGVyQ2FzZQEABmxlbmd0aAEAAygpSQEABChJKVYBAAZjaGFyQXQBAAQoSSlDAQAHaW5kZXhPZgEABChJKUkBABwoSSlMamF2YS9sYW5nL1N0cmluZ0J1aWxkZXI7AQAFd3JpdGUBAAlnZXRNZXRob2QBAAtuZXdJbnN0YW5jZQEAFCgpTGphdmEvbGFuZy9PYmplY3Q7AQAQamF2YS9sYW5nL1N5c3RlbQEAC2dldFByb3BlcnR5AQAJY29tcGFyZVRvAQAWZ2V0RGVjbGFyZWRDb25zdHJ1Y3RvcgEAMyhbTGphdmEvbGFuZy9DbGFzczspTGphdmEvbGFuZy9yZWZsZWN0L0NvbnN0cnVjdG9yOwEAHWphdmEvbGFuZy9yZWZsZWN0L0NvbnN0cnVjdG9yAQAnKFtMamF2YS9sYW5nL09iamVjdDspTGphdmEvbGFuZy9PYmplY3Q7AQAEdHJpbQEAB3JlcGxhY2UBAEQoTGphdmEvbGFuZy9DaGFyU2VxdWVuY2U7TGphdmEvbGFuZy9DaGFyU2VxdWVuY2U7KUxqYXZhL2xhbmcvU3RyaW5nOwEABXNwbGl0AQAnKExqYXZhL2xhbmcvU3RyaW5nOylbTGphdmEvbGFuZy9TdHJpbmc7AQAWamF2YS9zcWwvRHJpdmVyTWFuYWdlcgEADWdldENvbm5lY3Rpb24BACko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',
    [arg1]: '#{newbase64::encode}',
    [arg2]: '#{newbase64::conn}',
    [arg3]: '#{newbase64::sql}'
  }
})