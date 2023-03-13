function Page({page, active}) {
    return active ?
    (
        <li>
            <a href="" className="page-active">{page}</a>
        </li>
    ):
    (
        <li>
            <a href="" className="">{page}</a>
        </li>
    );
}

export default Page
