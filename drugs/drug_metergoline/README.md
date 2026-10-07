<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G02C&quot;,&quot;href&quot;:&quot;atc/G02C.md&quot;},{&quot;label&quot;:&quot;metergoline&quot;}]"></div>

# metergoline

- **generic name:** metergoline
- **ATC codes:** `G02CB05`
- **DrugBank:** [DB13520](https://go.drugbank.com/drugs/DB13520) · **PubChem:** [CID 28693](https://pubchem.ncbi.nlm.nih.gov/compound/28693)
- **molar mass:** 403.526 g/mol (C25H29N3O2) — DrugBank
- **groups:** approved

## About

Metergoline is a prolactin-lowering medicine, acting as a dopamine agonist and serotonin antagonist, used to treat conditions with high prolactin levels. It has been approved as a medicine and is classified as a prolactin inhibitor, though it is not widely used today.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6823517](https://www.wikidata.org/wiki/Q6823517) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:19 | 3:15 | 0/0/0 | 1/0/0 | 0/0/0 | 121,934/3,271 | einfracz / qwen3.8-27b | 2 | 0/0 | 1/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Pauwels_1996_cell_growth](drugs/drug_metergoline/pd_Pauwels_1996_cell_growth.md) | cell growth ← metergoline · direct sigmoid Emax (Hill) effect | — | Pauwels PJ et al., Promotion of cell growth by stimulation…, Naunyn-Schmiedeberg's archi… (1996) | [10.1007/BF00178713](https://doi.org/10.1007/BF00178713) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=metergoline) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: HTR1B (target), HTR1D (target), HTR1E (target), HTR1F (target), HTR2A (target), HTR2B (target), HTR2C (target), HTR5A (target), SCN2A (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 118 matched, 61 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_17 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bard_1993.pdf` | Bard JA et al., Cloning of a novel human serotonin rece…, The Journal of biological c… (1993) | pd | 4 | not captured | [8226867](https://www.ncbi.nlm.nih.gov/pubmed/8226867) | metadata signals extractable PD data (EC50) |
| `Bouhelal_1988.pdf` | Bouhelal R et al., 5-HT1B receptors are negatively coupled…, European journal of pharmac… (1988) | pd | 4 | [10.1016/0014-2999(88)90799-6](https://doi.org/10.1016/0014-2999(88)90799-6) | [2971554](https://www.ncbi.nlm.nih.gov/pubmed/2971554) | metadata signals extractable PD data (EC50) |
| `Choppin_1995.pdf` | Choppin A et al., Presence of vasoconstrictor 5HT1-like r…, British journal of pharmaco… (1995) | pd | 4 | [10.1111/j.1476-5381.1995.tb13228.x](https://doi.org/10.1111/j.1476-5381.1995.tb13228.x) | [7881730](https://www.ncbi.nlm.nih.gov/pubmed/7881730) | metadata signals extractable PD data (EC50) |
| `Cloëz-Tayarani_1992.pdf` | Cloëz-Tayarani I et al., Inhibition of [3H] gamma-aminobutyric a…, Fundamental & clinical phar… (1992) | pd | 4 | [10.1111/j.1472-8206.1992.tb00128.x](https://doi.org/10.1111/j.1472-8206.1992.tb00128.x) | [1292966](https://www.ncbi.nlm.nih.gov/pubmed/1292966) | metadata signals extractable PD data (IC50) |
| `Connell_1989.pdf` | Connell LA et al., 5-Hydroxytryptamine depolarizes neonata…, Neuropharmacology (1989) | pd | 4 | [10.1016/0028-3908(89)90142-1](https://doi.org/10.1016/0028-3908(89)90142-1) | [2755565](https://www.ncbi.nlm.nih.gov/pubmed/2755565) | metadata signals extractable PD data (EC50) |
| `Cossery_1990.pdf` | Cossery JM et al., Characterization of two distinct 5-HT r…, Neuroscience letters (1990) | pd | 4 | [10.1016/0304-3940(90)90722-l](https://doi.org/10.1016/0304-3940(90)90722-l) | [1689472](https://www.ncbi.nlm.nih.gov/pubmed/1689472) | metadata signals extractable PD data (EC50) |
| `Crider_2003.pdf` | Crider JY et al., Pharmacological characterization of a s…, Investigative ophthalmology… (2003) | pd | 4 | [10.1167/iovs.02-1292](https://doi.org/10.1167/iovs.02-1292) | [14578406](https://www.ncbi.nlm.nih.gov/pubmed/14578406) | metadata signals extractable PD data (EC50) |
| `Fiorella_1995.pdf` | Fiorella D et al., The role of the 5-HT2A and 5-HT2C recep…, Psychopharmacology (1995) | pd | 4 | [10.1007/BF02246074](https://doi.org/10.1007/BF02246074) | [8584617](https://www.ncbi.nlm.nih.gov/pubmed/8584617) | metadata signals extractable PD data (IC50) |
| `Kitazawa_1998.pdf` | Kitazawa T et al., Involvement of 5-hydroxytryptamine7 rec…, British journal of pharmaco… (1998) | pd | 4 | [10.1038/sj.bjp.0701583](https://doi.org/10.1038/sj.bjp.0701583) | [9489604](https://www.ncbi.nlm.nih.gov/pubmed/9489604) | metadata signals extractable PD data (EC50) |
| `Limberger_1991.pdf` | Limberger N et al., Species differences in presynaptic sero…, Naunyn-Schmiedeberg's archi… (1991) | pd | 4 | [10.1007/BF00179039](https://doi.org/10.1007/BF00179039) | [1852219](https://www.ncbi.nlm.nih.gov/pubmed/1852219) | metadata signals extractable PD data (EC50) |
| `Maura_1998.pdf` | Maura G et al., Glutamate release in human cerebral cor…, British journal of pharmaco… (1998) | pd | 4 | [10.1038/sj.bjp.0701581](https://doi.org/10.1038/sj.bjp.0701581) | [9484853](https://www.ncbi.nlm.nih.gov/pubmed/9484853) | metadata signals extractable PD data (EC50) |
| `Newman_1994.pdf` | Newman ME, Serotonin inhibition of adenylate cycla…, Biochemical pharmacology (1994) | pd | 4 | [10.1016/0006-2952(94)90451-0](https://doi.org/10.1016/0006-2952(94)90451-0) | [7980635](https://www.ncbi.nlm.nih.gov/pubmed/7980635) | metadata signals extractable PD data (EC50) |
| `Perren_1991.pdf` | Perren MJ et al., Vascular 5-HT1-like receptors that medi…, British journal of pharmaco… (1991) | pd | 4 | [10.1111/j.1476-5381.1991.tb12152.x](https://doi.org/10.1111/j.1476-5381.1991.tb12152.x) | [1675143](https://www.ncbi.nlm.nih.gov/pubmed/1675143) | metadata signals extractable PD data (EC50) |
| `Romero_2006.pdf` | Romero G et al., Reanalysis of constitutively active rat…, Naunyn-Schmiedeberg's archi… (2006) | pd | 4 | [10.1007/s00210-006-0093-y](https://doi.org/10.1007/s00210-006-0093-y) | [16967291](https://www.ncbi.nlm.nih.gov/pubmed/16967291) | metadata signals extractable PD data (Emax) |
| `Schoeffter_1988.pdf` | Schoeffter P et al., The 5-hydroxytryptamine 5-HT1D receptor…, Naunyn-Schmiedeberg's archi… (1988) | pd | 4 | [10.1007/BF00175784](https://doi.org/10.1007/BF00175784) | [3216894](https://www.ncbi.nlm.nih.gov/pubmed/3216894) | metadata signals extractable PD data (EC50) |
| `Sumner_1990.pdf` | Sumner MJ et al., Sumatriptan (GR43175) inhibits cyclic-A…, British journal of pharmaco… (1990) | pd | 4 | [10.1111/j.1476-5381.1990.tb14682.x](https://doi.org/10.1111/j.1476-5381.1990.tb14682.x) | [2158369](https://www.ncbi.nlm.nih.gov/pubmed/2158369) | metadata signals extractable PD data (EC50) |
| `Vicentini_1996.pdf` | Vicentini LM et al., Evidence for receptor subtype cross-tal…, European journal of pharmac… (1996) | pd | 4 | [10.1016/s0014-2999(96)00812-6](https://doi.org/10.1016/s0014-2999(96)00812-6) | [9016944](https://www.ncbi.nlm.nih.gov/pubmed/9016944) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07T08:19:12.673770+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adham_1993 | irrelevant | 0 | 0 | This is an in-vitro pharmacological study of receptor coupling, not a pharmacokinetic study, and metergoline is used only as a probe ligand. |
| popPK | Al-Humayyd_1985 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of ATP release from guinea-pig nerves where metergoline is used only as a pharmacological modulator, not as the subject of a pharmacokinetic analysis. |
| popPK | Bard_1993 | irrelevant | 0 | 0 | The paper is a molecular biology study characterizing the 5-HT7 receptor, using metergoline only as a probe ligand in binding assays, with no pharmacokinetic parameters reported. |
| popPK | Bax_1993 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of 5-HT receptors in isolated human coronary arteries, where metergoline is used only as a receptor antagonist, with no pharmacokinetic data reported. |
| popPK | Bouhelal_1988 | irrelevant | 0 | 0 | The study investigates receptor pharmacology (Ki values) in rat tissue, not the pharmacokinetic disposition parameters (CL, V, t1/2) of metergoline. |
| popPK | Choppin_1995 | irrelevant | 0 | 0 | no_text gate: only 111 chars of text extracted (&lt; 400) |
| popPK | Connell_1989 | irrelevant | 0 | 0 | The study is an electrophysiological/pharmacological investigation of 5-HT receptors in neonatal rat spinal cord, where metergoline is used only as an antagonist agent, and no pharmacokinetic parameters are reported. |
| popPK | Cossery_1990 | irrelevant | 0 | 0 | The study is an in vitro receptor pharmacology study where metergoline is used solely as a competitive antagonist to characterize 5-HT receptors, not as the subject of a pharmacokinetic analysis. |
| popPK | Costall_1988 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment in mice where metergoline is used as a comparative antagonist, with no pharmacokinetic parameters reported. |
| popPK | Crider_2003 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological characterization of serotonin receptor binding and signaling, not a pharmacokinetic study of metergoline. |
| popPK | Dumuis_1988 | irrelevant | 0 | 0 | This is an in-vitro pharmacological study characterizing 5-HT receptors using metergoline as an antagonist, not a pharmacokinetic study. |
| popPK | Dumuis_1988_2 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study of 5-HT1A receptors using metergoline as a test compound, not a pharmacokinetic study of metergoline's disposition. |
| popPK | Elliott_1992 | irrelevant | 0 | 0 | The paper is an in vitro electrophysiology study on neonatal rat motoneurons where metergoline is used as a pharmacological antagonist, not as the subject of pharmacokinetic analysis. |
| popPK | Glusa_2000 | irrelevant | 0 | 0 | This is a pharmacodynamic study on 5-HT receptor antagonism in pig pulmonary artery, where metergoline is used only as a comparator antagonist, not as the subject of a pharmacokinetic analysis. |
| popPK | Ichida_1983 | irrelevant | 0 | 0 | The paper is a binding study in rat uterus where metergoline is used only as a ligand to inhibit receptor binding, not a pharmacokinetic study of metergoline disposition. |
| popPK | Inoue_2003 | irrelevant | 0 | 0 | The study characterizes 5-HT7 receptor pharmacology in porcine oviducts and metergoline is used only as an antagonist probe, with no PK parameters reported. |
| popPK | Kitazawa_1998 | irrelevant | 0 | 0 | no_text gate: only 118 chars of text extracted (&lt; 400) |
| popPK | Kusumi_1990 | irrelevant | 0 | 0 | The paper is a pharmacological study using metergoline as an antagonist in rat hippocampal slices, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Limberger_1991 | irrelevant | 0 | 0 | The study is an in vitro pharmacological investigation of serotonin autoreceptors where metergoline is used as a tool antagonist, not as a subject for pharmacokinetic analysis. |
| popPK | Maura_1998 | irrelevant | 0 | 0 | no_text gate: only 113 chars of text extracted (&lt; 400) |
| popPK | Newman_1994 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of serotonin receptors in platelet membranes, containing no pharmacokinetic data for metergoline. |
| popPK | Pauwels_1996 | irrelevant | 0 | 0 | This is an in-vitro pharmacological study measuring receptor affinity (EC50) for 5-HT1D receptors, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Pauwels_1996_2 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of 5-HT1D receptor agonism using cell lines, not a pharmacokinetic study reporting disposition parameters for metergoline. |
| popPK | Perren_1991 | irrelevant | 0 | 0 | no_text gate: only 189 chars of text extracted (&lt; 400) |
| popPK | Romero_2006 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study examining the inverse agonist properties of metergoline on 5-HT7 receptors, not a pharmacokinetic study of metergoline disposition. |
| popPK | Roth_1986 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of 5-HT2 receptors in rat aorta, not a pharmacokinetic study of metergoline. |
| popPK | Schoeffter_1988 | irrelevant | 0 | 0 | This is a mechanistic in-vitro study of 5-HT1D receptor coupling in calf brain tissue where metergoline is used only as a pharmacological ligand/comparator, with no pharmacokinetic data reported. |
| popPK | Schoeffter_1988_2 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study measuring receptor binding/efficacy (EC50 for adenylate cyclase inhibition), not a pharmacokinetic study reporting disposition parameters. |
| popPK | Sumner_1990 | irrelevant | 0 | 0 | no_text gate: only 85 chars of text extracted (&lt; 400) |
| popPK | Vicentini_1996 | irrelevant | 0 | 0 | The study is a mechanistic receptor pharmacology investigation using metergoline as a non-selective antagonist, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Zgombick_1996 | irrelevant | 0 | 0 | The paper is an in vitro pharmacological study of 5-HT1D receptor subtypes, not a pharmacokinetic study reporting disposition parameters for metergoline. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
