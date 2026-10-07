<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C05A&quot;,&quot;href&quot;:&quot;atc/C05A.md&quot;},{&quot;label&quot;:&quot;procaine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Procaine_Seifen1979_reference&quot;,&quot;label&quot;:&quot;Seifen_1979_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_procaine/Procaine_Seifen1979_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# procaine

- **generic name:** procaine
- **ATC codes:** `C05AD05`, `N01BA02`, `S01HA05`
- **DrugBank:** [DB00721](https://go.drugbank.com/drugs/DB00721) · **PubChem:** [CID 4914](https://pubchem.ncbi.nlm.nih.gov/compound/4914)
- **molar mass:** 236.3101 g/mol (C13H20N2O2) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Procaine is a local anesthetic used to relieve pain, for example in procedures involving the skin, eye, or hemorrhoids. It is an approved drug, also approved for veterinary use, and remains in use mainly as a local anesthetic.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q423741](https://www.wikidata.org/wiki/Q423741) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| procaine | parent | 236.31 | C13H20N2O2 | DrugBank | [4914](https://pubchem.ncbi.nlm.nih.gov/compound/4914) | Seifen_1979, Tobin_1976 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:09 | 17:57 | 1/0/2 | 3/0/0 | 0/0/0 | 492,581/36,669 | ollama / qwen3.8:27b-mtp-q8_0 | 14 | 4/8 | 14/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Seifen_1979_reference](drugs/drug_procaine/Procaine_Seifen1979_reference.md) | ▶ model + simulator | 1-compartment, IV | 5 | Seifen AB et al., Pharmacokinetics of intravenous procain…, Anesthesia and analgesia (1979) | [10.1213/00000539-197909000-00007](https://doi.org/10.1213/00000539-197909000-00007) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.643). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cattle</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Olivarez_2022_reference](drugs/drug_procaine/Procaine_Olivarez2022_reference.md) | — | 1-compartment (no model) | 2 | Olivarez JD et al., Pharmacokinetic and pharmacodynamic pro…, Frontiers in veterinary sci… (2022) | [10.3389/fvets.2022.1101461](https://doi.org/10.3389/fvets.2022.1101461) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.154). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Tobin_1976_reference](drugs/drug_procaine/Procaine_Tobin1976_reference.md) | — | 1-compartment (no model) | 5 | Tobin T et al., A review of the pharmacology, pharmacok…, British journal of sports m… (1976) | [10.1136/bjsm.10.3.109](https://doi.org/10.1136/bjsm.10.3.109) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Langerman_1994_TF](drugs/drug_procaine/pd_Langerman_1994_TF.md) | analgetic effect ← procaine · direct sigmoid Emax (Hill) effect | — | Langerman L et al., The partition coefficient as a predicto…, Anesthesia and analgesia (1994) | [10.1213/00000539-199409000-00015](https://doi.org/10.1213/00000539-199409000-00015) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span> | [Lipfert_1989_Total_nerve_activity](drugs/drug_procaine/pd_Lipfert_1989_Total_nerve_activity.md) | Total nerve activity ← procaine · direct sigmoid Emax (Hill) effect | — | Lipfert P et al., [The local anesthetic effect of tetrodo…, Regional-Anaesthesie (1989) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Shimatani_2024_Ca2](drugs/drug_procaine/pd_Shimatani_2024_Ca2.md) | mAChR-mediated Ca2+ responses ← procaine · direct Emax (saturable) effect | — | Shimatani M et al., Local anesthetics inhibit muscarinic ac…, Journal of oral biosciences (2024) | [10.1016/j.job.2024.04.002](https://doi.org/10.1016/j.job.2024.04.002) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Shimatani_2024_arrestin](drugs/drug_procaine/pd_Shimatani_2024_arrestin.md) | carbachol-mediated recruitment of β-arrestin ← procaine · inhibition effect | — | Shimatani M et al., Local anesthetics inhibit muscarinic ac…, Journal of oral biosciences (2024) | [10.1016/j.job.2024.04.002](https://doi.org/10.1016/j.job.2024.04.002) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=procaine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | blood | `BCHE` inhibitor/substrate | DrugBank actor |
| metabolism | brain | `MAOA` inhibitor | DrugBank actor |
| metabolism | liver | `BCHE` inhibitor/substrate, `MAOA` inhibitor | DrugBank actor |
| metabolism | small intestine | `MAOA` inhibitor | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| — | brain | `SLC6A4` inhibitor | DrugBank actor |
| — | platelet | `SLC6A4` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ASPG (inhibitor), CHRNA2 (target), DNMT1 (inhibitor), DNMT3A (inhibitor), GRIN3A (target), HTR3A (target), KCNMA1 (blocker), PLA2G4A (inhibitor), SCN10A (inhibitor), SLC6A2 (inhibitor), SLC6A3 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 234 matched, 86 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 1  ·  needs_review 2  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Seifen_1979.pdf` | Seifen AB et al., Pharmacokinetics of intravenous procain…, Anesthesia and analgesia (1979) | popPK | 10 | [10.1213/00000539-197909000-00007](https://doi.org/10.1213/00000539-197909000-00007) | [573562](https://pubmed.ncbi.nlm.nih.gov/573562) | The paper reports quantitative two-compartment pharmacokinetic parameters (clearance, volume of distribution, half-lives) for procaine in humans with all numeric values present in the text. |
| `Tobin_1976.pdf` | Tobin T et al., A review of the pharmacology, pharmacok…, British journal of sports m… (1976) | popPK | 10 | [10.1136/bjsm.10.3.109](https://doi.org/10.1136/bjsm.10.3.109) | [1000155](https://pubmed.ncbi.nlm.nih.gov/1000155) | The paper reports quantitative pharmacokinetic parameters (half-lives, volumes, absorption rate constants) for procaine in horses, with all values explicitly stated in the text. |
| `Gadalla_1985.pdf` | Gadalla MA et al., Serum levels of procaine in human after…, Die Pharmazie (1985) | popPK | 9 | not captured | [4001146](https://pubmed.ncbi.nlm.nih.gov/4001146) | The study reports pharmacokinetic parameters for procaine in humans, but the specific numeric values are not present in the provided evidence text. |

<sub>queue written 2026-10-06T22:54:29.195539+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adewunmi_1987 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of oxamniquine's effects on chick esophagus, where procaine is used only as a pre-incubation agent to test mechanisms, not as the subject of pharmacokinetic analysis. |
| popPK | Austin_1991 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of local anesthetic potency (EC50) in rat brain slices, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Bailey_2025 | irrelevant | 0 | 0 | The study measures the pharmacokinetics of penicillin G and gentamicin in mares, where procaine is merely the salt form of the penicillin (procaine penicillin) and not the subject drug. |
| popPK | Bang_1992 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of smooth muscle relaxation where procaine is used only as a non-influencing control agent, not as the subject of pharmacokinetic analysis. |
| popPK | Battiston_2021 | irrelevant | 0 | 0 | The paper studies dexamethasone and other corticosteroids, not procaine. |
| popPK | Belousov_1995 | irrelevant | 0 | 0 | The study is a mechanistic electrophysiology investigation in rat hippocampal neurons where procaine is used as a pharmacological tool to block calcium channels, not as a subject drug for pharmacokinetic analysis. |
| popPK | Bolger_1987 | irrelevant | 0 | 0 | The study is an in-vitro binding assay investigating the interaction of local anesthetics with calcium antagonist sites, not a pharmacokinetic study of procaine. |
| popPK | Chou_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of flunixin, florfenicol, and penicillin G in cattle and swine, and does not report data for procaine. |
| PGx | Crémieux_1993 | not_relevant | 0 | 0 | The paper investigates the effect of infection duration on antibiotic efficacy in a rabbit model and does not report any pharmacogenomic effects on PK or PD parameters. |
| PGx | Dimov_2012 | not_relevant | 0 | 0 | The study investigates the effect of BChE variants on soman toxicity, not on the pharmacokinetics or pharmacodynamics of procaine. |
| popPK | Duarte_1992 | irrelevant | 0 | 0 | The study investigates the vasorelaxant mechanism of jatrophone in rat aorta, using procaine only as a potassium channel blocker comparator, not as the subject of pharmacokinetic analysis. |
| popPK | EFSA_2023 | irrelevant | 0 | 0 | The paper is a risk assessment of grayanotoxins in honey and does not contain any pharmacokinetic data for procaine. |
| popPK | Eltze_1989 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of potassium channel antagonists in guinea-pig pulmonary artery, where procaine is used only as a comparative agent, and no pharmacokinetic parameters are reported. |
| popPK | Erdal_2026 | irrelevant | 2 | 0 | The paper focuses on adaptive feedback control algorithms for drug delivery and does not report specific quantitative pharmacokinetic parameters (CL, V, ka) for procaine. |
| popPK | Gadalla_1985 | relevant | 9 | 0 | The study reports pharmacokinetic parameters for procaine in humans, but the specific numeric values are not present in the provided evidence text. |
| popPK | Hahnenkamp_2006 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology experiment measuring NMDA receptor inhibition, not a pharmacokinetic study reporting disposition parameters for procaine. |
| popPK | Hirata_2000 | irrelevant | 0 | 0 | The paper is a mechanistic study on calcium release channels where procaine is used only as a pharmacological blocker, not as the subject of pharmacokinetic analysis. |
| popPK | Iizuka_1998 | irrelevant | 0 | 0 | The study is a mechanistic investigation of calcium signaling in smooth muscle where procaine is used only as a non-specific control agent to abolish responses, not as the subject of pharmacokinetic analysis. |
| popPK | Ito_1999 | irrelevant | 0 | 0 | The study investigates the mechanism of action of xestoquinone on sarcoplasmic reticulum, using procaine only as a comparator agent to block calcium release, not as a subject for pharmacokinetic analysis. |
| popPK | Johnson_1996 | irrelevant | 0 | 0 | The study is a neurophysiological investigation of cocaine effects in rats, using procaine only as a local anesthetic for inactivation, with no pharmacokinetic parameters reported. |
| PGx | KALOW_1964 | not_relevant | 0 | 0 | The provided text is only a title and does not contain any data, results, or specific information regarding procaine pharmacokinetics or pharmacodynamics. |
| popPK | Krishnaprabhu_2024 | irrelevant | 0 | 0 | The paper is a review of acral necrosis cases involving local anesthetics (primarily lidocaine) and epinephrine, and does not report quantitative pharmacokinetic parameters for procaine. |
| popPK | Lallemand_2023 | irrelevant | 0 | 0 | The study models the pharmacokinetics of benzylpenicillin (BP), not procaine, which is only present as a salt/formulation (procaine BP) and is not the subject drug for PK parameter estimation. |
| PD | Lallemand_2023 | not_relevant | 0 | 0 | The paper focuses on population pharmacokinetics (PK) and the calculation of PK/PD cutoffs (fAUC/MIC, fT&gt;MIC) for antimicrobial susceptibility testing, but it does not report a pharmacodynamic (PD) model or numeric PD parameters (e.g., Emax, EC50) for procaine or benzylpenicillin. |
| popPK | Langerman_1994 | irrelevant | 0 | 0 | The study reports pharmacodynamic potency (EC50/ED50) and partition coefficients, not pharmacokinetic disposition parameters (CL, V, t1/2). |
| popPK | Lester_1975 | irrelevant | 0 | 0 | The study is an electrophysiological investigation of acetylcholine receptor conductance in Electrophorus electroplaques, where procaine is used only as a local anesthetic to study voltage-dependent inhibition, not for pharmacokinetic parameter estimation. |
| popPK | Lipfert_1989 | irrelevant | 0 | 0 | The study is an in-vivo electrophysiological investigation of local anesthetic potency (EC50) and onset/recovery kinetics on nerve fibers, not a pharmacokinetic study reporting disposition parameters like clearance or volume of distribution. |
| popPK | Lo_2018 | irrelevant | 0 | 0 | The paper is a systematic review of glucose-lowering agents for diabetes and CKD and does not contain any pharmacokinetic data for procaine. |
| popPK | Manzini_1988 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics and mechanism of action of octylonium bromide, using procaine only as a comparator for electrophysiological effects, with no pharmacokinetic parameters reported. |
| popPK | Matsuo_2000 | irrelevant | 0 | 0 | The study focuses on propiverine and other anticholinergics in mice, with procaine only mentioned as a prior comparator for receptor binding, not as the subject of PK analysis. |
| popPK | Miliutin_1976 | irrelevant | 0 | 0 | The study investigates the allosteric inhibition of acetylcholinesterase by procaine in rat brain homogenates (in vitro/mechanistic), not the pharmacokinetic disposition parameters of procaine. |
| popPK | Morii_1983 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of calcium release channels in rabbit sarcoplasmic reticulum, using procaine only as an inhibitor, and reports no pharmacokinetic parameters for procaine. |
| popPK | Mu_2025 | irrelevant | 0 | 0 | The paper describes the synthesis and biological activity of hybrid molecules containing procaine as a structural component, not the pharmacokinetics of procaine itself. |
| popPK | Nahata_1995 | irrelevant | 0 | 0 | The provided evidence contains pharmacokinetic data for various other drugs (ceftazidime, gentamicin, etoposide, etc.) but contains no data for procaine. |
| popPK | Nakazono_1991 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding procaine pharmacokinetics. |
| popPK | Nguyen_1993 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of porcine coronary artery mechanics, using procaine only as a minor experimental agent, and reports no pharmacokinetic parameters. |
| popPK | Ohata_1988 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding procaine pharmacokinetics. |
| popPK | Olivarez_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of pantoprazole in calves, and procaine is only mentioned as a component of a prophylactic antibiotic (procaine penicillin) administered during surgery, not as the subject drug. |
| popPK | Perez-Castro_2009 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity assay measuring cell viability and apoptosis, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Ross_2012 | not_relevant | 0 | 0 | The paper examines interindividual variation in liver enzyme activity (CES1/CES2) using procaine as a probe substrate, but it does not report a specific gene variant or genotype associated with changes in procaine pharmacokinetics or pharmacodynamics. |
| popPK | Schlieper_1984 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of local anesthetic effects on membranes and cardiac tissues, reporting no pharmacokinetic parameters for procaine. |
| PGx | Seale_1991 | not_relevant | 0 | 0 | The paper focuses on cocaine pharmacogenomics and only mentions procaine in passing as part of a generalized behavioral defect in one mouse strain, without reporting specific PK/PD parameters for procaine. |
| popPK | Shimatani_2024 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of local anesthetics on GPCRs and does not report pharmacokinetic parameters for procaine. |
| popPK | Sjölund_2025 | irrelevant | 0 | 0 | The study investigates benzylpenicillin (penicillin G) in pigs, not procaine, and does not report PK parameters for procaine. |
| popPK | Strickholm_1981 | irrelevant | 0 | 0 | The study investigates ion channel permeability in crayfish axons using procaine as a blocking agent, not pharmacokinetics. |
| popPK | Szatkowski_1989 | irrelevant | 0 | 0 | The study investigates intracellular buffering power in snail neurones using procaine as a weak base, not its pharmacokinetic disposition parameters. |
| popPK | Theander_1996 | irrelevant | 0 | 0 | The study is an electrophysiological analysis of leak currents in lobster neurons where procaine is used only as a pharmacological blocker, not as a subject for pharmacokinetic analysis. |
| popPK | Thirstrup_1992 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vascular smooth muscle relaxation where procaine is used only as a non-specific ion channel blocker/comparator, not as the subject of a pharmacokinetic analysis. |
| PGx | Wong_2018 | not_relevant | 0 | 0 | The paper evaluates an in vitro model for drug metabolism and does not report pharmacogenomic effects of gene variants on procaine PK/PD. |
| PGx | Wu_2004 | not_relevant | 0 | 0 | The study explicitly states that no significant differences in procaine hydrolysis activity were observed among individuals with different haplotypes. |
| popPK | Yang_2002 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of procaine's effect on endothelial function in porcine arteries, not a pharmacokinetic study. |
| popPK | Yost_1993 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of receptor inhibition, not a pharmacokinetic study reporting disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 22:54 UTC</sub>
