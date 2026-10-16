<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;ticlopidine&quot;,&quot;href&quot;:&quot;drugs/drug_ticlopidine/&quot;},{&quot;label&quot;:&quot;Ashraf_2018 \u00b7 sir_resultsa&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ticlopidine — `Ticlopidine_Ashraf2018_sir_resultsa`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**C5 dimension mismatch on a structural parameter.**

A reported unit could not be converted (CLint), so that value has no SI equivalent. Extracted — ticlopidine: CLint 304 L/h, V 14.4 L, Q 288 L/h.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

## Citation
Ashraf MW et al., Semimechanistic Population Pharmacokine…, CPT: pharmacometrics & syst… (2018)
  ·  DOI: [10.1002/psp4.12346](https://doi.org/10.1002/psp4.12346)

<div class="pk-model-meta" hidden drug="ticlopidine" model-id="Ticlopidine_Ashraf2018_sir_resultsa" status="rejected" stale="false" population="healthy adults" measured-compound="S-ketamine" parameterization="mechanistic" topology="parent_metabolite"></div>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 3 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CLINT,H,SK (L/h) | `Q3` · CLint | 304 | L/h | not captured | [l] / [h] | not captured | llm_confirmed (0.6) | psp412346-tbl-0002:row3:col4 | — | 0.26 (None% RSE) |
| V C,SK (L) | `Q61` · V | 14.4 | L | 0.014400000000000001 | [l] | not captured | llm (0.6) | psp412346-tbl-0002:row6:col4 | — | not captured |
| Q PER1,SK (L/h) | `Q30` · Q | 288 | L/h | 8e-05 | [l] / [h] | not captured | llm (0.6) | psp412346-tbl-0002:row8:col4 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'sir‐resultsa' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_mismatch: 'CLINT,H,SK (L/h)' → Q3 (unit '[length] ** 3 / [time]' vs ontology '[length] ** 3 / [mass] / [time]') — route to review
- unit_dimension_mismatch: 'CLINT,GW,SK (L/h)' → Q3 (unit '[length] ** 3 / [time]' vs ontology '[length] ** 3 / [mass] / [time]') — route to review
- dropped duplicate Q3 ('CLINT,GW,SK (L/h)', value '1.22') — already have one for this compound
- dropped unlinked row (NIL): 'K a,SK (/h)' — extend the ontology if this is a real PK parameter (source ['psp412346-tbl-0002:row5:col4'])
- dropped duplicate Q61 ('V PER1,SK (L)', value '102') — already have one for this compound
- dropped duplicate Q61 ('V PER2,SK (L)', value '180') — already have one for this compound
- dropped duplicate Q30 ('Q PER2,SK (L/h)', value '22.3') — already have one for this compound
- dropped unlinked row (NIL): 'RVSK,PLAC' — extend the ontology if this is a real PK parameter (source ['psp412346-tbl-0002:row15:col4'])
- dropped unlinked row (NIL): 'RVSK,TICLO' — extend the ontology if this is a real PK parameter (source ['psp412346-tbl-0002:row16:col4'])
- unit_dimension_mismatch: 'CLINT,H,NK (L/h)' → Q3 (unit '[length] ** 3 / [time]' vs ontology '[length] ** 3 / [mass] / [time]') — route to review
- dropped duplicate Q3 ('CLINT,H,NK (L/h)', value '73.4') — already have one for this compound
- unit_dimension_mismatch: 'CLINT,GW,NK (L/h)' → Q3 (unit '[length] ** 3 / [time]' vs ontology '[length] ** 3 / [mass] / [time]') — route to review
- dropped duplicate Q3 ('CLINT,GW,NK (L/h)', value '46.5') — already have one for this compound
- dropped duplicate Q61 ('V C,NK (L)', value '88') — already have one for this compound
- dropped duplicate Q30 ('Q PER1,NK (L/h)', value '20.1') — already have one for this compound
- dropped duplicate Q61 ('V PER1,NK (L)', value '88.8') — already have one for this compound
- dropped unlinked row (NIL): 'RVNK,PLAC' — extend the ontology if this is a real PK parameter (source ['psp412346-tbl-0002:row24:col4'])
- dropped unlinked row (NIL): 'RVNK,TICLO' — extend the ontology if this is a real PK parameter (source ['psp412346-tbl-0002:row25:col4'])
- unit_dimension_mismatch: 'CLINT,H,TIC (L/h)' → Q3 (unit '[length] ** 3 / [time]' vs ontology '[length] ** 3 / [mass] / [time]') — route to review
- dropped duplicate Q3 ('CLINT,H,TIC (L/h)', value '1490') — already have one for this compound
- dropped duplicate Q61 ('V C,TIC (L)', value '50.8') — already have one for this compound
- dropped duplicate Q61 ('V PER1,TIC (L)', value '208.7') — already have one for this compound
- dropped duplicate Q30 ('Q PER1,TIC (L/h)', value '25.8') — already have one for this compound
- dropped unlinked row (NIL): 'RVTICLO' — extend the ontology if this is a real PK parameter (source ['psp412346-tbl-0002:row34:col4'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=S-ketamine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'sir‐resultsa' subgroup of Ashraf_2018 (paper reports 2 populations: nonmem, sir‐resultsa)
- review gap-fill skipped: this record measures 'S-ketamine', not ticlopidine — the review values are the parent's

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q3 | fail | [length] ** 3 / [time] | L/h | not captured | not captured | ['psp412346-tbl-0002:row3:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412346-tbl-0002:row8:col4'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412346-tbl-0002:row6:col4'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q61 | pass | volume within physiological range | 14.4 L | not captured | not captured | ['psp412346-tbl-0002:row6:col4'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_ticlopidine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Ashraf_2018` / `Ashraf_2018::sir_resultsa`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-14 18:19 UTC</sub>
