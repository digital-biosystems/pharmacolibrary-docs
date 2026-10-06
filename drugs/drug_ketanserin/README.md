<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02K&quot;,&quot;href&quot;:&quot;atc/C02K.md&quot;},{&quot;label&quot;:&quot;ketanserin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ketanserin_Hanff2005_reference&quot;,&quot;label&quot;:&quot;Hanff_2005_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ketanserin/Ketanserin_Hanff2005_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ketanserin_Michiels1988_reference&quot;,&quot;label&quot;:&quot;Michiels_1988_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ketanserin/Ketanserin_Michiels1988_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ketanserin_Trenk1983_reference&quot;,&quot;label&quot;:&quot;Trenk_1983_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ketanserin/Ketanserin_Trenk1983_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# ketanserin

- **generic name:** ketanserin
- **ATC codes:** `C02KD01`
- **DrugBank:** [DB12465](https://go.drugbank.com/drugs/DB12465) · **PubChem:** [CID 3822](https://pubchem.ncbi.nlm.nih.gov/compound/3822)
- **molar mass:** 395.434 g/mol (C22H22FN3O3) — DrugBank
- **groups:** investigational

## About

Ketanserin is a serotonin antagonist that has been used as an antihypertensive drug and to treat chronic skin ulcers. It is currently considered investigational and is not an approved medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q415997](https://www.wikidata.org/wiki/Q415997) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ketanserin | parent | 395.434 | C22H22FN3O3 | DrugBank | [3822](https://pubchem.ncbi.nlm.nih.gov/compound/3822) | Hanff_2005, Kurowski_1985, Michiels_1988, Trenk_1983 |
| ketanserinol | metabolite | 397.45 | C22H24FN3O3 | PubChem | [156394](https://pubchem.ncbi.nlm.nih.gov/compound/156394) | Kurowski_1985 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 15:52 | 25:01 | 3/1/0 | 0/0/0 | 0/0/0 | 365,588/37,128 | ollama / qwen3.8:27b-mtp-q8_0 | 15 | 2/12 | 14/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.125). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Hanff_2005_reference](drugs/drug_ketanserin/Ketanserin_Hanff2005_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Hanff LM et al., Population pharmacokinetics of ketanser…, Fundamental & clinical phar… (2005) | [10.1111/j.1472-8206.2005.00354.x](https://doi.org/10.1111/j.1472-8206.2005.00354.x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.889). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Michiels_1988_reference](drugs/drug_ketanserin/Ketanserin_Michiels1988_reference.md) | ▶ model + simulator | 1-compartment, IV | 4 | Michiels M et al., Pharmacokinetics and tissue distributio…, Arzneimittel-Forschung (1988) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.727). The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Trenk_1983_reference](drugs/drug_ketanserin/Ketanserin_Trenk1983_reference.md) | ▶ model + simulator | 1-compartment, IV | 4 | Trenk D et al., Pharmacokinetics and pharmacodynamics o…, Journal of cardiovascular p… (1983) | [10.1097/00005344-198311000-00018](https://doi.org/10.1097/00005344-198311000-00018) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.1). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Kurowski_1985_reference](drugs/drug_ketanserin/Ketanserin_Kurowski1985_reference.md) | — | parent + metabolite (no model) | 6 | Kurowski M, Bioavailability and pharmacokinetics of…, European journal of clinica… (1985) | [10.1007/BF00544359](https://doi.org/10.1007/BF00544359) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ketanserin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: HTR2A (inverse agonist).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 701 matched, 95 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 4  ·  extracted 3  ·  needs_review 0  ·  rejected 1  ·  stale 4
- **scholar-agent fallback query used:** not captured

## Full text wanted

_8 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Aljuffali_2012.pdf` | Aljuffali IA et al., Pharmacokinetic assessment of ketanseri…, Journal of veterinary pharm… (2012) | popPK | 10 | [10.1111/j.1365-2885.2011.01346.x](https://doi.org/10.1111/j.1365-2885.2011.01346.x) | [22091605](https://pubmed.ncbi.nlm.nih.gov/22091605) | The study reports quantitative PK parameters (CL, Vss, t1/2) for ketanserin in horses directly in the abstract. |
| `Hanff_2005.pdf` | Hanff LM et al., Population pharmacokinetics of ketanser…, Fundamental & clinical phar… (2005) | popPK | 10 | [10.1111/j.1472-8206.2005.00354.x](https://doi.org/10.1111/j.1472-8206.2005.00354.x) | [16176338](https://pubmed.ncbi.nlm.nih.gov/16176338) | The abstract explicitly reports quantitative population pharmacokinetic parameters (Cl(m) and V1) for ketanserin in pre-eclamptic patients. |
| `Kurowski_1985.pdf` | Kurowski M, Bioavailability and pharmacokinetics of…, European journal of clinica… (1985) | popPK | 10 | [10.1007/BF00544359](https://doi.org/10.1007/BF00544359) | [3161741](https://pubmed.ncbi.nlm.nih.gov/3161741) | The abstract reports quantitative PK parameters including half-life, AUC, and bioavailability for ketanserin in humans, though specific clearance and volume values are not explicitly listed in the text provided. |
| `Michiels_1988.pdf` | Michiels M et al., Pharmacokinetics and tissue distributio…, Arzneimittel-Forschung (1988) | popPK | 10 | not captured | [3178917](https://pubmed.ncbi.nlm.nih.gov/3178917) | The abstract provides specific quantitative pharmacokinetic parameters (clearance, volume of distribution, half-life) for ketanserin in rats, rabbits, and dogs. |
| `Trenk_1983.pdf` | Trenk D et al., Pharmacokinetics and pharmacodynamics o…, Journal of cardiovascular p… (1983) | popPK | 10 | [10.1097/00005344-198311000-00018](https://doi.org/10.1097/00005344-198311000-00018) | [6196551](https://pubmed.ncbi.nlm.nih.gov/6196551) | The study reports quantitative pharmacokinetic parameters (clearance, volume of distribution, half-life) for ketanserin in humans, with all values explicitly stated in the text. |
| `Holze_2024.pdf` | Holze F et al., Ketanserin exhibits dose- and concentra…, European neuropsychopharmac… (2024) | pd | 5 | [10.1016/j.euroneuro.2024.07.003](https://doi.org/10.1016/j.euroneuro.2024.07.003) | [39121715](https://www.ncbi.nlm.nih.gov/pubmed/39121715) | metadata signals extractable PD data (EC50) |
| `Kaufman_1995.pdf` | Kaufman MJ et al., Serotonin 5-HT2C receptor stimulates cy…, Journal of neurochemistry (1995) | pd | 4 | [10.1046/j.1471-4159.1995.64010199.x](https://doi.org/10.1046/j.1471-4159.1995.64010199.x) | [7798914](https://www.ncbi.nlm.nih.gov/pubmed/7798914) | metadata signals extractable PD data (EC50) |
| `Zhang_1994.pdf` | Zhang ZH et al., Ketanserin inhibits depolarization-acti…, Circulation research (1994) | pd | 4 | [10.1161/01.res.75.4.711](https://doi.org/10.1161/01.res.75.4.711) | [7923617](https://www.ncbi.nlm.nih.gov/pubmed/7923617) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-06T15:40:36.109281+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Apfelbaum_1998 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of prolactin release where ketanserin is used solely as a receptor antagonist, with no pharmacokinetic parameters reported. |
| popPK | Bax_1993 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor-mediated contractions in isolated human coronary arteries, not a pharmacokinetic study of ketanserin. |
| popPK | Bayliss_1997 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of serotonin receptors in rat brain slices where ketanserin is used only as a pharmacological antagonist, with no pharmacokinetic parameters reported. |
| popPK | Coenen_1988 | irrelevant | 0 | 0 | The study focuses on the PET receptor binding of 18F-fluoroethylspiperone in baboons, using ketanserin only as a cold competitor to block S2 receptors, not as the subject of pharmacokinetic analysis. |
| popPK | Conn_1986 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of serotonin receptor binding and phosphatidylinositol turnover, not a pharmacokinetic study of ketanserin. |
| popPK | Corsi_1991 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological analysis of 5-HT receptors in human urinary bladder where ketanserin is used only as a comparator antagonist, with no pharmacokinetic parameters reported. |
| popPK | Crider_2003 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological characterization of serotonin receptors where ketanserin is used only as a comparator antagonist, not a subject of pharmacokinetic analysis. |
| popPK | Darchen_1988 | irrelevant | 0 | 0 | The study is an in-vitro binding and mechanistic study of ketanserin on monoamine transporters, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Dong_2021 | irrelevant | 0 | 0 | The paper describes the development of a biosensor for 5-HT2A receptors and does not report any pharmacokinetic parameters for ketanserin. |
| popPK | Drozdov_2009 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of serotonin signaling in tumor cell lines where ketanserin is used as a receptor antagonist, not a pharmacokinetic study. |
| popPK | Elliott_1999 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of serotonin mechanisms in rat motoneurons where ketanserin is used only as a pharmacological antagonist, with no pharmacokinetic parameters reported. |
| popPK | Elswood_1991 | irrelevant | 0 | 0 | The study is a pharmacological characterization of 5-HT4 receptors in guinea-pig colon where ketanserin is used only as a negative control antagonist, with no pharmacokinetic parameters reported. |
| popPK | Ettrup_2014 | irrelevant | 0 | 0 | Ketanserin is used only as a blocking agent to validate the PET ligand, and no pharmacokinetic parameters for ketanserin are reported. |
| popPK | Finnema_2014 | irrelevant | 0 | 0 | The study characterizes a PET radioligand in monkeys where ketanserin is used only as a competitive antagonist for occupancy, not as the subject of pharmacokinetic analysis. |
| popPK | Garnovskaya_1995 | irrelevant | 0 | 0 | The study is a mechanistic in vitro investigation of receptor signaling where ketanserin is used only as a pharmacological antagonist, not a subject of pharmacokinetic analysis. |
| popPK | Glusa_2000 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological characterization of 5-HT receptors in pig pulmonary artery, not a pharmacokinetic study of ketanserin. |
| popPK | Gul_2003 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological characterization of receptor binding and contractile responses, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Hanff_2007 | irrelevant | 0 | 0 | The study reports pharmacodynamic receptor binding and functional data (pEC50, pKb) in umbilical cord tissue, not pharmacokinetic disposition parameters (CL, V, t1/2) for ketanserin. |
| popPK | Hattori_2017 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor mechanisms on bladder muscle strips and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for ketanserin. |
| popPK | Hauser_2002 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of ureteral motility in pigs, not a pharmacokinetic study, and reports no disposition parameters for ketanserin. |
| PGx | Holthoewer_2013 | not_relevant | 0 | 0 | The paper focuses on the pharmacogenomic effects of P-gp deficiency on aripiprazole and ziprasidone; ketanserin is only used as a control compound and no pharmacogenomic effects on its PK/PD parameters are reported. |
| popPK | Holze_2024 | irrelevant | 0 | 0 | no_text gate: only 147 chars of text extracted (&lt; 400) |
| popPK | Hori_2024 | irrelevant | 0 | 0 | The study investigates the behavioral effects of serotonin receptor antagonists (including 5-HT2A) in macaque monkeys and does not report pharmacokinetic parameters for ketanserin. |
| popPK | Inoue_2003 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of 5-HT7 receptors in pig oviducts where ketanserin is used only as a non-effective antagonist, with no pharmacokinetic parameters reported. |
| popPK | Ishitani_1994 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor function and phosphoinositide turnover, containing no pharmacokinetic parameters for ketanserin. |
| PD | Ishitani_1994 | not_relevant | 0 | 0 | The paper reports dose-response parameters for tryptamine, but explicitly states that ketanserin had no effect on the measured responses, providing no PD relationship or numeric parameters for ketanserin. |
| popPK | Jaster_2025 | irrelevant | 0 | 0 | The study focuses on the behavioral and epigenomic effects of psilocybin and oxycodone in mice, using ketanserin only as a cited comparator for 5-HT2A receptor antagonism, with no pharmacokinetic data for ketanserin reported. |
| popPK | Jeong_2026 | irrelevant | 0 | 0 | The paper describes NSD2 inhibitors for cancer treatment and does not involve the drug ketanserin or its pharmacokinetics. |
| popPK | Jeynes_2023 | irrelevant | 0 | 0 | The paper is an NLP evaluation of chemical-gene relationship datasets and does not contain any pharmacokinetic data for ketanserin. |
| PGx | Jiang_2015 | not_relevant | 0 | 0 | The paper studies the pharmacodynamics of 5-MeO-DMT and harmaline, using ketanserin only as a receptor antagonist tool, and does not report pharmacogenomic effects on ketanserin's PK or PD parameters. |
| popPK | Kaufman_1995 | irrelevant | 0 | 0 | no_text gate: only 75 chars of text extracted (&lt; 400) |
| PD | Kaufman_1995 | not_relevant | 0 | 0 | The paper focuses on the mechanism of 5-HT2C receptor stimulation of cGMP formation in choroid plexus and does not report any pharmacodynamic or exposure-response analysis for ketanserin. |
| popPK | Kester_2003 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological characterization of receptor binding and contractile responses, not a pharmacokinetic study, and ketanserin is used only as a comparative antagonist. |
| popPK | Kuypers_2026 | irrelevant | 0 | 0 | The paper is a mechanistic perspective on psychedelic therapy and does not contain any pharmacokinetic data or parameters for ketanserin. |
| popPK | Lai_1991 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological characterization of serotonin receptors in rat coronary arteries where ketanserin is used only as a tool compound (antagonist), not as the subject of pharmacokinetic analysis. |
| popPK | Lawn_2026 | irrelevant | 0 | 0 | The paper is a neuroimaging study on spatial collinearity in receptor maps and does not report pharmacokinetic parameters for ketanserin. |
| popPK | Morisset_2002 | irrelevant | 0 | 0 | The study investigates the neuropharmacological effects of methamphetamine on histamine levels in mice, using ketanserin only as a pharmacological tool to probe serotonin receptor involvement, and reports no pharmacokinetic parameters for ketanserin. |
| popPK | Murali_2017 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of 5-HT receptors in rat carotid body cells where ketanserin is used only as a pharmacological antagonist, not as the subject of pharmacokinetic analysis. |
| popPK | Ni_2004 | irrelevant | 0 | 0 | The study investigates the vasoactive properties of norfenfluramine, using ketanserin only as a pharmacological antagonist to block 5-HT2A receptors, not as the subject of pharmacokinetic analysis. |
| PD | Ni_2004 | not_relevant | 0 | 0 | The paper reports PD parameters for (+)-norfenfluramine, not ketanserin; ketanserin is used only as a qualitative antagonist to confirm receptor mechanism. |
| popPK | Norgaard_2022 | irrelevant | 0 | 0 | The paper describes a data standard (PET-BIDS) for neuroimaging and does not report pharmacokinetic parameters for ketanserin. |
| popPK | Nureye_2025 | irrelevant | 0 | 0 | The paper is a review of medicinal plants for hypertension and does not contain pharmacokinetic data for ketanserin. |
| popPK | Odagaki_2017 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding assay using ketanserin as a pharmacological antagonist, not a pharmacokinetic study. |
| popPK | Ouadid_1992 | irrelevant | 0 | 0 | The study is an electrophysiological investigation of 5-HT receptors in atrial myocytes where ketanserin is used only as a pharmacological antagonist to rule out 5-HT2 receptor involvement, not as the subject of a pharmacokinetic analysis. |
| popPK | Percha_2015 | irrelevant | 0 | 0 | The paper is a bioinformatics study on text mining algorithms for drug-gene relationships and does not report any pharmacokinetic parameters for ketanserin. |
| popPK | Perlmutter_1991 | irrelevant | 0 | 0 | The study uses ketanserin as a competitive antagonist to validate a PET assay for spiperone binding, and does not report pharmacokinetic parameters (CL, V, etc.) for ketanserin itself. |
| popPK | Quinn_2006 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of 4-methylthioamphetamine on rat aorta, where ketanserin is used only as a 5-HT antagonist control, not as the subject of a pharmacokinetic analysis. |
| PGx | Rietjens_2012 | not_relevant | 0 | 0 | The paper discusses MDMA pharmacogenomics and mentions ketanserin only as a potential therapeutic agent for MDMA intoxication, without reporting any pharmacogenomic effects on ketanserin's PK or PD. |
| popPK | Saikia_2017 | irrelevant | 0 | 0 | The study is an ex vivo pharmacological investigation of a plant extract where ketanserin is used only as a reference antagonist, not as the subject of pharmacokinetic analysis. |
| popPK | Santos_2022 | irrelevant | 0 | 0 | The study investigates the vasoconstrictor effects of a toad poison extract in rats, using ketanserin only as a pharmacological tool (5-HT2 antagonist) to characterize receptor involvement, not as the subject of a pharmacokinetic analysis. |
| PD | Santos_2022 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of Rhinella marina toad poison, not ketanserin; ketanserin is used only as a tool compound to characterize receptor involvement. |
| popPK | Schönbächler_2002 | irrelevant | 0 | 0 | The study focuses on the PET imaging of dopamine transporters using a radioligand, and ketanserin is only used as a non-specific blocking agent in a mouse model, not as the subject of pharmacokinetic analysis. |
| popPK | Shinozuka_2023 | irrelevant | 0 | 0 | The paper is a meta-analysis of psychedelic phenomenology, neuroimaging, and pharmacology, and ketanserin is only mentioned as a 5-HT2A antagonist used to block psychedelic effects, with no PK parameters reported. |
| popPK | Sumner_1989 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological characterization of 5-HT receptors in porcine vena cava where ketanserin is used only as a negative control ligand, reporting no pharmacokinetic parameters. |
| popPK | Takahashi_1995 | irrelevant | 0 | 0 | The study is a pharmacological investigation of 5-HT receptors in airways where ketanserin is used only as a receptor antagonist tool compound, not as the subject of pharmacokinetic analysis. |
| popPK | Trim_2001 | irrelevant | 0 | 0 | The study is a pharmacological investigation of 5-HT receptors in the nematode Ascaris suum, using ketanserin as a tool compound, and does not report any pharmacokinetic parameters for ketanserin. |
| popPK | Ugun-Klusek_2011 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of placental vascular reactivity using ketanserin as a receptor antagonist, not a pharmacokinetic study. |
| popPK | Wallach_2023 | irrelevant | 0 | 0 | The paper is a pharmacodynamic study of 5-HT2A receptor signaling and psychedelic potential in mice, where ketanserin is only mentioned as a reference antagonist, with no pharmacokinetic parameters reported. |
| popPK | Watts_1996 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of 5-HT receptor signal transduction in rat mesenteric arteries, using ketanserin as a receptor antagonist, and does not report any pharmacokinetic parameters for ketanserin. |
| popPK | Watts_2004 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological characterization of serotonin receptors in rat renal arteries where ketanserin is used only as a tool compound/antagonist, not as the subject of a pharmacokinetic study. |
| PD | Watts_2004 | not_relevant | 3 | 2 | The paper reports qualitative antagonist shifts (3 and 10 nM) for ketanserin in an isolated tissue bath but does not provide numeric PD parameters (e.g., pA2, Ki, or full concentration-effect curves) for ketanserin itself. |
| popPK | Zhang_1994 | irrelevant | 0 | 0 | no_text gate: only 98 chars of text extracted (&lt; 400) |
| popPK | van_2002 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of contractile responses where ketanserin is used only as a receptor antagonist tool, not as the subject of pharmacokinetic analysis. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 15:41 UTC</sub>
