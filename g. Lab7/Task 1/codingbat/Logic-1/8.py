def in1to10(n, outside_mode):
  if n == 10 or n == 1:
    return True
  return (n in range(1,11)) ^ outside_mode