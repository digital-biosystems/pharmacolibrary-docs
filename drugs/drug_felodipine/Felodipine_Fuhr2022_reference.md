<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07F&quot;,&quot;href&quot;:&quot;atc/C07F.md&quot;},{&quot;label&quot;:&quot;felodipine&quot;,&quot;href&quot;:&quot;drugs/drug_felodipine/&quot;},{&quot;label&quot;:&quot;Fuhr_2022 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# felodipine — `Felodipine_Fuhr2022_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Only clearance was extracted — no volume.

<div class="pk-model-meta" hidden drug="felodipine" model-id="Felodipine_Fuhr2022_reference" status="needs_review" stale="false" population="healthy and hypertensive adults" measured-compound="felodipine" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Fuhr LM, Marok FZ, Mees M, Mahfoud F, Selzer D, Lehr T. A Physiologically Based Pharmacokinetic and Pharmacodynamic Model of the CYP3A4 Substrate Felodipine for Drug-Drug Interaction Modeling. Pharmaceutics 14(7) (2022).
  ·  DOI: [10.3390/pharmaceutics14071474](https://doi.org/10.3390/pharmaceutics14071474)

## Population and dosing

**Population:** healthy and hypertensive adults · condition healthy and hypertension · age group adult.

**Dosing:** 1, 3, 5, 40 mg, iv, oral, single.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted, plus 3 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| MW | MW | 384.25 | g/mol |
| fu, plasma | fu | 0.36 |  |
| kcat_cyp3a4 | kcat_cyp3a4 | 250.44 |  |
| CL-hepatic | CL | 2.76 | L/h |
| theta_q1_cyp3a4 | theta_q1_cyp3a4 | 2.81 |  |
| theta_cl_cyp3a4 | theta_cl_cyp3a4 | 35.74 |  |
| tlag (h) | tlag | 0.4 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.438). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only clearance was extracted — no volume.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. A reported unit could not be converted (MW), so that value has no SI equivalent. Extracted — felodipine: MW 384 g/mol, fu 0.36, tlag 0.4 h; dehydrofelodipine: CL 2.76 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of cellular permeability: this record has none, the second reading 0.42; it also differs on 8 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| MW | `Q374` · MW | 384.25 | g/mol |  |  | g/mol | exact (1) | pharmaceutics-14-01474-t002:row2:col2, pharmaceutics-14-01474-t002:row2:col3, pharmaceutics-14-01474-t002:row18:col2, pharmaceutics-14-01474-t002:row18:col3 |
| fu, plasma | `Q46` · fu | 0.36 |  |  |  |  | llm_confirmed (0.6) | pharmaceutics-14-01474-t002:row3:col2, pharmaceutics-14-01474-t002:row3:col3, pharmaceutics-14-01474-t002:row20:col2 |
| kcat_cyp3a4 | `Q900` · kcat_cyp3a4 | 250.44 |  |  |  |  |  | pharmaceutics-14-01474-t002:row10:col1, pharmaceutics-14-01474-t002:row10:col2 |
| CL-hepatic | `Q22` · CL | 2.76 | L/h | 7.667e-07 | m3/s | L/h | exact (1) | pharmaceutics-14-01474-t002:row26:col1, pharmaceutics-14-01474-t002:row26:col2 |
| theta_q1_cyp3a4 | `Q900` · theta_q1_cyp3a4 | 2.81 |  |  |  |  |  | pharmaceutics-14-01474-t002:row9:col2, pharmaceutics-14-01474-t002:row9:col3 |
| theta_cl_cyp3a4 | `Q900` · theta_cl_cyp3a4 | 35.74 |  |  |  |  |  | pharmaceutics-14-01474-t002:row25:col1, pharmaceutics-14-01474-t002:row25:col2 |
| tlag (h) | `Q83` · tlag | 0.4 | h | 1440 | s | h | review_gapfill (0.7) | Kim_2014:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'literature' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'unit' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Solubility (pH)' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-14-01474-t002:row4:col2', 'pharmaceutics-14-01474-t002:row21:col2', 'pharmaceutics-14-01474-t002:row21:col3'])
- dropped unlinked row (NIL): 'Solubility-tabER (pH)' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-14-01474-t002:row5:col2'])
- dropped unlinked row (NIL): 'logP' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-14-01474-t002:row6:col2', 'pharmaceutics-14-01474-t002:row6:col3', 'pharmaceutics-14-01474-t002:row22:col2', 'pharmaceutics-14-01474-t002:row22:col3'])
- dropped unlinked row (NIL): 'GFR fraction' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-14-01474-t002:row8:col2', 'pharmaceutics-14-01474-t002:row24:col2'])
- covariate level 'kcat-CYP3A4' → Q900:kcat_cyp3a4 = 250.44 (linear_fractional on the model)
- dropped PD-category row 'Weibull time-tab' → Q343 (weibull_shape, category G14) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['pharmaceutics-14-01474-t002:row11:col2'])
- dropped PD-category row 'Weibull shape-tab' → Q343 (weibull_shape, category G14) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['pharmaceutics-14-01474-t002:row12:col2'])
- dropped PD-category row 'Weibull time-tabER' → Q343 (weibull_shape, category G14) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['pharmaceutics-14-01474-t002:row13:col2'])
- dropped PD-category row 'Weibull shape-tabER' → Q343 (weibull_shape, category G14) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['pharmaceutics-14-01474-t002:row14:col2'])
- dropped unlinked row (NIL): 'Cellular permeability' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-14-01474-t002:row16:col2', 'pharmaceutics-14-01474-t002:row28:col2'])
- dropped unlinked row (NIL): 'pKa (base)' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-14-01474-t002:row19:col2', 'pharmaceutics-14-01474-t002:row19:col3'])
- covariate effect for Q1 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'MW' → g/mol (from the popPK convention: 'Molecular weight (MW) is conventionally expressed in grams per mole (g/mol). The value 384.25 is consistent with the mol')
- implicit units: 'CL-hepatic' → L/h (from the popPK convention: 'Hepatic clearance (CL-hepatic) in population pharmacokinetic models is conventionally expressed in liters per hour (L/h)')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=felodipine
- template fit: none — pbpk model — not a compartmental parent–metabolite model (site presystemic: 'The final model describes the metabolism of felodipine to dehydrofelodipine by CYP3A4, sufficiently capturing the first-')
- row roles (LLM): model_class=pbpk; 16/16 row label(s) assigned, 4 linked by role; re-tagged parent→dehydrofelodipine ×4
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- gap-filled Q83 (tlag) from Kim_2014's review values (primary lacked it)

**Extraction notes:**
- unparsed cell pharmaceutics-14-01474-t002:row2:col4 = '[78]'
- unparsed cell pharmaceutics-14-01474-t002:row3:col4 = '[79]'
- unparsed cell pharmaceutics-14-01474-t002:row4:col3 = '1.2 (7)7.15 (6.5)14.3 (7.1)19.7 (7)'
- unparsed cell pharmaceutics-14-01474-t002:row4:col4 = '[80,81,82]'
- unparsed cell pharmaceutics-14-01474-t002:row6:col4 = '[78,81,82,83]'
- unparsed cell pharmaceutics-14-01474-t002:row9:col4 = '[9,81,85]'
- unparsed cell pharmaceutics-14-01474-t002:row9:col5 = 'CYP3A4 Michaelis–Menten constant'
- unparsed cell pharmaceutics-14-01474-t002:row10:col5 = 'CYP3A4 catalytic rate constant'
- unparsed cell pharmaceutics-14-01474-t002:row12:col5 = 'Tablet dissolution time (50% dissolved)'
- unparsed cell pharmaceutics-14-01474-t002:row14:col5 = 'Extended-release tablet dissolution time (50% dissolved)'
- unparsed cell pharmaceutics-14-01474-t002:row18:col4 = '[86]'
- unparsed cell pharmaceutics-14-01474-t002:row19:col4 = '[86]'
- unparsed cell pharmaceutics-14-01474-t002:row21:col4 = '[86]'
- unparsed cell pharmaceutics-14-01474-t002:row22:col4 = '[86]'
- unparsed cell pharmaceutics-14-01474-t002:row25:col5 = 'CYP3A4-mediated clearance'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.438 (7/16 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cellular permeability]` |  | 0.42 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl-hepatic]` |  | 2.76 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl-hepatic]` | 2.76 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[gfr fraction]` |  | 1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[kcat_cyp3a4]` | 250.44 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_cyp3a4]` | 35.74 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q22_cyp3a4]` |  | 35.74 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q305_cyp3a4]` |  | 250.44 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tlag]` | 0.4 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['pharmaceutics-14-01474-t002:row26:col1', 'pharmaceutics-14-01474-t002:row26:col2'] |
| C5_dimension_Q374 | pass | [mass] / [substance] |  | ['pharmaceutics-14-01474-t002:row2:col2', 'pharmaceutics-14-01474-t002:row2:col3', 'pharmaceutics-14-01474-t002:row18:col2', 'pharmaceutics-14-01474-t002:row18:col3'] |
| C5_dimension_Q83 | pass | [time] |  | ['Kim_2014:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 2.76 | ['pharmaceutics-14-01474-t002:row26:col1', 'pharmaceutics-14-01474-t002:row26:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 2.76 L/h | ['pharmaceutics-14-01474-t002:row26:col1', 'pharmaceutics-14-01474-t002:row26:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfelodipine%5D%20Felodipine_Fuhr2022_reference&body=Drug%3A%20felodipine%0ARecord%3A%20Felodipine_Fuhr2022_reference%0APaper%3A%20Fuhr_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_felodipine/Felodipine_Fuhr2022_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 03:12 UTC</sub>
