<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Risperidone&quot;,&quot;href&quot;:&quot;drugs/toxin_risperidone/&quot;},{&quot;label&quot;:&quot;Chen_2019 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Risperidone_Kneller2020v2_reference&quot;,&quot;label&quot;:&quot;Kneller_2020_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_risperidone/Risperidone_Kneller2020v2_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Risperidone_Mahdy2023_gestation_of_pregnancy_40_weeks&quot;,&quot;label&quot;:&quot;Mahdy_2023_gestation_of_pregnancy_40_weeks&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_risperidone/Risperidone_Mahdy2023_gestation_of_pregnancy_40_weeks.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Risperidone — `Risperidone_Chen2019_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span>

> The model structure contains an unreachable or orphan compartment, making it impossible to simulate drug distribution from the dose site.

<div class="pk-model-meta" hidden drug="Risperidone" model-id="Risperidone_Chen2019_reference" status="rejected" stale="false" population="Beagle dogs" measured-compound="Risperidone" parameterization="mechanistic" topology="2C"></div>

## Citation
Chen F, Liu H, Wang B, Yang L, Cai W, Jiao Z et al. Physiologically Based Pharmacokinetic Modeling to Understand the Absorption of Risperidone Orodispersible Film. Frontiers in pharmacology 10:1692 (2019).
  ·  DOI: [10.3389/fphar.2019.01692](https://doi.org/10.3389/fphar.2019.01692)

## Population and dosing

**Population:** Beagle dogs · condition healthy · age group adult · n = 4.

**Dosing:** 1 mg/body, iv, single.

> **Species: dog.** This record comes from an animal study (dog), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 14 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Mol Weight (g/mol) | MW | 410.49 | g/mol |
| fu | fu | 0.083 |  |
| Mean Precipitation Time (s) | MRT | 900 | s |
| First pass extraction (%) | EH | 51 | % |
| Vc (L/kg) | V1 | 0.3139 | L/kg |
| CL (L/h/kg) | CL | 0.5903 | L/h/kg |
| t1/2 (h) | t1/2z | 2.43 | h |
| K12 (h-1) | k12 | 16.352 | h-1 |
| K21 (h-1) | k21 | 9.007 | h-1 |
| K13 (h-1) | k13 | 0.4625 | h-1 |
| K31 (h-1) | k31 | 0.4103 | h-1 |
| V2 (L/kg) | V2 | 0.56988 | L/kg |
| V3 (L/kg) | V3 | 0.35383 | L/kg |
| KaSC-RIS | kabs | 2.84 | 1/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model structure contains an unreachable or orphan compartment, making it impossible to simulate drug distribution from the dose site.**

The rejection is due to a structural integrity issue in the pharmacokinetic model topology. Specifically, the record fails the check for connectedness, indicating that at least one compartment defined in the model has no mathematical path from the administration site. Consequently, the model cannot accurately represent drug movement or concentration-time profiles. Extracted — risperidone: MW 410 g/mol, fu 0.083, MRT 900 s, EH 51 %, V1 0.314 L/kg, CL 0.59 L/h/kg, t1/2z 2.43 h, k12 16.4 h-1, … (+6).

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Mol Weight (g/mol) | `Q374` · MW | 410.49 | g/mol | 0.4105 |  | g/(m·ol) | llm (0.6) | T2:row2:col2 |
| fu | `Q46` · fu | 0.083 |  | 0.083 |  |  | exact (1) | T2:row7:col2 |
| Mean Precipitation Time (s) | `Q53` · MRT | 900 | s | 900 | s | s | llm (0.6) | T2:row10:col2 |
| First pass extraction (%) | `Q39` · EH | 51 | % | 0.51 |  | % | llm (0.6) | T2:row18:col2 |
| Vc (L/kg) | `Q63` · V1 | 0.3139 | L/kg | 0.02197 | m3 | l/kg | exact (1) | T2:row19:col2 |
| CL (L/h/kg) | `Q22` · CL | 0.5903 | L/h/kg | 1.148e-05 | m3/s | l/(h·kg) | exact (1) | T2:row20:col2 |
| t1/2 (h) | `Q57` · t1/2z | 2.43 | h | 8748 | s | h | half_life_rule (0.95) | T2:row21:col1, T2:row21:col2 |
| K12 (h-1) | `Q301` · k12 | 16.352 | h-1 | 0.004542 | 1/s | 1/h | exact (1) | T2:row22:col2 |
| K21 (h-1) | `Q302` · k21 | 9.007 | h-1 | 0.002502 | 1/s | 1/h | exact (1) | T2:row23:col2 |
| K13 (h-1) | `Q303` · k13 | 0.4625 | h-1 | 0.0001285 | 1/s | 1/h | exact (1) | T2:row24:col2 |
| K31 (h-1) | `Q304` · k31 | 0.4103 | h-1 | 0.000114 | 1/s | 1/h | exact (1) | T2:row25:col2 |
| V2 (L/kg) | `Q64` · V2 | 0.56988 | L/kg | 0.03989 | m3 | l/kg | exact (1) | T2:row26:col1, T2:row26:col2 |
| V3 (L/kg) | `Q77` · V3 | 0.35383 | L/kg | 0.02477 | m3 | l/kg | exact (1) | T2:row27:col1, T2:row27:col2 |
| KaSC-RIS | `Q49` · kabs | 2.84 | 1/h | 0.0007889 | 1/s | 1/h | review_gapfill (0.7) | Kozielska_2012:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'parameters' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'log P' — extend the ontology if this is a real PK parameter (source ['T2:row3:col2'])
- dropped unlinked row (NIL): 'pKa' — extend the ontology if this is a real PK parameter (source ['T2:row5:col2'])
- dropped unlinked row (NIL): 'B/P' — extend the ontology if this is a real PK parameter (source ['T2:row6:col2'])
- dropped unlinked row (NIL): 'Solubility (pH 6.8) (mg/ml)' — extend the ontology if this is a real PK parameter (source ['T2:row8:col1', 'T2:row8:col2'])
- dropped unlinked row (NIL): 'Diffusion coefficient (cm2/s)' — extend the ontology if this is a real PK parameter (source ['T2:row9:col1'])
- dropped unlinked row (NIL): 'Drug particle density (g/ml)' — extend the ontology if this is a real PK parameter (source ['T2:row11:col2'])
- dropped unlinked row (NIL): 'Particle size (μm)' — extend the ontology if this is a real PK parameter (source ['T2:row12:col2'])
- dropped unlinked row (NIL): 'ACAT model' — extend the ontology if this is a real PK parameter (source ['T2:row14:col1', 'T2:row14:col2'])
- dropped unlinked row (NIL): 'OCCAT model' — extend the ontology if this is a real PK parameter (source ['T2:row15:col2'])
- dropped unlinked row (NIL): 'Dose (mg)' — extend the ontology if this is a real PK parameter (source ['T2:row29:col2'])
- dropped unlinked row (NIL): 'Body weight (kg)' — extend the ontology if this is a real PK parameter (source ['T2:row30:col2'])
- dropped unlinked row (NIL): 'No. of dogs' — extend the ontology if this is a real PK parameter (source ['T2:row31:col2'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Risperidone
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q49 (kabs) from Kozielska_2012's review values (primary lacked it)

**Extraction notes:**
- table T2: ragged_grid
- table T2: unparsed_numeric_cell
- no LLM table selection; kept 2 deterministically-scored parameter table(s)

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 13 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['T2:row20:col2'] |
| C5_dimension_Q301 | pass | 1 / [time] |  | ['T2:row22:col2'] |
| C5_dimension_Q302 | pass | 1 / [time] |  | ['T2:row23:col2'] |
| C5_dimension_Q303 | pass | 1 / [time] |  | ['T2:row24:col2'] |
| C5_dimension_Q304 | pass | 1 / [time] |  | ['T2:row25:col2'] |
| C5_dimension_Q374 | pass | [mass] / [substance] |  | ['T2:row2:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Kozielska_2012:review'] |
| C5_dimension_Q53 | pass | [time] |  | ['T2:row10:col2'] |
| C5_dimension_Q57 | pass | [time] |  | ['T2:row21:col1', 'T2:row21:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['T2:row19:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['T2:row26:col1', 'T2:row26:col2'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  | ['T2:row27:col1', 'T2:row27:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.5903 | ['T2:row20:col2'] |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 41.3 L/h | ['T2:row20:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 22 L | ['T2:row19:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 39.9 L | ['T2:row26:col1', 'T2:row26:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Brisperidone%5D%20Risperidone_Chen2019_reference&body=Drug%3A%20risperidone%0ARecord%3A%20Risperidone_Chen2019_reference%0APaper%3A%20Chen_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_risperidone/Risperidone_Chen2019_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-16 01:51 UTC</sub>
