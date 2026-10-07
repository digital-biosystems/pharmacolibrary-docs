<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;levomilnacipran&quot;}]"></div>

# levomilnacipran

- **generic name:** levomilnacipran
- **ATC codes:** `N06AX28`
- **DrugBank:** [DB08918](https://go.drugbank.com/drugs/DB08918) · **PubChem:** [CID 6917779](https://pubchem.ncbi.nlm.nih.gov/compound/6917779)
- **molar mass:** 246.348 g/mol (C15H22N2O) — DrugBank
- **groups:** approved

## About

Levomilnacipran is an antidepressant used to treat major depressive disorder. It is an approved medication, mainly used in the United States, and carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6535779](https://www.wikidata.org/wiki/Q6535779) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:24 | 0:52 | 0/0/0 | 1/0/0 | 0/0/5 | 65,351/2,320 | ollama / glm-5.3-flash | 13 | 3/7 | 5/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Wen_2025_constipation](drugs/drug_levomilnacipran/pd_Wen_2025_constipation.md) | constipation ← levomilnacipran · model not identified | — | Wen S et al., Comparative gastrointestinal effects of…, Translational psychiatry (2025) | [10.1038/s41398-025-03751-3](https://doi.org/10.1038/s41398-025-03751-3) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Wen_2025_nausea_and_vomiting](drugs/drug_levomilnacipran/pd_Wen_2025_nausea_and_vomiting.md) | nausea and vomiting ← levomilnacipran · stimulation effect | — | Wen S et al., Comparative gastrointestinal effects of…, Translational psychiatry (2025) | [10.1038/s41398-025-03751-3](https://doi.org/10.1038/s41398-025-03751-3) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> | **CYP2B6** | `Q27` · CL/F | metabolism | [Bousman_2023](drugs/drug_levomilnacipran/pgx_Bousman_2023_CYP2B6_Q27.md) | Bousman CA et al., Clinical Pharmacogenetics Implementatio…, Clinical pharmacology and t… (2023) | [10.1002/cpt.2903](https://doi.org/10.1002/cpt.2903) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> | **CYP2C19** | `Q27` · CL/F | metabolism | [Bousman_2023](drugs/drug_levomilnacipran/pgx_Bousman_2023_CYP2C19_Q27.md) | Bousman CA et al., Clinical Pharmacogenetics Implementatio…, Clinical pharmacology and t… (2023) | [10.1002/cpt.2903](https://doi.org/10.1002/cpt.2903) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> | **CYP2D6** | `Q27` · CL/F | metabolism | [Bousman_2023](drugs/drug_levomilnacipran/pgx_Bousman_2023_CYP2D6_Q27.md) | Bousman CA et al., Clinical Pharmacogenetics Implementatio…, Clinical pharmacology and t… (2023) | [10.1002/cpt.2903](https://doi.org/10.1002/cpt.2903) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **HTR2A** | `Q320` · Emax | target | [Bousman_2023](drugs/drug_levomilnacipran/pgx_Bousman_2023_HTR2A_Q320.md) | Bousman CA et al., Clinical Pharmacogenetics Implementatio…, Clinical pharmacology and t… (2023) | [10.1002/cpt.2903](https://doi.org/10.1002/cpt.2903) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **SLC6A4** | `Q320` · Emax | target | [Bousman_2023](drugs/drug_levomilnacipran/pgx_Bousman_2023_SLC6A4_Q320.md) | Bousman CA et al., Clinical Pharmacogenetics Implementatio…, Clinical pharmacology and t… (2023) | [10.1002/cpt.2903](https://doi.org/10.1002/cpt.2903) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=levomilnacipran) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` metabolism/substrate | DrugBank actor |
| metabolism | heart | `CYP2J2` substrate | DrugBank actor |
| metabolism | liver | `CYP2B6` metabolism, `CYP2C19` metabolism/substrate, `CYP2C8` substrate, `CYP2D6` metabolism/substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP2J2` substrate, `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| — | brain | `SLC6A4` inhibitor/target | DrugBank actor |
| — | platelet | `SLC6A4` inhibitor/target | DrugBank actor |

<sub>Actors without a tissue in the table: HTR2A (target), SLC6A2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 60 matched, 42 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bundgaard_2016.pdf` | Bundgaard C et al., P-glycoprotein differentially affects e…, Neuropharmacology (2016) | pd | 5 | [10.1016/j.neuropharm.2015.12.009](https://doi.org/10.1016/j.neuropharm.2015.12.009) | [26700248](https://www.ncbi.nlm.nih.gov/pubmed/26700248) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-06T23:24:32.037185+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Acosta_2025 | irrelevant | 0 | 0 | Computational drug-design study with no levomilnacipran PK parameters. |
| PD | Acosta_2025 | not_relevant | 0 | 0 | The paper focuses on computational molecular mutation operators for drug design and does not report any pharmacodynamic or exposure-response data for levomilnacipran. |
| popPK | Ahmadi_2025 | irrelevant | 0 | 0 | In silico docking/pharmacokinetic-prediction study for dengue RdRp inhibitors; no levomilnacipran PK parameters reported. |
| PD | Ahmadi_2025 | not_relevant | 0 | 0 | The paper is a computational study on dengue virus inhibitors and does not mention levomilnacipran or report any pharmacodynamic data. |
| popPK | Bakish_2014 | irrelevant | 0 | 0 | This is an efficacy/safety trial with no PK parameters reported. |
| PD | Bousman_2023 | not_relevant | 1 | 0 | The paper is a clinical pharmacogenetics guideline focusing on genotype-based dosing recommendations and does not report primary pharmacodynamic modeling or numeric exposure-response parameters for levomilnacipran. |
| popPK | Bundgaard_2016 | irrelevant | 0 | 0 | no_text gate: only 147 chars of text extracted (&lt; 400) |
| PD | Bundgaard_2016 | not_relevant | 0 | 0 | The paper focuses on P-glycoprotein-mediated transport kinetics at the blood-brain barrier (PK/transport), not on pharmacodynamic exposure-response or dose-response relationships. |
| popPK | Chen_2021 | irrelevant | 0 | 0 | This is a population PK study of sirolimus, not levomilnacipran; no levomilnacipran parameters appear. |
| PD | Chen_2021 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics (PK) of sirolimus, not levomilnacipran, and does not report any pharmacodynamic (PD) or exposure-response relationship. |
| popPK | Chun_2025 | irrelevant | 0 | 0 | This is a population PK/PD study of tramadol and its metabolite M1, not levomilnacipran; no levomilnacipran parameters appear. |
| PD | Chun_2025 | not_relevant | 0 | 0 | The paper reports a PK/PD model for tramadol, not levomilnacipran. |
| popPK | Ciscato_2025 | irrelevant | 0 | 0 | Chemogenetic protocol paper in mice with no levomilnacipran PK parameters reported. |
| PD | Ciscato_2025 | not_relevant | 0 | 0 | The paper describes a chemogenetic protocol (CATCH) for receptor antagonism in mice and does not report any pharmacokinetic or pharmacodynamic data, exposure-response relationships, or numeric PD parameters for levomilnacipran. |
| PD | Citrome_2016_2 | not_relevant | 0 | 0 | The paper is an indirect clinical comparison using NNT/NNH metrics and does not report any pharmacokinetic or pharmacodynamic modeling, exposure-response relationships, or numeric PD parameters for levomilnacipran. |
| popPK | Darko_2021 | irrelevant | 0 | 0 | Computational docking study on anti-Ebola compounds with no levomilnacipran PK data. |
| PD | Darko_2021 | not_relevant | 0 | 0 | The paper is a computational study on anti-Ebola compounds and does not mention levomilnacipran or report any pharmacodynamic or exposure-response data. |
| PD | Dyck_2008 | not_relevant | 3 | 2 | The paper reports in vitro IC50 values and qualitative efficacy in a pain model, but does not provide an exposure-response or dose-response curve with numeric PD parameters (e.g., Emax, EC50) for levomilnacipran. |
| popPK | Dziubina_2026 | irrelevant | 0 | 0 | This is a PK study of novel DSZ compounds, not levomilnacipran; no levomilnacipran parameters appear. |
| PD | Dziubina_2026 | not_relevant | 0 | 0 | The paper studies novel compounds (DSZ-13 and DSZ-19), not levomilnacipran, and does not report specific numeric PD parameters for the target drug. |
| popPK | EFSA_2023 | irrelevant | 0 | 0 | EFSA risk assessment of grayanotoxins in honey; no levomilnacipran PK parameters reported. |
| PD | EFSA_2023 | not_relevant | 0 | 0 | The paper discusses grayanotoxins in honey and is unrelated to levomilnacipran pharmacodynamics. |
| PGx | Eugene_2020 | not_relevant | 0 | 0 | FAERS disproportionality analysis of somnolence by drug; no gene variant/genotype/phenotype effects on levomilnacipran PK or PD parameters reported. |
| popPK | European_2018 | irrelevant | 0 | 0 | This is an antimicrobial resistance surveillance report with no levomilnacipran PK data or parameters. |
| PD | European_2018 | not_relevant | 0 | 0 | The paper is a report on antimicrobial resistance in bacteria and does not contain any pharmacodynamic or exposure-response data for levomilnacipran. |
| popPK | European_2021 | irrelevant | 0 | 0 | This is an antimicrobial resistance surveillance report with no levomilnacipran PK data or parameters. |
| PD | European_2021 | not_relevant | 0 | 0 | The paper is a report on antimicrobial resistance in bacteria and contains no pharmacodynamic or exposure-response data for levomilnacipran. |
| popPK | Gangneux_2019 | irrelevant | 0 | 0 | no_text gate: only 297 chars of text extracted (&lt; 400) |
| PD | Gangneux_2019 | not_relevant | 0 | 0 | The text is an invitation to a medical mycology conference and contains no information regarding levomilnacipran or pharmacodynamics. |
| popPK | Gommoll_2014 | irrelevant | 0 | 0 | This is a Phase III efficacy/safety trial of levomilnacipran ER in MDD with no PK parameters reported. |
| popPK | Griffiths_2019 | irrelevant | 0 | 0 | The paper reports PK of AD-114 (a CXCR4-targeting single domain antibody), not levomilnacipran; no levomilnacipran parameters appear. |
| PD | Griffiths_2019 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics and safety of a CXCR4-targeting antibody (AD-114) and does not mention levomilnacipran or report any pharmacodynamic parameters. |
| popPK | Gómez-Perales_2021 | irrelevant | 0 | 0 | no_text gate: only 59 chars of text extracted (&lt; 400) |
| PD | Gómez-Perales_2021 | not_relevant | 0 | 0 | The paper discusses the myth of iodine allergy in nuclear medicine and does not contain any pharmacodynamic or exposure-response data for levomilnacipran. |
| popPK | Insausti_2022 | irrelevant | 0 | 0 | Paper is about HIV-1 antibody 10E8 structure-function, not levomilnacipran PK; no PK parameters present. |
| PD | Insausti_2022 | not_relevant | 0 | 0 | The paper investigates the structural and functional properties of an HIV-1 neutralizing antibody (10E8), not the pharmacodynamics of the drug levomilnacipran. |
| popPK | Joshi_2019 | irrelevant | 0 | 0 | Paper is about bacterial enzyme CysK and cysteine biosynthesis, with no levomilnacipran PK data or parameters. |
| PD | Joshi_2019 | not_relevant | 0 | 0 | The paper is a review of the enzyme CysK and its biological functions, containing no information on levomilnacipran or any pharmacodynamic modeling. |
| popPK | Langdon_2010 | irrelevant | 0 | 0 | The paper models PF-00821385, not levomilnacipran; no levomilnacipran parameters appear. |
| PD | Langdon_2010 | not_relevant | 0 | 0 | The paper reports PK/PD modeling for PF-00821385, not levomilnacipran. |
| popPK | Liu_2026 | irrelevant | 0 | 0 | This is a molecular dynamics/binding free-energy study of SARS-CoV-2 Mpro inhibitor WU-04, with no levomilnacipran PK parameters. |
| PD | Liu_2026 | not_relevant | 0 | 0 | The paper focuses on molecular dynamics simulations of SARS-CoV-2 Mpro resistance to WU-04 and does not contain any pharmacodynamic or exposure-response data for levomilnacipran. |
| PGx | Macaluso_2018 | not_relevant | 3 | 2 | Discusses GeneSight binning of levomilnacipran by metabolism dependence, but no gene variant effect on a specific PK/PD parameter is reported. |
| popPK | Montgomery_2014 | irrelevant | 0 | 0 | This is a clinical efficacy/post-hoc analysis of levomilnacipran ER in depression with no pharmacokinetic parameters reported. |
| popPK | Priyanka_2026 | irrelevant | 0 | 0 | Review of neem bioactive compounds with no levomilnacipran PK data. |
| PD | Priyanka_2026 | not_relevant | 0 | 0 | The paper is a review of the plant Azadirachta indica (Neem) and its antimicrobial properties; it does not mention levomilnacipran or report any pharmacodynamic data. |
| popPK | Sambunaris_2014 | irrelevant | 3 | 3 | This is a phase III efficacy/safety trial; only brief background PK values (half-life ~9 h, relative AUC/clearance vs F2696) appear, with no compartmental or population-PK parameters for levomilnacipran itself. |
| popPK | Scafa_2025 | irrelevant | 0 | 0 | This is a neuroscience/DBS study in Parkinson's disease with no levomilnacipran or pharmacokinetic content whatsoever. |
| PD | Scafa_2025 | not_relevant | 0 | 0 | The paper focuses on adaptive deep brain stimulation for Parkinson's disease and does not mention levomilnacipran or report any pharmacodynamic or exposure-response data. |
| PD | Shelton_2019_2 | not_relevant | 1 | 0 | The text is a qualitative review of SNRIs that mentions dose-dependent effects for levomilnacipran but provides no numeric PD parameters, concentration-effect curves, or formal PK/PD modeling. |
| PD | Shuto_1996 | not_relevant | 0 | 0 | The paper reports in vitro binding and functional assay data (IC50) for milnacipran analogs, not in vivo pharmacodynamic or exposure-response relationships for levomilnacipran. |
| popPK | Sureja_2022 | irrelevant | 0 | 0 | In-silico docking study of lignan antivirals against SARS-CoV-2; no levomilnacipran or PK parameters present. |
| PD | Sureja_2022 | not_relevant | 0 | 0 | The paper focuses on in-silico computational studies of lignan derivatives for SARS CoV-2 and does not mention levomilnacipran or report any pharmacodynamic data. |
| PD | Tamiya_2008 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for milnacipran analogs, which are pharmacological potency data, not in vivo pharmacodynamic (exposure-response) or dose-response relationships for levomilnacipran. |
| popPK | Vats_2025 | irrelevant | 0 | 0 | This is a review of a medicinal plant (Tecomella undulata) with no levomilnacipran PK data whatsoever. |
| PD | Vats_2025 | not_relevant | 0 | 0 | The paper is a review of the plant Tecomella undulata and does not mention levomilnacipran or report any pharmacodynamic parameters. |
| popPK | Vourvahis_2019 | irrelevant | 0 | 0 | This is a maraviroc pharmacogenetics study; levomilnacipran is not mentioned at all. |
| PD | Vourvahis_2019 | not_relevant | 0 | 0 | The paper focuses on maraviroc, not levomilnacipran, and reports no PD parameters for the target drug. |
| popPK | unknown_2023 | irrelevant | 0 | 0 | no_text gate: only 16 chars of text extracted (&lt; 400) |
| PD | unknown_2023 | not_relevant | 0 | 0 | The provided text is a placeholder for a large PDF file from a conference and contains no scientific content, data, or mention of levomilnacipran or pharmacodynamics. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
