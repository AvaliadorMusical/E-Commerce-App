def linear_search(products, key, value):
  value = str(value).lower()
  result = []
  for p in products:
      if value in str(p.get(key, "")).lower():
          result.append(p)
  return result


def binary_search(products, key, value):
  low, high = 0, len(products) - 1
  value = str(value).lower()

  while low <= high:
      mid = (low + high) // 2
      mid_val = str(products[mid].get(key, "")).lower()

      if mid_val == value:
          return [products[mid]]
      elif mid_val < value:
          low = mid + 1
      else:
          high = mid - 1
  return []


def bubble_sort(products, key):
  arr = products[:]
  n = len(arr)

  def parse(val):
      try:
          return float(val)
      except:
          return str(val).lower()

  for i in range(n):
      for j in range(0, n - i - 1):
          if parse(arr[j].get(key, "")) > parse(arr[j + 1].get(key, "")):
              arr[j], arr[j + 1] = arr[j + 1], arr[j]
  return arr
