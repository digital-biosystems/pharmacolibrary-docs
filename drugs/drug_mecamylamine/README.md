<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02B&quot;,&quot;href&quot;:&quot;atc/C02B.md&quot;},{&quot;label&quot;:&quot;mecamylamine&quot;}]"></div>

# mecamylamine

- **generic name:** mecamylamine
- **ATC codes:** `C02BB01`
- **DrugBank:** [DB00657](https://go.drugbank.com/drugs/DB00657) · **PubChem:** [CID 4032](https://pubchem.ncbi.nlm.nih.gov/compound/4032)
- **molar mass:** 167.2911 g/mol (C11H21N) — DrugBank
- **groups:** approved, investigational

## About

Mecamylamine is a ganglion-blocking antihypertensive drug that has been used to treat arterial and malignant hypertension, and has also been studied for Tourette syndrome. It is an approved drug, though it is no longer widely used as an antihypertensive; it is also listed as investigational.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3332124](https://www.wikidata.org/wiki/Q3332124) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| mecamylamine | parent | 167.291 | C11H21N | DrugBank | [4032](https://pubchem.ncbi.nlm.nih.gov/compound/4032) | Alvarez-Jimenez_2017 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 15:21 | 4:22 | 0/1/0 | 1/0/0 | 0/0/0 | 271,789/17,827 | einfracz / qwen3.8-27b | 11 | 3/7 | 11/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Alvarez-Jimenez_2017_reference](drugs/drug_mecamylamine/Mecamylamine_AlvarezJimenez2017_reference.md) | — | 1-compartment (no model) | 0 | Alvarez-Jimenez R et al., Pharmacokinetics and pharmacodynamics o…, Journal of psychopharmacolo… (2017) | [10.1177/0269881116681417](https://doi.org/10.1177/0269881116681417) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Alvarez-Jimenez_2017_2_back](drugs/drug_mecamylamine/pd_Alvarez_Jimenez_2017_2_back.md) | Reaction time of the 2-back paradigm ← mecamylamine · direct linear effect | — | Alvarez-Jimenez R et al., Pharmacokinetics and pharmacodynamics o…, Journal of psychopharmacolo… (2017) | [10.1177/0269881116681417](https://doi.org/10.1177/0269881116681417) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Alvarez-Jimenez_2017_Adaptive_tracker](drugs/drug_mecamylamine/pd_Alvarez_Jimenez_2017_Adaptive_tracker.md) | Percentage of accuracy of the adaptive tracker test ← mecamylamine · direct sigmoid Emax (Hill) effect | — | Alvarez-Jimenez R et al., Pharmacokinetics and pharmacodynamics o…, Journal of psychopharmacolo… (2017) | [10.1177/0269881116681417](https://doi.org/10.1177/0269881116681417) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Alvarez-Jimenez_2017_BP](drugs/drug_mecamylamine/pd_Alvarez_Jimenez_2017_BP.md) | Systolic and diastolic blood pressure ← mecamylamine · direct linear effect | — | Alvarez-Jimenez R et al., Pharmacokinetics and pharmacodynamics o…, Journal of psychopharmacolo… (2017) | [10.1177/0269881116681417](https://doi.org/10.1177/0269881116681417) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Alvarez-Jimenez_2017_0_back](drugs/drug_mecamylamine/pd_Alvarez_Jimenez_2017_0_back.md) | Correct Answers of the 0-back (percentage of correct answers) ← mecamylamine · direct Emax (saturable) effect | — | Alvarez-Jimenez R et al., Pharmacokinetics and pharmacodynamics o…, Journal of psychopharmacolo… (2017) | [10.1177/0269881116681417](https://doi.org/10.1177/0269881116681417) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=mecamylamine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CHRNA2 (target), CHRNA4 (target), CHRNA7 (target), CHRNB2 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 367 matched, 92 returned
- **screened:** 2  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Xu_2014.pdf` | Xu H et al., Population pharmacokinetics of TC-5214,…, Journal of clinical pharmac… (2014) | popPK | 10 | [10.1002/jcph.264](https://doi.org/10.1002/jcph.264) | [24408516](https://pubmed.ncbi.nlm.nih.gov/24408516) | The paper describes a population PK model for TC-5214 (dexmecamylamine), the active enantiomer of mecamylamine, in humans, but the specific numeric parameter estimates (CL, V, etc.) are not explicitly listed in the provided evidence text. |
| `Baakman_2017.pdf` | Baakman AC et al., An anti-nicotinic cognitive challenge m…, British journal of clinical… (2017) | popPK | 6 | [10.1111/bcp.13268](https://doi.org/10.1111/bcp.13268) | [28217868](https://pubmed.ncbi.nlm.nih.gov/28217868) | Study reports non-compartmental PK parameters (Tmax, Cmax) for mecamylamine in humans, but lacks clearance or volume data. |
| `Badio_1994.pdf` | Badio B et al., Epibatidine, a potent analgetic and nic…, Molecular pharmacology (1994) | pd | 4 | not captured | [8183234](https://www.ncbi.nlm.nih.gov/pubmed/8183234) | metadata signals extractable PD data (EC50) |
| `Reuben_2000.pdf` | Reuben M et al., Nicotine-evoked [3H]5-hydroxytryptamine…, Neuropharmacology (2000) | pd | 4 | [10.1016/s0028-3908(99)00147-1](https://doi.org/10.1016/s0028-3908(99)00147-1) | [10670424](https://www.ncbi.nlm.nih.gov/pubmed/10670424) | metadata signals extractable PD data (EC50) |
| `Salgado_2016.pdf` | Salgado VL, Antagonist pharmacology of desensitizin…, Neurotoxicology (2016) | pd | 4 | [10.1016/j.neuro.2016.08.003](https://doi.org/10.1016/j.neuro.2016.08.003) | [27514662](https://www.ncbi.nlm.nih.gov/pubmed/27514662) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07T15:19:00.062065+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abulseoud_2020 | irrelevant | 0 | 0 | The paper is a neuroimaging study on nicotine withdrawal mechanisms and does not involve mecamylamine or its pharmacokinetics. |
| popPK | Allgaier_1995 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of neurotransmitter release in cultured chick neurons and does not report pharmacokinetic parameters for mecamylamine. |
| popPK | Alvarez-Jimenez_2016 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics and pharmacodynamics of scopolamine, not mecamylamine. |
| PGx | An_2012 | not_relevant | 0 | 0 | The paper investigates cigarette smoke-induced drug resistance and does not report a pharmacogenomic effect on the pharmacokinetics or pharmacodynamics of mecamylamine. |
| popPK | Anderson_1992 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study on cyclic AMP regulation in bovine cells using mecamylamine as a pharmacological tool, not a pharmacokinetic study. |
| popPK | Baakman_2017 | relevant | 6 | 3 | Study reports non-compartmental PK parameters (Tmax, Cmax) for mecamylamine in humans, but lacks clearance or volume data. |
| popPK | Badio_1994 | irrelevant | 0 | 0 | no_text gate: only 53 chars of text extracted (&lt; 400) |
| PD | Badio_1994 | not_relevant | 0 | 0 | The paper focuses on epibatidine, not mecamylamine, and does not report PD parameters for the target drug. |
| popPK | Bertrand_1990 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology experiment on Xenopus oocytes examining receptor binding/blocking mechanisms, not a pharmacokinetic study reporting disposition parameters for mecamylamine. |
| popPK | Bonhaus_1995 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics and receptor binding of epibatidine, using mecamylamine only as a non-selective antagonist for mechanism-of-action validation, with no PK parameters reported. |
| popPK | Briggs_1999 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological analysis of a receptor mutation, not a pharmacokinetic study, and mecamylamine is used only as a pharmacological tool/antagonist. |
| popPK | Brotz_1996 | irrelevant | 0 | 0 | The study is an in vitro neuropharmacological investigation of receptor pharmacology in blowflies, not a pharmacokinetic study of mecamylamine disposition. |
| popPK | Brown_2015 | irrelevant | 0 | 0 | This is an in-vitro pharmacological study investigating receptor mechanisms, not a pharmacokinetic study, and mecamylamine is used only as a non-selective blocker. |
| popPK | Brynildsen_2016 | irrelevant | 0 | 0 | The study uses mecamylamine as a pharmacological challenge to induce withdrawal in nicotine-dependent rats, not as the subject of pharmacokinetic analysis. |
| popPK | Choi_2022 | irrelevant | 0 | 0 | Mecamylamine is used only as a receptor antagonist to probe mechanisms in a pain study; no pharmacokinetic parameters are reported. |
| popPK | Choi_2023 | irrelevant | 0 | 0 | The study is a pharmacodynamic study in rats where mecamylamine is used only as a receptor blocker to investigate mechanisms, not as the subject of pharmacokinetic analysis. |
| popPK | Connor_1996 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of opioid receptors where mecamylamine is used only as a nicotinic receptor antagonist control, not as the subject drug for PK parameter estimation. |
| popPK | Cuevas_1996 | irrelevant | 0 | 0 | Mecamylamine is used as a pharmacological antagonist (probe) in an in-vitro electrophysiology study of VIP modulation, with no PK parameters reported. |
| popPK | Day_1996 | irrelevant | 0 | 0 | The study is an in vitro pharmacological characterization of cholinergic receptors in *Schistosoma mansoni* muscle fibers, using mecamylamine only as an ineffective antagonist, not a pharmacokinetic analysis of the drug. |
| PD | Day_1996 | not_relevant | 0 | 0 | The paper reports that mecamylamine was ineffective at a single concentration (1 mM) and does not provide any dose-response curve or numeric PD parameters for mecamylamine. |
| PGx | Flores_1999 | not_relevant | 0 | 0 | The study investigates pharmacogenetic variability in the response to epibatidine, not mecamylamine. |
| popPK | Fu_2003 | irrelevant | 0 | 0 | The study is an electrophysiological investigation of nicotinic receptors in neonatal hamster lung where mecamylamine is used only as a pharmacological blocker, not for PK parameter estimation. |
| popPK | Fu_2009 | irrelevant | 0 | 0 | The study is an in vitro mechanistic analysis of nicotinic receptor modulation, where mecamylamine is used as a pharmacological antagonist rather than the subject of pharmacokinetic evaluation. |
| popPK | Gonzales_1993 | irrelevant | 0 | 0 | The paper is an in vitro mechanistic study of neurotransmitter release in rat cortical slices, not a pharmacokinetic study of mecamylamine. |
| PGx | Hahn_2016 | not_relevant | 3 | 2 | The paper compares different inbred rat strains to observe behavioral differences (strain dependency), but does not report specific gene variants, genotypes, or pharmacogenomic interactions affecting PK/PD parameters. |
| popPK | Hollenhorst_2012 | irrelevant | 0 | 0 | The study is a mechanistic electrophysiology investigation in mice where mecamylamine is used only as a pharmacological antagonist, not as the subject drug for PK parameter estimation. |
| popPK | Hollenhorst_2022 | irrelevant | 0 | 0 | Mecamylamine is used as a pharmacological tool (nAChR inhibitor) to investigate mechanistic ion transport pathways, not as a subject drug for PK parameter estimation. |
| PD | Hollenhorst_2022 | not_relevant | 0 | 0 | The paper focuses on denatonium and ENaC channels in tracheal brush cells, with no mention of mecamylamine or its pharmacodynamic parameters. |
| popPK | Hornick_2011 | irrelevant | 0 | 0 | Mecamylamine is used only as a mechanistic antagonist to block nicotinic receptors, not as the subject of pharmacokinetic analysis. |
| popPK | Ise_2000 | irrelevant | 0 | 0 | The study investigates behavioral effects (conditioned place aversion) and opioid modulation, providing no pharmacokinetic data or quantitative disposition parameters for mecamylamine. |
| popPK | Iwamoto_1990 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment in rats where mecamylamine is used as an antagonist to nicotine, not a pharmacokinetic study reporting disposition parameters for mecamylamine. |
| popPK | Jensen_2014 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological characterization of nicotinic acetylcholine receptors where mecamylamine is used as a reference antagonist, not a PK study of mecamylamine disposition. |
| popPK | Kristufek_1999 | irrelevant | 0 | 0 | The study is a pharmacological investigation of nicotinic receptor properties in vitro, not a pharmacokinetic study, and mecamylamine is used only as a tool compound (antagonist) rather than the subject of PK analysis. |
| popPK | Kurokawa_1994 | irrelevant | 0 | 0 | Mecamylamine is used only as a tool compound (cholinerceptor antagonist) in a receptor mechanism study, with no PK parameters reported. |
| popPK | Mandl_2003 | irrelevant | 0 | 0 | The study is an in-vitro functional pharmacology experiment in guinea-pig muscle where mecamylamine is used as a tool compound, reporting no pharmacokinetic parameters. |
| PGx | Ng_1998 | not_relevant | 0 | 0 | The study investigates the pharmacological actions of NO donors in rats pre-treated with mecamylamine and does not report any pharmacogenomic effects. |
| popPK | OGara_1999 | irrelevant | 0 | 0 | This is a pharmacological study on leech pharynx receptors where mecamylamine is used only as a non-active antagonist tool, not as the subject of a PK analysis. |
| popPK | Pacheco_2001 | irrelevant | 0 | 0 | The study is an in vitro pharmacological characterization of nicotinic receptors where mecamylamine is used only as a non-specific antagonist, with no pharmacokinetic parameters reported. |
| PD | Pacheco_2001 | not_relevant | 3 | 2 | The paper reports an EC50 for nicotine and notes that mecamylamine blocks the response, but it does not provide a concentration-effect curve or numeric PD parameters (such as IC50 or Ki) for mecamylamine itself. |
| popPK | Puttfarcken_1997 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study using F11 cells where mecamylamine is used only as a noncompetitive antagonist, not as the subject drug for pharmacokinetic parameter estimation. |
| popPK | Rai_2026 | irrelevant | 0 | 0 | The paper describes the development and pharmacological characterization of a new NIR fluorescent probe (I-43) for Alzheimer's disease, not the pharmacokinetics of mecamylamine. |
| popPK | Raiteri_1990 | irrelevant | 0 | 0 | The paper is a pharmacological study in vitro on rat synaptosomes where mecamylamine is used as a competitive antagonist to characterize muscarinic receptors, not as the subject of a pharmacokinetic analysis. |
| popPK | Reuben_1998 | irrelevant | 0 | 0 | The study focuses on the pharmacological mechanism of chlorisondamine-induced persistent nicotinic blockade in rat brain and PC12 cells, using mecamylamine only as a control antagonist without reporting its pharmacokinetic parameters. |
| popPK | Reuben_2000 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of nicotine-evoked serotonin release in rat synaptosomes where mecamylamine is used solely as a tool compound (antagonist), not the subject of pharmacokinetic analysis. |
| popPK | Ridley_2002 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic pharmacology experiment using mecamylamine as a pharmacological antagonist in cell lines, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Rigo_2017 | irrelevant | 0 | 0 | Mecamylamine is used only as a pharmacological tool (nicotinic antagonist) to test mechanism of action, not as the subject of a PK study. |
| PD | Rigo_2017 | not_relevant | 0 | 0 | The paper reports PD parameters (ED50, EC50) for the spider toxin PhKv, not for mecamylamine, which is used only as a qualitative antagonist to confirm the cholinergic mechanism. |
| popPK | Robson_2026 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment investigating the effects of mecamylamine on signal detection in rats, not a pharmacokinetic study, and no disposition parameters are reported. |
| popPK | Sacaan_1997 | irrelevant | 0 | 0 | Mecamylamine is used only as a pharmacological tool (blocking agent) in this in vitro/in vivo study of a different drug (SIB-1765F), with no PK parameters reported. |
| popPK | Salgado_2016 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology study measuring antagonist potency in cockroach neurons, not a pharmacokinetic study. |
| PGx | Schnoll_2006 | not_relevant | 0 | 0 | The paper is a general review of pharmacotherapies for tobacco dependence and mentions mecamylamine as a potential treatment, but it does not report specific pharmacogenomic studies or data on how gene variants affect its PK or PD parameters. |
| popPK | Sobrinho_2016 | irrelevant | 0 | 0 | Mecamylamine is used as a pharmacological blocker in an in vitro electrophysiology study, and no PK parameters are reported. |
| popPK | Stojković_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacological effects of carveol, using mecamylamine only as a comparator antagonist in in vitro preparations, without reporting PK parameters for mecamylamine. |
| PD | Stojković_2024 | not_relevant | 0 | 0 | The paper focuses on the pharmacological effects of carveol; mecamylamine is used only as a reference agent to demonstrate carveol's ability to neutralize tetanic fade, with no PD parameters reported for mecamylamine itself. |
| popPK | Sullere_2023 | irrelevant | 0 | 0 | The paper focuses on cholinergic mechanisms of pain relief and does not contain any pharmacokinetic data or quantitative disposition parameters for mecamylamine. |
| popPK | Sun_2019 | irrelevant | 0 | 0 | The paper is a machine learning study on drug-drug interaction text extraction and does not report any pharmacokinetic parameters for mecamylamine. |
| popPK | Tachikawa_2001 | irrelevant | 0 | 0 | The study is a pharmacological characterization of nicotinic receptor subunits using mecamylamine as an antagonist (mechanistic), not a pharmacokinetic study. |
| popPK | Wang_1993 | irrelevant | 0 | 0 | The study investigates the pressor and tachycardic effects of diphenyleneiodonium in rats, using mecamylamine only as a pharmacological tool to block neuronal uptake, rather than studying mecamylamine's pharmacokinetics. |
| popPK | White_2014 | irrelevant | 0 | 0 | The study is a mechanistic electrophysiology paper describing nicotinic receptor subunits in Aplysia, with no pharmacokinetic parameters reported. |
| popPK | Xu_2014 | relevant | 10 | 3 | The paper describes a population PK model for TC-5214 (dexmecamylamine), the active enantiomer of mecamylamine, in humans, but the specific numeric parameter estimates (CL, V, etc.) are not explicitly listed in the provided evidence text. |
| popPK | Zhang_2000 | irrelevant | 0 | 0 | The study is an electrophysiological investigation of neurotransmission in the rat carotid body where mecamylamine is used only as a pharmacological tool/nAChR blocker, not as the subject of PK analysis. |
| popPK | de_1982 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study where mecamylamine is used as a diagnostic antagonist, not a pharmacokinetic study of mecamylamine. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 15:19 UTC</sub>
