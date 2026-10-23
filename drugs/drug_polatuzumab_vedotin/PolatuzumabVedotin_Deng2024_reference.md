<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;polatuzumab vedotin&quot;,&quot;href&quot;:&quot;drugs/drug_polatuzumab_vedotin/&quot;},{&quot;label&quot;:&quot;Deng_2024 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# polatuzumab vedotin — `PolatuzumabVedotin_Deng2024_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The paper reports none of the model's key parameters.

<div class="pk-model-meta" hidden drug="polatuzumab vedotin" model-id="PolatuzumabVedotin_Deng2024_reference" status="rejected" stale="false" population="patients with previously untreated DLBCL" measured-compound="acMMAE" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Deng R, Gibiansky L, Lu T, Flowers CR, Sehn LH, Liu Q et al. Population pharmacokinetics and exposure-response analyses of polatuzumab vedotin in patients with previously untreated DLBCL from the POLARIX study. CPT: pharmacometrics & systems pharmacology 13(6):1055–1066 (2024).
  ·  DOI: [10.1002/psp4.13141](https://doi.org/10.1002/psp4.13141)

## Population and dosing

**Population:** patients with previously untreated DLBCL · condition diffuse large B-cell lymphoma · age group adult.

**Dosed compound ≠ measured compound:** dosed polatuzumab vedotin, measured acMMAE.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 0 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. No parameter values were extracted.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has polatuzumab vedotin → acmmae (metabolism); acmmae → unconjugated mmae (metabolism), the second reading none. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Departures & gaps

**Interpretation flags:**
- dropped value-less row: 'Weight, kg'
- dropped value-less row: 'Age, years'
- dropped value-less row: 'Lactate dehydrogenase, μ/L'
- dropped value-less row: 'Albumin, g/L'
- dropped value-less row: 'Hemoglobin, g/L'
- dropped value-less row: 'Platelet count, 109/L'
- dropped value-less row: 'Neutrophil count, 109/L'
- dropped value-less row: 'B‐cell count, 109/L'
- dropped value-less row: 'Log B‐cell count 109/L'
- dropped value-less row: 'Neutrophil to lymphocyte ratio'
- dropped value-less row: 'Tumor size, mm2'
- dropped value-less row: 'acMMAE C6 AUC, ng*day/mL'
- dropped value-less row: 'acMMAE C6 C max, ng/mL'
- dropped value-less row: 'Unconjugated MMAE C6 AUC, ng*day/mL'
- dropped value-less row: 'Unconjugated MMAE C6 C max, ng/mL'
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=acMMAE
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 15/15 row label(s) assigned, 0 linked by role; re-tagged parent→acMMAE ×2, parent→unconjugated MMAE ×2
- review gap-fill skipped: this record measures 'acMMAE', not polatuzumab_vedotin — the review values are the parent's

**Extraction notes:**
- unparsed cell Deng_2024_table_1:row0:col2 = '74.2 (38.4–228.0)'
- unparsed cell Deng_2024_table_1:row1:col2 = '65.0 (19.0–80.0)'
- unparsed cell Deng_2024_table_1:row2:col2 = '297.0 (4.2–4820.0)'
- unparsed cell Deng_2024_table_1:row3:col2 = '37.0 (17.1–54.2)'
- unparsed cell Deng_2024_table_1:row4:col2 = '123.0 (65.0–170.0)'
- unparsed cell Deng_2024_table_1:row5:col2 = '259.0 (25.0–881.0)'
- unparsed cell Deng_2024_table_1:row6:col2 = '5.3 (0.46–25.4)'
- unparsed cell Deng_2024_table_1:row7:col2 = '90.5 (0–19,100)'
- unparsed cell Deng_2024_table_1:row8:col2 = '4.5 (0–9.9)'
- unparsed cell Deng_2024_table_1:row9:col2 = '4.3 (0.3–84.7)'
- unparsed cell Deng_2024_table_1:row10:col2 = '4680 (96–227,000)'
- unparsed cell Deng_2024_table_1:row11:col2 = '2530 (1690–4510)'
- unparsed cell Deng_2024_table_1:row12:col2 = '632 (419–1010)'
- unparsed cell Deng_2024_table_1:row13:col2 = '13.7 (4.1–72.4)'
- unparsed cell Deng_2024_table_1:row14:col2 = '1.3 (0.4–5.4)'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.75 (3/4 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['polatuzumab vedotin', 'acmmae', 'metabolism'], ['acmmae', 'unconjugated mmae', 'metabolism']] | [] | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained |
|---|---|---|---|
| C0_has_structural_params | fail |  | 0 |
| C0b_disposition_core | fail |  |  |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none', 'none'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpolatuzumab_vedotin%5D%20PolatuzumabVedotin_Deng2024_reference&body=Drug%3A%20polatuzumab_vedotin%0ARecord%3A%20PolatuzumabVedotin_Deng2024_reference%0APaper%3A%20Deng_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_polatuzumab_vedotin/PolatuzumabVedotin_Deng2024_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 19:11 UTC</sub>
