<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C10A&quot;,&quot;href&quot;:&quot;atc/C10A.md&quot;},{&quot;label&quot;:&quot;colestyramine&quot;}]"></div>

# colestyramine

- **generic name:** colestyramine
- **ATC codes:** `C10AC01`
- **DrugBank:** [DB01432](https://go.drugbank.com/drugs/DB01432) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Colestyramine is a bile acid sequestrant used to lower cholesterol in lipid disorders such as hyperlipidemia and hypertriglyceridemia, and it has also been used for conditions like pseudomembranous colitis. It is an approved medicine that remains in use, mainly for managing high blood lipid levels.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q418006](https://www.wikidata.org/wiki/Q418006) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:02 | 2:53 | 0/0/0 | 0/0/0 | 0/0/0 | 25,766/1,270 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 0/3 | 3/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=colestyramine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: Bile acids (binder).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 20 matched, 20 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Scripture_2001.pdf` | Scripture CD et al., Clinical pharmacokinetics of fluvastatin, Clinical pharmacokinetics (2001) | pgx | 7 | [10.2165/00003088-200140040-00003](https://doi.org/10.2165/00003088-200140040-00003) | [11368292](https://www.ncbi.nlm.nih.gov/pubmed/11368292) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Liu_2017.pdf` | Liu X et al., Hepatic deletion of X-box binding prote…, Journal of lipid research (2017) | pgx | 5 | [10.1194/jlr.M071266](https://doi.org/10.1194/jlr.M071266) | [28039331](https://www.ncbi.nlm.nih.gov/pubmed/28039331) | metadata signals extractable PGX data (CYP7A1) |

<sub>queue written 2026-10-07T10:01:36.493895+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Bernstein_2013 | not_relevant | 0 | 0 | The paper is a clinical review of Cholesteryl Ester Storage Disease and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of colestyramine. |
| PGx | Brassil_1998 | not_relevant | 0 | 0 | The paper studies the effect of colestyramine on hepatic enzyme expression in rats, not the effect of a gene variant on the pharmacokinetics or pharmacodynamics of colestyramine. |
| popPK | Delaere_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters (half-life) for PFOS and PFHxS, not for colestyramine, which is only used as a treatment agent. |
| PGx | Hagberg_2000 | not_relevant | 2 | 0 | The text is a general review of APOE genotype effects on lipid levels and mentions cholestyramine only in passing without providing specific pharmacokinetic or pharmacodynamic data for the drug. |
| popPK | Horii_2004 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of flunixin in cats, using colestyramine only as a co-administered agent to block enterohepatic circulation, not as the subject drug. |
| PGx | Jolley_2000 | not_relevant | 0 | 0 | The study investigates the effect of an apolipoprotein AI gene knockout on bile acid synthesis and cholesterol metabolism, but does not report pharmacokinetic or pharmacodynamic parameters of colestyramine itself. |
| popPK | Lehr_2009 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of tesofensine and meloxicam, using cholestyramine only as a co-administered agent to interrupt enterohepatic circulation, not as the subject drug. |
| PGx | Liu_2017 | not_relevant | 0 | 0 | The paper studies bile acid metabolism in mice and does not mention colestyramine or its pharmacokinetics/pharmacodynamics. |
| PGx | Newman_2024 | not_relevant | 0 | 0 | The paper investigates the effect of cholestyramine on the gut microbiota and host metabolism in mice, but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| popPK | Quarfordt_1973 | irrelevant | 0 | 0 | The study focuses on cholesterol and bile acid turnover kinetics, using colestyramine only as a therapeutic intervention to alter flux, rather than measuring the pharmacokinetic parameters of colestyramine itself. |
| popPK | Roitelman_1986 | irrelevant | 0 | 0 | The study investigates the kinetic properties of the enzyme HMG-CoA reductase in rat liver microsomes, not the pharmacokinetic disposition parameters of colestyramine. |
| PGx | Rozman_2002 | not_relevant | 0 | 0 | The paper reviews the pharmacokinetics of leflunomide and mentions cholestyramine only as a method to accelerate elimination, without reporting any pharmacogenomic effects on colestyramine. |
| PGx | Scripture_2001 | not_relevant | 0 | 0 | The paper discusses the pharmacokinetics of fluvastatin and its interaction with colestyramine, but does not report pharmacogenomic effects on colestyramine. |
| PGx | Stine_2016 | not_relevant | 0 | 0 | The paper is a systematic review on drug-induced liver injury treatments and mentions cholestyramine only as a bile acid washout agent, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| PGx | Vlachova_2016 | not_relevant | 0 | 0 | The study investigates the effect of a CYP7A1 polymorphism on diurnal variation in enzyme activity (C4 levels), not on the pharmacokinetic or pharmacodynamic parameters of cholestyramine itself. |
| PGx | Watts_1995 | not_relevant | 0 | 0 | The paper reports genetic determinants of coronary heart disease progression, not the effect of gene variants on the pharmacokinetics or pharmacodynamics of colestyramine. |
| PGx | Wong_2019 | not_relevant | 0 | 0 | The paper is a survey of surgical practices and adjuvant therapies for biliary atresia and does not report any pharmacogenomic effects on colestyramine PK or PD. |
| PGx | Zhou_2025 | not_relevant | 0 | 0 | The paper is a case report on PSC with gene mutations (PKLR, UGT1A1) and does not report pharmacogenomic effects on the PK or PD of colestyramine. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
