from django.shortcuts import render
from django.http import HttpResponse, HttpResponseNotFound, HttpResponseRedirect
from django.urls import reverse

monthly_challenge = {
    "january": "This is January month challenge",
    "february": "This is February month challenge",
    "march": "This is March month challenge",
    "april": "This is April month challenge",
    "may": "This is May month challenge",
    "june": "This is June month challenge",
    "july": "This is July month challenge",
    "august": "This is August month challenge",
    "september": "This is September month challenge",
    "october": "This is October month challenge",
    "november": "This is November month challenge",
    "december": "This is December month challenge",
}

# Create your views here.
def index(request):
    months = list(monthly_challenge.keys())
    list_items = ""

    for month in months:
        captial_month = month.capitalize()
        redirect_path = reverse("month-challenge",args=[month])
        list_items += f"<li><a href=\"{redirect_path}\">{captial_month}</a></li>"
        
    response_data = f"<ol>{list_items}</ol>"
    return HttpResponse(response_data)
    
def challenge_by_name(request, month):
    if month in monthly_challenge:
        return render(request, "challenges/challenge.html", {
            "challenge": monthly_challenge[month]
        })
    else:
        return HttpResponseNotFound("Response not found!")


def challenge_by_number(request, month):
    if month < 1 or month > 12:
        return HttpResponseNotFound("This not proper month!")
    month_keys = list(monthly_challenge.keys())
    requested_month = month_keys[month-1]
    redirect_path = reverse("month-challenge",args=[requested_month])
    if requested_month in monthly_challenge:
        return HttpResponseRedirect(redirect_path)
    else:
        return HttpResponseNotFound("Response not found!")
