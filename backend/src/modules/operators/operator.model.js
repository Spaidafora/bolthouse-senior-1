function toOperator(row) {
  return {
    operatorId: row.operator_id,
    userId: row.user_id,
    name: row.name,
    employeeCode: row.employee_code,
    createdAt: row.created_at,
  };
}

export { toOperator };
