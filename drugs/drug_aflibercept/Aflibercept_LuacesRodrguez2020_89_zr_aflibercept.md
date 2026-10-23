<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;aflibercept&quot;,&quot;href&quot;:&quot;drugs/drug_aflibercept/&quot;},{&quot;label&quot;:&quot;Luaces-Rodr\u00edguez_2020 \u00b7 89_zr_aflibercept&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Aflibercept_Thai2013_reference&quot;,&quot;label&quot;:&quot;Thai_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_aflibercept/Aflibercept_Thai2013_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# aflibercept — `Aflibercept_LuacesRodrguez2020_89_zr_aflibercept`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> Aflibercept clearance and volume of distribution are implausibly small, and a reported unit could not be converted to SI.

<div class="pk-model-meta" hidden drug="aflibercept" model-id="Aflibercept_LuacesRodrguez2020_89_zr_aflibercept" status="rejected" stale="false" population="rats" measured-compound="aflibercept" parameterization="mechanistic" topology="1C"></div>

## Citation
Luaces-Rodríguez A, Del Amo EM, Mondelo-García C, Gómez-Lado N, Gonzalez F, Ruibal Á et al. PET study of ocular and blood pharmacokinetics of intravitreal bevacizumab and aflibercept in rats. European journal of pharmaceutics and biopharmaceutics : official journal of Arbeitsgemeinschaft fur Pharmazeutische Verfahrenstechnik e.V 154:330–337 (2020).
  ·  DOI: [10.1016/j.ejpb.2020.06.024](https://doi.org/10.1016/j.ejpb.2020.06.024)

## Population and dosing

**Population:** rats · condition healthy · n = , 3.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 12 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| K a (day -1 ) | kabs | 5.40 | day -1 |
| k (day -1 ) | kel | 0.22 | day -1 |
| t 1/2 (day) | t1/2z | 3.18 | day |
| T max (day) | tmax | 0.76 | day |
| C max (Bq•µL -1 ) | Cmax | 25.40 | Bq•µL -1 |
| AUC 0 ∞ (Bq•µL -1 •day) | AUC∞ | 135.51 | Bq•µL -1 •day |
| V d (mL) | V | 83.31 | mL |
| CL (mL•day -1 ) | CL | 16.04 | mL/day |
| α (day -1 ) | λ1 | 8.22 | day -1 |
| β (day -1 ) | kel | 0.56 | day -1 |
| t 1/2α (day) | t1/2α | 0.08 | day |
| t 1/2β (day) | t1/2β | 1.29 | day |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.812). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Aflibercept clearance and volume of distribution are implausibly small, and a reported unit could not be converted to SI.**

The record lists a clearance of 16.04 mL/day and a volume of distribution of 83.31 mL, which are outside the physiological window for rats. Additionally, a reported unit could not be converted to SI, preventing the parameter from being processed with a standard value. Extracted — aflibercept: kabs 5.4 day -1, kel 0.22 day -1, t1/2z 3.18 day, tmax 0.76 day, Cmax 25.4 Bq•µL -1, AUC∞ 136 Bq•µL -1 •day, V 83.3 mL, CL 16 mL/day, … (+4).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has aflibercept, the second reading unknown; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| K a (day -1 ) | `Q49` · kabs | 5.40 | day -1 | 6.25e-05 | 1/s | 1/d | space_fold (0.95) | tab_1:row1:col2 |
| k (day -1 ) | `Q47` · kel | 0.22 | day -1 | 2.546e-06 | 1/s | 1/d | exact (1) | tab_1:row2:col2 |
| t 1/2 (day) | `Q57` · t1/2z | 3.18 | day | 2.748e+05 | s | d | space_fold (0.95) | tab_1:row3:col2 |
| T max (day) | `Q56` · tmax | 0.76 | day | 6.566e+04 | s | d | space_fold (0.95) | tab_1:row4:col2 |
| C max (Bq•µL -1 ) | `Q32` · Cmax | 25.40 | Bq•µL -1 |  |  | bq/µl | space_fold (0.95) | tab_1:row5:col2 |
| AUC 0 ∞ (Bq•µL -1 •day) | `Q17` · AUC∞ | 135.51 | Bq•µL -1 •day |  |  | (d·bq)/µl | llm_corrected (0.6) | tab_1:row6:col2 |
| V d (mL) | `Q61` · V | 83.31 | mL | 8.331e-05 | m3 | ml | space_fold (0.95) | tab_1:row7:col2 |
| CL (mL•day -1 ) | `Q22` · CL | 16.04 | mL/day | 1.856e-10 | m3/s | L/h | exact (1) | tab_1:row8:col2 |
| α (day -1 ) | `Q67` · λ1 | 8.22 | day -1 |  |  | 1/d | exact (1) | Luaces-Rodríguez_2020_table_1:row0:col3 |
| β (day -1 ) | `Q47` · kel | 0.56 | day -1 | 6.481e-06 | 1/s | 1/d | exact (1) | Luaces-Rodríguez_2020_table_1:row1:col3 |
| t 1/2α (day) | `Q59` · t1/2α | 0.08 | day | 6912 | s | d | space_fold (0.95) | Luaces-Rodríguez_2020_table_1:row2:col3 |
| t 1/2β (day) | `Q60` · t1/2β | 1.29 | day | 1.115e+05 | s | d | space_fold (0.95) | Luaces-Rodríguez_2020_table_1:row3:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'Bq•µL -1' (Cmax)
- unit_dimension_unknown: 'Bq•µL -1 •day' (AUC∞)
- unit_dimension_unknown: 'mL•day -1' (CL)
- unit_dimension_mismatch: 'α (day -1 )' → Q67 (unit '1 / [time]' vs ontology '[mass] / [time]') — route to review
- NIL: refused to back-fill base 't1/2z' from footnote/prose loose number 3.18 (source ['tab_1:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 7.08 (source ['tab_1:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'Cmax' from footnote/prose loose number 25.4 (source ['tab_1:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 18.24 (source ['tab_1:footnote', 'tab_1:footnote', 'tab_1:footnote', 'tab_1:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 23.82 (source ['tab_1:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 39.92 (source ['tab_1:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 19.42 (source ['tab_1:footnote']); the table cell was unparseable — needs review
- covariate category for AUC from footnote/prose kept as documentation only (['tab_1:footnote'])
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 135.51 (source ['tab_1:footnote']); the table cell was unparseable — needs review
- implicit units: 'C max (Bq•µL -1 )' — the LLM proposed 'Bq/µL', whose dimension does not fit Q32; left unset
- implicit units: 'AUC 0 ∞ (Bq•µL -1 •day)' — the LLM proposed 'Bq/µL/day', whose dimension does not fit Q17; left unset
- implicit units: 'CL (mL•day -1 )' → mL/day (from the paper text: "The parameter list provided in the prompt explicitly includes the unit in the label: 'CL (mL•day -1 ) = 16.04'. Addition")
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q61 (V d (mL)); Q22 (CL (mL•day -1 ))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=aflibercept
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- population split: '89 zr-aflibercept' subgroup of Luaces-Rodríguez_2020 (paper reports 3 populations: 89 zr-aflibercept, 89 zr-bevacizumab 89 zr-aflibercept, 89 zr-dfo *)
- molar mass: none found for 'aflibercept' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Luaces-Rodríguez_2020_table_1:row1:col1 = '0.22 ± 0.13 *'
- unparsed cell Luaces-Rodríguez_2020_table_1:row3:col1 = '3.23 ± 0.28 *'
- companion parameter table 1 transcribed (12 record(s))
- LLM selected parameter table(s) 1, 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.812 (13/16 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [] | [['none', 'none', 'none']] | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | aflibercept | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | aflibercept | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 12 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | pass | 3.3 | 3.6 | 1.091 | 0.25 | reported t½β |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  |  |  | ['tab_1:row8:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] |  |  |  | ['tab_1:row2:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] |  |  |  | ['Luaces-Rodríguez_2020_table_1:row1:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  |  |  | ['tab_1:row1:col2'] |
| C5_dimension_Q56 | pass | [time] |  |  |  | ['tab_1:row4:col2'] |
| C5_dimension_Q57 | pass | [time] |  |  |  | ['tab_1:row3:col2'] |
| C5_dimension_Q59 | pass | [time] |  |  |  | ['Luaces-Rodríguez_2020_table_1:row2:col3'] |
| C5_dimension_Q60 | pass | [time] |  |  |  | ['Luaces-Rodríguez_2020_table_1:row3:col3'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  |  |  | ['tab_1:row7:col2'] |
| C5_dimension_Q67 | fail | 1 / [time] | day -1 |  |  | ['Luaces-Rodríguez_2020_table_1:row0:col3'] |
| C5_unit_missing_Q17 | fail | [mass] * [time] / [length] ** 3 | Bq•µL -1 •day |  |  | ['tab_1:row6:col2'] |
| C5_unit_missing_Q32 | fail | [mass] / [length] ** 3 | Bq•µL -1 |  |  | ['tab_1:row5:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 16.04 |  |  | ['tab_1:row8:col2'] |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q22 | fail | clearance within physiological range | 0.000668 L/h |  |  | ['tab_1:row8:col2'] |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.0833 L |  |  | ['tab_1:row7:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Baflibercept%5D%20Aflibercept_LuacesRodrguez2020_89_zr_aflibercept&body=Drug%3A%20aflibercept%0ARecord%3A%20Aflibercept_LuacesRodrguez2020_89_zr_aflibercept%0APaper%3A%20Luaces-Rodr%C3%ADguez_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_aflibercept/Aflibercept_LuacesRodrguez2020_89_zr_aflibercept%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 21:50 UTC</sub>
