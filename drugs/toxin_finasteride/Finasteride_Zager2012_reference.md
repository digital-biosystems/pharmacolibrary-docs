<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Finasteride&quot;,&quot;href&quot;:&quot;drugs/toxin_finasteride/&quot;},{&quot;label&quot;:&quot;Zager_2012 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Finasteride_Carlin1997_reference&quot;,&quot;label&quot;:&quot;Carlin_1997_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_finasteride/Finasteride_Carlin1997_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Finasteride_Li2024_reference&quot;,&quot;label&quot;:&quot;Li_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_finasteride/Finasteride_Li2024_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Finasteride_Lundahl2011_reference&quot;,&quot;label&quot;:&quot;Lundahl_2011_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_finasteride/Finasteride_Lundahl2011_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Finasteride_VillapalosGarca2023_reference&quot;,&quot;label&quot;:&quot;Villapalos-Garc\u00eda_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_finasteride/Finasteride_VillapalosGarca2023_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Finasteride_Mady2017_fin&quot;,&quot;label&quot;:&quot;Mady_2017_fin&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_finasteride/Finasteride_Mady2017_fin.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Finasteride_Mady2017_fin_dm_cyd&quot;,&quot;label&quot;:&quot;Mady_2017_fin_dm_cyd&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_finasteride/Finasteride_Mady2017_fin_dm_cyd.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Finasteride_Steiner1996_reference&quot;,&quot;label&quot;:&quot;Steiner_1996_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_finasteride/Finasteride_Steiner1996_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Finasteride — `Finasteride_Zager2012_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 0.85).">rat</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q1 unit nM ([length]) vs [mass] / [length] ** 3.

<div class="pk-model-meta" hidden drug="Finasteride" model-id="Finasteride_Zager2012_reference" status="rejected" stale="false" population="adult male rats" measured-compound="finasteride" parameterization="mechanistic" topology="1C"></div>

## Citation
Zager MG, Barton HA. A multiscale, mechanism-driven, dynamic model for the effects of 5α-reductase inhibition on prostate maintenance. PloS one 7(9):e44359 (2012).
  ·  DOI: [10.1371/journal.pone.0044359](https://doi.org/10.1371/journal.pone.0044359)

## Population and dosing

**Population:** adult male rats · condition intact, castrated and finasteride-treated rats (21-day daily dosing) · age group adult.

**Dosing:** 2800 mg, other, multiple.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 0.85).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| k1 | equation variable | 500 |  |
| Km | Km | 0.6 | nM |
| k3 | kmet | 1000 |  |
| k4 | k21 | 500 | hr−1 |
| Ki5aR2 | ki0 | 0.5 |  |
| DNAo5aR20 | fm | 0.95 | fraction |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.353). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 0.85).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q1 unit nM ([length]) vs [mass] / [length] ** 3.**

A reported unit could not be converted (Km), so that value has no SI equivalent. Extracted — finasteride: Km 0.6 nM, kmet 1e+03, k21 500 hr−1, ki0 0.5, fm 0.95 fraction.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of k1: this record has 500, the second reading none; it also differs on 10 more fields. That field does not shape the model.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| k1 | `Q900` · equation variable | 500 |  | 500 |  |  | llm (0.6) | pone-0044359-t004:row1:col3 |
| Km | `Q1` · Km | 0.6 | nM |  |  | nM | exact (1) | pone-0044359-t004:row4:col3 |
| k3 | `Q51` · kmet | 1000 |  |  |  |  | llm (0.6) | pone-0044359-t004:row5:col3 |
| k4 | `Q302` · k21 | 500 | hr−1 | 0.1389 | 1/s | 1/h | llm (0.6) | pone-0044359-t004:row6:col3 |
| Ki5aR2 | `Q373` · ki0 | 0.5 |  |  |  |  | llm (0.6) | pone-0044359-t004:row9:col3 |
| DNAo5aR20 | `Q45` · fm | 0.95 | fraction | 0.95 |  | fraction | llm (0.6) | pone-0044359-t004:row13:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- conflicting source units for 'k1': [{'unit': 'hr−1 nM−1', 'source': 'pone-0044359-t004:row1:col2', 'scope': 'unit_column'}, {'unit': '5', 'source': 'pone-0044359-t004:row1:col1', 'scope': 'description'}]
- conflicting source units for 'kcat': [{'unit': 'hr−1', 'source': 'pone-0044359-t004:row3:col2', 'scope': 'unit_column'}, {'unit': '4', 'source': 'pone-0044359-t004:row3:col1', 'scope': 'description'}]
- conflicting source units for 'k3': [{'unit': 'hr−1 nM−1', 'source': 'pone-0044359-t004:row5:col2', 'scope': 'unit_column'}, {'unit': '5', 'source': 'pone-0044359-t004:row5:col1', 'scope': 'description'}]
- conflicting source units for 'k5': [{'unit': 'hr−1', 'source': 'pone-0044359-t004:row7:col2', 'scope': 'unit_column'}, {'unit': '3', 'source': 'pone-0044359-t004:row7:col1', 'scope': 'description'}]
- conflicting source units for 'k6': [{'unit': 'hr−1', 'source': 'pone-0044359-t004:row8:col2', 'scope': 'unit_column'}, {'unit': '3', 'source': 'pone-0044359-t004:row8:col1', 'scope': 'description'}]
- conflicting source units for 'Ki5aR2': [{'unit': 'nM', 'source': 'pone-0044359-t004:row9:col2', 'scope': 'unit_column'}, {'unit': '3', 'source': 'pone-0044359-t004:row9:col1', 'scope': 'description'}]
- dropped duplicate Q900 ('k2', value '30') — already have one for this compound
- dropped unlinked row (NIL): 'kcat' — extend the ontology if this is a real PK parameter (source ['pone-0044359-t004:row3:col3'])
- unit_dimension_mismatch: 'Km' → Q1 (unit '[length]' vs ontology '[mass] / [length] ** 3') — route to review
- dropped duplicate Q900 ('k5', value '3.96') — already have one for this compound
- dropped 'k6' → Q51 = 0: a rate of 0 is not a parameter value (source ['pone-0044359-t004:row8:col3'])
- dropped duplicate Q51 ('kdg', value '0.016') — already have one for this compound
- implicit units: LLM call failed (JSONDecodeError: Extra data: line 6 column 4 (char 231)) — units left missing
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=finasteride
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table pone-0044359-t004: conflicting_units
- table Zager_2012_table_4: no_numeric_grid
- companion parameter table 4 transcribed (0 record(s))
- LLM selected parameter table(s) 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | partly confirmed | 0.353 (6/17 fields) | 11 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[k1]` | 500 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[k2]` |  | 30 | only_one_extracted |
| `gpt-oss:120b` | `parameters[k3]` | 1000 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[k4]` | 500 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[k_df]` |  | 77.2 | only_one_extracted |
| `gpt-oss:120b` | `parameters[k_i 5ar1]` |  | 5.4 | only_one_extracted |
| `gpt-oss:120b` | `parameters[k_tf]` |  | 87.9 | only_one_extracted |
| `gpt-oss:120b` | `parameters[ki5ar2]` | 0.5 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[pt_l]` |  | 2.75 | only_one_extracted |
| `gpt-oss:120b` | `parameters[q_l]` |  | 1.06 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v_max]` |  | 3.65 | only_one_extracted |

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
| C5_dimension_Q1 | fail | [mass] / [length] ** 3 | nM ([length]) | ['pone-0044359-t004:row4:col3'] |
| C5_dimension_Q302 | pass | 1 / [time] |  | ['pone-0044359-t004:row6:col3'] |
| C5_unit_missing_Q373 | fail | 1 / [time] |  | ['pone-0044359-t004:row9:col3'] |
| C5_unit_missing_Q51 | fail | 1 / [time] |  | ['pone-0044359-t004:row5:col3'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfinasteride%5D%20Finasteride_Zager2012_reference&body=Drug%3A%20finasteride%0ARecord%3A%20Finasteride_Zager2012_reference%0APaper%3A%20Zager_2012%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_finasteride/Finasteride_Zager2012_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 09:45 UTC</sub>
