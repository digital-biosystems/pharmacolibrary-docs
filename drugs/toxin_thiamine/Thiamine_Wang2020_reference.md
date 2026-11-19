<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Thiamine&quot;,&quot;href&quot;:&quot;drugs/toxin_thiamine/&quot;},{&quot;label&quot;:&quot;Wang_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Thiamine_Smithline2012_thiamine_dose_100_mg&quot;,&quot;label&quot;:&quot;Smithline_2012_thiamine_dose_100_mg&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_thiamine/Thiamine_Smithline2012_thiamine_dose_100_mg.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Thiamine — `Thiamine_Wang2020_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

> Distribution volume V2 (19.308) and intercompartmental clearance Q (20.162) for 18F-deoxy-thiamine have units of mass (g, g/min) instead of volume and volume/time, making conversion impossible.

<div class="pk-model-meta" hidden drug="Thiamine" model-id="Thiamine_Wang2020_reference" status="rejected" stale="false" population="ICR mice" measured-compound="18F-deoxy-thiamine" parameterization="mechanistic" topology="1C"></div>

## Citation
Wang C, Zhang S, Zou Y, Ma H, Jiang D, Sheng L et al. A novel PET tracer 18F-deoxy-thiamine: synthesis, metabolic kinetics, and evaluation on cerebral thiamine metabolism status. EJNMMI research 10(1):126 (2020).
  ·  DOI: [10.1186/s13550-020-00710-5](https://doi.org/10.1186/s13550-020-00710-5)

## Population and dosing

**Population:** ICR mice · condition healthy | thiamine deficiency · age group adult.

**Dosing:** 3.7, 11.1 MBq, iv, single.

> **Species: mouse.** This record comes from an animal study (mouse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 9 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| VD2 (g) | V2 | 19.308 | g |
| CL2 (g/min) | Q | 20.162 | g/min |
| t1/2(α) (min) | t1/2α | 0.082 | min |
| t1/2(β) (min) | t1/2β | 6.379 | min |
| AUC0–60 min (%IA/g * min) | AUCt | 37.313 | %IA/g * min |
| AUC0–inf (%IA/g * min) | AUC∞ | 37.399 | %IA/g * min |
| k10 (min−1)b | kel | 0.874 | min−1 |
| k12 (min−1)b | k12 | 6.593 | min−1 |
| k21 (min−1)b | k21 | 1.044 | min−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Distribution volume V2 (19.308) and intercompartmental clearance Q (20.162) for 18F-deoxy-thiamine have units of mass (g, g/min) instead of volume and volume/time, making conversion impossible.**

The record reports V2 and Q for 18F-deoxy-thiamine using units of grams and grams per minute, which are dimensionally incompatible with volume and clearance. These unit errors prevented conversion to SI units, meaning no valid numerical values could be established for the model. Extracted — 18F-deoxy-thiamine: V2 19.3 g, Q 20.2 g/min, t1/2α 0.082 min, t1/2β 6.38 min, AUCt 37.3 %IA/g * min, AUC∞ 37.4 %IA/g * min, kel 0.874 min−1, k12 6.59 min−1, … (+1).

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| VD2 (g) | `Q64` · V2 | 19.308 | g |  |  | g | llm (0.6) | Tab3:row5:col1 |
| CL2 (g/min) | `Q30` · Q | 20.162 | g/min |  |  | g/min | special_case (0.95) | Tab3:row6:col1 |
| t1/2(α) (min) | `Q59` · t1/2α | 0.082 | min | 4.92 | s | min | half_life_rule (0.95) | Tab3:row7:col1 |
| t1/2(β) (min) | `Q60` · t1/2β | 6.379 | min | 382.7 | s | min | half_life_rule (0.95) | Tab3:row8:col1 |
| AUC0–60 min (%IA/g * min) | `Q19` · AUCt | 37.313 | %IA/g * min |  |  | (%·ia)/(min·g) | llm (0.6) | Tab3:row9:col1 |
| AUC0–inf (%IA/g * min) | `Q17` · AUC∞ | 37.399 | %IA/g * min |  |  | (%·ia)/(min·g) | exact (1) | Tab3:row10:col1 |
| k10 (min−1)b | `Q47` · kel | 0.874 | min−1 | 0.01457 | 1/s | 1/min | llm_confirmed (0.6) | Tab3:row11:col1 |
| k12 (min−1)b | `Q301` · k12 | 6.593 | min−1 | 0.1099 | 1/s | 1/min | llm_confirmed (0.6) | Tab3:row12:col1 |
| k21 (min−1)b | `Q302` · k21 | 1.044 | min−1 | 0.0174 | 1/s | 1/min | llm_confirmed (0.6) | Tab3:row13:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'VD1 (g)' — extend the ontology if this is a real PK parameter (source ['Tab3:row3:col1'])
- dropped unlinked row (NIL): 'CL1 (g/min)' — extend the ontology if this is a real PK parameter (source ['Tab3:row4:col1'])
- unit_dimension_mismatch: 'VD2 (g)' → Q64 (unit '[mass]' vs ontology '[length] ** 3') — route to review
- unit_dimension_mismatch: 'CL2 (g/min)' → Q30 (unit '[mass] / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_unknown: '%IA/g * min' (AUCt)
- unit_dimension_unknown: '%IA/g * min' (AUC∞)
- dropped value-less row: 'K10'
- dropped value-less row: 'K12'
- dropped value-less row: 'K21'
- implicit units: 'AUC0–60 min (%IA/g * min)' — the LLM proposed '%IA/g * min', whose dimension does not fit Q19; left unset
- implicit units: 'AUC0–inf (%IA/g * min)' — the LLM proposed '%IA/g * min', whose dimension does not fit Q17; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=18F-deoxy-thiamine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted
- molar mass: no plausible PubChem entry for '18F-deoxy-thiamine' ('18F-deoxy-thiamine') — left in mass units
- molar mass: none found for '18F-deoxy-thiamine' — its concentrations stay mass-only
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table Tab3: unbound_uncertainty
- table Tab3: unparsed_numeric_cell
- LLM selected parameter table(s) 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 9 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q30 | fail | [length] ** 3 / [time] | g/min ([mass] / [time]) | ['Tab3:row6:col1'] |
| C5_dimension_Q301 | pass | 1 / [time] |  | ['Tab3:row12:col1'] |
| C5_dimension_Q302 | pass | 1 / [time] |  | ['Tab3:row13:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Tab3:row11:col1'] |
| C5_dimension_Q59 | pass | [time] |  | ['Tab3:row7:col1'] |
| C5_dimension_Q60 | pass | [time] |  | ['Tab3:row8:col1'] |
| C5_dimension_Q64 | fail | [length] ** 3 | g ([mass]) | ['Tab3:row5:col1'] |
| C5_unit_missing_Q17 | fail | [mass] * [time] / [length] ** 3 | %IA/g * min | ['Tab3:row10:col1'] |
| C5_unit_missing_Q19 | fail | [mass] * [time] / [length] ** 3 | %IA/g * min | ['Tab3:row9:col1'] |
| C8_topology | pass |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bthiamine%5D%20Thiamine_Wang2020_reference&body=Drug%3A%20thiamine%0ARecord%3A%20Thiamine_Wang2020_reference%0APaper%3A%20Wang_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_thiamine/Thiamine_Wang2020_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-16 08:32 UTC</sub>
