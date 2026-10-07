<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;oxitriptan&quot;}]"></div>

# oxitriptan

- **generic name:** oxitriptan
- **ATC codes:** `N06AX01`
- **DrugBank:** [DB02959](https://go.drugbank.com/drugs/DB02959) · **PubChem:** [CID 439280](https://pubchem.ncbi.nlm.nih.gov/compound/439280)
- **molar mass:** 220.2246 g/mol (C11H12N2O3) — DrugBank
- **groups:** approved, investigational, nutraceutical, withdrawn

## About

Oxitriptan (5-HTP) is an antidepressant used for major depressive disorder. It is approved and also sold as a nutraceutical, with some investigational uses, though it has been withdrawn in some settings.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q238544](https://www.wikidata.org/wiki/Q238544) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| 5-hydroxytryptophan (oxitriptan) (oxitriptan) | metabolite | 220.228 | C11H12N2O3 | PubChem | [439280](https://pubchem.ncbi.nlm.nih.gov/compound/439280) | Smarius_2008 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:53 | 0:48 | 0/1/1 | 1/0/0 | 0/0/0 | 61,154/3,094 | einfracz / qwen3.8-27b | 5 | 5/7 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Smarius_2008_reference](drugs/drug_oxitriptan/Oxitriptan_Smarius2008_reference.md) | — | 1-compartment (no model) | 1 | Smarius LJ et al., Pharmacology of rising oral doses of 5-…, Journal of psychopharmacolo… (2008) | [10.1177/0269881107082025](https://doi.org/10.1177/0269881107082025) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Guan_2020_reference](drugs/drug_oxitriptan/Oxitriptan_Guan2020_reference.md) | — | 1-compartment (no model) | 0 | Guan Z et al., PK/PD modeling of 5-hydroxytryptophan (…, Pharmacology research & per… (2020) | [10.1002/prp2.574](https://doi.org/10.1002/prp2.574) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Guan_2020_cortisol](drugs/drug_oxitriptan/pd_Guan_2020_cortisol.md) | serum cortisol ← 5-HTP · direct linear effect | — | Guan Z et al., PK/PD modeling of 5-hydroxytryptophan (…, Pharmacology research & per… (2020) | [10.1002/prp2.574](https://doi.org/10.1002/prp2.574) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=oxitriptan) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 107 matched, 76 returned
- **screened:** 2  ·  **relevant:** 0
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hao_2011.pdf` | Hao K et al., Mechanism-based pharmacokinetic-pharmac…, European journal of pharmac… (2011) | pd | 5 | [10.1016/j.ejps.2011.06.014](https://doi.org/10.1016/j.ejps.2011.06.014) | [21740969](https://www.ncbi.nlm.nih.gov/pubmed/21740969) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Kreilgaard_2008.pdf` | Kreilgaard M et al., Prediction of clinical response based o…, British journal of pharmaco… (2008) | pd | 5 | [10.1038/bjp.2008.243](https://doi.org/10.1038/bjp.2008.243) | [18552871](https://www.ncbi.nlm.nih.gov/pubmed/18552871) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Bischoff_1988.pdf` | Bischoff S et al., Interaction of the D1 receptor antagoni…, Journal of receptor research (1988) | pd | 4 | [10.3109/10799898809048981](https://doi.org/10.3109/10799898809048981) | [3290470](https://www.ncbi.nlm.nih.gov/pubmed/3290470) | metadata signals extractable PD data (IC50) |
| `Keithahn_2005.pdf` | Keithahn C et al., 5-hydroxytryptophan is a more potent in…, Journal of pineal research (2005) | pd | 4 | [10.1111/j.1600-079X.2004.00177.x](https://doi.org/10.1111/j.1600-079X.2004.00177.x) | [15617538](https://www.ncbi.nlm.nih.gov/pubmed/15617538) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07T18:53:33.022366+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Andrzejewski_2025 | irrelevant | 0 | 0 | The paper studies respiratory physiology in a Parkinson's disease rat model using fluoxetine and 5-HTP, and does not involve oxitriptan or report pharmacokinetic parameters. |
| PD | Andrzejewski_2025 | not_relevant | 0 | 0 | The paper studies fluoxetine and 5-HTP, not oxitriptan, and reports physiological responses to hypercapnia rather than a pharmacokinetic/pharmacodynamic exposure-response relationship. |
| popPK | Barua_2026 | irrelevant | 0 | 0 | The paper is a review of computational toxicology and AI/ML models, containing no pharmacokinetic data for oxitriptan. |
| popPK | Bischoff_1988 | irrelevant | 0 | 0 | The paper studies the receptor binding and biochemical effects of SCH 23390, not the pharmacokinetics of oxitriptan. |
| PD | Bischoff_1988 | not_relevant | 0 | 0 | The paper studies SCH 23390, not oxitriptan, and reports receptor binding affinities (IC50) rather than a pharmacodynamic exposure-response relationship for the target drug. |
| popPK | Budhoo_1994 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study on chloride secretion receptors in rat colon tissue and contains no pharmacokinetic parameters for oxitriptan. |
| popPK | Budhoo_1996 | irrelevant | 0 | 0 | The paper investigates 5-HT receptor mechanisms for chloride transport in rat colon and does not report pharmacokinetic parameters for oxitriptan. |
| PD | Budhoo_1996 | not_relevant | 0 | 0 | The paper investigates 5-HT receptor pharmacology in rat distal colon and does not mention oxitriptan or report any exposure-response or dose-response data for it. |
| popPK | Carlsson_1977 | irrelevant | 0 | 0 | The paper studies dopamine receptor interactions in rat brain and does not involve oxitriptan or report pharmacokinetic parameters. |
| PD | Carlsson_1977 | not_relevant | 0 | 0 | The paper studies haloperidol and apomorphine, not oxitriptan. |
| popPK | Darmani_1996 | irrelevant | 0 | 0 | The paper is a behavioral pharmacology study in mice focusing on cocaine and serotonin receptors, and does not involve oxitriptan or report any pharmacokinetic parameters. |
| PD | Darmani_1996 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of cocaine and other reuptake inhibitors, not oxitriptan. |
| popPK | Devadoss_2010 | irrelevant | 0 | 0 | The paper studies a different drug (QCF-3) and focuses on behavioral pharmacology, not the pharmacokinetics of oxitriptan. |
| PD | Devadoss_2010 | not_relevant | 3 | 2 | The paper reports a qualitative dose-response study in animal models (0.5-4 mg/kg) but does not provide numeric PD parameters (e.g., ED50, Emax) or concentration-effect data for oxitriptan (the study is on QCF-3). |
| popPK | Doble_1992 | irrelevant | 0 | 0 | The paper characterizes the pharmacology of RP 62203, not oxitriptan, and contains no PK parameters for the target drug. |
| PD | Doble_1992 | not_relevant | 0 | 0 | The paper characterizes RP 62203, not oxitriptan, and reports pharmacological binding and functional assay data (Ki, IC50, ED50) rather than a pharmacokinetic-pharmacodynamic (PK/PD) exposure-response relationship for the target drug. |
| popPK | Fell_2026 | irrelevant | 0 | 0 | The paper describes a cell-based delivery platform for monoclonal antibodies (e.g., 3BNC117, ipilimumab) and does not mention oxitriptan or its pharmacokinetics. |
| popPK | Gao_2020 | irrelevant | 0 | 0 | The paper studies the antinociceptive effects of isorhynchophylline in mice and does not mention oxitriptan or provide pharmacokinetic parameters for it. |
| PD | Gao_2020 | not_relevant | 0 | 0 | The paper investigates isorhynchophylline, not oxitriptan, and does not report any pharmacodynamic parameters for oxitriptan. |
| PGx | Gao_2025 | not_relevant | 0 | 0 | The paper discusses the engineering of a probiotic to produce 5-HTP, not the pharmacogenomics of oxitriptan. |
| popPK | Gijsman_2002 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of 5-hydroxytryptophan (5-HTP), not oxitriptan. |
| PD | Gijsman_2002 | not_relevant | 0 | 0 | The paper studies 5-hydroxytryptophan (5-HTP) and carbidopa, not oxitriptan. |
| popPK | Gomes_1998 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of L-DOPA and L-5-HTP transport in opossum kidney cells and does not involve oxitriptan or report pharmacokinetic parameters. |
| PD | Gomes_1998 | not_relevant | 0 | 0 | The paper studies the uptake kinetics of L-DOPA and L-5-HTP in opossum kidney cells and does not mention oxitriptan or report any pharmacodynamic exposure-response relationship for it. |
| popPK | Green_1983 | irrelevant | 0 | 0 | The paper is a behavioral pharmacology study in rodents focusing on antidepressant treatments and receptor mechanisms, with no mention of oxitriptan or pharmacokinetic parameters. |
| PD | Green_1983 | not_relevant | 0 | 0 | The paper does not mention oxitriptan and focuses on the effects of ECS, desmethylimipramine, and clenbuterol on 5-HT and dopamine behaviors. |
| popPK | Guan_2020 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for 5-HTP (5-hydroxytryptophan), not oxitriptan. |
| popPK | Handa_2021 | irrelevant | 0 | 0 | The paper focuses on thyroid peroxidase inhibition and PBPK modeling for propylthiouracil and methimazole in rats, with no mention of oxitriptan. |
| PD | Handa_2021 | not_relevant | 0 | 0 | The paper focuses on a computational PBPK/PD framework for thyroid hormones using propylthiouracil, methimazole, and ethylenethiourea, and does not mention or analyze oxitriptan. |
| popPK | Hao_2011 | irrelevant | 0 | 0 | no_text gate: only 141 chars of text extracted (&lt; 400) |
| PD | Hao_2011 | not_relevant | 0 | 0 | The paper focuses on ginsenoside Rb1, not oxitriptan. |
| popPK | Hartvig_1995 | irrelevant | 0 | 0 | The study is a PET pharmacodynamic investigation of serotonin synthesis in monkey brains and does not involve the drug oxitriptan. |
| popPK | Hegde_1995 | irrelevant | 0 | 0 | The paper studies RS 39604, a 5-HT4 receptor antagonist, and does not involve oxitriptan or report pharmacokinetic parameters for it. |
| popPK | Jacobs_2010 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of 5-HTP using MRS and does not report pharmacokinetic parameters for oxitriptan. |
| PD | Jacobs_2010 | not_relevant | 0 | 0 | The paper studies the pharmacodynamics of 5-HTP (serotonin precursor), not oxitriptan. |
| PGx | Jacobsen_2008 | not_relevant | 0 | 0 | The paper studies SSRIs in mouse models and does not involve the drug oxitriptan. |
| popPK | Jacobsen_2016 | irrelevant | 0 | 0 | The paper studies 5-HTP (5-hydroxytryptophan) in mice, not oxitriptan, and does not report PK parameters for the target drug. |
| PD | Jacobsen_2016 | not_relevant | 0 | 0 | The paper studies 5-hydroxytryptophan (5-HTP) and fluoxetine, not oxitriptan, and does not report specific numeric PD parameters for oxitriptan. |
| popPK | Jacobsen_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of 5-HTP, not oxitriptan. |
| PD | Jacobsen_2019 | not_relevant | 0 | 0 | The paper studies 5-hydroxytryptophan (5-HTP) and fluoxetine, not oxitriptan, and does not report specific numeric PD parameters for oxitriptan. |
| popPK | Keithahn_2005 | irrelevant | 0 | 0 | no_text gate: only 100 chars of text extracted (&lt; 400) |
| PD | Keithahn_2005 | not_relevant | 0 | 0 | The paper discusses the antioxidant properties of 5-hydroxytryptophan, melatonin, and vitamin C, and does not mention oxitriptan or report any pharmacodynamic or exposure-response data. |
| popPK | Krams_2025 | irrelevant | 0 | 0 | The study investigates behavioral phototaxis in Drosophila using escitalopram and serotonin modulators, not the pharmacokinetics of oxitriptan. |
| PD | Krams_2025 | not_relevant | 0 | 0 | The paper studies Drosophila behavior and does not mention oxitriptan or report any pharmacodynamic parameters. |
| popPK | Kreilgaard_2008 | irrelevant | 0 | 0 | no_text gate: only 130 chars of text extracted (&lt; 400) |
| PD | Kreilgaard_2008 | not_relevant | 0 | 0 | The paper focuses on 5-hydroxytryptamine reuptake inhibitors in mice and does not mention oxitriptan or provide any PD parameters for it. |
| PGx | Li_2025 | not_relevant | 0 | 0 | The paper focuses on the directed evolution of tryptophan hydroxylase (an enzyme) for industrial 5-HTP production, not on pharmacogenomic effects on oxitriptan pharmacokinetics or pharmacodynamics. |
| popPK | Liang_2004 | irrelevant | 0 | 0 | The study investigates the antinociceptive effects of 5-HTP and calcium channel blockers in mice and does not report pharmacokinetic parameters for oxitriptan. |
| PD | Liang_2004 | not_relevant | 0 | 0 | The paper investigates 5-HTP and calcium channel blockers, not oxitriptan. |
| popPK | Lubberink_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of the PET tracer [11C]5-HTP in monkeys, not oxitriptan. |
| popPK | Meltzer_1981 | irrelevant | 0 | 0 | The paper studies the effect of antidepressants on rat serum prolactin levels and does not involve oxitriptan or pharmacokinetic parameters. |
| PD | Meltzer_1981 | not_relevant | 0 | 0 | The paper does not mention oxitriptan and focuses on the effects of other antidepressants, lithium, and ECT on rat prolactin levels. |
| popPK | Mena_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of escitalopram, not oxitriptan. |
| PD | Mena_2024 | not_relevant | 0 | 0 | The paper focuses on the pharmacodynamics of escitalopram (an SSRI) on serotonin transporters, not oxitriptan (5-HTP), which is only mentioned as a metabolic intermediate in the model variable definitions. |
| popPK | Mitchell_2009 | irrelevant | 0 | 0 | The paper studies 5-hydroxyindalpine and its effects on mouse colonic peristalsis, not the pharmacokinetics of oxitriptan. |
| PD | Mitchell_2009 | not_relevant | 0 | 0 | not captured |
| PGx | Mohamed_2026 | not_relevant | 0 | 0 | The paper focuses on AADC deficiency diagnosis using L-dopa and 5-HTP as substrates and does not involve the drug oxitriptan or its pharmacokinetics/pharmacodynamics. |
| popPK | Moreau_2024 | irrelevant | 0 | 0 | The study focuses on nicotine pharmacokinetics and in vitro-to-in vivo extrapolation for tobacco products, not oxitriptan. |
| PD | Moreau_2024 | not_relevant | 0 | 0 | The paper focuses on QIVIVE for nicotine delivery products and does not report any pharmacodynamic or exposure-response data for oxitriptan. |
| popPK | Naso_2020 | irrelevant | 0 | 0 | The paper studies a copper complex of 5-hydroxytryptophan, not oxitriptan, and reports no pharmacokinetic parameters. |
| PD | Naso_2020 | not_relevant | 0 | 0 | The paper studies a copper complex of 5-hydroxytryptophan, not oxitriptan, and reports only a single IC50 value for a different compound. |
| popPK | Pranzatelli_1986 | irrelevant | 0 | 0 | The paper is a neuropharmacological study on serotonin depletion in rats and does not involve oxitriptan or pharmacokinetic parameters. |
| PD | Pranzatelli_1986 | not_relevant | 3 | 2 | The paper describes a dose-response shift for 5-HTP in a DHT-lesioned rat model, but it does not report specific numeric PD parameters (like EC50 or Emax) or a formal PK/PD model for oxitriptan. |
| popPK | Pranzatelli_1993 | irrelevant | 0 | 0 | The paper is a neuropharmacological study on serotonin receptor binding in rat brains and does not contain any pharmacokinetic data for oxitriptan. |
| PD | Pranzatelli_1993 | not_relevant | 0 | 0 | The paper investigates receptor binding and density changes following 5,7-DHT lesions in rats and does not report any pharmacodynamic or exposure-response data for oxitriptan. |
| popPK | Pranzatelli_1994 | irrelevant | 0 | 0 | The paper studies serotonin receptor binding and behavior in a DDT model and does not report pharmacokinetic parameters for oxitriptan. |
| PD | Pranzatelli_1994 | not_relevant | 0 | 0 | The paper studies the mechanism of p,p'-DDT toxicity and the effect of 5,7-DHT lesions on DDT-induced myoclonus; it does not report a pharmacodynamic or exposure-response relationship for oxitriptan. |
| popPK | Ruiz_2020 | irrelevant | 0 | 0 | The paper focuses on PBPK modeling and toxicology of benzene, toluene, ethylbenzene, and xylenes, and does not mention oxitriptan or provide its pharmacokinetic parameters. |
| PD | Ruiz_2020 | not_relevant | 0 | 0 | The paper focuses on PBPK modeling and toxicogenomics for benzene, toluene, ethylbenzene, and xylenes (BTEX) mixtures and does not mention oxitriptan or report any pharmacodynamic parameters. |
| PGx | Rysz_2016 | not_relevant | 0 | 0 | The paper investigates the neuroendocrine regulation of liver CYP450 expression by 5-HTP and does not mention oxitriptan or any specific gene variant. |
| PGx | Sarris_2019 | not_relevant | 0 | 0 | The paper does not mention oxitriptan or a pharmacogenomic effect on a PK/PD parameter. |
| popPK | Schipper_1990 | irrelevant | 0 | 0 | The paper studies the neurochemical profile of eltoprazine, not the pharmacokinetics of oxitriptan. |
| PD | Schipper_1990 | not_relevant | 0 | 0 | The paper discusses eltoprazine, not oxitriptan, and focuses on receptor binding and neurochemical mechanisms rather than a pharmacokinetic/pharmacodynamic exposure-response model for the target drug. |
| popPK | Siriwardena_1993 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of chloride secretion in rat colon using a 5-HT3 agonist, containing no pharmacokinetic data for oxitriptan. |
| popPK | Smarius_2008 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of 5-hydroxytryptophan (5-HTP), not oxitriptan. |
| popPK | Sperk_1978 | irrelevant | 0 | 0 | The paper is a behavioral pharmacology study in mice involving 5,7-DHT and cycloheximide, with no mention of oxitriptan or pharmacokinetic parameters. |
| PD | Sperk_1978 | not_relevant | 0 | 0 | The paper studies the effect of cycloheximide on 5-HTP-induced myoclonus in mice and does not mention oxitriptan or report any pharmacodynamic parameters for it. |
| popPK | Sánchez_1995 | irrelevant | 0 | 0 | The paper is a behavioral pharmacology study in mice involving various serotonergic agents, with no mention of oxitriptan or its pharmacokinetics. |
| popPK | Sánchez_1997 | irrelevant | 0 | 0 | The paper is a behavioral study of SSRIs in animals and does not contain any data for the subject drug oxitriptan. |
| popPK | Söderpalm_1989 | irrelevant | 0 | 0 | The paper is a behavioral pharmacology study on anxiety in rats and does not report any pharmacokinetic parameters for oxitriptan. |
| PD | Söderpalm_1989 | not_relevant | 0 | 0 | The paper does not mention oxitriptan and focuses on other 5-HT1A agonists in an animal model. |
| popPK | Visser_2014 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of a PET tracer, [(11)C]5-HTP, in rats, and does not investigate the drug oxitriptan. |
| PD | Visser_2014 | not_relevant | 0 | 0 | The paper investigates the suitability of a PET tracer for measuring serotonin synthesis in rodents and does not report any pharmacodynamic or exposure-response relationship for oxitriptan. |
| popPK | Wu_2017 | irrelevant | 0 | 0 | The paper is a metabolic modeling study on miR-122 deficiency in mice and does not investigate the pharmacokinetics of oxitriptan. |
| PD | Wu_2017 | not_relevant | 0 | 0 | The paper focuses on flux balance analysis of metabolic networks in miR-122a deficient mice and does not report any pharmacodynamic or exposure-response relationship for oxitriptan. |
| popPK | Zhang_2023 | irrelevant | 0 | 0 | The paper is a study on fungal secondary metabolites and does not involve the drug oxitriptan or any pharmacokinetic analysis. |
| PD | Zhang_2023 | not_relevant | 0 | 0 | The paper studies secondary metabolites of a fungus and does not mention oxitriptan or report any pharmacodynamic or exposure-response data for it. |
| popPK | de_2024 | irrelevant | 0 | 0 | The paper focuses on 5-HT2AR pharmacodynamics and IP1 signaling in mice using drugs like DOI, LSD, and MDMA, and does not mention or study oxitriptan. |
| PD | de_2024 | not_relevant | 0 | 0 | The paper focuses on 5-HT2A receptor activation in mice using DOI, LSD, lisuride, and MDMA, and does not mention or analyze oxitriptan. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 18:53 UTC</sub>
