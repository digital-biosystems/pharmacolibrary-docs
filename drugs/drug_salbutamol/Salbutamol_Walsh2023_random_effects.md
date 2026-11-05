<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03A&quot;,&quot;href&quot;:&quot;atc/R03A.md&quot;},{&quot;label&quot;:&quot;salbutamol&quot;,&quot;href&quot;:&quot;drugs/drug_salbutamol/&quot;},{&quot;label&quot;:&quot;Walsh_2023 \u00b7 random_effects&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Salbutamol_Bisaso2026_reference&quot;,&quot;label&quot;:&quot;Bisaso_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_salbutamol/Salbutamol_Bisaso2026_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Salbutamol_Marques2024v2_reference&quot;,&quot;label&quot;:&quot;Marques_2024_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_salbutamol/Salbutamol_Marques2024v2_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Salbutamol_Marques2024_geometric_mean&quot;,&quot;label&quot;:&quot;Marques_2024_geometric_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_salbutamol/Salbutamol_Marques2024_geometric_mean.md&quot;,&quot;status&quot;:&quot;Needs review \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Salbutamol_Walsh2023_reference&quot;,&quot;label&quot;:&quot;Walsh_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_salbutamol/Salbutamol_Walsh2023_reference.md&quot;,&quot;status&quot;:&quot;None \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# salbutamol — `Salbutamol_Walsh2023_random_effects`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span>

> Extracted and checked against closed-form rules; no simulation has been compared with the paper yet.

<div class="pk-model-meta" hidden drug="salbutamol" model-id="Salbutamol_Walsh2023_random_effects" status="extracted" stale="false" population="children with acute asthma" measured-compound="salbutamol" parameterization="mechanistic" topology="2C"></div>

## Citation
Walsh S, Pan S, Sheng Y, Kloprogge F, Standing JF, Anderson BJ et al. Optimising intravenous salbutamol in children: a phase 2 study. Archives of disease in childhood 108(4):316–322 (2023).
  ·  DOI: [10.1136/archdischild-2022-324008](https://doi.org/10.1136/archdischild-2022-324008)

## Population and dosing

**Population:** children with acute asthma · condition acute asthma · age group child.

**Dosing:** 0.07, 0.35, 1.05 mg, iv, multiple.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| CL (l/h) | CL | 0.522 | l/h |
| Vc (l) | V1 | 1.79 | l |
| Vp (l) | V2 | 6.45 | l |
| Cardiac output (×weight 0.79 ) (l min −1 ) | Q | 0.166 | l min −1 |
| Absorption constant gut (h −1 ) | kabs | 0.5 | h −1 |
| Absorption lag gut (h) | tlag | 1.5 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.636). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on bioavailability: this record has none, the second reading 0.0925; it also differs on 3 more fields. That field does not shape the model.

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL (l/h) | `Q22` · CL | 0.522 | l/h | 1.45e-07 | m3/s | l/h | exact (1) | Walsh_2023_table_p23_1:row3:col2 |
| Vc (l) | `Q63` · V1 | 1.79 | l | 0.00179 | m3 | l | exact (1) | Walsh_2023_table_p23_1:row4:col2 |
| Vp (l) | `Q64` · V2 | 6.45 | l | 0.00645 | m3 | l | exact (1) | Walsh_2023_table_p23_1:row6:col2 |
| Cardiac output (×weight 0.79 ) (l min −1 ) | `Q30` · Q | 0.166 | l min −1 | 2.767e-06 | m3/s | L/h | review_gapfill (0.7) | Heuberger_2018:review |
| Absorption constant gut (h −1 ) | `Q49` · kabs | 0.5 | h −1 | 0.0001389 | 1/s | 1/h | review_gapfill (0.7) | Heuberger_2018:review |
| Absorption lag gut (h) | `Q83` · tlag | 1.5 | h | 5400 | s | h | review_gapfill (0.7) | Heuberger_2018:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'random effects' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped PD-category row 'E0 (fraction of PASS-score [0-9])' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Walsh_2023_table_p23_1:row11:col2'])
- dropped PD-category row 'EMAX' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Walsh_2023_table_p23_1:row18:col2'])
- dropped PD-category row 'EC50 (ng/ml)' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Walsh_2023_table_p23_1:row19:col2', 'Walsh_2023_table_p23_1:row24:col2'])
- dropped PD-category row 'E0 (z-score)' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Walsh_2023_table_p23_1:row22:col2'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=salbutamol
- population split: 'random effects' subgroup of Walsh_2023 (paper reports 2 populations: fixed effects, random effects)
- gap-filled Q30 (Q) from Heuberger_2018's review values (primary lacked it)
- gap-filled Q49 (kabs) from Heuberger_2018's review values (primary lacked it)
- gap-filled Q83 (tlag) from Heuberger_2018's review values (primary lacked it)

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.636 (7/11 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.bioavailability.theta` |  | 0.0925 | only_one_extracted |
| `gpt-oss-120b` | `parameters[bioavailability [0-1]]` |  | 0.0925 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` |  | 16.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q]` |  | 8.58 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Walsh_2023_table_p23_1:row3:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Heuberger_2018:review'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Heuberger_2018:review'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Walsh_2023_table_p23_1:row4:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Walsh_2023_table_p23_1:row6:col2'] |
| C5_dimension_Q83 | pass | [time] |  | ['Heuberger_2018:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.522 | ['Walsh_2023_table_p23_1:row3:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.522 L/h | ['Walsh_2023_table_p23_1:row3:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 1.79 L | ['Walsh_2023_table_p23_1:row4:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 6.45 L | ['Walsh_2023_table_p23_1:row6:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_salbutamol/Salbutamol_Walsh2023_random_effects/Salbutamol_Walsh2023_random_effects_modelica.zip" download>Salbutamol_Walsh2023_random_effects_modelica.zip</a> <span class="pk-size">(4.1 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><a href="drugs/drug_salbutamol/Salbutamol_Walsh2023_random_effects/Salbutamol_Walsh2023_random_effects_fmi.zip" download>Salbutamol_Walsh2023_random_effects_fmi.zip</a> <span class="pk-size">(4.2 kB)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_salbutamol/Salbutamol_Walsh2023_random_effects/Salbutamol_Walsh2023_random_effects_matlab.zip" download>Salbutamol_Walsh2023_random_effects_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_salbutamol/Salbutamol_Walsh2023_random_effects/Salbutamol_Walsh2023_random_effects_matlab_simbio.zip" download>Salbutamol_Walsh2023_random_effects_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_salbutamol/Salbutamol_Walsh2023_random_effects/Salbutamol_Walsh2023_random_effects_sbml.zip" download>Salbutamol_Walsh2023_random_effects_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_salbutamol/Salbutamol_Walsh2023_random_effects/Salbutamol_Walsh2023_random_effects_cellml.zip" download>Salbutamol_Walsh2023_random_effects_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Walsh S, Pan S, Sheng Y, Kloprogge F, Standing JF, Anderson BJ et al. Optimising intravenous salbutamol in children: a phase 2 study. Archives of disease in childhood 108(4):316–322 (2023). [doi:10.1136/archdischild-2022-324008](https://doi.org/10.1136/archdischild-2022-324008)

**This record:** Pharmacolibrary, model `Salbutamol_Walsh2023_random_effects`. <https://pharmacolibrary.github.io/#/drugs/drug_salbutamol/Salbutamol_Walsh2023_random_effects>

```bibtex
@misc{pharmacolibrary_SalbutamolWalsh2023randomeffects,
  title  = {{Pharmacolibrary model Salbutamol_Walsh2023_random_effects}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_salbutamol/Salbutamol_Walsh2023_random_effects},
  note   = {Parameters from doi:10.1136/archdischild-2022-324008},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsalbutamol%5D%20Salbutamol_Walsh2023_random_effects&body=Drug%3A%20salbutamol%0ARecord%3A%20Salbutamol_Walsh2023_random_effects%0APaper%3A%20Walsh_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_salbutamol/Salbutamol_Walsh2023_random_effects%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-04 09:13 UTC</sub>
