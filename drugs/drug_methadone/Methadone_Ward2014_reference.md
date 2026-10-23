<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07B&quot;,&quot;href&quot;:&quot;atc/N07B.md&quot;},{&quot;label&quot;:&quot;methadone&quot;,&quot;href&quot;:&quot;drugs/drug_methadone/&quot;},{&quot;label&quot;:&quot;Ward_2014 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Methadone_Shin2024_reference&quot;,&quot;label&quot;:&quot;Shin_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methadone/Methadone_Shin2024_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Methadone_Tang2021_reference&quot;,&quot;label&quot;:&quot;Tang_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methadone/Methadone_Tang2021_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# methadone — `Methadone_Ward2014_reference`

> ## <span class="pk-badge pk-badge--neutral" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Not simulated</span>

<div class="pk-model-meta" hidden drug="methadone" model-id="Methadone_Ward2014_reference" status="not_simulated" stale="false" population="neonates, infants, and children" measured-compound="methadone" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Ward RM, Drover DR, Hammer GB, Stemland CJ, Kern S, Tristani-Firouzi M et al. The pharmacokinetics of methadone and its metabolites in neonates, infants, and children. Paediatric anaesthesia 24(6):591–601 (2014).
  ·  DOI: [10.1111/pan.12385](https://doi.org/10.1111/pan.12385)

## Population and dosing

**Population:** neonates, infants, and children · condition mixed paediatric (opioid withdrawal, post-cardiac surgery analgesia) · age group mixed · n = 56.

## Model

**Structure:** 2-compartment general linear model (non-mammillary edges) — template `PK_General_Linear`.  
**Parameterization:** mechanistic.  
**Parameters:** 9 extracted.  
**Availability:** Model available in **Models**; browser simulation unavailable.

## Parameters
> ⚠️ Status "Not simulated": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| central volume (V1) | V1 | 21.5 | l.70 kg(-1) |
| peripheral volumes of distribution V2 | V2 | 75.1 | l.70 kg(-1) |
| V3 | V3 | 484 | l.70 kg(-1) |
| clearance (CL) | CL | 9.45 | l·h(-1) .70 kg(-1) |
| intercompartment clearances Q2 | Q | 325 | l·h(-1) .70 kg(-1) |
| Q3 | Q2 | 136 | l·h(-1) .70 kg(-1) |
| EDDP formation clearance | CLfm | 9.1 | l·h(-1) .70 kg(-1) |
| formation clearance of EMDP from EDDP | CLfm | 7.4 | l·h(-1) .70 kg(-1) |
| elimination clearance of EDDP | CL | 40.9 | l·h(-1) .70 kg(-1) |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Not simulated</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.042). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The methadone record was not published because it was built from the paper's abstract only and was never simulated: the covariate effects were not exercised and the peripheral volume V2 (75.1 l·70 kg⁻¹) had no value extracted, so a library placeholder would have been used.**

The record describes a three-compartment linear methadone model for neonates, infants, and children with metabolites EDDP and EMDP, but V2 = 75.1 l·70 kg⁻¹ was neither emitted nor defaulted, leaving 5 of 6 parameters covered. Only the reference individual was simulated, so the covariate effects defined in the record were not exercised. Because only the abstract was read, reported summary statistics stood in for a fitted model, and the model has not been simulated yet. Extracted — methadone: V1 21.5 l.70 kg(-1), V2 75.1 l.70 kg(-1), V3 484 l.70 kg(-1), CL 9.45 l·h(-1) .70 kg(-1), Q 325 l·h(-1) .70 kg(-1), Q2 136 l·h(-1) .70 kg(-1); EDDP: CLfm 9.1 l·h(-1) .70 kg(-1), CL 40.9 l·h(-1) .70 kg(-1); EMDP: CLfm 7.4 l·h(-1) .70 kg(-1).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has methadone, the second reading unknown; it also differs on 22 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| central volume (V1) | `Q63` · V1 | 21.5 | l.70 kg(-1) | 1.505 | m3 | l/kg | exact (1) | Ward_2014:abstract |
| peripheral volumes of distribution V2 | `Q64` · V2 | 75.1 | l.70 kg(-1) | 5.257 | m3 | l/kg | exact (1) | Ward_2014:abstract |
| V3 | `Q77` · V3 | 484 | l.70 kg(-1) | 33.88 | m3 | l/kg | exact (1) | Ward_2014:abstract |
| clearance (CL) | `Q22` · CL | 9.45 | l·h(-1) .70 kg(-1) | 0.0001837 | m3/s | l/(h·kg) | exact (1) | Ward_2014:abstract |
| intercompartment clearances Q2 | `Q30` · Q | 325 | l·h(-1) .70 kg(-1) | 0.006319 | m3/s | l/(h·kg) | exact (1) | Ward_2014:abstract |
| Q3 | `Q99` · Q2 | 136 | l·h(-1) .70 kg(-1) | 0.002644 | m3/s | l/(h·kg) | exact (1) | Ward_2014:abstract |
| EDDP formation clearance | `Q370` · CLfm | 9.1 | l·h(-1) .70 kg(-1) | 0.0001769 | m3/s | l/(h·kg) | exact (1) | Ward_2014:abstract |
| formation clearance of EMDP from EDDP | `Q370` · CLfm | 7.4 | l·h(-1) .70 kg(-1) | 0.0001439 | m3/s | l/(h·kg) | exact (1) | Ward_2014:abstract |
| elimination clearance of EDDP | `Q22` · CL | 40.9 | l·h(-1) .70 kg(-1) | 0.0007953 | m3/s | l/(h·kg) | exact (1) | Ward_2014:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- covariate category for kcomp from footnote/prose kept as documentation only (['Ward_2014:abstract'])
- dropped unlinked row (NIL): 'regimen in neonates' — extend the ontology if this is a real PK parameter (source ['Ward_2014:abstract'])
- dropped PD-category row 'target concentration' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Ward_2014:abstract'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=methadone
- topology: 2 first-order transfer(s) across 5 compounds → general_linear
- template fit: none — a metabolite is formed from another metabolite (a chain)
- row roles (LLM): model_class=compartmental; 12/12 row label(s) assigned, 9 linked by role; re-tagged methadone→parent ×6, methadone→EDDP ×2, methadone→EMDP ×1
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Ward_2014_metadata.yaml (12 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.042 (1/24 fields) | 23 |

<details><summary>23 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['methadone', 'eddp', 'metabolism'], ['eddp', 'emdp', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[central volume]` | 21.5 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[central volume]` |  | 21.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance]` | 9.45 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance]` |  | 9.45 | only_one_extracted |
| `gpt-oss-120b` | `parameters[dosing interval]` |  | 8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[eddp formation clearance]` | 9.1 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[eddp formation clearance]` |  | 9.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[elimination clearance of eddp]` | 40.9 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[formation clearance of emdp from eddp]` | 7.4 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[intercompartment clearances q2]` | 325 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[intercompartment clearances q2]` |  | 325 | only_one_extracted |
| `gpt-oss-120b` | `parameters[peripheral volumes of distribution v2]` | 75.1 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[peripheral volumes of distribution v2]` |  | 75.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q3]` | 136 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q3]` |  | 136 | only_one_extracted |
| `gpt-oss-120b` | `parameters[regimen dose]` |  | 0.2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[target concentration]` |  | 0.06 | only_one_extracted |
| `gpt-oss-120b` | `parameters[time to achieve target concentration]` |  | 36 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3]` | 484 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3]` |  | 484 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | methadone | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | methadone | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 9 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Ward_2014:abstract'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Ward_2014:abstract'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Ward_2014:abstract'] |
| C5_dimension_Q370 | pass | [length] ** 3 / [time] |  | ['Ward_2014:abstract'] |
| C5_dimension_Q370 | pass | [length] ** 3 / [time] |  | ['Ward_2014:abstract'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Ward_2014:abstract'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Ward_2014:abstract'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  | ['Ward_2014:abstract'] |
| C5_dimension_Q99 | pass | [length] ** 3 / [time] |  | ['Ward_2014:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 9.45 | ['Ward_2014:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 662 L/h | ['Ward_2014:abstract'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 2.86e+03 L/h | ['Ward_2014:abstract'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 1.51e+03 L | ['Ward_2014:abstract'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 5.26e+03 L | ['Ward_2014:abstract'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_param_coverage |  | fail | 6 scholar param(s) emitted or defaulted | 5 covered | neither emitted nor in defaulted[]: ['V2'] |
| T3_topology_template |  | pass | general_linear → PK_General_Linear* | PK_General_Linear | engineer template must match the scholar topology |
| T6_deviations |  | pass |  |  | no engineer deviations to adjudicate |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_methadone/Methadone_Ward2014_reference/Methadone_Ward2014_reference_modelica.zip" download>Methadone_Ward2014_reference_modelica.zip</a> <span class="pk-size">(4.4 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_methadone/Methadone_Ward2014_reference/Methadone_Ward2014_reference_matlab.zip" download>Methadone_Ward2014_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_methadone/Methadone_Ward2014_reference/Methadone_Ward2014_reference_matlab_simbio.zip" download>Methadone_Ward2014_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_methadone/Methadone_Ward2014_reference/Methadone_Ward2014_reference_sbml.zip" download>Methadone_Ward2014_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_methadone/Methadone_Ward2014_reference/Methadone_Ward2014_reference_cellml.zip" download>Methadone_Ward2014_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Ward RM, Drover DR, Hammer GB, Stemland CJ, Kern S, Tristani-Firouzi M et al. The pharmacokinetics of methadone and its metabolites in neonates, infants, and children. Paediatric anaesthesia 24(6):591–601 (2014). [doi:10.1111/pan.12385](https://doi.org/10.1111/pan.12385)

**This record:** Pharmacolibrary v26.09, model `Methadone_Ward2014_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_methadone/Methadone_Ward2014_reference>

```bibtex
@misc{pharmacolibrary_MethadoneWard2014reference,
  title  = {{Pharmacolibrary model Methadone_Ward2014_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_methadone/Methadone_Ward2014_reference},
  note   = {Parameters from doi:10.1111/pan.12385},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmethadone%5D%20Methadone_Ward2014_reference&body=Drug%3A%20methadone%0ARecord%3A%20Methadone_Ward2014_reference%0APaper%3A%20Ward_2014%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_methadone/Methadone_Ward2014_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 03:33 UTC</sub>
