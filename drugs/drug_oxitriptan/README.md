<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;oxitriptan&quot;}]"></div>

# oxitriptan

- **generic name:** oxitriptan
- **ATC codes:** `N06AX01`
- **DrugBank:** [DB02959](https://go.drugbank.com/drugs/DB02959)
- **groups:** approved, investigational, nutraceutical, withdrawn

## About

**Description.** 5-Hydroxytryptophan (5-HTP), also known as oxitriptan (INN), is a naturally occurring amino acid and metabolic intermediate in the synthesis of serotonin and melatonin. 5-HTP is sold over-the-counter in the United Kingdom, United States and Canada as a dietary supplement for use as an antidepressant, appetite suppressant, and sleep aid, and is also marketed in many European countries for the indication of major depression under trade names like Cincofarm, Levothym, Levotonine, Oxyfan, Telesol, Tript-OH, and Triptum. Several double-blind placebo-controlled clinical trials have demonstrated the effectiveness of 5-HTP in the treatment of depression, though a lack of high quality studies has been noted. More study is needed to determine efficacy in treating depression.

**Indication.** For use as an antidepressant, appetite suppressant, and sleep aid.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-24 03:31 | 35:20 | 0/0/0 | 0/0/0 | 0/0/0 | 137,658/5,275 | ollama / qwen3.8:27b-mtp-q8_0 | 8 | 3/5 | 6/2 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=oxitriptan) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | <sub>“…vitamin B6 dependent reaction in nervous tissue and in the liver.…”</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 105 matched, 61 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hao_2011.pdf` | Hao K et al., Mechanism-based pharmacokinetic-pharmac…, European journal of pharmac… (2011) | pd | 5 | [10.1016/j.ejps.2011.06.014](https://doi.org/10.1016/j.ejps.2011.06.014) | [21740969](https://www.ncbi.nlm.nih.gov/pubmed/21740969) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Kreilgaard_2008.pdf` | Kreilgaard M et al., Prediction of clinical response based o…, British journal of pharmaco… (2008) | pd | 5 | [10.1038/bjp.2008.243](https://doi.org/10.1038/bjp.2008.243) | [18552871](https://www.ncbi.nlm.nih.gov/pubmed/18552871) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Bischoff_1988.pdf` | Bischoff S et al., Interaction of the D1 receptor antagoni…, Journal of receptor research (1988) | pd | 4 | [10.3109/10799898809048981](https://doi.org/10.3109/10799898809048981) | [3290470](https://www.ncbi.nlm.nih.gov/pubmed/3290470) | metadata signals extractable PD data (IC50) |
| `Keithahn_2005.pdf` | Keithahn C et al., 5-hydroxytryptophan is a more potent in…, Journal of pineal research (2005) | pd | 4 | [10.1111/j.1600-079X.2004.00177.x](https://doi.org/10.1111/j.1600-079X.2004.00177.x) | [15617538](https://www.ncbi.nlm.nih.gov/pubmed/15617538) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-24T03:26:36.526603+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Andrzejewski_2025 | irrelevant | 0 | 0 | The paper studies respiratory physiology in a Parkinson's disease rat model using fluoxetine and 5-HTP, and does not involve oxitriptan or report pharmacokinetic parameters. |
| PD | Andrzejewski_2025 | not_relevant | 0 | 0 | The paper studies fluoxetine and 5-HTP, not oxitriptan, and reports physiological responses to hypercapnia rather than a pharmacokinetic/pharmacodynamic exposure-response relationship. |
| popPK | Bischoff_1988 | irrelevant | 0 | 0 | The paper studies the receptor binding and biochemical effects of SCH 23390, not the pharmacokinetics of oxitriptan. |
| PD | Bischoff_1988 | not_relevant | 0 | 0 | The paper studies SCH 23390, not oxitriptan, and reports receptor binding affinities (IC50) rather than a pharmacodynamic exposure-response relationship for the target drug. |
| popPK | Budhoo_1994 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study on 5-HT4 receptors in rat colon and does not report pharmacokinetic parameters for oxitriptan. |
| popPK | Budhoo_1996 | irrelevant | 0 | 0 | The paper is a mechanistic study of 5-HT receptor-mediated chloride transport in rat colon and does not report pharmacokinetic parameters for oxitriptan. |
| PD | Budhoo_1996 | not_relevant | 0 | 0 | The paper investigates 5-HT receptor pharmacology in rat distal colon and does not mention oxitriptan or report any exposure-response or dose-response data for it. |
| popPK | Carlsson_1977 | irrelevant | 0 | 0 | The paper studies dopamine receptor interactions in rat brain and does not involve oxitriptan or report pharmacokinetic parameters. |
| PD | Carlsson_1977 | not_relevant | 0 | 0 | The paper studies haloperidol and apomorphine, not oxitriptan. |
| popPK | Darmani_1996 | irrelevant | 0 | 0 | The paper is a behavioral pharmacology study in mice focusing on cocaine and serotonin receptors, and does not involve oxitriptan or report any pharmacokinetic parameters. |
| PD | Darmani_1996 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of cocaine and other reuptake inhibitors, not oxitriptan. |
| popPK | Devadoss_2010 | irrelevant | 0 | 0 | The paper studies a different drug (QCF-3) and focuses on behavioral pharmacology, not the pharmacokinetics of oxitriptan. |
| PD | Devadoss_2010 | not_relevant | 3 | 2 | The paper reports a qualitative dose-response study in animal models (0.5-4 mg/kg) but does not provide numeric PD parameters (e.g., ED50, Emax) or concentration-effect data for oxitriptan (the study is on QCF-3). |
| popPK | Doble_1992 | irrelevant | 0 | 0 | The paper characterizes the pharmacology of RP 62203, not oxitriptan, and contains no PK parameters for the target drug. |
| PD | Doble_1992 | not_relevant | 0 | 0 | The paper characterizes RP 62203, not oxitriptan, and reports pharmacological binding and functional assay data (Ki, IC50, ED50) rather than a pharmacokinetic-pharmacodynamic (PK/PD) exposure-response relationship for the target drug. |
| popPK | Gao_2020 | irrelevant | 0 | 0 | The paper investigates the antinociceptive effects of isorhynchophylline in a mouse model of neuropathic pain and does not mention oxitriptan or report any pharmacokinetic parameters. |
| PD | Gao_2020 | not_relevant | 0 | 0 | The paper investigates isorhynchophylline, not oxitriptan, and does not report any pharmacodynamic parameters for oxitriptan. |
| PGx | Gao_2025 | not_relevant | 0 | 0 | The paper focuses on the biosynthesis of 5-HTP using engineered probiotics and does not involve oxitriptan or pharmacogenomic effects. |
| popPK | Gijsman_2002 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of 5-hydroxytryptophan (5-HTP), not oxitriptan. |
| PD | Gijsman_2002 | not_relevant | 0 | 0 | The paper studies 5-hydroxytryptophan (5-HTP) and carbidopa, not oxitriptan. |
| popPK | Gomes_1998 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of L-DOPA and L-5-HTP transport in opossum kidney cells and does not involve oxitriptan or report pharmacokinetic parameters. |
| PD | Gomes_1998 | not_relevant | 0 | 0 | The paper studies the uptake kinetics of L-DOPA and L-5-HTP in opossum kidney cells and does not mention oxitriptan or report any pharmacodynamic exposure-response relationship for it. |
| popPK | Green_1983 | irrelevant | 0 | 0 | The paper is a behavioral pharmacology study in rodents focusing on antidepressant treatments and receptor mechanisms, with no mention of oxitriptan or pharmacokinetic parameters. |
| PD | Green_1983 | not_relevant | 0 | 0 | The paper does not mention oxitriptan and focuses on the effects of ECS, desmethylimipramine, and clenbuterol on 5-HT and dopamine behaviors. |
| popPK | Guan_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of 5-hydroxytryptophan (5-HTP), not oxitriptan. |
| popPK | Handa_2021 | irrelevant | 0 | 0 | The paper focuses on thyroid peroxidase inhibition and PBPK modeling for propylthiouracil and methimazole, with no mention of oxitriptan. |
| PD | Handa_2021 | not_relevant | 0 | 0 | The paper focuses on a computational PBPK/PD framework for thyroid hormones using propylthiouracil, methimazole, and ethylenethiourea, and does not mention or analyze oxitriptan. |
| popPK | Hao_2011 | irrelevant | 0 | 0 | no_text gate: only 141 chars of text extracted (&lt; 400) |
| PD | Hao_2011 | not_relevant | 0 | 0 | The paper focuses on ginsenoside Rb1, not oxitriptan. |
| popPK | Hartvig_1995 | irrelevant | 0 | 0 | The study investigates serotonin synthesis in monkey brains using PET and does not involve the drug oxitriptan or its pharmacokinetics. |
| popPK | Hegde_1995 | irrelevant | 0 | 0 | The paper studies RS 39604, a 5-HT4 receptor antagonist, and does not involve oxitriptan or report pharmacokinetic parameters for it. |
| popPK | Jacobs_2010 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of 5-HTP on brain metabolites using MRS and does not report pharmacokinetic parameters for oxitriptan. |
| PD | Jacobs_2010 | not_relevant | 0 | 0 | The paper studies the pharmacodynamics of 5-HTP (serotonin precursor), not oxitriptan. |
| PGx | Jacobsen_2008 | not_relevant | 0 | 0 | The paper studies SSRIs (citalopram, paroxetine, fluoxetine) in mice, not oxitriptan. |
| popPK | Jacobsen_2016 | irrelevant | 0 | 0 | The paper studies 5-HTP (5-hydroxytryptophan) in mice, not oxitriptan, and does not report PK parameters for the target drug. |
| PD | Jacobsen_2016 | not_relevant | 0 | 0 | The paper studies 5-hydroxytryptophan (5-HTP) and fluoxetine, not oxitriptan, and does not report specific numeric PD parameters for oxitriptan. |
| popPK | Jacobsen_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of 5-HTP, not oxitriptan. |
| PD | Jacobsen_2019 | not_relevant | 0 | 0 | The paper studies 5-hydroxytryptophan (5-HTP) and fluoxetine, not oxitriptan, and does not report specific numeric PD parameters for oxitriptan. |
| popPK | Keithahn_2005 | irrelevant | 0 | 0 | no_text gate: only 100 chars of text extracted (&lt; 400) |
| PD | Keithahn_2005 | not_relevant | 0 | 0 | The paper discusses the antioxidant properties of 5-hydroxytryptophan, melatonin, and vitamin C, and does not mention oxitriptan or report any pharmacodynamic or exposure-response data. |
| popPK | Krams_2025 | irrelevant | 0 | 0 | The paper studies the behavioral effects of escitalopram and serotonin modulators in Drosophila, not the pharmacokinetics of oxitriptan. |
| PD | Krams_2025 | not_relevant | 0 | 0 | The paper studies Drosophila behavior and does not mention oxitriptan or report any pharmacodynamic parameters. |
| popPK | Kreilgaard_2008 | irrelevant | 0 | 0 | no_text gate: only 130 chars of text extracted (&lt; 400) |
| PD | Kreilgaard_2008 | not_relevant | 0 | 0 | The paper focuses on 5-hydroxytryptamine reuptake inhibitors in mice and does not mention oxitriptan or provide any PD parameters for it. |
| PGx | Li_2025 | not_relevant | 0 | 0 | The paper focuses on the directed evolution of tryptophan hydroxylase for industrial biosynthesis and does not involve oxitriptan or human pharmacogenomics. |
| popPK | Liang_2004 | irrelevant | 0 | 0 | The study investigates the antinociceptive effects of 5-HTP and calcium channel blockers in mice and does not report pharmacokinetic parameters for oxitriptan. |
| PD | Liang_2004 | not_relevant | 0 | 0 | The paper investigates 5-HTP and calcium channel blockers, not oxitriptan. |
| popPK | Lubberink_2020 | irrelevant | 0 | 0 | The study focuses on the PET pharmacokinetics of the radiotracer [11C]5-HTP, not the drug oxitriptan. |
| popPK | Meltzer_1981 | irrelevant | 0 | 0 | The paper studies the effect of antidepressants on rat serum prolactin levels and does not involve oxitriptan or pharmacokinetic parameters. |
| PD | Meltzer_1981 | not_relevant | 0 | 0 | The paper does not mention oxitriptan and focuses on the effects of other antidepressants, lithium, and ECT on rat prolactin levels. |
| popPK | Mena_2024 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics and pharmacodynamics of escitalopram, and oxitriptan is only mentioned as a synonym for 5-HTP in a variable description table without any specific PK parameters reported for it. |
| PD | Mena_2024 | not_relevant | 0 | 0 | The paper focuses on the pharmacodynamics of escitalopram (an SSRI) on serotonin transporters, not oxitriptan (5-HTP), which is only mentioned as a metabolic intermediate in the model variable definitions. |
| popPK | Mitchell_2009 | irrelevant | 0 | 0 | The paper studies 5-hydroxyindalpine and peristalsis in mouse colon, not the pharmacokinetics of oxitriptan. |
| PD | Mitchell_2009 | not_relevant | 0 | 0 | not captured |
| PGx | Mohamed_2026 | not_relevant | 0 | 0 | The paper discusses AADC deficiency and enzyme activity biomarkers, but does not mention oxitriptan or its pharmacokinetics/pharmacodynamics. |
| popPK | Moreau_2024 | irrelevant | 0 | 0 | The paper focuses on nicotine pharmacokinetics and QIVIVE for tobacco products, not oxitriptan. |
| PD | Moreau_2024 | not_relevant | 0 | 0 | The paper focuses on QIVIVE for nicotine delivery products and does not report any pharmacodynamic or exposure-response data for oxitriptan. |
| popPK | Naso_2020 | irrelevant | 0 | 0 | The paper studies a copper complex of 5-hydroxytryptophan, not oxitriptan, and reports no pharmacokinetic parameters. |
| PD | Naso_2020 | not_relevant | 0 | 0 | The paper studies a copper complex of 5-hydroxytryptophan, not oxitriptan, and reports only a single IC50 value for a different compound. |
| popPK | Pranzatelli_1986 | irrelevant | 0 | 0 | The paper is a neuropharmacological study on serotonin depletion in rats and does not involve oxitriptan or pharmacokinetic parameters. |
| PD | Pranzatelli_1986 | not_relevant | 3 | 2 | The paper describes a dose-response shift for 5-HTP in a DHT-lesioned rat model, but it does not report specific numeric PD parameters (like EC50 or Emax) or a formal PK/PD model for oxitriptan. |
| popPK | Pranzatelli_1993 | irrelevant | 0 | 0 | The paper is a neuropharmacological study on serotonin receptor binding in rat brains and does not contain any pharmacokinetic data for oxitriptan. |
| PD | Pranzatelli_1993 | not_relevant | 0 | 0 | The paper investigates receptor binding and density changes following 5,7-DHT lesions in rats and does not report any pharmacodynamic or exposure-response data for oxitriptan. |
| popPK | Pranzatelli_1994 | irrelevant | 0 | 0 | The paper studies serotonin receptor binding and behavior in a DDT model and does not report pharmacokinetic parameters for oxitriptan. |
| PD | Pranzatelli_1994 | not_relevant | 0 | 0 | The paper studies the mechanism of p,p'-DDT toxicity and the effect of 5,7-DHT lesions on DDT-induced myoclonus; it does not report a pharmacodynamic or exposure-response relationship for oxitriptan. |
| popPK | Ruiz_2020 | irrelevant | 0 | 0 | The paper focuses on PBPK modeling of benzene, toluene, ethylbenzene, and xylenes (BTEX) and does not involve oxitriptan. |
| PD | Ruiz_2020 | not_relevant | 0 | 0 | The paper focuses on PBPK modeling and toxicogenomics for benzene, toluene, ethylbenzene, and xylenes (BTEX) mixtures and does not mention oxitriptan or report any pharmacodynamic parameters. |
| PGx | Rysz_2016 | not_relevant | 0 | 0 | The paper investigates the effect of 5-HTP on liver CYP450 expression and does not mention oxitriptan or any pharmacogenomic variant. |
| PGx | Sarris_2019 | not_relevant | 0 | 0 | The paper studies nutraceuticals for depression and does not mention oxitriptan or its pharmacokinetics/pharmacodynamics. |
| popPK | Schipper_1990 | irrelevant | 0 | 0 | The paper studies the neurochemical profile of eltoprazine, not the pharmacokinetics of oxitriptan. |
| PD | Schipper_1990 | not_relevant | 0 | 0 | The paper discusses eltoprazine, not oxitriptan, and focuses on receptor binding and neurochemical mechanisms rather than a pharmacokinetic/pharmacodynamic exposure-response model for the target drug. |
| popPK | Siriwardena_1993 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on chloride transport in rat colon using a 5-HT3 agonist, not a pharmacokinetic study of oxitriptan. |
| popPK | Smarius_2008 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of 5-hydroxytryptophan (5-HTP), not oxitriptan. |
| popPK | Sperk_1978 | irrelevant | 0 | 0 | The paper is a behavioral pharmacology study in mice involving 5,7-DHT and cycloheximide, with no mention of oxitriptan or pharmacokinetic parameters. |
| PD | Sperk_1978 | not_relevant | 0 | 0 | The paper studies the effect of cycloheximide on 5-HTP-induced myoclonus in mice and does not mention oxitriptan or report any pharmacodynamic parameters for it. |
| popPK | Sánchez_1995 | irrelevant | 0 | 0 | The paper is a behavioral pharmacology study in mice focusing on serotonergic mechanisms and does not report any pharmacokinetic parameters for oxitriptan. |
| popPK | Sánchez_1997 | irrelevant | 0 | 0 | The paper studies the behavioral profiles of SSRIs (citalopram, paroxetine, etc.) in animal models and does not mention oxitriptan or report any pharmacokinetic parameters. |
| popPK | Söderpalm_1989 | irrelevant | 0 | 0 | The paper is a behavioral pharmacology study on anxiety in rats and does not report any pharmacokinetic parameters for oxitriptan. |
| PD | Söderpalm_1989 | not_relevant | 0 | 0 | The paper does not mention oxitriptan and focuses on other 5-HT1A agonists in an animal model. |
| popPK | Visser_2014 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of the PET tracer [(11)C]5-HTP in rats, not the drug oxitriptan. |
| PD | Visser_2014 | not_relevant | 0 | 0 | The paper investigates the suitability of a PET tracer for measuring serotonin synthesis in rodents and does not report any pharmacodynamic or exposure-response relationship for oxitriptan. |
| popPK | Wu_2017 | irrelevant | 0 | 0 | The paper is a systems biology study on liver metabolism and the Warburg effect in mice, with no mention of oxitriptan or its pharmacokinetic parameters. |
| PD | Wu_2017 | not_relevant | 0 | 0 | The paper focuses on flux balance analysis of metabolic networks in miR-122a deficient mice and does not report any pharmacodynamic or exposure-response relationship for oxitriptan. |
| popPK | Zhang_2023 | irrelevant | 0 | 0 | The paper is a study on fungal secondary metabolites and does not involve the drug oxitriptan or any pharmacokinetic analysis. |
| PD | Zhang_2023 | not_relevant | 0 | 0 | The paper studies secondary metabolites of a fungus and does not mention oxitriptan or report any pharmacodynamic or exposure-response data for it. |
| popPK | de_2024 | irrelevant | 0 | 0 | The paper focuses on 5-HT2AR pharmacodynamics and IP1 signaling in mice using drugs like DOI, LSD, and MDMA, and does not mention or study oxitriptan. |
| PD | de_2024 | not_relevant | 0 | 0 | The paper focuses on 5-HT2A receptor activation in mice using DOI, LSD, lisuride, and MDMA, and does not mention or analyze oxitriptan. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
