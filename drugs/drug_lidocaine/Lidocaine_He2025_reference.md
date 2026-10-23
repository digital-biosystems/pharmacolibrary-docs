<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;lidocaine&quot;,&quot;href&quot;:&quot;drugs/drug_lidocaine/&quot;},{&quot;label&quot;:&quot;He_2025 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# lidocaine — `Lidocaine_He2025_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-10-05 09:27 UTC (Rejected), but the paper was screened again on 2026-10-06 03:22 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. The lidocaine model was rejected because the metabolite GX has no path from the administered dose: the lidocaine→MEGX→GX metabolic chain is incomplete, and the lidocaine clearance value of 26.1 L/h is disputed.

<div class="pk-model-meta" hidden drug="lidocaine" model-id="Lidocaine_He2025_reference" status="rejected" stale="true" population="partial hepatectomy patients" measured-compound="lidocaine" parameterization="mechanistic" topology="general_linear"></div>

## Citation
He C, Qi X, Liu Y, Jin Y, Zhang M, Zhang Y et al. Optimizing Lidocaine Dosing in Hepatectomy Patients: A Population Pharmacokinetic Study of Active Metabolites. Drug design, development and therapy 19:6255–6268 (2025).
  ·  DOI: [10.2147/DDDT.S485389](https://doi.org/10.2147/DDDT.S485389)

## Population and dosing

**Population:** partial hepatectomy patients · condition hepatectomy · age group adult · n = &gt;=35.

**Dosing:** 57.97, 86.07 mg, iv, multiple.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 1 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| lidocaine clearance estimated by the final model | CL | 26.1 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The lidocaine model was rejected because the metabolite GX has no path from the administered dose: the lidocaine→MEGX→GX metabolic chain is incomplete, and the lidocaine clearance value of 26.1 L/h is disputed.**

The structure links lidocaine to MEGX and MEGX to GX via metabolism, but the GX metabolite is unlinked, leaving part of the model unreachable from the dose. The only extracted parameter is lidocaine total clearance, 26.1 L/h, which a second reader recorded as null rather than 26.1. No other parameter values were available to support the record. Extracted — lidocaine: CL 26.1 L/h.

Independently confirmed by `gpt-oss:120b`.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| lidocaine clearance estimated by the final model | `Q22` · CL | 26.1 | L/h | 7.25e-06 | m3/s | L/h | boundary (0.8) | He_2025:discussion_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL' routed out of structural estimates ('Inter-Individual Variability (%CV)')
- table section iiv: 'V1' routed out of structural estimates ('Inter-Individual Variability (%CV)')
- table section iiv: 'CLFM' routed out of structural estimates ('Inter-Individual Variability (%CV)')
- table section iiv: 'V2' routed out of structural estimates ('Inter-Individual Variability (%CV)')
- table section iiv: 'CLD' routed out of structural estimates ('Inter-Individual Variability (%CV)')
- table section residual_error: 'σ2Lidocaine' routed out of structural estimates ('Residual errors (%CV)')
- table section residual_error: 'σ2MEGX' routed out of structural estimates ('Residual errors (%CV)')
- table section residual_error: 'σ2GX' routed out of structural estimates ('Residual errors (%CV)')
- dropped value-less row: 'CL (L/h)' (captured trailing unit 'L/h' for child rows)
- dropped value-less row: 'V1 (L)' (captured trailing unit 'L' for child rows)
- dropped value-less row: 'CLFM'
- dropped value-less row: 'V2 (L)' (captured trailing unit 'L' for child rows)
- dropped value-less row: 'CLD (L/h)' (captured trailing unit 'L/h' for child rows)
- dropped value-less row: 'CLEFM'
- dropped value-less row: 'CLE (L/h)' (captured trailing unit 'L/h' for child rows)
- dropped value-less row: 'CLG (L/h)' (captured trailing unit 'L/h' for child rows)
- dropped value-less row: 'The effect of SIZE on CL'
- dropped value-less row: 'The effect of DOSE on CLFM'
- dropped value-less row: 'The effect of TBW on CLFM'
- dropped value-less row: 'The effect of DOSE on V2'
- dropped value-less row: 'The effect of DOSE on CLG'
- dropped value-less row: 'CLG'
- salvaged Q22 ('lidocaine clearance estimated by the final model'=26.1) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=lidocaine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=compartmental; 21/21 row label(s) assigned, 11 linked by role; re-tagged parent→MEGX ×10, parent→GX ×6
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell t0002:row1:col1 = '26.1 (17.59, 34.61)'
- unparsed cell t0002:row1:col3 = '26.2 (23.48, 29.17)'
- unparsed cell t0002:row2:col1 = '8.73 (5.34, 12.12)'
- unparsed cell t0002:row2:col3 = '8.38 (1.03, 12.68)'
- unparsed cell t0002:row3:col3 = '0.017 (0.002, 0.027)'
- unparsed cell t0002:row4:col1 = '63.6 (43.22, 83.94)'
- unparsed cell t0002:row4:col3 = '65.3 (56.28, 74.94)'
- unparsed cell t0002:row5:col1 = '41.0 (17.87, 64.13)'
- unparsed cell t0002:row5:col3 = '42.8 (32.52, 56.55)'
- unparsed cell t0002:row6:col1 = '0.897 (0.794, 1)'
- unparsed cell t0002:row6:col3 = '0.907 (0.727, 1.125)'
- unparsed cell t0002:row7:col1 = '1.41 (0.795, 2.025)'
- unparsed cell t0002:row7:col3 = '1.37 (0.16, 2.18)'
- unparsed cell t0002:row8:col1 = '4.77 (1.54, 8)'
- unparsed cell t0002:row8:col3 = '4.66 (0.55, 7.34)'
- unparsed cell t0002:row9:col1 = '–0.382 (–0.717, –0.047)'
- unparsed cell t0002:row9:col3 = '–0.377 (–0.618, –0.142)'
- unparsed cell t0002:row10:col1 = '0.669 (0.161, 1.177)'
- unparsed cell t0002:row10:col3 = '0.691 (0.277, 1.03)'
- unparsed cell t0002:row11:col1 = '–1.09 (–2.66, 0.48)'
- unparsed cell t0002:row11:col3 = '–1.13 (–1.64, –0.62)'
- unparsed cell t0002:row12:col1 = '1.27 (0.315, 2.225)'
- unparsed cell t0002:row12:col3 = '1.25 (0.708, 1.82)'
- unparsed cell t0002:row13:col1 = '1 (–0.196, 2.196)'
- unparsed cell t0002:row13:col3 = '0.99 (0.703, 1.35)'
- unparsed cell t0002:row15:col3 = '8.42 (4.25, 12.66)'
- unparsed cell t0002:row16:col3 = '4.2 (2, 7)'
- unparsed cell t0002:row17:col3 = '8.17 (2.9, 13.9)'
- unparsed cell t0002:row18:col3 = '17.6 (6.4, 31)'
- unparsed cell t0002:row19:col3 = '48.3 (12.4, 95.9)'
- unparsed cell t0002:row22:col3 = '15 (9.8, 20.8)'
- unparsed cell t0002:row24:col3 = '5.5 (4.1, 6.9)'
- unparsed cell t0002:row25:col3 = '3.5 (2.1, 5.1)'
- unparsed cell t0002:row26:col3 = '11 (9, 13)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | confirmed | 1.0 (5/5 fields) | none |

_All readers agree on the compared fields of this record._

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 26.1 | ['He_2025:discussion_prose'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['CLEFM'] |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 26.1 L/h | ['He_2025:discussion_prose'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blidocaine%5D%20Lidocaine_He2025_reference&body=Drug%3A%20lidocaine%0ARecord%3A%20Lidocaine_He2025_reference%0APaper%3A%20He_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_lidocaine/Lidocaine_He2025_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-06 03:22 UTC</sub>
