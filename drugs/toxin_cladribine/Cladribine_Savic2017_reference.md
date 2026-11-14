<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Cladribine&quot;,&quot;href&quot;:&quot;drugs/toxin_cladribine/&quot;},{&quot;label&quot;:&quot;Savic_2017 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cladribine_AlessiSeverini1995_reference&quot;,&quot;label&quot;:&quot;Alessi-Severini_1995_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_cladribine/Cladribine_AlessiSeverini1995_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cladribine_Juliusson2011_reference&quot;,&quot;label&quot;:&quot;Juliusson_2011_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_cladribine/Cladribine_Juliusson2011_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cladribine_Lindemalm2005_population_average_estimate&quot;,&quot;label&quot;:&quot;Lindemalm_2005_population_average_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_cladribine/Cladribine_Lindemalm2005_population_average_estimate.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cladribine_Liliemark1997_reference&quot;,&quot;label&quot;:&quot;Liliemark_1997_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_cladribine/Cladribine_Liliemark1997_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Cladribine — `Cladribine_Savic2017_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Cladribine" model-id="Cladribine_Savic2017_reference" status="rejected" stale="false" population="patients with multiple sclerosis" measured-compound="Cladribine" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Savic RM, Novakovic AM, Ekblom M, Munafo A, Karlsson MO. Population Pharmacokinetics of Cladribine in Patients with Multiple Sclerosis. Clinical pharmacokinetics 56(10):1245-1253 (2017).
  ·  DOI: [10.1007/s40262-017-0516-6](https://doi.org/10.1007/s40262-017-0516-6)

## Population and dosing

**Population:** patients with multiple sclerosis · condition multiple sclerosis · age group adult · n = 173.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 14 extracted, plus 1 covariate effect.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| CLR coefficientb (typical patient with CLCR = 6.31), L/hc | CLR | 3.52 | L/hc | 22.2 |  |
| CLNR, L/h | CLNR | 23.4 | L/h |  | 0.00574 (None% RSE) |
| Central volume, L | V1 | 44.0 | L |  |  |
| Intercompartmental Q3, L/h | Q3 | 14.3 | L/h |  |  |
| Intercompartmental Q4, L/h | Q | 53.7 | L/h |  |  |
| Peripheral volume V3, L | V3 | 347 | L |  | 0.0365 (None% RSE) |
| Absorption rate constant, h−1 | kabs | 1.08 | h−1 |  | 0.102 (None% RSE) |
| Bioavailability | Fab | 0.456 |  |  |  |
| Mean transit time (fed state), h | MTT | 0.910 | h |  |  |
| Number of transit compartments | n_transit | 2.24 |  |  |  |
| CLRe (Vmax), µg/h | Vmax | 0.00280 | µg/h |  |  |
| CLRe (KM), ng/L | Km | 0.0114 | ng/L |  |  |
| Apparent hepatic CL, L/hf | CLH | 653 |  |  |  |
| Apparent central volume V, Lf | V | 365 |  |  | 0.209 (None% RSE) |
| theta_q83_category | theta_q83_category | 0.319 |  |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.792). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the links between molecules: this record has cladribine → 2-chloroadenine (cade) (metabolite), the second reading none; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CLR coefficientb (typical patient with CLCR = 6.31), L/hc | `Q26` · CLR | 3.52 | L/hc |  |  | l/(h·c) | 22.2 | llm_confirmed (0.6) | Savic_2017_table_4:row1:col1 |  |
| CLNR, L/h | `Q79` · CLNR | 23.4 | L/h | 6.5e-06 | m3/s | l/h |  | exact (1) | Savic_2017_table_4:row2:col1 | 0.00574 (None% RSE) |
| Central volume, L | `Q63` · V1 | 44.0 | L | 0.044 | m3 | l |  | exact (1) | Savic_2017_table_4:row3:col1 |  |
| Intercompartmental Q3, L/h | `Q308` · Q3 | 14.3 | L/h | 3.972e-06 | m3/s | l/h |  | llm_confirmed (0.6) | Savic_2017_table_4:row4:col1 |  |
| Intercompartmental Q4, L/h | `Q30` · Q | 53.7 | L/h | 1.492e-05 | m3/s | l/h |  | llm (0.6) | Savic_2017_table_4:row5:col1 |  |
| Peripheral volume V3, L | `Q77` · V3 | 347 | L | 0.347 | m3 | l |  | llm_corrected (0.6) | Savic_2017_table_4:row6:col1 | 0.0365 (None% RSE) |
| Absorption rate constant, h−1 | `Q49` · kabs | 1.08 | h−1 | 0.0003 | 1/s | 1/h |  | exact (1) | Savic_2017_table_4:row8:col1 | 0.102 (None% RSE) |
| Bioavailability | `Q40` · Fab | 0.456 |  |  |  |  |  | exact (1) | Savic_2017_table_4:row10:col1 |  |
| Mean transit time (fed state), h | `Q81` · MTT | 0.910 | h | 3276 | s | h |  | llm_confirmed (0.6) | Savic_2017_table_4:row13:col1 |  |
| Number of transit compartments | `Q311` · n_transit | 2.24 |  | 2.24 |  |  |  | exact (1) | Savic_2017_table_4:row14:col1 |  |
| CLRe (Vmax), µg/h | `Q66` · Vmax | 0.00280 | µg/h | 7.778e-16 | kg/s | µg/h |  | llm_confirmed (0.6) | Savic_2017_table_4:row28:col1 |  |
| CLRe (KM), ng/L | `Q1` · Km | 0.0114 | ng/L | 1.14e-11 | kg/m3 | ng/l |  | boundary_llm_dim_refused (0.8) | Savic_2017_table_4:row29:col1 |  |
| Apparent hepatic CL, L/hf | `Q25` · CLH | 653 |  |  |  |  |  | llm_corrected (0.6) | Savic_2017_table_4:row30:col1 |  |
| Apparent central volume V, Lf | `Q61` · V | 365 |  |  |  |  |  | llm_corrected (0.6) | Savic_2017_table_4:row31:col1 | 0.209 (None% RSE) |
| theta_q83_category | `Q900` · theta_q83_category | 0.319 |  |  |  |  |  |  | Savic_2017_table_4:row12:col1 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table representations disagree for 'CLR coefficientb (typical patient with CLCR = 6.31), L/hc'; source reconciliation required
- table representations disagree for 'CLNR, L/h'; source reconciliation required
- table representations disagree for 'Central volume, L'; source reconciliation required
- table representations disagree for 'Intercompartmental Q3, L/h'; source reconciliation required
- table representations disagree for 'Intercompartmental Q4, L/h'; source reconciliation required
- table representations disagree for 'Peripheral volume V3, L'; source reconciliation required
- table representations disagree for 'Peripheral volume V4, L'; source reconciliation required
- table representations disagree for 'Absorption rate constant, h−1'; source reconciliation required
- table representations disagree for 'Absorption rate constant (unknown/fed state), h−1'; source reconciliation required
- table representations disagree for 'Bioavailability'; source reconciliation required
- table representations disagree for 'Bioavailability (unknown/fed state)'; source reconciliation required
- table representations disagree for 'Lag time for phase III, h'; source reconciliation required
- table representations disagree for 'Mean transit time (fed state), h'; source reconciliation required
- table representations disagree for 'Number of transit compartments'; source reconciliation required
- table representations disagree for 'Fold increase in CLNR in the presence of IFNβ-1a'; source reconciliation required
- table representations disagree for 'BSVCLNR'; source reconciliation required
- table representations disagree for 'BSVV'; source reconciliation required
- table representations disagree for 'BSVQ3,Q4,V3,V4'; source reconciliation required
- table representations disagree for 'BSVKa'; source reconciliation required
- table representations disagree for 'BSVFd'; source reconciliation required
- table representations disagree for 'BSVResidual variability'; source reconciliation required
- table representations disagree for 'RUV plasma (intravenous), %'; source reconciliation required
- table representations disagree for 'RUV plasma (oral), %'; source reconciliation required
- table representations disagree for 'RUV plasma (oral; studies 26127, 26486), %'; source reconciliation required
- table representations disagree for 'RUV plasma (oral; study 25643), %'; source reconciliation required
- table representations disagree for 'RUV urine, %'; source reconciliation required
- table representations disagree for 'CLRe (Vmax), µg/h'; source reconciliation required
- table representations disagree for 'CLRe (KM), ng/L'; source reconciliation required
- table representations disagree for 'Apparent hepatic CL, L/hf'; source reconciliation required
- table representations disagree for 'Apparent central volume V, Lf'; source reconciliation required
- table representations disagree for 'RUV plasma, %'; source reconciliation required
- table representations disagree for 'RUV plasma (study 25643), %'; source reconciliation required
- unit_dimension_mismatch: 'CLR coefficientb (typical patient with CLCR = 6.31), L/hc' → Q26 (unit '[length] ** 2 * [time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped unlinked row (NIL): 'Peripheral volume V4, L' — extend the ontology if this is a real PK parameter (source ['Savic_2017_table_4:row7:col1'])
- dropped duplicate Q49 ('Absorption rate constant (unknown/fed state), h−1', value '1.03') — already have one for this compound
- dropped duplicate Q79 ('Fold increase in CLNR in the presence of IFNβ-1a', value '1.21') — already have one for this compound
- NIL: refused to back-fill base 'CLR' from footnote/prose loose number None (source ['Tab4:footnote']); the table cell was unparseable — needs review
- covariate effect for Q83 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Cladribine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 1 first-order transfer(s) across 2 compounds → general_linear
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [0]
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=compartmental; 0/34 row label(s) assigned, 0 linked by role
- molar mass: none found for '2-chloroadenine (CAde)' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table Savic_2017_table_4: unbound_uncertainty
- table Tab4: representations disagree; selected evidence retained, not merged
- LLM selected parameter table(s) 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.792 (19/24 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.links` | [['cladribine', '2-chloroadenine (cade)', 'metabolite']] | [] | mismatch |
| `gpt-oss:120b` | `model.parameterization` | mechanistic | apparent | mismatch |
| `gpt-oss:120b` | `parameters[apparent central volume v, lf].parameter_id` | Q61 | Q290 | mismatch |
| `gpt-oss:120b` | `parameters[fold increase in clnr in the presence of ifnβ-1a]` |  | 1.21 | only_one_extracted |
| `gpt-oss:120b` | `parameters[peripheral volume v4]` |  | 89.5 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 14 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 |  | ['Savic_2017_table_4:row29:col1'] |
| C5_dimension_Q26 | fail | [length] ** 3 / [time] | L/hc ([length] ** 2 * [time]) | ['Savic_2017_table_4:row1:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Savic_2017_table_4:row5:col1'] |
| C5_dimension_Q308 | pass | [length] ** 3 / [time] |  | ['Savic_2017_table_4:row4:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Savic_2017_table_4:row8:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Savic_2017_table_4:row3:col1'] |
| C5_dimension_Q66 | pass | [mass] / [time] |  | ['Savic_2017_table_4:row28:col1'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  | ['Savic_2017_table_4:row6:col1'] |
| C5_dimension_Q79 | pass | [length] ** 3 / [time] |  | ['Savic_2017_table_4:row2:col1'] |
| C5_dimension_Q81 | pass | [time] |  | ['Savic_2017_table_4:row13:col1'] |
| C5_unit_missing_Q25 | fail | [length] ** 3 / [time] |  | ['Savic_2017_table_4:row30:col1'] |
| C5_unit_missing_Q61 | fail | [length] ** 3 |  | ['Savic_2017_table_4:row31:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q63 | pass | volume within physiological range | 44 L | ['Savic_2017_table_4:row3:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcladribine%5D%20Cladribine_Savic2017_reference&body=Drug%3A%20cladribine%0ARecord%3A%20Cladribine_Savic2017_reference%0APaper%3A%20Savic_2017%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_cladribine/Cladribine_Savic2017_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 10:32 UTC</sub>
