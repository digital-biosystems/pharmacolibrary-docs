<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Isoniazid&quot;,&quot;href&quot;:&quot;drugs/toxin_isoniazid/&quot;},{&quot;label&quot;:&quot;Abdelgawad_2022 \u00b7 isoniazid&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Isoniazid_Courtney2026_reference&quot;,&quot;label&quot;:&quot;Courtney_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_isoniazid/Isoniazid_Courtney2026_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Isoniazid_Amaeze2023_reference&quot;,&quot;label&quot;:&quot;Amaeze_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_isoniazid/Isoniazid_Amaeze2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Isoniazid_Yunivita2024_acetylator_phenotypea_non_slow&quot;,&quot;label&quot;:&quot;Yunivita_2024_acetylator_phenotypea_non_slow&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_isoniazid/Isoniazid_Yunivita2024_acetylator_phenotypea_non_slow.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Isoniazid_Yunivita2024_acetylator_phenotypea_slow&quot;,&quot;label&quot;:&quot;Yunivita_2024_acetylator_phenotypea_slow&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_isoniazid/Isoniazid_Yunivita2024_acetylator_phenotypea_slow.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Isoniazid — `Isoniazid_Abdelgawad2022_isoniazid`

> ## <span class="pk-badge pk-badge--neutral" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Not simulated</span>

<div class="pk-model-meta" hidden drug="Isoniazid" model-id="Isoniazid_Abdelgawad2022_isoniazid" status="not_simulated" stale="false" population="hospitalized TB/HIV patients and outpatients with TB" measured-compound="isoniazid" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Abdelgawad N, Chirehwa M, Schutz C, Barr D, Ward A, Janssen S et al. Pharmacokinetics of antitubercular drugs in patients hospitalized with HIV-associated tuberculosis: a population modeling analysis. Wellcome open research 7:72 (2022).
  ·  DOI: [10.12688/wellcomeopenres.17660.3](https://doi.org/10.12688/wellcomeopenres.17660.3)

## Population and dosing

**Population:** hospitalized TB/HIV patients and outpatients with TB · condition tuberculosis treatment · age group adult · n = 108.

**Dosing:** 150 mg, oral, multiple, every 24 h.

## Model

**Structure:** 2-compartment general linear model (non-mammillary edges) — template `PK_General_Linear`.  
**Parameterization:** mechanistic.  
**Parameters:** 10 extracted.  
**Availability:** Model available in **Models**; browser simulation unavailable.

## Parameters
> ⚠️ Status "Not simulated": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| Clearance of fast metabolizers (L/h) | CL | 25.5 | L/h | None (None% RSE) |
| Volume of distribution (L) b | V | 59.0 | L |  |
| Intercompartmental clearance, Q (L/h) | Q | 1.43 | L/h |  |
| Peripheral volume, Vp (L) c | V2 | 30.7 | L |  |
| Absorption rate constant, ka (h -1) | kabs | 2.43 | h -1 |  |
| Mean transit time, MTT (h) | MTT | 0.442 | h |  |
| No. of absorption transit compartments (.) | n_transit | 8 |  |  |
| Bioavailability, F (%) | Fab | 100 | % |  |
| Median (1 st - 3 rd Quartile) / C max (mg/L) / Outpatients | Cmax | 3.62 | mg/L |  |
| Median (1 st - 3 rd Quartile) / AUC 0-24h (mg.h/L) / Outpatients | AUC | 13.4 | mg.h/L |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Not simulated</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Record refused: isoniazid volume and absorption rate missing, bioavailability unit unconvertible; covariate scenarios untested despite slow acetylator clearance effects.**

The record defines covariate effects for isoniazid clearance distinguishing fast and slow metabolizers, but these scenarios were not simulated. Volume of distribution for the peripheral compartment (30.7 L) and absorption rate constant (2.43 h^-1) were neither extracted nor defaulted, while the bioavailability percentage unit could not be converted to SI. This leaves the model structurally incomplete with unexercised key metabolic distinctions. Extracted — isoniazid: CL 25.5 L/h, V 59 L, Q 1.43 L/h, V2 30.7 L, kabs 2.43 h -1, MTT 0.442 h, n_transit 8, Fab 100 %, … (+2).

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| Clearance of fast metabolizers (L/h) | `Q22` · CL | 25.5 | L/h | 7.083e-06 | m3/s | l/h | llm_confirmed (0.6) | T3:row3:col2 | None (None% RSE) |
| Volume of distribution (L) b | `Q61` · V | 59.0 | L | 0.059 | m3 | l | llm_confirmed (0.6) | T3:row6:col2 |  |
| Intercompartmental clearance, Q (L/h) | `Q30` · Q | 1.43 | L/h | 3.972e-07 | m3/s | l/h | llm_confirmed (0.6) | T3:row7:col2 |  |
| Peripheral volume, Vp (L) c | `Q64` · V2 | 30.7 | L | 0.0307 | m3 | l | llm_confirmed (0.6) | T3:row8:col2 |  |
| Absorption rate constant, ka (h -1) | `Q49` · kabs | 2.43 | h -1 | 0.000675 | 1/s | 1/h | llm_confirmed (0.6) | T3:row9:col2 |  |
| Mean transit time, MTT (h) | `Q81` · MTT | 0.442 | h | 1591 | s | h | llm_confirmed (0.6) | T3:row10:col2 |  |
| No. of absorption transit compartments (.) | `Q311` · n_transit | 8 |  | 8 |  |  | llm_corrected (0.6) | T3:row11:col2 |  |
| Bioavailability, F (%) | `Q40` · Fab | 100 | % |  |  |  | llm_confirmed (0.6) | T3:row12:col2 |  |
| Median (1 st - 3 rd Quartile) / C max (mg/L) / Outpatients | `Q32` · Cmax | 3.62 | mg/L | 0.00362 | kg/m3 | mg/l | llm (0.6) | Abdelgawad_2022_table_4:row3:col1 |  |
| Median (1 st - 3 rd Quartile) / AUC 0-24h (mg.h/L) / Outpatients | `Q88` · AUC | 13.4 | mg.h/L | 48.24 | kg*s/m3 | (h·mg)/l | llm_confirmed (0.6) | Abdelgawad_2022_table_4:row3:col4 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'typical value (95% ci) a [shrinkage] / isoniazid' classified 'ci' by the LLM but kept as the estimate: the header names the point value
- dropped duplicate Q22 ('Clearance of slow metabolizers (L/h)', value '9.76') — already have one for this compound
- dropped unlinked row (NIL): 'Proportion of fast NAT2 metabolizers (%)' — extend the ontology if this is a real PK parameter (source ['T3:row5:col2'])
- dropped duplicate Q32 ('Median (1 st - 3 rd Quartile) / C max (mg/L) / Hospitalized Survivors', value '4.12') — already have one for this compound
- dropped duplicate Q32 ('Median (1 st - 3 rd Quartile) / C max (mg/L) / Hospitalized Deaths', value '3.45') — already have one for this compound
- dropped duplicate Q88 ('Median (1 st - 3 rd Quartile) / AUC 0-24h (mg.h/L) / Hospitalized Survivors', value '15.0') — already have one for this compound
- dropped duplicate Q88 ('Median (1 st - 3 rd Quartile) / AUC 0-24h (mg.h/L) / Hospitalized Deaths', value '15.1') — already have one for this compound
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 66 (source ['T3:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 43 (source ['T3:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 2.02 (source ['T3:footnote']); the table cell was unparseable — needs review
- covariate category for kabs from footnote/prose kept as documentation only (['T3:footnote'])
- covariate category for MTT from footnote/prose kept as documentation only (['T3:footnote'])
- covariate category for MAT from footnote/prose kept as documentation only (['T3:footnote'])
- covariate bilirubin for CL from footnote/prose kept as documentation only (['T3:footnote'])
- NIL: refused to back-fill base 'CL' from footnote/prose loose number None (source ['T3:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 20 (source ['T3:footnote']); the table cell was unparseable — needs review
- routed 'Variability in clearance' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'Variability in AUC' — extend the ontology if this is a real PK parameter (source ['f4:caption'])
- dropped duplicate Q40 ('Variability in absorption', value None) — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=isoniazid
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 3 first-order transfer(s) across 3 compounds → general_linear
- status held at "Needs review" — not promoted
- population split: 'isoniazid' subgroup of Abdelgawad_2022 (paper reports 1 populations: isoniazid)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table T3: unparsed_numeric_cell
- transposed table Abdelgawad_2022_table_4: logical view retains original source coordinates
- companion parameter table 4 transcribed (18 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 10 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['T3:row3:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['T3:row7:col2'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Abdelgawad_2022_table_4:row3:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['T3:row9:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['T3:row6:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['T3:row8:col2'] |
| C5_dimension_Q81 | pass | [time] |  | ['T3:row10:col2'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  | ['Abdelgawad_2022_table_4:row3:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 25.5 | ['T3:row3:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 25.5 L/h | ['T3:row3:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 59 L | ['T3:row6:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 30.7 L | ['T3:row8:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_param_coverage |  | fail | 5 scholar param(s) emitted or defaulted | 3 covered | neither emitted nor in defaulted[]: ['V2', 'kabs'] |
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
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_isoniazid/Isoniazid_Abdelgawad2022_isoniazid/Isoniazid_Abdelgawad2022_isoniazid_modelica.zip" download>Isoniazid_Abdelgawad2022_isoniazid_modelica.zip</a> <span class="pk-size">(4.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_isoniazid/Isoniazid_Abdelgawad2022_isoniazid/Isoniazid_Abdelgawad2022_isoniazid_matlab.zip" download>Isoniazid_Abdelgawad2022_isoniazid_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_isoniazid/Isoniazid_Abdelgawad2022_isoniazid/Isoniazid_Abdelgawad2022_isoniazid_matlab_simbio.zip" download>Isoniazid_Abdelgawad2022_isoniazid_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_isoniazid/Isoniazid_Abdelgawad2022_isoniazid/Isoniazid_Abdelgawad2022_isoniazid_sbml.zip" download>Isoniazid_Abdelgawad2022_isoniazid_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_isoniazid/Isoniazid_Abdelgawad2022_isoniazid/Isoniazid_Abdelgawad2022_isoniazid_cellml.zip" download>Isoniazid_Abdelgawad2022_isoniazid_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Abdelgawad N, Chirehwa M, Schutz C, Barr D, Ward A, Janssen S et al. Pharmacokinetics of antitubercular drugs in patients hospitalized with HIV-associated tuberculosis: a population modeling analysis. Wellcome open research 7:72 (2022). [doi:10.12688/wellcomeopenres.17660.3](https://doi.org/10.12688/wellcomeopenres.17660.3)

**This record:** Pharmacolibrary, model `Isoniazid_Abdelgawad2022_isoniazid`. <https://pharmacolibrary.github.io/#/drugs/toxin_isoniazid/Isoniazid_Abdelgawad2022_isoniazid>

```bibtex
@misc{pharmacolibrary_IsoniazidAbdelgawad2022isoniazid,
  title  = {{Pharmacolibrary model Isoniazid_Abdelgawad2022_isoniazid}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_isoniazid/Isoniazid_Abdelgawad2022_isoniazid},
  note   = {Parameters from doi:10.12688/wellcomeopenres.17660.3},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bisoniazid%5D%20Isoniazid_Abdelgawad2022_isoniazid&body=Drug%3A%20isoniazid%0ARecord%3A%20Isoniazid_Abdelgawad2022_isoniazid%0APaper%3A%20Abdelgawad_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_isoniazid/Isoniazid_Abdelgawad2022_isoniazid%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-19 01:03 UTC</sub>
