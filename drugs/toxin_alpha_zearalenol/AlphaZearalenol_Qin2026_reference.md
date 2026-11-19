<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Fungal toxins&quot;,&quot;href&quot;:&quot;toxins/FUNG.md&quot;},{&quot;label&quot;:&quot;alpha-Zearalenol&quot;,&quot;href&quot;:&quot;drugs/toxin_alpha_zearalenol/&quot;},{&quot;label&quot;:&quot;Qin_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;AlphaZearalenol_Qin2026_zol&quot;,&quot;label&quot;:&quot;Qin_2026_zol&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_alpha_zearalenol/AlphaZearalenol_Qin2026_zol.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# alpha-Zearalenol — `AlphaZearalenol_Qin2026_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">sheep</span>

> C9 clearance/volume outside physiological window (implausible magnitude — unit/scale extraction error).

<div class="pk-model-meta" hidden drug="alpha-Zearalenol" model-id="AlphaZearalenol_Qin2026_reference" status="rejected" stale="false" population="male sheep" measured-compound="alpha-Zearalenol" parameterization="apparent" topology="1C"></div>

## Citation
Qin J, Zhang Q, Ren N, Su Z, Zheng Z, Yin T et al. Toxicokinetics, Biotransformation, Excretion, and Tissue Residue of Zearalenone-14-Glucoside in Male Sheep. Toxins 18(9) (2026).
  ·  DOI: [10.3390/toxins18090364](https://doi.org/10.3390/toxins18090364)

## Population and dosing

**Population:** male sheep · condition healthy · age group adult · n = 5.

**Dosing:** 2 mg·kg−1 BW, oral, single.

**Dosed compound ≠ measured compound:** dosed zearalenone-14-glucoside (Z14G), measured alpha-Zearalenol.

> **Species: sheep.** This record comes from an animal study (sheep), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| elimination half-life of ZEN | t1/2z | 7.44 | h |
| T1/2 of β-ZOL | t1/2β | 2.79 | h |
| The clearance of Z14G | CL | 412.12 | L·kg−1·h−1 |
| apparent volumes of distribution (Vz/F) of Z14G | V/F | 1037.13 | L·kg−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.176). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">sheep</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C9 clearance/volume outside physiological window (implausible magnitude — unit/scale extraction error).**

Extracted — alpha zearalenol: t1/2z 7.44 h, t1/2β 2.79 h, CL 412 L·kg−1·h−1, V/F 1.04e+03 L·kg−1.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which molecule was measured: this record has alpha-Zearalenol, the second reading Zearalenone-14-glucoside (Z14G); it also differs on 13 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| elimination half-life of ZEN | `Q57` · t1/2z | 7.44 | h | 2.678e+04 | s | h | toxin_unit_relink (0.85) | Qin_2026:other_prose |
| T1/2 of β-ZOL | `Q60` · t1/2β | 2.79 | h | 1.004e+04 | s | h | half_life_rule (0.95) | Qin_2026:discussion_prose |
| The clearance of Z14G | `Q22` · CL | 412.12 | L·kg−1·h−1 | 0.008013 | m3/s | L/h | boundary (0.8) | Qin_2026:discussion_prose |
| apparent volumes of distribution (Vz/F) of Z14G | `Q76` · V/F | 1037.13 | L·kg−1 | 72.6 | m3 | L | boundary (0.8) | Qin_2026:discussion_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped value-less row: 'Serum samples were determined for β-ZOL'
- salvaged Q57 ('elimination half-life of ZEN'=7.44) from results prose — parameter table was unreadable
- salvaged Q60 ('T1/2 of β-ZOL'=2.79) from results prose — parameter table was unreadable
- salvaged Q22 ('The clearance of Z14G'=412.12) from results prose — parameter table was unreadable
- salvaged Q76 ('apparent volumes of distribution (Vz/F) of Z14G'=1037.13) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=alpha-Zearalenol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 3 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- base model from table(s) without population columns (Qin_2026:discussion_prose, Qin_2026:other_prose, toxins-18-00364-t002:footnote); populations α-zol kept as separate records
- row roles (LLM): model_class=noncompartmental; 0/16 row label(s) assigned, 0 linked by role
- molar mass: LLM call failed (JSONDecodeError) — metabolites left in mass units
- molar mass: none found for 'zearalenone-14-glucoside (Z14G)' — its concentrations stay mass-only
- molar mass: none found for 'zearalenone (ZEN)' — its concentrations stay mass-only
- molar mass: none found for 'beta-Zearalenol (β-ZOL)' — its concentrations stay mass-only
- molar mass: none found for 'alpha-Zearalenol' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- table Qin_2026_table_3: conflicting_units
- companion parameter table 3 transcribed (27 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.176 (3/17 fields) | 14 |

<details><summary>14 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[apparent volumes of distribution (vz/f) of z14g]` | 1037.13 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[auc_%extrap]` |  | 12.20 | only_one_extracted |
| `gpt-oss:120b` | `parameters[aucinf]` |  | 3.42 | only_one_extracted |
| `gpt-oss:120b` | `parameters[auclast]` |  | 3.10 | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl_f]` |  | 412.12 | only_one_extracted |
| `gpt-oss:120b` | `parameters[cmax]` |  | 2.15 | only_one_extracted |
| `gpt-oss:120b` | `parameters[elimination half-life of zen]` | 7.44 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[mrtinf]` |  | 2.68 | only_one_extracted |
| `gpt-oss:120b` | `parameters[t1/2 of β-zol]` | 2.79 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[t1/2elim]` |  | 0.94 | only_one_extracted |
| `gpt-oss:120b` | `parameters[the clearance of z14g]` | 412.12 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[tmax]` |  | 0.50 | only_one_extracted |
| `gpt-oss:120b` | `parameters[vz/f]` |  | 1037.13 | only_one_extracted |
| `gpt-oss:120b` | `screen.primary_analyte` | alpha-Zearalenol | Zearalenone-14-glucoside (Z14G) | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | fail | 2.79 | 1.744 | 0.6251 | 0.25 | reported t½β |
| C7_apparent_coherence | pass |  |  |  |  |  |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q22 | fail | clearance within physiological range | 2.88e+04 L/h |  |  | ['Qin_2026:discussion_prose'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 7.26e+04 L |  |  | ['Qin_2026:discussion_prose'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Balpha_zearalenol%5D%20AlphaZearalenol_Qin2026_reference&body=Drug%3A%20alpha_zearalenol%0ARecord%3A%20AlphaZearalenol_Qin2026_reference%0APaper%3A%20Qin_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_alpha_zearalenol/AlphaZearalenol_Qin2026_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 13:48 UTC</sub>
