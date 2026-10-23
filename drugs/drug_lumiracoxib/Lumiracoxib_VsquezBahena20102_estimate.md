<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;lumiracoxib&quot;,&quot;href&quot;:&quot;drugs/drug_lumiracoxib/&quot;},{&quot;label&quot;:&quot;V\u00e1squez-Bahena_2010_2 \u00b7 estimate&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# lumiracoxib — `Lumiracoxib_VsquezBahena20102_estimate`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span>

> Lumiracoxib's volume of distribution parameter, 39 L, is physically impossible for a rat.

<div class="pk-model-meta" hidden drug="lumiracoxib" model-id="Lumiracoxib_VsquezBahena20102_estimate" status="rejected" stale="false" population="female Wistar rats with carrageenan-induced hyperalgesia" measured-compound="lumiracoxib" parameterization="mechanistic" topology="1C"></div>

## Citation
Vásquez-Bahena DA, Salazar-Morales UE, Ortiz MI, Castañeda-Hernández G, Trocóniz IF. Pharmacokinetic-pharmacodynamic modelling of the analgesic effects of lumiracoxib, a selective inhibitor of cyclooxygenase-2, in rats. British journal of pharmacology 159(1):176–187 (2010).
  ·  DOI: [10.1111/j.1476-5381.2009.00508.x](https://doi.org/10.1111/j.1476-5381.2009.00508.x)

## Population and dosing

**Population:** female Wistar rats with carrageenan-induced hyperalgesia · condition carrageenan-induced hyperalgesia · age group adult.

**Dosing:** 70, 210, 700, 2100 mg, oral, single.

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
| b (h -1 ) | equation variable | 0.33 | h -1 |
| kD_COX-2 (h -1 ) | KD | 0.89 | h -1 |
| LT0 (s) | ktr | 14.3 | s |
| CL (L•h -1 ) | CL | 0.16 | L/h |
| Vc (L) | V | 39 | L |
| Q (L•h -1 ) | Q | 0.42 | L/h |
| kA (h -1 ) | kabs | 92 | h -1 |
| F rel | Frel | 50 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.556). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Lumiracoxib's volume of distribution parameter, 39 L, is physically impossible for a rat.**

The listed central compartment volume is 39 L, a magnitude incompatible with the small body mass of a female Wistar rat. This extreme value renders the pharmacokinetic model structurally invalid. A second reader also failed to match the reported equilibrium dissociation constant of 0.89 h-1 to the expected drug-target affinity parameter. Extracted — lumiracoxib: KD 0.89 h -1, ktr 14.3 s, CL 0.16 L/h, V 39 L, Q 0.42 L/h, kabs 92 h -1, Frel 50.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has lumiracoxib, the second reading unknown; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| b (h -1 ) | `Q900` · equation variable | 0.33 | h -1 |  |  | 1/h | llm (0.6) | tab_2:row5:col3 |
| kD_COX-2 (h -1 ) | `Q331` · KD | 0.89 | h -1 |  |  | 1/h | llm (0.6) | tab_2:row6:col3 |
| LT0 (s) | `Q306` · ktr | 14.3 | s |  |  | s | llm (0.6) | tab_2:row8:col3, tab_2:row8:col4 |
| CL (L•h -1 ) | `Q22` · CL | 0.16 | L/h | 4.444e-08 | m3/s | L/h | exact (1) | Vásquez-Bahena_2010_2_table_1:row0:col6 |
| Vc (L) | `Q61` · V | 39 | L | 0.039 | m3 | l | exact (1) | Vásquez-Bahena_2010_2_table_1:row1:col8 |
| Q (L•h -1 ) | `Q30` · Q | 0.42 | L/h | 1.167e-07 | m3/s | L/h | exact (1) | Vásquez-Bahena_2010_2_table_1:row2:col6 |
| kA (h -1 ) | `Q49` · kabs | 92 | h -1 | 0.02556 | 1/s | 1/h | exact (1) | Vásquez-Bahena_2010_2_table_1:row4:col8 |
| F rel | `Q87` · Frel | 50 |  |  |  |  | exact (1) | Vásquez-Bahena_2010_2_table_1:row6:col6, Vásquez-Bahena_2010_2_table_1:row6:col9 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'Additive (mg•mL -1 )' routed out of structural estimates ('Residual error')
- table section residual_error: 'Proportional (%)' routed out of structural estimates ('Residual error')
- dropped unlinked row (NIL): 'kS_COX-2 (COX-2•h -1 ) a' — extend the ontology if this is a real PK parameter (source ['tab_2:row2:col3'])
- dropped unlinked row (NIL): 'A (COX-2•h -2 )' — extend the ontology if this is a real PK parameter (source ['tab_2:row3:col3'])
- dropped unlinked row (NIL): 'a' — extend the ontology if this is a real PK parameter (source ['tab_2:row4:col3'])
- unit_dimension_mismatch: 'kD_COX-2 (h -1 )' → Q331 (unit '1 / [time]' vs ontology '[mass] / [length] ** 3') — route to review
- unit_dimension_unknown: 'mg•mL -1' (KD)
- dropped duplicate Q331 ('KD (mg•mL -1 )', value '0.24') — already have one for this compound
- unit_dimension_mismatch: 'LT0 (s)' → Q306 (unit '[time]' vs ontology '1 / [time]') — route to review
- unit_dimension_unknown: 'L•h -1' (CL)
- unit_dimension_unknown: 'L•h -1' (Q)
- implicit units: 'CL (L•h -1 )' → L/h (from the popPK convention: 'The paper defines CL as apparent plasma clearance. The specific numerical entry in the provided table does not include a')
- implicit units: 'Q (L•h -1 )' → L/h (from the popPK convention: 'The paper defines Q as inter-compartmental clearance. The specific numerical entry in the provided table does not includ')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=lumiracoxib
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'Vc (L)' is the general volume)
- status held at route_to_review — not promoted
- population split: 'estimate' subgroup of Vásquez-Bahena_2010_2 (paper reports 3 populations: estimate, experiment i, experiment i and ii)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Vásquez-Bahena_2010_2_table_1:row6:col1 = '= -1'
- unparsed cell Vásquez-Bahena_2010_2_table_1:row6:col8 = 'D50 (mg•kg -1 ) 4.3 (43) IMAX 0.67 (6)'
- companion parameter table 1 transcribed (13 record(s))
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.556 (10/18 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[a]` |  | 1.3 | only_one_extracted |
| `gpt-oss-120b` | `parameters[b].parameter_id` | Q900 | Q47 | mismatch |
| `gpt-oss-120b` | `parameters[ka]` | 92 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[kd]` |  | 0.24 | only_one_extracted |
| `gpt-oss-120b` | `parameters[kd_cox-2].parameter_id` | Q331 | Q330 | mismatch |
| `gpt-oss-120b` | `parameters[lt0].parameter_id` | Q306 | Q83 | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | lumiracoxib | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | lumiracoxib | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Vásquez-Bahena_2010_2_table_1:row0:col6'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Vásquez-Bahena_2010_2_table_1:row2:col6'] |
| C5_dimension_Q306 | fail | [time] | s | ['tab_2:row8:col3', 'tab_2:row8:col4'] |
| C5_dimension_Q331 | fail | 1 / [time] | h -1 | ['tab_2:row6:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Vásquez-Bahena_2010_2_table_1:row4:col8'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Vásquez-Bahena_2010_2_table_1:row1:col8'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.16 | ['Vásquez-Bahena_2010_2_table_1:row0:col6'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.16 L/h | ['Vásquez-Bahena_2010_2_table_1:row0:col6'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 39 L | ['Vásquez-Bahena_2010_2_table_1:row1:col8'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blumiracoxib%5D%20Lumiracoxib_VsquezBahena20102_estimate&body=Drug%3A%20lumiracoxib%0ARecord%3A%20Lumiracoxib_VsquezBahena20102_estimate%0APaper%3A%20V%C3%A1squez-Bahena_2010_2%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_lumiracoxib/Lumiracoxib_VsquezBahena20102_estimate%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 01:54 UTC</sub>
