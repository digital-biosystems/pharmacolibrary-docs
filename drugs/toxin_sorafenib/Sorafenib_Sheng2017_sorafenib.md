<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Sorafenib&quot;,&quot;href&quot;:&quot;drugs/toxin_sorafenib/&quot;},{&quot;label&quot;:&quot;Sheng_2017 \u00b7 sorafenib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sorafenib_Huh2021_reference&quot;,&quot;label&quot;:&quot;Huh_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_sorafenib/Sorafenib_Huh2021_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sorafenib_Karovic2014_reference&quot;,&quot;label&quot;:&quot;Karovic_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_sorafenib/Sorafenib_Karovic2014_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sorafenib_Nogova2020_reference&quot;,&quot;label&quot;:&quot;Nogova_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_sorafenib/Sorafenib_Nogova2020_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sorafenib_Sheng2017_sorafenib_nanoparticles&quot;,&quot;label&quot;:&quot;Sheng_2017_sorafenib_nanoparticles&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_sorafenib/Sorafenib_Sheng2017_sorafenib_nanoparticles.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Sorafenib — `Sorafenib_Sheng2017_sorafenib`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Sorafenib" model-id="Sorafenib_Sheng2017_sorafenib" status="rejected" stale="false" population="male Sprague-Dawley rats and male ICR mice (H22 hepatocellular carcinoma tumor-bearing)" measured-compound="sorafenib" parameterization="mechanistic" topology="1C"></div>

## Citation
Sheng X, Huang T, Qin J, Li Q, Wang W, Deng L et al. Preparation, pharmacokinetics, tissue distribution and antitumor effect of sorafenib-incorporating nanoparticles in vivo. Oncology letters 14(5):6163–6169 (2017).
  ·  DOI: [10.3892/ol.2017.6934](https://doi.org/10.3892/ol.2017.6934)

## Population and dosing

**Population:** male Sprague-Dawley rats and male ICR mice (H22 hepatocellular carcinoma tumor-bearing) · condition tumor-bearing (H22 mouse hepatocellular carcinoma) experimental animals · n = 36 rats and 33 mice.

**Dosed compound ≠ measured compound:** dosed sorafenib nanoparticle formulation (sorafenib in mPEG-PLA nanoparticles), measured sorafenib.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 10 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Elimination rate constant | kel | 0.09 | 1/h |
| Half-life | t1/2z | 8.22 | h |
| Time to peak | tmax | 0.08 | h |
| Concentration of peak | Cmax | 5.57 | µg/ml |
| Initial concentration | C0 | 7.03 | µg/ml |
| AUC0-t | AUCt | 31.02 | h·µg/ml |
| AUC0-∞ | AUC∞ | 31.64 | h·µg/ml |
| Volume of distribution | V | 8066.11 | ml/kg |
| Serum clearance | CLnorm | 652.09 | ml/h/kg |
| ka | kabs | 1.6 | h−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.857). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has sorafenib nanoparticle formulation (sorafenib in mPEG-PLA nanoparticles), the second reading Sorafenib; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Elimination rate constant | `Q47` · kel | 0.09 | 1/h | 2.5e-05 | 1/s | 1/h | exact (1) | Sheng_2017_table_2:row0:col2 |
| Half-life | `Q57` · t1/2z | 8.22 | h | 2.959e+04 | s | h | half_life_rule (0.95) | Sheng_2017_table_2:row1:col2 |
| Time to peak | `Q56` · tmax | 0.08 | h | 288 | s | h | llm_corrected (0.6) | Sheng_2017_table_2:row2:col2 |
| Concentration of peak | `Q32` · Cmax | 5.57 | µg/ml | 0.00557 | kg/m3 | µg/ml | llm_confirmed (0.6) | Sheng_2017_table_2:row3:col2 |
| Initial concentration | `Q86` · C0 | 7.03 | µg/ml |  |  | µg/ml | llm (0.6) | Sheng_2017_table_2:row4:col2 |
| AUC0-t | `Q19` · AUCt | 31.02 | h·µg/ml | 111.7 | kg*s/m3 | (h·µg)/ml | exact (1) | Sheng_2017_table_2:row5:col2 |
| AUC0-∞ | `Q17` · AUC∞ | 31.64 | h·µg/ml | 113.9 | kg*s/m3 | (h·µg)/ml | exact (1) | Sheng_2017_table_2:row6:col2 |
| Volume of distribution | `Q61` · V | 8066.11 | ml/kg | 0.5646 | m3 | ml/kg | exact (1) | Sheng_2017_table_2:row7:col2 |
| Serum clearance | `Q354` · CLnorm | 652.09 | ml/h/kg | 1.268e-05 | m3/s | ml/(h·kg) | llm_corrected (0.6) | Sheng_2017_table_2:row8:col2 |
| ka | `Q49` · kabs | 1.6 | h−1 | 0.0004444 | 1/s | 1/h | review_gapfill (0.7) | Huh_2021:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'Initial concentration' → Q86 (unit '[mass] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=sorafenib
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- population split: 'sorafenib' subgroup of Sheng_2017 (paper reports 2 populations: sorafenib, sorafenib nanoparticles)
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q49 (kabs) from Huh_2021's review values (primary lacked it)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 2
- table Sheng_2017_table_2: unparsed_numeric_cell
- LLM region Sheng_2017:other_prose: no JSON records returned

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.857 (12/14 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[serum clearance].parameter_id` | Q354 | Q22 | mismatch |
| `gpt-oss:120b` | `screen.dose_compound` | sorafenib nanoparticle formulation (sorafenib in mPEG-PLA nanoparticles) | Sorafenib | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 9 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q17 | pass | [time] * [mass] / [length] ** 3 |  | ['Sheng_2017_table_2:row6:col2'] |
| C5_dimension_Q19 | pass | [time] * [mass] / [length] ** 3 |  | ['Sheng_2017_table_2:row5:col2'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Sheng_2017_table_2:row3:col2'] |
| C5_dimension_Q354 | pass | [length] ** 3 / [time] |  | ['Sheng_2017_table_2:row8:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Sheng_2017_table_2:row0:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Huh_2021:review'] |
| C5_dimension_Q56 | pass | [time] |  | ['Sheng_2017_table_2:row2:col2'] |
| C5_dimension_Q57 | pass | [time] |  | ['Sheng_2017_table_2:row1:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Sheng_2017_table_2:row7:col2'] |
| C5_dimension_Q86 | fail | [mass] * [time] / [length] ** 3 | µg/ml ([mass] / [length] ** 3) | ['Sheng_2017_table_2:row4:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 565 L | ['Sheng_2017_table_2:row7:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsorafenib%5D%20Sorafenib_Sheng2017_sorafenib&body=Drug%3A%20sorafenib%0ARecord%3A%20Sorafenib_Sheng2017_sorafenib%0APaper%3A%20Sheng_2017%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_sorafenib/Sorafenib_Sheng2017_sorafenib%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-12 18:42 UTC</sub>
