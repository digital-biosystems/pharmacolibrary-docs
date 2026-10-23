<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;sulpiride&quot;,&quot;href&quot;:&quot;drugs/drug_sulpiride/&quot;},{&quot;label&quot;:&quot;Yao_2019 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sulpiride_Bressolle1984_reference&quot;,&quot;label&quot;:&quot;Bressolle_1984_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sulpiride/Sulpiride_Bressolle1984_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sulpiride — `Sulpiride_Yao2019_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

> The sulpiride record was rejected because the apparent (F-adjusted) parameters V1/F, V2/F, CL/F and Q/F were additionally corrected with the bioavailability Fab = 0.818, a double F correction.

<div class="pk-model-meta" hidden drug="sulpiride" model-id="Sulpiride_Yao2019_reference" status="rejected" stale="false" population="nude mice bearing MCF-7/Adr breast cancer xenografts" measured-compound="sulpiride" parameterization="apparent" topology="2C"></div>

## Citation
Yao QY, Li J, Chen R, Yao Y, Xue JS, Chen WJ et al. Preclinical PK/PD model for the combinatorial use of dexamethasone and sulpiride in the treatment of breast cancer. Acta pharmacologica Sinica 40(12):1596–1602 (2019).
  ·  DOI: [10.1038/s41401-019-0251-7](https://doi.org/10.1038/s41401-019-0251-7)

## Population and dosing

**Population:** nude mice bearing MCF-7/Adr breast cancer xenografts · condition breast cancer xenograft · age group adult.

**Dosing:** 1750, 3500, 7000 mg, oral, multiple, every 24 h.

> **Species: mouse.** This record comes from an animal study (mouse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| Ka1,sul (h−1) | kabs | 1.66 | h−1 | 5.3 |  |
| f | Fab | 0.818 |  | 17.1 | 0 (None% RSE) |
| Vc,sul/F (L/kg) | V1/F | 59.6 | L/kg | 24.2 |  |
| Vp,sul/F (L/kg) | V2/F | 392 | L/kg | 34.9 |  |
| CLsul/F (L·kg−1·h−1) | CL/F | 12.1 | L·kg−1·h−1 | 1.5 |  |
| Qsul/F (L·kg−1·h−1) | Q/F | 29.4 | L·kg−1·h−1 | 3.6 |  |
| Tlag (h) | tlag | 1.50 | h |  | 0 (None% RSE) |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The sulpiride record was rejected because the apparent (F-adjusted) parameters V1/F, V2/F, CL/F and Q/F were additionally corrected with the bioavailability Fab = 0.818, a double F correction.**

The paper reports sulpiride parameters already adjusted for bioavailability (V1/F 59.6 L/kg, V2/F 392 L/kg, CL/F 12.1 L·kg−1·h−1, Q/F 29.4 L·kg−1·h−1), yet the model builder also applied the absolute bioavailability Fab of 0.818 to them, correcting twice for F. This apparent-parameter coherence violation makes the effective clearance and volumes inconsistent with the reported values, so the record was refused. Extracted — sulpiride: kabs 1.66 h−1, Fab 0.818, V1/F 59.6 L/kg, V2/F 392 L/kg, CL/F 12.1 L·kg−1·h−1, Q/F 29.4 L·kg−1·h−1, tlag 1.5 h.

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Ka1,sul (h−1) | `Q49` · kabs | 1.66 | h−1 | 0.0004611 | 1/s | 1/h | 5.3 | llm (0.6) | Tab1:row1:col2 |  |
| f | `Q40` · Fab | 0.818 |  |  |  |  | 17.1 | exact (1) | Tab1:row3:col2 | 0 (None% RSE) |
| Vc,sul/F (L/kg) | `Q290` · V1/F | 59.6 | L/kg | 4.172 | m3 | l/kg | 24.2 | llm_corrected (0.6) | Tab1:row4:col2 |  |
| Vp,sul/F (L/kg) | `Q82` · V2/F | 392 | L/kg | 27.44 | m3 | l/kg | 34.9 | llm_corrected (0.6) | Tab1:row5:col2 |  |
| CLsul/F (L·kg−1·h−1) | `Q27` · CL/F | 12.1 | L·kg−1·h−1 | 0.0002353 | m3/s | l/(h·kg) | 1.5 | llm (0.6) | Tab1:row6:col2 |  |
| Qsul/F (L·kg−1·h−1) | `Q69` · Q/F | 29.4 | L·kg−1·h−1 | 0.0005717 | m3/s | l/(h·kg) | 3.6 | llm (0.6) | Tab1:row7:col2 |  |
| Tlag (h) | `Q83` · tlag | 1.50 | h | 5400 | s | h |  | exact (1) | Tab1:row8:col2 | 0 (None% RSE) |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'Ka1,sul (h−1)' routed out of structural estimates ('IIV (%CV)')
- table section iiv: 'Ka2,sul (h−1)' routed out of structural estimates ('IIV (%CV)')
- table section iiv: 'f' routed out of structural estimates ('IIV (%CV)')
- table section iiv: 'Vc,sul/F (L/kg)' routed out of structural estimates ('IIV (%CV)')
- table section iiv: 'Vp,sul/F (L/kg)' routed out of structural estimates ('IIV (%CV)')
- table section iiv: 'CLsul/F (L·kg−1·h−1)' routed out of structural estimates ('IIV (%CV)')
- table section iiv: 'Qsul/F (L·kg−1·h−1)' routed out of structural estimates ('IIV (%CV)')
- table section iiv: 'Tlag (h)' routed out of structural estimates ('IIV (%CV)')
- dropped duplicate Q49 ('Ka2,sul (h−1)', value '538') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=sulpiride

**Extraction notes:**
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (18/18 fields) | none |

_All readers agree on the compared fields of this record._

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Tab1:row6:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Tab1:row4:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tab1:row1:col2'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['Tab1:row7:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['Tab1:row5:col2'] |
| C5_dimension_Q83 | pass | [time] |  | ['Tab1:row8:col2'] |
| C7_apparent_coherence | fail | F==1, Fm==1, no molar corr. | absolute F=0.818 with apparent parameterization |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 847 L/h | ['Tab1:row6:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 4.17e+03 L | ['Tab1:row4:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 2.74e+04 L | ['Tab1:row5:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsulpiride%5D%20Sulpiride_Yao2019_reference&body=Drug%3A%20sulpiride%0ARecord%3A%20Sulpiride_Yao2019_reference%0APaper%3A%20Yao_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_sulpiride/Sulpiride_Yao2019_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 17:33 UTC</sub>
