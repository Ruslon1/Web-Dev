from models import Department, ITDepartment, HRDepartment

departments = [
    Department("D01", "General", 10),
    ITDepartment("D02", "IT", 25, ["Python", "C#", "ML"]),
    HRDepartment("D03", "HR", 8, "Central Asia")
]

for dept in departments:
    print(dept)
    print(dept.describe())
    dept.hire_employee()
    print("Employees after hire:", dept.employee_count)
    print()