<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;Lumefantrine&quot;,&quot;href&quot;:&quot;drugs/drug_lumefantrine/&quot;},{&quot;label&quot;:&quot;Hoglund_2015 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lumefantrine_Kloprogge2018_reference&quot;,&quot;label&quot;:&quot;Kloprogge_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lumefantrine/Lumefantrine_Kloprogge2018_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Lumefantrine — `Lumefantrine_Hoglund2015_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.333). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The lumefantrine record was rejected because the metabolite desbutyl-lumefantrine is unlinked (no path from the dose), and parameters carry nonsensical values, e.g. clearance CL = 168 with unit '%' actually being the RSE of between-subject variability of dihydroartemisinin clearance.**

The structure lists desbutyl-lumefantrine formed from lumefantrine and dihydroartemisinin formed from artemether, but the check for reachable compartments and metabolites failed, so a metabolite has no path from the dose. Several parameters are dimensionless counts or fractions yet were reported with unit 'l' (n_transit = 1, Fab = 1, Vmax = 1), a unit that could not be converted to SI, so no SI value could be established. The parameter labelled CL carries value 168 with unit '%', but its verbatim label shows it is the relative standard error of the between-subject variability of the elimination clearance of dihydroartemisinin, not a lumefantrine clearance. Extracted — lumefantrine: n_transit 1 l, Fab 1 l, Vmax 1 l, CL 168 %.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has artemether-lumefantrine, the second reading unknown; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> **Dose compound ≠ measured compound:** dosed `artemether-lumefantrine`, measured `lumefantrine`.

## Citation
Hoglund RM et al., Artemether-lumefantrine co-administrati…, British journal of clinical… (2015)
  ·  DOI: [10.1111/bcp.12529](https://doi.org/10.1111/bcp.12529)

## Model component
<dbs-pgx drug="Lumefantrine" model-id="Lumefantrine_Hoglund2015_reference" status="rejected" stale="false" population="HIV-infected patients treated with antiretrovirals" measured-compound="lumefantrine" parameterization="mechanistic" topology="general_linear"></dbs-pgx>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 4 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Number of trans comp | `Q311` · n_transit | 1 | l | not captured | [l] | not captured | llm (0.6) | tbl2:row6:col1, Hoglund_2015_table_3:row3:col1 | — | not captured |
| Bioavailability (%) | `Q40` · Fab | 1 | l | not captured | not captured | not captured | exact (1.0) | tbl2:row8:col1, Hoglund_2015_table_3:row5:col1 | — | not captured |
| MMAX | `Q66` · Vmax | 1 | l | 0.001 | [l] | not captured | llm (0.6) | Hoglund_2015_table_3:row7:col1 | — | not captured |
| MF50 | `Q900` · equation variable | 62 | not captured | not captured | not captured | not captured | llm (0.6) | Hoglund_2015_table_3:row8:col1 | — | not captured |
| RSE of between subject variability of the elimination clearance of dihydroartemisinin | `Q22` · CL | 168 | % | not captured | % | not captured | boundary (0.8) | Hoglund_2015:other_prose | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped value-less row: 'CL/F (l h−1)' (captured trailing unit 'l h−1' for child rows)
- dropped value-less row: 'MTT (h)' (captured trailing unit 'h' for child rows)
- salvaged Q22 ('RSE of between subject variability of the elimination clearance of dihydroartemisinin'=168) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=lumefantrine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 2 first-order transfer(s) across 4 compounds → general_linear
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 7/7 row label(s) assigned, 5 linked by role; re-tagged parent→lumefantrine ×17
- molar mass: none of 6 PubChem candidate(s) is 'dihydroartemisinin' (LLM) — left in mass units
- molar mass: none found for 'dihydroartemisinin' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell tbl2:row2:col1 = '4.77 [5.30]'
- unparsed cell tbl2:row2:col2 = '4.31, 5.30'
- unparsed cell tbl2:row2:col3 = '14.8 [50.7]'
- unparsed cell tbl2:row2:col4 = '5.68, 22.7'
- unparsed cell tbl2:row7:col1 = '6.27 [21.2]'
- unparsed cell tbl2:row7:col2 = '3.75, 8.35'
- unparsed cell tbl2:row7:col3 = '31.4 [106]'
- unparsed cell tbl2:row7:col4 = '15.1, 94.6'
- unparsed cell tbl2:row8:col3 = '47.4 [18.3]'
- unparsed cell tbl2:row8:col4 = '38.2, 57.4'
- unparsed cell tbl2:row9:col1 = '0.566 [7.83]'
- unparsed cell tbl2:row9:col2 = '0.479, 0.643'
- unparsed cell tbl2:row16:col1 = '0.465 [13.3]'
- unparsed cell tbl2:row16:col2 = '0.357, 0.591'
- unparsed cell Hoglund_2015_table_3:row1:col1 = '317 [8.25]'
- unparsed cell Hoglund_2015_table_3:row1:col2 = '270, 374'
- unparsed cell Hoglund_2015_table_3:row1:col3 = '9.8 [60.6]'
- unparsed cell Hoglund_2015_table_3:row1:col4 = '2.75, 16.1'
- unparsed cell Hoglund_2015_table_3:row4:col1 = '0.970 [6.58]'
- unparsed cell Hoglund_2015_table_3:row4:col2 = '0.853, 1.10'
- unparsed cell Hoglund_2015_table_3:row4:col3 = '51.6 [18.6]'
- unparsed cell Hoglund_2015_table_3:row4:col4 = '41.1, 61.6'
- unparsed cell Hoglund_2015_table_3:row5:col3 = '58.6 [27.6]'
- unparsed cell Hoglund_2015_table_3:row5:col4 = '39.9, 76.6'
- unparsed cell Hoglund_2015_table_3:row6:col1 = '0.724 [5.60]'
- unparsed cell Hoglund_2015_table_3:row6:col2 = '0.644, 0.803'
- unparsed cell Hoglund_2015_table_3:row14:col1 = '160 [4.93]'
- unparsed cell Hoglund_2015_table_3:row14:col2 = '145, 174'
- unparsed cell Hoglund_2015_table_3:row14:col3 = '53.9 [31.5]'
- unparsed cell Hoglund_2015_table_3:row14:col4 = '33.4, 70.4'
- unparsed cell Hoglund_2015_table_3:row16:col1 = '0.707 [4.40]'
- unparsed cell Hoglund_2015_table_3:row16:col2 = '0.645, 0.764'
- companion parameter table 3 transcribed (10 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.333 (4/12 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[calculated η-shrinkages were high for lumefantrine elimination clearance]` | not captured | 40 | only_one_extracted |
| `gpt-oss-120b` | `parameters[mf50]` | 62 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[mmax]` | not captured | 1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[mmax]` | 1 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[number of trans comp].value` | 1 | 3 | mismatch |
| `gpt-oss-120b` | `parameters[rse of between subject variability of the elimination clearance of dihydroartemisinin]` | 168 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | artemether-lumefantrine | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | lumefantrine | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q66 | pass | [length] ** 3 | not captured | not captured | not captured | ['Hoglund_2015_table_3:row7:col1'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | % | not captured | not captured | ['Hoglund_2015:other_prose'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 168.0 | not captured | not captured | ['Hoglund_2015:other_prose'] |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_lumefantrine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Hoglund_2015` / `Hoglund_2015::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 07:11 UTC</sub>
