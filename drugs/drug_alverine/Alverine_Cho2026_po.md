<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03A&quot;,&quot;href&quot;:&quot;atc/A03A.md&quot;},{&quot;label&quot;:&quot;alverine&quot;,&quot;href&quot;:&quot;drugs/drug_alverine/&quot;},{&quot;label&quot;:&quot;Cho_2026 \u00b7 po&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# alverine — `Alverine_Cho2026_po`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">mouse</span>

> The alverine record was rejected because the volume of distribution (Vd, 1.2590 L/kg) is reported per kilogram of body weight, a unit that could not be converted to SI, causing a dimension mismatch on a structural parameter.

<div class="pk-model-meta" hidden drug="alverine" model-id="Alverine_Cho2026_po" status="rejected" stale="false" population="mice" measured-compound="alverine" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Cho A, Jeong HC, Kim M, Cho I, Na HJ, Ko KC et al. Development of Integrated Parent-Metabolite Pharmacokinetic Model With Apparent Presystemic Metabolism to Characterize the Disposition of Alverine. CPT: pharmacometrics & systems pharmacology 15(9):e70342 (2026).
  ·  DOI: [10.1002/psp4.70342](https://doi.org/10.1002/psp4.70342)

## Population and dosing

**Population:** mice · condition healthy.

**Dosing:** 350, 5250 mg, iv, oral, single.

> **Species: mouse.** This record comes from an animal study (mouse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Tmax (h) | tmax | 0.2416 | h |
| Cmax (μmol/L) | Cmax | 0.3473 | μmol/L |
| AUClast (μmol·h/L) | AUClast | 0.3517 | μmol·h/L |
| Vd (L/kg) | V | 1.2590 | L/kg |
| t1/2 (h) | t1/2z | 0.1913 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.143). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">mouse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The alverine record was rejected because the volume of distribution (Vd, 1.2590 L/kg) is reported per kilogram of body weight, a unit that could not be converted to SI, causing a dimension mismatch on a structural parameter.**

The volume of distribution for alverine in mice is given as 1.2590 L/kg, a body-weight-normalized unit that could not be translated into an absolute volume in litres, so the parameter lacked a usable SI value and failed the dimension check. The record also contains only non-compartmental summary statistics (tmax 0.2416 h, Cmax 0.3473 μmol/L, AUClast 0.3517 μmol·h/L, t1/2z 0.1913 h) rather than fitted model parameters, and the metabolites M1, M2 and M3 are listed with zero compartments. A second reader disputed the dose compound and primary analyte fields and returned null for all five parameter values, so the findings on those fields are inconclusive. Extracted — alverine: tmax 0.242 h, Cmax 0.347 μmol/L, AUClast 0.352 μmol·h/L, V 1.26 L/kg, t1/2z 0.191 h.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has alverine, the second reading unknown; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Tmax (h) | `Q56` · tmax | 0.2416 | h | 869.8 | s | h | exact (1) | Cho_2026_table_1:row1:col2, Cho_2026_table_1:row1:col4, Cho_2026_table_1:row1:col6, Cho_2026_table_1:row1:col8 |
| Cmax (μmol/L) | `Q32` · Cmax | 0.3473 | μmol/L |  |  | (µM·ol)/l | exact (1) | Cho_2026_table_1:row2:col2, Cho_2026_table_1:row2:col4, Cho_2026_table_1:row2:col6, Cho_2026_table_1:row2:col8 |
| AUClast (μmol·h/L) | `Q74` · AUClast | 0.3517 | μmol·h/L |  |  | (h·µM·ol)/l | exact (1) | Cho_2026_table_1:row3:col2, Cho_2026_table_1:row3:col4, Cho_2026_table_1:row3:col6, Cho_2026_table_1:row3:col8 |
| Vd (L/kg) | `Q61` · V | 1.2590 | L/kg | 0.08813 | m3 | l/kg | exact (1) | Cho_2026_table_1:row6:col2, Cho_2026_table_1:row6:col4, Cho_2026_table_1:row6:col6, Cho_2026_table_1:row6:col8 |
| t1/2 (h) | `Q57` · t1/2z | 0.1913 | h | 688.7 | s | h | exact (1) | Cho_2026_table_1:row7:col4, Cho_2026_table_1:row7:col6, Cho_2026_table_1:row7:col8 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Route' — extend the ontology if this is a real PK parameter (source ['Cho_2026_table_1:row0:col2', 'Cho_2026_table_1:row0:col4', 'Cho_2026_table_1:row0:col6', 'Cho_2026_table_1:row0:col8'])
- unit_dimension_mismatch: 'Cmax (μmol/L)' → Q32 (unit '[substance] / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'AUClast (μmol·h/L)' → Q74 (unit '[substance] * [time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=alverine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 3 first-order transfer(s) across 4 compounds → general_linear
- template fit: none — 3 metabolites — the templates hold two (site hepatic: 'Beyond PBPK modeling, semi‐physiological population PK approaches have incorporated presystemic metabolite formation usi')
- status held at route_to_review — not promoted
- population split: 'po' subgroup of Cho_2026 (paper reports 7 populations: estimate, m1, m1 (4‐hydroxy alverine), m2 (4‐hydroxy alverine glucuronide), m3 (n‐desethyl alverine), parent (alverine), po)
- row roles (LLM): model_class=compartmental; 32/32 row label(s) assigned, 43 linked by role; re-tagged parent→M1 ×11, parent→M3 ×10, parent→M2 ×5, M1→parent ×3, M2→parent ×5, M3→parent ×3
- molar mass: no plausible PubChem entry for 'M3' ('N-desethyl alverine') — left in mass units
- molar mass: none of 1 PubChem candidate(s) is 'M2' (LLM) — left in mass units
- molar mass: none found for 'M2' — its concentrations stay mass-only
- molar mass: none found for 'M3' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell psp470342-tbl-0003:row3:col1 = 'h−1'
- unparsed cell psp470342-tbl-0003:row8:col1 = 'h−1'
- unparsed cell psp470342-tbl-0003:row9:col1 = 'h−1'
- unparsed cell psp470342-tbl-0003:row10:col1 = 'h−1'
- unparsed cell psp470342-tbl-0003:row12:col1 = 'h−1'
- unparsed cell psp470342-tbl-0003:row13:col1 = 'h−1'
- unparsed cell psp470342-tbl-0003:row14:col1 = 'h−1'
- unparsed cell psp470342-tbl-0003:row14:col3 = '8.82×103'
- unparsed cell psp470342-tbl-0003:row21:col1 = 'h−1'
- unparsed cell psp470342-tbl-0003:row22:col1 = 'h−1'
- unparsed cell psp470342-tbl-0003:row24:col2 = '8.1 × 10−5'
- unparsed cell psp470342-tbl-0003:row24:col4 = '5.5E‐05–0.00012'
- unparsed cell psp470342-tbl-0003:row25:col1 = 'h−1'
- unparsed cell psp470342-tbl-0003:row28:col1 = 'h−1'
- transposed table Cho_2026_table_1: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- companion parameter table 1 transcribed (42 record(s))
- companion parameter table S2 transcribed (3 record(s))
- LLM selected parameter table(s) 1, 3, S2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.143 (2/14 fields) | 12 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[auclast]` | 0.3517 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[auclast]` |  | 0.3517 | only_one_extracted |
| `gpt-oss:120b` | `parameters[cmax]` | 0.3473 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[cmax]` |  | 0.3473 | only_one_extracted |
| `gpt-oss:120b` | `parameters[t1/2]` | 0.1913 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[t1/2]` |  | 0.1913 | only_one_extracted |
| `gpt-oss:120b` | `parameters[tmax]` | 0.2416 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[tmax]` |  | 0.2416 | only_one_extracted |
| `gpt-oss:120b` | `parameters[vd]` | 1.2590 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[vd]` |  | 1.2590 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | alverine | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | alverine | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q32 | fail | [substance] / [length] ** 3 | μmol/L | ['Cho_2026_table_1:row2:col2', 'Cho_2026_table_1:row2:col4', 'Cho_2026_table_1:row2:col6', 'Cho_2026_table_1:row2:col8'] |
| C5_dimension_Q56 | pass | [time] |  | ['Cho_2026_table_1:row1:col2', 'Cho_2026_table_1:row1:col4', 'Cho_2026_table_1:row1:col6', 'Cho_2026_table_1:row1:col8'] |
| C5_dimension_Q57 | pass | [time] |  | ['Cho_2026_table_1:row7:col4', 'Cho_2026_table_1:row7:col6', 'Cho_2026_table_1:row7:col8'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Cho_2026_table_1:row6:col2', 'Cho_2026_table_1:row6:col4', 'Cho_2026_table_1:row6:col6', 'Cho_2026_table_1:row6:col8'] |
| C5_dimension_Q74 | fail | [substance] * [time] / [length] ** 3 | μmol·h/L | ['Cho_2026_table_1:row3:col2', 'Cho_2026_table_1:row3:col4', 'Cho_2026_table_1:row3:col6', 'Cho_2026_table_1:row3:col8'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 88.1 L | ['Cho_2026_table_1:row6:col2', 'Cho_2026_table_1:row6:col4', 'Cho_2026_table_1:row6:col6', 'Cho_2026_table_1:row6:col8'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Balverine%5D%20Alverine_Cho2026_po&body=Drug%3A%20alverine%0ARecord%3A%20Alverine_Cho2026_po%0APaper%3A%20Cho_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_alverine/Alverine_Cho2026_po%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-04 12:23 UTC</sub>
