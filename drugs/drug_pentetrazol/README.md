<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R07A&quot;,&quot;href&quot;:&quot;atc/R07A.md&quot;},{&quot;label&quot;:&quot;pentetrazol&quot;}]"></div>

# pentetrazol

- **generic name:** pentetrazol
- **ATC codes:** `R07AB03`
- **DrugBank:** [DB13415](https://go.drugbank.com/drugs/DB13415) · **PubChem:** not captured
- **molar mass:** 138.174 g/mol (C6H10N4) — DrugBank
- **groups:** approved, withdrawn

## About

Pentetrazol is a convulsant that acts as a GABA antagonist and was classified as a respiratory stimulant, used to treat breathing problems. It is no longer in use, as it has been withdrawn.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q412391](https://www.wikidata.org/wiki/Q412391) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:11 | 11:00 | 0/0/0 | 1/0/0 | 0/0/0 | 390,471/9,043 | einfracz / qwen3.8-27b | 14 | 1/11 | 14/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Klorig_2019_I50](drugs/drug_pentetrazol/pd_Klorig_2019_I50.md) | I50 ← pentylenetetrazol · stimulation effect | — | Klorig DC et al., Optogenetically-Induced Population Disc…, eNeuro (2019) | [10.1523/eneuro.0229-18.2019](https://doi.org/10.1523/eneuro.0229-18.2019) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 202 matched, 77 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_12 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Jun_1976.pdf` | Jun HW, Pharmacokinetic studies of pentylenetet…, Journal of pharmaceutical s… (1976) | popPK | 8 | [10.1002/jps.2600650720](https://doi.org/10.1002/jps.2600650720) | [957110](https://pubmed.ncbi.nlm.nih.gov/957110) | The study is a relevant pharmacokinetic investigation of pentylenetetrazol (the intended subject) in dogs, reporting qualitative model characteristics and some values (half-life), but most specific quantitative parameters (CL, V, ka, Q) are described without explicit numerical values in the text. |
| `Chang_1993.pdf` | Chang YF et al., Chronic L-lysine develops anti-pentylen…, European journal of pharmac… (1993) | pd | 5 | [10.1016/0014-2999(93)90052-j](https://doi.org/10.1016/0014-2999(93)90052-j) | [8385623](https://www.ncbi.nlm.nih.gov/pubmed/8385623) | metadata signals extractable PD data (EC50) |
| `Cristòfol_1993.pdf` | Cristòfol RM et al., Modulation of noradrenaline release fro…, Brain research (1993) | pd | 5 | [10.1016/0006-8993(93)90990-5](https://doi.org/10.1016/0006-8993(93)90990-5) | [7683957](https://www.ncbi.nlm.nih.gov/pubmed/7683957) | metadata signals extractable PD data (EC50) |
| `Dingemanse_1988.pdf` | Dingemanse J et al., Pharmacokinetic modeling of the anticon…, Journal of pharmacokinetics… (1988) | pd | 5 | [10.1007/BF01062261](https://doi.org/10.1007/BF01062261) | [3418496](https://www.ncbi.nlm.nih.gov/pubmed/3418496) | metadata signals extractable PD data (sigmoid) |
| `Dingemanse_1989.pdf` | Dingemanse J et al., Pharmacokinetic modeling of the anticon…, The Journal of pharmacology… (1989) | pd | 5 | not captured | [2724142](https://www.ncbi.nlm.nih.gov/pubmed/2724142) | metadata signals extractable PD data (Concentration-effect) |
| `Dingemanse_1990.pdf` | Dingemanse J et al., Pharmacodynamics of tolerance developme…, Journal of pharmaceutical s… (1990) | pd | 5 | [10.1002/jps.2600790305](https://doi.org/10.1002/jps.2600790305) | [2338627](https://www.ncbi.nlm.nih.gov/pubmed/2338627) | metadata signals extractable PD data (EC50) |
| `Carter_1997.pdf` | Carter RB et al., Characterization of the anticonvulsant…, The Journal of pharmacology… (1997) | pd | 4 | not captured | [9067315](https://www.ncbi.nlm.nih.gov/pubmed/9067315) | metadata signals extractable PD data (IC50) |
| `Day_1995.pdf` | Day IP et al., Correlation between in vitro and in viv…, Toxicology letters (1995) | pd | 4 | [10.1016/0378-4274(95)80008-2](https://doi.org/10.1016/0378-4274(95)80008-2) | [7762010](https://www.ncbi.nlm.nih.gov/pubmed/7762010) | metadata signals extractable PD data (IC50) |
| `Green_1996.pdf` | Green AR et al., A behavioural and neurochemical study i…, Neuropharmacology (1996) | pd | 4 | [10.1016/s0028-3908(96)00060-3](https://doi.org/10.1016/s0028-3908(96)00060-3) | [9014139](https://www.ncbi.nlm.nih.gov/pubmed/9014139) | metadata signals extractable PD data (IC50) |
| `Hollander-Jansen_1989.pdf` | Hollander-Jansen M et al., Relationship between receptor occupancy…, Pharmaceutical research (1989) | pd | 4 | [10.1023/a:1015901414495](https://doi.org/10.1023/a:1015901414495) | [2552425](https://www.ncbi.nlm.nih.gov/pubmed/2552425) | metadata signals extractable PD data (Emax) |
| `Holtman_1983.pdf` | Holtman JR et al., Increased release of [3H]acetylcholine…, Neuropharmacology (1983) | pd | 4 | [10.1016/0028-3908(83)90031-x](https://doi.org/10.1016/0028-3908(83)90031-x) | [6138729](https://www.ncbi.nlm.nih.gov/pubmed/6138729) | metadata signals extractable PD data (EC50) |
| `Wu_2014.pdf` | Wu C et al., Pharmacodynamics of potassium channel o…, European journal of pharmac… (2014) | pd | 4 | [10.1016/j.ejphar.2014.03.017](https://doi.org/10.1016/j.ejphar.2014.03.017) | [24681057](https://www.ncbi.nlm.nih.gov/pubmed/24681057) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07T18:09:28.516463+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Arends_1994 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of stiripentol in rats using a pentylenetetrazol-induced seizure model, and does not report pharmacokinetic parameters for pentetrazol. |
| popPK | Carter_1997 | irrelevant | 0 | 0 | The study characterizes the pharmacological effects of ganaxolone, using pentylenetetrazol (a similar but distinct chemical) only as a convulsant agent to induce seizures, rather than studying the pharmacokinetics of pentetrazol. |
| popPK | Chang_1991 | irrelevant | 0 | 0 | The study focuses on the neuropharmacological effects of L-lysine and pentylenetetrazol (PTZ) on receptor binding, not the pharmacokinetics of pentetrazol (PTZ). |
| popPK | Chang_1993 | irrelevant | 0 | 0 | The study investigates the anticonvulsant effects of L-lysine on pentylenetetrazol (PTZ)-induced seizures, which is a different drug from pentetrazol, and does not report pharmacokinetic parameters. |
| popPK | Chen_2026 | irrelevant | 0 | 0 | The paper describes an optogenetic model of epilepsy in mice and does not involve the drug pentetrazol or any pharmacokinetic analysis. |
| popPK | Cristòfol_1993 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study of noradrenaline release in rat hippocampal slices using pentylenetetrazol (pentetrazol) as a GABAergic probe, containing no pharmacokinetic parameters for the drug. |
| popPK | Dardano_2026 | irrelevant | 0 | 0 | The paper is a review on gut microbiota and epilepsy and does not contain any pharmacokinetic data for pentetrazol. |
| popPK | Dingemanse_1988 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of oxazepam, using pentylenetetrazol only as a pharmacodynamic agent to measure the anticonvulsant response, not as the subject drug. |
| popPK | Dingemanse_1989 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of phenobarbital, where pentetrazol (pentylenetetrazol) is used only as a convulsant agent to measure effect thresholds, not as the subject drug for PK parameter estimation. |
| popPK | Dingemanse_1990 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of phenobarbital in rats, using pentylenetetrazol (pentetrazol) only as a convulsant agent for pharmacodynamic testing, not as the subject drug. |
| popPK | Donneger_2026 | irrelevant | 0 | 0 | The paper studies KCC2 enhancers (PCPZ and CLP-257) in epilepsy models and contains no pharmacokinetic data for pentetrazol. |
| popPK | EFSA_2019 | irrelevant | 0 | 0 | The paper discusses quinolizidine alkaloids in lupins and does not mention pentetrazol or provide any pharmacokinetic parameters for it. |
| popPK | EFSA_2025 | irrelevant | 0 | 0 | The paper concerns the toxicology and food occurrence of THC isomers and does not mention pentetrazol or provide its pharmacokinetic parameters. |
| PGx | Eller_2024 | not_relevant | 0 | 0 | The paper investigates ECHS1 deficiency and pentylenetetrazol (PTZ) seizure susceptibility, but does not report pharmacokinetic or pharmacodynamic parameters of a drug (PTZ is a convulsant tool compound, not a therapeutic drug in this context, and no PK/PD modeling or specific drug effect quantification is performed). |
| popPK | Gaudreault_1995 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of CL 284,846, using pentetrazol (PTZ) only as a diagnostic agent to induce seizures for anticonvulsant testing. |
| popPK | Gaudreault_1996 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of triazolam in rats, where pentetrazol is used solely as a diagnostic agent to induce seizures, not as the subject drug. |
| popPK | Hawkinson_1998 | irrelevant | 0 | 0 | The paper studies neuroactive steroids, and pentetrazol (pentylenetetrazol) is used only as a tool to induce seizures in mice, not as the subject of pharmacokinetic analysis. |
| popPK | Hollander-Jansen_1989 | irrelevant | 0 | 0 | The study investigates flunitrazepam pharmacodynamics and receptor occupancy in rats, using pentylenetetrazol (PTZ) only as a seizure-inducing probe, not as the subject drug for PK analysis. |
| popPK | Holtman_1983 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on acetylcholine release and mentions pentylenetetrazol only as a negative control for convulsant action, not for pharmacokinetic parameter estimation. |
| popPK | Ireland_2026 | irrelevant | 0 | 0 | The study uses pentetrazole (pentylenetetrazole) as a positive control for neurotoxicity screening in planarians and does not report any pharmacokinetic parameters for the drug. |
| popPK | Jun_1976 | relevant | 8 | 2 | The study is a relevant pharmacokinetic investigation of pentylenetetrazol (the intended subject) in dogs, reporting qualitative model characteristics and some values (half-life), but most specific quantitative parameters (CL, V, ka, Q) are described without explicit numerical values in the text. |
| popPK | Kaminski_2006 | irrelevant | 0 | 0 | The paper studies the mechanism of action of androstenol on GABA receptors in vitro and in mice, and pentylenetetrazol is only mentioned as a model for electroshock, not as the subject drug. |
| popPK | Kecskeméti_2005 | irrelevant | 0 | 0 | The paper studies fluoxetine/norfluoxetine using pentylenetetrazol (PTZ) as a seizure-inducing agent, not pentetrazol (the drug), and contains no PK parameters. |
| popPK | Klorig_2019 | irrelevant | 0 | 0 | The paper investigates optogenetic seizure thresholds in mice using pentylenetetrazol (PTZ) as a comparator, not pentetrazol, and reports no pharmacokinetic parameters. |
| popPK | Lani_2026 | irrelevant | 0 | 0 | The paper is a review of the nutraceutical properties of date palm (Phoenix dactylifera) and does not study pentetrazol or report any pharmacokinetic parameters for it. |
| popPK | Lappin_2005 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation using pentylenetetrazol as a tool to induce epileptiform activity, not a pharmacokinetic study of pentetrazol. |
| popPK | Louis_1982 | irrelevant | 0 | 0 | The paper is a pharmacodynamic study of beta-adrenoceptor antagonists on convulsions induced by the different drug pentylenetetrazol, not a pharmacokinetic study of pentetrazol. |
| popPK | Muraki_1984 | irrelevant | 0 | 0 | The paper investigates the receptor binding mechanisms of pyrolysate mutagens, with pentetrazol used only as a comparator for convulsions, and no pharmacokinetic parameters are reported. |
| popPK | Nieoczym_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and anticonvulsant effects of 6-gingerol, using pentylenetetrazole (PTZ) only as a seizure-inducing agent, not as the subject drug. |
| popPK | Pais_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and neurotoxicity of cefepime, not pentetrazol. |
| PGx | Qiu_2022 | not_relevant | 0 | 0 | The paper reports that pentylenetetrazol induces ADAMTS1 expression (a molecular/biological response), but does not report changes in the pharmacokinetic or pharmacodynamic parameters of pentylenetetrazol itself based on genotype. |
| popPK | Rosin_1981 | irrelevant | 0 | 0 | The paper studies polychlorinated biphenyls (PCBs) in mice, and pentetrazol is only mentioned as a comparator agent for inducing convulsions, with no PK parameters reported for pentetrazol. |
| PGx | Schlesinger_1968 | not_relevant | 0 | 0 | The drug is pentylenetetrazol, not pentetrazol. |
| popPK | Shen_1992 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of stiripentol, using pentylenetetrazol (pentetrazol) only as a model agent to induce seizures in rats, not as the subject drug for PK analysis. |
| popPK | Simiand_1993 | irrelevant | 0 | 0 | Pentetrazol is used only as a diagnostic agent to induce seizures in a psychopharmacological profile study for SR 57746A, with no pharmacokinetic parameters reported for pentetrazol itself. |
| popPK | Sun_2026 | irrelevant | 0 | 0 | The paper studies the drug α-asaronol, using pentylenetetrazol (likely the intended subject) only as a tool to induce seizures, and does not report PK parameters for pentylenetetrazol. |
| popPK | Surendran_2021 | irrelevant | 0 | 0 | The paper is a review of β-myrcene, a different drug, and does not contain pharmacokinetic data for pentetrazol. |
| popPK | Upasani_1997 | irrelevant | 0 | 0 | The paper is a structure-activity relationship study of neuroactive steroids using pentylenetetrazol (PTZ) only as a diagnostic agent for the anticonvulsant activity model, not as the drug being studied for pharmacokinetics. |
| popPK | Wang_2011 | irrelevant | 0 | 0 | The study is a pharmacological investigation of GABA(A) receptor modulation in mouse brain slices, and pentylenetetrazol is used only as a convulsant challenge, not as the subject of a pharmacokinetic analysis. |
| popPK | Wood_1984 | irrelevant | 0 | 0 | The study focuses on the behavioral effects of toluene, using pentetrazol (pentylenetetrazol) only as a convulsant agent, and does not report PK parameters for pentetrazol. |
| popPK | Wu_2011 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of tinnitus drugs using pentylenetetrazol as a proconvulsant agent, and it reports no pharmacokinetic parameters for pentetrazol. |
| popPK | Wu_2014 | irrelevant | 0 | 0 | Pentetrazol is used as a convulsant agent to induce hyperactivity in an in vitro neuronal model, not as a subject of pharmacokinetic analysis. |
| popPK | Yin_2023 | irrelevant | 0 | 0 | The paper reports population PK parameters for soticlestat, not pentetrazol. |
| popPK | Zemheri-Navruz_2026 | irrelevant | 0 | 0 | The paper studies acrylamide toxicity and vanillic acid protection in Drosophila, with no mention of pentetrazol or its pharmacokinetics. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
