const SkeletonUI = ({ times }) => {
    return (<>
        <div class="card col-sm-4 m-2" aria-hidden="true">
            <div class="card-body">
                <h5 class="card-title placeholder-glow">
                    <span class="placeholder col-6"></span>
                </h5>
                <hr />
                <p class="card-text placeholder-glow">
                    <span class="placeholder col-12"></span>
                    <span class="placeholder col-12"></span>
                    <span class="placeholder col-12"></span>
                    <span class="placeholder col-12"></span>
                    <span class="placeholder col-12"></span>
                </p>
            </div>
        </div>
    </>
    );
}

export default SkeletonUI;
