<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10A&quot;,&quot;href&quot;:&quot;atc/A10A.md&quot;},{&quot;label&quot;:&quot;insulin (pork)&quot;,&quot;href&quot;:&quot;drugs/drug_insulin_pork/&quot;},{&quot;label&quot;:&quot;Nosadini_1988 \u00b7 normal and insulin-dependent diabetic subjects&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;InsulinPork_Nosadini1988_normal_and_insulin_dependent_diabet&quot;,&quot;label&quot;:&quot;Nosadini_1988_normal and insulin-dependent diabetic subjects&quot;,&quot;href&quot;:&quot;drugs/drug_insulin_pork/InsulinPork_Nosadini1988_normal_and_insulin_dependent_diabet.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;InsulinPork_Thorsteinsson1987_normal_and_type_i_diabetic_sub&quot;,&quot;label&quot;:&quot;Thorsteinsson_1987_normal and type I diabetic subjects&quot;,&quot;href&quot;:&quot;drugs/drug_insulin_pork/InsulinPork_Thorsteinsson1987_normal_and_type_i_diabetic_sub.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# insulin (pork) — `InsulinPork_Nosadini1988_normal_and_insulin_dependent_diabet`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

### Reviewer guidance

**Why:** no structural parameters extracted (nothing to build)
**How to address:** read the paper and record the missing values by hand, or leave the record rejected — there is nothing here to build.
<sub>owner: **curator**</sub>

## Citation
Nosadini R; De Kreutzenberg S; Duner E; Iori E; Avogaro A; Trevisan R; et al. et al. (1988). The Journal of clinical endocrinology and metabolism 67
  ·  DOI: [10.1210/jcem-67-3-551](https://doi.org/10.1210/jcem-67-3-551)

## Model component
<dbs-pgx drug="insulin (pork)" model-id="InsulinPork_Nosadini1988_normal_and_insulin_dependent_diabet" status="rejected" stale="false" population="normal and insulin-dependent diabetic subjects" measured-compound="" parameterization="" topology=""></dbs-pgx>

**Parameterization:** not captured.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

## Departures & gaps

_None recorded._

## Validation

_No comparable checks._

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_insulin_pork/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Nosadini_1988` / `Nosadini_1988::normal and insulin-dependent diabetic subjects`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-09-14 15:20 UTC</sub>
