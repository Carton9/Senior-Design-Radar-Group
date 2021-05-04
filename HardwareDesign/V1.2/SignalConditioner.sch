EESchema Schematic File Version 4
EELAYER 30 0
EELAYER END
$Descr A4 11693 8268
encoding utf-8
Sheet 3 3
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
L Amplifier_Operational:OPA2156xD U?
U 3 1 5FAFB2DF
P 2650 3250
AR Path="/5FAFB2DF" Ref="U?"  Part="3" 
AR Path="/5FCFF104/5FAFB2DF" Ref="U?"  Part="3" 
AR Path="/5FE5E004/5FAFB2DF" Ref="U?"  Part="3" 
AR Path="/5FD12120/5FAFB2DF" Ref="U?"  Part="3" 
AR Path="/5FAD9E7D/5FAFB2DF" Ref="U?"  Part="3" 
F 0 "U?" H 2708 3296 50  0000 L CNN
F 1 "OPA2156xD" H 2708 3205 50  0000 L CNN
F 2 "Package_SO:SOIC-8_3.9x4.9mm_P1.27mm" H 2750 3250 50  0001 C CNN
F 3 "https://www.ti.com/lit/ds/symlink/opa2156.pdf" H 2900 3400 50  0001 C CNN
	3    2650 3250
	1    0    0    -1  
$EndComp
Wire Wire Line
	3550 3650 3700 3650
Wire Wire Line
	4300 3550 4450 3550
$Comp
L Amplifier_Operational:OPA2156xD U?
U 1 1 5FAFB2D3
P 4000 3550
AR Path="/5FD12120/5FAFB2D3" Ref="U?"  Part="1" 
AR Path="/5FAD9E7D/5FAFB2D3" Ref="U?"  Part="1" 
F 0 "U?" H 4000 3917 50  0000 C CNN
F 1 "OPA2156xD" H 4000 3826 50  0000 C CNN
F 2 "Package_SO:SOIC-8_3.9x4.9mm_P1.27mm" H 4100 3550 50  0001 C CNN
F 3 "https://www.ti.com/lit/ds/symlink/opa2156.pdf" H 4250 3700 50  0001 C CNN
	1    4000 3550
	1    0    0    1   
$EndComp
Connection ~ 4350 2800
Wire Wire Line
	2900 2350 3400 2350
Wire Wire Line
	4350 2800 4300 2800
Wire Wire Line
	4350 2350 4350 2800
Wire Wire Line
	3700 2350 4350 2350
$Comp
L Device:R_POT RV?
U 1 1 5FB00295
P 3550 2350
F 0 "RV?" H 3481 2396 50  0000 R CNN
F 1 "R_POT" H 3481 2305 50  0000 R CNN
F 2 "" H 3550 2350 50  0001 C CNN
F 3 "~" H 3550 2350 50  0001 C CNN
	1    3550 2350
	0    1    1    0   
$EndComp
Wire Wire Line
	3550 2700 3700 2700
Wire Wire Line
	3550 2500 3550 2700
$Comp
L Amplifier_Operational:OPA2156xD U?
U 2 1 5FAFB2D9
P 4000 2800
AR Path="/5FD12120/5FAFB2D9" Ref="U?"  Part="2" 
AR Path="/5FAD9E7D/5FAFB2D9" Ref="U?"  Part="2" 
F 0 "U?" H 4000 3167 50  0000 C CNN
F 1 "OPA2156xD" H 4000 3076 50  0000 C CNN
F 2 "Package_SO:SOIC-8_3.9x4.9mm_P1.27mm" H 4100 2800 50  0001 C CNN
F 3 "https://www.ti.com/lit/ds/symlink/opa2156.pdf" H 4250 2950 50  0001 C CNN
	2    4000 2800
	1    0    0    1   
$EndComp
$Comp
L Device:R_POT RV?
U 1 1 5FB0233A
P 3400 3650
F 0 "RV?" H 3331 3696 50  0000 R CNN
F 1 "R_POT" H 3331 3605 50  0000 R CNN
F 2 "" H 3400 3650 50  0001 C CNN
F 3 "~" H 3400 3650 50  0001 C CNN
	1    3400 3650
	1    0    0    -1  
$EndComp
Wire Wire Line
	3700 3450 3600 3450
Wire Wire Line
	3600 3450 3600 3300
Wire Wire Line
	3600 3300 4450 3300
Wire Wire Line
	4450 3300 4450 3550
$Comp
L Connector:TestPoint TP?
U 1 1 5FB11C6F
P 4600 2700
F 0 "TP?" H 4658 2818 50  0000 L CNN
F 1 "TestPoint" H 4658 2727 50  0000 L CNN
F 2 "" H 4800 2700 50  0001 C CNN
F 3 "~" H 4800 2700 50  0001 C CNN
	1    4600 2700
	1    0    0    -1  
$EndComp
Wire Wire Line
	4600 2800 4600 2700
Wire Wire Line
	4350 2800 4600 2800
Wire Wire Line
	3600 2900 3700 2900
Wire Wire Line
	3600 2900 3600 3300
Connection ~ 3600 3300
$Comp
L power:GND #PWR?
U 1 1 5FB12677
P 2650 3650
F 0 "#PWR?" H 2650 3400 50  0001 C CNN
F 1 "GND" H 2655 3477 50  0000 C CNN
F 2 "" H 2650 3650 50  0001 C CNN
F 3 "" H 2650 3650 50  0001 C CNN
	1    2650 3650
	1    0    0    -1  
$EndComp
Text GLabel 2650 2850 1    50   Input ~ 0
Vio
Wire Wire Line
	2650 2850 2650 2950
Wire Wire Line
	2650 3550 2650 3650
Text GLabel 3400 3400 1    50   Input ~ 0
Vio
Wire Wire Line
	3400 3400 3400 3500
$Comp
L power:GND #PWR?
U 1 1 5FB161B4
P 3400 3900
F 0 "#PWR?" H 3400 3650 50  0001 C CNN
F 1 "GND" H 3405 3727 50  0000 C CNN
F 2 "" H 3400 3900 50  0001 C CNN
F 3 "" H 3400 3900 50  0001 C CNN
	1    3400 3900
	1    0    0    -1  
$EndComp
Wire Wire Line
	3400 3800 3400 3900
Text HLabel 4900 3550 2    50   Output ~ 0
Reference
Text HLabel 4850 2800 2    50   Output ~ 0
Signal_OUT
Text HLabel 2900 2350 0    50   Input ~ 0
Signal_IN
Wire Wire Line
	4850 2800 4600 2800
Connection ~ 4600 2800
Wire Wire Line
	4900 3550 4600 3550
Connection ~ 4450 3550
$Comp
L Connector:TestPoint TP?
U 1 1 5FB227BC
P 4600 3450
F 0 "TP?" H 4658 3568 50  0000 L CNN
F 1 "TestPoint" H 4658 3477 50  0000 L CNN
F 2 "" H 4800 3450 50  0001 C CNN
F 3 "~" H 4800 3450 50  0001 C CNN
	1    4600 3450
	1    0    0    -1  
$EndComp
Wire Wire Line
	4600 3550 4600 3450
Connection ~ 4600 3550
Wire Wire Line
	4600 3550 4450 3550
$EndSCHEMATC
