<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03A&quot;,&quot;href&quot;:&quot;atc/R03A.md&quot;},{&quot;label&quot;:&quot;salbutamol&quot;,&quot;href&quot;:&quot;drugs/drug_salbutamol/&quot;},{&quot;label&quot;:&quot;Valenzuela_2006 \u00b7 original_dataset_estimate_2&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Salbutamol_Courlet2022_reference&quot;,&quot;label&quot;:&quot;Courlet_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_salbutamol/Salbutamol_Courlet2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Salbutamol_Marques2024v2_estimate&quot;,&quot;label&quot;:&quot;Marques_2024_2_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_salbutamol/Salbutamol_Marques2024v2_estimate.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Salbutamol_Walsh2023_reference&quot;,&quot;label&quot;:&quot;Walsh_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_salbutamol/Salbutamol_Walsh2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Salbutamol_Heuberger2018_reference&quot;,&quot;label&quot;:&quot;Heuberger_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_salbutamol/Salbutamol_Heuberger2018_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Boger_2019_FEV1&quot;,&quot;label&quot;:&quot;Boger_2019 \u00b7 FEV1&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_salbutamol/pd_Boger_2019_FEV1.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Venkatasubramanian_2020_TPR&quot;,&quot;label&quot;:&quot;Venkatasubramanian_2020 \u00b7 TPR&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_salbutamol/pd_Venkatasubramanian_2020_TPR.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# salbutamol — `Salbutamol_Valenzuela2006_original_dataset_estimate_2`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q66 unit mM/h ([length] / [time]) vs [mass] / [time]; Q1 unit mM ([length]) vs [mass] / [length] ** 3; Q307 unit 1/h (1 / [time]) vs [mass] / [time].

<div class="pk-model-meta" hidden drug="salbutamol" model-id="Salbutamol_Valenzuela2006_original_dataset_estimate_2" status="rejected" stale="false" population="rats" measured-compound="salbutamol sulphate" parameterization="mechanistic" topology="1C"></div>

## Citation
Valenzuela B, López-Pintor E, Pérez-Ruixo JJ, Nácher A, Martín-Villodre A, Casabó VG. Modelling intestinal absorption of salbutamol sulphate in rats. International journal of pharmaceutics 314(1):21–30 (2006).
  ·  DOI: [10.1016/j.ijpharm.2006.01.019](https://doi.org/10.1016/j.ijpharm.2006.01.019)

## Population and dosing

**Population:** rats · condition healthy.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| FR (%) | FR | 79.3 | % |
| ka (1/h) | kabs | 0.636 | 1/h |
| Vmax (mM/h)a | Vmax | 0.678 | mM/h |
| Km (mM)a | Km | 0.494 | mM |
| k0 (1/h) | R1 | 18.96 | 1/h |
| CL | CL | 46.77 | L/h |
| Vd | V | 195.75 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q66 unit mM/h ([length] / [time]) vs [mass] / [time]; Q1 unit mM ([length]) vs [mass] / [length] ** 3; Q307 unit 1/h (1 / [time]) vs [mass] / [time].**

A reported unit could not be converted (Vmax, Km and R1), so that value has no SI equivalent. Extracted — salbutamol: FR 79.3 %, kabs 0.636 1/h, Vmax 0.678 mM/h, Km 0.494 mM, R1 19 1/h, CL 46.8 L/h, V 196 L.

Independently confirmed by `gpt-oss-120b`.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| FR (%) | `Q43` · FR | 79.3 | % | 0.793 |  | % | exact (1) | Valenzuela_2006_table_p6_2:row1:col1 |
| ka (1/h) | `Q49` · kabs | 0.636 | 1/h | 0.0001767 | 1/s | 1/h | exact (1) | Valenzuela_2006_table_p6_2:row2:col1 |
| Vmax (mM/h)a | `Q66` · Vmax | 0.678 | mM/h |  |  | mM/h | llm_confirmed (0.6) | Valenzuela_2006_table_p6_2:row3:col1 |
| Km (mM)a | `Q1` · Km | 0.494 | mM |  |  | mM | llm_confirmed (0.6) | Valenzuela_2006_table_p6_2:row4:col1 |
| k0 (1/h) | `Q307` · R1 | 18.96 | 1/h |  |  | 1/h | exact (1) | Valenzuela_2006_table_p6_2:row5:col1 |
| CL | `Q22` · CL | 46.77 | L/h | 1.299e-05 | m3/s | L/h | review_gapfill (0.7) | Boger_2019:review |
| Vd | `Q61` · V | 195.75 | L | 0.1958 | m3 | L | review_gapfill (0.7) | Marques_2024:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ηka' routed out of structural estimates ('Interindividual variability (%)')
- table section iiv: 'ηFR' routed out of structural estimates ('Interindividual variability (%)')
- table section residual_error: 'Exponential error' routed out of structural estimates ('Residual variability (%)')
- unit_dimension_mismatch: 'Vmax (mM/h)a' → Q66 (unit '[length] / [time]' vs ontology '[mass] / [time]') — route to review
- unit_dimension_mismatch: 'Km (mM)a' → Q1 (unit '[length]' vs ontology '[mass] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'k0 (1/h)' → Q307 (unit '1 / [time]' vs ontology '[mass] / [time]') — route to review
- unit_dimension_mismatch: "V'max (mM/h)a" → Q66 (unit '[length] / [time]' vs ontology '[mass] / [time]') — route to review
- dropped duplicate Q66 ("V'max (mM/h)a", value '0.642') — already have one for this compound
- unit_dimension_mismatch: "K'm (mM)a" → Q1 (unit '[length]' vs ontology '[mass] / [length] ** 3') — route to review
- dropped duplicate Q1 ("K'm (mM)a", value '0.333') — already have one for this compound
- dropped PD-category row 'ID50 (mM)' → Q322 (IC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Valenzuela_2006_table_p6_2:row8:col1'])
- dropped unlinked row (NIL): 'INF' — extend the ontology if this is a real PK parameter (source ['Valenzuela_2006_table_p6_2:row9:col1'])
- unit_dimension_mismatch: 'IM50 (mM)' → Q1 (unit '[length]' vs ontology '[mass] / [length] ** 3') — route to review
- dropped duplicate Q1 ('IM50 (mM)', value '0.074') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=salbutamol sulphate
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- population split: 'original dataset estimate' subgroup of Valenzuela_2006 (paper reports 2 populations: original dataset / estimate, original dataset estimate)
- gap-filled Q22 (CL) from Boger_2019's review values (primary lacked it)
- gap-filled Q61 (V) from Marques_2024's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table Valenzuela_2006_table_2: unbound_uncertainty
- table Valenzuela_2006_table_2: ragged_grid
- table Valenzuela_2006_table_2: unparsed_numeric_cell
- companion parameter table 2 transcribed (70 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (9/9 fields) | none |

_All readers agree on the compared fields of this record._

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
| C5_dimension_Q1 | fail | [mass] / [length] ** 3 | mM ([length]) | ['Valenzuela_2006_table_p6_2:row4:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Boger_2019:review'] |
| C5_dimension_Q307 | fail | [mass] / [time] | 1/h (1 / [time]) | ['Valenzuela_2006_table_p6_2:row5:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Valenzuela_2006_table_p6_2:row2:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Marques_2024:review'] |
| C5_dimension_Q66 | fail | [mass] / [time] | mM/h ([length] / [time]) | ['Valenzuela_2006_table_p6_2:row3:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 46.77 | ['Boger_2019:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 46.8 L/h | ['Boger_2019:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 196 L | ['Marques_2024:review'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsalbutamol%5D%20Salbutamol_Valenzuela2006_original_dataset_estimate_2&body=Drug%3A%20salbutamol%0ARecord%3A%20Salbutamol_Valenzuela2006_original_dataset_estimate_2%0APaper%3A%20Valenzuela_2006%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_salbutamol/Salbutamol_Valenzuela2006_original_dataset_estimate_2%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-20 03:24 UTC</sub>
