<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;S01E&quot;,&quot;href&quot;:&quot;atc/S01E.md&quot;},{&quot;label&quot;:&quot;methazolamide&quot;}]"></div>

# methazolamide

- **generic name:** methazolamide
- **ATC codes:** `S01EC05`
- **DrugBank:** [DB00703](https://go.drugbank.com/drugs/DB00703) · **PubChem:** [CID 4100](https://pubchem.ncbi.nlm.nih.gov/compound/4100)
- **molar mass:** 236.26 g/mol (C5H8N4O3S2) — DrugBank
- **groups:** approved

## About

Methazolamide is a carbonic anhydrase inhibitor used to treat glaucoma, including open-angle and angle-closure forms. It is an approved eye medicine, classified among antiglaucoma preparations for ophthalmic use, though it is not authorised centrally in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1149099](https://www.wikidata.org/wiki/Q1149099) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:03 | 1:31 | 0/0/0 | 0/1/0 | 0/0/0 | 34,253/1,094 | einfracz / qwen3.8-27b | 5 | 0/5 | 5/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Alvarez_2007_cardiomyocyte_hypertrophy_prevented_by_methazolamide](drugs/drug_methazolamide/pd_Alvarez_2007_cardiomyocyte_hypertrophy_prevented_by_methazol.md) | cardiomyocyte hypertrophy (prevented by methazolamide) ← methazolamide · inhibition effect | — | Alvarez BV et al., Carbonic anhydrase inhibition prevents…, The Journal of physiology 5… (2007) | [10.1113/jphysiol.2006.123638](https://doi.org/10.1113/jphysiol.2006.123638) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=methazolamide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A6` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: CA1 (inhibitor), CA2 (inhibitor), CA3 (inhibitor), CA4 (inhibitor), CA7 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Taft_1998.pdf` | Taft DR et al., Blood disposition and urinary excretion…, Biopharmaceutics & drug dis… (1998) | popPK | 10 | [10.1002/(sici)1099-081x(199809)19:6&lt;373::aid-bdd113&gt;3.0.co;2-t](https://doi.org/10.1002/(sici)1099-081x(199809)19:6<373::aid-bdd113>3.0.co;2-t) | [9737818](https://pubmed.ncbi.nlm.nih.gov/9737818) | The paper reports quantitative pharmacokinetic parameters (clearance, volume, rate constants, half-life) for methazolamide in humans directly in the abstract. |
| `Semplicini_1989.pdf` | Semplicini A et al., Kinetics and stoichiometry of the human…, The Journal of membrane bio… (1989) | pd | 4 | [10.1007/BF01871937](https://doi.org/10.1007/BF01871937) | [2541250](https://www.ncbi.nlm.nih.gov/pubmed/2541250) | metadata signals extractable PD data (sigmoid) |

<sub>queue written 2026-10-07T19:03:15.413226+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alvarez_2007 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro investigation of cardiomyocyte hypertrophy using methazolamide as a pharmacological tool, and it reports no pharmacokinetic parameters. |
| PGx | Bhattacharjee_2024 | not_relevant | 0 | 0 | The paper focuses on virtual screening and molecular docking for drug repurposing against Monkeypox, and does not report any pharmacogenomic studies or effects of gene variants on the pharmacokinetics or pharmacodynamics of methazolamide. |
| popPK | Hirankarn_2013 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of CG100649, using methazolamide only as a qualitative comparator for biodistribution. |
| PGx | Jung_2018 | not_relevant | 0 | 1 | The paper discusses pharmacogenomic associations between HLA-B*59:01 and severe cutaneous adverse reactions (SCARs) to methazolamide, which is an adverse safety outcome, not a change in pharmacokinetic (PK) or pharmacodynamic (PD) parameters. |
| PGx | Lee_2022 | not_relevant | 0 | 0 | The paper reports an association between HLA genotypes and immune-mediated adverse drug reactions (SCARs), not changes in pharmacokinetic or pharmacodynamic parameters. |
| PGx | Liang_2024 | not_relevant | 0 | 0 | The study compares treatment efficacy but explicitly reports no correlation between genetic variants and clinical outcomes, and does not analyze pharmacokinetic or pharmacodynamic parameters based on genotype. |
| PGx | Rump_2024 | not_relevant | 0 | 0 | The paper is a review on aquaporins in sepsis that mentions methazolamide only as a general AQP5 inhibitor, without reporting any gene-variant specific PK or PD parameters. |
| popPK | Semplicini_1989 | irrelevant | 0 | 0 | The study investigates the kinetics of the human red blood cell Na+/H+ exchanger using methazolamide as an experimental tool/inhibitor, rather than reporting pharmacokinetic parameters for methazolamide itself. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
