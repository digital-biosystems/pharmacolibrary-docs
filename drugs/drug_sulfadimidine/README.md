<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01E&quot;,&quot;href&quot;:&quot;atc/J01E.md&quot;},{&quot;label&quot;:&quot;sulfadimidine&quot;}]"></div>

# sulfadimidine

- **generic name:** sulfadimidine
- **ATC codes:** `J01EB03`, `J01EE05`
- **DrugBank:** [DB01582](https://go.drugbank.com/drugs/DB01582) · **PubChem:** not captured
- **groups:** approved, vet_approved, withdrawn

## About

Sulfadimidine is a short-acting sulfonamide antibiotic used to treat bacterial infections. It has been withdrawn from human use in many places but remains approved in veterinary medicine, where it is used to treat infections in animals.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3976823](https://www.wikidata.org/wiki/Q3976823) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:52 | 0:53 | 0/0/0 | 0/0/0 | 0/0/0 | 63,075/2,070 | einfracz / qwen3.8-27b | 10 | 1/2 | 3/0 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=sulfadimidine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| distribution | blood | `ALB` unknown | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 22 matched, 17 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Tansakul_2007_2.pdf` | Tansakul N et al., A sulfadimidine model to evaluate pharm…, Food additives and contamin… (2007) | popPK | 10 | [10.1080/02652030601182870](https://doi.org/10.1080/02652030601182870) | [17487601](https://pubmed.ncbi.nlm.nih.gov/17487601) | The study reports quantitative PK parameters (calculated via a one-compartment model) for sulfadimidine in laying hens, but the specific numeric values for CL, V, or half-life are not present in the provided text or evidence. |

<sub>queue written 2026-10-07T10:51:59.348439+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Faucette_2004 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on CYP2B6 induction where sulfadimidine is used only as a test compound and is not the subject of pharmacokinetic analysis. |
| popPK | Fu_2016 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of sulfamethoxazole and trimethoprim, not sulfadimidine. |
| popPK | Koshi_1983 | irrelevant | 0 | 0 | The provided evidence contains only metadata from the GROBID processing software and no scientific content or pharmacokinetic data for sulfadimidine. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The study is an environmental photochemistry assessment of sulfamethazine degradation, not a pharmacokinetic study, and does not mention sulfadimidine or report any PK parameters. |
| popPK | Maan_2021 | irrelevant | 0 | 0 | The study investigates sulfamethoxazole (a different drug), not sulfadimidine. |
| popPK | Oliveira_2016 | irrelevant | 0 | 0 | The study investigates sulfamethazine (not sulfadimidine) in an in vitro environmental context (anaerobic sludge), not in vivo pharmacokinetics. |
| popPK | Pan_2016 | irrelevant | 0 | 0 | The study evaluates the phytotoxicity of veterinary antibiotics on crop plants and does not investigate the pharmacokinetics or disposition of sulfadimidine in a biological subject. |
| popPK | Shao_1992 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of trimethoprim, sulfadiazine, and sulfamethoxazole, but does not contain any data for the target drug sulfadimidine. |
| popPK | Sheng_2014 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of secoiridoid and flavonoid glycosides from Swertia pseudochinensis, not sulfadimidine. |
| popPK | Tansakul_2007_2 | relevant | 10 | 0 | The study reports quantitative PK parameters (calculated via a one-compartment model) for sulfadimidine in laying hens, but the specific numeric values for CL, V, or half-life are not present in the provided text or evidence. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of trimethoprim-sulfamethoxazole, not sulfadimidine. |
| popPK | Wu_2023 | irrelevant | 0 | 0 | The study focuses on in vitro antimicrobial activity and Monte Carlo simulations for tetracyclines and levofloxacin, with no data or PK parameters for sulfadimidine. |
| popPK | Xiong_2019 | irrelevant | 0 | 0 | The paper studies ecotoxicology and biodegradation in microalgae, not pharmacokinetics in an animal or human model. |
| popPK | Xiong_2019_2 | irrelevant | 0 | 0 | The paper investigates environmental toxicity and biodegradation of sulfamethazine (a different drug, not sulfadimidine) in microalgae, not pharmacokinetics. |
| popPK | Yang_2025 | irrelevant | 0 | 0 | This is an ecotoxicology study on algae (Scenedesmus obliquus) examining toxicity and oxidative stress, not a pharmacokinetic study, and sulfadimidine is not even among the sulfonamides tested. |
| popPK | Zhang_2026 | irrelevant | 0 | 0 | The study evaluates the toxicity and metabolic disruption of sulfamethazine (a different sulfonamide, not sulfadimidine) in green algae, not pharmacokinetic parameters in animals or humans. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
