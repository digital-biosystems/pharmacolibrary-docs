<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Fluorouracil&quot;,&quot;href&quot;:&quot;drugs/toxin_fluorouracil/&quot;},{&quot;label&quot;:&quot;Daher_2014 \u00b7 bootstrapresultssamples&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fluorouracil_Janssen2021_reference&quot;,&quot;label&quot;:&quot;Janssen_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fluorouracil/Fluorouracil_Janssen2021_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluorouracil_Yang2025_reference&quot;,&quot;label&quot;:&quot;Yang_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fluorouracil/Fluorouracil_Yang2025_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluorouracil_Zhao2025_reference&quot;,&quot;label&quot;:&quot;Zhao_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fluorouracil/Fluorouracil_Zhao2025_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluorouracil_Daher2014_final_model&quot;,&quot;label&quot;:&quot;Daher_2014_final_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fluorouracil/Fluorouracil_Daher2014_final_model.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluorouracil_Daryani2016_estimate_se&quot;,&quot;label&quot;:&quot;Daryani_2016_estimate_se&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fluorouracil/Fluorouracil_Daryani2016_estimate_se.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluorouracil_Schmulenson2023_estimate&quot;,&quot;label&quot;:&quot;Schmulenson_2023_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fluorouracil/Fluorouracil_Schmulenson2023_estimate.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Fluorouracil — `Fluorouracil_Daher2014_bootstrapresultssamples`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q75 unit µM ([length]) vs [mass] / [length] ** 3.

<div class="pk-model-meta" hidden drug="Fluorouracil" model-id="Fluorouracil_Daher2014_bootstrapresultssamples" status="rejected" stale="false" population="elderly patients (&gt;=75 years) with breast or colorectal cancer, with younger adults (&lt;75 years) as comparator" measured-compound="5-fluorouracil" parameterization="mechanistic" topology="1C"></div>

## Citation
Daher Abdi Z, Lavau-Denes S, Prémaud A, Urien S, Sauvage FL, Martin J et al. Pharmacokinetics and exposure-effect relationships of capecitabine in elderly patients with breast or colorectal cancer. Cancer chemotherapy and pharmacology 73(6):1285-1293 (2014).
  ·  DOI: [10.1007/s00280-014-2466-0](https://doi.org/10.1007/s00280-014-2466-0)

## Population and dosing

**Population:** elderly patients (&gt;=75 years) with breast or colorectal cancer, with younger adults (&lt;75 years) as comparator · condition cancer chemotherapy (breast or colorectal cancer) · age group elderly · n = 60.

**Dosed compound ≠ measured compound:** dosed capecitabine, measured 5-fluorouracil.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| θ 1 | kabs | 1.94 | h -1 |
| θ 2 | kel | 0.53 | h -1 |
| t lag (h) | tlag | 0.31 | h |
| V 1 (L) | V | 276 | L |
| CL 10 (L/h) | CL | 220 | L/h |
| k 23 (h -1 ) | kcomp | 10.5 | h -1 |
| Capecitabine(µM) | equation variable | 5.0 | µM |
| 5' DFCR (µM) | Ct | 3.6 | µM |
| 5 FU (µM) | fu | 0.7 | µM |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.105). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q75 unit µM ([length]) vs [mass] / [length] ** 3.**

A reported unit could not be converted (equation variable, Ct and fu), so that value has no SI equivalent. Extracted — fluorouracil: kabs 1.94 h -1, kel 0.53 h -1, tlag 0.31 h, V 276 L, CL 220 L/h, kcomp 10.5 h -1, Ct 3.6 µM, fu 0.7 µM.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which molecule was measured: this record has 5-fluorouracil, the second reading capecitabine; it also differs on 16 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| θ 1 | `Q49` · kabs | 1.94 | h -1 | 0.0005389 | 1/s | 1/h | llm (0.6) | tab_2:row4:col2 |
| θ 2 | `Q47` · kel | 0.53 | h -1 | 0.0001472 | 1/s | 1/h | llm (0.6) | tab_2:row5:col2 |
| t lag (h) | `Q83` · tlag | 0.31 | h | 1116 | s | h | space_fold (0.95) | tab_2:row6:col2 |
| V 1 (L) | `Q61` · V | 276 | L | 0.276 | m3 | l | space_fold (0.95) | tab_2:row7:col2 |
| CL 10 (L/h) | `Q22` · CL | 220 | L/h | 6.111e-05 | m3/s | l/h | llm_confirmed (0.6) | tab_2:row8:col2 |
| k 23 (h -1 ) | `Q48` · kcomp | 10.5 | h -1 | 0.002917 | 1/s | 1/h | space_fold (0.95) | tab_2:row10:col2 |
| Capecitabine(µM) | `Q900` · equation variable | 5.0 | µM |  |  | µM | llm (0.6) | tab_2:row23:col2 |
| 5' DFCR (µM) | `Q75` · Ct | 3.6 | µM |  |  | µM | llm (0.6) | tab_2:row24:col2 |
| 5 FU (µM) | `Q46` · fu | 0.7 | µM |  |  | µM | llm_confirmed (0.6) | tab_2:row26:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'bootstrapresults (n=1000 samples)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped duplicate Q22 ('CL 12 (L/h)', value '13.0') — already have one for this compound
- dropped duplicate Q48 ('k 34 (h -1 )', value '5.6') — already have one for this compound
- dropped duplicate Q49 ('θ 3', value '76.8') — already have one for this compound
- dropped duplicate Q49 ('θ 4', value '0.81') — already have one for this compound
- dropped 'ISV t lag (%)' → Q83: unit '%' is a statistic (%, CV, RSE, shrinkage or fold), not a time — the row is a variability or a ratio, not the estimate
- routed 'ISV V 1 (%)' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed 'ISV CL 10 (%)' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- dropped 'ISV k 23 (%)' → Q303: unit '%' is a statistic (%, CV, RSE, shrinkage or fold), not a rate — the row is a variability or a ratio, not the estimate
- routed 'ISV k 34 (%)' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed 'ISV k 40 (%)' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- unit_dimension_mismatch: "5' DFCR (µM)" → Q75 (unit '[length]' vs ontology '[mass] / [length] ** 3') — route to review
- unit_dimension_mismatch: "5' DFUR (µM)" → Q75 (unit '[length]' vs ontology '[mass] / [length] ** 3') — route to review
- dropped duplicate Q75 ("5' DFUR (µM)", value '5.8') — already have one for this compound
- dropped unlinked row (NIL): '* agegroup=0 for &lt;75 years patients and 1 for ≥75 years patients' — extend the ontology if this is a real PK parameter (source ['tab_2:row32:col0'])
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q63 (V 1 (L)); Q22 (CL 10 (L/h))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=5-fluorouracil
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'V 1 (L)' is the general volume)
- status held at "Needs review" — not promoted
- population split: 'bootstrapresults (n=1000 samples)' subgroup of Daher_2014 (paper reports 2 populations: bootstrapresults (n=1000 samples), final model)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.105 (2/19 fields) | 17 |

<details><summary>17 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.links` | [] | [['capecitabine', "5'-dfcr", 'conversion'], ["5'-dfcr", "5'-dfur", 'conversion'], ["5'-dfur", '5-fu', 'conversion'], ['5-fu', 'fbal', 'conversion']] | mismatch |
| `gpt-oss:120b` | `parameters[5 fu]` | 0.7 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[5' dfcr]` | 3.6 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[capecitabine]` | 5.0 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl 10]` | 220 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl 10]` |  | 220 | only_one_extracted |
| `gpt-oss:120b` | `parameters[k 23]` | 10.5 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[k 23]` |  | 10.5 | only_one_extracted |
| `gpt-oss:120b` | `parameters[t lag]` | 0.31 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[t lag]` |  | 0.31 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v 1]` | 276 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[v 1]` |  | 276 | only_one_extracted |
| `gpt-oss:120b` | `parameters[θ 1]` | 1.94 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[θ 1]` |  | 1.94 | only_one_extracted |
| `gpt-oss:120b` | `parameters[θ 2]` | 0.53 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[θ 2]` |  | 0.53 | only_one_extracted |
| `gpt-oss:120b` | `screen.primary_analyte` | 5-fluorouracil | capecitabine | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['tab_2:row8:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['tab_2:row5:col2'] |
| C5_dimension_Q48 | pass | 1 / [time] |  | ['tab_2:row10:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['tab_2:row4:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['tab_2:row7:col2'] |
| C5_dimension_Q75 | fail | [mass] / [length] ** 3 | µM ([length]) | ['tab_2:row24:col2'] |
| C5_dimension_Q83 | pass | [time] |  | ['tab_2:row6:col2'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 220 | ['tab_2:row8:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 220 L/h | ['tab_2:row8:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 276 L | ['tab_2:row7:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfluorouracil%5D%20Fluorouracil_Daher2014_bootstrapresultssamples&body=Drug%3A%20fluorouracil%0ARecord%3A%20Fluorouracil_Daher2014_bootstrapresultssamples%0APaper%3A%20Daher_2014%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_fluorouracil/Fluorouracil_Daher2014_bootstrapresultssamples%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 07:05 UTC</sub>
