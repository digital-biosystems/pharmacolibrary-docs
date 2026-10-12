<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;fluorouracil&quot;,&quot;href&quot;:&quot;drugs/drug_fluorouracil/&quot;},{&quot;label&quot;:&quot;Hirose_2010 \u00b7 population_mean&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fluorouracil_Bae2026_reference&quot;,&quot;label&quot;:&quot;Bae_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fluorouracil/Fluorouracil_Bae2026_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluorouracil_Lubomirov2025_reference&quot;,&quot;label&quot;:&quot;Lubomirov_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fluorouracil/Fluorouracil_Lubomirov2025_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluorouracil_Lvi2000_reference&quot;,&quot;label&quot;:&quot;L\u00e9vi_2000_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fluorouracil/Fluorouracil_Lvi2000_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluorouracil_Yang2025_reference&quot;,&quot;label&quot;:&quot;Yang_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fluorouracil/Fluorouracil_Yang2025_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Daryani_2016_bioluminescence&quot;,&quot;label&quot;:&quot;Daryani_2016 \u00b7 bioluminescence&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_fluorouracil/pd_Daryani_2016_bioluminescence.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# fluorouracil — `Fluorouracil_Hirose2010_population_mean`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.111). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The fluorouracil model was rejected because its metabolism links to S-1, tegafur and 5-chloro-2,4-dihydroxypyridine carry no path from the dose, and the clearance and absorption parameters have unusable units.**

The structure links S-1, tegafur and the metabolite 5-chloro-2,4-dihydroxypyridine by metabolism, but these species are unreachable from the administered dose, so the model structure leaves unlinked metabolites. The clearance parameter for 5-fluorouracil, reported as 80.5 with the unit '(39-174)', is actually a range rather than a unit, and the absorption rate constant (1.2) has '174.6' recorded in its unit field, so neither could be converted to SI. Only the volume of distribution (160.9 L) carries a usable unit. Extracted — fluorouracil: CL 80.5 (39-174), kabs 1.2 174.6, V 161 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has S-1, the second reading unknown; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> **Dose compound ≠ measured compound:** dosed `S-1`, measured `5-fluorouracil`.

## Citation
Hirose T et al., Pharmacokinetics of S-1 and CYP2A6 geno…, Oncology reports (2010)
  ·  DOI: [10.3892/or_00000889](https://doi.org/10.3892/or_00000889)

## Model component
<dbs-pgx drug="fluorouracil" model-id="Fluorouracil_Hirose2010_population_mean" status="rejected" stale="false" population="Japanese patients with advanced cancer" measured-compound="5-fluorouracil" parameterization="mechanistic" topology="general_linear"></dbs-pgx>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 3 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Creatinine clearance a (ml/min) | `Q22` · CL | 80.5 | (39-174) | not captured | (39-174) | not captured | boundary (0.8) | Hirose_2010:other_prose | — | not captured |
| CDHP Ka (h -1 ) | `Q49` · kabs | 1.2 | 174.6 | not captured | 174.6 | not captured | boundary (0.8) | Hirose_2010:other_prose | — | not captured |
| volume | `Q61` · V | 0.2 | mL | 2e-07 | L | not captured | review_gapfill (0.7) | Hara_2026:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'CDHP' — extend the ontology if this is a real PK parameter (source ['Hirose_2010_table_p3_2:row0:col2', 'Hirose_2010_table_p3_2:row1:col2', 'Hirose_2010_table_p3_2:row2:col2', 'Hirose_2010_table_p3_2:row3:col2'])
- dropped unlinked row (NIL): 'FT' — extend the ontology if this is a real PK parameter (source ['Hirose_2010_table_p3_2:row4:col2', 'Hirose_2010_table_p3_2:row6:col2', 'Hirose_2010_table_p3_2:row7:col2', 'Hirose_2010_table_p3_2:row8:col2', 'Hirose_2010_table_p3_2:row9:col2'])
- dropped unlinked row (NIL): '5-FU' — extend the ontology if this is a real PK parameter (source ['Hirose_2010_table_p3_2:row10:col2', 'Hirose_2010_table_p3_2:row11:col2', 'Hirose_2010_table_p3_2:row12:col2'])
- salvaged Q22 ('Creatinine clearance a (ml/min)'=80.5) from results prose — parameter table was unreadable
- salvaged Q49 ('CDHP Ka (h -1 )'=1.2) from results prose — parameter table was unreadable
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (Creatinine clearance a (ml/min))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=5-fluorouracil
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at route_to_review — not promoted
- population split: 'population mean' subgroup of Hirose_2010 (paper reports 2 populations: interindividual variability (%), population mean)
- gap-filled Q61 (V) from Hara_2026's review values (primary lacked it)
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.111 (1/9 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['s-1', 'tegafur', 'metabolism'], ['tegafur', '5-fluorouracil', 'metabolism'], ['tegafur', '5-chloro-2,4-dihydroxypyridine', 'metabolism']] | [['tegafur', '5-fu', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[cdhp ka]` | 1.2 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cdhp]` | not captured | 25.6 | only_one_extracted |
| `gpt-oss-120b` | `parameters[creatinine clearance a]` | 80.5 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ft]` | not captured | 20.3 | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume]` | 0.2 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | S-1 | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | 5-fluorouracil | 5-FU | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 2 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Hara_2026:review'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | (39-174) | not captured | not captured | ['Hirose_2010:other_prose'] |
| C5_unit_missing_Q49 | fail | 1 / [time] | 174.6 | not captured | not captured | ['Hirose_2010:other_prose'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 80.5 | not captured | not captured | ['Hirose_2010:other_prose'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none', 'none', 'none'] | not captured | not captured | not captured |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.0002 L | not captured | not captured | ['Hara_2026:review'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_fluorouracil/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Hirose_2010` / `Hirose_2010::population_mean`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-09-15 08:54 UTC</sub>
