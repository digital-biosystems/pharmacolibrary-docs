<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M09A&quot;,&quot;href&quot;:&quot;atc/M09A.md&quot;},{&quot;label&quot;:&quot;nusinersen&quot;}]"></div>

# nusinersen

- **generic name:** nusinersen
- **ATC codes:** `M09AX07`
- **DrugBank:** [DB13161](https://go.drugbank.com/drugs/DB13161) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Nusinersen is an antisense oligonucleotide medicine used to treat spinal muscular atrophy. It is authorised in the European Union and is an approved drug, used for this rare muscle-wasting condition.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q25105466](https://www.wikidata.org/wiki/Q25105466) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="monkey" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (monkey), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">monkey</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Biliouris_2018_reference](drugs/drug_nusinersen/Nusinersen_Biliouris2018_reference.md) | — | 1-compartment (no model) | 0 | Biliouris K et al., A Semi-Mechanistic Population Pharmacok…, CPT: pharmacometrics & syst… (2018) | [10.1002/psp4.12323](https://doi.org/10.1002/psp4.12323) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Luu_2017_reference](drugs/drug_nusinersen/Nusinersen_Luu2017_reference.md) | — | 1-compartment (no model) | 0 | Luu KT et al., Population Pharmacokinetics of Nusiners…, Journal of clinical pharmac… (2017) | [10.1002/jcph.884](https://doi.org/10.1002/jcph.884) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub> | [MacCannell_2022_reference](drugs/drug_nusinersen/Nusinersen_MacCannell2022_reference.md) | — | 1-compartment (no model) | 1 | MacCannell D et al., Restoration of Nusinersen Levels Follow…, CNS drugs (2022) | [10.1007/s40263-022-00899-0](https://doi.org/10.1007/s40263-022-00899-0) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:38 | 2:12 | 0/3/0 | 0/0/0 | 0/0/0 | 119,953/37,490 | einfracz / qwen3.8-27b | 7 | 1/6 | 7/0 | 0 |

## Coverage

- **PubMed hits:** 17 matched, 12 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Luu_2017.pdf` | Luu KT et al., Population Pharmacokinetics of Nusiners…, Journal of clinical pharmac… (2017) | popPK | 10 | [10.1002/jcph.884](https://doi.org/10.1002/jcph.884) | [28369979](https://pubmed.ncbi.nlm.nih.gov/28369979) | The paper reports a population PK model for nusinersen with explicit numeric values for clearance, volume of distribution, and intercompartmental clearance in the abstract. |
| `MacCannell_2021.pdf` | MacCannell D et al., Population pharmacokinetics-based recom…, Neuromuscular disorders : N… (2021) | popPK | 9 | [10.1016/j.nmd.2021.02.014](https://doi.org/10.1016/j.nmd.2021.02.014) | [33781694](https://pubmed.ncbi.nlm.nih.gov/33781694) | The paper describes a population pharmacokinetic model for nusinersen and discusses resulting exposures, but the specific numeric parameter values (CL, V, etc.) are not provided in the text. |
| `Desai_2025.pdf` | Desai DA et al., Multispecies minimal physiologically ba…, Drug metabolism and disposi… (2025) | popPK | 5 | [10.1016/j.dmd.2025.100167](https://doi.org/10.1016/j.dmd.2025.100167) | [41100926](https://pubmed.ncbi.nlm.nih.gov/41100926) | The paper describes a PBPK model for nusinersen in humans and animals, and the abstract provides specific renal clearance values for multiple species (including 405 mL/h for humans), but does not explicitly list other parameters like Vd or CL/F. |

<sub>queue written 2026-10-07T03:37:13.023984+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Crawford_2025 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial for apitegromab where nusinersen is only a background therapy, with no PK parameters reported. |
| popPK | Desai_2025 | relevant | 5 | 3 | The paper describes a PBPK model for nusinersen in humans and animals, and the abstract provides specific renal clearance values for multiple species (including 405 mL/h for humans), but does not explicitly list other parameters like Vd or CL/F. |
| popPK | Duong_2021 | irrelevant | 0 | 0 | The study reports clinical efficacy and safety outcomes (motor and respiratory function) in SMA patients but does not report any pharmacokinetic or pharmacodynamic parameters (e.g., clearance, volume, half-life) for nusinersen. |
| popPK | Finkel_2022 | relevant | 5 | 2 | The paper applies a population PK model to nusinersen and reports derived PK/PD parameters (CSF steady-state concentrations, fold-changes, half-life description), but the specific compartmental parameter values (CL, V, Q, ka) are not listed in the evidence and are likely in the referenced supplementary material or figures. |
| popPK | MacCannell_2021 | relevant | 9 | 0 | The paper describes a population pharmacokinetic model for nusinersen and discusses resulting exposures, but the specific numeric parameter values (CL, V, etc.) are not provided in the text. |
| popPK | Pane_2026 | irrelevant | 0 | 0 | The paper is a clinical efficacy study for onasemnogene abeparvovec in SMA and does not report pharmacokinetic parameters for nusinersen, which is only mentioned as a prior comparator therapy. |
| popPK | Tisnikar_2026 | irrelevant | 0 | 0 | The study is an in vitro efficacy/mechanistic optimization using cell lines (HEK293, fibroblasts) and reports no pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Vercoelen_2026 | irrelevant | 0 | 0 | The study evaluates lung function and respiratory muscle strength outcomes (FVC, FEV1, MEP) in SMA patients, not pharmacokinetic parameters (CL, V, t1/2) for nusinersen. |
| popPK | Yeo_2020 | irrelevant | 0 | 0 | This is a clinical outcome study for Spinal Muscular Atrophy assessing motor function scales, not a pharmacokinetic study. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 03:38 UTC</sub>
