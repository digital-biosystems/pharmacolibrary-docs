<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;brentuximab vedotin&quot;,&quot;href&quot;:&quot;drugs/drug_brentuximab_vedotin/&quot;},{&quot;label&quot;:&quot;Suri_2018 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# brentuximab vedotin — `BrentuximabVedotin_Suri2018_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The ADC-to-MMAE conversion rate for MMAE has an unknown value, leaving this metabolite without a path from the brentuximab vedotin dose.

<div class="pk-model-meta" hidden drug="brentuximab vedotin" model-id="BrentuximabVedotin_Suri2018_reference" status="rejected" stale="false" population="patients with CD30-positive malignancies" measured-compound="brentuximab vedotin (ADC) and MMAE" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Suri A, Mould DR, Liu Y, Jang G, Venkatakrishnan K. Population PK and Exposure-Response Relationships for the Antibody-Drug Conjugate Brentuximab Vedotin in CTCL Patients in the Phase III ALCANZA Study. Clinical pharmacology and therapeutics 104(5):989–999 (2018).
  ·  DOI: [10.1002/cpt.1037](https://doi.org/10.1002/cpt.1037)

## Population and dosing

**Population:** patients with CD30-positive malignancies · condition CD30-positive malignancies · age group adult · n = 380.

**Dosing:** 126 mg, iv, multiple, every 504 h.

**Dosed compound ≠ measured compound:** dosed brentuximab vedotin, measured brentuximab vedotin (ADC) and MMAE.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL | CL | 0.0478 | L/h |
| central volume | V1 | 3.5 | L |
| peripheral volume one | V2 | 3.67 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The ADC-to-MMAE conversion rate for MMAE has an unknown value, leaving this metabolite without a path from the brentuximab vedotin dose.**

The record lists MMAE as formed from brentuximab vedotin (ADC), but assigns MMAE no compartment and gives the conversion-rate parameter no value. The finding is that MMAE is unreachable from the dose; the record reports clearance of 0.0478 L/h and central and peripheral volumes of 3.5 L and 3.67 L, respectively, for the ADC and MMAE. Extracted — brentuximab vedotin (ADC) and MMAE: CL 0.0478 L/h, V1 3.5 L, V2 3.67 L.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on which molecule was measured: this record has brentuximab vedotin (ADC) and MMAE, the second reading ADC; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by gpt-6-luna</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL | `Q22` · CL | 0.0478 | L/h | 1.328e-08 | m3/s | L/h | exact (1) | Suri_2018:other_prose |
| central volume | `Q63` · V1 | 3.5 | L | 0.0035 | m3 | L | exact (1) | Suri_2018:other_prose |
| peripheral volume one | `Q64` · V2 | 3.67 | L | 0.00367 | m3 | L | boundary (0.8) | Suri_2018:other_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- salvaged Q22 ('CL'=0.0478) from results prose — parameter table was unreadable
- salvaged Q63 ('central volume'=3.5) from results prose — parameter table was unreadable
- salvaged Q64 ('peripheral volume one'=3.67) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=brentuximab vedotin (ADC) and MMAE
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [0]
- status held at "Needs review" — not promoted
- molar mass: no plausible PubChem entry for 'brentuximab vedotin (ADC)' ('brentuximab vedotin') — left in mass units
- molar mass: no plausible PubChem entry for 'brentuximab vedotin (ADC) and MMAE' ('brentuximab vedotin and monomethyl auristatin E') — left in mass units
- molar mass: none found for 'brentuximab vedotin (ADC)' — its concentrations stay mass-only
- molar mass: none found for 'brentuximab vedotin (ADC) and MMAE' — its concentrations stay mass-only
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- text-pointer recovery found no readable extracted parameter table

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.2 (2/10 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `model.links` | [['brentuximab vedotin (adc)', 'mmae', 'metabolism']] | [['brentuximab vedotin', 'mmae', 'metabolism']] | mismatch |
| `qwen3.8-27b` | `parameters[central volume]` |  | 3.5 | only_one_extracted |
| `qwen3.8-27b` | `parameters[central volume]` | 3.5 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[cl]` |  | 0.0478 | only_one_extracted |
| `qwen3.8-27b` | `parameters[cl]` | 0.0478 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[peripheral volume one]` |  | 3.67 | only_one_extracted |
| `qwen3.8-27b` | `parameters[peripheral volume one]` | 3.67 |  | only_one_extracted |
| `qwen3.8-27b` | `screen.primary_analyte` | brentuximab vedotin (ADC) and MMAE | ADC | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.0478 | ['Suri_2018:other_prose'] |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0478 L/h | ['Suri_2018:other_prose'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.5 L | ['Suri_2018:other_prose'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 3.67 L | ['Suri_2018:other_prose'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbrentuximab_vedotin%5D%20BrentuximabVedotin_Suri2018_reference&body=Drug%3A%20brentuximab_vedotin%0ARecord%3A%20BrentuximabVedotin_Suri2018_reference%0APaper%3A%20Suri_2018%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_brentuximab_vedotin/BrentuximabVedotin_Suri2018_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 10:33 UTC</sub>
