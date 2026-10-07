<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;selumetinib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Selumetinib_Patel2018_reference&quot;,&quot;label&quot;:&quot;Patel_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_selumetinib/Selumetinib_Patel2018_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Selumetinib_Tong2019_reference&quot;,&quot;label&quot;:&quot;Tong_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_selumetinib/Selumetinib_Tong2019_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# selumetinib

- **generic name:** selumetinib
- **ATC codes:** `L01EE04`
- **DrugBank:** [DB11689](https://go.drugbank.com/drugs/DB11689) · **PubChem:** [CID 10127622](https://pubchem.ncbi.nlm.nih.gov/compound/10127622)
- **molar mass:** 457.68 g/mol (C17H15BrClFN4O3) — DrugBank
- **groups:** approved, investigational

## About

Selumetinib is a MEK inhibitor anticancer drug used to treat neurofibromatosis 1 and has been studied for low-grade serous carcinoma. It is authorised in the European Union for neurofibromatosis 1 and is also under investigation for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7448840](https://www.wikidata.org/wiki/Q7448840) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| selumetinib | parent | 457.68 | C17H15BrClFN4O3 | DrugBank | [10127622](https://pubchem.ncbi.nlm.nih.gov/compound/10127622) | Köllő_2026, Patel_2017, Patel_2018, Tong_2019 |
| N-desmethyl-selumetinib (N-desmethyl selumetinib) | metabolite | 443.657 | C16H13BrClFN4O3 | PubChem | [10238358](https://pubchem.ncbi.nlm.nih.gov/compound/10238358) | Patel_2017, Patel_2018, Tong_2019 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 06:54 | 5:29 | 2/2/0 | 0/0/0 | 0/0/0 | 105,185/25,310 | openai / gpt-6-luna | 4 | 1/3 | 3/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Patel_2018_reference](drugs/drug_selumetinib/Selumetinib_Patel2018_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Patel P et al., Population pharmacokinetics of the MEK…, British journal of clinical… (2018) | [10.1111/bcp.13404](https://doi.org/10.1111/bcp.13404) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Tong_2019_reference](drugs/drug_selumetinib/Selumetinib_Tong2019_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Tong X et al., Population Pharmacokinetic and Exposure…, Journal of clinical pharmac… (2019) | [10.1002/jcph.1295](https://doi.org/10.1002/jcph.1295) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Köllő_2026_reference](drugs/drug_selumetinib/Selumetinib_Kll2026_reference.md) | — | 1-compartment (no model) | 0 | Köllő Z et al., A Nonparametric Population Pharmacokine…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70156](https://doi.org/10.1002/psp4.70156) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Patel_2017_reference](drugs/drug_selumetinib/Selumetinib_Patel2017_reference.md) | — | parent + metabolite (no model) | 12 | Patel YT et al., Population Pharmacokinetics of Selumeti…, CPT: pharmacometrics & syst… (2017) | [10.1002/psp4.12175](https://doi.org/10.1002/psp4.12175) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=selumetinib) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| distribution | blood | `ALB` carrier, `ORM1` carrier | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2C19` substrate, `CYP2C8` substrate, `CYP2C9` substrate, `CYP2E1` substrate, `CYP3A4` substrate, `CYP3A5` substrate, `UGT1A1` substrate, `UGT1A3` unknown | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate, `UGT1A1` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: MAP2K1 (inhibitor), MAP2K2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 2  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Patel_2018.pdf` | Patel P et al., Population pharmacokinetics of the MEK…, British journal of clinical… (2018) | popPK | 10 | [10.1111/bcp.13404](https://doi.org/10.1111/bcp.13404) | [28833380](https://pubmed.ncbi.nlm.nih.gov/28833380) | The human population-PK model reports numeric selumetinib clearance and central volume estimates. |
| `Tong_2019.pdf` | Tong X et al., Population Pharmacokinetic and Exposure…, Journal of clinical pharmac… (2019) | popPK | 10 | [10.1002/jcph.1295](https://doi.org/10.1002/jcph.1295) | [30102413](https://pubmed.ncbi.nlm.nih.gov/30102413) | Human population-PK model reports numeric selumetinib clearance and central volume in the evidence. |
| `Zuo_2024.pdf` | Zuo P et al., A Population Pharmacokinetic Assessment…, Clinical pharmacology in dr… (2024) | popPK | 10 | [10.1002/cpdd.1400](https://doi.org/10.1002/cpdd.1400) | [38591154](https://pubmed.ncbi.nlm.nih.gov/38591154) | The human population-PK models are described, but numeric disposition parameter values are not provided. |

<sub>queue written 2026-10-07T06:49:13.778770+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Campagne_2021 | irrelevant | 2 | 1 | This review gives an approximate half-life but no original quantitative disposition or population-PK parameter values. |
| popPK | Schalkwijk_2021 | relevant | 8 | 0 | The evidence suggests a compartmental model for selumetinib’s metabolite, but includes no readable numeric parameter values. |
| popPK | Zhou_2016 | irrelevant | 0 | 0 | This is an exposure–QTc analysis and reports no quantitative selumetinib disposition parameters. |
| popPK | Zuo_2024 | relevant | 10 | 2 | The human population-PK models are described, but numeric disposition parameter values are not provided. |
| popPK | unknown_2017 | relevant | 9 | 0 | This is a corrigendum to a human population-PK study, but no numeric parameter values are present in the provided evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 06:50 UTC</sub>
