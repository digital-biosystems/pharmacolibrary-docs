<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;dezocine&quot;}]"></div>

# dezocine

- **generic name:** dezocine
- **ATC codes:** `N02AX03`
- **DrugBank:** [DB01209](https://go.drugbank.com/drugs/DB01209) · **PubChem:** [CID 3033053](https://pubchem.ncbi.nlm.nih.gov/compound/3033053)
- **molar mass:** 245.3599 g/mol (C16H23NO) — DrugBank
- **groups:** approved, investigational

## About

Dezocine is an opioid painkiller used to treat pain. It is an approved opioid analgesic, though it is not authorised in the European Union and its use appears limited to certain countries.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1109018](https://www.wikidata.org/wiki/Q1109018) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| dezocine | parent | 245.36 | C16H23NO | DrugBank | [3033053](https://pubchem.ncbi.nlm.nih.gov/compound/3033053) | Sisenwine_1982 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 05:23 | 2:31 | 0/1/1 | 1/0/0 | 0/0/0 | 20,426/33,562 | einfracz / qwen3.8-27b | 9 | 0/0 | 9/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (monkey), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">monkey</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Sisenwine_1982_reference](drugs/drug_dezocine/Dezocine_Sisenwine1982_reference.md) | — | 1-compartment (no model) | 2 | Sisenwine SF et al., Pharmacokinetics of parenteral dezocine…, Drug metabolism and disposi… (1982) | — |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Wilson_1995_reference](drugs/drug_dezocine/Dezocine_Wilson1995_reference.md) | — | 1-compartment (no model) | 0 | Wilson JM et al., Single- and multiple-dose pharmacokinet…, Journal of clinical pharmac… (1995) | [10.1002/j.1552-4604.1995.tb04080.x](https://doi.org/10.1002/j.1552-4604.1995.tb04080.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Gharagozlou_2002_cAMP](drugs/drug_dezocine/pd_Gharagozlou_2002_cAMP.md) | cAMP production ← dezocine · inhibition effect | — | Gharagozlou P et al., Activation profiles of opioid ligands i…, BMC neuroscience (2002) | [10.1186/1471-2202-3-19](https://doi.org/10.1186/1471-2202-3-19) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=dezocine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: OPRK1 (target), OPRM1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Sisenwine_1982.pdf` | Sisenwine SF et al., Pharmacokinetics of parenteral dezocine…, Drug metabolism and disposi… (1982) | popPK | 10 | not captured | [6126336](https://pubmed.ncbi.nlm.nih.gov/6126336) | The evidence contains specific numeric values for clearance and half-life for dezocine in rhesus monkeys and dogs. |
| `Wilson_1995.pdf` | Wilson JM et al., Single- and multiple-dose pharmacokinet…, Journal of clinical pharmac… (1995) | popPK | 10 | [10.1002/j.1552-4604.1995.tb04080.x](https://doi.org/10.1002/j.1552-4604.1995.tb04080.x) | [7650230](https://pubmed.ncbi.nlm.nih.gov/7650230) | The paper explicitly reports quantitative pharmacokinetic parameters (t1/2 alpha, t1/2 beta, Vz beta, CL) and protein binding for dezocine in human patients. |
| `Li_2025.pdf` | Li XC et al., Formulation optimization, in vitro and…, International journal of ph… (2025) | popPK | 6 | [10.1016/j.ijpharm.2025.125916](https://doi.org/10.1016/j.ijpharm.2025.125916) | [40592397](https://pubmed.ncbi.nlm.nih.gov/40592397) | The abstract mentions PK parameters (CL, T1/2) but does not provide any specific numeric values for them in the evidence. |
| `Locniskar_1986.pdf` | Locniskar A et al., Pharmacokinetics of dezocine, a new ana…, European journal of clinica… (1986) | popPK | 5 | [10.1007/BF00614208](https://doi.org/10.1007/BF00614208) | [3709625](https://pubmed.ncbi.nlm.nih.gov/3709625) | The study reports PK parameters for dezocine in humans, but only half-life is given numerically in the abstract; specific values for clearance, volume, or ka are not provided in the evidence. |

<sub>queue written 2026-10-07T05:21:08.727824+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Cook_2000 | not_relevant | 3 | 8 | The paper reports genotype-dependent pharmacodynamic (antinociceptive potency) differences for dezocine in rats, but it is a preclinical animal study, not a human pharmacogenomic effect, and lacks a fitted quantitative effect size for the genetic variant. |
| popPK | Gharagozlou_2002 | irrelevant | 0 | 0 | The paper is an in-vitro receptor pharmacology study measuring cAMP inhibition and binding affinity, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Huang_2026 | irrelevant | 0 | 0 | The paper is a mechanistic study on cancer-induced bone pain and tumor growth, reporting no pharmacokinetic parameters (CL, V, t1/2) for dezocine. |
| popPK | Li_2025 | irrelevant | 6 | 0 | The abstract mentions PK parameters (CL, T1/2) but does not provide any specific numeric values for them in the evidence. |
| popPK | Locniskar_1986 | relevant | 5 | 1 | The study reports PK parameters for dezocine in humans, but only half-life is given numerically in the abstract; specific values for clearance, volume, or ka are not provided in the evidence. |
| popPK | Ye_2026 | irrelevant | 0 | 0 | The study is a pharmacodynamic trial measuring the median effective dose (ED50) of sufentanil, not a pharmacokinetic study reporting disposition parameters (CL, V, etc.) for dezocine. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 05:23 UTC</sub>
