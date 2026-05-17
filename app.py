from flask import Flask, render_template, session, redirect, url_for

app = Flask(__name__)
app.secret_key = "sasheen_global_luxury"

products = {
    1: {"name": "Blue Crystal Couture Bag", "price": 24, "img": "bluebag.jpg"},
    2: {"name": "Pink Pearl Luxury Bag", "price": 18, "img": "pinkbag.jpg"},
    3: {"name": "Black Royal Elegant Bag", "price": 30, "img": "blackbag.jpg"},
}

@app.route('/')
def home():
    return render_template("home.html")

@app.route('/shop')
def shop():
    return render_template("shop.html", products=products)

@app.route('/add/<int:id>')
def add(id):
    cart = session.get("cart", [])
    cart.append(id)
    session["cart"] = cart
    return redirect(url_for("shop"))

@app.route('/cart')
def cart():
    cart = session.get("cart", [])
    items = [products[i] for i in cart]
    total = sum(item["price"] for item in items)
    return render_template("cart.html", items=items, total=total)

@app.route('/clear')
def clear():
    session["cart"] = []
    return redirect(url_for("cart"))

if __name__ == '__main__':
    app.run()
    if __name__ == "__main__":
    app.run(host="0.0.0.0", port=10000)