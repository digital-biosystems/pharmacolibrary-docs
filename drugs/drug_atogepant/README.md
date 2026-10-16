<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02C&quot;,&quot;href&quot;:&quot;atc/N02C.md&quot;},{&quot;label&quot;:&quot;atogepant&quot;}]"></div>

# atogepant

- **generic name:** atogepant
- **ATC codes:** `N02CD07`
- **DrugBank:** [DB16098](https://go.drugbank.com/drugs/DB16098) · **PubChem:** not captured
- **molar mass:** 603.525 g/mol (C29H23F6N5O3) — DrugBank
- **groups:** approved, investigational

## About

Atogepant is a CGRP antagonist used to treat migraine. It is an approved medicine, authorised in the European Union for migraine disorders.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q76797798](https://www.wikidata.org/wiki/Q76797798) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| atogepant | parent | 603.525 | C29H23F6N5O3 | DrugBank | — | Schlachter_2026 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 03:59 | 2:58 | 0/0/2 | 0/0/1 | 0/0/0 | 154,855/13,623 | einfracz / qwen3.8-27b | 5 | 0/5 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q95 — no SI value to build from</sub><br><sub>blocking: C2_reference failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Schlachter_2026_phase_1_model_estimate](drugs/drug_atogepant/Atogepant_Schlachter2026_phase_1_model_estimate.md) | — | 2-compartment (no model) | 8 (+1 cov.) | Schlachter L et al., Population Pharmacokinetics of Atogepan…, Clinical pharmacokinetics (2026) | [10.1007/s40262-025-01566-5](https://doi.org/10.1007/s40262-025-01566-5) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q95 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Schlachter_2026_phase_2_modela_estimate](drugs/drug_atogepant/Atogepant_Schlachter2026_phase_2_modela_estimate.md) | — | 2-compartment (no model) | 9 (+1 cov.) | Schlachter L et al., Population Pharmacokinetics of Atogepan…, Clinical pharmacokinetics (2026) | [10.1007/s40262-025-01566-5](https://doi.org/10.1007/s40262-025-01566-5) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Schlachter_2026_2_MMD](drugs/drug_atogepant/pd_Schlachter_2026_2_MMD.md) | monthly migraine days ← atogepant · direct Emax (saturable) effect | — | Schlachter L et al., Exposure-Response Modeling of Monthly M…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70154](https://doi.org/10.1002/psp4.70154) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=atogepant).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| metabolism | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `CYP3A4` substrate, `SLC22A1` inhibitor, `SLCO1B1` inhibitor/substrate, `SLCO1B3` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `SLC22A6` substrate, `SLC47A1` inhibitor | DrugBank actor |
| excretion | liver | `SLC47A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: CALCRL (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 15 matched, 15 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Boinpally_2023.pdf` | Boinpally R et al., Effects of CYP3A4 inhibition/induction…, Pain management (2023) | pgx | 7 | [10.2217/pmt-2023-0056](https://doi.org/10.2217/pmt-2023-0056) | [37650778](https://www.ncbi.nlm.nih.gov/pubmed/37650778) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Boinpally_2024.pdf` | Boinpally R et al., Pharmacokinetics and Safety of Atogepan…, Clinical pharmacology in dr… (2024) | pgx | 7 | [10.1002/cpdd.1407](https://doi.org/10.1002/cpdd.1407) | [38702918](https://www.ncbi.nlm.nih.gov/pubmed/38702918) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Mehta_2024.pdf` | Mehta P et al., Concomitant use of calcitonin gene-rela…, Journal of oncology pharmac… (2024) | pgx | 7 | [10.1177/10781552241265884](https://doi.org/10.1177/10781552241265884) | [39052976](https://www.ncbi.nlm.nih.gov/pubmed/39052976) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-15T03:56:25.776210+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Boinpally_2023 | relevant | 4 | 2 | This is a PK interaction study for atogepant that reports relative changes in exposure (Cmax, Tmax, AUC) but does not provide absolute disposition parameter estimates (CL, V) or population model parameters. |
| PGx | Boinpally_2023_2 | not_relevant | 2 | 2 | The paper reports drug-drug interactions (DDI) involving CYP3A4/OATP inhibitors/inducers in healthy adults, not pharmacogenomic effects of genetic variants on PK/PD. |
| PGx | Boinpally_2024 | not_relevant | 0 | 0 | The paper is a drug-drug interaction study with quinidine, not a pharmacogenomic study. |
| popPK | Boinpally_2026 | relevant | 4 | 4 | The study reports qualitative PK observations (Vd, food effect percentages) and CNS penetration ratios for atogepant in humans, but lacks primary quantitative population-PK model parameters like CL, ka, or half-life derived from a compartmental analysis. |
| PD | Boinpally_2026 | not_relevant | 2 | 1 | The paper reports PK parameters (CSF/plasma ratios) and cites a preclinical EC50 value, but does not report any clinical exposure-response or dose-response analysis with numeric PD parameters for atogepant. |
| popPK | Iannone_2025 | irrelevant | 0 | 0 | The study evaluates the clinical effects of atogepant on sleep quality and adverse events, containing no pharmacokinetic data or disposition parameters. |
| popPK | Iannone_2026 | irrelevant | 0 | 0 | The paper is a clinical effectiveness and tolerability study (chronopharmacology of administration timing) and reports no pharmacokinetic parameters (CL, V, Ka, etc.). |
| PGx | Mehta_2024 | not_relevant | 0 | 0 | The paper describes a drug-drug interaction case series without analyzing any genetic variants, genotypes, or pharmacogenomic effects. |
| popPK | Schlachter_2026_2 | irrelevant | 1 | 0 | The study is an exposure-response (pharmacodynamic) analysis modeling monthly migraine days, not a pharmacokinetic study, and it uses predicted exposures from a separate PK model without reporting atogepant's PK disposition parameters (CL, V, etc.). |
| PGx | Takizawa_2023 | not_relevant | 0 | 0 | The paper is a narrative review on drug-drug interactions between atogepant and Paxlovid, not pharmacogenomic effects of gene variants on PK/PD. |
| PGx | Yu_2022 | not_relevant | 0 | 0 | The paper discusses pharmacokinetic drug-drug interactions involving CYP3A, not pharmacogenomic effects of gene variants on atogepant. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 03:56 UTC</sub>
