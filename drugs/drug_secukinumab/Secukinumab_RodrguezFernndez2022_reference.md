<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;secukinumab&quot;,&quot;href&quot;:&quot;drugs/drug_secukinumab/&quot;},{&quot;label&quot;:&quot;Rodr\u00edguez-Fern\u00e1ndez_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;pd_Rodriguez_Fernandez_2024_PASI&quot;,&quot;label&quot;:&quot;Rodriguez-Fernandez_2024 \u00b7 PASI&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_secukinumab/pd_Rodriguez_Fernandez_2024_PASI.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# secukinumab — `Secukinumab_RodrguezFernndez2022_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**C8 unreachable/orphan compartment or unlinked metabolite.**

Extracted — secukinumab: CL/F 1.38 L/d, V/F 24.9 L, kabs 0.908 day−1, CL 0.19 L/day, V1 3.61 L, V2 2.87 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of CL: this record has 0.19, the second reading 90; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

## Citation
Rodríguez-Fernández K et al., Impact of Pharmacokinetic and Pharmacod…, Pharmaceutics (2022)
  ·  DOI: [10.3390/pharmaceutics14030654](https://doi.org/10.3390/pharmaceutics14030654)

<div class="pk-model-meta" hidden drug="secukinumab" model-id="Secukinumab_RodrguezFernndez2022_reference" status="rejected" stale="false" population="adults with psoriasis" measured-compound="secukinumab" parameterization="apparent" topology="3C"></div>

**Model structure:** 3-compartment; no model was built for this record.  
**Parameters:** 6 extracted.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F | `Q27` · CL/F | 1.38 | L/d | 1.597222222222222e-08 | L/h | not captured | exact (1.0) | Rodríguez-Fernández_2022:other_prose | — | not captured |
| V/F | `Q76` · V/F | 24.9 | L | 0.0249 | L | not captured | exact (1.0) | Rodríguez-Fernández_2022:other_prose | — | not captured |
| ka | `Q49` · kabs | 0.908 | day−1 | 1.0509259259259259e-05 | 1/h | not captured | exact (1.0) | Rodríguez-Fernández_2022:other_prose | — | not captured |
| CL | `Q22` · CL | 0.19 | L/day | 2.1990740740740743e-09 | L/h | not captured | exact (1.0) | Rodríguez-Fernández_2022:other_prose | — | not captured |
| VC | `Q63` · V1 | 3.61 | L | 0.00361 | L | not captured | exact (1.0) | Rodríguez-Fernández_2022:other_prose | — | not captured |
| VP | `Q64` · V2 | 2.87 | L | 0.00287 | L | not captured | exact (1.0) | Rodríguez-Fernández_2022:other_prose | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'Adalimumab [70]' routed out of structural estimates ('PK Parameters / VC IIV, %CV (%RSE)')
- table section iiv: 'Adalimumab [70]' routed out of structural estimates ('PK Parameters / Q IIV % (%RSE)')
- table section iiv: 'Golimumab [71]' routed out of structural estimates ('PK Parameters / VC IIV, %CV (%RSE)')
- table section iiv: 'Golimumab [71]' routed out of structural estimates ('PK Parameters / Q IIV % (%RSE)')
- table section iiv: 'Ustekinumab [74,75]' routed out of structural estimates ('PK Parameters / CL IIV, %CV (%RSE)')
- table section iiv: 'Ustekinumab [74,75]' routed out of structural estimates ('PK Parameters / VC IIV, %CV (%RSE)')
- table section iiv: 'Ustekinumab [74,75]' routed out of structural estimates ('PK Parameters / Q IIV % (%RSE)')
- table section iiv: 'Ustekinumab [77]' routed out of structural estimates ('PK Parameters / VC IIV, %CV (%RSE)')
- table section iiv: 'Ustekinumab [77]' routed out of structural estimates ('PK Parameters / Q IIV % (%RSE)')
- table section iiv: 'Secukinumab [81]' routed out of structural estimates ('PK Parameters / CL IIV, %CV (%RSE)')
- table section iiv: 'Secukinumab [81]' routed out of structural estimates ('PK Parameters / VC IIV, %CV (%RSE)')
- table section iiv: 'Secukinumab [81]' routed out of structural estimates ('PK Parameters / Q IIV % (%RSE)')
- table section iiv: 'Brodalumab [92]' routed out of structural estimates ('PK Parameters / CL IIV, %CV (%RSE)')
- table section iiv: 'Brodalumab [92]' routed out of structural estimates ('PK Parameters / Q IIV % (%RSE)')
- table section iiv: 'Brodalumab [92]' routed out of structural estimates ('PK Parameters / Vmax, IIV, %CV (%RSE)')
- table section iiv: 'Brodalumab [92]' routed out of structural estimates ('PK Parameters / VC IIV, %CV (%RSE)')
- table section iiv: 'Brodalumab [92]' routed out of structural estimates ('PK Parameters / VP IIV, %CV (%RSE)')
- table section iiv: 'Brodalumab [91]' routed out of structural estimates ('PK Parameters / CL IIV, %CV (%RSE)')
- table section iiv: 'Brodalumab [91]' routed out of structural estimates ('PK Parameters / VC IIV, %CV (%RSE)')
- table section iiv: 'Brodalumab [91]' routed out of structural estimates ('PK Parameters / Q IIV % (%RSE)')
- table section iiv: 'Brodalumab [91]' routed out of structural estimates ('PK Parameters / VP IIV, %CV (%RSE)')
- table section iiv: 'Brodalumab [91]' routed out of structural estimates ('PK Parameters / Vmax, IIV, %CV (%RSE)')
- table section iiv: 'Guselkumab [94]' routed out of structural estimates ('PK Parameters / VC IIV, %CV (%RSE)')
- table section iiv: 'Guselkumab [94]' routed out of structural estimates ('PK Parameters / Q IIV % (%RSE)')
- table section iiv: 'Guselkumab [97]' routed out of structural estimates ('PK Parameters / CL IIV, %CV (%RSE)')
- table section iiv: 'Guselkumab [97]' routed out of structural estimates ('PK Parameters / VC IIV, %CV (%RSE)')
- table section iiv: 'Guselkumab [97]' routed out of structural estimates ('PK Parameters / Q IIV % (%RSE)')
- table section iiv: 'Tildrakizumab [99]' routed out of structural estimates ('PK Parameters / CL IIV, %CV (%RSE)')
- table section iiv: 'Tildrakizumab [99]' routed out of structural estimates ('PK Parameters / VC IIV, %CV (%RSE)')
- table section iiv: 'Tildrakizumab [99]' routed out of structural estimates ('PK Parameters / Q IIV % (%RSE)')
- table section iiv: 'Risankizumab [105]' routed out of structural estimates ('PK Parameters / CL IIV, %CV (%RSE)')
- table section iiv: 'Risankizumab [105]' routed out of structural estimates ('PK Parameters / VC IIV, %CV (%RSE)')
- table section iiv: 'Risankizumab [105]' routed out of structural estimates ('PK Parameters / Q IIV % (%RSE)')
- table section iiv: 'Risankizumab [109]' routed out of structural estimates ('PK Parameters / CL IIV, %CV (%RSE)')
- table section iiv: 'Risankizumab [109]' routed out of structural estimates ('PK Parameters / VC IIV, %CV (%RSE)')
- table section iiv: 'Risankizumab [109]' routed out of structural estimates ('PK Parameters / Q IIV % (%RSE)')
- column 'pk parameters' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- table representations disagree for 'Brodalumab [92]'; source reconciliation required
- table representations disagree for 'Brodalumab [91]'; source reconciliation required
- dropped unlinked row (NIL): 'Brodalumab [92]' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-14-00654-t003:row12:col13', 'pharmaceutics-14-00654-t003:row12:col14', 'pharmaceutics-14-00654-t003:row13:col13', 'pharmaceutics-14-00654-t003:row13:col14'])
- dropped unlinked row (NIL): 'Brodalumab [91]' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-14-00654-t003:row16:col13'])
- salvaged Q27 ('CL/F'=1.38) from results prose — parameter table was unreadable
- salvaged Q76 ('V/F'=24.9) from results prose — parameter table was unreadable
- salvaged Q49 ('ka'=0.908) from results prose — parameter table was unreadable
- salvaged Q22 ('CL'=0.19) from results prose — parameter table was unreadable
- salvaged Q63 ('VC'=3.61) from results prose — parameter table was unreadable
- salvaged Q64 ('VP'=2.87) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=secukinumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 3C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- molar mass: none found for 'secukinumab' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table pharmaceutics-14-00654-t003: ambiguous_uncertainty_binding
- table pharmaceutics-14-00654-t003: ragged_grid
- table pharmaceutics-14-00654-t003: unparsed_numeric_cell
- table pharmaceutics-14-00654-t003: representations disagree; selected evidence retained, not merged
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.667 (6/9 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `values[Q22]` | 0.19 | 90 | mismatch |
| `gpt-oss-120b` | `values[Q312]` | not captured | 37.6 | only_one_extracted |
| `gpt-oss-120b` | `values[Q57]` | not captured | 11 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.00792 L/h | not captured | not captured | ['Rodríguez-Fernández_2022:other_prose'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.0575 L/h | not captured | not captured | ['Rodríguez-Fernández_2022:other_prose'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.61 L | not captured | not captured | ['Rodríguez-Fernández_2022:other_prose'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.87 L | not captured | not captured | ['Rodríguez-Fernández_2022:other_prose'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 24.9 L | not captured | not captured | ['Rodríguez-Fernández_2022:other_prose'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_secukinumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Rodríguez-Fernández_2022` / `Rodríguez-Fernández_2022::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-15 00:20 UTC</sub>
