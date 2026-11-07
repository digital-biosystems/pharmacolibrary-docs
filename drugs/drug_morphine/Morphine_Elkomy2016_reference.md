<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;morphine&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/&quot;},{&quot;label&quot;:&quot;Elkomy_2016 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Morphine_Bardol2025_reference&quot;,&quot;label&quot;:&quot;Bardol_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/Morphine_Bardol2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Bragg1995_reference&quot;,&quot;label&quot;:&quot;Bragg_1995_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/Morphine_Bragg1995_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Ihmsen2021_reference&quot;,&quot;label&quot;:&quot;Ihmsen_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/Morphine_Ihmsen2021_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Andersen1986_f&quot;,&quot;label&quot;:&quot;Andersen_1986_f&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/Morphine_Andersen1986_f.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Andersen1986_j&quot;,&quot;label&quot;:&quot;Andersen_1986_j&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/Morphine_Andersen1986_j.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Andersen1986_k&quot;,&quot;label&quot;:&quot;Andersen_1986_k&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/Morphine_Andersen1986_k.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Juul2016_reference&quot;,&quot;label&quot;:&quot;Juul_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/Morphine_Juul2016_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# morphine — `Morphine_Elkomy2016_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Morphine model rejected because intercompartmental clearance Q (0.88 L/h) and M3G Cmax (nM) have conflicting dimension labels.

<div class="pk-model-meta" hidden drug="morphine" model-id="Morphine_Elkomy2016_reference" status="rejected" stale="false" population="infants and young children after congenital heart surgery" measured-compound="morphine" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Elkomy MH, Drover DR, Glotzbach KL, Galinkin JL, Frymoyer A, Su F et al. Pharmacokinetics of Morphine and Its Metabolites in Infants and Young Children After Congenital Heart Surgery. The AAPS journal 18(1):124–133 (2016).
  ·  DOI: [10.1208/s12248-015-9826-5](https://doi.org/10.1208/s12248-015-9826-5)

## Population and dosing

**Population:** infants and young children after congenital heart surgery · condition congenital heart disease · age group mixed · n = 20.

**Dosing:** 10.5 mg, iv, multiple.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| θCL | CL | 8.7 | L/h | 12 | 0.20 (None% RSE) |
| θVC | V1 | 18.7 | L | 21 | 0.67 (None% RSE) |
| θCLD | Q | 0.88 | L/h | 15 | 0.17 (None% RSE) |
| θVP | V2 | 25.2 | L | 32 | 0.42 (None% RSE) |
| θKint, M3G | kfm | 0.30 | h⁻¹ | 14 |  |
| θKint, M6G | kfm | 0.24 | h⁻¹ | 13 |  |
| Cint,50, M6G | CLint | 21.9 | nM | 27 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.739). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Morphine model rejected because intercompartmental clearance Q (0.88 L/h) and M3G Cmax (nM) have conflicting dimension labels.**

The record lists the intercompartmental clearance Q as 0.88 L/h, yet the dimension check flags a unit conflict between nM and volume/time, suggesting a labeling error. The second reader could not verify the value for Q, recording it as null. Additionally, the intrinsic clearance for M6G is listed as 21.9 nM, a concentration unit inconsistent with clearance dimensions. Extracted — morphine: CL 8.7 L/h, V1 18.7 L, Q 0.88 L/h, V2 25.2 L; M3G: kfm 0.3 h⁻¹; M6G: kfm 0.24 h⁻¹, CLint 21.9 nM.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of θcld: this record has 0.88, the second reading none; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| θCL | `Q22` · CL | 8.7 | L/h | 2.417e-06 | m3/s | L/h | 12 | llm_confirmed (0.6) | Elkomy_2016_table_p5_1:row2:col1, Elkomy_2016_table_p5_1:row2:col2 | 0.20 (None% RSE) |
| θVC | `Q63` · V1 | 18.7 | L | 0.0187 | m3 | L | 21 | llm_confirmed (0.6) | Elkomy_2016_table_p5_1:row4:col1, Elkomy_2016_table_p5_1:row4:col2 | 0.67 (None% RSE) |
| θCLD | `Q30` · Q | 0.88 | L/h | 2.444e-07 | m3/s | l/h | 15 | llm_confirmed (0.6) | Elkomy_2016_table_p5_1:row6:col1, Elkomy_2016_table_p5_1:row6:col2 | 0.17 (None% RSE) |
| θVP | `Q64` · V2 | 25.2 | L | 0.0252 | m3 | L | 32 | llm_confirmed (0.6) | Elkomy_2016_table_p5_1:row8:col1, Elkomy_2016_table_p5_1:row8:col2 | 0.42 (None% RSE) |
| θKint, M3G | `Q305` · kfm | 0.30 | h⁻¹ | 8.333e-05 | 1/s | 1/h | 14 | exact (1) | Elkomy_2016_table_p5_1:row10:col1, Elkomy_2016_table_p5_1:row10:col2 |  |
| θKint, M6G | `Q305` · kfm | 0.24 | h⁻¹ | 6.667e-05 | 1/s | 1/h | 13 | exact (1) | Elkomy_2016_table_p5_1:row11:col2 |  |
| Cint,50, M6G | `Q3` · CLint | 21.9 | nM |  |  | nM | 27 | llm (0.6) | Elkomy_2016_table_p5_1:row17:col2 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| θMmax, M3G | Q32 | llm |

## Departures & gaps

**Interpretation flags:**
- compound tags: 5 row(s) → M3G, 4 row(s) → M6G (name 9)
- table section iiv: 'θCL' routed out of structural estimates ('Inter-individual variability (%CV)')
- table section iiv: 'θVC' routed out of structural estimates ('Inter-individual variability (%CV)')
- table section iiv: 'θCLD' routed out of structural estimates ('Inter-individual variability (%CV)')
- table section iiv: 'θVP' routed out of structural estimates ('Inter-individual variability (%CV)')
- table section iiv: 'θKint, M3G' routed out of structural estimates ('Inter-individual variability (%CV)')
- table section iiv: 'θMmax, M3G' routed out of structural estimates ('Inter-individual variability (%CV)')
- table section iiv: 'Cint,50, M3G' routed out of structural estimates ('Inter-individual variability (%CV)')
- table section residual_error: 'σ2 (morphine)' routed out of structural estimates ('Residual variability (%CV)')
- table section residual_error: 'σ2 (M3G)' routed out of structural estimates ('Residual variability (%CV)')
- table section residual_error: 'σ2 (M6G)' routed out of structural estimates ('Residual variability (%CV)')
- unit_dimension_mismatch: 'θMmax, M3G' → Q32 (unit '[length]' vs ontology '[mass] / [length] ** 3') — route to review
- dropped unlinked row (NIL): 'θMmax, M6G' — extend the ontology if this is a real PK parameter (source ['Elkomy_2016_table_p5_1:row14:col2'])
- dropped unlinked row (NIL): 'Cint,50, M3G' — extend the ontology if this is a real PK parameter (source ['Elkomy_2016_table_p5_1:row16:col2'])
- unit_dimension_mismatch: 'Cint,50, M6G' → Q3 (unit '[length]' vs ontology '[length] ** 3 / [time] / [mass]') — route to review
- implicit units: 'θCL' → L/h (from the popPK convention: 'The paper does not explicitly state the unit for the proportionality constant θCL in the text or table footnotes. Howeve')
- implicit units: 'θVC' → L (from the popPK convention: 'The paper does not explicitly state the unit for θVC. In population PK, central volume of distribution (V1) is standardl')
- implicit units: 'θVP' → L (from the popPK convention: 'The paper does not explicitly state the unit for θVP. In population PK, peripheral volume of distribution (V2) is standa')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=morphine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 2 first-order transfer(s) across 3 compounds → general_linear
- template fit: none — turnover model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=turnover; 13/13 row label(s) assigned, 16 linked by role; re-tagged parent→M3G ×8, parent→M6G ×4
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- table Elkomy_2016_table_p5_1: ambiguous_numeric_format

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.739 (17/23 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cint,50, m3g]` |  | 40.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θcld]` | 0.88 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[θkint, m3g].parameter_id` | Q305 | Q334 | mismatch |
| `gpt-oss-120b` | `parameters[θkint, m6g].parameter_id` | Q305 | Q334 | mismatch |
| `gpt-oss-120b` | `parameters[θmmax, m3g].parameter_id` | Q32 | Q305 | mismatch |
| `gpt-oss-120b` | `parameters[θmmax, m6g]` |  | 109 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Elkomy_2016_table_p5_1:row2:col1', 'Elkomy_2016_table_p5_1:row2:col2'] |
| C5_dimension_Q3 | fail | [length] ** 3 / [time] / [mass] | nM ([length]) | ['Elkomy_2016_table_p5_1:row17:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Elkomy_2016_table_p5_1:row6:col1', 'Elkomy_2016_table_p5_1:row6:col2'] |
| C5_dimension_Q305 | pass | 1 / [time] |  | ['Elkomy_2016_table_p5_1:row10:col1', 'Elkomy_2016_table_p5_1:row10:col2'] |
| C5_dimension_Q305 | pass | 1 / [time] |  | ['Elkomy_2016_table_p5_1:row11:col2'] |
| C5_dimension_Q32 | fail | [mass] / [length] ** 3 | nM ([length]) | ['Elkomy_2016_table_p5_1:row13:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Elkomy_2016_table_p5_1:row4:col1', 'Elkomy_2016_table_p5_1:row4:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Elkomy_2016_table_p5_1:row8:col1', 'Elkomy_2016_table_p5_1:row8:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 8.7 | ['Elkomy_2016_table_p5_1:row2:col1', 'Elkomy_2016_table_p5_1:row2:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 8.7 L/h | ['Elkomy_2016_table_p5_1:row2:col1', 'Elkomy_2016_table_p5_1:row2:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 18.7 L | ['Elkomy_2016_table_p5_1:row4:col1', 'Elkomy_2016_table_p5_1:row4:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 25.2 L | ['Elkomy_2016_table_p5_1:row8:col1', 'Elkomy_2016_table_p5_1:row8:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmorphine%5D%20Morphine_Elkomy2016_reference&body=Drug%3A%20morphine%0ARecord%3A%20Morphine_Elkomy2016_reference%0APaper%3A%20Elkomy_2016%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_morphine/Morphine_Elkomy2016_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-04 10:50 UTC</sub>
