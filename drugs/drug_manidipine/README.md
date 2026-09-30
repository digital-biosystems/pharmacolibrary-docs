<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C08C&quot;,&quot;href&quot;:&quot;atc/C08C.md&quot;},{&quot;label&quot;:&quot;manidipine&quot;}]"></div>

# manidipine

- **generic name:** manidipine
- **ATC codes:** `C08CA11`, `C09BB12`
- **DrugBank:** [DB09238](https://go.drugbank.com/drugs/DB09238) · **PubChem:** [CID 4008](https://pubchem.ncbi.nlm.nih.gov/compound/4008)
- **molar mass:** 610.711 g/mol (C35H38N4O6) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

**Description.** Manidipine (INN) is a calcium channel blocker (dihydropyridine type) that is used clinically as an antihypertensive. It is selective for vasculature and does not produce effects on the heart at clinically relevant dosages.

**Indication.** For the treatment of hypertension.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-29 09:12 | 14:43 | 0/0/0 | 0/0/0 | 0/0/0 | 72,020/2,561 | ollama / qwen3.8:27b-mtp-q8_0 | 8 | 5/3 | 7/1 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=manidipine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | kidney | <sub>“…s which make up 4-7% and 22-24% of the dose excreted in the urine [A7845].…”</sub> | prose |
| metabolism | liver | `CYP2B6` inhibitor, `CYP2C19` inhibitor, `CYP2C9` inhibitor, `CYP2D6` inhibitor, `CYP3A4` inhibitor/substrate | DrugBank actor |
| metabolism | lung | `CYP1A1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP1A1` inhibitor, `CYP3A4` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>“…ated through extensive metabolism. 63% is eliminated in the feces and 31% in the urine as…”</sub> | prose |
| excretion | kidney | <sub>“…e metabolism. 63% is eliminated in the feces and 31% in the urine as metabolites [A7845].…”</sub> | prose |

<sub>Actors without a tissue in the table: CACNA1C (blocker), CACNA1C (inhibitor), CACNA1D (inhibitor), CACNA1G (blocker), CACNA1G (inhibitor), CACNA1H (inhibitor), CACNA1I (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 30 matched, 29 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Stockis_2003.pdf` | Stockis A et al., Pharmacokinetics and tolerability of a…, Arzneimittel-Forschung (2003) | popPK | 8 | [10.1055/s-0031-1297149](https://doi.org/10.1055/s-0031-1297149) | [13677245](https://pubmed.ncbi.nlm.nih.gov/13677245) | The study reports pharmacokinetic parameters for manidipine, but the evidence only provides relative percentage changes (e.g., t1/2 +45%) rather than absolute numeric values for clearance, volume, or half-life. |
| `Correa_2021.pdf` | Correa ITS et al., Bioenergetics impairment of Trypanosoma…, Acta tropica (2021) | pd | 4 | [10.1016/j.actatropica.2020.105768](https://doi.org/10.1016/j.actatropica.2020.105768) | [33245907](https://www.ncbi.nlm.nih.gov/pubmed/33245907) | metadata signals extractable PD data (IC50) |
| `Ghahremanpour_2020.pdf` | Ghahremanpour MM et al., Identification of 14 Known Drugs as Inh…, ACS medicinal chemistry let… (2020) | pd | 4 | [10.1021/acsmedchemlett.0c00521](https://doi.org/10.1021/acsmedchemlett.0c00521) | [33324471](https://www.ncbi.nlm.nih.gov/pubmed/33324471) | metadata signals extractable PD data (IC50) |
| `Katoh_2000.pdf` | Katoh M et al., Inhibitory potencies of 1,4-dihydropyri…, Pharmaceutical research (2000) | pd | 4 | [10.1023/a:1007568811691](https://doi.org/10.1023/a:1007568811691) | [11145223](https://www.ncbi.nlm.nih.gov/pubmed/11145223) | metadata signals extractable PD data (IC50) |
| `Qu_1996.pdf` | Qu YL et al., Slow association of positively charged…, General pharmacology (1996) | pd | 4 | [10.1016/0306-3623(95)00085-2](https://doi.org/10.1016/0306-3623(95)00085-2) | [8742511](https://www.ncbi.nlm.nih.gov/pubmed/8742511) | metadata signals extractable PD data (IC50) |
| `Zhou_2025.pdf` | Zhou J et al., Targeting NFAT2 for Reversing the P-gp-…, Cancers (2025) | pd | 4 | [10.3390/cancers17203289](https://doi.org/10.3390/cancers17203289) | [41154347](https://www.ncbi.nlm.nih.gov/pubmed/41154347) | metadata signals extractable PD data (IC50) |
| `Uno_2006.pdf` | Uno T et al., Effect of grapefruit juice on the dispo…, British journal of clinical… (2006) | pgx | 7 | [10.1111/j.1365-2125.2006.02583.x](https://doi.org/10.1111/j.1365-2125.2006.02583.x) | [16669846](https://www.ncbi.nlm.nih.gov/pubmed/16669846) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-09-29T09:10:25.705182+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Amaliah_2025 | irrelevant | 0 | 0 | The paper is a review of ternary solid dispersions that mentions manidipine only as a cited example in the references, without providing any original pharmacokinetic parameter values for the drug. |
| PD | Amaliah_2025 | not_relevant | 0 | 0 | The paper is a review of ternary solid dispersions and does not contain specific pharmacodynamic or exposure-response data for manidipine. |
| popPK | Cabré_2026 | irrelevant | 0 | 0 | The paper is a narrative review of cardiovascular pharmacotherapy and does not report any quantitative pharmacokinetic parameters for manidipine. |
| PD | Cabré_2026 | not_relevant | 0 | 0 | The text is a narrative review of cardiovascular pharmacotherapy and does not contain specific data, models, or numeric parameters for manidipine. |
| popPK | Correa_2021 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of manidipine's antiparasitic activity against Trypanosoma cruzi and does not report any pharmacokinetic parameters. |
| popPK | Ghahremanpour_2020 | irrelevant | 0 | 0 | no_text gate: only 81 chars of text extracted (&lt; 400) |
| PD | Ghahremanpour_2020 | not_relevant | 0 | 0 | The paper focuses on in vitro inhibition of the SARS-CoV-2 main protease by various drugs and does not report pharmacokinetic or pharmacodynamic exposure-response relationships for manidipine in humans or animal models. |
| popPK | Hirata_1992 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of manidipine's effects on cell proliferation and gene expression, reporting no pharmacokinetic parameters. |
| popPK | Ide_1994 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding manidipine pharmacokinetics. |
| PD | Ide_1994 | not_relevant | 0 | 0 | The provided text is metadata from a document processing tool (GROBID) and does not contain the scientific content of the paper, nor any information regarding manidipine or pharmacodynamic parameters. |
| popPK | Ikemura_2019 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CYP2J2 inhibition and does not report pharmacokinetic disposition parameters for manidipine. |
| popPK | Katoh_2000 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of P-glycoprotein inhibition and does not report pharmacokinetic disposition parameters for manidipine. |
| PGx | Katoh_2000 | not_relevant | 0 | 0 | The study investigates in vitro inhibitory effects of manidipine on P-glycoprotein transport and does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Katoh_2000_2 | not_relevant | 0 | 0 | The paper investigates in vitro CYP inhibition by manidipine to predict drug-drug interactions, but does not report pharmacogenomic effects (gene variants) on manidipine's PK or PD parameters. |
| PGx | Maideen_2024 | not_relevant | 0 | 0 | The text is the prescribing information for PAXLOVID (nirmatrelvir/ritonavir) and does not mention manidipine or any pharmacogenomic effects on its PK/PD parameters. |
| popPK | Miah_2026 | irrelevant | 0 | 0 | The paper is a scoping review on dietary effects on blood pressure and does not report pharmacokinetic parameters for manidipine. |
| PD | Miah_2026 | not_relevant | 0 | 0 | The paper is a scoping review on dietary modifications of antihypertensive drug effects and does not report specific pharmacodynamic or exposure-response parameters for manidipine. |
| popPK | Qu_1996 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding assay for amlodipine with manidipine as a comparator, reporting no pharmacokinetic disposition parameters. |
| PD | Qu_1996 | not_relevant | 2 | 2 | The paper reports in vitro binding kinetics (Kd, Bmax) and time-dependent IC50 ratios for receptor association, which are pharmacological binding parameters, not pharmacodynamic exposure-response or dose-response relationships in a physiological context. |
| PGx | Reddy_2021 | not_relevant | 0 | 0 | The paper investigates PXR agonism by calcium channel blockers (specifically felodipine) and mentions manidipine only as a negative control for receptor binding, without reporting any pharmacogenomic effects on manidipine's PK or PD parameters. |
| popPK | Ren_2022 | irrelevant | 0 | 0 | The paper is a review/tutorial on slow reversible binding PK/PD models and does not report pharmacokinetic parameters for manidipine. |
| PD | Ren_2022 | not_relevant | 2 | 0 | The paper is a review/tutorial on slow reversible binding models and does not report PD data or parameters for manidipine. |
| popPK | Satoh_2004 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of manidipine's inhibition of estradiol glucuronidation, not a pharmacokinetic study reporting disposition parameters for manidipine. |
| popPK | Shimada_1996 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding manidipine pharmacokinetics. |
| PD | Shimada_1996 | not_relevant | 0 | 0 | The provided text is metadata from a document processing tool (GROBID) and does not contain the scientific content of the paper, nor any information regarding manidipine or pharmacodynamic parameters. |
| popPK | Stockis_2003 | relevant | 8 | 2 | The study reports pharmacokinetic parameters for manidipine, but the evidence only provides relative percentage changes (e.g., t1/2 +45%) rather than absolute numeric values for clearance, volume, or half-life. |
| PD | Stockis_2003 | not_relevant | 2 | 1 | The study reports PK parameters and qualitative BP/HR profiles but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative exposure-response model. |
| popPK | Tohse_1993 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of calcium channel modulation, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Uno_2006 | not_relevant | 0 | 0 | The study investigates the effect of grapefruit juice (a dietary CYP3A4 inhibitor) on manidipine PK, not the effect of a genetic variant or genotype. |
| PGx | Yan_2025 | not_relevant | 0 | 0 | The paper investigates the mechanism of manidipine reducing P-gp expression to overcome drug resistance, but does not report a pharmacogenomic effect (gene variant) on manidipine's PK or PD parameters. |
| popPK | Zhou_2025 | irrelevant | 0 | 0 | no_text gate: only 96 chars of text extracted (&lt; 400) |
| PD | Zhou_2025 | not_relevant | 0 | 0 | The paper focuses on the molecular mechanism of manidipine reversing P-gp mediated multidrug resistance to paclitaxel, not on pharmacodynamic modeling or exposure-response relationships for manidipine itself. |
| PGx | Zhou_2025 | not_relevant | 0 | 0 | The paper investigates the mechanism of manidipine reversing P-gp mediated multidrug resistance to paclitaxel, not the effect of a gene variant on manidipine's PK or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
