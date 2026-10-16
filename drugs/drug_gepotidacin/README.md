<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01X&quot;,&quot;href&quot;:&quot;atc/J01X.md&quot;},{&quot;label&quot;:&quot;gepotidacin&quot;}]"></div>

# gepotidacin

- **generic name:** gepotidacin
- **ATC codes:** `J01XX13`
- **DrugBank:** [DB12134](https://go.drugbank.com/drugs/DB12134) · **PubChem:** [CID 25101874](https://pubchem.ncbi.nlm.nih.gov/compound/25101874)
- **molar mass:** 448.527 g/mol (C24H28N6O3) — DrugBank
- **groups:** approved, investigational

## About

Gepotidacin is an antibacterial drug used to treat bacterial infections. It is an approved medicine, though detailed information on where and how widely it is used is not available here.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q19597285](https://www.wikidata.org/wiki/Q19597285) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| gepotidacin | parent | 448.527 | C24H28N6O3 | DrugBank | [25101874](https://pubchem.ncbi.nlm.nih.gov/compound/25101874) | Al_2026, Scangarella-Oman_2023, Singley_2026 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-13 11:53 | 13:12 | 1/3/0 | 0/0/0 | 0/0/0 | 235,679/54,298 | einfracz / qwen3.8-27b | 5 | 0/5 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.167). Primary extraction retained.">cross-check: disputed</span> | [Al_2026_reference](drugs/drug_gepotidacin/Gepotidacin_Al2026_reference.md) | — | 1-compartment (no model) | 4 | Al Jalali V et al., Prostatic tissue distribution of gepoti…, Clinical microbiology and i… (2026) | [10.1016/j.cmi.2026.05.024](https://doi.org/10.1016/j.cmi.2026.05.024) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Nguyen_2022_reference](drugs/drug_gepotidacin/Gepotidacin_Nguyen2022_reference.md) | — | 1-compartment (no model) | 0 | Nguyen D et al., Comparison between physiologically base…, British journal of clinical… (2022) | [10.1111/bcp.14996](https://doi.org/10.1111/bcp.14996) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.714). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Scangarella-Oman_2023_reference](drugs/drug_gepotidacin/Gepotidacin_ScangarellaOman2023_reference.md) | — | 1-compartment (no model) | 2 | Scangarella-Oman NE et al., Dose selection for a phase III study ev…, Sexually transmitted infect… (2023) | [10.1136/sextrans-2022-055518](https://doi.org/10.1136/sextrans-2022-055518) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Singley_2026_reference](drugs/drug_gepotidacin/Gepotidacin_Singley2026_reference.md) | — | 1-compartment (no model) | 1 | Singley CM et al., Pharmacokinetic and pharmacodynamic cha…, Antimicrobial agents and ch… (2026) | [10.1128/aac.01176-25](https://doi.org/10.1128/aac.01176-25) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=gepotidacin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCG2` substrate | DrugBank actor |
| absorption | liver | `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | small intestine | `ABCG2` substrate | DrugBank actor |
| absorption | testis | `ABCG2` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `SLC47A1` inhibitor, `SLC47A2` inhibitor | DrugBank actor |
| excretion | liver | `SLC47A1` inhibitor | DrugBank actor |
| — | blood | `ACHE` inhibitor | DrugBank actor |
| — | neuromuscular junction | `ACHE` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: TOP2A (inhibitor), TOP2B (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 6  ·  **relevant:** 2
- **records:** 4  ·  extracted 1  ·  needs_review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Al_2026.pdf` | Al Jalali V et al., Prostatic tissue distribution of gepoti…, Clinical microbiology and i… (2026) | popPK | 10 | [10.1016/j.cmi.2026.05.024](https://doi.org/10.1016/j.cmi.2026.05.024) | [42242629](https://pubmed.ncbi.nlm.nih.gov/42242629) | The paper reports a population PK model for gepotidacin in humans with specific numeric values for clearance (65.0 L/h) and volume of distribution (1310 L). |
| `Bulik_2017.pdf` | Bulik CC et al., Pharmacokinetic-Pharmacodynamic Evaluat…, Antimicrobial agents and ch… (2017) | popPK | 8 | [10.1128/AAC.00115-16](https://doi.org/10.1128/AAC.00115-16) | [27872075](https://pubmed.ncbi.nlm.nih.gov/27872075) | The study reports a population-pharmacokinetic model (four-compartment) for gepotidacin in mice, but specific numeric parameter values (CL, V, etc.) are not provided in the text. |

<sub>queue written 2026-10-13T11:48:43.194423+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bulik_2017 | relevant | 8 | 2 | The study reports a population-pharmacokinetic model (four-compartment) for gepotidacin in mice, but specific numeric parameter values (CL, V, etc.) are not provided in the text. |
| popPK | Khalid_2023 | irrelevant | 2 | 1 | This is a review article summarizing PK/PD modeling studies for gepotidacin and other drugs without providing original quantitative parameter values or detailed model results in the provided text. |
| popPK | Kline_2026 | irrelevant | 0 | 0 | The paper is a mathematical modeling study on drug deployment strategies and resistance prevalence, not a pharmacokinetic study. |
| popPK | Scangarella-Oman_2023 | relevant | 6 | 2 | This is a narrative review describing the development of a population PK model for gepotidacin, but specific quantitative parameter estimates (CL, V, Q, ka) are not listed in the provided text, only derived exposure metrics and targets. |
| popPK | Singley_2026 | irrelevant | 4 | 2 | The study reports non-compartmental exposure metrics (Cmax, AUC) and PK/PD targets (fAUC/MIC) in mice, but the specific quantitative compartmental disposition parameters (CL, V, Q, ka) are deferred to supplemental material not provided here. |
| popPK | VanScoy_2021 | irrelevant | 1 | 0 | The study is an in vitro PK-PD simulation using modeled human exposure profiles to determine AUC/MIC ratios, rather than an experimental pharmacokinetic study reporting measured disposition parameters (CL, V, ka). |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-13 11:48 UTC</sub>
