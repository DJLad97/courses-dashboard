export const courses = {
    "success": true,
    "errors": [],
    "courses": {
        "current_page": 1,
        "data": [
            {
                "id": 1,
                "name": "<p>Introduction to Parallax</p>",
                "slug": "par001",
                "course_id": "PAR001",
                "location": "leeds",
                "category": "css",
                "price": 2540,
                "link": "/courses/intro-to-parallax",
                "starts_at": "2022-03-14T12:00:57+00:00",
                "ends_at": "2022-03-14T16:00:57+00:00",
                "created_at": null,
                "updated_at": null
            },
            {
                "id": 2,
                "name": "<p>Introduction to Parallax</p>",
                "slug": "par001",
                "course_id": "PAR001",
                "location": "portsmouth",
                "category": "css",
                "price": 2540,
                "link": "/courses/intro-to-parallax",
                "starts_at": "2022-03-18T09:12:57+00:00",
                "ends_at": "2022-03-18T16:12:57+00:00",
                "created_at": null,
                "updated_at": null
            },
            {
                "id": 3,
                "name": "<p>Advanced CSS</p>",
                "slug": "css001",
                "course_id": "CSS001",
                "location": "portsmouth",
                "category": "web",
                "price": 3000,
                "link": "/courses/intro-to-parallax",
                "starts_at": "2022-06-14T13:12:57+00:00",
                "ends_at": "2022-06-14T16:12:57+00:00",
                "created_at": null,
                "updated_at": null
            },
            {
                "id": 4,
                "name": "<p>Advanced Figma principles with Liam</p>",
                "slug": "fig001",
                "course_id": "FIG001",
                "location": "leeds",
                "category": "css",
                "price": 10000,
                "link": "/courses/intro-to-parallax",
                "starts_at": "2022-07-14T12:12:57+00:00",
                "ends_at": "2022-07-14T16:12:57+00:00",
                "created_at": null,
                "updated_at": null
            },
            {
                "id": 5,
                "name": "<p>The best hack day projects</p>",
                "slug": "hac001",
                "course_id": "HAC001",
                "location": "portsmouth",
                "category": "web",
                "price": 300,
                "link": "/courses/intro-to-parallax",
                "starts_at": "2022-03-14T16:12:57+00:00",
                "ends_at": "2022-03-14T16:12:57+00:00",
                "created_at": null,
                "updated_at": null
            }
        ],
        "last_page": 7,
    }
}

export const categories = [
    {
        "id": 1,
        "name": "Web",
        "slug": "web",
        "description": "Courses about the web",
        "icon": "data:@file/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMkM4IDEuNDQ3NzIgOC40NDc3MiAxIDkgMUgxMUMxMS41NTIzIDEgMTIgMS40NDc3MiAxMiAyVjIuNTY4NzlDMTIgMi45OTY1OSAxMi4yODcxIDMuMzY4MjUgMTIuNjgyMiAzLjUzMjI4QzEzLjA3NzUgMy42OTYzOCAxMy41Mzc3IDMuNjMzODQgMTMuODQwMyAzLjMzMTIzTDE0LjI0MjYgMi45Mjg5MUMxNC42MzMxIDIuNTM4MzggMTUuMjY2MyAyLjUzODM4IDE1LjY1NjggMi45Mjg5MUwxNy4wNzEgNC4zNDMxMkMxNy40NjE2IDQuNzMzNjUgMTcuNDYxNiA1LjM2NjgxIDE3LjA3MSA1Ljc1NzM0TDE2LjY2ODggNi4xNTk2QzE2LjM2NjEgNi40NjIyMyAxNi4zMDM2IDYuOTIyNDcgMTYuNDY3NyA3LjMxNzc0QzE2LjYzMTcgNy43MTI4NyAxNy4wMDM0IDggMTcuNDMxMyA4TDE4IDhDMTguNTUyMyA4IDE5IDguNDQ3NzEgMTkgOVYxMUMxOSAxMS41NTIzIDE4LjU1MjMgMTIgMTggMTJIMTcuNDMxMkMxNy4wMDM0IDEyIDE2LjYzMTggMTIuMjg3MSAxNi40Njc3IDEyLjY4MjJDMTYuMzAzNiAxMy4wNzc1IDE2LjM2NjEgMTMuNTM3NyAxNi42Njg4IDEzLjg0MDNMMTcuMDcxIDE0LjI0MjZDMTcuNDYxNiAxNC42MzMxIDE3LjQ2MTYgMTUuMjY2MyAxNy4wNzEgMTUuNjU2OEwxNS42NTY4IDE3LjA3MUMxNS4yNjYzIDE3LjQ2MTYgMTQuNjMzMSAxNy40NjE2IDE0LjI0MjYgMTcuMDcxTDEzLjg0MDMgMTYuNjY4OEMxMy41Mzc3IDE2LjM2NjEgMTMuMDc3NSAxNi4zMDM2IDEyLjY4MjIgMTYuNDY3N0MxMi4yODcxIDE2LjYzMTcgMTIgMTcuMDAzNCAxMiAxNy40MzEyVjE4QzEyIDE4LjU1MjMgMTEuNTUyMyAxOSAxMSAxOUg5QzguNDQ3NzIgMTkgOCAxOC41NTIzIDggMThWMTcuNDMxM0M4IDE3LjAwMzQgNy43MTI4NyAxNi42MzE3IDcuMzE3NzQgMTYuNDY3N0M2LjkyMjQ3IDE2LjMwMzYgNi40NjIyMyAxNi4zNjYxIDYuMTU5NiAxNi42Njg4TDUuNzU3MzIgMTcuMDcxQzUuMzY2NzkgMTcuNDYxNiA0LjczMzYzIDE3LjQ2MTYgNC4zNDMxMSAxNy4wNzFMMi45Mjg4OSAxNS42NTY4QzIuNTM4MzcgMTUuMjY2MyAyLjUzODM3IDE0LjYzMzEgMi45Mjg4OSAxNC4yNDI2TDMuMzMxMjMgMTMuODQwM0MzLjYzMzg0IDEzLjUzNzcgMy42OTYzOCAxMy4wNzc1IDMuNTMyMjggMTIuNjgyMkMzLjM2ODI1IDEyLjI4NzEgMi45OTY1OSAxMiAyLjU2ODc5IDEySDJDMS40NDc3MiAxMiAxIDExLjU1MjMgMSAxMVY5QzEgOC40NDc3MiAxLjQ0NzcyIDggMiA4TDIuNTY4NzcgOEMyLjk5NjU4IDggMy4zNjgyNSA3LjcxMjg4IDMuNTMyMjkgNy4zMTc3NkMzLjY5NjQgNi45MjI1IDMuNjMzODYgNi40NjIyOSAzLjMzMTIzIDYuMTU5NjZMMi45Mjg5MSA1Ljc1NzM0QzIuNTM4MzggNS4zNjY4MSAyLjUzODM4IDQuNzMzNjUgMi45Mjg5MSA0LjM0MzEzTDQuMzQzMTIgMi45Mjg5MUM0LjczMzY1IDIuNTM4MzkgNS4zNjY4MSAyLjUzODM5IDUuNzU3MzQgMi45Mjg5MUw2LjE1OTY2IDMuMzMxMjNDNi40NjIyOCAzLjYzMzg2IDYuOTIyNSAzLjY5NjQgNy4zMTc3NiAzLjUzMjI5QzcuNzEyODggMy4zNjgyNSA4IDIuOTk2NTggOCAyLjU2ODc2VjJaIiBzdHJva2U9IiMyOTJDM0UiIHN0cm9rZS13aWR0aD0iMS41Ii8+CjxwYXRoIGQ9Ik0xMiAxMEMxMiAxMS4xMDQ2IDExLjEwNDYgMTIgMTAgMTJDOC44OTU0MyAxMiA4IDExLjEwNDYgOCAxMEM4IDguODk1NDMgOC44OTU0MyA4IDEwIDhDMTEuMTA0NiA4IDEyIDguODk1NDMgMTIgMTBaIiBzdHJva2U9IiMyOTJDM0UiIHN0cm9rZS13aWR0aD0iMS41Ii8+Cjwvc3ZnPgo=",
        "created_at": null,
        "updated_at": null
    },
    {
        "id": 2,
        "name": "CSS",
        "slug": "css",
        "description": "The best CSS courses to help you build beautiful websites",
        "icon": "data:@file/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy4xMzMzIDEyLjI2NEMyMC4zNzM0IDEyLjI2NCAyMyA5Ljc0MjQ3IDIzIDYuNjMyQzIzIDMuNTIxNTMgMjAuMzczNCAxIDE3LjEzMzMgMUMxMy44OTMzIDEgMTEuMjY2NyAzLjUyMTUzIDExLjI2NjcgNi42MzJDMTEuMjY2NyA5Ljc0MjQ3IDEzLjg5MzMgMTIuMjY0IDE3LjEzMzMgMTIuMjY0WiIgc3Ryb2tlPSIjMjkyQzNFIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNy4xMzMzIDMuODE2MDFWOS40NDgwMSIgc3Ryb2tlPSIjMjkyQzNFIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNy4xMzMzIDkuNDQ3OTdMMTQuOTMzMyA3LjMzNTk3IiBzdHJva2U9IiMyOTJDM0UiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE3LjEzMzMgOS40NDc5N0wxOS4zMzMzIDcuMzM1OTciIHN0cm9rZT0iIzI5MkMzRSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE1LjY2NjcgMjIuMTJIOC4zMzMzM0w5LjA2NjY2IDE5LjMwNEgxNC45MzMzTDE1LjY2NjcgMjIuMTJWMjIuMTJaIiBzdHJva2U9IiMyOTJDM0UiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTYuMTMzMzMgMjIuMTJIMTcuODY2NyIgc3Ryb2tlPSIjMjkyQzNFIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xIDE2LjQ4OEgyMyIgc3Ryb2tlPSIjMjkyQzNFIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0yMyAxMy42NzJWMTYuNDg4QzIzIDE4LjA0MzIgMjEuNjg2NyAxOS4zMDQgMjAuMDY2NyAxOS4zMDRIMy45MzMzM0MyLjMxMzMgMTkuMzA0IDEgMTguMDQzMiAxIDE2LjQ4OFY2LjYzMjAxQzEgNS4wNzY3OCAyLjMxMzMgMy44MTYwMSAzLjkzMzMzIDMuODE2MDFIOC4zMzMzMyIgc3Ryb2tlPSIjMjkyQzNFIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=",
        "created_at": null,
        "updated_at": null
    },
    {
        "id": 3,
        "name": "Misc",
        "slug": "misc",
        "description": "Other miscellaneous courses we offer",
        "icon": "data:@file/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIuNDY2NjcgMTUuNzMzM1Y1LjQ2NjY3QzIuNDY2NjcgNC42NTY2NSAzLjEyMzMyIDQgMy45MzMzNCA0SDIwLjA2NjdDMjAuODc2NyA0IDIxLjUzMzMgNC42NTY2NSAyMS41MzMzIDUuNDY2NjdWMTUuNzMzMyIgc3Ryb2tlPSIjMjkyQzNFIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTQuNTI2NiAxNS43MzMzQzE0LjAwODUgMTYuNjQwMSAxMy4wNDQzIDE3LjE5OTcgMTIgMTcuMTk5N0MxMC45NTU3IDE3LjE5OTcgOS45OTE0NyAxNi42NDAxIDkuNDczNDIgMTUuNzMzM0gxVjE3LjJDMSAxOC44MiAyLjMxMzMgMjAuMTMzMyAzLjkzMzMzIDIwLjEzMzNIMjAuMDY2N0MyMS42ODY3IDIwLjEzMzMgMjMgMTguODIgMjMgMTcuMlYxNS43MzMzSDE0LjUyNjZaIiBzdHJva2U9IiMyOTJDM0UiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==",
        "created_at": null,
        "updated_at": null
    },
]

export const locations = [
    {
        "id": 1,
        "name": "Leeds",
        "slug": "leeds",
        "created_at": null,
        "updated_at": null
    },
    {
        "id": 2,
        "name": "Portsmouth",
        "slug": "portsmouth",
        "created_at": null,
        "updated_at": null
    },
    {
        "id": 3,
        "name": "London",
        "slug": "london",
        "created_at": null,
        "updated_at": null
    }
]