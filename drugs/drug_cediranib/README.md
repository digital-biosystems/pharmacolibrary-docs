<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;cediranib&quot;}]"></div>

# cediranib

- **generic name:** cediranib
- **ATC codes:** `L01EK02`
- **DrugBank:** [DB04849](https://go.drugbank.com/drugs/DB04849) · **PubChem:** [CID 9933475](https://pubchem.ncbi.nlm.nih.gov/compound/9933475)
- **molar mass:** 450.5053 g/mol (C25H27FN4O3) — DrugBank
- **groups:** investigational

## About

Cediranib is an investigational anticancer drug, a VEGFR tyrosine kinase inhibitor studied as a treatment for cancer. It is not approved for use; it remains under clinical investigation and is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5057052](https://www.wikidata.org/wiki/Q5057052) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:53 | 1:46 | 0/0/0 | 0/0/0 | 0/0/0 | 12,590/1,417 | openai / gpt-6-luna | 3 | 1/2 | 2/1 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=cediranib) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: KDR (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Li_2017.pdf` | Li J et al., Population pharmacokinetic and exposure…, British journal of clinical… (2017) | popPK | 10 | [10.1111/bcp.13266](https://doi.org/10.1111/bcp.13266) | [28213941](https://pubmed.ncbi.nlm.nih.gov/28213941) | Human cediranib population-PK model is described, but numeric disposition parameter values are not provided. |
| `Al-Huniti_2018.pdf` | Al-Huniti N et al., Population exposure-safety analysis of…, British journal of clinical… (2018) | pd | 5 | [10.1111/bcp.13495](https://doi.org/10.1111/bcp.13495) | [29274100](https://www.ncbi.nlm.nih.gov/pubmed/29274100) | metadata signals extractable PD data (indirectresponse) |
| `Gu_2014.pdf` | Gu R et al., The multikinase inhibitor axitinib is a…, Biochemical pharmacology (2014) | pgx | 7 | [10.1016/j.bcp.2014.01.016](https://doi.org/10.1016/j.bcp.2014.01.016) | [24462920](https://www.ncbi.nlm.nih.gov/pubmed/24462920) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |

<sub>queue written 2026-10-06T22:53:12.678339+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Adamu_2024 | not_relevant | 0 | 0 | The review reports BRCA status associations with progression-free survival for treatment combinations, but no pharmacogenomic effect on a cediranib PK or PD parameter. |
| popPK | Al-Huniti_2018 | irrelevant | 0 | 0 | no_text gate: only 99 chars of text extracted (&lt; 400) |
| popPK | Grkovski_2017 | irrelevant | 0 | 0 | The kinetic parameters are for the imaging tracer 18F-FMISO, not cediranib. |
| PGx | Gu_2014 | not_relevant | 0 | 0 | The paper studies axitinib inhibition of CYP enzymes, not genetic effects on cediranib PK or PD. |
| PGx | Hu_2024 | not_relevant | 0 | 0 | The paper evaluates ctDNA dynamics as response biomarkers, not how a gene variant or genotype changes a cediranib PK or PD parameter. |
| PGx | Lassen_2013 | not_relevant | 0 | 0 | Reports drug–drug interactions with ketoconazole and rifampicin, not a genetic or phenotypic effect on cediranib PK/PD. |
| PGx | Lee_2015 | not_relevant | 0 | 0 | XRCC1 polymorphisms were assessed for association with PFS, but no association was found and no genotype effect on cediranib PK or PD parameters is reported. |
| PGx | Lheureux_2020 | not_relevant | 0 | 0 | Genomic resistance mechanisms are associated with clinical outcomes on cediranib plus olaparib, but no pharmacokinetic or pharmacodynamic parameter of cediranib is reported. |
| popPK | Li_2017 | relevant | 10 | 1 | Human cediranib population-PK model is described, but numeric disposition parameter values are not provided. |
| PGx | Tao_2009 | not_relevant | 0 | 0 | The study examines cediranib inhibiting ABCB1/ABCC1 transport in cell models, not how a genetic variant or phenotype changes cediranib’s PK or PD. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
