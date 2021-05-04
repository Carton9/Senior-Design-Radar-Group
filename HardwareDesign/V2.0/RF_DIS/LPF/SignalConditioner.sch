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
Wire Wire Line
	4250 3650 4100 3650
Connection ~ 4250 3650
Wire Wire Line
	4250 3650 4250 3550
$Comp
L Connector:TestPoint TP2
U 1 1 5FB227BC
P 4250 3550
F 0 "TP2" H 4308 3668 50  0000 L CNN
F 1 "TestPoint" H 4308 3577 50  0000 L CNN
F 2 "TestPoint:TestPoint_Pad_1.5x1.5mm" H 4450 3550 50  0001 C CNN
F 3 "~" H 4450 3550 50  0001 C CNN
	1    4250 3550
	1    0    0    -1  
$EndComp
Connection ~ 4100 3650
Wire Wire Line
	4550 3650 4250 3650
Connection ~ 4250 2900
Wire Wire Line
	4500 2900 4250 2900
Text HLabel 2550 2450 0    50   Input ~ 0
Signal_IN
Text HLabel 4500 2900 2    50   Output ~ 0
Signal_OUT
Text HLabel 4550 3650 2    50   Output ~ 0
Reference
Wire Wire Line
	3050 3900 3050 4000
$Comp
L power:GND #PWR0105
U 1 1 5FB161B4
P 3050 4000
F 0 "#PWR0105" H 3050 3750 50  0001 C CNN
F 1 "GND" H 3055 3827 50  0000 C CNN
F 2 "" H 3050 4000 50  0001 C CNN
F 3 "" H 3050 4000 50  0001 C CNN
	1    3050 4000
	1    0    0    -1  
$EndComp
Wire Wire Line
	3050 3500 3050 3600
Text GLabel 3050 3500 1    50   Input ~ 0
Vio
Wire Wire Line
	2300 3650 2300 3750
Wire Wire Line
	2300 2950 2300 3050
Text GLabel 2300 2950 1    50   Input ~ 0
Vio
$Comp
L power:GND #PWR0106
U 1 1 5FB12677
P 2300 3750
F 0 "#PWR0106" H 2300 3500 50  0001 C CNN
F 1 "GND" H 2305 3577 50  0000 C CNN
F 2 "" H 2300 3750 50  0001 C CNN
F 3 "" H 2300 3750 50  0001 C CNN
	1    2300 3750
	1    0    0    -1  
$EndComp
Connection ~ 3250 3400
Wire Wire Line
	3250 3000 3250 3400
Wire Wire Line
	3250 3000 3350 3000
Wire Wire Line
	4000 2900 4250 2900
Wire Wire Line
	4250 2900 4250 2800
$Comp
L Connector:TestPoint TP1
U 1 1 5FB11C6F
P 4250 2800
F 0 "TP1" H 4308 2918 50  0000 L CNN
F 1 "TestPoint" H 4308 2827 50  0000 L CNN
F 2 "TestPoint:TestPoint_Pad_1.5x1.5mm" H 4450 2800 50  0001 C CNN
F 3 "~" H 4450 2800 50  0001 C CNN
	1    4250 2800
	1    0    0    -1  
$EndComp
Wire Wire Line
	4100 3400 4100 3650
Wire Wire Line
	3250 3400 4100 3400
Wire Wire Line
	3250 3550 3250 3400
Wire Wire Line
	3350 3550 3250 3550
$Comp
L Device:R_POT RV1
U 1 1 5FB0233A
P 3050 3750
F 0 "RV1" H 2981 3796 50  0000 R CNN
F 1 "R_POT" H 2981 3705 50  0000 R CNN
F 2 "Potentiometer_THT:Potentiometer_Bourns_3296W_Vertical" H 3050 3750 50  0001 C CNN
F 3 "~" H 3050 3750 50  0001 C CNN
	1    3050 3750
	1    0    0    -1  
$EndComp
$Comp
L Amplifier_Operational:OPA2156xD U?
U 2 1 5FAFB2D9
P 3650 2900
AR Path="/5FD12120/5FAFB2D9" Ref="U?"  Part="2" 
AR Path="/5FAD9E7D/5FAFB2D9" Ref="U?"  Part="2" 
AR Path="/602F3628/5FAFB2D9" Ref="U1"  Part="2" 
F 0 "U1" H 3650 3267 50  0000 C CNN
F 1 "OPA2156xD" H 3650 3176 50  0000 C CNN
F 2 "Package_SO:SOIC-8_3.9x4.9mm_P1.27mm" H 3750 2900 50  0001 C CNN
F 3 "https://www.ti.com/lit/ds/symlink/opa2156.pdf" H 3900 3050 50  0001 C CNN
	2    3650 2900
	1    0    0    1   
$EndComp
Wire Wire Line
	3200 2600 3200 2800
Wire Wire Line
	3200 2800 3350 2800
$Comp
L Device:R_POT RV3
U 1 1 5FB00295
P 3200 2450
F 0 "RV3" H 3131 2496 50  0000 R CNN
F 1 "R_POT" H 3131 2405 50  0000 R CNN
F 2 "Potentiometer_THT:Potentiometer_Bourns_3296W_Vertical" H 3200 2450 50  0001 C CNN
F 3 "~" H 3200 2450 50  0001 C CNN
	1    3200 2450
	0    1    1    0   
$EndComp
Wire Wire Line
	3350 2450 4000 2450
Wire Wire Line
	4000 2450 4000 2900
Wire Wire Line
	4000 2900 3950 2900
Wire Wire Line
	2550 2450 3050 2450
Connection ~ 4000 2900
$Comp
L Amplifier_Operational:OPA2156xD U?
U 1 1 5FAFB2D3
P 3650 3650
AR Path="/5FD12120/5FAFB2D3" Ref="U?"  Part="1" 
AR Path="/5FAD9E7D/5FAFB2D3" Ref="U?"  Part="1" 
AR Path="/602F3628/5FAFB2D3" Ref="U1"  Part="1" 
F 0 "U1" H 3650 4017 50  0000 C CNN
F 1 "OPA2156xD" H 3650 3926 50  0000 C CNN
F 2 "Package_SO:SOIC-8_3.9x4.9mm_P1.27mm" H 3750 3650 50  0001 C CNN
F 3 "https://www.ti.com/lit/ds/symlink/opa2156.pdf" H 3900 3800 50  0001 C CNN
	1    3650 3650
	1    0    0    1   
$EndComp
Wire Wire Line
	3950 3650 4100 3650
Wire Wire Line
	3200 3750 3350 3750
$Comp
L Amplifier_Operational:OPA2156xD U?
U 3 1 5FAFB2DF
P 2300 3350
AR Path="/5FAFB2DF" Ref="U?"  Part="3" 
AR Path="/5FCFF104/5FAFB2DF" Ref="U?"  Part="3" 
AR Path="/5FE5E004/5FAFB2DF" Ref="U?"  Part="3" 
AR Path="/5FD12120/5FAFB2DF" Ref="U?"  Part="3" 
AR Path="/5FAD9E7D/5FAFB2DF" Ref="U?"  Part="3" 
AR Path="/602F3628/5FAFB2DF" Ref="U1"  Part="3" 
F 0 "U1" H 2358 3396 50  0000 L CNN
F 1 "OPA2156xD" H 2358 3305 50  0000 L CNN
F 2 "Package_SO:SOIC-8_3.9x4.9mm_P1.27mm" H 2400 3350 50  0001 C CNN
F 3 "https://www.ti.com/lit/ds/symlink/opa2156.pdf" H 2550 3500 50  0001 C CNN
	3    2300 3350
	1    0    0    -1  
$EndComp
$EndSCHEMATC
