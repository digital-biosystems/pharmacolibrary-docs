<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D05A&quot;,&quot;href&quot;:&quot;atc/D05A.md&quot;},{&quot;label&quot;:&quot;roflumilast&quot;,&quot;href&quot;:&quot;drugs/drug_roflumilast/&quot;},{&quot;label&quot;:&quot;Plock_2017 \u00b7 0_85_mg&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# roflumilast — `Roflumilast_Plock2017_0_85_mg`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

> Only clearance was extracted — no volume.

<div class="pk-model-meta" hidden drug="roflumilast" model-id="Roflumilast_Plock2017_0_85_mg" status="needs_review" stale="false" population="db/db mice" measured-compound="roflumilast and roflumilast-N-oxide" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Plock N, Vollert S, Mayer M, Hanauer G, Lahu G. Pharmacokinetic/Pharmacodynamic Modeling of the PDE4 Inhibitor TAK-648 in Type 2 Diabetes: Early Translational Approaches for Human Dose Prediction. Clinical and translational science 10(3):185–193 (2017).
  ·  DOI: [10.1111/cts.12436](https://doi.org/10.1111/cts.12436)

## Population and dosing

**Population:** db/db mice · condition type 2 diabetes model.

**Dosed compound ≠ measured compound:** dosed roflumilast, roflumilast-N-oxide, and TAK-648, measured roflumilast and roflumilast-N-oxide.

> **Species: mouse.** This record comes from an animal study (mouse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cmax | Cmax | 11.71 | μg/L |
| AUClast | AUClast | 92.66 | μg*h/L |
| AUC∞ | AUC∞ | 93.84 | μg*h/L |
| t1/2z | t1/2z | 14.53 | h |
| typical clearance | CL | 2.97 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.143). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only clearance was extracted — no volume.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. A reported unit could not be converted (Cmax, AUClast and AUC∞), so that value has no SI equivalent. None of the extracted parameters is roflumilast's own; they describe TAK-648 and roflumilast and roflumilast-N-oxide. Extracted — TAK-648: Cmax 11.7 μg/L, AUClast 92.7 μg*h/L, AUC∞ 93.8 μg*h/L, t1/2z 14.5 h; roflumilast and roflumilast-N-oxide: CL 2.97 L/h.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on which compound was dosed: this record has roflumilast, roflumilast-N-oxide, and TAK-648, the second reading unknown; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cmax | `Q32` · Cmax | 11.71 | μg/L |  |  | μg/L | exact (1) | Plock_2017_table_4:row1:col6 |
| AUClast | `Q74` · AUClast | 92.66 | μg*h/L |  |  | μg*h/L | exact (1) | Plock_2017_table_4:row2:col6 |
| AUC∞ | `Q17` · AUC∞ | 93.84 | μg*h/L |  |  | μg*h/L | exact (1) | Plock_2017_table_4:row3:col6 |
| t1/2z | `Q57` · t1/2z | 14.53 | h | 5.231e+04 | s | h | exact (1) | Plock_2017_table_4:row4:col6 |
| typical clearance | `Q22` · CL | 2.97 | L/h | 8.25e-07 | m3/s | L/h | boundary (0.8) | Plock_2017:other_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'n = 5' (Cmax)
- unit_dimension_unknown: 'n = 5' (AUClast)
- unit_dimension_unknown: 'n = 5' (AUC∞)
- unit_dimension_unknown: 'n = 5' (t1/2z)
- salvaged Q22 ('typical clearance'=2.97) from results prose — parameter table was unreadable
- implicit units: 'Cmax' → μg/L (from the paper text: 'The text reports mean maximum TAK-648 concentrations (Cmax) in μg/L.')
- implicit units: 'AUClast' → μg*h/L (from the paper text: 'The text reports AUC values in μg*h/L.')
- implicit units: 'AUC∞' → μg*h/L (from the paper text: 'The text reports AUC values in μg*h/L.')
- implicit units: 't1/2z' → h (from the popPK convention: 'No unit is stated for t1/2z in the supplied text. Half-lives are commonly reported in hours in population PK, and 14.53 ')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=roflumilast and roflumilast-N-oxide
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at "Needs review" — not promoted
- population split: '0.85 mg (n = 5)' subgroup of Plock_2017 (paper reports 8 populations: 0.05 mg (n = 6), 0.15 mg (n = 6), 0.35 mg (n = 6), 0.7 mg (n = 6), 0.85 mg (n = 5), estimate, roflumilast, roflumilast n‐oxide)
- row roles (LLM): model_class=compartmental; 20/20 row label(s) assigned, 0 linked by role; re-tagged parent→TAK-648 ×25, parent→roflumilast and roflumilast-N-oxide ×2, parent→roflumilast ×3, roflumilast→roflumilast-N-oxide ×4, parent→roflumilast-N-oxide ×1, roflumilast→TAK-648 ×3
- molar mass: no plausible PubChem entry for 'roflumilast and roflumilast-N-oxide' ('roflumilast and roflumilast-N-oxide') — left in mass units
- molar mass: none found for 'roflumilast and roflumilast-N-oxide' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell cts12436-tbl-0002:row7:col3 = '11.8a'
- unparsed cell cts12436-tbl-0002:row8:col3 = '30.2a'
- unparsed cell cts12436-tbl-0002:row9:col3 = '44.5a'
- unparsed cell cts12436-tbl-0002:row11:col3 = '29.3a'
- companion parameter table 1 transcribed (26 record(s))
- transposed table Plock_2017_table_4: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- companion parameter table 4 transcribed (20 record(s))
- LLM selected parameter table(s) 1, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.143 (2/14 fields) | 12 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[aucinf]` |  | 93.84 | only_one_extracted |
| `qwen3.8-27b` | `parameters[aucinf]` | 93.84 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[auclast]` |  | 92.66 | only_one_extracted |
| `qwen3.8-27b` | `parameters[auclast]` | 92.66 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[clearance]` |  | 2.97 | only_one_extracted |
| `qwen3.8-27b` | `parameters[cmax]` |  | 11.71 | only_one_extracted |
| `qwen3.8-27b` | `parameters[cmax]` | 11.71 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[t1/2z]` |  | 14.53 | only_one_extracted |
| `qwen3.8-27b` | `parameters[t1/2z]` | 14.53 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[typical clearance]` | 2.97 |  | only_one_extracted |
| `qwen3.8-27b` | `screen.dose_compound` | roflumilast, roflumilast-N-oxide, and TAK-648 | unknown | mismatch |
| `qwen3.8-27b` | `screen.primary_analyte` | roflumilast and roflumilast-N-oxide | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | fail |  |  |  |  |  |
| C2_base_Q22 | pass | 2.97 | 2.97 | 1 | 0.05 | footnote reference category |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  |  |  | ['Plock_2017_table_4:row3:col6'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  |  |  | ['Plock_2017_table_4:row1:col6'] |
| C5_dimension_Q57 | pass | [time] |  |  |  | ['Plock_2017_table_4:row4:col6'] |
| C5_dimension_Q74 | pass | [mass] * [time] / [length] ** 3 |  |  |  | ['Plock_2017_table_4:row2:col6'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 2.97 |  |  | ['Plock_2017:other_prose'] |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 2.97 L/h |  |  | ['Plock_2017:other_prose'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Broflumilast%5D%20Roflumilast_Plock2017_0_85_mg&body=Drug%3A%20roflumilast%0ARecord%3A%20Roflumilast_Plock2017_0_85_mg%0APaper%3A%20Plock_2017%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_roflumilast/Roflumilast_Plock2017_0_85_mg%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 15:17 UTC</sub>
