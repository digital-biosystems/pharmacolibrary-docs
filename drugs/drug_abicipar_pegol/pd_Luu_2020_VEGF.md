<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;S01L&quot;,&quot;href&quot;:&quot;atc/S01L.md&quot;},{&quot;label&quot;:&quot;abicipar pegol&quot;,&quot;href&quot;:&quot;drugs/drug_abicipar_pegol/&quot;},{&quot;label&quot;:&quot;Luu_2020 \u00b7 PD VEGF&quot;}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# VEGF — PD  <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span>

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: human + animal.** The paper reports both human and animal data; check which group this record describes before reading it as human pharmacology (read from the LLM relevance screen, p(non-human) 0.50).

## Record summary

**As extracted:** Abicipar drives VEGF: target-mediated drug disposition.

**Model:** No model was generated from this record.

> Abicipar inhibits the response of VEGF concentrations in the vitreous and aqueous humor via a target-mediated drug disposition (TMDD) mechanism, where the drug binds VEGF with an on-rate of 8 x 10^9/M/s and an off-rate derived from a Kd of 4.34 pM. The model includes a VEGF degradation rate (k deg) of ln2/2.46 h and a drug-receptor complex internalization rate (k INT) of 404 day^-1, yielding an in vivo human IC50 of 0.017 nM.
>
> <sub>Source-based summary by qwen3.8-27b from the paper's text; not human-verified</sub>

- **paper:** `Luu_2020`
- **model family:** `tmdd`
- **driver:** `not_resolved`
- **tier:** descriptive
- **effect:** inhibition/unknown

## Citation
Luu KT et al., A Mechanistic and Translational Pharmac…, The Journal of pharmacology… (2020)
  ·  DOI: [10.1124/jpet.119.263178](https://doi.org/10.1124/jpet.119.263178)

## Parameters
| role | label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|---|
| PD (effect) | k deg | `Q328` · not captured | ln2/2.46 h | not captured | not captured | llm (not captured) | Luu_2020:pdv3 |
| PD (effect) | k on | `Q329` · not captured | 8 x 10^9/M/s | not captured | not captured | llm (not captured) | Luu_2020:pdv3 |
| PD (effect) | k off | `Q330` · not captured | Calculated from k d (4.34 pM) as k off = k d x k on | not captured | not captured | llm (not captured) | Luu_2020:pdv3 |
| PD (effect) | VEGF_V | `Q324` · not captured | 5.9 pg/ml (1.47 x 10^-7 µM) | not captured | not captured | llm (not captured) | Luu_2020:pdv3 |
| PD (effect) | VEGF_AH | `Q324` · not captured | 57.4 pg/ml (1.43 x 10^-6 µM) | not captured | not captured | llm (not captured) | Luu_2020:pdv3 |
| PD (effect) | k INT | `Q334` · not captured | 404 | day^-1 | not captured | llm (not captured) | Luu_2020:pdv3 |
| PD (effect) | IC 50 | `Q322` · not captured | 0.017 | nM | not captured | review_gapfill (not captured) | Luu_2020:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>← back to [abicipar pegol](drugs/drug_abicipar_pegol/)</sub>
