<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;warfarin&quot;,&quot;href&quot;:&quot;drugs/drug_warfarin/&quot;},{&quot;label&quot;:&quot;Lane_2012 \u00b7 s_warfarin_8975_estimate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Warfarin_Sridharan2021_reference&quot;,&quot;label&quot;:&quot;Sridharan_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_warfarin/Warfarin_Sridharan2021_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Warfarin_Kwack2026_reference&quot;,&quot;label&quot;:&quot;Kwack_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_warfarin/Warfarin_Kwack2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Warfarin_Zhu2017_reference&quot;,&quot;label&quot;:&quot;Zhu_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_warfarin/Warfarin_Zhu2017_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Aoyama_2022_INR&quot;,&quot;label&quot;:&quot;Aoyama_2022 \u00b7 INR&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_warfarin/pd_Aoyama_2022_INR.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Hirai_2024_PT_INR&quot;,&quot;label&quot;:&quot;Hirai_2024 \u00b7 PT-INR&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_warfarin/pd_Hirai_2024_PT_INR.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# warfarin — `Warfarin_Lane2012_s_warfarin_8975_estimate`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Warfarin bioavailability, clearance, and volume of distribution had no extracted values, so the model was held back.

<div class="pk-model-meta" hidden drug="warfarin" model-id="Warfarin_Lane2012_s_warfarin_8975_estimate" status="model_quarantined" stale="false" population="patients on long-term warfarin therapy" measured-compound="R-warfarin and S-warfarin" parameterization="mechanistic" topology="1C"></div>

## Citation
Lane S, Al-Zubiedi S, Hatch E, Matthews I, Jorgensen AL, Deloukas P et al. The population pharmacokinetics of R- and S-warfarin: effect of genetic and clinical factors. British journal of clinical pharmacology 73(1):66–76 (2012).
  ·  DOI: [10.1111/j.1365-2125.2011.04051.x](https://doi.org/10.1111/j.1365-2125.2011.04051.x)

## Population and dosing

**Population:** patients on long-term warfarin therapy · condition anticoagulation therapy · age group adult · n = The text mentions S-warfarin concentrations in 306 patients and R-warfarin concentrations in 309 patients. It does not explicitly state whether these are the same 309 patients with missing data for S-warfarin, or a total of more unique individuals. However, in PK studies, the 'n_subjects' typically refers to the size of the analyzed cohort. Given the phrasing 'in 306 patients... and in 309 patients', it is highly likely these refer to the number of subjects with data for each enantiomer from the same cohort, with the total cohort likely being 309 (the larger number) or potentially a union of both if they are distinct. Standard reporting usually lists the max n or total unique n. Without explicit clarification of the union, the most defensible integer for the cohort size based on the sampling numbers is 309 (the group genotyped and sampled, with a few missing S-warfarin values). Let's look closer: 'Plasma warfarin enantiomer concentrations were determined in 306 patients for S-warfarin and in 309 patients for R-warfarin'. This implies the study had at least 309 patients. It is safest to assume the cohort size is 309..

**Dosed compound ≠ measured compound:** dosed warfarin, measured R-warfarin and S-warfarin.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| CL (l h-1) | CL | 0.149 | l h-1 | 49.3 (None% RSE) |
| V (l) | V | 15.2 | l |  |
| ka (1/h) | kabs | 0.214 | 1/h |  |
| Lag (h) | tlag | 1.29 | h |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Warfarin bioavailability, clearance, and volume of distribution had no extracted values, so the model was held back.**

The record lists only absorption parameters for the enantiomers, with no numerical estimates provided for the parent compound. Consequently, bioavailability, clearance, and volume of distribution were left without explicit values. These missing fundamental pharmacokinetic constants meant the model relied on library placeholders rather than extracted data. Extracted — warfarin: CL 0.149 l h-1, V 15.2 l; R-warfarin and S-warfarin: kabs 0.214 1/h, tlag 1.29 h.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| CL (l h-1) | `Q22` · CL | 0.149 | l h-1 | 4.139e-08 | m3/s | l/h | exact (1) | Lane_2012_table_2:row0:col1 | 49.3 (None% RSE) |
| V (l) | `Q61` · V | 15.2 | l | 0.0152 | m3 | l | exact (1) | Lane_2012_table_2:row1:col1 |  |
| ka (1/h) | `Q49` · kabs | 0.214 | 1/h | 5.944e-05 | 1/s | 1/h | review_gapfill (0.7) | Gomeni_2026:review |  |
| Lag (h) | `Q83` · tlag | 1.29 | h | 4644 | s | h | review_gapfill (0.7) | Gomeni_2026:review |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=R-warfarin and S-warfarin
- population split: 's-warfarin 8975 estimate' subgroup of Lane_2012 (paper reports 4 populations: r-warfarin 9334 estimate, r-warfarin 9425 estimate, s-warfarin 8899 estimate, s-warfarin 8975 estimate)
- molar mass: no plausible PubChem entry for 'R-warfarin and S-warfarin' ('R-warfarin and S-warfarin') — left in mass units
- molar mass: none found for 'R-warfarin and S-warfarin' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Gomeni_2026's review values (primary lacked it)
- gap-filled Q83 (tlag) from Gomeni_2026's review values (primary lacked it)

**Extraction notes:**
- table Lane_2012_table_3: unbound_uncertainty
- table Lane_2012_table_2: unbound_uncertainty
- companion parameter table 2 transcribed (23 record(s), model stage 'base')
- LLM selected parameter table(s) 2, 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Lane_2012_table_2:row0:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Gomeni_2026:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Lane_2012_table_2:row1:col1'] |
| C5_dimension_Q83 | pass | [time] |  | ['Gomeni_2026:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.149 | ['Lane_2012_table_2:row0:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.149 L/h | ['Lane_2012_table_2:row0:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 15.2 L | ['Lane_2012_table_2:row1:col1'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_param_coverage | pass | 4 scholar param(s) emitted or defaulted | 4 covered | all structural parameters accounted for |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
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
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_warfarin/Warfarin_Lane2012_s_warfarin_8975_estimate/Warfarin_Lane2012_s_warfarin_8975_estimate_matlab.zip" download>Warfarin_Lane2012_s_warfarin_8975_estimate_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_warfarin/Warfarin_Lane2012_s_warfarin_8975_estimate/Warfarin_Lane2012_s_warfarin_8975_estimate_matlab_simbio.zip" download>Warfarin_Lane2012_s_warfarin_8975_estimate_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_warfarin/Warfarin_Lane2012_s_warfarin_8975_estimate/Warfarin_Lane2012_s_warfarin_8975_estimate_sbml.zip" download>Warfarin_Lane2012_s_warfarin_8975_estimate_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_warfarin/Warfarin_Lane2012_s_warfarin_8975_estimate/Warfarin_Lane2012_s_warfarin_8975_estimate_cellml.zip" download>Warfarin_Lane2012_s_warfarin_8975_estimate_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Lane S, Al-Zubiedi S, Hatch E, Matthews I, Jorgensen AL, Deloukas P et al. The population pharmacokinetics of R- and S-warfarin: effect of genetic and clinical factors. British journal of clinical pharmacology 73(1):66–76 (2012). [doi:10.1111/j.1365-2125.2011.04051.x](https://doi.org/10.1111/j.1365-2125.2011.04051.x)

**This record:** Pharmacolibrary v26.09, model `Warfarin_Lane2012_s_warfarin_8975_estimate`. <https://pharmacolibrary.github.io/#/drugs/drug_warfarin/Warfarin_Lane2012_s_warfarin_8975_estimate>

```bibtex
@misc{pharmacolibrary_WarfarinLane2012swarfarin8975estimate,
  title  = {{Pharmacolibrary model Warfarin_Lane2012_s_warfarin_8975_estimate}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_warfarin/Warfarin_Lane2012_s_warfarin_8975_estimate},
  note   = {Parameters from doi:10.1111/j.1365-2125.2011.04051.x},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bwarfarin%5D%20Warfarin_Lane2012_s_warfarin_8975_estimate&body=Drug%3A%20warfarin%0ARecord%3A%20Warfarin_Lane2012_s_warfarin_8975_estimate%0APaper%3A%20Lane_2012%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_warfarin/Warfarin_Lane2012_s_warfarin_8975_estimate%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-22 09:01 UTC</sub>
