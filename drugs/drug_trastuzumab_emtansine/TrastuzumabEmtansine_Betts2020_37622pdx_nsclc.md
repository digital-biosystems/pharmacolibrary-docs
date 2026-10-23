<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;trastuzumab emtansine&quot;,&quot;href&quot;:&quot;drugs/drug_trastuzumab_emtansine/&quot;},{&quot;label&quot;:&quot;Betts_2020 \u00b7 37622pdx_nsclc&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;TrastuzumabEmtansine_Chen2017_reference&quot;,&quot;label&quot;:&quot;Chen_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trastuzumab_emtansine/TrastuzumabEmtansine_Chen2017_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;TrastuzumabEmtansine_Gao2026_reference&quot;,&quot;label&quot;:&quot;Gao_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trastuzumab_emtansine/TrastuzumabEmtansine_Gao2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;TrastuzumabEmtansine_Gupta2012_reference&quot;,&quot;label&quot;:&quot;Gupta_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trastuzumab_emtansine/TrastuzumabEmtansine_Gupta2012_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;TrastuzumabEmtansine_Betts2020_mouseb&quot;,&quot;label&quot;:&quot;Betts_2020_mouseb&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trastuzumab_emtansine/TrastuzumabEmtansine_Betts2020_mouseb.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# trastuzumab emtansine — `TrastuzumabEmtansine_Betts2020_37622pdx_nsclc`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span>

> Only clearance was extracted — no volume; q has no unit.

<div class="pk-model-meta" hidden drug="trastuzumab emtansine" model-id="TrastuzumabEmtansine_Betts2020_37622pdx_nsclc" status="needs_review" stale="false" population="adults with cancer" measured-compound="trastuzumab_emtansine" parameterization="mechanistic" topology="1C"></div>

## Citation
Betts A, Clark T, Jasper P, Tolsma J, van der Graaf PH, Graziani EI et al. Use of translational modeling and simulation for quantitative comparison of PF-06804103, a new generation HER2 ADC, with Trastuzumab-DM1. Journal of pharmacokinetics and pharmacodynamics 47(5):513-526 (2020).
  ·  DOI: [10.1007/s10928-020-09702-3](https://doi.org/10.1007/s10928-020-09702-3)

## Population and dosing

**Population:** adults with cancer · condition cancer · age group adult.

> **Species: human + animal.** The paper reports both human and animal data; check which group this record describes before reading it as human pharmacology (read from the LLM relevance screen, p(non-human) 0.50).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| kg,Ex (day−1) | kel | 0.0559 | day−1 |
| kg (mm3 day−1) | Q | 68.4 | mm3 day−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only clearance was extracted — no volume; q has no unit.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (Q), so that value has no SI equivalent. Extracted — trastuzumab emtansine: kel 0.0559 day−1, Q 68.4 mm3 day−1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has trastuzumab_emtansine, the second reading T-DM1; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| kg,Ex (day−1) | `Q47` · kel | 0.0559 | day−1 | 6.47e-07 | 1/s | 1/d | llm (0.6) | Tab2:row2:col6 |
| kg (mm3 day−1) | `Q30` · Q | 68.4 | mm3 day−1 |  |  | mm3/d | llm (0.6) | Tab2:row3:col6 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'mm3 day−1' (Q)
- dropped unlinked row (NIL): 'τ (day)' — extend the ontology if this is a real PK parameter (source ['Tab2:row5:col6'])
- dropped unlinked row (NIL): 'kk,max (day−1)' — extend the ontology if this is a real PK parameter (source ['Tab2:row6:col6'])
- dropped PD-category row 'kc50 (µg mL−1)' → Q322 (IC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab2:row7:col6'])
- dropped unlinked row (NIL): 'n' — extend the ontology if this is a real PK parameter (source ['Tab2:row8:col6'])
- dropped unlinked row (NIL): 'Condition number' — extend the ontology if this is a real PK parameter (source ['Tab2:row14:col6'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=trastuzumab_emtansine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted
- population split: '37622pdx (nsclc)' subgroup of Betts_2020 (paper reports 9 populations: 144580pdx (breast), 24312pdx (breast), 37622pdx (nsclc), bt474clx (breast), ga-3109pdx (gastric), jimt-1clx (breast), mouseb, n87clx (gastric), t-dm1)
- molar mass: none found for 'trastuzumab_emtansine' — its concentrations stay mass-only
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell Tab2:row8:col3 = '1 (-)'
- unparsed cell Tab2:row8:col4 = '1 (-)'
- unparsed cell Tab2:row8:col5 = '2.6 (-)'
- unparsed cell Tab2:row10:col3 = '0.271 (-)'
- unparsed cell Tab2:row10:col5 = '0.373 (-)'
- unparsed cell Tab2:row10:col6 = '0.372 (-)'
- unparsed cell Tab2:row10:col7 = '0.359 (-)'
- unparsed cell Tab2:row10:col8 = '0.25 (-)'
- unparsed cell Tab2:row11:col3 = '0.666 (-)'
- unparsed cell Tab2:row11:col5 = '0.0441 (-)'
- unparsed cell Tab2:row11:col6 = '0.789 (-)'
- unparsed cell Tab2:row11:col7 = '1.3 (-)'
- unparsed cell Tab2:row11:col8 = '0.316 (-)'
- companion parameter table 1 transcribed (8 record(s))
- unparsed cell Betts_2020_table_4:row4:col1 = 'HER2 binding affinity'
- unparsed cell Betts_2020_table_4:row5:col1 = 'Rate constant for HER2 shedding'
- unparsed cell Betts_2020_table_4:row6:col1 = 'Rate constant for HER2 degradation'
- unparsed cell Betts_2020_table_4:row7:col1 = 'Elimination rate constant of the HER2-ADC complex'
- companion parameter table 4 transcribed (16 record(s))
- LLM selected parameter table(s) 1, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.333 (3/9 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [] | [['t-dm1', 'her2 ecd', 'binding'], ['pf-06804103', 'her2 ecd', 'binding']] | mismatch |
| `gpt-oss-120b` | `parameters[kg,ex].parameter_id` | Q47 | Q50 | mismatch |
| `gpt-oss-120b` | `parameters[kk,max]` |  | 0.362 | only_one_extracted |
| `gpt-oss-120b` | `parameters[τ]` |  | 3.32 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | trastuzumab_emtansine | T-DM1 | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | trastuzumab_emtansine | T-DM1 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Tab2:row2:col6'] |
| C5_unit_missing_Q30 | fail | [length] ** 3 / [time] | mm3 day−1 | ['Tab2:row3:col6'] |
| C8_topology | pass |  |  |  |

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
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btrastuzumab_emtansine%5D%20TrastuzumabEmtansine_Betts2020_37622pdx_nsclc&body=Drug%3A%20trastuzumab_emtansine%0ARecord%3A%20TrastuzumabEmtansine_Betts2020_37622pdx_nsclc%0APaper%3A%20Betts_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_trastuzumab_emtansine/TrastuzumabEmtansine_Betts2020_37622pdx_nsclc%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 21:47 UTC</sub>
