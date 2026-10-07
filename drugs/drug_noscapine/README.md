<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R05D&quot;,&quot;href&quot;:&quot;atc/R05D.md&quot;},{&quot;label&quot;:&quot;noscapine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Noscapine_Chen2024_final_model&quot;,&quot;label&quot;:&quot;Chen_2024_final_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_noscapine/Noscapine_Chen2024_final_model.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Noscapine_Chen2024_sir_with_m_m_ratio_of_5000_1000&quot;,&quot;label&quot;:&quot;Chen_2024_sir_with_m_m_ratio_of_5000_1000&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_noscapine/Noscapine_Chen2024_sir_with_m_m_ratio_of_5000_1000.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# noscapine

- **generic name:** noscapine
- **ATC codes:** `R05DA07`
- **DrugBank:** [DB06174](https://go.drugbank.com/drugs/DB06174) · **PubChem:** not captured
- **molar mass:** 413.4205 g/mol (C22H23NO7) — DrugBank
- **groups:** approved

## About

Noscapine is an opium alkaloid used as a cough suppressant (antitussive). It is an approved medicine, classified among cough suppressants in respiratory preparations, and is not authorised centrally in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q415619](https://www.wikidata.org/wiki/Q415619) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| noscapine | parent | 413.421 | C22H23NO7 | DrugBank | — | Chen_2024 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:32 | 1:09 | 2/0/0 | 0/0/0 | 0/0/0 | 89,363/7,805 | einfracz / qwen3.8-27b | 2 | 0/2 | 1/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Chen_2024_final_model](drugs/drug_noscapine/Noscapine_Chen2024_final_model.md) | ▶ model + simulator | 1-compartment, oral | 8 (+1 cov.) | Chen Z et al., A Semi-Mechanistic Population Pharmacok…, Drugs in R&D (2024) | [10.1007/s40268-024-00466-6](https://doi.org/10.1007/s40268-024-00466-6) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Chen_2024_sir_with_m_m_ratio_of_5000_1000](drugs/drug_noscapine/Noscapine_Chen2024_sir_with_m_m_ratio_of_5000_1000.md) | ▶ model + simulator | 1-compartment, oral | 8 (+1 cov.) | Chen Z et al., A Semi-Mechanistic Population Pharmacok…, Drugs in R&D (2024) | [10.1007/s40268-024-00466-6](https://doi.org/10.1007/s40268-024-00466-6) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=noscapine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP2C9` inhibitor, `CYP3A4` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: SIGMAR1 (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 2  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Aneja_2007.pdf` | Aneja R et al., Preclinical pharmacokinetics and bioava…, Cancer chemotherapy and pha… (2007) | popPK | 10 | [10.1007/s00280-007-0430-y](https://doi.org/10.1007/s00280-007-0430-y) | [17285314](https://pubmed.ncbi.nlm.nih.gov/17285314) | The paper reports quantitative non-compartmental PK parameters (CL, Vd, AUC, Cmax) for noscapine in mice, with all numeric values explicitly present in the text. |

<sub>queue written 2026-10-07T22:31:51.536391+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Anderson_2005 | irrelevant | 0 | 0 | The study is a medicinal chemistry/antitumor activity paper synthesizing noscapine analogues, not a pharmacokinetic study reporting disposition parameters for noscapine. |
| popPK | Debono_2014 | irrelevant | 0 | 0 | The paper is a synthesis and in-vitro biological evaluation of noscapine derivatives, reporting cytotoxicity (EC50) rather than pharmacokinetic parameters. |
| popPK | Devine_2018 | irrelevant | 0 | 0 | The study is a medicinal chemistry and cytotoxicity investigation of noscapine analogs, not a pharmacokinetic study. |
| popPK | Yong_2021 | irrelevant | 0 | 0 | The paper describes the synthesis and antiproliferative activity of noscapine analogues, not the pharmacokinetic disposition of noscapine itself. |
| popPK | dOelsnitz_2022 | irrelevant | 0 | 0 | The paper is a structural biology and metabolic engineering study focused on evolving biosensors for alkaloids, not a pharmacokinetic study of noscapine. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 22:31 UTC</sub>
