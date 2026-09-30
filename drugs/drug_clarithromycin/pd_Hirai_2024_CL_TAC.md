<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;clarithromycin&quot;,&quot;href&quot;:&quot;drugs/drug_clarithromycin/&quot;},{&quot;label&quot;:&quot;Hirai_2024 \u00b7 PD tacrolimus clearance&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Clarithromycin_Shah2025_reference&quot;,&quot;label&quot;:&quot;Shah_2025_reference&quot;,&quot;href&quot;:&quot;drugs/drug_clarithromycin/Clarithromycin_Shah2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# tacrolimus clearance — PD  <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## What this record describes

**As extracted:** Voriconazole drives tacrolimus clearance (in unknown): indirect response — drug inhibits the production of tacrolimus clearance.

**Model:** No model was generated from this record.

> In the paper's mechanism-based model, tacrolimus clearance (CL_TAC) is reduced by a drug-drug interaction factor: voriconazole inhibits CL_TAC proportionally to its hepatic concentration via an Imax/IC50 function (DDI_VRCZ = IMAX_VRCZ × C_VRCZ,HILL / (IC50_VRCZ,HILL + C_VRCZ,HILL)), while clarithromycin acts indirectly by inhibiting the degradation of the CYP3A4 enzyme pool (degradation rate kdeg multiplied by 1 + DDI_CAM, with DDI_CAM = IMAX_CAM × C_CAM,HILL / (IC50_CAM,HILL + C_CAM,HILL)), with ki as the transfer rate constant into and from the inhibition compartment. The excerpts do not report numerical values for IMAX, IC50, kdeg, or ki, and the final model used a sigmoid Emax function f
>
> <sub>in the paper's terms — summarised by glm-5.3-flash from the paper's text; not checked by a person</sub>

- **paper:** `Hirai_2024`
- **model family:** `indirect_response_i`
- **driver:** `not_resolved`
- **tier:** descriptive
- **effect:** inhibition/proportional

## Citation
Hirai T; Aoyama T; Tsuji Y; Ino K; Ikejiri M; Tawara I; et al. et al. (2024). European journal of drug metabolism and pharmacokinetics 49
  ·  DOI: [10.1007/s13318-024-00915-2](https://doi.org/10.1007/s13318-024-00915-2)

## Parameters
_No resolved parameters._


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>← back to [clarithromycin](drugs/drug_clarithromycin/)</sub>
