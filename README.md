---
author:
- Mohand Alrasheed
date: 2022 / January / 2
title: Ranking King Saud University Computer Science Curriculum
---

# Pre-intro
Please read the [PDF](https://github.com/Hawzen/Course-Ranking/blob/master/course_ranking.pdf), its formatted nicely and its written in latex. If for any reason you cant do that, then this is the document in markdown.



# Introduction

King Saud University's computer science curriculum has many pros and
cons, in this document we outline a criteria for judging courses and
ranking the curriculum based on experts' opinions.

# Assumptions

We make a number of assumptions regarding the evaluation of courses,
these guide the evaluation process so they should be read carefully
before moving on to results.

#### Assumptions

1.  The course instructor's influence is minimized when ranking courses
    by imagining all courses being taught by a perfect instructor.

2.  The ranking has been chosen by students mostly on their final
    semester, which would mean most of them have not studied the last
    semester and in turn we will not take its courses into consideration
    in this version.

3.  The ranking has been chosen by students mostly belonging batch 439
    and 438, different batches might rank courses differently as course
    content changes slowly.

4.  Most electives are not taken into consideration, but a small number
    of popular electives will be considered.

# Criteria

Courses are judged based on five criteria chosen by the most elite
members of 439.

#### Criteria

1.  **Applications**: This refers to real-world applications of the
    knowledge gained by studying the course.

2.  **Relevance**: This refers to the new-ness of the knowledge taught
    compared to the current (as of this document's date) state of the
    art.

3.  **Insight**: This refers to the quality of the knowledge gained with
    respect to understanding the world and expanding one's horizons.

4.  **Understanding**: This refers to the proportion of the course's
    understanding portions over the memorization portions.

5.  **Ease**: This refers to how easy the course was.

# Method

## Data collection & processing

The data is collected and sorted using *Google Forms* in which each
reviewer identifies their university batch and sex as well as rate an
optional number of courses by an optional number of criteria, i.e. the
reviewer can only review one metric or all metrics as well as one
courses or all courses. Each reviewer can optionally also provide extra
notes alongside their review.

After collecting the data we average each review scores by criteria and
course, ending up with courses X Criteria matrix.

## Score calculation

After collecting and processing the data we will rank courses using a
weighted mean of criteria, we will use three different weights.

#### Weighing technique

1.  **General**: This weighing takes everything into account fairly,
    equivalent to a traditional mean.
    $$Applications\; +\; Relevance\; +\; Insight\; +\; Understanding\; +\; Ease$$

2.  **Real-world**: This score mainly focuses on real world utility.
    $$Applications * 1.5\; +\; Relevance\; +\; Insight * 0\; +\; Understanding * 0.2\; +\; Ease * 0.5$$

3.  **Academic**: This score only focuses on the academic aspect of
    courses.
    $$Applications * 0\; +\; Relevance * 0\; +\; Insight * 1.5\; +\; Understanding * 1.5\; +\; Ease * 0$$

# Results

3 tables with different weights and and notes in google forms
