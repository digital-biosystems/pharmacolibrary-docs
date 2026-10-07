<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01F&quot;,&quot;href&quot;:&quot;atc/J01F.md&quot;},{&quot;label&quot;:&quot;solithromycin&quot;}]"></div>

# solithromycin

- **generic name:** solithromycin
- **ATC codes:** `J01FA16`
- **DrugBank:** [DB09308](https://go.drugbank.com/drugs/DB09308) · **PubChem:** [CID 25242512](https://pubchem.ncbi.nlm.nih.gov/compound/25242512)
- **molar mass:** 845.0088 g/mol (C43H65FN6O10) — DrugBank
- **groups:** investigational

## About

Solithromycin is an investigational macrolide antibiotic studied for treating infections such as pneumonia, tularemia, and anthrax. It has never reached routine use; its marketing application in the European Union was withdrawn, so it remains an investigational drug.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7558263](https://www.wikidata.org/wiki/Q7558263) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:24 | 1:56 | 0/0/0 | 0/0/0 | 0/0/0 | 21,087/945 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=solithromycin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor | DrugBank actor |

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

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gonzalez_2018.pdf` | Gonzalez D et al., Population Pharmacokinetics and Safety…, Antimicrobial agents and ch… (2018) | popPK | 10 | [10.1128/AAC.00692-18](https://doi.org/10.1128/AAC.00692-18) | [29891609](https://pubmed.ncbi.nlm.nih.gov/29891609) | The abstract describes a population PK model with covariates but does not provide the specific numeric parameter values (CL, V, Q, etc.). |
| `Beechinor_2019.pdf` | Beechinor RJ et al., A Dried Blood Spot Analysis for Solithr…, Therapeutic drug monitoring (2019) | popPK | 8 | [10.1097/FTD.0000000000000670](https://doi.org/10.1097/FTD.0000000000000670) | [31318840](https://pubmed.ncbi.nlm.nih.gov/31318840) | The study leverages a population PK model for solithromycin in pediatric humans, but specific numeric parameter values (CL, V, etc.) are not listed in the provided text, only that DBS-derived estimates were within 15% of liquid plasma estimates. |
| `Zhanel_2016.pdf` | Zhanel GG et al., Solithromycin: A Novel Fluoroketolide f…, Drugs (2016) | popPK | 8 | [10.1007/s40265-016-0667-z](https://doi.org/10.1007/s40265-016-0667-z) | [27909995](https://pubmed.ncbi.nlm.nih.gov/27909995) | The text is a review describing solithromycin's PK properties (half-life, Vd, bioavailability) in humans, but it lacks a full compartmental parameter set (CL, Q, ka) and specific numeric values for CL. |
| `Okusanya_2019.pdf` | Okusanya OO et al., Pharmacokinetic/Pharmacodynamic Evaluat…, Antimicrobial agents and ch… (2019) | pd | 5 | [10.1128/AAC.02606-18](https://doi.org/10.1128/AAC.02606-18) | [31182534](https://www.ncbi.nlm.nih.gov/pubmed/31182534) | metadata signals extractable PD data (PK/PD) |
| `MacLauchlin_2018.pdf` | MacLauchlin C et al., Metabolism, Excretion, and Mass Balance…, Antimicrobial agents and ch… (2018) | pgx | 7 | [10.1128/AAC.01474-17](https://doi.org/10.1128/AAC.01474-17) | [29507061](https://www.ncbi.nlm.nih.gov/pubmed/29507061) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Salerno_2021.pdf` | Salerno SN et al., Leveraging Physiologically Based Pharma…, Drug metabolism and disposi… (2021) | pgx | 7 | [10.1124/dmd.120.000318](https://doi.org/10.1124/dmd.120.000318) | [34154994](https://www.ncbi.nlm.nih.gov/pubmed/34154994) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Hein_2017.pdf` | Hein DW et al., Role of the N-acetylation polymorphism…, Pharmacogenomics (2017) | pgx | 5 | [10.2217/pgs-2017-0045](https://doi.org/10.2217/pgs-2017-0045) | [28625123](https://www.ncbi.nlm.nih.gov/pubmed/28625123) | metadata signals extractable PGX data (NAT2) |

<sub>queue written 2026-10-07T11:23:54.314050+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Beechinor_2019 | relevant | 8 | 1 | The study leverages a population PK model for solithromycin in pediatric humans, but specific numeric parameter values (CL, V, etc.) are not listed in the provided text, only that DBS-derived estimates were within 15% of liquid plasma estimates. |
| PGx | Chavan_2021 | not_relevant | 0 | 0 | The study assesses the CYP inhibition potential of nafithromycin using human liver microsomes and does not involve gene variants, genotypes, or phenotypes (pharmacogenomics). |
| popPK | Gonzalez_2018 | relevant | 10 | 0 | The abstract describes a population PK model with covariates but does not provide the specific numeric parameter values (CL, V, Q, etc.). |
| popPK | Kobayashi_2013 | irrelevant | 0 | 0 | The study is mechanistic and pharmacodynamic, evaluating the reversal of corticosteroid insensitivity, and does not report quantitative pharmacokinetic disposition parameters for solithromycin. |
| PGx | MacLauchlin_2018 | not_relevant | 0 | 0 | The paper describes general metabolism and excretion in healthy humans without investigating specific gene variants (e.g., CYP3A4 polymorphisms) or their impact on PK parameters. |
| popPK | Okusanya_2019 | irrelevant | 0 | 0 | no_text gate: only 150 chars of text extracted (&lt; 400) |
| PGx | Salerno_2017 | not_relevant | 0 | 0 | The study develops a PBPK model for solithromycin but does not report the impact of specific gene variants, genotypes, or pharmacogenomic phenotypes on PK or PD parameters. |
| PGx | Salerno_2021 | not_relevant | 0 | 0 | The paper discusses CYP3A-mediated drug-drug interactions (pharmacokinetics) using PBPK modeling, not pharmacogenomic effects (genetic variants) on solithromycin. |
| popPK | Vandevelde_2014 | irrelevant | 0 | 0 | The study is an in vitro pharmacodynamic model measuring antibiotic activity against biofilms, not a pharmacokinetic study reporting disposition parameters like clearance or volume for solithromycin. |
| popPK | Vandevelde_2015 | irrelevant | 0 | 0 | The paper is an in vitro pharmacodynamic study on biofilms, not a pharmacokinetic study, and provides no disposition parameters for solithromycin. |
| popPK | Zhanel_2016 | relevant | 8 | 3 | The text is a review describing solithromycin's PK properties (half-life, Vd, bioavailability) in humans, but it lacks a full compartmental parameter set (CL, Q, ka) and specific numeric values for CL. |
| PGx | Zhanel_2016 | not_relevant | 0 | 0 | The paper describes the drug's PK/PD profile but does not report any pharmacogenomic effect (gene variant/genotype impact). |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
