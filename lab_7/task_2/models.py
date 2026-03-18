class Department:
    def __init__(self, code, name, employee_count=0):
        self.code = code
        self.name = name
        self.employee_count = employee_count

    def hire_employee(self):
        self.employee_count += 1

    def fire_employee(self):
        if self.employee_count > 0:
            self.employee_count -= 1

    def describe(self):
        return "General department"

    def __str__(self):
        return f"Department(code={self.code}, name={self.name}, employees={self.employee_count})"


class ITDepartment(Department):
    def __init__(self, code, name, employee_count, technologies):
        super().__init__(code, name, employee_count)
        self.technologies = technologies

    def describe(self):
        return "IT department"

    def deploy_system(self):
        return f"{self.name} is deploying a system"

    def __str__(self):
        return f"ITDepartment(code={self.code}, name={self.name}, employees={self.employee_count}, technologies={self.technologies})"


class HRDepartment(Department):
    def __init__(self, code, name, employee_count, region):
        super().__init__(code, name, employee_count)
        self.region = region

    def describe(self):
        return "HR department"

    def conduct_interview(self):
        return f"{self.name} is conducting an interview"

    def __str__(self):
        return f"HRDepartment(code={self.code}, name={self.name}, employees={self.employee_count}, region={self.region})"