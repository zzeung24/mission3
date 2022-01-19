using System;
using System.ComponentModel.DataAnnotations;

namespace MyFirstASPNETWebApp.Models
{
    public class GradeCalculatorModel
    {
        [Required]
        [Range(1, 100)]
        public int assignments { get; set; }
        public int groupproject { get; set; }
        public int quizzes { get; set; }
        public int exams { get; set; }
        public int intex { get; set; }

    }
}
