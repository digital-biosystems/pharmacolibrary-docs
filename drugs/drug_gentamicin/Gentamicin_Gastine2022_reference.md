<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D06A&quot;,&quot;href&quot;:&quot;atc/D06A.md&quot;},{&quot;label&quot;:&quot;gentamicin&quot;,&quot;href&quot;:&quot;drugs/drug_gentamicin/&quot;},{&quot;label&quot;:&quot;Gastine_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Gentamicin_Crcek2019_reference&quot;,&quot;label&quot;:&quot;Crcek_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_gentamicin/Gentamicin_Crcek2019_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Gentamicin_Abbasi2023_reference&quot;,&quot;label&quot;:&quot;Abbasi_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_gentamicin/Gentamicin_Abbasi2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# gentamicin — `Gentamicin_Gastine2022_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Only volume was extracted — no clearance.

<div class="pk-model-meta" hidden drug="gentamicin" model-id="Gentamicin_Gastine2022_reference" status="needs_review" stale="false" population="neonates with suspected or proven sepsis" measured-compound="ampicillin and gentamicin" parameterization="mechanistic" topology="2C"></div>

## Citation
Gastine S, Obiero C, Kane Z, Williams P, Readman J, Murunga S et al. Simultaneous pharmacokinetic/pharmacodynamic (PKPD) assessment of ampicillin and gentamicin in the treatment of neonatal sepsis. The Journal of antimicrobial chemotherapy 77(2):448–456 (2022).
  ·  DOI: [10.1093/jac/dkab413](https://doi.org/10.1093/jac/dkab413)

## Population and dosing

**Population:** neonates with suspected or proven sepsis · condition suspected or proven neonatal sepsis · age group neonate · n = 59.

**Dosing:** 210, 350, 3500 mg, iv, multiple.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted, plus 1 covariate effect.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| CLGFR (L/h) | CLR | 6.89 | L/h | 8 |
| Central VdGent (L) | V1 | 26.4 | L | 18 |
| QGent (L/h) | Q | 0.956 | L/h | 28 |
| Peripheral VdGent (L) | V2 | 6.69 | L | 36 |
| CLnon-GFR (L/h) | CLNR | 5.3 | L/h | 11 |
| PNAcoeff | equation variable | 0.117 |  |  |
| theta_clr_creatinine | theta_clr_creatinine | -0.423 |  | 53 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.591). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only volume was extracted — no clearance.**

A model needs both clearance and volume; without the clearance it could only be built on a library default, so it was not. Extracted — gentamicin: CLR 6.89 L/h, V1 26.4 L, Q 0.956 L/h, V2 6.69 L, CLNR 5.3 L/h.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on which compound was dosed: this record has ampicillin and gentamicin, the second reading gentamicin; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| CLGFR (L/h) | `Q26` · CLR | 6.89 | L/h | 1.914e-06 | m3/s | l/h | 8 | llm (0.6) | dkab413-T2:row1:col1, dkab413-T2:row1:col3 |
| Central VdGent (L) | `Q63` · V1 | 26.4 | L | 0.0264 | m3 | l | 18 | llm (0.6) | dkab413-T2:row2:col1, dkab413-T2:row2:col3 |
| QGent (L/h) | `Q30` · Q | 0.956 | L/h | 2.656e-07 | m3/s | l/h | 28 | llm (0.6) | dkab413-T2:row3:col1, dkab413-T2:row3:col3 |
| Peripheral VdGent (L) | `Q64` · V2 | 6.69 | L | 0.00669 | m3 | l | 36 | llm (0.6) | dkab413-T2:row4:col1, dkab413-T2:row4:col3 |
| CLnon-GFR (L/h) | `Q79` · CLNR | 5.3 | L/h | 1.472e-06 | m3/s | l/h | 11 | llm (0.6) | dkab413-T2:row5:col1, dkab413-T2:row5:col3 |
| PNAcoeff | `Q900` · equation variable | 0.117 |  |  |  |  |  | llm (0.6) | dkab413-T2:row8:col1 |
| theta_clr_creatinine | `Q900` · theta_clr_creatinine | -0.423 |  |  |  |  | 53 |  | dkab413-T2:row9:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CLGFR (L/h)' routed out of structural estimates ('IIV (%) (RSE, %)')
- table section iiv: 'Central VdGent (L)' routed out of structural estimates ('IIV (%) (RSE, %)')
- table section iiv: 'CLnon-GFR (L/h)' routed out of structural estimates ('IIV (%) (RSE, %)')
- dropped duplicate Q63 ('Central VdAmp (L)', value '52.7') — already have one for this compound
- dropped unlinked row (NIL): 'PNAfract (%)' — extend the ontology if this is a real PK parameter (source ['dkab413-T2:row7:col1'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=ampicillin and gentamicin
- molar mass: no plausible PubChem entry for 'ampicillin and gentamicin' ('ampicillin and gentamicin') — left in mass units
- molar mass: none found for 'ampicillin and gentamicin' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell dkab413-T2:row9:col3 = '−1 to 0.05'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.591 (13/22 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[central vdgent].parameter_id` | Q63 | Q61 | mismatch |
| `qwen3.8-27b` | `parameters[clgfr].parameter_id` | Q26 | Q354 | mismatch |
| `qwen3.8-27b` | `parameters[clnon-gfr].parameter_id` | Q79 | Q22 | mismatch |
| `qwen3.8-27b` | `parameters[creatinine_on_clgfr]` |  | -0.423 | only_one_extracted |
| `qwen3.8-27b` | `parameters[peripheral vdgent].parameter_id` | Q64 | Q65 | mismatch |
| `qwen3.8-27b` | `parameters[pnacoeff]` | 0.117 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_clr_creatinine]` | -0.423 |  | only_one_extracted |
| `qwen3.8-27b` | `screen.dose_compound` | ampicillin and gentamicin | gentamicin | mismatch |
| `qwen3.8-27b` | `screen.primary_analyte` | ampicillin and gentamicin | gentamicin | mismatch |

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
| C0c_disposition_complete | fail |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] |  | ['dkab413-T2:row1:col1', 'dkab413-T2:row1:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['dkab413-T2:row3:col1', 'dkab413-T2:row3:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['dkab413-T2:row2:col1', 'dkab413-T2:row2:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['dkab413-T2:row4:col1', 'dkab413-T2:row4:col3'] |
| C5_dimension_Q79 | pass | [length] ** 3 / [time] |  | ['dkab413-T2:row5:col1', 'dkab413-T2:row5:col3'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q63 | pass | volume within physiological range | 26.4 L | ['dkab413-T2:row2:col1', 'dkab413-T2:row2:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 6.69 L | ['dkab413-T2:row4:col1', 'dkab413-T2:row4:col3'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bgentamicin%5D%20Gentamicin_Gastine2022_reference&body=Drug%3A%20gentamicin%0ARecord%3A%20Gentamicin_Gastine2022_reference%0APaper%3A%20Gastine_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_gentamicin/Gentamicin_Gastine2022_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 22:10 UTC</sub>
