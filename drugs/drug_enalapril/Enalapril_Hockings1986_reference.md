<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09A&quot;,&quot;href&quot;:&quot;atc/C09A.md&quot;},{&quot;label&quot;:&quot;enalapril&quot;,&quot;href&quot;:&quot;drugs/drug_enalapril/&quot;},{&quot;label&quot;:&quot;Hockings_1986 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Enalapril_Kechagia2015_reference&quot;,&quot;label&quot;:&quot;Kechagia_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_enalapril/Enalapril_Kechagia2015_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Enalapril_Steichert2025v2_reference&quot;,&quot;label&quot;:&quot;Steichert_2025_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_enalapril/Enalapril_Steichert2025v2_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Enalapril_Steichert2025_reference&quot;,&quot;label&quot;:&quot;Steichert_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_enalapril/Enalapril_Steichert2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Enalapril_Faisal2019v2_reference&quot;,&quot;label&quot;:&quot;Faisal_2019_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_enalapril/Enalapril_Faisal2019v2_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Kechagia_2015_DBP&quot;,&quot;label&quot;:&quot;Kechagia_2015 \u00b7 DBP&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_enalapril/pd_Kechagia_2015_DBP.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# enalapril — `Enalapril_Hockings1986_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-10-05 09:26 UTC (Rejected), but the paper was screened again on 2026-10-07 05:42 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. The record was rejected because the metabolite enalaprilat, formed from enalapril by hydrolysis, has no compartment (n_cmt = 0), leaving it unlinked from the dose in the model structure.

<div class="pk-model-meta" hidden drug="enalapril" model-id="Enalapril_Hockings1986_reference" status="needs_review" stale="true" population="young and elderly healthy volunteers" measured-compound="enalaprilat" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Hockings N, Ajayi AA, Reid JL. Age and the pharmacokinetics of angiotensin converting enzyme inhibitors enalapril and enalaprilat. British journal of clinical pharmacology 21(4):341–348 (1986).
  ·  DOI: [10.1111/j.1365-2125.1986.tb05205.x](https://doi.org/10.1111/j.1365-2125.1986.tb05205.x)

## Population and dosing

**Population:** healthy young and elderly adults · condition healthy · age group mixed · n = 18.

**Dosing:** 10 mg, oral and iv, single.

**Dosed compound ≠ measured compound:** dosed enalapril, measured enalaprilat.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Y1 | equation variable | 129 |  |
| El | kel | 197 | 1/h |
| The clearance of enalaprilat | CL | 4.46 | L/h |
| VD (L) | V | 100.0 | L |
| KA (1/h) | kabs | 5.0 | 1/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.167). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record was rejected because the metabolite enalaprilat, formed from enalapril by hydrolysis, has no compartment (n_cmt = 0), leaving it unlinked from the dose in the model structure.**

The model links enalapril to its measured metabolite enalaprilat via hydrolysis with Fm as the link parameter, but the metabolite is defined with n_cmt = 0, meaning no compartment exists for it. Without a compartment, enalaprilat has no path from the administered dose, so the structure fails the connectivity requirement. The extracted parameters for enalaprilat (t1/2z, kel = 197 1/h, CL = 4.46 L/h) cannot be placed in a connected structure. Extracted — enalaprilat: kel 197 1/h, CL 4.46 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has enalapril → enalaprilat (hydrolysis), the second reading none; it also differs on 14 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Y1 | `Q900` · equation variable | 129 |  |  |  |  | llm (0.6) | Hockings_1986_table_3:row2:col1, Hockings_1986_table_3:row2:col2, Hockings_1986_table_3:row2:col3, Hockings_1986_table_3:row2:col4, Hockings_1986_table_3:row2:col5 |
| El | `Q47` · kel | 197 | 1/h | 0.05472 | 1/s | 1/h | llm (0.6) | Hockings_1986_table_3:row13:col1, Hockings_1986_table_3:row13:col2, Hockings_1986_table_3:row13:col3, Hockings_1986_table_3:row13:col4, Hockings_1986_table_3:row13:col5 |
| The clearance of enalaprilat | `Q22` · CL | 4.46 | L/h | 1.239e-06 | m3/s | L/h | boundary (0.8) | Hockings_1986:other_prose |
| VD (L) | `Q61` · V | 100.0 | L | 0.1 | m3 | L | review_gapfill (0.7) | Faisal_2019:review |
| KA (1/h) | `Q49` · kabs | 5.0 | 1/h | 0.001389 | 1/s | 1/h | review_gapfill (0.7) | Faisal_2019:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| t,/2 (h) | Q57 | llm |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Y2' — extend the ontology if this is a real PK parameter (source ['Hockings_1986_table_3:row3:col1', 'Hockings_1986_table_3:row3:col2', 'Hockings_1986_table_3:row3:col3', 'Hockings_1986_table_3:row3:col4'])
- dropped duplicate Q900 ('Y3', value '40') — already have one for this compound
- dropped unlinked row (NIL): 'Y4' — extend the ontology if this is a real PK parameter (source ['Hockings_1986_table_3:row5:col1', 'Hockings_1986_table_3:row5:col2', 'Hockings_1986_table_3:row5:col3', 'Hockings_1986_table_3:row5:col4', 'Hockings_1986_table_3:row5:col5'])
- dropped unlinked row (NIL): 'YS' — extend the ontology if this is a real PK parameter (source ['Hockings_1986_table_3:row6:col1', 'Hockings_1986_table_3:row6:col2', 'Hockings_1986_table_3:row6:col3', 'Hockings_1986_table_3:row6:col4', 'Hockings_1986_table_3:row6:col5'])
- dropped duplicate Q900 ('Y6', value '105') — already have one for this compound
- dropped unlinked row (NIL): 'Y7' — extend the ontology if this is a real PK parameter (source ['Hockings_1986_table_3:row8:col1', 'Hockings_1986_table_3:row8:col2', 'Hockings_1986_table_3:row8:col3', 'Hockings_1986_table_3:row8:col4', 'Hockings_1986_table_3:row8:col5'])
- dropped duplicate Q900 ('Y8', value '54') — already have one for this compound
- dropped duplicate Q900 ('Y9', value '60') — already have one for this compound
- dropped unlinked row (NIL): 'E2' — extend the ontology if this is a real PK parameter (source ['Hockings_1986_table_3:row14:col1', 'Hockings_1986_table_3:row14:col2', 'Hockings_1986_table_3:row14:col3', 'Hockings_1986_table_3:row14:col4', 'Hockings_1986_table_3:row14:col5'])
- dropped unlinked row (NIL): 'E3' — extend the ontology if this is a real PK parameter (source ['Hockings_1986_table_3:row15:col1', 'Hockings_1986_table_3:row15:col2', 'Hockings_1986_table_3:row15:col3', 'Hockings_1986_table_3:row15:col4', 'Hockings_1986_table_3:row15:col5'])
- dropped duplicate Q900 ('E4', value '142') — already have one for this compound
- dropped unlinked row (NIL): 'E5' — extend the ontology if this is a real PK parameter (source ['Hockings_1986_table_3:row17:col1', 'Hockings_1986_table_3:row17:col2', 'Hockings_1986_table_3:row17:col3', 'Hockings_1986_table_3:row17:col4', 'Hockings_1986_table_3:row17:col5'])
- dropped duplicate Q900 ('E6', value '149') — already have one for this compound
- dropped duplicate Q900 ('E7', value '59') — already have one for this compound
- dropped unlinked row (NIL): 'E8' — extend the ontology if this is a real PK parameter (source ['Hockings_1986_table_3:row20:col1', 'Hockings_1986_table_3:row20:col2', 'Hockings_1986_table_3:row20:col3', 'Hockings_1986_table_3:row20:col4', 'Hockings_1986_table_3:row20:col5'])
- salvaged Q22 ('The clearance of enalaprilat'=4.46) from results prose — parameter table was unreadable
- implicit units: 'El' → 1/h (from the popPK convention: 'The paper does not state a unit for the elimination rate constant (kel). By convention in pharmacokinetics, first-order ')
- implicit units: 'The clearance of enalaprilat' → L/h (from the paper text: "The paper states: 'The clearance of enalaprilat was significantly less in the elderly being 4.46 ± 0.88 1 h11 compared w")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=enalaprilat
- topology: 1 first-order transfer(s) across 2 compounds → general_linear
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- row roles: 17 per-group rows of enalaprilat summary_statistic but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=noncompartmental; 18/18 row label(s) assigned, 0 linked by role; re-tagged parent→enalaprilat ×85
- gap-filled Q61 (V) from Faisal_2019's review values (primary lacked it)
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q49 (kabs) from Faisal_2019's review values (primary lacked it)

**Extraction notes:**
- transposed table tab_1: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell tab_1:row2:col5 = '38.5 27.9 31.5 40.8 77.0 27.4 27.4 46.2 27.4'
- companion parameter table 3 transcribed (84 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.167 (3/18 fields) | 15 |

<details><summary>15 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['enalapril', 'enalaprilat', 'hydrolysis']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[e2]` |  | 83 | only_one_extracted |
| `gpt-oss-120b` | `parameters[e5]` |  | 36 | only_one_extracted |
| `gpt-oss-120b` | `parameters[el]` |  | 197 | only_one_extracted |
| `gpt-oss-120b` | `parameters[el]` | 197 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 5.0 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t,/2]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t,/2]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[the clearance of enalaprilat]` | 4.46 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vd]` | 100.0 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[y1]` | 129 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[y2]` |  | 48 | only_one_extracted |
| `gpt-oss-120b` | `parameters[y3]` |  | 40 | only_one_extracted |
| `gpt-oss-120b` | `parameters[y4]` |  | 64 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ys]` |  | 64 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Hockings_1986:other_prose'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Hockings_1986_table_3:row13:col1', 'Hockings_1986_table_3:row13:col2', 'Hockings_1986_table_3:row13:col3', 'Hockings_1986_table_3:row13:col4', 'Hockings_1986_table_3:row13:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Faisal_2019:review'] |
| C5_dimension_Q57 | pass | [time] |  | ['tab_1:row2:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Faisal_2019:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 4.46 | ['Hockings_1986:other_prose'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 4.46 L/h | ['Hockings_1986:other_prose'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 100 L | ['Faisal_2019:review'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Benalapril%5D%20Enalapril_Hockings1986_reference&body=Drug%3A%20enalapril%0ARecord%3A%20Enalapril_Hockings1986_reference%0APaper%3A%20Hockings_1986%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_enalapril/Enalapril_Hockings1986_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 05:42 UTC</sub>
