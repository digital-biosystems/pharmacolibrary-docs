<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01G&quot;,&quot;href&quot;:&quot;atc/J01G.md&quot;},{&quot;label&quot;:&quot;netilmicin&quot;,&quot;href&quot;:&quot;drugs/drug_netilmicin/&quot;},{&quot;label&quot;:&quot;Winslade_1987_2 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Netilmicin_Sherwin2008_reference&quot;,&quot;label&quot;:&quot;Sherwin_2008_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_netilmicin/Netilmicin_Sherwin2008_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# netilmicin — `Netilmicin_Winslade1987v2_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span>

> The reviewer's verdict (Needs review, 2026-09-28 14:39 UTC) predates the latest extraction (2026-10-07 11:36 UTC); the status shown comes from the current checks. No value for netilmicin's volume of distribution — the 1 extracted parameter describes tobramycin and netilmicin, not netilmicin.

<div class="pk-model-meta" hidden drug="netilmicin" model-id="Netilmicin_Winslade1987v2_reference" status="needs_review" stale="true" population="normal volunteers" measured-compound="tobramycin and netilmicin" parameterization="mechanistic" topology="1C"></div>

## Citation
Winslade NE, Adelman MH, Evans EJ, Schentag JJ. Single-dose accumulation pharmacokinetics of tobramycin and netilmicin in normal volunteers. Antimicrobial agents and chemotherapy 31(4):605–609 (1987).
  ·  DOI: [10.1128/AAC.31.4.605](https://doi.org/10.1128/AAC.31.4.605)

## Population and dosing

**Population:** normal volunteers · condition healthy · age group adult · n = 11.

**Dosing:** 70 mg, iv, single.

**Dosed compound ≠ measured compound:** dosed netilmicin, measured tobramycin and netilmicin.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| total body clearance for netilmicin | CL | 48 | ml/min |
| Vd | V | 28.0 | liters |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.077). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No value for netilmicin's volume of distribution — the 1 extracted parameter describes tobramycin and netilmicin, not netilmicin.**

The model was built, but netilmicin's volume of distribution had no value, so a library placeholder stood in and the model was held back rather than published with an invented number. Extracted — tobramycin and netilmicin: CL 48 ml/min.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has netilmicin, the second reading unknown; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| total body clearance for netilmicin | `Q22` · CL | 48 | ml/min | 8e-07 | m3/s | L/h | boundary (0.8) | Winslade_1987_2:discussion_prose |
| Vd | `Q61` · V | 28.0 | liters | 0.028 | m3 | L | review_gapfill (0.7) | Meyers_1977:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Subject' — extend the ontology if this is a real PK parameter (source ['tab_2:row0:col1', 'tab_2:row0:col6'])
- dropped unlinked row (NIL): '1' — extend the ontology if this is a real PK parameter (source ['tab_2:row1:col1', 'tab_2:row1:col2', 'tab_2:row1:col3', 'tab_2:row1:col4', 'tab_2:row1:col5', 'tab_2:row1:col6', 'tab_2:row1:col7', 'tab_2:row1:col8'])
- dropped unlinked row (NIL): '2' — extend the ontology if this is a real PK parameter (source ['tab_2:row2:col1', 'tab_2:row2:col2', 'tab_2:row2:col3', 'tab_2:row2:col4', 'tab_2:row2:col5', 'tab_2:row2:col6', 'tab_2:row2:col7', 'tab_2:row2:col8'])
- dropped unlinked row (NIL): '3' — extend the ontology if this is a real PK parameter (source ['tab_2:row3:col1', 'tab_2:row3:col2', 'tab_2:row3:col3', 'tab_2:row3:col4', 'tab_2:row3:col5', 'tab_2:row3:col6', 'tab_2:row3:col7', 'tab_2:row3:col8'])
- dropped unlinked row (NIL): '4' — extend the ontology if this is a real PK parameter (source ['tab_2:row4:col1', 'tab_2:row4:col2', 'tab_2:row4:col3', 'tab_2:row4:col4', 'tab_2:row4:col5', 'tab_2:row4:col6', 'tab_2:row4:col7', 'tab_2:row4:col8'])
- dropped unlinked row (NIL): '5' — extend the ontology if this is a real PK parameter (source ['tab_2:row5:col1', 'tab_2:row5:col2', 'tab_2:row5:col3', 'tab_2:row5:col4', 'tab_2:row5:col5', 'tab_2:row5:col6', 'tab_2:row5:col7', 'tab_2:row5:col8'])
- dropped unlinked row (NIL): '6' — extend the ontology if this is a real PK parameter (source ['tab_2:row6:col1', 'tab_2:row6:col2', 'tab_2:row6:col3', 'tab_2:row6:col4', 'tab_2:row6:col5', 'tab_2:row6:col6', 'tab_2:row6:col7', 'tab_2:row6:col8'])
- dropped unlinked row (NIL): '7' — extend the ontology if this is a real PK parameter (source ['tab_2:row7:col1', 'tab_2:row7:col2', 'tab_2:row7:col3', 'tab_2:row7:col4', 'tab_2:row7:col5', 'tab_2:row7:col6', 'tab_2:row7:col7', 'tab_2:row7:col8'])
- dropped unlinked row (NIL): '8' — extend the ontology if this is a real PK parameter (source ['tab_2:row8:col1', 'tab_2:row8:col2', 'tab_2:row8:col3', 'tab_2:row8:col4', 'tab_2:row8:col5', 'tab_2:row8:col6', 'tab_2:row8:col7', 'tab_2:row8:col8'])
- dropped unlinked row (NIL): '9' — extend the ontology if this is a real PK parameter (source ['tab_2:row9:col1', 'tab_2:row9:col2', 'tab_2:row9:col3', 'tab_2:row9:col4', 'tab_2:row9:col5', 'tab_2:row9:col6', 'tab_2:row9:col7', 'tab_2:row9:col8'])
- dropped unlinked row (NIL): '10' — extend the ontology if this is a real PK parameter (source ['tab_2:row10:col1', 'tab_2:row10:col2', 'tab_2:row10:col3', 'tab_2:row10:col4', 'tab_2:row10:col5', 'tab_2:row10:col6', 'tab_2:row10:col7', 'tab_2:row10:col8'])
- dropped unlinked row (NIL): '11' — extend the ontology if this is a real PK parameter (source ['tab_2:row11:col1', 'tab_2:row11:col2', 'tab_2:row11:col3', 'tab_2:row11:col4', 'tab_2:row11:col5', 'tab_2:row11:col6', 'tab_2:row11:col7', 'tab_2:row11:col8'])
- dropped unlinked row (NIL): 'Mean' — extend the ontology if this is a real PK parameter (source ['tab_2:row12:col2', 'tab_2:row12:col5', 'tab_2:row12:col6', 'tab_2:row12:col7'])
- salvaged Q22 ('total body clearance for netilmicin'=48) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=tobramycin and netilmicin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- gap-filled Q61 (V) from Meyers_1977's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell tab_2:row0:col3 = "k12 (h-')"
- unparsed cell tab_2:row0:col4 = 'k2l (h-1)'
- unparsed cell tab_2:row0:col5 = 'klo (h-1)'
- unparsed cell tab_2:row12:col1 = '0.148b'
- unparsed cell tab_2:row12:col3 = '0.06480b'
- unparsed cell tab_2:row12:col4 = '0.00591b'
- unparsed cell tab_2:row12:col8 = '490.9b'
- unparsed cell tab_2:row13:col1 = '± 0.041'
- unparsed cell tab_2:row13:col2 = '± 1.448'
- unparsed cell tab_2:row13:col3 = '± 0.02247'
- unparsed cell tab_2:row13:col4 = '± 0.00171'
- unparsed cell tab_2:row13:col5 = '± 0.059'
- unparsed cell tab_2:row13:col6 = '± 65.96'
- unparsed cell tab_2:row13:col7 = '± 10.9'
- unparsed cell tab_2:row13:col8 = '± 398.7'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.077 (1/13 fields) | 12 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [] | [['none', 'none', 'none']] | mismatch |
| `gpt-oss-120b` | `parameters[k12]` |  | 0.06506 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k2l]` |  | 0.00492 | only_one_extracted |
| `gpt-oss-120b` | `parameters[klo]` |  | 0.280 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2r (h) clb]` |  | 160.71 | only_one_extracted |
| `gpt-oss-120b` | `parameters[total body clearance for netilmicin]` | 48 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v,,]` |  | 1.828 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v,]` |  | 2.014 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1]` |  | 0.108 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vd]` | 28.0 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | netilmicin | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | netilmicin | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Meyers_1977:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 48 | ['Winslade_1987_2:discussion_prose'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 2.88 L/h | ['Winslade_1987_2:discussion_prose'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 28 L | ['Meyers_1977:review'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  | no covariate effects in record |
| T3_param_coverage |  | pass | 1 scholar param(s) emitted or defaulted | 1 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified | LLM adjudication → deterministic rule |
| T1_t_half_beta | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnetilmicin%5D%20Netilmicin_Winslade1987v2_reference&body=Drug%3A%20netilmicin%0ARecord%3A%20Netilmicin_Winslade1987v2_reference%0APaper%3A%20Winslade_1987_2%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_netilmicin/Netilmicin_Winslade1987v2_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 11:36 UTC</sub>
