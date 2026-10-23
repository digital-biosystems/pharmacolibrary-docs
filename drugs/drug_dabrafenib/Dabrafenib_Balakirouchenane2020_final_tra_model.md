<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;dabrafenib&quot;,&quot;href&quot;:&quot;drugs/drug_dabrafenib/&quot;},{&quot;label&quot;:&quot;Balakirouchenane_2020 \u00b7 final_tra_model&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# dabrafenib — `Dabrafenib_Balakirouchenane2020_final_tra_model`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Dabrafenib’s clearance, volume of distribution, and absorption lag time were missing; the recorded clearance value, 5.83 L/h, belongs to trametinib.

<div class="pk-model-meta" hidden drug="dabrafenib" model-id="Dabrafenib_Balakirouchenane2020_final_tra_model" status="model_quarantined" stale="false" population="adults with metastatic BRAF-mutated solid tumors" measured-compound="dabrafenib, hydroxy-dabrafenib, and trametinib" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Balakirouchenane D, Guégan S, Csajka C, Jouinot A, Heidelberger V, Puszkiel A et al. Population Pharmacokinetics/Pharmacodynamics of Dabrafenib Plus Trametinib in Patients with BRAF-Mutated Metastatic Melanoma. Cancers 12(4) (2020).
  ·  DOI: [10.3390/cancers12040931](https://doi.org/10.3390/cancers12040931)

## Population and dosing

**Population:** adults with metastatic BRAF-mutated solid tumors · condition metastatic BRAF-mutated solid tumors · age group adult · n = 73.

**Dosing:** 75, 150 mg, oral, multiple, every 12 h.

**Dosed compound ≠ measured compound:** dosed dabrafenib and trametinib, measured dabrafenib, hydroxy-dabrafenib, and trametinib.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| CL/F (L/h) | CL/F | 5.83 | L/h | 29.6 (None% RSE) |
| V2/F (L) | V1/F | 61.9 | L |  |
| ka (1/h) | kabs | 0.913 | 1/h |  |
| Q/F (L/h) | Q/F | 64.9 | L/h |  |
| V3/F (L) | V2/F | 417.0 | L |  |
| Tlag (h) | tlag | 0.709 | h |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.583). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Dabrafenib’s clearance, volume of distribution, and absorption lag time were missing; the recorded clearance value, 5.83 L/h, belongs to trametinib.**

No value for dabrafenib’s clearance, volume of distribution, or absorption lag time—all six extracted parameters describe trametinib—so library placeholders stood in and the model was held back rather than published with invented numbers. The record describes dabrafenib forming hydroxy-dabrafenib, but the built structure was a one-compartment oral model rather than the expected parent–metabolite structure; one extracted parameter, V2/F, was also neither represented nor defaulted. Defaulting clearance, volume, and lag time was judged unacceptable, and the model assumed F=1 and metabolite bioavailability Fm=1 without molar correction. A second reader also disagreed over whether trametinib was among the dose compounds and over the identity of the absorption-rate parameter. Extracted — trametinib: CL/F 5.83 L/h, V1/F 61.9 L, kabs 0.913 1/h, Q/F 64.9 L/h, V2/F 417 L, tlag 0.709 h.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on which compound was dosed: this record has dabrafenib and trametinib, the second reading dabrafenib; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by gpt-6-luna</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 5.83 | L/h | 1.619e-06 | m3/s | l/h | exact (1) | cancers-12-00931-t003:row2:col1, cancers-12-00931-t003:row2:col2 | 29.6 (None% RSE) |
| V2/F (L) | `Q290` · V1/F | 61.9 | L | 0.0619 | m3 | l | exact (1) | cancers-12-00931-t003:row3:col1, cancers-12-00931-t003:row3:col2 |  |
| ka (1/h) | `Q49` · kabs | 0.913 | 1/h | 0.0002536 | 1/s | 1/h | exact (1) | cancers-12-00931-t003:row4:col1, cancers-12-00931-t003:row4:col2 |  |
| Q/F (L/h) | `Q69` · Q/F | 64.9 | L/h | 1.803e-05 | m3/s | l/h | exact (1) | cancers-12-00931-t003:row5:col1, cancers-12-00931-t003:row5:col2 |  |
| V3/F (L) | `Q82` · V2/F | 417.0 | L | 0.417 | m3 | l | exact (1) | cancers-12-00931-t003:row6:col1, cancers-12-00931-t003:row6:col2 |  |
| Tlag (h) | `Q83` · tlag | 0.709 | h | 2552 | s | h | exact (1) | cancers-12-00931-t003:row7:col1, cancers-12-00931-t003:row7:col2 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- implicit units: 'ka (1/h)' → 1/h (from the paper text: 'The parameter listing states “ka (1/h) = 0.913.”')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=dabrafenib, hydroxy-dabrafenib, and trametinib
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [0]
- population split: 'final tra model' subgroup of Balakirouchenane_2020 (paper reports 3 populations: dlt, final tra model, no dlt)
- row roles (LLM): model_class=compartmental; 25/25 row label(s) assigned, 24 linked by role; re-tagged trametinib→dabrafenib ×1, trametinib→hydroxy-dabrafenib ×1, trametinib→dabrafenib, hydroxy-dabrafenib, and trametinib ×1
- molar mass: none of 1 PubChem candidate(s) is 'dabrafenib, hydroxy-dabrafenib, and trametinib' (LLM) — left in mass units

**Extraction notes:**
- unparsed cell Balakirouchenane_2020_table_4:row1:col1 = '9624 (8121–11676)'
- unparsed cell Balakirouchenane_2020_table_4:row1:col2 = '7485 (3399–17712)'
- unparsed cell Balakirouchenane_2020_table_4:row2:col1 = '7509.5 (4918–10300)'
- unparsed cell Balakirouchenane_2020_table_4:row2:col2 = '5812 (2459–10300)'
- unparsed cell Balakirouchenane_2020_table_4:row3:col1 = '16855 (13491–21976)'
- unparsed cell Balakirouchenane_2020_table_4:row3:col2 = '13605 (5877–28012)'
- unparsed cell Balakirouchenane_2020_table_4:row4:col1 = '54.5 (37–81)'
- unparsed cell Balakirouchenane_2020_table_4:row4:col2 = '59 (20–90)'
- unparsed cell Balakirouchenane_2020_table_4:row5:col1 = '25.9 (20.4–33.4)'
- unparsed cell Balakirouchenane_2020_table_4:row5:col2 = '25.1 (19.6–40.9)'
- unparsed cell Balakirouchenane_2020_table_4:row16:col1 = '268 (144–448)'
- unparsed cell Balakirouchenane_2020_table_4:row16:col2 = '268 (111–750)'
- unparsed cell Balakirouchenane_2020_table_4:row17:col1 = '55 (37–90)'
- unparsed cell Balakirouchenane_2020_table_4:row17:col2 = '61 (20–89)'
- unparsed cell Balakirouchenane_2020_table_4:row18:col1 = '25.9 (20.4–35.5)'
- unparsed cell Balakirouchenane_2020_table_4:row18:col2 = '25.2 (19.6–40.9)'
- companion parameter table 4 transcribed (26 record(s))
- LLM selected parameter table(s) 4
- dropped sensitivity-analysis table(s) 2, 3 from the LLM selection — perturbations of a model, not a model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.583 (7/12 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `model.links` | [['dabrafenib', 'hydroxy-dabrafenib', 'metabolism']] | [] | mismatch |
| `qwen3.8-27b` | `parameters[v2/f].parameter_id` | Q290 | Q82 | mismatch |
| `qwen3.8-27b` | `parameters[v3/f].parameter_id` | Q82 | Q78 | mismatch |
| `qwen3.8-27b` | `screen.dose_compound` | dabrafenib and trametinib | dabrafenib | mismatch |
| `qwen3.8-27b` | `screen.primary_analyte` | dabrafenib, hydroxy-dabrafenib, and trametinib | dabrafenib | mismatch |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['cancers-12-00931-t003:row2:col1', 'cancers-12-00931-t003:row2:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['cancers-12-00931-t003:row3:col1', 'cancers-12-00931-t003:row3:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['cancers-12-00931-t003:row4:col1', 'cancers-12-00931-t003:row4:col2'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['cancers-12-00931-t003:row5:col1', 'cancers-12-00931-t003:row5:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['cancers-12-00931-t003:row6:col1', 'cancers-12-00931-t003:row6:col2'] |
| C5_dimension_Q83 | pass | [time] |  | ['cancers-12-00931-t003:row7:col1', 'cancers-12-00931-t003:row7:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 5.83 L/h | ['cancers-12-00931-t003:row2:col1', 'cancers-12-00931-t003:row2:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 61.9 L | ['cancers-12-00931-t003:row3:col1', 'cancers-12-00931-t003:row3:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 417 L | ['cancers-12-00931-t003:row6:col1', 'cancers-12-00931-t003:row6:col2'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_param_coverage | fail | 6 scholar param(s) emitted or defaulted | 5 covered | neither emitted nor in defaulted[]: ['V2/F'] |
| T3_topology_template | fail | parent_metabolite → PK_3M_9C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |

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
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_dabrafenib/Dabrafenib_Balakirouchenane2020_final_tra_model/Dabrafenib_Balakirouchenane2020_final_tra_model_matlab.zip" download>Dabrafenib_Balakirouchenane2020_final_tra_model_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_dabrafenib/Dabrafenib_Balakirouchenane2020_final_tra_model/Dabrafenib_Balakirouchenane2020_final_tra_model_matlab_simbio.zip" download>Dabrafenib_Balakirouchenane2020_final_tra_model_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_dabrafenib/Dabrafenib_Balakirouchenane2020_final_tra_model/Dabrafenib_Balakirouchenane2020_final_tra_model_sbml.zip" download>Dabrafenib_Balakirouchenane2020_final_tra_model_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_dabrafenib/Dabrafenib_Balakirouchenane2020_final_tra_model/Dabrafenib_Balakirouchenane2020_final_tra_model_cellml.zip" download>Dabrafenib_Balakirouchenane2020_final_tra_model_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Balakirouchenane D, Guégan S, Csajka C, Jouinot A, Heidelberger V, Puszkiel A et al. Population Pharmacokinetics/Pharmacodynamics of Dabrafenib Plus Trametinib in Patients with BRAF-Mutated Metastatic Melanoma. Cancers 12(4) (2020). [doi:10.3390/cancers12040931](https://doi.org/10.3390/cancers12040931)

**This record:** Pharmacolibrary v26.09, model `Dabrafenib_Balakirouchenane2020_final_tra_model`. <https://pharmacolibrary.github.io/#/drugs/drug_dabrafenib/Dabrafenib_Balakirouchenane2020_final_tra_model>

```bibtex
@misc{pharmacolibrary_DabrafenibBalakirouchenane2020finaltramodel,
  title  = {{Pharmacolibrary model Dabrafenib_Balakirouchenane2020_final_tra_model}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_dabrafenib/Dabrafenib_Balakirouchenane2020_final_tra_model},
  note   = {Parameters from doi:10.3390/cancers12040931},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdabrafenib%5D%20Dabrafenib_Balakirouchenane2020_final_tra_model&body=Drug%3A%20dabrafenib%0ARecord%3A%20Dabrafenib_Balakirouchenane2020_final_tra_model%0APaper%3A%20Balakirouchenane_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_dabrafenib/Dabrafenib_Balakirouchenane2020_final_tra_model%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 23:13 UTC</sub>
