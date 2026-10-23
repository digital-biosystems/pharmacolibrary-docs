<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;flurbiprofen&quot;,&quot;href&quot;:&quot;drugs/drug_flurbiprofen/&quot;},{&quot;label&quot;:&quot;Yao_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Flurbiprofen_Aarons1991_reference&quot;,&quot;label&quot;:&quot;Aarons_1991_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_flurbiprofen/Flurbiprofen_Aarons1991_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# flurbiprofen — `Flurbiprofen_Yao2025_reference`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span>

> The reviewer's verdict (Needs review, 2026-09-28 14:38 UTC) predates the latest extraction (2026-10-07 14:38 UTC); the status shown comes from the current checks.

<div class="pk-model-meta" hidden drug="flurbiprofen" model-id="Flurbiprofen_Yao2025_reference" status="extracted" stale="true" population="selective joint replacement patients with postoperative pain" measured-compound="S(+)-flurbiprofen, R(-)-flurbiprofen" parameterization="mechanistic" topology="2C"></div>

## Citation
Yao H, Luo X, Yuan J, Zhang H, An H, Feng Y. Exploring the Population Pharmacokinetic and Pharmacogenetics Characteristics of Flurbiprofen Isomers in Selective Joint Replacement Patients with Postoperative Pain. Drug design, development and therapy 19:9169–9183 (2025).
  ·  DOI: [10.2147/DDDT.S542722](https://doi.org/10.2147/DDDT.S542722)

## Population and dosing

**Population:** selective joint replacement patients with postoperative pain · condition postoperative pain · age group adult · n = ?.

**Dosing:** 100 mg, iv, single.

**Dosed compound ≠ measured compound:** dosed flurbiprofen, measured S(+)-flurbiprofen, R(-)-flurbiprofen.

## Model

**Structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| Vc, L | V1 | 17.0 | L | 15.0 | 0.13 (None% RSE) |
| CL, L·h−1 | CL | 11.8 | L·h−1 | 2.92 | 0.16 (None% RSE) |
| Vp, L | V2 | 79.1 | L | 33.5 | 0.25 (None% RSE) |
| Q, L·h−1 | Q | 0.45 | L·h−1 | 0.32 |  |
| GG | FG | -2.01 |  | -1.42 |  |
| BSA on Vc | allometric_exponent | 1.37 |  | 0.59 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.143). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No value for flurbiprofen's clearance and volume of distribution — all 8 extracted parameters describe R(-)-flurbiprofen, not flurbiprofen.**

The model was built, but flurbiprofen's clearance and volume of distribution had no value, so a library placeholder stood in and the model was held back rather than published with an invented number. Extracted — R(-)-flurbiprofen: V 15, CL 2.92, Q 0.32, FG -0.15, Vss 0.03, omega_cov 0.14, add_error 0.003, sigma 0.001.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has flurbiprofen, the second reading flurbiprofen (intravenous); it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Vc, L | `Q63` · V1 | 17.0 | L | 0.017 | m3 | l | 15.0 | exact (1) | t0002:row3:col1, t0002:row3:col2, t0002:row3:col3, Yao_2025_table_3:row2:col1, Yao_2025_table_3:row2:col2, Yao_2025_table_3:row2:col3 | 0.13 (None% RSE) |
| CL, L·h−1 | `Q22` · CL | 11.8 | L·h−1 | 3.278e-06 | m3/s | l/h | 2.92 | exact (1) | t0002:row4:col1, t0002:row4:col2, t0002:row4:col3, Yao_2025_table_3:row3:col1, Yao_2025_table_3:row3:col2, Yao_2025_table_3:row3:col3 | 0.16 (None% RSE) |
| Vp, L | `Q64` · V2 | 79.1 | L | 0.0791 | m3 | l | 33.5 | exact (1) | t0002:row5:col1, t0002:row5:col2, t0002:row5:col3, Yao_2025_table_3:row4:col1, Yao_2025_table_3:row4:col2, Yao_2025_table_3:row4:col3 | 0.25 (None% RSE) |
| Q, L·h−1 | `Q30` · Q | 0.45 | L·h−1 | 1.25e-07 | m3/s | l/h | 0.32 | exact (1) | t0002:row6:col1, t0002:row6:col2, t0002:row6:col3, Yao_2025_table_3:row5:col1, Yao_2025_table_3:row5:col2 |  |
| GG | `Q41` · FG | -2.01 |  |  |  |  | -1.42 | llm (0.6) | t0002:row9:col1, t0002:row9:col2, Yao_2025_table_3:row9:col1, Yao_2025_table_3:row9:col2 |  |
| BSA on Vc | `Q319` · allometric_exponent | 1.37 |  |  |  |  | 0.59 | llm_corrected (0.6) | Yao_2025_table_3:row6:col1, Yao_2025_table_3:row6:col2 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ωVc' routed out of structural estimates ('Interindividual variability (%)')
- table section iiv: 'ωCL' routed out of structural estimates ('Interindividual variability (%)')
- table section iiv: 'ωVp' routed out of structural estimates ('Interindividual variability (%)')
- table section iiv: 'ωQ' routed out of structural estimates ('Interindividual variability (%)')
- table section residual_error: 'Plasma, additive error, σ' routed out of structural estimates ('Random residual variability')
- table section residual_error: 'CSF, multiplicative error, σ' routed out of structural estimates ('Random residual variability')
- dropped unlinked row (NIL): 'GA' — extend the ontology if this is a real PK parameter (source ['t0002:row8:col1', 't0002:row8:col2', 'Yao_2025_table_3:row8:col1', 'Yao_2025_table_3:row8:col2'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=S(+)-flurbiprofen, R(-)-flurbiprofen
- molar mass: none found for 'S(+)-flurbiprofen, R(-)-flurbiprofen' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell t0002:row8:col3 = '−3.85 to −0.10'
- unparsed cell t0002:row9:col3 = '−0.16 to 0.93'
- unparsed cell Yao_2025_table_3:row5:col3 = '0.19 to 0.92'
- unparsed cell Yao_2025_table_3:row6:col3 = '−0.07 to1.96'
- unparsed cell Yao_2025_table_3:row8:col3 = '−0.42 to −0.05'
- unparsed cell Yao_2025_table_3:row9:col3 = '−5.2 to −1.2'
- companion parameter table 3 transcribed (23 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.143 (2/14 fields) | 12 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[bsa on vc]` | 1.37 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl].rse_percent` | 2.92 |  | mismatch |
| `gpt-oss-120b` | `parameters[cl].value` | 11.8 | 16.7 | mismatch |
| `gpt-oss-120b` | `parameters[gg]` | -2.01 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q].rse_percent` | 0.32 |  | mismatch |
| `gpt-oss-120b` | `parameters[q].value` | 0.45 | 0.39 | mismatch |
| `gpt-oss-120b` | `parameters[vc].rse_percent` | 15.0 |  | mismatch |
| `gpt-oss-120b` | `parameters[vc].value` | 17.0 | 25.6 | mismatch |
| `gpt-oss-120b` | `parameters[vp].rse_percent` | 33.5 |  | mismatch |
| `gpt-oss-120b` | `parameters[vp].value` | 79.1 | 32.6 | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | flurbiprofen | flurbiprofen (intravenous) | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | S(+)-flurbiprofen, R(-)-flurbiprofen | flurbiprofen enantiomers (R(-) and S(+)) | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['t0002:row4:col1', 't0002:row4:col2', 't0002:row4:col3', 'Yao_2025_table_3:row3:col1', 'Yao_2025_table_3:row3:col2', 'Yao_2025_table_3:row3:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['t0002:row6:col1', 't0002:row6:col2', 't0002:row6:col3', 'Yao_2025_table_3:row5:col1', 'Yao_2025_table_3:row5:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['t0002:row3:col1', 't0002:row3:col2', 't0002:row3:col3', 'Yao_2025_table_3:row2:col1', 'Yao_2025_table_3:row2:col2', 'Yao_2025_table_3:row2:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['t0002:row5:col1', 't0002:row5:col2', 't0002:row5:col3', 'Yao_2025_table_3:row4:col1', 'Yao_2025_table_3:row4:col2', 'Yao_2025_table_3:row4:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 11.8 | ['t0002:row4:col1', 't0002:row4:col2', 't0002:row4:col3', 'Yao_2025_table_3:row3:col1', 'Yao_2025_table_3:row3:col2', 'Yao_2025_table_3:row3:col3'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 11.8 L/h | ['t0002:row4:col1', 't0002:row4:col2', 't0002:row4:col3', 'Yao_2025_table_3:row3:col1', 'Yao_2025_table_3:row3:col2', 'Yao_2025_table_3:row3:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 17 L | ['t0002:row3:col1', 't0002:row3:col2', 't0002:row3:col3', 'Yao_2025_table_3:row2:col1', 'Yao_2025_table_3:row2:col2', 'Yao_2025_table_3:row2:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 79.1 L | ['t0002:row5:col1', 't0002:row5:col2', 't0002:row5:col3', 'Yao_2025_table_3:row4:col1', 'Yao_2025_table_3:row4:col2', 'Yao_2025_table_3:row4:col3'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_param_coverage | pass | 3 scholar param(s) emitted or defaulted | 3 covered | all structural parameters accounted for |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C | engineer template must match the scholar topology |
| T6_deviations | pass |  | all deviations documented+quantified | LLM adjudication → deterministic rule |

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
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_flurbiprofen/Flurbiprofen_Yao2025_reference/Flurbiprofen_Yao2025_reference_matlab.zip" download>Flurbiprofen_Yao2025_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_flurbiprofen/Flurbiprofen_Yao2025_reference/Flurbiprofen_Yao2025_reference_matlab_simbio.zip" download>Flurbiprofen_Yao2025_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_flurbiprofen/Flurbiprofen_Yao2025_reference/Flurbiprofen_Yao2025_reference_sbml.zip" download>Flurbiprofen_Yao2025_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_flurbiprofen/Flurbiprofen_Yao2025_reference/Flurbiprofen_Yao2025_reference_cellml.zip" download>Flurbiprofen_Yao2025_reference_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Yao H, Luo X, Yuan J, Zhang H, An H, Feng Y. Exploring the Population Pharmacokinetic and Pharmacogenetics Characteristics of Flurbiprofen Isomers in Selective Joint Replacement Patients with Postoperative Pain. Drug design, development and therapy 19:9169–9183 (2025). [doi:10.2147/DDDT.S542722](https://doi.org/10.2147/DDDT.S542722)

**This record:** Pharmacolibrary v26.09, model `Flurbiprofen_Yao2025_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_flurbiprofen/Flurbiprofen_Yao2025_reference>

```bibtex
@misc{pharmacolibrary_FlurbiprofenYao2025reference,
  title  = {{Pharmacolibrary model Flurbiprofen_Yao2025_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_flurbiprofen/Flurbiprofen_Yao2025_reference},
  note   = {Parameters from doi:10.2147/DDDT.S542722},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bflurbiprofen%5D%20Flurbiprofen_Yao2025_reference&body=Drug%3A%20flurbiprofen%0ARecord%3A%20Flurbiprofen_Yao2025_reference%0APaper%3A%20Yao_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_flurbiprofen/Flurbiprofen_Yao2025_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 14:38 UTC</sub>
