<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03A&quot;,&quot;href&quot;:&quot;atc/R03A.md&quot;},{&quot;label&quot;:&quot;salbutamol&quot;,&quot;href&quot;:&quot;drugs/drug_salbutamol/&quot;},{&quot;label&quot;:&quot;Marques_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Salbutamol_Courlet2022_reference&quot;,&quot;label&quot;:&quot;Courlet_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_salbutamol/Salbutamol_Courlet2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Salbutamol_Marques2024v2_estimate&quot;,&quot;label&quot;:&quot;Marques_2024_2_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_salbutamol/Salbutamol_Marques2024v2_estimate.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Salbutamol_Walsh2023_reference&quot;,&quot;label&quot;:&quot;Walsh_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_salbutamol/Salbutamol_Walsh2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Salbutamol_Heuberger2018_reference&quot;,&quot;label&quot;:&quot;Heuberger_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_salbutamol/Salbutamol_Heuberger2018_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Boger_2019_FEV1&quot;,&quot;label&quot;:&quot;Boger_2019 \u00b7 FEV1&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_salbutamol/pd_Boger_2019_FEV1.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Venkatasubramanian_2020_TPR&quot;,&quot;label&quot;:&quot;Venkatasubramanian_2020 \u00b7 TPR&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_salbutamol/pd_Venkatasubramanian_2020_TPR.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# salbutamol — `Salbutamol_Marques2024_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The clearance plausibility check could not be computed.

<div class="pk-model-meta" hidden drug="salbutamol" model-id="Salbutamol_Marques2024_reference" status="needs_review" stale="false" population="virtual patients" measured-compound="salbutamol" parameterization="mechanistic" topology="2C"></div>

## Citation
Marques L, Vale N. Improving Individualized Salbutamol Treatment: A Population Pharmacokinetic Model for Oral Salbutamol in Virtual Patients. Pharmaceutics 17(1) (2024).
  ·  DOI: [10.3390/pharmaceutics17010039](https://doi.org/10.3390/pharmaceutics17010039)

## Population and dosing

**Population:** virtual patients · condition healthy and cirrhosis · age group mixed · n = 40.

**Dosing:** 4 mg, oral, multiple, every 4 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| Mtt (h) | MTT | 9.50 | h | 7.14 |
| Ktr (h−1) | ktr | 0.15 | h−1 | 9.21 |
| ka (h−1) | kabs | 2.91 | h−1 | 6.80 |
| Cl (L/h) | CL | 140 | L/h | 223 |
| V1 (L) | V1 | 77.5 | L | 97.2 |
| Q (L/h) | Q | 48.9 | L/h | 24.9 |
| V2 (L) | V2 | 130 | L | 21.4 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.211). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The clearance plausibility check could not be computed.**

The check had no reference to compare the clearance against, so the value is unverified rather than shown to be wrong. Extracted — salbutamol: MTT 9.5 h, ktr 0.15 h−1, kabs 2.91 h−1, CL 140 L/h, V1 77.5 L, Q 48.9 L/h, V2 130 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on bioavailability: this record has none, the second reading 1.11; it also differs on 14 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| Mtt (h) | `Q81` · MTT | 9.50 | h | 3.42e+04 | s | h | 7.14 | exact (1) | pharmaceutics-17-00039-t006:row2:col1 |
| Ktr (h−1) | `Q306` · ktr | 0.15 | h−1 | 4.167e-05 | 1/s | 1/h | 9.21 | exact (1) | pharmaceutics-17-00039-t006:row3:col1 |
| ka (h−1) | `Q49` · kabs | 2.91 | h−1 | 0.0008083 | 1/s | 1/h | 6.80 | exact (1) | pharmaceutics-17-00039-t006:row4:col1 |
| Cl (L/h) | `Q22` · CL | 140 | L/h | 3.889e-05 | m3/s | l/h | 223 | exact (1) | pharmaceutics-17-00039-t006:row5:col1 |
| V1 (L) | `Q63` · V1 | 77.5 | L | 0.0775 | m3 | l | 97.2 | exact (1) | pharmaceutics-17-00039-t006:row6:col1 |
| Q (L/h) | `Q30` · Q | 48.9 | L/h | 1.358e-05 | m3/s | l/h | 24.9 | exact (1) | pharmaceutics-17-00039-t006:row7:col1 |
| V2 (L) | `Q64` · V2 | 130 | L | 0.13 | m3 | l | 21.4 | exact (1) | pharmaceutics-17-00039-t006:row8:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (Cl (L/h)); Q63 (V1 (L)); Q30 (Q (L/h)); Q64 (V2 (L))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=salbutamol
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table pharmaceutics-17-00039-t006: unbound_uncertainty
- table pharmaceutics-17-00039-t006: unparsed_numeric_cell
- LLM selected parameter table(s) 6

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.211 (4/19 fields) | 15 |

<details><summary>15 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.bioavailability.theta` |  | 1.11 | only_one_extracted |
| `gpt-oss-120b` | `parameters[aucinf]` |  | 1.74 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl].rse_percent` | 223 |  | mismatch |
| `gpt-oss-120b` | `parameters[cl].value` | 140 | 43.8 | mismatch |
| `gpt-oss-120b` | `parameters[cmax]` |  | 1.27 | only_one_extracted |
| `gpt-oss-120b` | `parameters[fa]` |  | 1.03 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 2.91 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ktr]` | 0.15 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mtt]` | 9.50 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q]` | 48.9 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[tmax]` |  | 1.84 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1].rse_percent` | 97.2 |  | mismatch |
| `gpt-oss-120b` | `parameters[v1].value` | 77.5 | 226 | mismatch |
| `gpt-oss-120b` | `parameters[v2]` | 130 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vd]` |  | 195.75 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | pass | 2.78 | 2.598 | 0.9345 | 0.25 | reported t½β |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  |  |  | ['pharmaceutics-17-00039-t006:row5:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  |  |  | ['pharmaceutics-17-00039-t006:row7:col1'] |
| C5_dimension_Q306 | pass | 1 / [time] |  |  |  | ['pharmaceutics-17-00039-t006:row3:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  |  |  | ['pharmaceutics-17-00039-t006:row4:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  |  |  | ['pharmaceutics-17-00039-t006:row6:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  |  |  | ['pharmaceutics-17-00039-t006:row8:col1'] |
| C5_dimension_Q81 | pass | [time] |  |  |  | ['pharmaceutics-17-00039-t006:row2:col1'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 140 |  |  | ['pharmaceutics-17-00039-t006:row5:col1'] |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 140 L/h |  |  | ['pharmaceutics-17-00039-t006:row5:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 77.5 L |  |  | ['pharmaceutics-17-00039-t006:row6:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 130 L |  |  | ['pharmaceutics-17-00039-t006:row8:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_salbutamol/Salbutamol_Marques2024_reference/Salbutamol_Marques2024_reference_modelica.zip" download>Salbutamol_Marques2024_reference_modelica.zip</a> <span class="pk-size">(4.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><a href="drugs/drug_salbutamol/Salbutamol_Marques2024_reference/Salbutamol_Marques2024_reference_fmi.zip" download>Salbutamol_Marques2024_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_salbutamol/Salbutamol_Marques2024_reference/Salbutamol_Marques2024_reference_matlab.zip" download>Salbutamol_Marques2024_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_salbutamol/Salbutamol_Marques2024_reference/Salbutamol_Marques2024_reference_matlab_simbio.zip" download>Salbutamol_Marques2024_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_salbutamol/Salbutamol_Marques2024_reference/Salbutamol_Marques2024_reference_sbml.zip" download>Salbutamol_Marques2024_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_salbutamol/Salbutamol_Marques2024_reference/Salbutamol_Marques2024_reference_cellml.zip" download>Salbutamol_Marques2024_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Marques L, Vale N. Improving Individualized Salbutamol Treatment: A Population Pharmacokinetic Model for Oral Salbutamol in Virtual Patients. Pharmaceutics 17(1) (2024). [doi:10.3390/pharmaceutics17010039](https://doi.org/10.3390/pharmaceutics17010039)

**This record:** Pharmacolibrary, model `Salbutamol_Marques2024_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_salbutamol/Salbutamol_Marques2024_reference>

```bibtex
@misc{pharmacolibrary_SalbutamolMarques2024reference,
  title  = {{Pharmacolibrary model Salbutamol_Marques2024_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_salbutamol/Salbutamol_Marques2024_reference},
  note   = {Parameters from doi:10.3390/pharmaceutics17010039},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsalbutamol%5D%20Salbutamol_Marques2024_reference&body=Drug%3A%20salbutamol%0ARecord%3A%20Salbutamol_Marques2024_reference%0APaper%3A%20Marques_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_salbutamol/Salbutamol_Marques2024_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-20 03:24 UTC</sub>
