EESchema Schematic File Version 4
EELAYER 30 0
EELAYER END
$Descr A4 11693 8268
encoding utf-8
Sheet 3 4
Title ""
Date ""
Rev ""
Comp ""
Comment1 ""
Comment2 ""
Comment3 ""
Comment4 ""
$EndDescr
$Comp
L Device:R R?
U 1 1 5FE6A806
P 3100 2250
AR Path="/5FE6A806" Ref="R?"  Part="1" 
AR Path="/5FCFF104/5FE6A806" Ref="R?"  Part="1" 
AR Path="/5FE5E004/5FE6A806" Ref="R8"  Part="1" 
F 0 "R8" H 3170 2296 50  0000 L CNN
F 1 "10k" H 3170 2205 50  0000 L CNN
F 2 "Capacitor_SMD:C_0805_2012Metric" V 3030 2250 50  0001 C CNN
F 3 "~" H 3100 2250 50  0001 C CNN
	1    3100 2250
	1    0    0    -1  
$EndComp
$Comp
L Device:C_Small C?
U 1 1 5FE6A80C
P 2850 2000
AR Path="/5FE6A80C" Ref="C?"  Part="1" 
AR Path="/5FCFF104/5FE6A80C" Ref="C?"  Part="1" 
AR Path="/5FE5E004/5FE6A80C" Ref="C8"  Part="1" 
F 0 "C8" V 2621 2000 50  0000 C CNN
F 1 "1uf" V 2712 2000 50  0000 C CNN
F 2 "Capacitor_SMD:C_0805_2012Metric" H 2850 2000 50  0001 C CNN
F 3 "~" H 2850 2000 50  0001 C CNN
	1    2850 2000
	0    1    1    0   
$EndComp
Wire Wire Line
	2950 2000 3100 2000
Connection ~ 3100 2000
$Comp
L Device:R R?
U 1 1 5FE6A814
P 3700 3100
AR Path="/5FE6A814" Ref="R?"  Part="1" 
AR Path="/5FCFF104/5FE6A814" Ref="R?"  Part="1" 
AR Path="/5FE5E004/5FE6A814" Ref="R10"  Part="1" 
F 0 "R10" H 3770 3146 50  0000 L CNN
F 1 "220" H 3770 3055 50  0000 L CNN
F 2 "Capacitor_SMD:C_0805_2012Metric" V 3630 3100 50  0001 C CNN
F 3 "~" H 3700 3100 50  0001 C CNN
	1    3700 3100
	1    0    0    -1  
$EndComp
Wire Wire Line
	3700 2200 3750 2200
$Comp
L power:GND1 #PWR?
U 1 1 5FE6A840
P 3100 2750
AR Path="/5FE6A840" Ref="#PWR?"  Part="1" 
AR Path="/5FCFF104/5FE6A840" Ref="#PWR?"  Part="1" 
AR Path="/5FE5E004/5FE6A840" Ref="#PWR0127"  Part="1" 
F 0 "#PWR0127" H 3100 2500 50  0001 C CNN
F 1 "GND1" H 3105 2577 50  0000 C CNN
F 2 "" H 3100 2750 50  0001 C CNN
F 3 "" H 3100 2750 50  0001 C CNN
	1    3100 2750
	1    0    0    -1  
$EndComp
Wire Wire Line
	3100 2000 3100 2100
$Comp
L power:GND1 #PWR?
U 1 1 5FE6A847
P 3700 3300
AR Path="/5FE6A847" Ref="#PWR?"  Part="1" 
AR Path="/5FCFF104/5FE6A847" Ref="#PWR?"  Part="1" 
AR Path="/5FE5E004/5FE6A847" Ref="#PWR0128"  Part="1" 
F 0 "#PWR0128" H 3700 3050 50  0001 C CNN
F 1 "GND1" H 3705 3127 50  0000 C CNN
F 2 "" H 3700 3300 50  0001 C CNN
F 3 "" H 3700 3300 50  0001 C CNN
	1    3700 3300
	1    0    0    -1  
$EndComp
Wire Wire Line
	3700 3250 3700 3300
Wire Wire Line
	3100 2000 3750 2000
$Comp
L Amplifier_Operational:OPA2156xD U?
U 1 1 5FE6A84F
P 4050 2100
AR Path="/5FE6A84F" Ref="U?"  Part="1" 
AR Path="/5FCFF104/5FE6A84F" Ref="U?"  Part="1" 
AR Path="/5FE5E004/5FE6A84F" Ref="U6"  Part="1" 
F 0 "U6" H 4050 2467 50  0000 C CNN
F 1 "OPA2156xD" H 4050 2376 50  0000 C CNN
F 2 "Package_SO:SOIC-8_3.9x4.9mm_P1.27mm" H 4150 2100 50  0001 C CNN
F 3 "https://www.ti.com/lit/ds/symlink/opa2156.pdf" H 4300 2250 50  0001 C CNN
	1    4050 2100
	1    0    0    -1  
$EndComp
Wire Wire Line
	3100 2400 3100 2750
Wire Wire Line
	4350 2100 4500 2100
Wire Wire Line
	4500 2650 4500 2100
Connection ~ 4500 2100
Wire Wire Line
	4500 2100 5100 2100
Wire Wire Line
	3700 2200 3700 2850
Wire Wire Line
	3950 2850 3700 2850
$Comp
L Device:R_POT RV?
U 1 1 5FE6A86E
P 4100 2850
AR Path="/5FE6A86E" Ref="RV?"  Part="1" 
AR Path="/5FCFF104/5FE6A86E" Ref="RV?"  Part="1" 
AR Path="/5FE5E004/5FE6A86E" Ref="RV1"  Part="1" 
F 0 "RV1" H 4031 2896 50  0000 R CNN
F 1 "R_POT" H 4031 2805 50  0000 R CNN
F 2 "Potentiometer_THT:Potentiometer_Bourns_3296W_Vertical" H 4100 2850 50  0001 C CNN
F 3 "~" H 4100 2850 50  0001 C CNN
	1    4100 2850
	0    -1   -1   0   
$EndComp
Connection ~ 3700 2850
Wire Wire Line
	3700 2850 3700 2950
Wire Wire Line
	4100 2650 4100 2700
Wire Wire Line
	4100 2650 4500 2650
$Comp
L Amplifier_Operational:OPA2156xD U?
U 2 1 5FE6A87E
P 4050 3950
AR Path="/5FE6A87E" Ref="U?"  Part="2" 
AR Path="/5FCFF104/5FE6A87E" Ref="U?"  Part="2" 
AR Path="/5FE5E004/5FE6A87E" Ref="U6"  Part="2" 
F 0 "U6" H 4050 4317 50  0000 C CNN
F 1 "OPA2156xD" H 4050 4226 50  0000 C CNN
F 2 "Package_SO:SOIC-8_3.9x4.9mm_P1.27mm" H 4150 3950 50  0001 C CNN
F 3 "https://www.ti.com/lit/ds/symlink/opa2156.pdf" H 4300 4100 50  0001 C CNN
	2    4050 3950
	1    0    0    -1  
$EndComp
$Comp
L Device:R R?
U 1 1 5FE6A884
P 3100 4100
AR Path="/5FE6A884" Ref="R?"  Part="1" 
AR Path="/5FCFF104/5FE6A884" Ref="R?"  Part="1" 
AR Path="/5FE5E004/5FE6A884" Ref="R9"  Part="1" 
F 0 "R9" H 3170 4146 50  0000 L CNN
F 1 "10k" H 3170 4055 50  0000 L CNN
F 2 "Capacitor_SMD:C_0805_2012Metric" V 3030 4100 50  0001 C CNN
F 3 "~" H 3100 4100 50  0001 C CNN
	1    3100 4100
	1    0    0    -1  
$EndComp
$Comp
L Device:C_Small C?
U 1 1 5FE6A88A
P 2850 3850
AR Path="/5FE6A88A" Ref="C?"  Part="1" 
AR Path="/5FCFF104/5FE6A88A" Ref="C?"  Part="1" 
AR Path="/5FE5E004/5FE6A88A" Ref="C9"  Part="1" 
F 0 "C9" V 2621 3850 50  0000 C CNN
F 1 "1uf" V 2712 3850 50  0000 C CNN
F 2 "Capacitor_SMD:C_0805_2012Metric" H 2850 3850 50  0001 C CNN
F 3 "~" H 2850 3850 50  0001 C CNN
	1    2850 3850
	0    1    1    0   
$EndComp
Wire Wire Line
	2950 3850 3100 3850
Connection ~ 3100 3850
$Comp
L Device:R R?
U 1 1 5FE6A892
P 3700 4950
AR Path="/5FE6A892" Ref="R?"  Part="1" 
AR Path="/5FCFF104/5FE6A892" Ref="R?"  Part="1" 
AR Path="/5FE5E004/5FE6A892" Ref="R11"  Part="1" 
F 0 "R11" H 3770 4996 50  0000 L CNN
F 1 "220" H 3770 4905 50  0000 L CNN
F 2 "Capacitor_SMD:C_0805_2012Metric" V 3630 4950 50  0001 C CNN
F 3 "~" H 3700 4950 50  0001 C CNN
	1    3700 4950
	1    0    0    -1  
$EndComp
Wire Wire Line
	3700 4050 3750 4050
$Comp
L power:GND1 #PWR?
U 1 1 5FE6A899
P 3100 4600
AR Path="/5FE6A899" Ref="#PWR?"  Part="1" 
AR Path="/5FCFF104/5FE6A899" Ref="#PWR?"  Part="1" 
AR Path="/5FE5E004/5FE6A899" Ref="#PWR0130"  Part="1" 
F 0 "#PWR0130" H 3100 4350 50  0001 C CNN
F 1 "GND1" H 3105 4427 50  0000 C CNN
F 2 "" H 3100 4600 50  0001 C CNN
F 3 "" H 3100 4600 50  0001 C CNN
	1    3100 4600
	1    0    0    -1  
$EndComp
Wire Wire Line
	3100 3850 3100 3950
$Comp
L power:GND1 #PWR?
U 1 1 5FE6A8A0
P 3700 5150
AR Path="/5FE6A8A0" Ref="#PWR?"  Part="1" 
AR Path="/5FCFF104/5FE6A8A0" Ref="#PWR?"  Part="1" 
AR Path="/5FE5E004/5FE6A8A0" Ref="#PWR0131"  Part="1" 
F 0 "#PWR0131" H 3700 4900 50  0001 C CNN
F 1 "GND1" H 3705 4977 50  0000 C CNN
F 2 "" H 3700 5150 50  0001 C CNN
F 3 "" H 3700 5150 50  0001 C CNN
	1    3700 5150
	1    0    0    -1  
$EndComp
Wire Wire Line
	3700 5100 3700 5150
Wire Wire Line
	3100 3850 3750 3850
Wire Wire Line
	3100 4250 3100 4600
Wire Wire Line
	4350 3950 4500 3950
Wire Wire Line
	4500 4500 4500 3950
Connection ~ 4500 3950
Wire Wire Line
	4500 3950 5100 3950
Wire Wire Line
	3700 4050 3700 4700
Wire Wire Line
	3950 4700 3700 4700
$Comp
L Device:R_POT RV?
U 1 1 5FE6A8AF
P 4100 4700
AR Path="/5FE6A8AF" Ref="RV?"  Part="1" 
AR Path="/5FCFF104/5FE6A8AF" Ref="RV?"  Part="1" 
AR Path="/5FE5E004/5FE6A8AF" Ref="RV2"  Part="1" 
F 0 "RV2" H 4031 4746 50  0000 R CNN
F 1 "R_POT" H 4031 4655 50  0000 R CNN
F 2 "Potentiometer_THT:Potentiometer_Bourns_3296W_Vertical" H 4100 4700 50  0001 C CNN
F 3 "~" H 4100 4700 50  0001 C CNN
	1    4100 4700
	0    -1   -1   0   
$EndComp
Connection ~ 3700 4700
Wire Wire Line
	3700 4700 3700 4800
Wire Wire Line
	4100 4500 4100 4550
Wire Wire Line
	4100 4500 4500 4500
Wire Wire Line
	2750 2000 2450 2000
Wire Wire Line
	2450 2000 2450 2950
Wire Wire Line
	2450 3850 2750 3850
Wire Wire Line
	2450 2950 2150 2950
Connection ~ 2450 2950
Wire Wire Line
	2450 2950 2450 3850
Text HLabel 2150 2950 0    50   Input ~ 0
SIGNAL_IN
Text HLabel 5100 2100 2    50   Output ~ 0
SIGNAL_OUT1
Text HLabel 5100 3950 2    50   Output ~ 0
SIGNAL_OUT2
$Comp
L Device:C_Small C?
U 1 1 5FA458B6
P 6300 3200
AR Path="/5FA458B6" Ref="C?"  Part="1" 
AR Path="/5FCFF104/5FA458B6" Ref="C?"  Part="1" 
AR Path="/5FE5E004/5FA458B6" Ref="C17"  Part="1" 
F 0 "C17" V 6071 3200 50  0000 C CNN
F 1 "0.1uf" V 6162 3200 50  0000 C CNN
F 2 "Capacitor_SMD:C_0805_2012Metric" H 6300 3200 50  0001 C CNN
F 3 "~" H 6300 3200 50  0001 C CNN
	1    6300 3200
	1    0    0    -1  
$EndComp
$Comp
L Device:C_Small C?
U 1 1 5FA458BC
P 6500 3200
AR Path="/5FA458BC" Ref="C?"  Part="1" 
AR Path="/5FCFF104/5FA458BC" Ref="C?"  Part="1" 
AR Path="/5FE5E004/5FA458BC" Ref="C18"  Part="1" 
F 0 "C18" V 6271 3200 50  0000 C CNN
F 1 "10uf" V 6362 3200 50  0000 C CNN
F 2 "Capacitor_SMD:C_0805_2012Metric" H 6500 3200 50  0001 C CNN
F 3 "~" H 6500 3200 50  0001 C CNN
	1    6500 3200
	-1   0    0    1   
$EndComp
$Comp
L Device:C_Small C?
U 1 1 5FA458C2
P 6850 3200
AR Path="/5FA458C2" Ref="C?"  Part="1" 
AR Path="/5FCFF104/5FA458C2" Ref="C?"  Part="1" 
AR Path="/5FE5E004/5FA458C2" Ref="C19"  Part="1" 
F 0 "C19" V 6621 3200 50  0000 C CNN
F 1 "1uf" V 6712 3200 50  0000 C CNN
F 2 "Capacitor_SMD:C_0805_2012Metric" H 6850 3200 50  0001 C CNN
F 3 "~" H 6850 3200 50  0001 C CNN
	1    6850 3200
	-1   0    0    1   
$EndComp
Wire Wire Line
	5950 3150 6000 3150
Wire Wire Line
	6000 3150 6000 3050
Wire Wire Line
	6000 3050 6300 3050
Wire Wire Line
	6850 3050 6850 3100
Wire Wire Line
	6500 3100 6500 3050
Connection ~ 6500 3050
Wire Wire Line
	6300 3100 6300 3050
Connection ~ 6300 3050
Wire Wire Line
	6300 3050 6500 3050
Wire Wire Line
	5950 3250 6000 3250
Wire Wire Line
	6000 3250 6000 3350
Wire Wire Line
	6000 3350 6300 3350
Wire Wire Line
	6850 3350 6850 3300
Wire Wire Line
	6500 3300 6500 3350
Connection ~ 6500 3350
Wire Wire Line
	6500 3350 6750 3350
Wire Wire Line
	6300 3300 6300 3350
Connection ~ 6300 3350
Wire Wire Line
	6300 3350 6500 3350
$Comp
L Amplifier_Operational:OPA2156xD U?
U 3 1 5FA458DB
P 5400 3150
AR Path="/5FA458DB" Ref="U?"  Part="3" 
AR Path="/5FCFF104/5FA458DB" Ref="U?"  Part="3" 
AR Path="/5FE5E004/5FA458DB" Ref="U6"  Part="3" 
F 0 "U6" H 5458 3196 50  0000 L CNN
F 1 "OPA2156xD" H 5458 3105 50  0000 L CNN
F 2 "Package_SO:SOIC-8_3.9x4.9mm_P1.27mm" H 5500 3150 50  0001 C CNN
F 3 "https://www.ti.com/lit/ds/symlink/opa2156.pdf" H 5650 3300 50  0001 C CNN
	3    5400 3150
	1    0    0    -1  
$EndComp
Wire Wire Line
	5950 3150 5950 2850
Wire Wire Line
	5950 2850 5400 2850
Wire Wire Line
	5950 3250 5950 3450
Wire Wire Line
	5950 3450 5400 3450
Text GLabel 6750 2950 1    50   Input ~ 0
Vio
Wire Wire Line
	6750 2950 6750 3050
Connection ~ 6750 3050
Wire Wire Line
	6750 3050 6850 3050
Wire Wire Line
	6500 3050 6750 3050
Wire Wire Line
	6750 3400 6750 3350
Connection ~ 6750 3350
Wire Wire Line
	6750 3350 6850 3350
$Comp
L power:GND #PWR?
U 1 1 5FA458ED
P 6750 3400
AR Path="/5FA458ED" Ref="#PWR?"  Part="1" 
AR Path="/5FCFF104/5FA458ED" Ref="#PWR?"  Part="1" 
AR Path="/5FE5E004/5FA458ED" Ref="#PWR0137"  Part="1" 
F 0 "#PWR0137" H 6750 3150 50  0001 C CNN
F 1 "GND" H 6755 3227 50  0000 C CNN
F 2 "" H 6750 3400 50  0001 C CNN
F 3 "" H 6750 3400 50  0001 C CNN
	1    6750 3400
	1    0    0    -1  
$EndComp
$EndSCHEMATC
