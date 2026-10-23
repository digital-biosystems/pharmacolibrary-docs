<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07A&quot;,&quot;href&quot;:&quot;atc/A07A.md&quot;},{&quot;label&quot;:&quot;polymyxin B&quot;,&quot;href&quot;:&quot;drugs/drug_polymyxin_b/&quot;},{&quot;label&quot;:&quot;Chauzy_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;PolymyxinB_Li2023_reference&quot;,&quot;label&quot;:&quot;Li_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_polymyxin_b/PolymyxinB_Li2023_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;PolymyxinB_Manchandani2018_reference&quot;,&quot;label&quot;:&quot;Manchandani_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_polymyxin_b/PolymyxinB_Manchandani2018_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Akrong_2022_CFU&quot;,&quot;label&quot;:&quot;Akrong_2022 \u00b7 CFU&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_polymyxin_b/pd_Akrong_2022_CFU.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Soeorg_2026_cfu&quot;,&quot;label&quot;:&quot;Soeorg_2026 \u00b7 cfu&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_polymyxin_b/pd_Soeorg_2026_cfu.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# polymyxin B — `PolymyxinB_Chauzy2022_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">mouse</span>

> The reviewer's verdict (Needs review, 2026-09-28 14:39 UTC) predates the latest extraction (2026-10-07 19:53 UTC); the status shown comes from the current checks. Kabs, CL, V1, V2 and Q have no unit.

<div class="pk-model-meta" hidden drug="polymyxin B" model-id="PolymyxinB_Chauzy2022_reference" status="needs_review" stale="true" population="neutropenic mice" measured-compound="polymyxin_b" parameterization="mechanistic" topology="2C"></div>

## Citation
Chauzy A, Akrong G, Aranzana-Climent V, Moreau J, Prouvensier L, Mirfendereski H et al. PKPD Modeling of the Inoculum Effect of. Frontiers in pharmacology 13:842921 (2022).
  ·  DOI: [10.3389/fphar.2022.842921](https://doi.org/10.3389/fphar.2022.842921)

## Population and dosing

**Population:** neutropenic mice · condition Acinetobacter baumannii infection.

**Dosing:** 70, 1050, 2800 mg, sc, single.

> **Species: mouse.** This record comes from an animal study (mouse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| Maximum absorption rate | kabs | 14.7 |  | 10.3 |
| Clearance | CL | 0.437 | L/h | 3.9 |
| Distribution volume of the central compartment | V1 | 0.740 | L | 16.7 |
| Distribution volume of the peripheral compartment | V2 | 0.743 | L | 16.4 |
| Intercompartmental clearance | Q | 0.315 | L/h | 27.3 |
| Fraction unbound | fu | 0.166 |  | 9.3 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">mouse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Kabs, CL, V1, V2 and Q have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Extracted — polymyxin b: kabs 14.7, CL 0.437, V1 0.74, V2 0.743, Q 0.315, fu 0.166.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has polymyxin_b, the second reading unknown; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| Maximum absorption rate | `Q49` · kabs | 14.7 |  |  |  |  | 10.3 | llm_confirmed (0.6) | T1:row1:col2 |
| Clearance | `Q22` · CL | 0.437 | L/h | 1.214e-07 | m3/s | L/h | 3.9 | exact (1) | T1:row3:col2 |
| Distribution volume of the central compartment | `Q63` · V1 | 0.740 | L | 0.00074 | m3 | L | 16.7 | llm_confirmed (0.6) | T1:row4:col2 |
| Distribution volume of the peripheral compartment | `Q64` · V2 | 0.743 | L | 0.000743 | m3 | L | 16.4 | llm_confirmed (0.6) | T1:row5:col2 |
| Intercompartmental clearance | `Q30` · Q | 0.315 | L/h | 8.75e-08 | m3/s | L/h | 27.3 | exact (1) | T1:row6:col2 |
| Fraction unbound | `Q46` · fu | 0.166 |  |  |  |  | 9.3 | exact (1) | T1:row7:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Amount in the subcutaneous compartment that produces 50% of the maximum absorption rate' — extend the ontology if this is a real PK parameter (source ['T1:row2:col2'])
- implicit units: 'Maximum absorption rate' — the LLM proposed 'mg/h', whose dimension does not fit Q49; left unset
- implicit units: 'Clearance' → L/h (from the popPK convention: 'Clearance (CL) in population PK models is conventionally expressed in volume per time. For small animal models like mice')
- implicit units: 'Distribution volume of the central compartment' → L (from the popPK convention: 'Volume of distribution (V1) is conventionally expressed in volume units. For a mouse PK model, L is the standard unit. T')
- implicit units: 'Distribution volume of the peripheral compartment' → L (from the popPK convention: 'Volume of distribution (V2) is conventionally expressed in volume units. For a mouse PK model, L is the standard unit. T')
- implicit units: 'Intercompartmental clearance' → L/h (from the popPK convention: 'Intercompartmental clearance (Q) is conventionally expressed in volume per time. For a mouse PK model, L/h is the standa')
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (Clearance); Q63 (Distribution volume of the central compartment); Q64 (Distribution volume of the peripheral compartment); Q30 (Intercompartmental clearance)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=polymyxin_b
- molar mass: none found for 'polymyxin_b' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.667 (14/21 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[amount in the subcutaneous compartment that produces 50% of the maximum absorption rate]` |  | 2.24 | only_one_extracted |
| `gpt-oss-120b` | `parameters[bmax: maximum bacterial count reached in the tissue]` |  | 8.00 | only_one_extracted |
| `gpt-oss-120b` | `parameters[knet: apparent growth rate constant]` |  | 0.594 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q325_weight_power]` |  | 0.162 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q47_category]` |  | 1.00 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | polymyxin_b | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | polymyxin_b | unknown | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['T1:row3:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['T1:row6:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['T1:row4:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['T1:row5:col2'] |
| C5_unit_missing_Q49 | fail | 1 / [time] |  | ['T1:row1:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.437 | ['T1:row3:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.437 L/h | ['T1:row3:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 0.74 L | ['T1:row4:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 0.743 L | ['T1:row5:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpolymyxin_b%5D%20PolymyxinB_Chauzy2022_reference&body=Drug%3A%20polymyxin_b%0ARecord%3A%20PolymyxinB_Chauzy2022_reference%0APaper%3A%20Chauzy_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_polymyxin_b/PolymyxinB_Chauzy2022_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 19:53 UTC</sub>
