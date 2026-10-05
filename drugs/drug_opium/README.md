<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07D&quot;,&quot;href&quot;:&quot;atc/A07D.md&quot;},{&quot;label&quot;:&quot;opium&quot;}]"></div>

# opium

- **generic name:** opium
- **ATC codes:** `A07DA02`, `N02AA02`
- **DrugBank:** [DB11130](https://go.drugbank.com/drugs/DB11130) · **PubChem:** not captured
- **groups:** approved, illicit

## About

Opium, the dried latex of the opium poppy, has been used as a narcotic pain reliever and as an antidiarrheal (antipropulsive) medicine. It remains an approved drug, though it is also used illicitly, and its medicinal use is limited and tightly controlled.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q46452](https://www.wikidata.org/wiki/Q46452) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| morphine | metabolite | 285.343 | C17H19NO3 | PubChem | [5288826](https://pubchem.ncbi.nlm.nih.gov/compound/5288826) | Liu_2016 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 19:30 | 2:47 | 0/1/0 | 0/0/0 | 0/0/0 | 42,485/5,678 | ollama / qwen3.8:27b-mtp-q8_0 | 7 | 1/6 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.714). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Liu_2016_reference](drugs/drug_opium/Opium_Liu2016_reference.md) | — | 1-compartment (no model) | 2 | Liu T et al., Mechanistic Population Pharmacokinetics…, Journal of clinical pharmac… (2016) | [10.1002/jcph.696](https://doi.org/10.1002/jcph.696) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=opium) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: B2M (binder), OPRD1 (target), OPRK1 (target), OPRM1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 25 matched, 24 returned
- **screened:** 6  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Liu_2016.pdf` | Liu T et al., Mechanistic Population Pharmacokinetics…, Journal of clinical pharmac… (2016) | popPK | 9 | [10.1002/jcph.696](https://doi.org/10.1002/jcph.696) | [26712409](https://pubmed.ncbi.nlm.nih.gov/26712409) | The study reports quantitative population PK parameters (ka, F) for morphine, the primary active metabolite of opium, following oral administration of tincture of opium in neonates. |
| `Samanani_2001.pdf` | Samanani N et al., Isolation and partial characterization…, Planta (2001) | pd | 4 | [10.1007/s004250100581](https://doi.org/10.1007/s004250100581) | [11722126](https://www.ncbi.nlm.nih.gov/pubmed/11722126) | metadata signals extractable PD data (sigmoid) |
| `Samanani_2004.pdf` | Samanani N et al., Molecular cloning and characterization…, The Plant journal : for cel… (2004) | pd | 4 | [10.1111/j.1365-313X.2004.02210.x](https://doi.org/10.1111/j.1365-313X.2004.02210.x) | [15447655](https://www.ncbi.nlm.nih.gov/pubmed/15447655) | metadata signals extractable PD data (sigmoid) |
| `Elkader_2005.pdf` | Elkader A et al., Buprenorphine: clinical pharmacokinetic…, Clinical pharmacokinetics (2005) | pgx | 7 | [10.2165/00003088-200544070-00001](https://doi.org/10.2165/00003088-200544070-00001) | [15966752](https://www.ncbi.nlm.nih.gov/pubmed/15966752) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Xie_2019.pdf` | Xie GL et al., [Effect of opioid-related gene polymorp…, Zhonghua yi xue za zhi (2019) | pgx | 5 | [10.3760/cma.j.issn.0376-2491.2019.47.009](https://doi.org/10.3760/cma.j.issn.0376-2491.2019.47.009) | [31874497](https://www.ncbi.nlm.nih.gov/pubmed/31874497) | metadata signals extractable PGX data (ABCB1) |

<sub>queue written 2026-10-04T19:28:29.697442+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Aksoylu_2025 | not_relevant | 0 | 0 | The paper investigates the biosynthesis of alkaloids in the opium poppy plant, not the pharmacokinetics or pharmacodynamics of opium in humans. |
| popPK | Berthold_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of mitragynine and its metabolite 7-hydroxymitragynine, not opium. |
| PGx | Boysen_2023 | not_relevant | 0 | 0 | The paper is a historical review of opioid use in perioperative medicine and does not report specific pharmacogenomic effects on PK or PD parameters. |
| PGx | Busserolles_2020 | not_relevant | 0 | 0 | The paper is a review of opioid pharmacology and novel drug development strategies, and does not report pharmacogenomic effects on PK/PD parameters. |
| PGx | Elkader_2005 | not_relevant | 0 | 0 | The paper describes general pharmacokinetics of buprenorphine but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Fallah_2016 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (methadone affecting clopidogrel PK) rather than a pharmacogenomic effect of a gene variant on opium. |
| PGx | Hendijani_2022 | not_relevant | 2 | 0 | The paper is a review of general factors influencing variability in opium poppy's antidiabetic effects and does not report specific pharmacogenomic data or fitted effect sizes for PK/PD parameters. |
| PGx | Kong_2011 | not_relevant | 0 | 0 | The study investigates the in vitro CYP450 inhibition potential of Mitragyna speciosa extract, not the effect of a human gene variant on the pharmacokinetics or pharmacodynamics of opium. |
| popPK | Mirzaei_2025 | irrelevant | 0 | 0 | The paper is a longitudinal study of substance use treatment outcomes (psychosocial and behavioral) and does not report any pharmacokinetic parameters for opium. |
| PGx | Morris_2016 | not_relevant | 0 | 0 | The paper focuses on the biosynthetic gene discovery and metabolic engineering of opium alkaloids in yeast, not on human pharmacogenomics or the effect of genetic variants on drug pharmacokinetics or pharmacodynamics. |
| PGx | Narjoux_2019 | not_relevant | 0 | 0 | The paper describes a drug-drug interaction between aprepitant and opium, not a pharmacogenomic effect of a gene variant on opium PK/PD. |
| PGx | Piekoszewski_2009 | not_relevant | 1 | 0 | The paper describes an analytical method for methadone and mentions PK variability but does not report specific gene variants or genotypes. |
| popPK | Rafiemanesh_2021 | irrelevant | 0 | 0 | The paper is a dynamic epidemiological modeling study of opium dependence treatment coverage and outcomes (mortality, abstinence), not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Samanani_2001 | irrelevant | 0 | 0 | no_text gate: only 152 chars of text extracted (&lt; 400) |
| PD | Samanani_2001 | not_relevant | 0 | 0 | The paper focuses on the enzymatic isolation and characterization of norcoclaurine synthase in opium poppy biosynthesis, not on pharmacodynamic or exposure-response relationships of opium alkaloids. |
| popPK | Samanani_2004 | irrelevant | 0 | 0 | no_text gate: only 155 chars of text extracted (&lt; 400) |
| PD | Samanani_2004 | not_relevant | 0 | 0 | The paper focuses on the molecular cloning and enzymatic characterization of norcoclaurine synthase in biosynthesis, not on pharmacodynamic or exposure-response relationships for opium. |
| PGx | Shojaeepour_2018 | not_relevant | 0 | 0 | The study investigates the effect of genetic polymorphisms on blood lead levels and oxidative stress in opium users, not the pharmacokinetics or pharmacodynamics of opium itself. |
| PGx | Siu_2014 | not_relevant | 0 | 0 | The paper is a clinical review of Neonatal Abstinence Syndrome management and only mentions pharmacogenomics as a future research direction without reporting any specific genetic effects on PK/PD parameters. |
| PGx | Unterlinner_1999 | not_relevant | 0 | 0 | The paper describes the biosynthesis of morphine in the opium poppy plant, not the pharmacogenomics of drug metabolism in humans. |
| PGx | Xie_2019 | not_relevant | 4 | 8 | The study reports an association between genotypes and the clinical outcome of opioid tolerance (requiring high doses), but does not report specific pharmacokinetic (e.g., AUC, Cmax) or pharmacodynamic (e.g., ED50, receptor binding) parameter changes. |
| PGx | Ziegler_2005 | not_relevant | 0 | 0 | The paper investigates the plant biosynthesis of morphine in Papaver somniferum, not the pharmacogenomics of human drug metabolism or response. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-04 19:28 UTC</sub>
