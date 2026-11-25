<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;ciltacabtagene autoleucel&quot;,&quot;href&quot;:&quot;drugs/drug_ciltacabtagene_autoleucel/&quot;},{&quot;label&quot;:&quot;Wu_2022 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ciltacabtagene autoleucel — `CiltacabtageneAutoleucel_Wu2022_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C8 unreachable/orphan compartment or unlinked metabolite.

<div class="pk-model-meta" hidden drug="ciltacabtagene autoleucel" model-id="CiltacabtageneAutoleucel_Wu2022_reference" status="rejected" stale="false" population="adults with relapsed or refractory multiple myeloma" measured-compound="CAR transgene" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Wu LS, Su Y, Li C, Zhou W, Jackson CC, Sun YN et al. Population-based cellular kinetic characterization of ciltacabtagene autoleucel in subjects with relapsed or refractory multiple myeloma. Clinical and translational science 15(12):3000–3011 (2022).
  ·  DOI: [10.1111/cts.13421](https://doi.org/10.1111/cts.13421)

## Population and dosing

**Population:** adults with relapsed or refractory multiple myeloma · condition relapsed or refractory multiple myeloma · age group adult.

**Dosing:** 0.5, 0.75, 1 × 106 CAR positive viable T-cells/kg body weight, iv, single.

**Dosed compound ≠ measured compound:** dosed ciltacabtagene autoleucel, measured CAR transgene.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| T lag, days | tlag | 4.99 | days | 0.0454 (None% RSE) |
| MTT, days | MTT | 10.4 | days | 0.0573 (None% RSE) |
| α, day−1 | λ1 | 209 | day−1 | 0.52 (None% RSE) |
| r a, day−1 | kel | 0.0410 | day−1 | 4.27 (None% RSE) |
| C max, copies/μg genomic DNA | Cmax | 5560 |  |  |
| AUC0–28d, day⋅copies/μg genomic DNA | AUC | 1150000 |  |  |
| T max, days | tmax | 14.1 | days |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.267). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C8 unreachable/orphan compartment or unlinked metabolite.**

Extracted — ciltacabtagene autoleucel: tlag 4.99 days, MTT 10.4 days, λ1 209 day−1, kel 0.041 day−1, Cmax 5.56e+03, AUC 1.15e+06, tmax 14.1 days.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has ciltacabtagene autoleucel → car transgene (interconversion), the second reading none; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| T lag, days | `Q83` · tlag | 4.99 | days | 4.311e+05 | s | d | space_fold (0.95) | cts13421-tbl-0002:row1:col2, cts13421-tbl-0002:row1:col3, Wu_2022_table_3:row0:col1, Wu_2022_table_3:row0:col3, Wu_2022_table_3:row0:col4, Wu_2022_table_3:row0:col5, Wu_2022_table_3:row0:col6, Wu_2022_table_3:row0:col7 | 0.0454 (None% RSE) |
| MTT, days | `Q81` · MTT | 10.4 | days | 8.986e+05 | s | d | exact (1) | cts13421-tbl-0002:row2:col2, cts13421-tbl-0002:row2:col3, Wu_2022_table_3:row1:col1, Wu_2022_table_3:row1:col3, Wu_2022_table_3:row1:col4, Wu_2022_table_3:row1:col5, Wu_2022_table_3:row1:col6, Wu_2022_table_3:row1:col7 | 0.0573 (None% RSE) |
| α, day−1 | `Q67` · λ1 | 209 | day−1 | 0.002419 | 1/s | 1/d | exact (1) | cts13421-tbl-0002:row3:col2, cts13421-tbl-0002:row3:col3, Wu_2022_table_3:row2:col1, Wu_2022_table_3:row2:col3, Wu_2022_table_3:row2:col4, Wu_2022_table_3:row2:col5, Wu_2022_table_3:row2:col6, Wu_2022_table_3:row2:col7 | 0.52 (None% RSE) |
| r a, day−1 | `Q47` · kel | 0.0410 | day−1 | 4.745e-07 | 1/s | 1/d | llm (0.6) | cts13421-tbl-0002:row4:col2, cts13421-tbl-0002:row4:col3, Wu_2022_table_3:row3:col1, Wu_2022_table_3:row3:col3, Wu_2022_table_3:row3:col4, Wu_2022_table_3:row3:col5, Wu_2022_table_3:row3:col6, Wu_2022_table_3:row3:col7 | 4.27 (None% RSE) |
| C max, copies/μg genomic DNA | `Q32` · Cmax | 5560 |  |  |  |  | llm (0.6) | Wu_2022_table_3:row5:col3 |  |
| AUC0–28d, day⋅copies/μg genomic DNA | `Q88` · AUC | 1150000 |  |  |  |  | llm (0.6) | Wu_2022_table_3:row6:col6, Wu_2022_table_3:row6:col7 |  |
| T max, days | `Q56` · tmax | 14.1 | days | 1.218e+06 | s | d | space_fold (0.95) | Wu_2022_table_3:row7:col1, Wu_2022_table_3:row7:col3, Wu_2022_table_3:row7:col4, Wu_2022_table_3:row7:col5, Wu_2022_table_3:row7:col6, Wu_2022_table_3:row7:col7 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'T lag, days' routed out of structural estimates ('IIV variance')
- table section iiv: 'T lag, days' routed out of structural estimates ('IIV %CV c (%RSE) d')
- table section iiv: 'MTT, days' routed out of structural estimates ('IIV variance')
- table section iiv: 'MTT, days' routed out of structural estimates ('IIV %CV c (%RSE) d')
- table section iiv: 'α, day−1' routed out of structural estimates ('IIV variance')
- table section iiv: 'α, day−1' routed out of structural estimates ('IIV %CV c (%RSE) d')
- table section iiv: 'r a, day−1' routed out of structural estimates ('IIV variance')
- table section iiv: 'r a, day−1' routed out of structural estimates ('IIV %CV c (%RSE) d')
- table section iiv: 'δ m, day−1' routed out of structural estimates ('IIV variance')
- table section iiv: 'δ m, day−1' routed out of structural estimates ('IIV %CV c (%RSE) d')
- competing summary columns for 'T lag, days'; not population strata
- competing summary columns for 'MTT, days'; not population strata
- competing summary columns for 'α, day−1'; not population strata
- competing summary columns for 'r a, day−1'; not population strata
- competing summary columns for 'δ m, day−1'; not population strata
- competing summary columns for 'T max, days'; not population strata
- competing summary columns for 'T BLOQ, days'; not population strata
- dropped unlinked row (NIL): 'δ m, day−1' — extend the ontology if this is a real PK parameter (source ['cts13421-tbl-0002:row5:col2', 'cts13421-tbl-0002:row5:col3', 'Wu_2022_table_3:row4:col1', 'Wu_2022_table_3:row4:col3', 'Wu_2022_table_3:row4:col4', 'Wu_2022_table_3:row4:col5', 'Wu_2022_table_3:row4:col6', 'Wu_2022_table_3:row4:col7'])
- dropped unlinked row (NIL): 'T BLOQ, days' — extend the ontology if this is a real PK parameter (source ['Wu_2022_table_3:row8:col1', 'Wu_2022_table_3:row8:col3', 'Wu_2022_table_3:row8:col4', 'Wu_2022_table_3:row8:col5', 'Wu_2022_table_3:row8:col6', 'Wu_2022_table_3:row8:col7'])
- implicit units: 'C max, copies/μg genomic DNA' — the LLM proposed 'copies/μg genomic DNA', whose dimension does not fit Q32; left unset
- implicit units: 'AUC0–28d, day⋅copies/μg genomic DNA' — the LLM proposed 'day·copies/μg genomic DNA', whose dimension does not fit Q88; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=CAR transgene
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at "Needs review" — not promoted
- molar mass: no plausible PubChem entry for 'CAR transgene' ('chimeric antigen receptor transgene') — left in mass units
- molar mass: none found for 'ciltacabtagene_autoleucel' — its concentrations stay mass-only
- molar mass: none found for 'CAR transgene' — its concentrations stay mass-only

**Extraction notes:**
- table Wu_2022_table_3: competing_summary_estimates
- table Wu_2022_table_3: ambiguous_uncertainty_binding
- table Wu_2022_table_3: ambiguous_numeric_format
- companion parameter table 3 transcribed (63 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.267 (4/15 fields) | 11 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['ciltacabtagene autoleucel', 'car transgene', 'interconversion']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[auc0-28d, day⋅copies/ug genomic dna].parameter_id` | Q88 | Q19 | mismatch |
| `gpt-oss-120b` | `parameters[auc0-28d, day⋅copies/ug genomic dna].value` | 1150000 | 1550000 | mismatch |
| `gpt-oss-120b` | `parameters[f]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mtt].value` | 10.4 | 15.7 | mismatch |
| `gpt-oss-120b` | `parameters[r a].parameter_id` | Q47 | Q49 | mismatch |
| `gpt-oss-120b` | `parameters[r a].value` | 0.0410 | 0.387 | mismatch |
| `gpt-oss-120b` | `parameters[t lag].value` | 4.99 | 8.22 | mismatch |
| `gpt-oss-120b` | `parameters[t max].value` | 14.1 | 25 | mismatch |
| `gpt-oss-120b` | `parameters[α].value` | 209 | 739 | mismatch |
| `gpt-oss-120b` | `parameters[δ m]` |  | 0.279 | only_one_extracted |

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
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['cts13421-tbl-0002:row4:col2', 'cts13421-tbl-0002:row4:col3', 'Wu_2022_table_3:row3:col1', 'Wu_2022_table_3:row3:col3', 'Wu_2022_table_3:row3:col4', 'Wu_2022_table_3:row3:col5', 'Wu_2022_table_3:row3:col6', 'Wu_2022_table_3:row3:col7'] |
| C5_dimension_Q56 | pass | [time] |  | ['Wu_2022_table_3:row7:col1', 'Wu_2022_table_3:row7:col3', 'Wu_2022_table_3:row7:col4', 'Wu_2022_table_3:row7:col5', 'Wu_2022_table_3:row7:col6', 'Wu_2022_table_3:row7:col7'] |
| C5_dimension_Q67 | pass | 1 / [time] |  | ['cts13421-tbl-0002:row3:col2', 'cts13421-tbl-0002:row3:col3', 'Wu_2022_table_3:row2:col1', 'Wu_2022_table_3:row2:col3', 'Wu_2022_table_3:row2:col4', 'Wu_2022_table_3:row2:col5', 'Wu_2022_table_3:row2:col6', 'Wu_2022_table_3:row2:col7'] |
| C5_dimension_Q81 | pass | [time] |  | ['cts13421-tbl-0002:row2:col2', 'cts13421-tbl-0002:row2:col3', 'Wu_2022_table_3:row1:col1', 'Wu_2022_table_3:row1:col3', 'Wu_2022_table_3:row1:col4', 'Wu_2022_table_3:row1:col5', 'Wu_2022_table_3:row1:col6', 'Wu_2022_table_3:row1:col7'] |
| C5_dimension_Q83 | pass | [time] |  | ['cts13421-tbl-0002:row1:col2', 'cts13421-tbl-0002:row1:col3', 'Wu_2022_table_3:row0:col1', 'Wu_2022_table_3:row0:col3', 'Wu_2022_table_3:row0:col4', 'Wu_2022_table_3:row0:col5', 'Wu_2022_table_3:row0:col6', 'Wu_2022_table_3:row0:col7'] |
| C5_unit_missing_Q32 | fail | [mass] / [length] ** 3 |  | ['Wu_2022_table_3:row5:col3'] |
| C5_unit_missing_Q88 | fail | [mass] * [time] / [length] ** 3 |  | ['Wu_2022_table_3:row6:col6', 'Wu_2022_table_3:row6:col7'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none'] |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bciltacabtagene_autoleucel%5D%20CiltacabtageneAutoleucel_Wu2022_reference&body=Drug%3A%20ciltacabtagene_autoleucel%0ARecord%3A%20CiltacabtageneAutoleucel_Wu2022_reference%0APaper%3A%20Wu_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ciltacabtagene_autoleucel/CiltacabtageneAutoleucel_Wu2022_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 11:03 UTC</sub>
