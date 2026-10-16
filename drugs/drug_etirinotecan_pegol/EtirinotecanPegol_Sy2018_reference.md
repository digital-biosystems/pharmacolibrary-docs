<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01C&quot;,&quot;href&quot;:&quot;atc/L01C.md&quot;},{&quot;label&quot;:&quot;etirinotecan pegol&quot;,&quot;href&quot;:&quot;drugs/drug_etirinotecan_pegol/&quot;},{&quot;label&quot;:&quot;Sy_2018 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# etirinotecan pegol — `EtirinotecanPegol_Sy2018_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.111). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The metabolite APC is an unlinked compartment in the etirinotecan pegol model because no metabolic rate parameter connects irinotecan to APC.**

The record defines irinotecan, SN38, SN38-glucuronide, and APC as metabolites formed in the central compartment. While links exist for the conversion of irinotecan to SN38 and SN38 to SN38-glucuronide, the link from irinotecan to APC has a missing rate parameter. This absence renders the APC compartment unreachable from the dose, violating the model's connectivity requirements. Extracted — etirinotecan pegol: CL 0.237 L/h, V1 5.05 L, V2 1.8 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has etirinotecan_pegol, the second reading etirinotecan pegol; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

## Citation
Sy SKB et al., Integrated population pharmacokinetics…, Cancer chemotherapy and pha… (2018)
  ·  DOI: [10.1007/s00280-018-3562-3](https://doi.org/10.1007/s00280-018-3562-3)

<div class="pk-model-meta" hidden drug="etirinotecan pegol" model-id="EtirinotecanPegol_Sy2018_reference" status="rejected" stale="false" population="cancer patients with solid tumors" measured-compound="etirinotecan_pegol" parameterization="mechanistic" topology="general_linear"></div>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 3 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 0.237 | L/h | 6.583333333333333e-08 | L/h | not captured | exact (1.0) | Sy_2018:other_prose | — | not captured |
| V1 (L) | `Q63` · V1 | 5.05 | L | 0.00505 | L | not captured | exact (1.0) | Sy_2018:other_prose | — | not captured |
| V2∗=V2/F12 (L) | `Q64` · V2 | 1.8 | L | 0.0018000000000000002 | L | not captured | boundary (0.8) | Sy_2018:other_prose | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'Correlations' routed out of structural estimates ('Interindividual variability, variance ± SE (CV%)')
- column 'parameter' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'EP' — extend the ontology if this is a real PK parameter (source ['Tab4:row2:col2'])
- dropped unlinked row (NIL): 'Irinotecan' — extend the ontology if this is a real PK parameter (source ['Tab4:row12:col1', 'Tab4:row12:col2'])
- dropped unlinked row (NIL): 'SN38' — extend the ontology if this is a real PK parameter (source ['Tab4:row18:col1', 'Tab4:row18:col2'])
- dropped unlinked row (NIL): 'SN38G' — extend the ontology if this is a real PK parameter (source ['Tab4:row26:col1', 'Tab4:row26:col2'])
- dropped unlinked row (NIL): 'APC' — extend the ontology if this is a real PK parameter (source ['Tab4:row31:col2'])
- table mostly unlinked (5/5 table-cell rows NIL) — likely the wrong table was located, not 0 genuinely-missing ontology parameter(s); route_to_review instead of building a model from the residual linked cell(s)
- salvaged Q22 ('CL (L/h)'=0.237) from results prose — parameter table was unreadable
- salvaged Q63 ('V1 (L)'=5.05) from results prose — parameter table was unreadable
- salvaged Q64 ('V2∗=V2/F12 (L)'=1.8) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=etirinotecan_pegol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — 4 metabolites — the templates hold two
- model equation 'θi = θpop∏jcovi,jcovmedian,jkcov,j·exp(ηθ), whereas categorical covariates' not bound — neither LHS nor base term 'θpop' linked to an ontology parameter
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 6/6 row label(s) assigned, 0 linked by role; re-tagged parent→irinotecan ×2, parent→SN38 ×2, parent→SN38-glucuronide ×2, parent→APC ×1
- molar mass: none found for 'etirinotecan_pegol' — its concentrations stay mass-only
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell Tab4:row2:col3 = '0.07654 ± 0.014 (27%)'
- unparsed cell Tab4:row12:col3 = '0.354 ± 0.062 (59%)'
- unparsed cell Tab4:row18:col3 = '0.14 ± 0.028 (37%)'
- unparsed cell Tab4:row26:col3 = '0.415 ± 0.081 (64%)'
- unparsed cell Tab4:row31:col1 = '(Firinotecan→SN38)'
- unparsed cell Tab4:row31:col3 = '0.0528 ± 0.012 (23%)'
- unparsed cell Tab4:row36:col1 = 'Corr (CL, V1)'
- LLM selected parameter table(s) 4
- captured model equation θi = θpop∏jcovi,jcovmedian,jkcov,j·exp(ηθ), whereas categorical covariates

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.111 (1/9 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['etirinotecan_pegol', 'irinotecan', 'metabolism'], ['irinotecan', 'sn38', 'metabolism'], ['sn38', 'sn38-glucuronide', 'metabolism'], ['irinotecan', 'apc', 'metabolism']] | [['etirinotecan pegol', 'irinotecan', 'metabolism'], ['irinotecan', 'sn38', 'metabolism'], ['irinotecan', 'apc', 'metabolism'], ['sn38', 'sn38-glucuronide', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[apc]` | not captured | 0.631 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl]` | 0.237 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ep]` | not captured | 0.237 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1]` | 5.05 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2=v2/f12]` | 1.8 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | etirinotecan_pegol | etirinotecan pegol | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | etirinotecan_pegol | etirinotecan pegol | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.237 | not captured | not captured | ['Sy_2018:other_prose'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['k2e', 'k3e', 'none'] | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.237 L/h | not captured | not captured | ['Sy_2018:other_prose'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 5.05 L | not captured | not captured | ['Sy_2018:other_prose'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 1.8 L | not captured | not captured | ['Sy_2018:other_prose'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_etirinotecan_pegol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Sy_2018` / `Sy_2018::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 17:57 UTC</sub>
