<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N04B&quot;,&quot;href&quot;:&quot;atc/N04B.md&quot;},{&quot;label&quot;:&quot;amantadine&quot;,&quot;href&quot;:&quot;drugs/drug_amantadine/&quot;},{&quot;label&quot;:&quot;deVries_2019 \u00b7 geometric_ls_mean&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Amantadine_Jaber2021_reference&quot;,&quot;label&quot;:&quot;Jaber_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amantadine/Amantadine_Jaber2021_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amantadine_Ohk2022_reference&quot;,&quot;label&quot;:&quot;Ohk_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amantadine/Amantadine_Ohk2022_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amantadine_Riley2026_reference&quot;,&quot;label&quot;:&quot;Riley_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amantadine/Amantadine_Riley2026_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# amantadine — `Amantadine_deVries2019_geometric_ls_mean`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.6), gpt-oss:120b (not confirmed, agreement 0.875). The first reading is what the record holds.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**This paper's disposition core is incomplete.**

A volume and a clearance/elimination estimate from this paper are needed to build its model. Review values from other papers (Jaber_2021) cannot stand in for this paper's evidence. A reported unit could not be converted (Cmax, AUC∞ and Ae ), so that value has no SI equivalent. Extracted — amantadine: Cmax 337 ng/mL, AUC∞ 3.68e+04 ng·h/mL, Ae 51.4 mg, CLR 2.45e+03 mL/h, V 38.9 L/70 kg, kabs 3.3 h−1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has amantadine (extended-release), the second reading unknown; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> **Dose compound ≠ measured compound:** dosed `amantadine (extended-release)`, measured `amantadine`.

## Citation
deVries T et al., Effects of Renal Impairment on the Phar…, CNS drugs (2019)
  ·  DOI: [10.1007/s40263-019-00651-1](https://doi.org/10.1007/s40263-019-00651-1)

## Model component
<dbs-pgx drug="amantadine" model-id="Amantadine_deVries2019_geometric_ls_mean" status="needs_review" stale="false" population="adults with normal, moderate, or severe renal impairment" measured-compound="amantadine" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 6 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| C max | `Q32` · Cmax | 336.772 | ng/mL | not captured | ng/mL | not captured | space_fold (0.95) | Tab3:row1:col2 | — | not captured |
| AUCinf | `Q17` · AUC∞ | 36796.005 | ng·h/mL | not captured | ng·h/mL | not captured | exact (1.0) | Tab3:row4:col2 | — | not captured |
| Cumulative amantadine recovered in urine | `Q91` · Ae | 51.403 | mg | not captured | mg | not captured | llm (0.6) | Tab3:row7:col2 | — | not captured |
| Renal clearance | `Q26` · CLR | 2445.165 | mL/h | 6.792125e-07 | L/h | not captured | exact (1.0) | Tab3:row10:col2 | — | not captured |
| V (L/70 kg) | `Q61` · V | 38.9 | L/70 kg | 0.0389 | L | not captured | review_gapfill (0.7) | Jaber_2021:review | — | not captured |
| KA (h−1) | `Q49` · kabs | 3.3 | h−1 | 0.0009166666666666666 | 1/h | not captured | review_gapfill (0.7) | Jaber_2021:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- implicit units: 'C max' → ng/mL (from the popPK convention: 'Paper gives no unit for Cmax; plasma amantadine concentrations are conventionally reported in ng/mL, consistent with a v')
- implicit units: 'AUCinf' → ng·h/mL (from the popPK convention: 'No unit stated; AUCinf of ~36,800 is consistent with ng·h/mL given Cmax ~337 ng/mL and half-life on the order of tens of')
- implicit units: 'Cumulative amantadine recovered in urine' → mg (from the popPK convention: 'No unit stated; Ae is the amount of the 129-mg dose excreted unchanged in urine, so ~51 mg (about 40% of dose) is consis')
- implicit units: 'Renal clearance' → mL/h (from the paper text: "The paper states 'The amantadine renal clearance rate was 2618 mL/h for subjects with severe impairment and 10,965 mL/h ")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=amantadine
- population split: 'geometric ls mean' subgroup of deVries_2019 (paper reports 3 populations: adjusted p value, geometric ls mean, group)
- gap-filled Q61 (V) from Jaber_2021's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Jaber_2021's review values (primary lacked it)

**Extraction notes:**
- unparsed cell Tab3:row1:col6 = '(70.75, 115.56)'
- unparsed cell Tab3:row2:col5 = '(93.71, 162.80)'
- unparsed cell Tab3:row3:col5 = '(104.78, 178.07)'
- unparsed cell Tab3:row4:col6 = '(79.19, 174.33)'
- unparsed cell Tab3:row5:col3 = '&lt; 0.0001'
- unparsed cell Tab3:row5:col5 = '(262.52, 546.87)'
- unparsed cell Tab3:row6:col3 = '&lt; 0.0001'
- unparsed cell Tab3:row6:col5 = '(220.42, 471.80)'
- unparsed cell Tab3:row7:col6 = '(55.98, 92.79)'
- unparsed cell Tab3:row8:col3 = '&lt; 0.0001'
- unparsed cell Tab3:row8:col5 = '(43.01, 64.76)'
- unparsed cell Tab3:row9:col5 = '(62.80, 85.38)'
- unparsed cell Tab3:row10:col6 = '(47.86, 121.33)'
- unparsed cell Tab3:row11:col3 = '&lt; 0.0001'
- unparsed cell Tab3:row11:col5 = '(15.61, 35.55)'
- unparsed cell Tab3:row12:col3 = '&lt; 0.0001'
- unparsed cell Tab3:row12:col5 = '(20.36, 46.95)'
- companion parameter table 2 transcribed (0 record(s))
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.6 (6/10 fields) | 4 |
| `gpt-oss:120b` | not confirmed | 0.875 (7/8 fields) | 1 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[ka]` | 3.3 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v]` | 38.9 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | amantadine (extended-release) | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | amantadine | unknown | mismatch |
| `gpt-oss:120b` | `screen.dose_compound` | amantadine (extended-release) | amantadine | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Tab3:row4:col2'] |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row10:col2'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Tab3:row1:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Jaber_2021:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Jaber_2021:review'] |
| C5_dimension_Q91 | pass | [mass] | not captured | not captured | not captured | ['Tab3:row7:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q61 | pass | volume within physiological range | 38.9 L | not captured | not captured | ['Jaber_2021:review'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_amantadine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `deVries_2019` / `deVries_2019::geometric_ls_mean`)


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

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 12:39 UTC</sub>
