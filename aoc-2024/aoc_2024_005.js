const input = `99|31
26|21
26|69
69|35
69|75
69|95
59|58
59|73
59|87
59|94
82|72
82|99
82|62
82|91
82|49
65|73
65|86
65|59
65|69
65|37
65|11
49|71
49|69
49|66
49|16
49|31
49|29
49|13
18|37
18|27
18|86
18|57
18|17
18|14
18|91
18|12
72|37
72|66
72|39
72|49
72|21
72|11
72|31
72|59
72|16
67|81
67|12
67|82
67|35
67|99
67|53
67|76
67|72
67|37
67|27
11|81
11|35
11|94
11|97
11|39
11|24
11|15
11|75
11|67
11|82
11|17
16|82
16|95
16|45
16|17
16|67
16|46
16|18
16|85
16|94
16|39
16|91
16|15
35|49
35|57
35|45
35|78
35|36
35|91
35|59
35|12
35|37
35|86
35|72
35|62
35|99
87|71
87|73
87|95
87|58
87|81
87|94
87|46
87|97
87|67
87|21
87|35
87|24
87|11
87|18
53|13
53|78
53|58
53|54
53|16
53|93
53|73
53|21
53|11
53|94
53|49
53|59
53|66
53|97
53|39
46|24
46|18
46|36
46|95
46|27
46|67
46|85
46|94
46|71
46|54
46|81
46|35
46|29
46|17
46|57
46|62
29|36
29|62
29|27
29|53
29|17
29|65
29|82
29|57
29|85
29|37
29|99
29|45
29|12
29|86
29|59
29|26
29|35
85|65
85|62
85|59
85|77
85|91
85|69
85|31
85|57
85|17
85|14
85|78
85|72
85|49
85|53
85|99
85|86
85|27
85|36
78|24
78|21
78|39
78|81
78|97
78|69
78|77
78|87
78|66
78|31
78|29
78|15
78|75
78|93
78|94
78|54
78|71
78|46
78|95
17|72
17|99
17|76
17|69
17|59
17|49
17|26
17|66
17|86
17|65
17|13
17|77
17|78
17|12
17|27
17|62
17|14
17|91
17|53
17|87
37|31
37|21
37|11
37|75
37|53
37|39
37|95
37|54
37|46
37|73
37|66
37|59
37|24
37|78
37|58
37|69
37|15
37|49
37|16
37|77
37|94
91|78
91|86
91|27
91|77
91|36
91|59
91|57
91|13
91|62
91|14
91|66
91|76
91|37
91|21
91|49
91|69
91|31
91|26
91|72
91|12
91|99
91|65
66|46
66|18
66|21
66|82
66|15
66|58
66|73
66|95
66|67
66|97
66|24
66|39
66|45
66|11
66|94
66|71
66|93
66|54
66|85
66|16
66|75
66|29
66|35
57|69
57|21
57|66
57|99
57|72
57|59
57|13
57|65
57|12
57|26
57|31
57|16
57|75
57|87
57|53
57|76
57|11
57|37
57|49
57|73
57|86
57|77
57|14
57|78
36|14
36|49
36|57
36|72
36|87
36|16
36|99
36|65
36|59
36|12
36|37
36|21
36|11
36|31
36|75
36|69
36|86
36|13
36|66
36|26
36|53
36|78
36|77
36|76
93|72
93|91
93|71
93|12
93|17
93|37
93|86
93|27
93|29
93|36
93|14
93|45
93|57
93|81
93|26
93|65
93|82
93|18
93|67
93|85
93|35
93|99
93|76
93|62
14|75
14|73
14|16
14|69
14|37
14|72
14|77
14|95
14|15
14|46
14|26
14|31
14|99
14|49
14|78
14|21
14|66
14|87
14|12
14|59
14|53
14|58
14|13
14|11
73|95
73|58
73|81
73|67
73|46
73|24
73|27
73|18
73|91
73|15
73|71
73|39
73|62
73|85
73|45
73|17
73|82
73|29
73|35
73|97
73|36
73|54
73|93
73|94
94|86
94|45
94|17
94|36
94|57
94|67
94|72
94|35
94|91
94|81
94|27
94|14
94|71
94|85
94|54
94|93
94|82
94|65
94|76
94|18
94|62
94|26
94|29
94|24
15|62
15|45
15|54
15|57
15|94
15|85
15|35
15|39
15|67
15|18
15|76
15|65
15|71
15|81
15|93
15|36
15|82
15|27
15|17
15|29
15|24
15|86
15|97
15|91
24|86
24|54
24|12
24|71
24|82
24|72
24|85
24|17
24|76
24|18
24|57
24|14
24|93
24|91
24|27
24|45
24|81
24|65
24|29
24|26
24|62
24|67
24|36
24|35
12|69
12|31
12|58
12|75
12|49
12|13
12|53
12|59
12|11
12|46
12|78
12|97
12|21
12|99
12|95
12|16
12|94
12|66
12|87
12|37
12|15
12|77
12|39
12|73
58|54
58|81
58|94
58|45
58|36
58|18
58|82
58|15
58|17
58|62
58|57
58|95
58|93
58|24
58|35
58|97
58|71
58|67
58|85
58|29
58|65
58|39
58|91
58|27
95|81
95|85
95|29
95|93
95|71
95|76
95|15
95|27
95|91
95|97
95|57
95|62
95|65
95|24
95|35
95|18
95|94
95|39
95|45
95|36
95|82
95|67
95|17
95|54
54|17
54|86
54|99
54|67
54|26
54|35
54|81
54|76
54|18
54|27
54|91
54|85
54|36
54|65
54|57
54|14
54|71
54|45
54|12
54|72
54|93
54|82
54|62
54|29
31|67
31|81
31|29
31|16
31|21
31|46
31|54
31|75
31|24
31|93
31|71
31|73
31|95
31|87
31|58
31|15
31|39
31|82
31|66
31|35
31|97
31|69
31|11
31|94
75|91
75|85
75|93
75|97
75|24
75|17
75|46
75|35
75|29
75|39
75|18
75|95
75|54
75|27
75|62
75|15
75|73
75|67
75|94
75|81
75|45
75|58
75|71
75|82
39|14
39|45
39|94
39|57
39|27
39|54
39|81
39|85
39|86
39|35
39|36
39|76
39|91
39|71
39|93
39|17
39|97
39|65
39|67
39|29
39|62
39|18
39|82
39|24
86|11
86|53
86|77
86|12
86|26
86|95
86|75
86|46
86|58
86|73
86|37
86|72
86|21
86|13
86|16
86|99
86|87
86|31
86|69
86|49
86|66
86|78
86|59
86|14
62|65
62|13
62|72
62|69
62|59
62|21
62|66
62|77
62|12
62|36
62|53
62|86
62|76
62|26
62|37
62|16
62|11
62|99
62|14
62|57
62|87
62|49
62|78
62|31
76|12
76|59
76|49
76|87
76|14
76|72
76|11
76|73
76|66
76|69
76|86
76|77
76|13
76|99
76|21
76|46
76|31
76|78
76|26
76|75
76|58
76|37
76|53
76|16
81|36
81|82
81|45
81|37
81|85
81|72
81|49
81|76
81|26
81|99
81|35
81|86
81|14
81|62
81|13
81|59
81|12
81|27
81|65
81|53
81|91
81|57
81|18
81|17
21|45
21|29
21|94
21|17
21|71
21|24
21|82
21|93
21|67
21|97
21|11
21|75
21|85
21|95
21|54
21|58
21|46
21|39
21|35
21|81
21|73
21|16
21|15
21|18
27|57
27|66
27|59
27|21
27|87
27|62
27|69
27|76
27|65
27|14
27|36
27|77
27|11
27|53
27|72
27|86
27|13
27|78
27|37
27|12
27|31
27|99
27|26
27|49
45|36
45|99
45|14
45|12
45|77
45|65
45|85
45|31
45|69
45|72
45|27
45|78
45|17
45|86
45|26
45|49
45|57
45|76
45|37
45|53
45|59
45|62
45|13
45|91
13|58
13|46
13|73
13|78
13|66
13|21
13|29
13|95
13|31
13|93
13|16
13|11
13|94
13|77
13|67
13|39
13|71
13|54
13|24
13|69
13|97
13|75
13|87
13|15
77|46
77|71
77|93
77|15
77|73
77|67
77|54
77|95
77|11
77|87
77|82
77|69
77|81
77|24
77|21
77|94
77|29
77|31
77|66
77|75
77|97
77|58
77|39
77|16
71|45
71|76
71|67
71|65
71|14
71|57
71|29
71|37
71|35
71|99
71|82
71|72
71|53
71|12
71|27
71|81
71|86
71|18
71|85
71|36
71|17
71|91
71|62
71|26
97|81
97|27
97|67
97|14
97|94
97|36
97|62
97|71
97|57
97|35
97|54
97|82
97|45
97|65
97|91
97|86
97|24
97|76
97|72
97|17
97|85
97|93
97|29
97|18
99|87
99|37
99|75
99|49
99|95
99|39
99|66
99|21
99|53
99|77
99|24
99|69
99|16
99|78
99|46
99|59
99|97
99|58
99|94
99|15
99|13
99|73
99|11
26|97
26|59
26|13
26|66
26|58
26|78
26|77
26|73
26|53
26|15
26|11
26|39
26|49
26|37
26|46
26|87
26|99
26|12
26|16
26|75
26|95
26|31
69|93
69|29
69|81
69|94
69|82
69|58
69|71
69|21
69|39
69|11
69|46
69|16
69|15
69|24
69|97
69|73
69|54
69|66
69|18
69|87
69|67
59|77
59|69
59|66
59|78
59|16
59|93
59|46
59|95
59|15
59|24
59|13
59|49
59|11
59|21
59|75
59|31
59|54
59|97
59|39
59|71
82|12
82|26
82|76
82|18
82|85
82|35
82|59
82|86
82|45
82|36
82|17
82|53
82|27
82|57
82|78
82|37
82|14
82|13
82|65
65|75
65|31
65|46
65|26
65|21
65|13
65|78
65|77
65|12
65|66
65|76
65|53
65|72
65|49
65|14
65|99
65|87
65|16
49|11
49|94
49|93
49|54
49|46
49|78
49|95
49|73
49|15
49|58
49|24
49|77
49|75
49|87
49|39
49|97
49|21
18|31
18|72
18|49
18|99
18|45
18|77
18|53
18|78
18|26
18|85
18|13
18|76
18|59
18|62
18|65
18|36
72|75
72|73
72|53
72|78
72|13
72|69
72|87
72|12
72|15
72|99
72|77
72|26
72|46
72|95
72|58
67|14
67|17
67|45
67|65
67|49
67|36
67|62
67|18
67|59
67|85
67|91
67|26
67|57
67|86
11|73
11|16
11|46
11|95
11|54
11|85
11|58
11|71
11|29
11|18
11|45
11|93
11|91
16|93
16|29
16|97
16|73
16|54
16|27
16|58
16|24
16|75
16|81
16|71
16|35
35|17
35|14
35|18
35|27
35|26
35|53
35|85
35|77
35|13
35|65
35|76
87|66
87|15
87|39
87|45
87|82
87|16
87|54
87|29
87|75
87|93
53|95
53|77
53|24
53|69
53|87
53|75
53|46
53|15
53|31
46|15
46|45
46|93
46|97
46|58
46|39
46|91
46|82
29|72
29|67
29|18
29|14
29|76
29|81
29|91
85|26
85|87
85|37
85|13
85|12
85|76
78|16
78|67
78|11
78|73
78|58
17|37
17|36
17|31
17|57
37|13
37|97
37|87
91|53
91|87
66|81

75,94,71,16,31,95,11,73,97,77,81
17,91,62,86,14,26,12,99,37,59,49,13,77
62,36,12,37,49,78,77,31,87,21,11
59,13,31,16,75,58,95,15,39,24,54
95,15,39,97,94,24,54,93,67,81,82,35,18,45,85,17,91,27,62,36,65
36,53,67,14,62,26,99,35,81,65,29,82,76,17,57,27,37,18,72,86,91
46,15,39,71,81,82,35,45,85,91,36
16,91,15,29,46,17,67
49,77,31,46,53,58,73,95,75,78,99,21,15,13,59
73,46,95,15,97,54,71,81,45,85,62
14,72,26,12,99,59,49,78,77,31,69,87,21,11,16,75,95
54,93,71,29,67,81,82,35,18,85,17,91,62,36,57,65,76,86,14,72,26
93,85,67,57,36,72,35,65,45,18,76,24,86,82,94,29,54,14,17,62,71
13,78,77,31,69,87,66,21,11,16,73,46,58,15,39,97,94,24,54,71,29
53,75,31,49,73,14,77,11,21,26,76,72,86,87,46,13,16,78,69,37,12,99,66
87,66,11,16,75,46,58,95,15,97,94,24,54,93,29,67,82,35,18
99,53,31,16,37,58,12,66,46,49,87,75,59,26,39,73,13
17,91,27,62,36,57,76,86,14,72,26,12,99,37,53,59,13,78,77,31,69
13,78,77,31,21,11,16,75,73,46,58,15,39,97,24,54,93,71,29
94,54,93,29,81,45,85,62,57,65,76,14,72
93,81,82,45,17,27,62,36,57,76,86,14,72,26,99
24,93,71,35,45,17,62,36,76
14,66,87,73,75,46,26,99,21,72,77,12,53,49,59,37,69,16,11,86,78
65,76,86,72,99,53,13,77,69,21,11,75,73
59,45,62,27,36,72,78,18,85,65,12,99,76,77,14
65,14,26,37,53,13,87,75,73
53,59,13,78,77,31,87,66,21,11,75,73,46,58,95,15,97,94,54
21,75,58,24,71,35,85
37,76,18,26,57,14,12,45,27,53,99,17,86,35,62,29,67,85,91
76,45,26,57,77,85,36,17,13,59,53,27,62
87,11,16,73,46,15,97,54,82,35,18
13,78,77,31,69,87,66,21,16,75,73,46,15,39,97,94,24,71,29
29,93,71,58,11,16,21,94,54,75,97,81,67,15,87,18,35,73,39,82,24,66,95
36,17,29,71,27,62,45,81,18,91,54
31,69,21,16,73,24,93
97,66,54,71,15,29,24,45,75,67,94
75,73,58,94,18
75,58,15,97,54,93,71,82,35,18,27
85,26,17,93,86,81,72,45,12,14,76,36,65,27,91,35,67,71,57,18,62,82,29
24,54,93,71,29,67,81,82,18,45,85,17,91,27,62,36,57,65,76,86,14,72,26
54,24,97,85,93,17,29,45,58,35,75,27,73,46,39,71,15,91,67,82,81,94,95
12,13,69,77,11,72,86,53,78,62,26,66,14,49,59,57,99
15,39,97,94,24,54,93,71,29,67,81,35,18,45,85,17,91,27,62,36,57,65,76
16,75,73,46,58,39,97,94,24,54,93,71,29,67,81,82,35,18,45,17,91
81,82,35,18,45,85,17,91,27,36,57,65,76,26,99,37,53
37,11,87,14,99,59,69,57,77,76,13,86,31,72,49,78,12,16,65,66,26,53,21
58,95,15,39,94,24,54,93,71,29,67,81,82,35,18,45,85,17,91,27,62,36,57
81,16,73,39,21,15,46
69,87,66,11,75,95,15,94,54,93,81,82,35
12,36,53,76,14,59,77,72,69,27,31,65,91,85,13,86,99
14,72,26,12,99,37,53,59,49,13,31,69,87,66,21,11,16,75,73,58,95
24,45,39,97,85,15,75,17,73,95,46,71,11,93,94,29,82,35,16
86,14,72,26,12,99,37,53,59,49,13,78,31,69,87,66,21,11,75,46,58
78,77,66,11,16,75,73,46,58,95,15,97,24,54,93,29,67
12,37,53,13,77,69,87,21,11,46,58,15,97
17,91,27,62,36,57,65,76,86,14,26,12,99,37,53,59,49,78,31,69,87
31,66,58,15,24,67,82
45,85,62,14,72,12,99,37,53,59,49,13,78
69,78,24,73,31,58,67,11,94,71,54,75,93,66,21,87,97,16,15,39,29,95,77
78,65,14,27,66,21,76,31,57,26,13,37,99,53,12,36,72,59,49,62,86
39,97,94,24,54,93,71,29,81,82,35,18,45,85,17,91,27,62,36,57,65,76,86
93,29,18,82,73,24,81,11,16
12,37,53,49,13,78,31,66,21,73,58,95,97
97,35,15,11,58,16,21,75,39,29,54,45,18,46,85,94,73
73,95,15,97,24,54,93,29,82,35,45,17,91,27,62
15,95,53,99,37,73,87,59,66,12,97
18,45,85,27,36,65,76,86,14,72,26,99,37,59,77
97,87,49,75,11,13,54,15,73,78,31,53,21
53,77,21,46,16,13,87,58,26,37,31,99,49,78,12,95,11,72,73,59,66,15,69
53,66,75,46,97,24,54
73,16,31,24,21,97,95,87,13,58,54,11,75,39,69,94,77,49,66,15,46
66,15,93,82,35,18,45
78,26,73,37,59,49,99,31,39,46,58,15,21,69,12,87,11,16,77
91,76,62,67,35,36,27,17,81,86,57,24,29,97,71,45,39,54,94,18,65
15,59,72,53,77,99,69,21,16
35,54,94,27,82,46,67,24,15
82,91,29,14,76,24,36,35,26,57,17,93,54,67,85,65,18,27,45,72,71,81,62
71,87,15,29,95,39,16,75,24,11,13,73,31,46,21,58,69,77,94,66,54,78,93
46,78,37,49,53,26,69,73,99,31,13,11,77,58,12,87,16
76,86,14,72,26,12,99,59,49,78,77,31,69,87,66,21,11,16,75,73,46
97,24,93,29,67,35,18,45,85,17,91,62,36,57,65,86,14
39,97,54,71,29,67,82,35,18,45,85,17,57
72,86,76,31,87,46,59,66,11,53,16,21,73,37,26,69,78
71,45,91,27,57,99,37
59,49,31,21,73,58,95,97,93
21,11,16,46,97,94,71,67,35,45,85
29,24,75,35,11,45,95,66,97,21,73,16,82,58,67
17,36,31,91,14,57,59,53,87,65,77,49,99,62,26
67,94,45,58,11,17,81,39,71
75,53,97,49,69,39,21,58,37,12,87,15,77
77,93,58,75,66,73,46,15,81
37,53,59,49,13,77,31,69,87,66,21,11,16,75,73,46,58,95,15,39,97,94,24
87,66,21,11,16,75,73,46,58,15,39,97,94,24,54,93,71,29,67,81,82,35,18
62,26,91,45,35,82,67
45,82,35,29,58,73,95,93,16,91,15,85,94,75,67,18,46,71,17
54,91,94,71,18,45,17,82,67,24,27,81,36,14,35,57,93,76,62,29,85,65,86
29,67,35,18,45,91,76,86,12,37,53
71,24,15,16,18,46,97,29,39,54,35,21,67,45,82,75,58,94,93,81,11,73,85
45,24,82,27,17,67,71,62,18,26,35,72,54,81,76,57,29
67,81,35,85,17,27,62,57,65,76,12
15,91,57,97,24,27,81,85,94,65,95,17,82
67,45,35,46,15,16,82,71,85,17,18,94,58,54,91
46,58,95,15,94,24,54,71,29,35,18,45,17,91,27,62,36
31,65,59,69,26,76,12,77,17,91,86,57,37,85,13
65,86,35,78,27,85,59,99,76,91,14
36,57,76,72,53,49,13,31,69,87,66,21,16
75,93,91,95,46,94,16,24,54,67,35,39,58,85,45,73,18,82,97,29,71,81,17
26,12,59,13,69,16,46
24,93,59,94,49,31,66
94,24,54,93,71,29,67,81,35,18,45,85,17,91,27,62,36,57,65,76,86,14,72
14,72,37,59,13,78,77,69,11,16,46,58,95
86,69,66,78,21,49,87,27,76,37,36,72,65,57,26
72,26,16,73,46,95,15
97,91,54,17,35,82,62,18,58,94,57,39,95,29,93
45,62,36,57,37
54,78,69,75,58,46,21,24,53
53,62,57,13,17,14,65,49,12,36,86,18,26,59,76,91,77,45,78
37,53,59,78,77,31,87,16,75,73,15,39,97,94,24
94,24,54,93,67,17,27,36,14
73,46,58,97,54,29,35
91,62,65,72,12,37,69
58,69,59,16,78,77,12,73,37,97,13,87,39,21,99,11,75
62,36,65,86,12,99,37,53,31,87,21
15,97,24,54,93,71,29,81,82,35,18,45,85,17,27,36,57,65,76
76,86,14,26,12,99,37,59,49,78,77,31,69,66,21,11,16,73,46
49,13,78,69,66,11,16,46,58,97,94,93,71
24,54,73,91,58,15,97,29,17,62,95,93,82,67,81,85,46
73,46,58,95,15,39,24,54,29,67,81,35,18,45,17,27,62
91,27,36,12,37,49,78,31,66
95,66,15,75,78,99,58,26,39,77,16,46,11
67,82,35,45,85,17,62,65,76,86,14,72,37,53,59
35,18,45,85,17,91,27,36,57,76,86,72,26,12,99,37,53,49,13
82,35,18,45,85,17,91,27,62,36,57,65,76,86,14,72,12,99,37,53,59,49,13
53,59,49,13,77,31,87,66,11,16,75,46,58,95,39,97,94,24,54
27,62,36,57,76,86,14,72,26,12,37,49,13,78,77,31,87,66,21
72,26,49,13,87,75,73
16,75,73,39,54,71,29,35,18,45,17
97,94,71,29,67,35,27,62,14
57,65,76,86,14,26,12,99,37,53,49,13,77,69,87,16,75
78,77,31,69,87,66,11,16,75,73,46,58,95,15,94,24,54,93,71,29,67
57,86,72,26,12,49,77,69,87,66,75
78,77,31,69,87,66,11,75,73,46,58,15,97,94,24,71,29
77,87,66,21,75,95,97,24,81
59,13,78,77,31,69,87,66,75,95,39,97,24,54,93
77,31,69,87,66,21,11,16,75,73,46,58,95,15,39,94,24,54,93,71,29,67,81
14,72,26,99,13,78,77,31,87,16,75,46,95
27,62,36,57,65,76,86,14,72,26,12,99,37,59,49,13,78,77,31,69,87,66,21
69,87,66,21,11,16,75,73,46,58,39,94,24,93,71,29,67,81,35
76,37,53,13,31,66,21,11,46
59,76,62,26,67,27,36
65,69,37,59,86,26,27,78,13,36,31,21,77,99,62,14,72
66,37,58,13,78,95,12,69,39,53,46,75,26,31,99,73,16
81,67,14,18,82,85,91,27,26,72,36,65,24,17,29,57,62,86,93,76,71
14,72,12,99,37,53,59,49,78,77,31,69,87,66,21,11,75,73,46,58,95
49,13,78,77,31,69,66,21,11,16,75,73,46,58,95,15,39,97,94,24,54,93,71
13,78,69,66,73,95,94,24,54,93,71
14,53,57,86,37,49,17,62,85,26,72,27,91
39,97,94,24,54,93,71,29,67,81,82,35,18,45,85,17,91,27,62,36,57,65,76
97,16,71,29,94,35,69,66,46,39,24,67,95
82,35,18,45,85,17,91,27,62,36,57,65,76,86,14,72,12,99,37,53,59,49,13
65,14,26,99,53,13,78,77,11,16,73
82,46,71,94,81,93,67,62,36,54,17,29,91
29,67,81,82,35,18,45,85,17,91,27,62,36,57,65,76,86,14,72,26,12,37,53
21,75,73,93,54,94,97,87,66
11,21,35,46,16,87,67,66,95,18,97,81,82
81,82,35,18,45,17,91,27,62,36,57,65,76,14,72,12,99,37,53,59,49
26,37,71,76,35,62,91,57,67,65,86,18,99
31,16,75,73,58,93,67
46,75,21,15,66,87,39,73,94,59,99,13,31,58,16,77,49
85,81,17,76,71,86,57,72,27,62,67,26,36,18,14,91,12
69,16,54,71,95
94,82,27,71,85,46,45,15,93,18,54,39,97,91,95,81,29,24,62
26,37,53,59,49,13,78,87,66,21,16,75,73,58,95,15,39
66,16,58,95,39,97,54,71,45
37,53,49,77,31,69,87,66,21,46,58,94,24
35,75,73,54,15,66,69,67,39
21,75,73,58,95,15,39,97,94,54,93,71,67,81,35,45,85
69,87,21,16,93,71,29,67,81,82,35
18,85,91,62,36,57,86,14,26,12,53,13,77
18,36,12,77,78,86,59
13,77,69,75,73,46,95,94,24,54,71
29,67,18,85,17,91,27,62,65,76,86,26,53
87,65,11,57,53,21,13,49,12,86,76
91,57,29,27,12,81,67,93,26,65,36,76,18,17,14,85,62,35,71,54,72
54,93,81,45,85,17,91,27,62,36,76,14,72,26,12
66,21,39,93,71,67,35
59,27,26,14,76,72,37,35,62,65,12,78,13
94,24,66,93,39,59,16,97,11,15,31
26,12,53,49,13,78,77,31,66,21,11,95,39
17,86,14,72,12,49,13,78,77,69,87
67,35,93,87,15,58,97,16,21,69,81,46,11,29,75,94,71,54,82
78,77,86,49,13,12,87,72,53,16,69,21,99,36,76,59,14,31,57,65,11
21,16,75,73,46,58,95,39,97,54,93,71,82,35,18,45,85
45,57,37,14,59,17,36,78,35,12,13,62,18,91,76,53,86,72,49,26,85
54,93,85,27,57,76,72,26,12
95,15,97,94,24,71,29,35,18,91,27
37,36,86,27,62
31,69,87,66,21,11,75,73,46,58,95,94,24,71,67,81,82
45,91,82,17,36,58,71,81,39,18,54,15,27
59,27,36,87,99,12,49,31,77,72,76,78,53,62,69,17,26,91,57`;

const parseRules = (rulesText) => {
    const rules = new Map();
    rulesText.split("\n").forEach((rule) => {
        const [before, after] = rule.trim().split("|");
        if (!rules.has(before)) {
            rules.set(before, new Set());
        }
        rules.get(before).add(after);
    });
    return rules;
}

const isValidOrder = (rules, update) => {
    for (let i = 0; i < update.length; i++) {
        for (let j = i + 1; j < update.length; j++) {
            const current = String(update[i]);
            const next = String(update[j]);

            if (rules.has(next) && rules.get(next).has(current)) {
                console.log(`  Regel verletzt: ${next}|${current}`);
                return false;
            }

            if (rules.has(current) && rules.get(current).has(next)) {
                continue;
            }
        }
    }
    return true;
}

const findMiddle = (update) => update[Math.floor(update.length / 2)]


const [rulesText, updatesText] = input.split("\n\n");
const rules = parseRules(rulesText);
const updates = updatesText.split("\n").map((line) => line.split(",").map(Number));

let sum = 0;
console.log("Regel-Check:");
rules.forEach((after, before) => {
    console.log(`${before} muss vor ${[...after].join(", ")} sein`);
});

console.log("\nÜberprüfe Updates:");
updates.forEach((update, index) => {
    console.log(`\nUpdate ${index + 1}: ${update.join(",")}`);
    if (isValidOrder(rules, update)) {
        console.log("GÜLTIG", `Mittlere Zahl: ${findMiddle(update)}`);
        sum += findMiddle(update);
    } else {
        console.log("UNGÜLTIG");
    }
});

console.log("\nSumme der mittleren Zahlen der gültigen Updates:", sum);
