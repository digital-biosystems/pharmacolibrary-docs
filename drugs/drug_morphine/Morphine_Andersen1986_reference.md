<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;morphine&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/&quot;},{&quot;label&quot;:&quot;Andersen_1986 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Morphine_Bragg1995_reference&quot;,&quot;label&quot;:&quot;Bragg_1995_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/Morphine_Bragg1995_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Venkatasubramanian2014_reference&quot;,&quot;label&quot;:&quot;Venkatasubramanian_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/Morphine_Venkatasubramanian2014_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Andersen1986_reference&quot;,&quot;label&quot;:&quot;Andersen_1986_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/Morphine_Andersen1986_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Morphine_Juul2016_reference&quot;,&quot;label&quot;:&quot;Juul_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/Morphine_Juul2016_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Romberg2004_reference&quot;,&quot;label&quot;:&quot;Romberg_2004_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/Morphine_Romberg2004_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Bardol2025_reference&quot;,&quot;label&quot;:&quot;Bardol_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/Morphine_Bardol2025_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# morphine — `Morphine_Andersen1986_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (goat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">goat</span>

> The morphine model's terminal half-life check failed and the intercompartmental clearance parameter was left at library defaults.

<div class="pk-model-meta" hidden drug="morphine" model-id="Morphine_Andersen1986_reference" status="needs_review" stale="false" population="goats" measured-compound="morphine" parameterization="mechanistic" topology="2C"></div>

## Citation
Andersen HB, Christensen B, Findlay JW, Jansen JA. Pharmacokinetics of intravenous, intrathecal and epidural morphine and fentanyl in the goat. Acta anaesthesiologica Scandinavica 30(5):393–399 (1986).
  ·  DOI: [10.1111/j.1399-6576.1986.tb02437.x](https://doi.org/10.1111/j.1399-6576.1986.tb02437.x)

## Population and dosing

**Population:** goats · condition healthy.

**Dosing:** 0.05, 0.1, 0.2, 1, 4, 8 mg, iv, intrathecal, epidural, single.

> **Species: goat.** This record comes from an animal study (goat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_morphine/Morphine_Andersen1986_reference/Morphine_Andersen1986_reference.svg" alt="Morphine_Andersen1986_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| V₁ (l/kg) | V1 | 0.77 | l/kg |
| V₂ (l/kg) | V2 | 1.61 | l/kg |
| V₃ (l/kg) | V3 | 5.26 | l/kg |
| t₁/₂α (min) | t1/2α | 2.10 | min |
| t₁/₂β (min) | t1/2β | 22.36 | min |
| t₁/₂γ (min) | t1/2γ | 127 | min |
| Cl total (ml/min/kg) | CL | 83.7 | ml/min/kg |
| θ CLD 0.88 (15) 0.91 [0.60, 1.4] | Q | 0.91 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="Animal study (goat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">goat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The morphine model's terminal half-life check failed and the intercompartmental clearance parameter was left at library defaults.**

Simulating the model produced a terminal half-life ratio of 55388.4901 relative to the expected value, far exceeding the acceptable tolerance. Additionally, the intercompartmental clearance parameter k12 was not explicitly estimated in the paper and was instead replaced with library placeholder values. This combination of a structural mismatch in elimination kinetics and unsupported parameter defaults prevented the record from being accepted. Extracted — morphine: V1 0.77 l/kg, V2 1.61 l/kg, V3 5.26 l/kg, t1/2α 2.1 min, t1/2β 22.4 min, t1/2γ 127 min, CL 83.7 ml/min/kg, Q 0.91 L/h.

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| V₁ (l/kg) | `Q63` · V1 | 0.77 | l/kg | 0.0539 | m3 | l/kg | exact (1) | Andersen_1986_table_p2_1:row0:col1, Andersen_1986_table_p2_1:row1:col1, Andersen_1986_table_p2_1:row2:col1, Andersen_1986_table_p2_1:row4:col1, Andersen_1986_table_p2_1:row5:col1, Andersen_1986_table_p2_1:row6:col1 |
| V₂ (l/kg) | `Q64` · V2 | 1.61 | l/kg | 0.1127 | m3 | l/kg | exact (1) | Andersen_1986_table_p2_1:row0:col2, Andersen_1986_table_p2_1:row1:col2, Andersen_1986_table_p2_1:row2:col2, Andersen_1986_table_p2_1:row4:col2, Andersen_1986_table_p2_1:row5:col2, Andersen_1986_table_p2_1:row6:col2 |
| V₃ (l/kg) | `Q77` · V3 | 5.26 | l/kg | 0.3682 | m3 | l/kg | exact (1) | Andersen_1986_table_p2_1:row0:col3, Andersen_1986_table_p2_1:row1:col3, Andersen_1986_table_p2_1:row2:col3, Andersen_1986_table_p2_1:row4:col3, Andersen_1986_table_p2_1:row5:col3, Andersen_1986_table_p2_1:row6:col3 |
| t₁/₂α (min) | `Q59` · t1/2α | 2.10 | min | 126 | s | min | half_life_rule (0.95) | Andersen_1986_table_p2_1:row0:col4, Andersen_1986_table_p2_1:row1:col4, Andersen_1986_table_p2_1:row2:col4, Andersen_1986_table_p2_1:row4:col4, Andersen_1986_table_p2_1:row5:col4, Andersen_1986_table_p2_1:row6:col4 |
| t₁/₂β (min) | `Q60` · t1/2β | 22.36 | min | 1342 | s | min | half_life_rule (0.95) | Andersen_1986_table_p2_1:row0:col5, Andersen_1986_table_p2_1:row1:col5, Andersen_1986_table_p2_1:row2:col5, Andersen_1986_table_p2_1:row4:col5, Andersen_1986_table_p2_1:row5:col5, Andersen_1986_table_p2_1:row6:col5 |
| t₁/₂γ (min) | `Q89` · t1/2γ | 127 | min | 7620 | s | min | half_life_rule (0.95) | Andersen_1986_table_p2_1:row0:col6, Andersen_1986_table_p2_1:row1:col6, Andersen_1986_table_p2_1:row2:col6, Andersen_1986_table_p2_1:row4:col6, Andersen_1986_table_p2_1:row5:col6, Andersen_1986_table_p2_1:row6:col6 |
| Cl total (ml/min/kg) | `Q22` · CL | 83.7 | ml/min/kg | 9.765e-05 | m3/s | ml/(min·kg) | llm_confirmed (0.6) | Andersen_1986_table_p2_1:row0:col7, Andersen_1986_table_p2_1:row1:col7, Andersen_1986_table_p2_1:row2:col7, Andersen_1986_table_p2_1:row4:col7, Andersen_1986_table_p2_1:row5:col7, Andersen_1986_table_p2_1:row6:col7 |
| θ CLD 0.88 (15) 0.91 [0.60, 1.4] | `Q30` · Q | 0.91 | L/h | 2.528e-07 | m3/s | L/h | review_gapfill (0.7) | Elkomy_2016:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['k12']

**Interpretation flags:**
- column 'j' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'k' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'o' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=morphine
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- gap-filled Q30 (Q) from Elkomy_2016's review values (primary lacked it)

**Extraction notes:**
- transposed table Andersen_1986_table_p2_1: logical view retains original source coordinates

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (11/11 fields) | none |

_All readers agree on the compared fields of this record._

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | pass | 1 | 1.24 | 1.24 | 0.25 | reported t½β |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  |  |  | ['Andersen_1986_table_p2_1:row0:col7', 'Andersen_1986_table_p2_1:row1:col7', 'Andersen_1986_table_p2_1:row2:col7', 'Andersen_1986_table_p2_1:row4:col7', 'Andersen_1986_table_p2_1:row5:col7', 'Andersen_1986_table_p2_1:row6:col7'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  |  |  | ['Elkomy_2016:review'] |
| C5_dimension_Q59 | pass | [time] |  |  |  | ['Andersen_1986_table_p2_1:row0:col4', 'Andersen_1986_table_p2_1:row1:col4', 'Andersen_1986_table_p2_1:row2:col4', 'Andersen_1986_table_p2_1:row4:col4', 'Andersen_1986_table_p2_1:row5:col4', 'Andersen_1986_table_p2_1:row6:col4'] |
| C5_dimension_Q60 | pass | [time] |  |  |  | ['Andersen_1986_table_p2_1:row0:col5', 'Andersen_1986_table_p2_1:row1:col5', 'Andersen_1986_table_p2_1:row2:col5', 'Andersen_1986_table_p2_1:row4:col5', 'Andersen_1986_table_p2_1:row5:col5', 'Andersen_1986_table_p2_1:row6:col5'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  |  |  | ['Andersen_1986_table_p2_1:row0:col1', 'Andersen_1986_table_p2_1:row1:col1', 'Andersen_1986_table_p2_1:row2:col1', 'Andersen_1986_table_p2_1:row4:col1', 'Andersen_1986_table_p2_1:row5:col1', 'Andersen_1986_table_p2_1:row6:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  |  |  | ['Andersen_1986_table_p2_1:row0:col2', 'Andersen_1986_table_p2_1:row1:col2', 'Andersen_1986_table_p2_1:row2:col2', 'Andersen_1986_table_p2_1:row4:col2', 'Andersen_1986_table_p2_1:row5:col2', 'Andersen_1986_table_p2_1:row6:col2'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  |  |  | ['Andersen_1986_table_p2_1:row0:col3', 'Andersen_1986_table_p2_1:row1:col3', 'Andersen_1986_table_p2_1:row2:col3', 'Andersen_1986_table_p2_1:row4:col3', 'Andersen_1986_table_p2_1:row5:col3', 'Andersen_1986_table_p2_1:row6:col3'] |
| C5_dimension_Q89 | pass | [time] |  |  |  | ['Andersen_1986_table_p2_1:row0:col6', 'Andersen_1986_table_p2_1:row1:col6', 'Andersen_1986_table_p2_1:row2:col6', 'Andersen_1986_table_p2_1:row4:col6', 'Andersen_1986_table_p2_1:row5:col6', 'Andersen_1986_table_p2_1:row6:col6'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 83.7 |  |  | ['Andersen_1986_table_p2_1:row0:col7', 'Andersen_1986_table_p2_1:row1:col7', 'Andersen_1986_table_p2_1:row2:col7', 'Andersen_1986_table_p2_1:row4:col7', 'Andersen_1986_table_p2_1:row5:col7', 'Andersen_1986_table_p2_1:row6:col7'] |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 352 L/h |  |  | ['Andersen_1986_table_p2_1:row0:col7', 'Andersen_1986_table_p2_1:row1:col7', 'Andersen_1986_table_p2_1:row2:col7', 'Andersen_1986_table_p2_1:row4:col7', 'Andersen_1986_table_p2_1:row5:col7', 'Andersen_1986_table_p2_1:row6:col7'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 53.9 L |  |  | ['Andersen_1986_table_p2_1:row0:col1', 'Andersen_1986_table_p2_1:row1:col1', 'Andersen_1986_table_p2_1:row2:col1', 'Andersen_1986_table_p2_1:row4:col1', 'Andersen_1986_table_p2_1:row5:col1', 'Andersen_1986_table_p2_1:row6:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 113 L |  |  | ['Andersen_1986_table_p2_1:row0:col2', 'Andersen_1986_table_p2_1:row1:col2', 'Andersen_1986_table_p2_1:row2:col2', 'Andersen_1986_table_p2_1:row4:col2', 'Andersen_1986_table_p2_1:row5:col2', 'Andersen_1986_table_p2_1:row6:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_output_variable |  | pass | C_central (measured=morphine) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 4 scholar param(s) emitted or defaulted | 4 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C |  | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable |  | LLM adjudication → deterministic rule |
| X1_cross_check |  | skipped |  |  |  | no second reading of this record |
| T1_t_half_beta | reference | skipped |  | 5.539e+04 |  | non-numeric value |
| T1_t_half_beta | reference | skipped |  | 5.539e+04 |  | non-numeric value |
| T1_t_half_beta | reference | fail | 1 | 5.539e+04 | 5.539e+04 | h→SI vs simulated h |
| T1_t_half_terminal | reference | skipped |  | 5.539e+04 |  | non-numeric value |
| T1_t_half_terminal | reference | skipped |  | 5.539e+04 |  | non-numeric value |

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
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 0.05 mg infusion over 10 min, single dose. Doses in the paper: 0.05, 0.1, 0.2, 1, 4, 8 mg.

<dbs-fmusim paramsurl="drugs/drug_morphine/Morphine_Andersen1986_reference/Morphine_Andersen1986_reference_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_morphine/Morphine_Andersen1986_reference/Morphine_Andersen1986_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C` · parameters `Morphine_Andersen1986_reference_params.json` · controls `Morphine_Andersen1986_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmorphine%5D%20Morphine_Andersen1986_reference&body=Drug%3A%20morphine%0ARecord%3A%20Morphine_Andersen1986_reference%0APaper%3A%20Andersen_1986%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_morphine/Morphine_Andersen1986_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-20 07:11 UTC</sub>
