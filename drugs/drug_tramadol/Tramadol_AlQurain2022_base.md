<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;tramadol&quot;,&quot;href&quot;:&quot;drugs/drug_tramadol/&quot;},{&quot;label&quot;:&quot;Al-Qurain_2022 \u00b7 base&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tramadol_Bao2023_reference&quot;,&quot;label&quot;:&quot;Bao_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tramadol/Tramadol_Bao2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tramadol_Dziubina2026_reference&quot;,&quot;label&quot;:&quot;Dziubina_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tramadol/Tramadol_Dziubina2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tramadol_Ekstrand2026_reference&quot;,&quot;label&quot;:&quot;Ekstrand_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tramadol/Tramadol_Ekstrand2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tramadol_SoriaChacartegui2026_reference&quot;,&quot;label&quot;:&quot;Soria-Chacartegui_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tramadol/Tramadol_SoriaChacartegui2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tramadol_Garrido2006_reference&quot;,&quot;label&quot;:&quot;Garrido_2006_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tramadol/Tramadol_Garrido2006_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tramadol_Pypendop2008_reference&quot;,&quot;label&quot;:&quot;Pypendop_2008_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tramadol/Tramadol_Pypendop2008_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tramadol — `Tramadol_AlQurain2022_base`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Tramadol model rejected because a clearance unit was not recognized, leaving the magnitude of total apparent clearance (0.0107 l/h) unverified against physiological ranges.

<div class="pk-model-meta" hidden drug="tramadol" model-id="Tramadol_AlQurain2022_base" status="rejected" stale="false" population="older patients with chronic pain" measured-compound="tramadol" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Al-Qurain AA, Upton RN, Tadros R, Roberts MS, Wiese MD. Population Pharmacokinetic Model for Tramadol and O-desmethyltramadol in Older Patients. European journal of drug metabolism and pharmacokinetics 47(3):387–402 (2022).
  ·  DOI: [10.1007/s13318-022-00756-x](https://doi.org/10.1007/s13318-022-00756-x)

## Population and dosing

**Population:** older patients with chronic pain · condition chronic pain · age group elderly · n = 21.

**Dosing:** 25, 50, 75, 100 mg, oral, multiple.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** CL/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| Ka, /h | kabs | 4.56 | /h | 86.3 | 0.506 (118% RSE) |
| V1/F, l | V1/F | 0.432 | l | 20.5 | 0.717 (19% RSE) |
| Q, l/h | Q | 0.0567 | l/h | 15.8 | 0.0471 (66.7% RSE) |
| V2/F, l | V2/F | 0.471 | l | 56.7 | 1.48 (70.9% RSE) |
| CL/F, l/h | CL/F | 0.0107 | l/h | 37.1 | 0.789 (84.6% RSE) |
| Kt, l/h | CLfm | 0.0433 | l/h | 23.1 |  |
| CLm/F, l/h | CL/F | 0.117 | l/h | 14.7 |  |
| O-desmethyltramadol, a (%) | fm | 5.37 | % | 23.1 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.231). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Tramadol model rejected because a clearance unit was not recognized, leaving the magnitude of total apparent clearance (0.0107 l/h) unverified against physiological ranges.**

The total apparent clearance parameter for tramadol is listed as 0.0107 l/h, but the associated unit was not standardized, meaning the value could not be evaluated for plausibility. This lack of unit validation caused the model to fail the check for physiologically reasonable clearance values. Additionally, a second reader could not confirm several extracted parameter values, including the clearance and absorption rate constant. Extracted — tramadol: kabs 4.56 /h, V1/F 0.432 l, Q 0.0567 l/h, V2/F 0.471 l, CL/F 0.0107 l/h; O-desmethyltramadol: CLfm 0.0433 l/h, CL/F 0.117 l/h, fm 5.37 %.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has tramadol → o-desmethyltramadol (metabolism), the second reading none; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Ka, /h | `Q49` · kabs | 4.56 | /h | 0.001267 | 1/s | 1/h | 86.3 | exact (1) | Tab3:row2:col1 | 0.506 (118% RSE) |
| V1/F, l | `Q290` · V1/F | 0.432 | l | 0.000432 | m3 | l | 20.5 | exact (1) | Tab3:row3:col1 | 0.717 (19% RSE) |
| Q, l/h | `Q30` · Q | 0.0567 | l/h | 1.575e-08 | m3/s | l/h | 15.8 | exact (1) | Tab3:row4:col1 | 0.0471 (66.7% RSE) |
| V2/F, l | `Q82` · V2/F | 0.471 | l | 0.000471 | m3 | l | 56.7 | exact (1) | Tab3:row6:col1 | 1.48 (70.9% RSE) |
| CL/F, l/h | `Q27` · CL/F | 0.0107 | l/h | 2.972e-09 | m3/s | l/h | 37.1 | exact (1) | Tab3:row8:col1 | 0.789 (84.6% RSE) |
| Kt, l/h | `Q370` · CLfm | 0.0433 | l/h | 1.203e-08 | m3/s | l/h | 23.1 | exact (1) | Tab3:row10:col1 |  |
| CLm/F, l/h | `Q27` · CL/F | 0.117 | l/h | 3.25e-08 | m3/s | l/h | 14.7 | exact (1) | Tab3:row11:col1 |  |
| O-desmethyltramadol, a (%) | `Q45` · fm | 5.37 | % |  |  | % | 23.1 | llm (0.6) | Tab3:row21:col1 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Tramadol, b (%)' — extend the ontology if this is a real PK parameter (source ['Tab3:row20:col1'])
- dropped unlinked row (NIL): 'O-desmethyltramadol, b (%)' — extend the ontology if this is a real PK parameter (source ['Tab3:row22:col1'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=tramadol
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [0]
- model-stage split: 'base model / population' is the base model of Al-Qurain_2022 (paper reports 2 stages: base model / population, final model / population); same population, different model-building step
- row roles (LLM): model_class=compartmental; 20/20 row label(s) assigned, 14 linked by role; re-tagged parent→O-desmethyltramadol ×12
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.231 (3/13 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['tramadol', 'o-desmethyltramadol', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[cl/f].value` | 0.0107 | 37.1 | mismatch |
| `gpt-oss-120b` | `parameters[clm/f]` |  | 14.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clm/f]` | 0.117 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka].value` | 4.56 | 86.3 | mismatch |
| `gpt-oss-120b` | `parameters[kt]` | 0.0433 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[o-desmethyltramadol, b]` |  | 12.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q].value` | 0.0567 | 15.8 | mismatch |
| `gpt-oss-120b` | `parameters[v1/f].value` | 0.432 | 20.5 | mismatch |
| `gpt-oss-120b` | `parameters[v2/f].value` | 0.471 | 56.7 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Tab3:row8:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Tab3:row11:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Tab3:row3:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Tab3:row4:col1'] |
| C5_dimension_Q370 | pass | [length] ** 3 / [time] |  | ['Tab3:row10:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tab3:row2:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['Tab3:row6:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.0107 L/h | ['Tab3:row8:col1'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.117 L/h | ['Tab3:row11:col1'] |
| C9_phys_window_Q290 | fail | volume within physiological range | 0.432 L | ['Tab3:row3:col1'] |
| C9_phys_window_Q82 | fail | volume within physiological range | 0.471 L | ['Tab3:row6:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btramadol%5D%20Tramadol_AlQurain2022_base&body=Drug%3A%20tramadol%0ARecord%3A%20Tramadol_AlQurain2022_base%0APaper%3A%20Al-Qurain_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tramadol/Tramadol_AlQurain2022_base%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-22 11:13 UTC</sub>
