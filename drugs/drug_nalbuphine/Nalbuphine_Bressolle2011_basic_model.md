<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;nalbuphine&quot;,&quot;href&quot;:&quot;drugs/drug_nalbuphine/&quot;},{&quot;label&quot;:&quot;Bressolle_2011 \u00b7 basic_model&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nalbuphine_Gao2022_reference&quot;,&quot;label&quot;:&quot;Gao_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nalbuphine/Nalbuphine_Gao2022_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nalbuphine_Nie2023_estimates&quot;,&quot;label&quot;:&quot;Nie_2023_estimates&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nalbuphine/Nalbuphine_Nie2023_estimates.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nalbuphine_Zhu2024_reference&quot;,&quot;label&quot;:&quot;Zhu_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nalbuphine/Nalbuphine_Zhu2024_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nalbuphine_EudyByrne2023_reference&quot;,&quot;label&quot;:&quot;Eudy-Byrne_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nalbuphine/Nalbuphine_EudyByrne2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nalbuphine_Nie2023_final_model&quot;,&quot;label&quot;:&quot;Nie_2023_final_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nalbuphine/Nalbuphine_Nie2023_final_model.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# nalbuphine — `Nalbuphine_Bressolle2011_basic_model`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-28 14:39 UTC (Needs review), but the paper was screened again on 2026-10-07 05:31 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. The clearance plausibility check could not be computed.

<div class="pk-model-meta" hidden drug="nalbuphine" model-id="Nalbuphine_Bressolle2011_basic_model" status="needs_review" stale="true" population="paediatric patients" measured-compound="nalbuphine" parameterization="mechanistic" topology="2C"></div>

## Citation
Bressolle F, Khier S, Rochette A, Kinowski JM, Dadure C, Capdevila X. Population pharmacokinetics of nalbuphine after surgery in children. British journal of anaesthesia 106(4):558–565 (2011).
  ·  DOI: [10.1093/bja/aer001](https://doi.org/10.1093/bja/aer001)

## Population and dosing

**Population:** paediatric patients · age group child · n = &gt;.

**Dosing:** 14 mg, iv, multiple.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| CL (litre h 21 ) 130 | CL | 131 | L/h | 0.0324 (None% RSE) |
| V 1 (litre) | V1 | 208 | litre |  |
| V 2 (litre) | V2 | 153 | litre |  |
| Q (litre h 21 ) 75.6 | Q | 75.8 | L/h |  |
| v 2 Q | Q2 | 0.123 |  |  |
| -KA (1/h) θ 5 First order absorption rate constant | kabs | 0.826 | 1/h |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.8). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The clearance plausibility check could not be computed.**

The check had no reference to compare the clearance against, so the value is unverified rather than shown to be wrong. Extracted — nalbuphine: CL 131, V1 208 litre, V2 153 litre, Q 75.8, kabs 0.357 h-1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of -ka (1/h) θ 5 first order absorption rate constant: this record has 0.826, the second reading none; it also differs on 1 more field. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| CL (litre h 21 ) 130 | `Q22` · CL | 131 | L/h | 3.639e-05 | m3/s | L/h | llm_confirmed (0.6) | tab_5:row6:col2 | 0.0324 (None% RSE) |
| V 1 (litre) | `Q63` · V1 | 208 | litre | 0.208 | m3 | l | space_fold (0.95) | tab_5:row7:col3, Bressolle_2011_table_2:row4:col1 |  |
| V 2 (litre) | `Q64` · V2 | 153 | litre | 0.153 | m3 | l | space_fold (0.95) | tab_5:row8:col3, Bressolle_2011_table_2:row6:col1 |  |
| Q (litre h 21 ) 75.6 | `Q30` · Q | 75.8 | L/h | 2.106e-05 | m3/s | L/h | llm (0.6) | tab_5:row9:col2 |  |
| v 2 Q | `Q99` · Q2 | 0.123 |  |  |  |  | llm (0.6) | tab_5:row16:col3 |  |
| -KA (1/h) θ 5 First order absorption rate constant | `Q49` · kabs | 0.826 | 1/h | 0.0002294 | 1/s | 1/h | review_gapfill (0.7) | Eudy-Byrne_2023:review |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'v 2 CL' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'v 2 V 1' routed out of structural estimates ('Inter-individual variability')
- routed 'variability, s 2' → Q315 (sigma) to residual_error — variability estimate, not a structural parameter
- unit_dimension_unknown: 'litre h 21' (CL)
- dropped duplicate Q22 ('CL (litre h 21 )', value '41.6') — already have one for this compound
- unit_dimension_unknown: 'litre h 21' (Q)
- dropped duplicate Q30 ('Q (litre h 21 )', value '15.7') — already have one for this compound
- dropped PD-category row 's (%)' → Q335 (slope, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Bressolle_2011_table_2:row10:col1'])
- dropped unlinked row (NIL): '(DV vs IPRED)' — extend the ontology if this is a real PK parameter (source ['Bressolle_2011_table_2:row12:col1', 'Bressolle_2011_table_2:row15:col1'])
- dropped unlinked row (NIL): '(DV vs PRED)' — extend the ontology if this is a real PK parameter (source ['Bressolle_2011_table_2:row13:col1', 'Bressolle_2011_table_2:row16:col1'])
- implicit units: 'CL (litre h 21 ) 130' → L/h (from the paper text: "The paper text states: 'clearance 130 litre h 21 70 kg 21'.")
- implicit units: 'Q (litre h 21 ) 75.6' → L/h (from the paper text: "The paper text states: 'inter-compartment clearance 75.6 litre h 21 70 kg 21'.")
- implicit units: 'v 2 Q' — the LLM proposed '1/h', whose dimension does not fit Q99; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=nalbuphine
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- population split: 'basic model' subgroup of Bressolle_2011 (paper reports 3 populations: basic model, final covariate model (allometric model), mean)
- gap-filled Q49 (kabs) from Eudy-Byrne_2023's review values (primary lacked it)

**Extraction notes:**
- unparsed cell tab_5:row6:col1 = '115, 145'
- unparsed cell tab_5:row6:col3 = '118, 144'
- unparsed cell tab_5:row7:col2 = '166, 255'
- unparsed cell tab_5:row7:col4 = '164, 251'
- unparsed cell tab_5:row8:col2 = '129, 173'
- unparsed cell tab_5:row8:col4 = '128, 180'
- unparsed cell tab_5:row9:col1 = '55.0, 96.2'
- unparsed cell tab_5:row9:col3 = '54.6, 96.9'
- unparsed cell tab_5:row11:col2 = '0.0140,'
- unparsed cell tab_5:row11:col4 = '0.0128,'
- unparsed cell tab_5:row13:col2 = '0.0405,'
- unparsed cell tab_5:row13:col4 = '0.0436,'
- unparsed cell tab_5:row16:col2 = '0.0280,'
- unparsed cell tab_5:row16:col4 = '0.0272,'
- unparsed cell tab_5:row18:col2 = '0.0353,'
- unparsed cell tab_5:row18:col4 = '0.0340,'
- unparsed cell Bressolle_2011_table_2:row2:col2 = '31.2 (39.9), 13.6'
- unparsed cell Bressolle_2011_table_2:row3:col5 = '18.4 (36.7), 7.86'
- unparsed cell Bressolle_2011_table_2:row4:col2 = '39.1 (38.3), 37.0'
- unparsed cell Bressolle_2011_table_2:row5:col5 = '30.7 (53.1), 28.5'
- unparsed cell Bressolle_2011_table_2:row6:col2 = '68.8 (57.5), 28.6'
- unparsed cell Bressolle_2011_table_2:row8:col2 = '22.4 (28.7), 44.7'
- unparsed cell Bressolle_2011_table_2:row9:col5 = '34.8 (53.5), 34.4'
- companion parameter table 2 transcribed (18 record(s))
- companion parameter table 3 transcribed (12 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.8 (8/10 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[-ka (1/h) θ 5 first order absorption rate constant]` | 0.826 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v 2 q]` | 0.123 |  | only_one_extracted |

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
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['tab_5:row6:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['tab_5:row9:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Eudy-Byrne_2023:review'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['tab_5:row7:col3', 'Bressolle_2011_table_2:row4:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['tab_5:row8:col3', 'Bressolle_2011_table_2:row6:col1'] |
| C5_unit_missing_Q99 | fail | [length] ** 3 / [time] |  | ['tab_5:row16:col3'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 131 | ['tab_5:row6:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 131 L/h | ['tab_5:row6:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 208 L | ['tab_5:row7:col3', 'Bressolle_2011_table_2:row4:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 153 L | ['tab_5:row8:col3', 'Bressolle_2011_table_2:row6:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnalbuphine%5D%20Nalbuphine_Bressolle2011_basic_model&body=Drug%3A%20nalbuphine%0ARecord%3A%20Nalbuphine_Bressolle2011_basic_model%0APaper%3A%20Bressolle_2011%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_nalbuphine/Nalbuphine_Bressolle2011_basic_model%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 05:31 UTC</sub>
