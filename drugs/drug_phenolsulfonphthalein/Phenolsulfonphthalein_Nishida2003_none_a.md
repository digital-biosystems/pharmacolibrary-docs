<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V04C&quot;,&quot;href&quot;:&quot;atc/V04C.md&quot;},{&quot;label&quot;:&quot;phenolsulfonphthalein&quot;,&quot;href&quot;:&quot;drugs/drug_phenolsulfonphthalein/&quot;},{&quot;label&quot;:&quot;Nishida_2003 \u00b7 none_a&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# phenolsulfonphthalein — `Phenolsulfonphthalein_Nishida2003_none_a`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q17 unit mg ([mass]) vs [mass] * [time] / [length] ** 3; c9 clearance/volume outside physiological window (implausible magnitude — unit/scale extraction error).

<div class="pk-model-meta" hidden drug="phenolsulfonphthalein" model-id="Phenolsulfonphthalein_Nishida2003_none_a" status="rejected" stale="false" population="liver-intoxicated rats" measured-compound="phenolsulfonphthalein" parameterization="mechanistic" topology="1C"></div>

## Citation
Nishida K, Honda T, Nakashima M, Sasaki H, Nakamura J. Influence of liver disease on phenolsulfonphthalein absorption from liver surface to examine possibility of direct liver surface application for drug targeting. Biological & pharmaceutical bulletin 26(7):988–993 (2003).
  ·  DOI: [10.1248/bpb.26.988](https://doi.org/10.1248/bpb.26.988)

## Population and dosing

**Population:** liver-intoxicated rats · condition liver disease.

**Dosing:** 1, 3, 10 mg, other, single.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUC p (mg • min/ml) | AUC | 1695.1 | mg • min/ml |
| MRT p (min) | MRT | 267.2 | min |
| AUC b,m (mg) | AUC∞ | 225.2 | mg |
| K el (min Ϫ1 ) | kel | 0.033 | min Ϫ1 |
| V c (ml) | V | 20.4 | ml |
| CL total (ml/min) | CL | 0.63 | ml/min |
| Free | fu | 39.1 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.769). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q17 unit mg ([mass]) vs [mass] * [time] / [length] ** 3; c9 clearance/volume outside physiological window (implausible magnitude — unit/scale extraction error).**

A reported unit could not be converted (AUC∞), so that value has no SI equivalent. Extracted — phenolsulfonphthalein: AUC 1.7e+03 mg • min/ml, MRT 267 min, AUC∞ 225 mg, kel 0.033 min Ϫ1, V 20.4 ml, CL 0.63 ml/min, fu 39.1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of auc b,m: this record has 225.2, the second reading none; it also differs on 2 more fields. That field does not shape the model.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUC p (mg • min/ml) | `Q88` · AUC | 1695.1 | mg • min/ml | 1.017e+05 | kg*s/m3 | (min·mg)/ml | llm_confirmed (0.6) | tab_2:row1:col1 |
| MRT p (min) | `Q53` · MRT | 267.2 | min | 1.603e+04 | s | min | llm_confirmed (0.6) | tab_2:row1:col2 |
| AUC b,m (mg) | `Q17` · AUC∞ | 225.2 | mg |  |  | mg | llm_corrected (0.6) | tab_2:row1:col5 |
| K el (min Ϫ1 ) | `Q47` · kel | 0.033 | min Ϫ1 | 0.00055 | 1/s | 1/min | space_fold (0.95) | Nishida_2003_table_1:row0:col1 |
| V c (ml) | `Q61` · V | 20.4 | ml | 2.04e-05 | m3 | ml | space_fold (0.95) | Nishida_2003_table_1:row0:col2 |
| CL total (ml/min) | `Q22` · CL | 0.63 | ml/min | 1.05e-08 | m3/s | ml/min | llm_confirmed (0.6) | Nishida_2003_table_1:row0:col3 |
| Free | `Q46` · fu | 39.1 |  | 0.391 |  |  | llm (0.6) | Nishida_2003_table_1:row0:col4, Nishida_2003_table_1:row0:col7 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'AUC b,f (mg)' — extend the ontology if this is a real PK parameter (source ['tab_2:row1:col3'])
- dropped duplicate Q53 ('MRT b,f (min)', value '190.6') — already have one for this compound
- unit_dimension_mismatch: 'AUC b,m (mg)' → Q17 (unit '[mass]' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped duplicate Q53 ('MRT b,m (min)', value '235.0') — already have one for this compound
- 'Free' → Q46: printed without a unit and above 1 — read as a percentage
- dropped unlinked row (NIL): 'Bile Metabolite' — extend the ontology if this is a real PK parameter (source ['Nishida_2003_table_1:row0:col5'])
- dropped unlinked row (NIL): 'Total' — extend the ontology if this is a real PK parameter (source ['Nishida_2003_table_1:row0:col6', 'Nishida_2003_table_1:row0:col9'])
- dropped unlinked row (NIL): 'Urine Metabolite' — extend the ontology if this is a real PK parameter (source ['Nishida_2003_table_1:row0:col8'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=phenolsulfonphthalein
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'V c (ml)' is the general volume)
- status held at "Needs review" — not promoted
- population split: 'none a)' subgroup of Nishida_2003 (paper reports 3 populations: ccl 4, gal, none a))

**Extraction notes:**
- transposed table tab_2: logical view retains original source coordinates
- transposed table Nishida_2003_table_1: logical view retains original source coordinates
- companion parameter table 1 transcribed (27 record(s))
- LLM selected parameter table(s) 1, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.769 (10/13 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[auc b,m]` | 225.2 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[total]` |  | 58.9 | only_one_extracted |
| `gpt-oss-120b` | `parameters[urine metabolite]` |  | 6.8 | only_one_extracted |

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
| C5_dimension_Q17 | fail | [mass] * [time] / [length] ** 3 | mg ([mass]) | ['tab_2:row1:col5'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Nishida_2003_table_1:row0:col3'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Nishida_2003_table_1:row0:col1'] |
| C5_dimension_Q53 | pass | [time] |  | ['tab_2:row1:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Nishida_2003_table_1:row0:col2'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  | ['tab_2:row1:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.63 | ['Nishida_2003_table_1:row0:col3'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0378 L/h | ['Nishida_2003_table_1:row0:col3'] |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.0204 L | ['Nishida_2003_table_1:row0:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bphenolsulfonphthalein%5D%20Phenolsulfonphthalein_Nishida2003_none_a&body=Drug%3A%20phenolsulfonphthalein%0ARecord%3A%20Phenolsulfonphthalein_Nishida2003_none_a%0APaper%3A%20Nishida_2003%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_phenolsulfonphthalein/Phenolsulfonphthalein_Nishida2003_none_a%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 15:27 UTC</sub>
