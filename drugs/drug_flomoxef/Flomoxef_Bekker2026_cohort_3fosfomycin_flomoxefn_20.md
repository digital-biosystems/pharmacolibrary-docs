<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;flomoxef&quot;,&quot;href&quot;:&quot;drugs/drug_flomoxef/&quot;},{&quot;label&quot;:&quot;Bekker_2026 \u00b7 cohort_3fosfomycin_flomoxefn_20&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Flomoxef_Kusumoto2024_reference&quot;,&quot;label&quot;:&quot;Kusumoto_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_flomoxef/Flomoxef_Kusumoto2024_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# flomoxef — `Flomoxef_Bekker2026_cohort_3fosfomycin_flomoxefn_20`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> This paper's disposition core is incomplete; ae  has no unit.

<div class="pk-model-meta" hidden drug="flomoxef" model-id="Flomoxef_Bekker2026_cohort_3fosfomycin_flomoxefn_20" status="needs_review" stale="false" population="neonates with suspected sepsis" measured-compound="flomoxef" parameterization="mechanistic" topology="1C"></div>

## Citation
Bekker A, Panjasawatwong N, Hill LF, Stohr W, Walker AS, Ellis S et al. Pharmacokinetics and safety of fosfomycin and flomoxef administered as part of neonatal sepsis treatment (NeoSep1 Part 1). Antimicrobial agents and chemotherapy 70(2):e0112625 (2026).
  ·  DOI: [10.1128/aac.01126-25](https://doi.org/10.1128/aac.01126-25)

## Population and dosing

**Population:** neonates with suspected sepsis · condition sepsis · age group neonate.

**Dosing:** 7000, 10500 mg, iv, multiple, every 12 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AE related to fosfomycin | Ae | 6 |  |
| CL (L/h) | CL | 2.97 | L/h |
| Vd (L) | V | 3.27 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.125). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**This paper's disposition core is incomplete; ae  has no unit.**

A volume and a clearance/elimination estimate from this paper are needed to build its model. Review values from other papers (Kusumoto_2024) cannot stand in for this paper's evidence. Without a unit the value cannot be converted, so the model cannot use it. Extracted — flomoxef: Ae 6, CL 2.97 L/h, V 3.27 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has flomoxef, the second reading unknown; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AE related to fosfomycin | `Q91` · Ae | 6 |  |  |  |  | boundary (0.8) | T3:row13:col3 |
| CL (L/h) | `Q22` · CL | 2.97 | L/h | 8.25e-07 | m3/s | L/h | review_gapfill (0.7) | Kusumoto_2024:review |
| Vd (L) | `Q61` · V | 3.27 | L | 0.00327 | m3 | L | review_gapfill (0.7) | Kusumoto_2024:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Neonates experiencing at least one adverse event (AE)' — extend the ontology if this is a real PK parameter (source ['T3:row2:col3'])
- dropped unlinked row (NIL): 'Total AEs' — extend the ontology if this is a real PK parameter (source ['T3:row3:col3'])
- dropped unlinked row (NIL): 'Neonates experiencing at least one serious adverse event (SAE)' — extend the ontology if this is a real PK parameter (source ['T3:row4:col3'])
- dropped unlinked row (NIL): 'Total SAEs' — extend the ontology if this is a real PK parameter (source ['T3:row5:col3'])
- dropped unlinked row (NIL): 'Grade 1' — extend the ontology if this is a real PK parameter (source ['T3:row7:col3'])
- dropped unlinked row (NIL): 'Grade 2' — extend the ontology if this is a real PK parameter (source ['T3:row8:col3'])
- dropped unlinked row (NIL): 'Grade 3' — extend the ontology if this is a real PK parameter (source ['T3:row9:col3'])
- dropped unlinked row (NIL): 'Grade 4' — extend the ontology if this is a real PK parameter (source ['T3:row10:col3'])
- dropped unlinked row (NIL): 'Grade 5 (death)' — extend the ontology if this is a real PK parameter (source ['T3:row11:col3'])
- dropped unlinked row (NIL): 'AE related to flomoxef' — extend the ontology if this is a real PK parameter (source ['T3:row14:col3'])
- table mostly unlinked (10/11 table-cell rows NIL) — likely the wrong table was located, not 1 genuinely-missing ontology parameter(s); route_to_review instead of building a model from the residual linked cell(s)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=flomoxef
- status held at route_to_review — not promoted
- population split: 'cohort 3fosfomycin/ flomoxefn = 20' subgroup of Bekker_2026 (paper reports 3 populations: cohort 1fosfomycin/ amikacinn = 21, cohort 2flomoxef/ amikacinn = 21, cohort 3fosfomycin/ flomoxefn = 20)
- gap-filled Q22 (CL) from Kusumoto_2024's review values (primary lacked it)
- gap-filled Q61 (V) from Kusumoto_2024's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- companion parameter table 2 transcribed (2 record(s))
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.125 (1/8 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [] | [['none', 'none', 'none']] | mismatch |
| `gpt-oss-120b` | `parameters[ae related to fosfomycin]` | 6 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl]` | 2.97 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[neonates experiencing at least one adverse event]` |  | 18 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vd]` | 3.27 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | flomoxef | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | flomoxef | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Kusumoto_2024:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Kusumoto_2024:review'] |
| C5_unit_missing_Q91 | fail | [mass] |  | ['T3:row13:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 2.97 | ['Kusumoto_2024:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 2.97 L/h | ['Kusumoto_2024:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 3.27 L | ['Kusumoto_2024:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bflomoxef%5D%20Flomoxef_Bekker2026_cohort_3fosfomycin_flomoxefn_20&body=Drug%3A%20flomoxef%0ARecord%3A%20Flomoxef_Bekker2026_cohort_3fosfomycin_flomoxefn_20%0APaper%3A%20Bekker_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_flomoxef/Flomoxef_Bekker2026_cohort_3fosfomycin_flomoxefn_20%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 11:06 UTC</sub>
