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

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=sulfadimidine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| distribution | blood | `ALB` unknown | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 22 matched, 17 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

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
