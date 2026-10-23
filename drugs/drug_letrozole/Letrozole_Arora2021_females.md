<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L02B&quot;,&quot;href&quot;:&quot;atc/L02B.md&quot;},{&quot;label&quot;:&quot;letrozole&quot;,&quot;href&quot;:&quot;drugs/drug_letrozole/&quot;},{&quot;label&quot;:&quot;Arora_2021 \u00b7 females&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Letrozole_Puszkiel2024_reference&quot;,&quot;label&quot;:&quot;Puszkiel_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_letrozole/Letrozole_Puszkiel2024_reference.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# letrozole — `Letrozole_Arora2021_females`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> Only clearance was extracted — no volume.

<div class="pk-model-meta" hidden drug="letrozole" model-id="Letrozole_Arora2021_females" status="needs_review" stale="false" population="Sprague-Dawley rats" measured-compound="letrozole" parameterization="mechanistic" topology="1C"></div>

## Citation
Arora P, Gudelsky G, Desai PB. Gender-based differences in brain and plasma pharmacokinetics of letrozole in sprague-dawley rats: Application of physiologically-based pharmacokinetic modeling to gain quantitative insights. PloS one 16(4):e0248579 (2021).
  ·  DOI: [10.1371/journal.pone.0248579](https://doi.org/10.1371/journal.pone.0248579)

## Population and dosing

**Population:** Sprague-Dawley rats · condition healthy.

**Dosing:** 280 mg, intraperitoneal, multiple, every 24 h.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Half- life -t1/2 (h) | t1/2z | 34.00 | h |
| Cmax (ng/ml) | Cmax | 1200 | ng/ml |
| AUC 0–72 (h.ng/ml) | AUCt | 54390 | h.ng/ml |
| systemic clearance of letrozole female rats at steady state | CL | 39.3 | ml/h/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.778). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only clearance was extracted — no volume.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. A reported unit could not be converted (Cmax and AUCt), so that value has no SI equivalent. Extracted — letrozole: t1/2z 34 h, Cmax 1.2e+03 ng/ml, AUCt 5.44e+04 h.ng/ml, CL 39.3 ml/h/kg.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of systemic clearance: this record has none, the second reading 57.4; it also differs on 1 more field. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Half- life -t1/2 (h) | `Q57` · t1/2z | 34.00 | h | 1.224e+05 | s | h | llm_confirmed (0.6) | pone.0248579.t004:row3:col4, pone.0248579.t004:row3:col5, pone.0248579.t004:row3:col6 |
| Cmax (ng/ml) | `Q32` · Cmax | 1200 | ng/ml |  |  | ng/ml | exact (1) | pone.0248579.t004:row4:col4, pone.0248579.t004:row4:col5, pone.0248579.t004:row4:col6, pone.0248579.t004:row7:col4, pone.0248579.t004:row7:col5, pone.0248579.t004:row7:col6 |
| AUC 0–72 (h.ng/ml) | `Q19` · AUCt | 54390 | h.ng/ml |  |  | (h·ng)/ml | llm_corrected (0.6) | pone.0248579.t004:row5:col4, pone.0248579.t004:row5:col5, pone.0248579.t004:row5:col6 |
| systemic clearance of letrozole female rats at steady state | `Q22` · CL | 39.3 | ml/h/kg | 7.642e-07 | m3/s | L/h | boundary (0.8) | Arora_2021:other_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q19 ('AUC 0–12 (h.ng/ml)', value '5750') — already have one for this compound
- salvaged Q22 ('systemic clearance of letrozole female rats at steady state'=39.3) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=letrozole
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- population split: 'females' subgroup of Arora_2021 (paper reports 2 populations: females, males)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell Arora_2021_table_2:row12:col1 = '660 (260)*'
- unparsed cell Arora_2021_table_2:row13:col1 = '5750 (2160)*'
- unparsed cell Arora_2021_table_2:row14:col2 = '54390 (13100)**'
- companion parameter table 2 transcribed (27 record(s))
- unparsed cell Arora_2021_table_3:row4:col6 = '1.4 (Rac’; 1.2)'
- unparsed cell Arora_2021_table_3:row10:col1 = '2290 (624)***'
- unparsed cell Arora_2021_table_3:row10:col2 = '4830 (946)***'
- unparsed cell Arora_2021_table_3:row11:col1 = '23990 (5660)***'
- unparsed cell Arora_2021_table_3:row11:col2 = '49300 (6210)***'
- unparsed cell Arora_2021_table_3:row11:col6 = '4.2 (Rac’; 2.6)'
- unparsed cell Arora_2021_table_3:row12:col2 = '102970 (13860)***'
- companion parameter table 3 transcribed (30 record(s))
- LLM selected parameter table(s) 2, 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.778 (7/9 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[systemic clearance of letrozole female rats at steady state]` | 39.3 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[systemic clearance]` |  | 57.4 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q19 | pass | [time] * [mass] / [length] ** 3 |  | ['pone.0248579.t004:row5:col4', 'pone.0248579.t004:row5:col5', 'pone.0248579.t004:row5:col6'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['pone.0248579.t004:row4:col4', 'pone.0248579.t004:row4:col5', 'pone.0248579.t004:row4:col6', 'pone.0248579.t004:row7:col4', 'pone.0248579.t004:row7:col5', 'pone.0248579.t004:row7:col6'] |
| C5_dimension_Q57 | pass | [time] |  | ['pone.0248579.t004:row3:col4', 'pone.0248579.t004:row3:col5', 'pone.0248579.t004:row3:col6'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 39.3 | ['Arora_2021:other_prose'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 2.75 L/h | ['Arora_2021:other_prose'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bletrozole%5D%20Letrozole_Arora2021_females&body=Drug%3A%20letrozole%0ARecord%3A%20Letrozole_Arora2021_females%0APaper%3A%20Arora_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_letrozole/Letrozole_Arora2021_females%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-06 22:17 UTC</sub>
