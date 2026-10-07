<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G03A&quot;,&quot;href&quot;:&quot;atc/G03A.md&quot;},{&quot;label&quot;:&quot;Norgestimate&quot;}]"></div>

# Norgestimate

- **generic name:** Norgestimate
- **ATC codes:** `G03AA11`, `G03AB09`, `G03FA13`
- **DrugBank:** [DB00957](https://go.drugbank.com/drugs/DB00957) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Norgestimate is a progestogen used in hormonal contraceptives, combined with an estrogen. It is an approved medicine, available in fixed and sequential progestogen–estrogen combination products.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:57 | 4:40 | 0/0/0 | 0/3/0 | 0/0/0 | 120,363/2,139 | einfracz / qwen3.8-27b | 6 | 0/3 | 6/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Ayala_2016_PD_interaction](drugs/drug_norgestimate/pd_Ayala_2016_PD_interaction.md) | pharmacodynamic interaction ← norgestimate · model not identified | — | Ayala RC et al., Design Features of Drug-Drug Interactio…, Journal of clinical pharmac… (2016) | [10.1002/jcph.637](https://doi.org/10.1002/jcph.637) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Malinen_2019_DHEAS_uptake](drugs/drug_norgestimate/pd_Malinen_2019_DHEAS_uptake.md) | dehydroepiandrosterone sulfate (DHEAS) uptake ← norgestimate · direct Emax (saturable) effect | — | Malinen MM et al., Novel in Vitro Method Reveals Drugs Tha…, Molecular pharmaceutics (2019) | [10.1021/acs.molpharmaceut.8b00966](https://doi.org/10.1021/acs.molpharmaceut.8b00966) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Rabe_2000_5_alpha_reductase_activity](drugs/drug_norgestimate/pd_Rabe_2000_5_alpha_reductase_activity.md) | 5 alpha-reductase activity ← norgestimate · inhibition effect | — | Rabe T et al., Inhibition of skin 5 alpha-reductase by…, Gynecological endocrinology… (2000) | [10.3109/09513590009167685](https://doi.org/10.3109/09513590009167685) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=norgestimate) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | liver | `CYP2B6` substrate, `CYP2C9` substrate, `CYP3A4` inducer/substrate, `UGT1A1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate, `UGT1A1` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `ABCC2` inhibitor | DrugBank actor |
| excretion | liver | `ABCC2` inhibitor | DrugBank actor |
| excretion | small intestine | `ABCC2` inhibitor | DrugBank actor |
| — | prostate gland | `AR` partial agonist | DrugBank actor |

<sub>Actors without a tissue in the table: ESR1 (target), PGR (target), SHBG (binder).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 46 matched, 45 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_8 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Phillips_1990.pdf` | Phillips A et al., Progestational and androgenic receptor…, Contraception (1990) | pd | 4 | [10.1016/0010-7824(90)90039-x](https://doi.org/10.1016/0010-7824(90)90039-x) | [2335104](https://www.ncbi.nlm.nih.gov/pubmed/2335104) | metadata signals extractable PD data (IC50) |
| `Rabe_2000.pdf` | Rabe T et al., Inhibition of skin 5 alpha-reductase by…, Gynecological endocrinology… (2000) | pd | 4 | [10.3109/09513590009167685](https://doi.org/10.3109/09513590009167685) | [11075290](https://www.ncbi.nlm.nih.gov/pubmed/11075290) | metadata signals extractable PD data (IC50) |
| `Ahire_2017.pdf` | Ahire D et al., Metabolite Identification, Reaction Phe…, Drug metabolism and disposi… (2017) | pgx | 7 | [10.1124/dmd.116.073940](https://doi.org/10.1124/dmd.116.073940) | [28283499](https://www.ncbi.nlm.nih.gov/pubmed/28283499) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Chiu_2014.pdf` | Chiu YY et al., Lurasidone drug-drug interaction studie…, Drug metabolism and drug in… (2014) | pgx | 7 | [10.1515/dmdi-2014-0005](https://doi.org/10.1515/dmdi-2014-0005) | [24825095](https://www.ncbi.nlm.nih.gov/pubmed/24825095) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Cicali_2022.pdf` | Cicali B et al., Development of a Translational Exposure…, Clinical pharmacology and t… (2022) | pgx | 7 | [10.1002/cpt.2690](https://doi.org/10.1002/cpt.2690) | [35723889](https://www.ncbi.nlm.nih.gov/pubmed/35723889) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Robertson_2002.pdf` | Robertson P et al., Effect of modafinil on the pharmacokine…, Clinical pharmacology and t… (2002) | pgx | 7 | [10.1067/mcp.2002.121217](https://doi.org/10.1067/mcp.2002.121217) | [11823757](https://www.ncbi.nlm.nih.gov/pubmed/11823757) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Simonson_2004.pdf` | Simonson SG et al., The effect of rosuvastatin on oestrogen…, British journal of clinical… (2004) | pgx | 7 | [10.1046/j.1365-2125.2003.02015.x](https://doi.org/10.1046/j.1365-2125.2003.02015.x) | [14998424](https://www.ncbi.nlm.nih.gov/pubmed/14998424) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Trapnell_2007.pdf` | Trapnell CB et al., Absence of effect of oral rifaximin on…, The Annals of pharmacothera… (2007) | pgx | 7 | [10.1345/aph.1H395](https://doi.org/10.1345/aph.1H395) | [17284510](https://www.ncbi.nlm.nih.gov/pubmed/17284510) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-07T08:56:21.017285+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ahire_2017 | not_relevant | 2 | 0 | The paper focuses on metabolite identification and retrospective DDIs, reporting no pharmacogenomic effects on PK/PD parameters. |
| PGx | Bifano_2014 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction with daclatasvir, not a pharmacogenomic effect (gene variant/genotype). |
| popPK | Carten_2012 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of levonorgestrel (Plan B), not norgestimate. |
| PGx | Chiu_2014 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions with lurasidone, not pharmacogenomic effects of gene variants on norgestimate pharmacokinetics. |
| PGx | Cicali_2022 | not_relevant | 0 | 0 | The paper focuses on CYP3A4 drug-drug interactions and PK modeling for hormonal contraceptives but does not report pharmacogenomic effects or specific data for norgestimate. |
| popPK | Martin_2025 | irrelevant | 0 | 0 | This is an exercise physiology and cognition study examining the acute effects of oral contraceptives, not a pharmacokinetic study, and it reports no PK parameters for norgestimate. |
| popPK | Paris_2015 | irrelevant | 0 | 0 | The paper reports in-vitro receptor binding and functional activity data (EC50/IC50), not pharmacokinetic disposition parameters (CL, V, ka). |
| popPK | Posada_2025 | irrelevant | 3 | 0 | The paper is a PBPK modeling study of dulaglutide's effect on gastric emptying, where norgestimate is a co-administered probe drug; no independent quantitative PK parameters (CL, V, etc.) for norgestimate are reported in the text. |
| PGx | Robertson_2002 | not_relevant | 0 | 0 | The paper investigates a drug-drug interaction between modafinil and ethinyl estradiol/triazolam, not a pharmacogenomic effect on norgestimate. |
| PGx | Shelepova_2005 | not_relevant | 0 | 0 | The paper investigates the effect of norgestimate/EEC on drug-metabolizing enzyme activity, not the effect of a gene variant on the PK/PD of norgestimate. |
| PGx | Simonson_2004 | not_relevant | 0 | 0 | The paper investigates a drug-drug interaction (rosuvastatin effect on norgestimate PK), not a pharmacogenomic effect. |
| PGx | Trapnell_2007 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction with rifaximin in a general healthy population, not a pharmacogenomic effect based on gene variants. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
