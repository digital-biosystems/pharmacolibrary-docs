<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;niflumic acid&quot;}]"></div>

# niflumic acid

- **generic name:** niflumic acid
- **ATC codes:** `M01AX02`, `M02AA17`
- **DrugBank:** [DB04552](https://go.drugbank.com/drugs/DB04552) · **PubChem:** [CID 4488](https://pubchem.ncbi.nlm.nih.gov/compound/4488)
- **molar mass:** 282.218 g/mol (C13H9F3N2O2) — DrugBank
- **groups:** investigational

## About

Niflumic acid is a non-steroidal anti-inflammatory drug (a fenamate) used for inflammatory and rheumatic conditions, including joint and muscular pain. It is not an approved medicine in major databases and is considered investigational, though it has been used topically and orally in some countries.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q304285](https://www.wikidata.org/wiki/Q304285) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| niflumic acid | parent | 282.218 | C13H9F3N2O2 | DrugBank | [4488](https://pubchem.ncbi.nlm.nih.gov/compound/4488) | Jeong_2024 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:26 | 12:36 | 0/1/0 | 2/3/1 | 0/0/0 | 590,906/24,045 | einfracz / qwen3.8-27b | 13 | 3/8 | 13/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Jeong_2024_reference](drugs/drug_niflumic_acid/NiflumicAcid_Jeong2024_reference.md) | — | parent + metabolite (no model) | 5 | Jeong SH et al., Modeling population pharmacokinetics of…, Naunyn-Schmiedeberg's archi… (2024) | [10.1007/s00210-023-02640-0](https://doi.org/10.1007/s00210-023-02640-0) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Dai_2010_I_Slo2_1](drugs/drug_niflumic_acid/pd_Dai_2010_I_Slo2_1.md) | I Slo2.1 ← NFA · direct sigmoid Emax (Hill) effect | — | Dai L et al., Activation of Slo2.1 channels by niflum…, The Journal of general phys… (2010) | [10.1085/jgp.200910316](https://doi.org/10.1085/jgp.200910316) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">mouse</span> | [Sanders_2012_Inward_current](drugs/drug_niflumic_acid/pd_Sanders_2012_Inward_current.md) | Inward current ← niflumic acid · direct Emax (saturable) effect | — | Sanders KM et al., Anoctamins and gastrointestinal smooth…, Experimental physiology (2012) | [10.1113/expphysiol.2011.058248](https://doi.org/10.1113/expphysiol.2011.058248) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Zwart_1995_a3b2_nAChR_inward_current](drugs/drug_niflumic_acid/pd_Zwart_1995_a3b2_nAChR_inward_current.md) | peak amplitude of a3b2 nAChR-mediated inward currents ← niflumic acid · direct Emax (saturable) effect | — | Zwart R et al., Differential modulation of alpha 3 beta…, The Journal of neuroscience… (1995) | [10.1523/JNEUROSCI.15-03-02168.1995](https://doi.org/10.1523/JNEUROSCI.15-03-02168.1995) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Zwart_1995_a3b4_nAChR_inward_current](drugs/drug_niflumic_acid/pd_Zwart_1995_a3b4_nAChR_inward_current.md) | peak amplitude of a3b4 nAChR-mediated inward currents ← niflumic acid · direct Emax (saturable) effect | — | Zwart R et al., Differential modulation of alpha 3 beta…, The Journal of neuroscience… (1995) | [10.1523/JNEUROSCI.15-03-02168.1995](https://doi.org/10.1523/JNEUROSCI.15-03-02168.1995) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Jeong_2024_LTB_4_synthesis_inhibition](drugs/drug_niflumic_acid/pd_Jeong_2024_LTB_4_synthesis_inhibition.md) | leukotriene B 4 synthesis inhibition ← ni umic acid · direct sigmoid Emax (Hill) effect | — | Jeong SH et al., Modeling population pharmacokinetics of…, Naunyn-Schmiedeberg's archi… (2024) | [10.1007/s00210-023-02640-0](https://doi.org/10.1007/s00210-023-02640-0) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Robson_1995_gSCN](drugs/drug_niflumic_acid/pd_Robson_1995_gSCN.md) | gSCN ← niflumic_acid · direct sigmoid Emax (Hill) effect | — | Robson L et al., Activation of a Cl- conductance by SCN-…, The Journal of physiology 4… (1995) | [10.1113/jphysiol.1995.sp020847](https://doi.org/10.1113/jphysiol.1995.sp020847) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [Zhou_2005_I_Na](drugs/drug_niflumic_acid/pd_Zhou_2005_I_Na.md) | sodium current ← niflumic acid · inhibition effect | — | Zhou SS et al., Effect of Cl- channel blockers on aconi…, Experimental physiology (2005) | [10.1113/expphysiol.2005.031484](https://doi.org/10.1113/expphysiol.2005.031484) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [Zhou_2005_polymorphic_ventricular_arrhythmias](drugs/drug_niflumic_acid/pd_Zhou_2005_polymorphic_ventricular_arrhythmias.md) | polymorphic ventricular arrhythmias ← niflumic acid · inhibition effect | — | Zhou SS et al., Effect of Cl- channel blockers on aconi…, Experimental physiology (2005) | [10.1113/expphysiol.2005.031484](https://doi.org/10.1113/expphysiol.2005.031484) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [Zhou_2005_upstroke_of_the_AP](drugs/drug_niflumic_acid/pd_Zhou_2005_upstroke_of_the_AP.md) | upstroke of the AP ← niflumic acid · inhibition effect | — | Zhou SS et al., Effect of Cl- channel blockers on aconi…, Experimental physiology (2005) | [10.1113/expphysiol.2005.031484](https://doi.org/10.1113/expphysiol.2005.031484) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=niflumic_acid) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | kidney | `UGT1A9` inhibitor/unknown | DrugBank actor |
| metabolism | liver | `UGT1A9` inhibitor/unknown | DrugBank actor |

<sub>Actors without a tissue in the table: CLCNKA (inducer), PLA2G1B (inhibitor), PLA2G4A (unknown), PTGS1 (unknown), PTGS2 (inhibitor), SLC16A1 (inhibitor), SLC16A7 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 183 matched, 98 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Acebedo-Martínez_2021 | not_relevant | 0 | 0 | The paper investigates the physicochemical properties (solubility, stability, crystal structure) of niflumic acid cocrystal polymorphs, not pharmacogenomic effects on PK/PD parameters. |
| PGx | Adhiya_2026 | not_relevant | 0 | 0 | The paper reports on music-induced changes in mycophenolic acid metabolism, not pharmacogenomic effects of niflumic acid. |
| popPK | Ahn_2004 | irrelevant | 0 | 0 | The study is a functional electrophysiology investigation of ion channels in mouse cells where niflumic acid serves only as a pharmacological tool compound, with no PK parameters reported. |
| popPK | Bielfeld-Ackermann_1998 | irrelevant | 0 | 0 | The study investigates the electrophysiological effects of maitotoxin on ion channels in Xenopus oocytes, with niflumic acid used only as a channel blocker in an in-vitro assay, containing no pharmacokinetic data. |
| popPK | Branson_2011 | irrelevant | 0 | 0 | no_text gate: only 39 chars of text extracted (&lt; 400) |
| popPK | Cheng_2009 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiology study investigating the mechanism of niflumic acid on ion channels in oocytes, containing no pharmacokinetic parameters. |
| popPK | Choi_2001 | irrelevant | 0 | 0 | The study investigates the mechanism of ginsenosides in Xenopus oocytes where niflumic acid is used only as a channel blocker (comparator/antagonist), not as the subject of pharmacokinetic analysis. |
| popPK | Choi_2003 | irrelevant | 0 | 0 | The study is an in vitro electrophysiological investigation of ginsenosides on GABA receptors, and niflumic acid is only used as a comparator channel blocker with no PK parameters reported. |
| popPK | Cuffe_2000 | irrelevant | 0 | 0 | The paper is an in-vitro study on ion transport mechanisms where niflumic acid is used solely as a chloride channel blocker, not as a subject for pharmacokinetic analysis. |
| popPK | Dai_2010 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiology study of ion channels using niflumic acid as a tool compound/modulator, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Du_2013 | not_relevant | 0 | 0 | The paper investigates the stereoselective glucuronidation of ornidazole, not niflumic acid, and uses niflumic acid only as a chemical inhibitor. |
| popPK | Duan_2000 | irrelevant | 0 | 0 | The study is an in vitro electrophysiology paper where niflumic acid is used solely as a chloride channel blocker, not as the subject drug for pharmacokinetic analysis. |
| popPK | EFSA_2018 | irrelevant | 0 | 0 | The paper concerns the risk assessment of perfluorinated compounds (PFOS and PFOA) and does not mention niflumic acid. |
| popPK | EFSA_2020 | irrelevant | 0 | 0 | The paper is a risk assessment of glycoalkaloids and does not involve niflumic acid or any pharmacokinetic parameters. |
| popPK | EFSA_2025 | irrelevant | 0 | 0 | The paper is a risk assessment of fluoride exposure and does not involve niflumic acid or its pharmacokinetics. |
| PGx | Gaganis_2007 | not_relevant | 0 | 0 | The study reports in vitro metabolic kinetics (Km, CLint) for niflumic acid but does not analyze the impact of genetic variants or genotypes on these parameters. |
| popPK | Garg_2012 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of fenamates as ion channel activators, not a pharmacokinetic study. |
| popPK | Goodyer_1997 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of glucose transport in malaria-infected erythrocytes, using niflumic acid only as a pore inhibitor, and does not report pharmacokinetic parameters for niflumic acid. |
| popPK | Hollenhorst_2012 | irrelevant | 0 | 0 | Niflumic acid is used only as a chloride channel inhibitor in an in vitro mechanistic study of airway ion transport, not as the subject drug for pharmacokinetic analysis. |
| PGx | Jin_2017 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on the PK of talniflumate (an ester of niflumic acid), not niflumic acid itself. |
| popPK | Johnson_2023 | irrelevant | 0 | 0 | The paper studies CSF1R inhibitors (PLX3397/PLX5622) in mouse tauopathy models and does not report pharmacokinetic parameters for niflumic acid. |
| PGx | Joo_2015 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition of niflumic acid on UGTs, not a pharmacogenomic effect (gene variant influence) on its pharmacokinetics or pharmacodynamics. |
| popPK | Kanjhan_2011 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation using niflumic acid only as a channel blocker for Xenopus oocytes, not a pharmacokinetic study of niflumic acid. |
| popPK | Khansaheb_2011 | irrelevant | 0 | 0 | The paper is an in-vitro study on mucus secretion where niflumic acid is used as an experimental inhibitor, not a subject drug for PK analysis. |
| popPK | Li_2013 | irrelevant | 0 | 0 | This is an in vitro electrophysiology study focusing on channel modulation, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Mano_2005 | not_relevant | 0 | 0 | The study investigates in vitro inhibition of UGT1A1 by niflumic acid but does not report any gene variants or their impact on niflumic acid's pharmacokinetic or pharmacodynamic parameters. |
| PGx | Mano_2006 | not_relevant | 5 | 0 | The paper identifies UGT1A1 as the enzyme responsible for niflumic acid glucuronidation but does not report a pharmacogenomic effect of a specific gene variant on a PK or PD parameter. |
| PGx | Mano_2007 | not_relevant | 0 | 0 | The paper reports in vitro inhibition of UGT2B7 by niflumic acid but does not study how a genetic variant affects a PK or PD parameter of niflumic acid. |
| popPK | Matchkov_2004 | irrelevant | 0 | 0 | The paper is an electrophysiological study characterizing chloride currents in rat vascular smooth muscle, where niflumic acid is used only as a pharmacological probe/blocker, not as a drug for PK analysis. |
| PGx | Miners_2011 | not_relevant | 0 | 0 | The paper characterizes niflumic acid as a UGT inhibitor in vitro and does not report any genetic variants affecting its pharmacokinetics or pharmacodynamics. |
| popPK | Nabel_1999 | irrelevant | 0 | 0 | The study is a mechanistic physiological investigation of renin secretion in isolated rat kidneys where niflumic acid is used as a tool compound, not a pharmacokinetic study. |
| popPK | Nagórka_2026 | irrelevant | 0 | 0 | The paper is a biophysical study of Escherichia coli Dr fimbriae and does not involve niflumic acid or any pharmacokinetic parameters. |
| popPK | Papassotiriou_2001 | irrelevant | 0 | 0 | The study uses niflumic acid as a pharmacological blocker to characterize ion channels in tumor cells, providing no pharmacokinetic parameters. |
| popPK | Pedersen_2000 | irrelevant | 0 | 0 | The study investigates cell signaling mechanisms where niflumic acid is used only as a pharmacological tool to block chloride currents, not as a subject for pharmacokinetic analysis. |
| popPK | Petty_1999 | irrelevant | 0 | 0 | The study characterizes a betaine transporter in squid motor neurons using niflumic acid only as a pharmacological blocker, not as a drug for PK analysis. |
| popPK | Piper_2004 | irrelevant | 0 | 0 | The study is an electrophysiology/mechanistic investigation of ion channels where niflumic acid is used only as a negative control/inhibitor, not as the subject of a pharmacokinetic analysis. |
| popPK | Raiteri_2005 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of neurotransmitter release in mouse spinal cord synaptosomes, where niflumic acid is used solely as a pharmacological tool (anion channel blocker) rather than being the subject of pharmacokinetic analysis. |
| popPK | Robson_1995 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics of niflumic acid as a chloride channel blocker in frog proximal tubule cells, reporting Ki values but no pharmacokinetic parameters (CL, V, ka) for the drug. |
| popPK | Rong_2020 | irrelevant | 0 | 0 | Niflumic acid is used only as a selective UGT1A9 inhibitor in an in-vitro enzymology study of p-cresol glucuronidation, with no PK parameters reported for niflumic acid itself. |
| popPK | Schärfe_2017 | irrelevant | 0 | 0 | The paper is a pharmacogenomic study analyzing genetic variation in drug targets (specifically PLA2GLB for niflumic acid) and does not report any pharmacokinetic parameters. |
| popPK | Shuba_1996 | irrelevant | 0 | 0 | The study is a mechanistic electrophysiology investigation in guinea-pig myocytes where niflumic acid is used as a channel blocker, not as a subject for pharmacokinetic analysis. |
| popPK | Smith_2004 | irrelevant | 0 | 0 | The paper is an in-vitro study on GABA(A) receptor modulation, not a pharmacokinetic study, and contains no PK parameters for niflumic acid. |
| popPK | Somogyi-Végh_2019 | irrelevant | 0 | 0 | The paper is a retrospective epidemiological study on the prevalence of drug-drug interactions in Hungarian outpatients and does not report pharmacokinetic parameters for niflumic acid. |
| PGx | Sun_2015 | not_relevant | 0 | 0 | The paper focuses on psoralidin and UGT1A9, using niflumic acid only as a specific inhibitor for experimental validation, rather than analyzing the pharmacokinetics or pharmacodynamics of niflumic acid itself. |
| PGx | Teitelbaum_2019 | not_relevant | 0 | 0 | The paper studies the PK/metabolism of 4-ipomeanol, not niflumic acid, and does not report pharmacogenomic effects on niflumic acid's PK/PD. |
| popPK | Thomine_1997 | irrelevant | 0 | 0 | The study characterizes an anion channel in Arabidopsis using niflumic acid as a pharmacological blocker, rather than measuring the pharmacokinetics of the drug itself. |
| popPK | Valero_2006 | irrelevant | 0 | 0 | This study investigates the mechanism of nitroprusside vasorelaxation in rat aorta where niflumic acid is used only as a tool compound (chloride channel inhibitor), not as the subject of pharmacokinetic analysis. |
| popPK | Wang_2017 | irrelevant | 0 | 0 | This is a mechanistic study on gap junctions in rat cerebral arteries where niflumic acid is used only as a tool compound (inhibitor), with no pharmacokinetic parameters reported. |
| popPK | Woodward_1994 | irrelevant | 0 | 0 | The paper describes in vitro electrophysiology of GABAA receptors, not pharmacokinetic disposition parameters. |
| popPK | Wu_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of ion channel activity in cell lines and does not report pharmacokinetic parameters for niflumic acid. |
| popPK | Wu_2003 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of ion channels using squamocin, with niflumic acid mentioned only as a mechanistic comparator, and no pharmacokinetic parameters are reported. |
| popPK | Zhang_2001 | irrelevant | 0 | 0 | The study is a mechanistic investigation of nitric oxide effects on opossum smooth muscle, where niflumic acid is used solely as a pharmacological blocker, and no pharmacokinetic parameters are reported. |
| popPK | Zwart_1995 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology paper investigating the modulation of nicotinic acetylcholine receptors by niflumic acid, containing no pharmacokinetic parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 01:23 UTC</sub>
