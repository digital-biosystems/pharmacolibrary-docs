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

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 13:19 | 20:41 | 0/1/0 | 1/0/0 | 0/0/0 | 283,436/21,352 | ollama / qwen3.8:27b-mtp-q8_0 | 10 | 3/6 | 10/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Alvarez-Jimenez_2017_reference](drugs/drug_mecamylamine/Mecamylamine_AlvarezJimenez2017_reference.md) | — | 1-compartment (no model) | 0 | Alvarez-Jimenez R et al., Pharmacokinetics and pharmacodynamics o…, Journal of psychopharmacolo… (2017) | [10.1177/0269881116681417](https://doi.org/10.1177/0269881116681417) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Alvarez-Jimenez_2017_2_back_RT](drugs/drug_mecamylamine/pd_Alvarez_Jimenez_2017_2_back_RT.md) | Reaction time of the 2-back paradigm ← mecamylamine · direct linear effect | — | Alvarez-Jimenez R et al., Pharmacokinetics and pharmacodynamics o…, Journal of psychopharmacolo… (2017) | [10.1177/0269881116681417](https://doi.org/10.1177/0269881116681417) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Alvarez-Jimenez_2017_Adaptive_tracker](drugs/drug_mecamylamine/pd_Alvarez_Jimenez_2017_Adaptive_tracker.md) | Adaptive tracker (percentage of accuracy) ← mecamylamine · direct sigmoid Emax (Hill) effect | — | Alvarez-Jimenez R et al., Pharmacokinetics and pharmacodynamics o…, Journal of psychopharmacolo… (2017) | [10.1177/0269881116681417](https://doi.org/10.1177/0269881116681417) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Alvarez-Jimenez_2017_BP](drugs/drug_mecamylamine/pd_Alvarez_Jimenez_2017_BP.md) | Systolic and diastolic blood pressure ← mecamylamine · direct linear effect | — | Alvarez-Jimenez R et al., Pharmacokinetics and pharmacodynamics o…, Journal of psychopharmacolo… (2017) | [10.1177/0269881116681417](https://doi.org/10.1177/0269881116681417) |
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
| `Xu_2014.pdf` | Xu H et al., Population pharmacokinetics of TC-5214,…, Journal of clinical pharmac… (2014) | popPK | 10 | [10.1002/jcph.264](https://doi.org/10.1002/jcph.264) | [24408516](https://pubmed.ncbi.nlm.nih.gov/24408516) | The paper reports a population PK model for dexmecamylamine (TC-5214), the active enantiomer of mecamylamine, but the specific numeric parameter values are not present in the provided evidence. |
| `Hollenhorst_2022.pdf` | Hollenhorst MI et al., Taste Receptor Activation in Tracheal B…, Cells (2022) | pd | 5 | [10.3390/cells11152411](https://doi.org/10.3390/cells11152411) | [35954259](https://www.ncbi.nlm.nih.gov/pubmed/35954259) | metadata signals extractable PD data (EC50) |
| `Badio_1994.pdf` | Badio B et al., Epibatidine, a potent analgetic and nic…, Molecular pharmacology (1994) | pd | 4 | not captured | [8183234](https://www.ncbi.nlm.nih.gov/pubmed/8183234) | metadata signals extractable PD data (EC50) |
| `Reuben_2000.pdf` | Reuben M et al., Nicotine-evoked [3H]5-hydroxytryptamine…, Neuropharmacology (2000) | pd | 4 | [10.1016/s0028-3908(99)00147-1](https://doi.org/10.1016/s0028-3908(99)00147-1) | [10670424](https://www.ncbi.nlm.nih.gov/pubmed/10670424) | metadata signals extractable PD data (EC50) |
| `Salgado_2016.pdf` | Salgado VL, Antagonist pharmacology of desensitizin…, Neurotoxicology (2016) | pd | 4 | [10.1016/j.neuro.2016.08.003](https://doi.org/10.1016/j.neuro.2016.08.003) | [27514662](https://www.ncbi.nlm.nih.gov/pubmed/27514662) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-06T13:11:18.109774+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abulseoud_2020 | irrelevant | 0 | 0 | The study investigates neuroimaging and plasma markers of nicotine withdrawal and does not involve mecamylamine or report any pharmacokinetic parameters. |
| popPK | Allgaier_1995 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of neurotransmitter release in cultured neurons, not a pharmacokinetic study reporting disposition parameters for mecamylamine. |
| popPK | Alvarez-Jimenez_2016 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of scopolamine, not mecamylamine. |
| PGx | An_2012 | not_relevant | 0 | 0 | The paper investigates the effect of cigarette smoke condensate on drug resistance and does not report any pharmacogenomic effects (gene variants) on the PK or PD of mecamylamine. |
| popPK | Anderson_1992 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cyclic AMP regulation in bovine cells where mecamylamine is used only as a pharmacological tool to block nicotinic receptors, not as the subject of a pharmacokinetic analysis. |
| popPK | Baakman_2017 | irrelevant | 4 | 2 | The study reports only limited non-compartmental PK parameters (tmax, Cmax) without clearance, volume, or half-life, and the primary focus is pharmacodynamic cognitive challenge modeling. |
| popPK | Badio_1994 | irrelevant | 0 | 0 | no_text gate: only 53 chars of text extracted (&lt; 400) |
| PD | Badio_1994 | not_relevant | 0 | 0 | The paper focuses on epibatidine, not mecamylamine, and does not report PD parameters for the target drug. |
| popPK | Bertrand_1990 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of receptor binding and blocking in Xenopus oocytes, not a pharmacokinetic study of mecamylamine disposition. |
| popPK | Bonhaus_1995 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of epibatidine, using mecamylamine only as a comparator antagonist, and reports no pharmacokinetic parameters for mecamylamine. |
| popPK | Briggs_1999 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological analysis of a nicotinic receptor mutation, not a pharmacokinetic study, and mecamylamine is used only as a pharmacological probe/antagonist. |
| popPK | Brotz_1996 | irrelevant | 0 | 0 | The study is an in-vitro neurophysiological investigation of receptor pharmacology in blowflies, not a pharmacokinetic study of mecamylamine disposition. |
| popPK | Brown_2015 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of sazetidine-A on nicotinic acetylcholine receptors, using mecamylamine only as a non-specific antagonist to confirm receptor subtype involvement, with no pharmacokinetic parameters reported. |
| popPK | Brynildsen_2016 | irrelevant | 0 | 0 | Mecamylamine is used only as a pharmacological challenge agent to assess nicotine withdrawal, not as the subject of pharmacokinetic analysis. |
| popPK | Choi_2022 | irrelevant | 0 | 0 | The study is a pharmacodynamic pain model in rats where mecamylamine is used as a receptor antagonist probe, not a pharmacokinetic study of mecamylamine. |
| popPK | Choi_2023 | irrelevant | 0 | 0 | Mecamylamine is used only as a pharmacological antagonist to probe mechanisms, not as the subject of a pharmacokinetic study. |
| popPK | Connor_1996 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of opioid receptors where mecamylamine is used only as a nicotinic receptor antagonist control, with no pharmacokinetic parameters reported. |
| popPK | Cuevas_1996 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of VIP modulation of nicotinic receptors where mecamylamine is used only as a pharmacological antagonist, not as the subject of a pharmacokinetic analysis. |
| popPK | Day_1996 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of cholinergic receptors in Schistosoma mansoni, not a pharmacokinetic study of mecamylamine. |
| PD | Day_1996 | not_relevant | 0 | 0 | The paper reports that mecamylamine was ineffective at a single concentration (1 mM) and does not provide any dose-response curve or numeric PD parameters for mecamylamine. |
| PGx | Flores_1999 | not_relevant | 0 | 0 | The study investigates pharmacogenetic variability in the response to epibatidine, not mecamylamine, which is only used as an antagonist to confirm the mechanism of action. |
| popPK | Fu_2003 | irrelevant | 0 | 0 | The study is an electrophysiological investigation of nicotinic receptors in hamster lung where mecamylamine is used only as a pharmacological blocker, not as a subject for PK analysis. |
| popPK | Fu_2009 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of nicotinic receptors where mecamylamine is used only as a pharmacological antagonist, not as the subject of pharmacokinetic analysis. |
| popPK | Gonzales_1993 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of neurotransmitter release in rat cortical slices, not a pharmacokinetic study of mecamylamine. |
| PGx | Hahn_2016 | not_relevant | 2 | 5 | The study reports strain-dependent behavioral responses (PD) to mecamylamine, but it does not report a specific gene variant or genotype associated with these differences, nor does it provide fitted pharmacokinetic parameters. |
| popPK | Hollenhorst_2012 | irrelevant | 0 | 0 | The study is a mechanistic electrophysiology investigation of ion transport in mouse tracheal epithelium where mecamylamine is used only as a pharmacological antagonist, not as a subject for pharmacokinetic analysis. |
| popPK | Hollenhorst_2022 | irrelevant | 0 | 0 | no_text gate: only 94 chars of text extracted (&lt; 400) |
| PD | Hollenhorst_2022 | not_relevant | 0 | 0 | The paper focuses on denatonium and ENaC channels in tracheal brush cells, with no mention of mecamylamine or its pharmacodynamic parameters. |
| popPK | Hornick_2011 | irrelevant | 0 | 0 | Mecamylamine is used only as a pharmacological antagonist to block nicotinic receptors in a study of scopoletin, with no pharmacokinetic parameters reported. |
| popPK | Ise_2000 | irrelevant | 0 | 0 | The study is a behavioral pharmacology investigation of nicotine withdrawal aversion and does not report any pharmacokinetic parameters for mecamylamine. |
| popPK | Iwamoto_1990 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment in rats where mecamylamine is used as a competitive antagonist to block nicotine effects, not a pharmacokinetic study of mecamylamine. |
| popPK | Jensen_2014 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological characterization of nicotinic receptors where mecamylamine is used only as a reference antagonist, not a subject of PK analysis. |
| popPK | Kristufek_1999 | irrelevant | 0 | 0 | The study is a pharmacological investigation of nicotinic receptor subtypes in cultured rat neurons, using mecamylamine only as a tool compound/antagonist, and does not report any pharmacokinetic parameters for mecamylamine. |
| popPK | Kurokawa_1994 | irrelevant | 0 | 0 | Mecamylamine is used only as a non-specific antagonist in an in-vitro neurochemical study, with no pharmacokinetic parameters reported. |
| popPK | Mandl_2003 | irrelevant | 0 | 0 | The study is a functional neurochemical investigation using mecamylamine as a pharmacological antagonist, not a pharmacokinetic study. |
| PGx | Ng_1998 | not_relevant | 0 | 0 | The paper studies the hemodynamic effects of nitric oxide donors in rats and uses mecamylamine only as a pharmacological pretreatment to block ganglionic transmission, without investigating any gene variants or pharmacogenomic effects on mecamylamine's PK or PD. |
| popPK | OGara_1999 | irrelevant | 0 | 0 | The study is a pharmacological characterization of leech pharynx receptors where mecamylamine is used only as a diagnostic antagonist, with no pharmacokinetic parameters reported. |
| popPK | Pacheco_2001 | irrelevant | 0 | 0 | The study is an in-vitro receptor characterization where mecamylamine is used only as a pharmacological antagonist, not as the subject of pharmacokinetic analysis. |
| PD | Pacheco_2001 | not_relevant | 3 | 2 | The paper reports an EC50 for nicotine and notes that mecamylamine blocks the response, but it does not provide a concentration-effect curve or numeric PD parameters (such as IC50 or Ki) for mecamylamine itself. |
| popPK | Puttfarcken_1997 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of nicotinic receptors in F11 cells where mecamylamine is used only as a noncompetitive antagonist, with no pharmacokinetic parameters reported. |
| popPK | Rai_2026 | irrelevant | 0 | 0 | The paper describes the development of NIRF theranostic probes for Alzheimer's disease and does not study the pharmacokinetics of mecamylamine. |
| popPK | Raiteri_1990 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of muscarinic receptors in rat synaptosomes where mecamylamine is used only as a nicotinic antagonist to characterize receptor subtype, not as the subject of a pharmacokinetic analysis. |
| popPK | Reuben_1998 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of chlorisondamine, using mecamylamine only as a control agent in vitro without reporting any pharmacokinetic parameters for mecamylamine. |
| popPK | Reuben_2000 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of nicotinic receptors using mecamylamine as an antagonist, not a pharmacokinetic study of mecamylamine. |
| popPK | Ridley_2002 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of nicotinic receptor function in cell lines, using mecamylamine only as a pharmacological antagonist, and reports no pharmacokinetic parameters. |
| popPK | Rigo_2017 | irrelevant | 0 | 0 | Mecamylamine is used only as a pharmacological antagonist to probe the mechanism of the spider toxin PhKv, and no pharmacokinetic parameters for mecamylamine are reported. |
| PD | Rigo_2017 | not_relevant | 0 | 0 | The paper reports PD parameters (ED50, EC50) for the spider toxin PhKv, not for mecamylamine, which is used only as a qualitative antagonist to confirm the cholinergic mechanism. |
| popPK | Robson_2026 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment in rats using mecamylamine as a receptor antagonist to probe cholinergic signaling, and it does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life) for mecamylamine. |
| popPK | Sacaan_1997 | irrelevant | 0 | 0 | The study characterizes the pharmacology of SIB-1765F, using mecamylamine only as a non-selective antagonist to confirm nicotinic receptor involvement, without reporting any pharmacokinetic parameters for mecamylamine. |
| popPK | Salgado_2016 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological characterization of nicotinic acetylcholine receptors in cockroach neurons, reporting antagonist potency (IC50) rather than pharmacokinetic disposition parameters. |
| PGx | Schnoll_2006 | not_relevant | 0 | 0 | The paper is a general review of tobacco dependence treatments and mentions mecamylamine only as a drug with limited efficacy evidence, without reporting any specific pharmacogenomic effects on its PK or PD parameters. |
| popPK | Sobrinho_2016 | irrelevant | 0 | 0 | The study is a mechanistic electrophysiology investigation where mecamylamine is used only as a pharmacological tool to block nicotinic receptors, not as a subject for PK analysis. |
| popPK | Stojković_2024 | irrelevant | 0 | 0 | The study investigates the pharmacological effects of carveol on neuromuscular systems, using mecamylamine only as a reference antagonist to confirm neuromuscular end-plate involvement, with no PK parameters reported. |
| PD | Stojković_2024 | not_relevant | 0 | 0 | The paper focuses on the pharmacological effects of carveol; mecamylamine is used only as a reference agent to demonstrate carveol's ability to neutralize tetanic fade, with no PD parameters reported for mecamylamine itself. |
| popPK | Sullere_2023 | irrelevant | 0 | 0 | The paper investigates cholinergic mechanisms in pain modulation and does not report pharmacokinetic parameters for mecamylamine. |
| popPK | Sun_2019 | irrelevant | 0 | 0 | The paper is a computational study on drug-drug interaction extraction using neural networks and does not report pharmacokinetic parameters for mecamylamine. |
| popPK | Tachikawa_2001 | irrelevant | 0 | 0 | The study is a pharmacological characterization of nicotinic acetylcholine receptor subunits in bovine cells, not a pharmacokinetic study of mecamylamine. |
| popPK | Wang_1993 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics of diphenyleneiodonium in rats, using mecamylamine only as a pretreatment agent to block sympathetic effects, with no pharmacokinetic parameters reported for mecamylamine. |
| popPK | White_2014 | irrelevant | 0 | 0 | The study is a mechanistic electrophysiology paper characterizing nicotinic receptors in Aplysia, using mecamylamine only as a pharmacological blocker, and reports no pharmacokinetic parameters. |
| popPK | Xu_2014 | relevant | 10 | 0 | The paper reports a population PK model for dexmecamylamine (TC-5214), the active enantiomer of mecamylamine, but the specific numeric parameter values are not present in the provided evidence. |
| popPK | Zhang_2000 | irrelevant | 0 | 0 | The study is a mechanistic electrophysiology investigation of carotid body chemoreceptors where mecamylamine is used only as a pharmacological blocker, not as the subject of a pharmacokinetic analysis. |
| popPK | de_1982 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cholinergic action in rat tissue slices where mecamylamine is used only as a pharmacological tool to block receptors, not as the subject of a pharmacokinetic analysis. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 13:11 UTC</sub>
