from yahoo_fin import stock_info
from plyer import notification
from datetime import datetime
time = datetime.now().strftime("%H:%M")
print(time)

title = "Stock Alert!"
brands = input("Enter your company symbol.")
entry_price = int(input("Enter your buying price."))
exit_price = int(input("Enter your exit price."))
price = stock_info.get_live_price(brands)
print(price)
if price < entry_price:
    message = "It's time to buy your stock. The current price is : "+str(price)
    notification.notify(title=title,
                        message=message,
                        app_icon=None,
                        timeout=10,
                        toast=False)
elif price > exit_price:
    message = "It's time to sell your stock. The current price is : " + \
        str(price)
    notification.notify(title=title,
                        message=message,
                        app_icon=None,
                        timeout=10,
                        toast=False)
else:
    print(price)
