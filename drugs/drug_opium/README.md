<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07D&quot;,&quot;href&quot;:&quot;atc/A07D.md&quot;},{&quot;label&quot;:&quot;opium&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Opium_Liu2016_reference&quot;,&quot;label&quot;:&quot;Liu_2016_reference&quot;,&quot;href&quot;:&quot;drugs/drug_opium/Opium_Liu2016_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# opium

- **generic name:** opium
- **ATC codes:** `A07DA02`, `N02AA02`
- **DrugBank:** [DB11130](https://go.drugbank.com/drugs/DB11130)
- **groups:** approved, illicit

## About

**Description.** Opium is the first substance of the diverse group of the opiates. It has been known for a long time, and the first evidence of a poppy culture dates from 5 thousand years by the Sumerians. During the years, opium was used as a sedative and hypnotic, but it was determined to be addictive.[A32171] 

Opium is extracted from _Papaver somniferum_, which is more known as poppies. This plant is an integrant of the Papaveraceae family, and it is characterized by solitary leaves and capsulated fruits. Therefore, opium is a sticky brown resin obtained by collecting and drying the latex that exudes from the poppy pods.[L1761]

Once extracted, opium contains two main groups of alkaloids; the psychoactive constituents which are in the category of phenanthrenes and alkaloids that have no central nervous system effect in the category of isoquinolines. Morphine is the most prevalent and principal alkaloid in opium, and it is responsible for most of the harmful effects of opium.[L1762]

Opium has gradually been superseded by a variety of synthetic opioids and general anesthetics. Some of the isolated derivatives of opium are morphine, noscapine, strychnine, veratrine, colchicine, codeine, and quinine.[A32175] Opium is a prohibited drug of abuse in most countries, but the illegal production of this drug and its derivatives keeps being registered. There is some legal production of opium in different countries for the obtention of alkaloids by extraction.[L1766]

**Indication.** Opium and its derivatives are the most commonly used medications for the treatment of acute and chronic pain. Opium and its alkaloid-derivatives can also be used as tranquilizers, antitussives and in the treatment of diarrhea.[T138] The direct use of opium is not common nowadays but the use of some of its derivatives such as morphine and codeine, as well as the use of a tincture of opium for severe diarrhea can be seen in medical practice.[T139]

Illegal use of opium has been registered to be for both recreational and medicinal purposes.[A32182]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-22 04:51 | 2:02 | 0/1/0 | 0/0/0 | 0/0/0 | 40,833/1,618 | ollama / qwen3.8:27b-mtp-q8_0 | 7 | 1/6 | 7/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.429). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Liu_2016_reference](drugs/drug_opium/Opium_Liu2016_reference.md) | Liu T et al., Mechanistic Population Pharmacokinetics…, Journal of clinical pharmac… (2016) | [10.1002/jcph.696](https://doi.org/10.1002/jcph.696) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=opium) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | kidney | <sub>“…differentiations were based in the presence of morphine in urine without evidence of 6-mon…”</sub> | prose |
| metabolism | liver | `CYP2D6` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | <sub>“…preparations, codeine and morphine can be found excreted in urine. The presence of codeine…”</sub> | prose |

<sub>Actors without a tissue in the table: B2M (binder), OPRD1 (target), OPRK1 (target), OPRM1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 25 matched, 24 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Liu_2016.pdf` | Liu T et al., Mechanistic Population Pharmacokinetics…, Journal of clinical pharmac… (2016) | popPK | 9 | [10.1002/jcph.696](https://doi.org/10.1002/jcph.696) | [26712409](https://pubmed.ncbi.nlm.nih.gov/26712409) | The study reports quantitative population PK parameters (ka, F) for morphine, the primary active alkaloid of opium, derived from oral administration of tincture of opium. |
| `Samanani_2001.pdf` | Samanani N et al., Isolation and partial characterization…, Planta (2001) | pd | 4 | [10.1007/s004250100581](https://doi.org/10.1007/s004250100581) | [11722126](https://www.ncbi.nlm.nih.gov/pubmed/11722126) | metadata signals extractable PD data (sigmoid) |
| `Samanani_2004.pdf` | Samanani N et al., Molecular cloning and characterization…, The Plant journal : for cel… (2004) | pd | 4 | [10.1111/j.1365-313X.2004.02210.x](https://doi.org/10.1111/j.1365-313X.2004.02210.x) | [15447655](https://www.ncbi.nlm.nih.gov/pubmed/15447655) | metadata signals extractable PD data (sigmoid) |
| `Elkader_2005.pdf` | Elkader A et al., Buprenorphine: clinical pharmacokinetic…, Clinical pharmacokinetics (2005) | pgx | 7 | [10.2165/00003088-200544070-00001](https://doi.org/10.2165/00003088-200544070-00001) | [15966752](https://www.ncbi.nlm.nih.gov/pubmed/15966752) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Xie_2019.pdf` | Xie GL et al., [Effect of opioid-related gene polymorp…, Zhonghua yi xue za zhi (2019) | pgx | 5 | [10.3760/cma.j.issn.0376-2491.2019.47.009](https://doi.org/10.3760/cma.j.issn.0376-2491.2019.47.009) | [31874497](https://www.ncbi.nlm.nih.gov/pubmed/31874497) | metadata signals extractable PGX data (ABCB1) |

<sub>queue written 2026-09-22T04:49:18.746233+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Aksoylu_2025 | not_relevant | 0 | 0 | The paper investigates DNA methylation in the opium poppy plant (Papaver somniferum) to understand alkaloid biosynthesis, not the pharmacogenomics of opium in humans. |
| popPK | Berthold_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of mitragynine and 7-hydroxymitragynine (kratom alkaloids), not opium. |
| PGx | Boysen_2023 | not_relevant | 0 | 0 | The paper is a historical review of opioid use in perioperative medicine and does not report any pharmacogenomic effects on PK or PD parameters. |
| PGx | Busserolles_2020 | not_relevant | 0 | 0 | The paper is a review of opioid pharmacology and novel drug development strategies, and does not report pharmacogenomic effects on PK/PD parameters. |
| PGx | Elkader_2005 | not_relevant | 0 | 0 | The paper describes general pharmacokinetics of buprenorphine but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Fallah_2016 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (methadone affecting clopidogrel PK) rather than a pharmacogenomic effect of a gene variant on opium. |
| PGx | Hendijani_2022 | not_relevant | 2 | 0 | The paper is a review discussing general factors of interindividual variability in opium poppy response in diabetes, but it does not report specific pharmacogenomic effects (gene variant -&gt; PK/PD parameter) for opium. |
| PGx | Kong_2011 | not_relevant | 0 | 0 | The study investigates CYP enzyme inhibition by Mitragyna speciosa extract in vitro and does not report any pharmacogenomic effects (gene variants) on the PK or PD of opium. |
| popPK | Mirzaei_2025 | irrelevant | 0 | 0 | The paper is a longitudinal study of substance use treatment outcomes (psychosocial and behavioral) and does not report any pharmacokinetic parameters for opium. |
| PGx | Morris_2016 | not_relevant | 0 | 0 | The paper focuses on the biosynthetic gene discovery and metabolic engineering of opium alkaloids in yeast, not on human pharmacogenomics or the effect of genetic variants on drug PK/PD. |
| PGx | Narjoux_2019 | not_relevant | 0 | 0 | The paper describes a drug-drug interaction between aprepitant and opium, not a pharmacogenomic effect of a gene variant on opium PK/PD. |
| PGx | Piekoszewski_2009 | not_relevant | 1 | 0 | The paper describes an analytical method for methadone and mentions PK variability but does not report specific gene variants or genotypes. |
| popPK | Rafiemanesh_2021 | irrelevant | 0 | 0 | The paper is a dynamic epidemiological modeling study of opium dependence treatment coverage and outcomes, not a pharmacokinetic study, and contains no PK parameters. |
| popPK | Samanani_2001 | irrelevant | 0 | 0 | no_text gate: only 152 chars of text extracted (&lt; 400) |
| PD | Samanani_2001 | not_relevant | 0 | 0 | The paper focuses on the enzymatic isolation and characterization of norcoclaurine synthase in opium poppy biosynthesis, not on pharmacodynamic or exposure-response relationships of opium alkaloids. |
| popPK | Samanani_2004 | irrelevant | 0 | 0 | no_text gate: only 155 chars of text extracted (&lt; 400) |
| PD | Samanani_2004 | not_relevant | 0 | 0 | The paper focuses on the molecular cloning and enzymatic characterization of norcoclaurine synthase in biosynthesis, not on pharmacodynamic or exposure-response relationships for opium. |
| PGx | Shojaeepour_2018 | not_relevant | 0 | 0 | The study investigates the effect of genetic polymorphisms on blood lead levels and oxidative stress in opium users, not the pharmacokinetics or pharmacodynamics of opium itself. |
| PGx | Siu_2014 | not_relevant | 0 | 0 | The paper is a clinical review of Neonatal Abstinence Syndrome management and only mentions pharmacogenomics as a future research direction without reporting any specific genetic effects on PK/PD parameters. |
| PGx | Unterlinner_1999 | not_relevant | 0 | 0 | The paper describes the biosynthesis of morphine in the opium poppy plant, not the pharmacogenomics of drug metabolism in humans. |
| PGx | Xie_2019 | not_relevant | 2 | 5 | The study reports an association between genotypes and the clinical outcome of opioid tolerance, but does not report specific pharmacokinetic (e.g., AUC, Cmax) or pharmacodynamic (e.g., ED50, receptor binding) parameters. |
| PGx | Ziegler_2005 | not_relevant | 0 | 0 | The paper investigates the plant biosynthesis of morphine in Papaver species, not the pharmacogenomics of human drug metabolism or response. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-22 04:49 UTC</sub>
