<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;sodium folinate&quot;}]"></div>

# sodium folinate

- **generic name:** sodium folinate
- **ATC codes:** `V03AF06`
- **DrugBank:** [DB00650](https://go.drugbank.com/drugs/DB00650) · **PubChem:** [CID 6006](https://pubchem.ncbi.nlm.nih.gov/compound/6006)
- **molar mass:** 473.446 g/mol (C20H23N7O7) — DrugBank
- **groups:** approved, investigational

## About

Sodium folinate (folinic acid) is used as a detoxifying agent to counteract the harmful effects of anticancer treatment, and is also being studied for other uses. It is an approved medicine, though it is not authorised centrally in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27155238](https://www.wikidata.org/wiki/Q27155238) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:19 | 19:14 | 0/0/0 | 1/0/0 | 0/0/0 | 868,071/10,278 | ollama / glm-5.3-flash | 51 | 2/42 | 51/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Klinov_1987_muscle_glycogen_phosphorylase_b_enzymatic_reaction_rate](drugs/drug_sodium_folinate/pd_Klinov_1987_muscle_glycogen_phosphorylase_b_enzymatic_reacti.md) | muscle glycogen phosphorylase b enzymatic reaction rate ← folinic acid · direct sigmoid Emax (Hill) effect | — | Klinov SV et al., [Interaction of muscle glycogen phospho…, Bioorganicheskaia khimiia (1987) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=sodium_folinate) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A8` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: DHFR (modulator), SLC46A1 (modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 702 matched, 151 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Akiyama_2012 | not_relevant | 2 | 3 | ABCC2 genotype is associated with FOLFIRI efficacy (response/PFS) via irinotecan, not with any PK/PD parameter of folinic acid itself. |
| PGx | Alfaro_2022 | not_relevant | 2 | 3 | Narrative review mentions MTHFR/TS/DPYD variants affecting 5-FU/capecitabine efficacy and safety, but no PK/PD parameter changes for sodium folinate (leucovorin) itself are reported. |
| popPK | Alum_2026 | irrelevant | 0 | 0 | This is a rat neuroprotection/docking study of Jimson weed vs methotrexate; folinic acid (leucovorin) appears only as a docking comparator, with no PK parameters for sodium folinate. |
| PGx | Assenat_2006 | not_relevant | 2 | 1 | Review mentions irinotecan pharmacogenetics only in passing; no gene-variant effect on folinic acid PK/PD parameters reported. |
| popPK | Aumente_2006 | irrelevant | 0 | 0 | The population PK model is for methotrexate; folinic acid (sodium folinate) is only the rescue agent, not the subject drug. |
| popPK | Bagarry-Liégey_1996 | irrelevant | 0 | 0 | This is a methotrexate PK study; folinic acid (sodium folinate) is only mentioned as rescue agent, with no PK parameters for it. |
| popPK | Bamgboye_2026 | irrelevant | 0 | 0 | This is a population PK study of topiramate, not sodium folinate; no sodium folinate parameters are reported. |
| popPK | Bandín-Vilar_2022 | irrelevant | 0 | 0 | This is a review of linezolid population PK; sodium_folinate is not the subject drug and no sodium_folinate parameters appear. |
| popPK | Bartkowiak_2026 | irrelevant | 0 | 0 | Transcriptomic drug-repurposing study in zebrafish with no PK parameters for sodium folinate; the drug is not even mentioned. |
| PGx | Bedon_2022 | not_relevant | 2 | 3 | ML toxicity prediction from clinical/biochemical markers; no gene variant effect on sodium_folinate PK/PD parameters reported. |
| PGx | Blau_2003 | not_relevant | 0 | 0 | No gene variant/genotype effect on folinic acid PK/PD is reported; folinic acid dosing is described only as clinical substitution therapy. |
| popPK | Borjkhani_2026 | irrelevant | 0 | 0 | Computational Hodgkin-Huxley model of magnesium neuroprotection in retinal ganglion cells; no pharmacokinetic parameters for sodium folinate anywhere. |
| popPK | Bressolle_1999 | irrelevant | 0 | 0 | This is a population-PK study of 5-fluorouracil; folinic acid (sodium folinate) is only a co-administered agent with no PK parameters reported for it. |
| popPK | Casale_2004 | irrelevant | 0 | 0 | The paper reports PK of 5-fluorouracil and its metabolite 5-FUH2; folinic acid is only a co-administered agent, not the subject drug. |
| PGx | Chang_2013 | not_relevant | 2 | 3 | KRAS genotype affects cetuximab efficacy, not a PK/PD parameter of folinic acid (leucovorin), which is only part of the FOLFIRI backbone. |
| popPK | Cheung_2026 | irrelevant | 0 | 0 | Hypothesis/review paper on treatment-resistant depression with no sodium_folinate PK data or parameters; sodium_folinate not even mentioned. |
| popPK | Cheung_2026_2 | irrelevant | 0 | 0 | Case series of dextromethorphan/fluoxetine/bupropion for PTSD; no sodium folinate and no PK parameters reported. |
| popPK | Clarke_2000 | irrelevant | 0 | 0 | The paper is about raltitrexed; folinic acid is only mentioned as a rescue agent/comparator, with no PK parameters for sodium_folinate. |
| popPK | Climente-Martí_2003 | irrelevant | 0 | 0 | The population PK model and parameters (Vd, Cl) are for 5-fluorouracil; folinic acid is only a co-administered agent, not the subject drug. |
| popPK | Cohen_2025 | irrelevant | 0 | 0 | no_text gate: only 192 chars of text extracted (&lt; 400) |
| popPK | Cohn_2017 | irrelevant | 0 | 0 | This is an exposure–response study of ramucirumab; folinic acid (leucovorin) is only a co-administered FOLFIRI component, with no PK parameters for sodium folinate reported. |
| popPK | Comandone_2005 | irrelevant | 0 | 0 | The PK subject is high-dose methotrexate; folinic acid (folinate) appears only as rescue agent, with no folinate disposition parameters reported. |
| popPK | Dahan_2024 | irrelevant | 0 | 0 | The paper is a PKPD study of ketamine/norketamine with sodium nitroprusside; sodium folinate is not mentioned at all, and no disposition parameters for it appear. |
| popPK | Darwish_2025 | irrelevant | 0 | 0 | This is a population PK study of trofinetide, not sodium folinate; no sodium folinate parameters are present. |
| PGx | Delgado-Plasencia_2013 | not_relevant | 3 | 2 | Reports MTHFR C677T association with CRC survival after 5-FU/folinic acid, but no PK/PD parameter of folinic acid is quantified. |
| popPK | Dimitrakopoulou-Strauss_2004 | irrelevant | 0 | 0 | This is an 18F-FDG PET kinetic study in colorectal cancer patients on FOLFOX; folinic acid is only a co-administered chemotherapy component, not the subject of PK modeling. |
| popPK | Donelli_1995 | irrelevant | 0 | 0 | The paper reports PK of methotrexate, not sodium folinate, which is only mentioned as rescue therapy. |
| PGx | Duldulao_2013 | not_relevant | 4 | 5 | Reports polymorphism associations with toxicity (adverse events) from 5-FU/folinic acid regimens, not a PK/PD parameter change of sodium_folinate itself. |
| popPK | Dupuis_2008 | irrelevant | 0 | 0 | The PK subject is methotrexate; folinic acid (leucovorin) is only a rescue agent, not modeled, and no numeric parameters for sodium folinate appear. |
| PGx | Elens_2021 | not_relevant | 2 | 3 | The paper reports MTHFR1298 genotype effects on methotrexate-induced CSF Tau/pTau toxicity biomarkers, not on any PK/PD parameter of folinic acid (sodium folinate) itself; folinic acid supplementation is only mentioned as an intervention without genotype-specific folinate PK/PD outcomes. |
| PGx | Etienne_2004 | not_relevant | 3 | 5 | Reports MTHFR genotype associations with tumor response and survival under 5FU-folinic acid, not an effect on a PK/PD parameter of sodium_folinate itself. |
| PGx | Etienne_2004_2 | not_relevant | 2 | 5 | The paper reports gene polymorphism effects on 5-fluorouracil sensitivity (IC50), not on any PK/PD parameter of sodium folinate itself; folinic acid is only a modulating co-treatment. |
| PGx | Fava_2009 | not_relevant | 2 | 1 | Mentions genetic polymorphisms affecting folate bioavailability only in general terms, with no specific PK/PD parameter for folinic acid. |
| popPK | Fimbo_2023 | irrelevant | 0 | 0 | This is a population-PK study of ivermectin (with albendazole), not sodium folinate; no sodium folinate parameters are reported. |
| PGx | Frye_2017 | not_relevant | 3 | 0 | Abstract mentions folinic acid response in ASD with folate transport autoantibodies but reports no PK/PD parameter effect of a genotype. |
| PGx | Gilbar_2001 | not_relevant | 0 | 0 | Reports a phenytoin–fluorouracil drug interaction via CYP2C9 inhibition, not a pharmacogenomic variant effect on sodium_folinate PK/PD. |
| PGx | Helsby_2010 | not_relevant | 2 | 3 | Paper concerns 5-FU altering CYP2C19 phenotype; no gene variant effect on sodium_folinate PK/PD parameters is reported. |
| popPK | Hovda_2005 | irrelevant | 0 | 0 | Sodium folinate is only mentioned as a treatment not given; the PK parameters reported are for methanol and formate, not folinate. |
| PGx | Hu_2021 | not_relevant | 2 | 3 | Study concerns 5-FU resistance via miR-21/PDCD4/JNK/ABCG2 in cell lines; no gene variant effect on sodium folinate PK/PD parameters is reported. |
| PGx | Inoue_2014 | not_relevant | 3 | 5 | Reports associations of FcγR/EGFR polymorphisms with cetuximab efficacy outcomes (OS, response rate), not a PK/PD parameter of sodium folinate. |
| popPK | Jebabli_2015 | irrelevant | 0 | 0 | The paper models methotrexate population PK; folinic acid (sodium folinate) is only mentioned as rescue co-administration with no PK parameters for it. |
| PGx | Johnstone_2019 | not_relevant | 2 | 3 | Paper concerns PLPBP variants and B6-dependent epilepsy; folinic acid only mentioned as prior diagnosis, no gene effect on folinate PK/PD parameters. |
| PGx | Kalaimani_2025 | not_relevant | 2 | 5 | The paper concerns folic acid supplementation and endogenous folate metabolite concentrations with MTHFR genotype; sodium folinate (folinic acid) is not administered as a drug, so no pharmacogenomic effect on its PK/PD parameters is reported. |
| popPK | Kim_2026 | irrelevant | 0 | 0 | This is a cryo-EM structural biology study of NMDA receptors with no pharmacokinetic data for sodium folinate; the drug is not mentioned at all. |
| popPK | Kissel_1997 | irrelevant | 0 | 0 | The PK model and all quantitative parameters (clearances, Km, Vmax, k_in/k_out) describe 5-fluorouracil, not sodium_folinate, which is only a co-administered biomodulator with no PK values reported. |
| PGx | Kjersem_2014 | not_relevant | 3 | 5 | Reports FCGR2A/FCGR3A genotype associations with cetuximab response/survival, not a PK or PD parameter of folinic acid. |
| popPK | Klinov_1987 | irrelevant | 0 | 0 | In-vitro enzyme binding/inhibition study with no pharmacokinetic disposition parameters for folinic acid. |
| popPK | Klinov_1988 | irrelevant | 0 | 0 | In-vitro enzyme inhibition study of folinate analogs on rabbit muscle phosphorylase; no pharmacokinetic parameters for sodium folinate. |
| PGx | Labriet_2019 | not_relevant | 3 | 5 | Reports germline SNP associations with overall survival in FOLFIRI-treated patients, not effects on PK/PD parameters of folinic acid. |
| PGx | Lam_2022 | not_relevant | 2 | 1 | Systematic review of folate efficacy in psychiatric disorders; no pharmacogenomic effect on PK/PD parameters of sodium folinate reported. |
| PGx | Lazar_2004 | not_relevant | 0 | 0 | The paper concerns DPYD variants affecting 5-FU toxicity, not any PK/PD effect of sodium_folinate (folinic acid), which is only mentioned as co-administered. |
| popPK | Leegwater_2025 | irrelevant | 0 | 0 | This is a population PK study of trimethoprim/sulfamethoxazole and its metabolite, not sodium folinate; no sodium folinate parameters appear. |
| PGx | Lehman_2002 | not_relevant | 2 | 1 | Review mentions pharmacogenetics of TS inhibitors only in passing; no gene-variant effect on folinic acid PK/PD parameters reported. |
| popPK | Li_2025 | irrelevant | 0 | 0 | This is a population PK study of polymyxin B, not sodium folinate; no sodium folinate parameters appear. |
| PGx | Lim_2005 | not_relevant | 2 | 3 | Only mentions folinic acid use in one patient and speculates pharmacogenetics may predict MTX risk; no gene variant effect on folinate PK/PD reported. |
| popPK | Lévi_2000 | irrelevant | 0 | 0 | This is a pharmacokinetic review of oxaliplatin; folinic acid (leucovorin) appears only as a co-administered comparator, with no PK parameters for sodium_folinate itself. |
| PGx | Meshkin_2007 | not_relevant | 3 | 2 | General review of folate nutrigenetics with no specific gene-variant effect on PK/PD parameters of folinic acid reported. |
| PGx | Misselbeck_2019 | not_relevant | 2 | 2 | Computational modeling of folate metabolism with MTHFR polymorphism effects on endogenous folate pools, not on PK/PD parameters of sodium folinate (leucovorin) administration. |
| PGx | Mohelnikova-Duchonova_2014 | not_relevant | 3 | 1 | Review abstract on FOLFOX/FOLFIRI biomarkers with no specific gene-variant effect on folinate PK/PD parameters reported. |
| popPK | Monjanel-Mouterde_2002 | irrelevant | 0 | 0 | The PK model and parameters (CL, t1/2) are for methotrexate; folinic acid is only the rescue agent, not the studied drug. |
| popPK | Moreno-Gomez_2026 | irrelevant | 0 | 0 | Study of DREADD ligand off-target effects on anesthesia emergence in mice; no PK parameters for sodium folinate (or any disposition parameters) are reported. |
| PGx | Murphy_2012 | not_relevant | 3 | 3 | MTHFR genotypes are linked to clinical outcomes (survival, GVHD) with folinic acid use, not to any PK/PD parameter of sodium folinate itself. |
| popPK | Nassim_1998 | irrelevant | 2 | 1 | Folinic acid is only a co-administered modulating agent; the pharmacokinetic parameters reported (AUC, clearance) are for 5-fluorouracil, not sodium folinate, and no folinate PK values appear. |
| popPK | Olivo_2024 | irrelevant | 0 | 0 | This is a population PK model of methotrexate; leucovorin (folinic acid) is only mentioned as rescue therapy, with no PK parameters for sodium folinate itself. |
| popPK | Oláh_2026 | irrelevant | 0 | 0 | This is a neuroscience study of GluN2D-NMDAR modulators and ketamine in mice; sodium folinate is not mentioned and no PK parameters for it appear. |
| PGx | Oosterom_2019 | not_relevant | 3 | 5 | MTHFR c.677C&gt;T genotype was tested but showed no significant effect on folate levels, and folate vitamers are not PK/PD parameters of leucovorin itself. |
| PGx | Pannu_2019 | not_relevant | 0 | 0 | Review of methotrexate overdose management; no pharmacogenomic effects on folinic acid PK/PD reported. |
| PGx | Passero_2016 | not_relevant | 3 | 1 | Abstract mentions pharmacogenetics of irinotecan, not folinic acid; no gene-variant effect on sodium_folinate PK/PD parameters reported. |
| popPK | Petric_2023 | irrelevant | 0 | 0 | The paper models vinpocetine and its metabolite apovincaminic acid, not sodium folinate; no sodium folinate parameters appear. |
| popPK | Plard_2007 | irrelevant | 0 | 0 | The study concerns methotrexate PK in children; sodium folinate is not the subject drug and no folinate parameters are reported. |
| popPK | Radukic_2026 | irrelevant | 0 | 0 | This is a neurobiology study of alprazolam withdrawal in rats with no pharmacokinetic parameters for sodium folinate (which does not appear at all). |
| popPK | Rafsanjani_2026 | irrelevant | 0 | 0 | This is a deep-learning spatial imaging study of PDX colorectal cancer tissue; folinic acid is only a co-administered FOLFOX component with no PK parameters reported. |
| PGx | Rahman_2017 | not_relevant | 2 | 3 | UGT1A1*28 dosing guidance pertains to irinotecan, not sodium_folinate; no PK/PD effect of a variant on folinic acid is reported. |
| PGx | Ray_2022 | not_relevant | 2 | 3 | Folinic acid is given empirically to replete CSF 5-MTHF in BH4 deficiencies, but no gene-variant effect on a PK/PD parameter of folinic acid is quantified. |
| PGx | Rodan_2018 | not_relevant | 2 | 3 | MTHFS variants affect endogenous folate metabolism and response to folinic acid, but no gene-dependent PK/PD parameter of sodium folinate is quantified. |
| PGx | Ruzzo_2007 | not_relevant | 3 | 4 | Outcomes are PFS and neurotoxicity (clinical/toxicity endpoints), not a PK or PD parameter of folinic acid; no fitted effect size for sodium_folinate. |
| PGx | Salaün_2022 | not_relevant | 3 | 2 | Reports MTHFR/SLCO1B1 mutations associated with MTX toxicity, but no PK/PD parameter change for sodium_folinate (folinic acid) is quantified. |
| PGx | Sarris_2019 | not_relevant | 2 | 2 | RCT of folinic acid in MDD reports SNP moderation of antidepressant response, not a PK/PD parameter effect. |
| popPK | Saud_2026 | irrelevant | 0 | 0 | This is a study of ivermectin's biochemical effects in rabbits, with no sodium_folinate PK parameters reported. |
| PGx | Scaglione_2014 | not_relevant | 3 | 2 | Discusses MTHFR polymorphism qualitatively regarding folate metabolism, but no PK/PD parameter of folinic acid (sodium folinate) is quantified. |
| popPK | Schoondermark-van_1995 | irrelevant | 0 | 0 | Folinic acid is only a co-administered rescue supplement; the PK parameters (half-lives, Cmax, one-compartment model) are for pyrimethamine and sulfadiazine, not sodium folinate. |
| PGx | Seshia_2011 | not_relevant | 1 | 1 | Only a generic mention that pharmacogenetic information may influence drug doses; no gene variant effect on folinic acid PK/PD parameters reported. |
| popPK | Singh_2026 | irrelevant | 0 | 0 | Computational in silico study of mGluR5 ligands; no sodium folinate PK parameters reported. |
| PGx | Steiner_2005 | not_relevant | 3 | 3 | Case report of DPYD/UGT1A1 variants causing 5FU/irinotecan toxicity; folinic acid is only a co-administered agent with no gene effect on its PK/PD reported. |
| popPK | Steinwurzel_2025 | irrelevant | 0 | 0 | This is a human EEG/MRS study of β-hydroxybutyrate supplementation; sodium_folinate is not mentioned and no PK disposition parameters (CL, V, half-life) are reported. |
| PGx | Suenaga_2014 | not_relevant | 3 | 2 | UGT1A1 polymorphism effects are reported only for irinotecan/SN-38 PK and efficacy, with no pharmacogenomic effect on folinic acid (sodium folinate) PK or PD parameters. |
| popPK | Sukhram_2026 | irrelevant | 0 | 0 | This is a scoping review of ketamine/esketamine in diabetes; sodium folinate is not mentioned and no PK parameters for it appear. |
| PGx | Susgun_2023 | not_relevant | 3 | 2 | FOLR1 variant with folinic acid treatment response is described qualitatively, with no PK/PD parameter effect reported. |
| popPK | Suthahar_2026 | irrelevant | 0 | 0 | This is a systematic review of 5-fluorouracil population PK; sodium folinate is not the subject drug and no sodium folinate parameters appear. |
| popPK | Tabernero_2010 | irrelevant | 0 | 0 | Sodium folinate is only part of the FOLFIRI co-administration; the PK subject is cetuximab, with no folinate disposition parameters reported. |
| popPK | Tan_2026 | irrelevant | 0 | 0 | This is a population-PK study of 5-fluorouracil; folinic acid (leucovorin) is only mentioned as part of co-administered regimens, with no sodium folinate PK parameters. |
| popPK | Trenque_2004 | irrelevant | 0 | 0 | Sodium folinate (folinic acid) is only a co-administered rescue agent; the population PK parameters reported are for pyrimethamine and sulfadoxine, not folinate. |
| PGx | Urreizti_2010 | not_relevant | 2 | 3 | Folinic acid is mentioned only as treatment; no genotype-linked PK/PD parameter effect is reported. |
| popPK | Wattanatorn_1997 | irrelevant | 1 | 1 | The PK subject is 5-fluorouracil; folinic acid is only a co-administered agent with no folinate parameters reported. |
| PGx | Watts_2022 | not_relevant | 2 | 5 | The paper reports ST6GAL1 rs6783836 association with hand-foot syndrome (a toxicity, not a PK/PD parameter), and the SNP was not associated with HFS in the FOLFOX (folinic acid) arm (OR=0.86, P=.65). |
| popPK | Xia_2026 | irrelevant | 0 | 0 | This is a narrative review of magnesium sulfate, not sodium folinate; no PK parameters for sodium folinate appear. |
| popPK | Xue_2023 | irrelevant | 0 | 0 | This is a warfarin PKPD study; sodium folinate does not appear as the subject drug, and no folinate disposition parameters are reported. |
| popPK | Yamada_2025 | irrelevant | 0 | 0 | Sodium folinate (leucovorin) is only a co-administered agent; the PopPK models and parameters are for 5-FU and oxaliplatin, with no folinate PK values (those would be in supplementary tables anyway). |
| popPK | Yamada_2025_2 | irrelevant | 0 | 0 | This is a population PK study of zolbetuximab, a different drug; sodium folinate (leucovorin) appears only as a chemotherapy backbone component (mFOLFOX6), with no PK parameters for sodium folinate itself. |
| popPK | Yang_1982 | irrelevant | 2 | 1 | In-vitro membrane vesicle transport study of folate compounds without numeric disposition parameters for sodium folinate. |
| popPK | Zhang_2015 | irrelevant | 0 | 0 | The population-PK model is for methotrexate; sodium folinate (leucovorin) is only mentioned as rescue co-medication, with no folinate PK parameters reported. |
| PGx | Zhang_2025 | not_relevant | 3 | 5 | Gene polymorphisms are associated with changes in behavioral PEP-3 efficacy scores, not with any pharmacokinetic or pharmacodynamic parameter of folinic acid. |
| popPK | Zhao_1997 | irrelevant | 0 | 0 | In-vitro cell transport study of methotrexate, not PK of sodium folinate; no disposition parameters for the drug. |
| popPK | Zhao_1998 | irrelevant | 2 | 3 | In-vitro murine leukemia cell uptake kinetics of 5-CHO-THF (folinate), not in-vivo pharmacokinetic disposition parameters; some influx Vmax/Km numbers appear but they are carrier transport, not CL/V. |
| popPK | Zhao_1999 | irrelevant | 1 | 2 | In-vitro cell transport study of folate carrier mutants, not a pharmacokinetic study with disposition parameters for sodium folinate. |
| popPK | Zhou_2026 | irrelevant | 0 | 0 | This is a population PK/PD study of gabapentin, not sodium folinate; no folinate parameters are present. |
| PGx | van_1998 | not_relevant | 3 | 2 | Discusses MTHFR variants predisposing to MTX toxicity and folinic acid co-prescription, but no gene variant effect on a PK/PD parameter of sodium_folinate itself. |
| PGx | van_2001 | not_relevant | 2 | 3 | The pharmacogenomic effect (MTHFR C677T on MTX toxicity) concerns methotrexate, not sodium_folinate, which appears only as supplementation without genotype-linked PK/PD effects. |
| PGx | van_2002 | not_relevant | 2 | 5 | MTHFR C677T effects concern homocysteine levels and MTX efficacy/toxicity, not a PK/PD parameter of folinic acid itself; no genotype effect on folinate disposition or response is reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
