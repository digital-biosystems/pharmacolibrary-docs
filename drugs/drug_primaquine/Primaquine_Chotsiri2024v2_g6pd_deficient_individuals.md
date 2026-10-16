<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;primaquine&quot;,&quot;href&quot;:&quot;drugs/drug_primaquine/&quot;},{&quot;label&quot;:&quot;Chotsiri_2024_2 \u00b7 g6pd_deficient_individuals&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Primaquine_Chairat2018_reference&quot;,&quot;label&quot;:&quot;Chairat_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_primaquine/Primaquine_Chairat2018_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# primaquine — `Primaquine_Chotsiri2024v2_g6pd_deficient_individuals`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.417). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**No volume or clearance — not a compartmental population PK model; c8 unreachable/orphan compartment or unlinked metabolite.**

The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper. A reported unit could not be converted (Cmax and AUCt), so that value has no SI equivalent. Extracted — primaquine: Cmax 0.127 % HB change per 1 ng/mL, AUCt 0.116 % HB change per 1 nghr/mL, tlag 0 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has none, the second reading primaquine → carboxy-primaquine (metabolism); primaquine → primaquine carbamoyl-glucuronide (metabolism); it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

## Citation
Chotsiri P et al., Population pharmacokinetics of primaqui…, Malaria journal (2024)
  ·  DOI: [10.1186/s12936-024-04979-y](https://doi.org/10.1186/s12936-024-04979-y)

<div class="pk-model-meta" hidden drug="primaquine" model-id="Primaquine_Chotsiri2024v2_g6pd_deficient_individuals" status="rejected" stale="false" population="African males with G6PD deficiency and G6PD-normal status" measured-compound="primaquine" parameterization="mechanistic" topology="general_linear"></div>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 3 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CMAX (% HB change per 1 ng/mL) | `Q32` · Cmax | 0.127 | % HB change per 1 ng/mL | not captured | [[h] · [ng] · [%] · [bchangeper1]] / [ml] | not captured | exact (1.0) | Chotsiri_2024_2_table_S1:row1:col1, Chotsiri_2024_2_table_S1:row4:col1, Chotsiri_2024_2_table_S1:row7:col1 | — | not captured |
| AUC24 (% HB change per 1 nghr/mL) | `Q19` · AUCt | 0.116 | % HB change per 1 nghr/mL | not captured | [[h]^2 · [ng] · [%] · [bchangeper1]] / [ml] | not captured | llm (0.6) | Chotsiri_2024_2_table_S1:row2:col1, Chotsiri_2024_2_table_S1:row5:col1, Chotsiri_2024_2_table_S1:row8:col1 | — | not captured |
| Lag time | `Q83` · tlag | 0.0 | h | 0.0 | h | not captured | review_gapfill (0.7) | Fasinu_2022_2:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: '% HB change per 1 ng/mL' (Cmax)
- unit_dimension_unknown: '% HB change per 1 nghr/mL' (AUCt)
- unit_dimension_unknown: '% mHB change per 1 ng/mL' (Cmax)
- dropped duplicate Q32 ('CMAX (% mHB change per 1 ng/mL)', value '0.252') — already have one for this compound
- unit_dimension_unknown: '% mHB change per 1 nghr/mL' (AUCt)
- dropped duplicate Q19 ('AUC24 (% mHB change per 1 nghr/mL)', value '0.0661') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=primaquine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at route_to_review — not promoted
- population split: 'g6pd-deficient individuals (n = 18)' subgroup of Chotsiri_2024_2 (paper reports 2 populations: g6pd-deficient individuals (n = 18), g6pd-normal individuals (n = 10))
- row roles: 1 row(s) kept on the molecule their table section names, against the LLM's assignment
- row roles (LLM): model_class=compartmental; 5/5 row label(s) assigned, 0 linked by role; re-tagged primaquine→parent ×1, primaquine→primaquine carbamoyl-glucuronide ×1
- molar mass: no plausible PubChem entry for 'primaquine carbamoyl-glucuronide' ('primaquine carbamoyl-glucuronide') — left in mass units
- molar mass: none found for 'primaquine carbamoyl-glucuronide' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- gap-filled Q83 (tlag) from Fasinu_2022_2's review values (primary lacked it)

**Extraction notes:**
- table Tab2: unbound_uncertainty
- table Tab2: units_need_context
- table Tab2: unparsed_numeric_cell
- table Chotsiri_2024_2_table_S1: units_need_context
- table Chotsiri_2024_2_table_S1: ragged_grid
- companion parameter table S1 transcribed (12 record(s))
- table Chotsiri_2024_2_table_S2: units_need_context
- table Chotsiri_2024_2_table_S2: ragged_grid
- companion parameter table S2 transcribed (12 record(s))
- no LLM table selection; kept 3 deterministically-scored parameter table(s)
- LLM region Tab2:footnote: Connection error.
- LLM region Chotsiri_2024_2:results_prose: Connection error.
- LLM region Chotsiri_2024_2:other_prose: Connection error.
- LLM region Chotsiri_2024_2:other_prose: Connection error.
- LLM region Chotsiri_2024_2:other_prose: Connection error.
- LLM region Chotsiri_2024_2:discussion_prose: Connection error.

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.417 (5/12 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [] | [['primaquine', 'carboxy-primaquine', 'metabolism'], ['primaquine', 'primaquine carbamoyl-glucuronide', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[carboxy-primaquine σvp]` | 0.0328 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f (l/h) - primaquine]` | not captured | 15.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` | 15.4 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[lag time]` | 0.0 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc/f (l) - primaquine]` | not captured | 163 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc/f]` | 163 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 2 | not captured | not captured | not captured |
| C0b_disposition_core | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Fasinu_2022_2:review'] |
| C5_unit_missing_Q19 | fail | [mass] * [time] / [length] ** 3 | % HB change per 1 nghr/mL | not captured | not captured | ['Chotsiri_2024_2_table_S1:row2:col1', 'Chotsiri_2024_2_table_S1:row5:col1', 'Chotsiri_2024_2_table_S1:row8:col1'] |
| C5_unit_missing_Q32 | fail | [mass] / [length] ** 3 | % HB change per 1 ng/mL | not captured | not captured | ['Chotsiri_2024_2_table_S1:row1:col1', 'Chotsiri_2024_2_table_S1:row4:col1', 'Chotsiri_2024_2_table_S1:row7:col1'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none', 'none'] | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_primaquine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Chotsiri_2024_2` / `Chotsiri_2024_2::g6pd_deficient_individuals`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-15 01:12 UTC</sub>
