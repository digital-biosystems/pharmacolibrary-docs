<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M09A&quot;,&quot;href&quot;:&quot;atc/M09A.md&quot;},{&quot;label&quot;:&quot;nusinersen&quot;}]"></div>

# nusinersen

- **generic name:** nusinersen
- **ATC codes:** `M09AX07`
- **DrugBank:** [DB13161](https://go.drugbank.com/drugs/DB13161) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Nusinersen is an antisense oligonucleotide medicine used to treat spinal muscular atrophy. It is authorised in the European Union and is an approved drug, used for this rare muscle-wasting condition.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q25105466](https://www.wikidata.org/wiki/Q25105466) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:38 | 2:12 | 0/3/0 | 0/0/0 | 0/0/0 | 119,953/37,490 | einfracz / qwen3.8-27b | 7 | 1/6 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="Animal study (monkey), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">monkey</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Biliouris_2018_reference](drugs/drug_nusinersen/Nusinersen_Biliouris2018_reference.md) | — | 1-compartment (no model) | 0 | Biliouris K et al., A Semi-Mechanistic Population Pharmacok…, CPT: pharmacometrics & syst… (2018) | [10.1002/psp4.12323](https://doi.org/10.1002/psp4.12323) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.8). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Luu_2017_reference](drugs/drug_nusinersen/Nusinersen_Luu2017_reference.md) | — | 1-compartment (no model) | 0 | Luu KT et al., Population Pharmacokinetics of Nusiners…, Journal of clinical pharmac… (2017) | [10.1002/jcph.884](https://doi.org/10.1002/jcph.884) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [MacCannell_2022_reference](drugs/drug_nusinersen/Nusinersen_MacCannell2022_reference.md) | — | 1-compartment (no model) | 1 | MacCannell D et al., Restoration of Nusinersen Levels Follow…, CNS drugs (2022) | [10.1007/s40263-022-00899-0](https://doi.org/10.1007/s40263-022-00899-0) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=nusinersen).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | brain | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: SMN1 (antisense oligonucleotide).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

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

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 03:38 UTC</sub>
