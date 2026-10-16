<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;cefazolin&quot;,&quot;href&quot;:&quot;drugs/drug_cefazolin/&quot;},{&quot;label&quot;:&quot;\u0160antav\u00fd_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cefazolin_Ryan2022_reference&quot;,&quot;label&quot;:&quot;Ryan_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefazolin/Cefazolin_Ryan2022_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cefazolin_Santavy2023_reference&quot;,&quot;label&quot;:&quot;Santavy_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefazolin/Cefazolin_Santavy2023_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cefazolin — `Cefazolin_antav2022_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.889). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**V has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Extracted — cefazolin: CL 0.045 L/h, V1 4.91 L, V 0.51, Q 0.28 L/h, V2 22.1 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of β_vd1_bsa: this record has 0.51, the second reading none. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Šantavý P et al., Population Pharmacokinetics of Prophyla…, Antibiotics (Basel, Switzer… (2022)
  ·  DOI: [10.3390/antibiotics11111582](https://doi.org/10.3390/antibiotics11111582)

<div class="pk-model-meta" hidden drug="cefazolin" model-id="Cefazolin_antav2022_reference" status="needs_review" stale="false" population="adult patients undergoing cardiac surgery" measured-compound="cefazolin" parameterization="mechanistic" topology="3C"></div>

**Model structure:** 3-compartment; no model was built for this record.  
**Parameters:** 5 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL_pop (L/h) | `Q22` · CL | 0.045 | L/h | 1.25e-08 | [l] / [h] | not captured | llm (0.6) | antibiotics-11-01582-t002:row3:col1, antibiotics-11-01582-t002:row3:col2, antibiotics-11-01582-t002:row3:col3, antibiotics-11-01582-t002:row3:col4 | — | not captured |
| Vd1_pop (L) | `Q63` · V1 | 4.91 | L | 0.00491 | [l] | not captured | llm (0.6) | antibiotics-11-01582-t002:row5:col1, antibiotics-11-01582-t002:row5:col2, antibiotics-11-01582-t002:row5:col3, antibiotics-11-01582-t002:row5:col4 | — | not captured |
| β_Vd1_BSA | `Q61` · V | 0.51 | not captured | not captured | not captured | not captured | llm (0.6) | antibiotics-11-01582-t002:row6:col1, antibiotics-11-01582-t002:row6:col2, antibiotics-11-01582-t002:row6:col3, antibiotics-11-01582-t002:row6:col4 | — | not captured |
| Q_pop (L/h) | `Q30` · Q | 0.28 | L/h | 7.777777777777778e-08 | [l] / [h] | not captured | llm (0.6) | antibiotics-11-01582-t002:row7:col1, antibiotics-11-01582-t002:row7:col2, antibiotics-11-01582-t002:row7:col3, antibiotics-11-01582-t002:row7:col4 | — | not captured |
| Vd2_pop (L) | `Q64` · V2 | 22.07 | L | 0.02207 | [l] | not captured | llm (0.6) | antibiotics-11-01582-t002:row8:col1, antibiotics-11-01582-t002:row8:col2, antibiotics-11-01582-t002:row8:col3, antibiotics-11-01582-t002:row8:col4 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q22 ('β_CL_eGFR', value '0.49') — already have one for this compound
- dropped duplicate Q64 ('β_Vd2_MiECC', value '-0.79') — already have one for this compound
- dropped duplicate Q64 ('β_Vd2_ECC', value '-0.77') — already have one for this compound
- dropped duplicate Q22 ('Ω_CL', value '0.35') — already have one for this compound
- dropped duplicate Q63 ('Ω_Vd1', value '0.10') — already have one for this compound
- dropped unlinked row (NIL): 'Ω_Q' — extend the ontology if this is a real PK parameter (source ['antibiotics-11-01582-t002:row14:col1', 'antibiotics-11-01582-t002:row14:col2', 'antibiotics-11-01582-t002:row14:col3', 'antibiotics-11-01582-t002:row14:col4'])
- routed 'Ω_Vd2' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'Proportional' — extend the ontology if this is a real PK parameter (source ['antibiotics-11-01582-t002:row17:col1', 'antibiotics-11-01582-t002:row17:col2', 'antibiotics-11-01582-t002:row17:col3', 'antibiotics-11-01582-t002:row17:col4'])
- implicit units: 'β_Vd1_BSA' — the LLM proposed 'L/m^2', whose dimension does not fit Q61; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=cefazolin
- structure disagreement: deterministic 3C vs LLM 2C — review compartment count

**Extraction notes:**
- unparsed cell antibiotics-11-01582-t002:row9:col4 = '−1.33–(−0.20)'
- unparsed cell antibiotics-11-01582-t002:row10:col4 = '−1.29–(−0.24)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.889 (8/9 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[β_vd1_bsa]` | 0.51 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['antibiotics-11-01582-t002:row3:col1', 'antibiotics-11-01582-t002:row3:col2', 'antibiotics-11-01582-t002:row3:col3', 'antibiotics-11-01582-t002:row3:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['antibiotics-11-01582-t002:row7:col1', 'antibiotics-11-01582-t002:row7:col2', 'antibiotics-11-01582-t002:row7:col3', 'antibiotics-11-01582-t002:row7:col4'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['antibiotics-11-01582-t002:row5:col1', 'antibiotics-11-01582-t002:row5:col2', 'antibiotics-11-01582-t002:row5:col3', 'antibiotics-11-01582-t002:row5:col4'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['antibiotics-11-01582-t002:row8:col1', 'antibiotics-11-01582-t002:row8:col2', 'antibiotics-11-01582-t002:row8:col3', 'antibiotics-11-01582-t002:row8:col4'] |
| C5_unit_missing_Q61 | fail | [length] ** 3 | not captured | not captured | not captured | ['antibiotics-11-01582-t002:row6:col1', 'antibiotics-11-01582-t002:row6:col2', 'antibiotics-11-01582-t002:row6:col3', 'antibiotics-11-01582-t002:row6:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.045 | not captured | not captured | ['antibiotics-11-01582-t002:row3:col1', 'antibiotics-11-01582-t002:row3:col2', 'antibiotics-11-01582-t002:row3:col3', 'antibiotics-11-01582-t002:row3:col4'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.045 L/h | not captured | not captured | ['antibiotics-11-01582-t002:row3:col1', 'antibiotics-11-01582-t002:row3:col2', 'antibiotics-11-01582-t002:row3:col3', 'antibiotics-11-01582-t002:row3:col4'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 4.91 L | not captured | not captured | ['antibiotics-11-01582-t002:row5:col1', 'antibiotics-11-01582-t002:row5:col2', 'antibiotics-11-01582-t002:row5:col3', 'antibiotics-11-01582-t002:row5:col4'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 22.1 L | not captured | not captured | ['antibiotics-11-01582-t002:row8:col1', 'antibiotics-11-01582-t002:row8:col2', 'antibiotics-11-01582-t002:row8:col3', 'antibiotics-11-01582-t002:row8:col4'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_cefazolin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Šantavý_2022` / `Šantavý_2022::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 10:52 UTC</sub>
