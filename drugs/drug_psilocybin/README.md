<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;Psilocybin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Psilocybin_Morse2025_reference&quot;,&quot;label&quot;:&quot;Morse_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_psilocybin/Psilocybin_Morse2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# Psilocybin

- **generic name:** Psilocybin
- **ATC codes:** not captured
- **DrugBank:** [DB11664](https://go.drugbank.com/drugs/DB11664) · **PubChem:** [CID 10624](https://pubchem.ncbi.nlm.nih.gov/compound/10624)
- **molar mass:** 284.2481 g/mol (C12H17N2O4P) — DrugBank
- **groups:** investigational

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| psilocin | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-09 08:45 | 9:07 | 1/1/0 | 2/0/0 | 0/0/1 | 425,911/16,628 | einfracz / qwen3.8-27b | 25 | 4/21 | 25/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Morse_2025_reference](drugs/drug_psilocybin/Psilocybin_Morse2025_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Morse JD et al., Pharmacokinetics and pharmacodynamics o…, Journal of psychopharmacolo… (2025) | [10.1177/02698811251330747](https://doi.org/10.1177/02698811251330747) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Holze_2023_reference](drugs/drug_psilocybin/Psilocybin_Holze2023_reference.md) | — | 1-compartment (no model) | 0 | Holze F et al., Pharmacokinetics and Pharmacodynamics o…, Clinical pharmacology and t… (2023) | [10.1002/cpt.2821](https://doi.org/10.1002/cpt.2821) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Purohit_2023_metric_tensor_components_of_the_perceived_visual_space](drugs/drug_psilocybin/pd_Purohit_2023_metric_tensor_components_of_the_perceived_visua.md) | metric tensor components of the perceived visual space ← psilocybin · direct sigmoid Emax (Hill) effect | — | Purohit P et al., Empirically validated theoretical analy…, Frontiers in computational… (2023) | [10.3389/fncom.2023.1136985](https://doi.org/10.3389/fncom.2023.1136985) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Thaoboonruang_2026_5_HT2A_RO](drugs/drug_psilocybin/pd_Thaoboonruang_2026_5_HT2A_RO.md) | 5-HT2A receptor occupancy ← psilocin · direct Emax (saturable) effect | — | Thaoboonruang N et al., Development of a Physiologically Based…, European journal of drug me… (2026) | [10.1007/s13318-026-01033-x](https://doi.org/10.1007/s13318-026-01033-x) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Thaoboonruang_2026_MADRS](drugs/drug_psilocybin/pd_Thaoboonruang_2026_MADRS.md) | Montgomery-Åsberg Depression Rating Scale (MADRS) scores ← psilocin · indirect response — drug inhibits the production of Montgomery-Åsberg Depression Rating Scale (MADRS) scores | — | Thaoboonruang N et al., Development of a Physiologically Based…, European journal of drug me… (2026) | [10.1007/s13318-026-01033-x](https://doi.org/10.1007/s13318-026-01033-x) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **CYP2D6** | `Q22` · CL | metabolism | [Becker_2025](drugs/drug_psilocybin/pgx_Becker_2025_CYP2D6_Q22.md) | Becker AM et al., Acute Effects and Pharmacokinetics of L…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3618](https://doi.org/10.1002/cpt.3618) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=psilocybin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` metabolism | paper PGx gene |
| metabolism | liver | `CYP2D6` metabolism | paper PGx gene |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 161 matched, 57 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Brown_2017.pdf` | Brown RT et al., Pharmacokinetics of Escalating Doses of…, Clinical pharmacokinetics (2017) | popPK | 10 | [10.1007/s40262-017-0540-6](https://doi.org/10.1007/s40262-017-0540-6) | [28353056](https://pubmed.ncbi.nlm.nih.gov/28353056) | The study reports population PK parameters for psilocybin's active metabolite psilocin (half-life 3h), but specific numeric values for clearance and volume are not present in the provided text. |
| `Holze_2023.pdf` | Holze F et al., Pharmacokinetics and Pharmacodynamics o…, Clinical pharmacology and t… (2023) | popPK | 9 | [10.1002/cpt.2821](https://doi.org/10.1002/cpt.2821) | [36507738](https://pubmed.ncbi.nlm.nih.gov/36507738) | The study reports quantitative PK parameters (Cmax, tmax, half-life) for psilocin (the active metabolite of psilocybin) using compartmental modeling, though specific clearance and volume values are not explicitly listed in the abstract text provided. |
| `Thaoboonruang_2026.pdf` | Thaoboonruang N et al., Development of a Physiologically Based…, European journal of drug me… (2026) | popPK | 8 | [10.1007/s13318-026-01033-x](https://doi.org/10.1007/s13318-026-01033-x) | [42663926](https://pubmed.ncbi.nlm.nih.gov/42663926) | The paper describes a PBPK/PD model for psilocybin/psilocin, which is a relevant disposition model, but the specific numeric parameter values (CL, V, etc.) are not explicitly listed in the provided evidence text. |
| `Dahmane_2021.pdf` | Dahmane E et al., Exposure-Response Analysis to Assess th…, Clinical pharmacology in dr… (2021) | pd | 5 | [10.1002/cpdd.796](https://doi.org/10.1002/cpdd.796) | [32250059](https://www.ncbi.nlm.nih.gov/pubmed/32250059) | metadata signals extractable PD data (Exposure-Response) |
| `Erkizia-Santamaría_2022.pdf` | Erkizia-Santamaría I et al., Serotonin 5-HT2A, 5-HT2c and 5-HT1A rec…, Biomedicine & pharmacothera… (2022) | pd | 4 | [10.1016/j.biopha.2022.113612](https://doi.org/10.1016/j.biopha.2022.113612) | [36049313](https://www.ncbi.nlm.nih.gov/pubmed/36049313) | metadata signals extractable PD data (Emax) |
| `DeBattista_2024.pdf` | DeBattista C et al., The Black Book of Psychotropic Dosing a…, Psychopharmacology bulletin (2024) | pgx | 7 | [10.64719/pb.4493](https://doi.org/10.64719/pb.4493) | [38993656](https://www.ncbi.nlm.nih.gov/pubmed/38993656) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |

<sub>queue written 2026-10-09T08:42:39.364505+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Alhaj_2025 | not_relevant | 1 | 1 | The paper is a narrative review on drug hypersensitivity reactions; it mentions psilocybin only as a novel agent with understudied pharmacogenomics, providing no specific gene variants or quantitative PK/PD data. |
| PGx | Becker_2025 | not_relevant | 6 | 0 | The paper reports the effect of CYP2D6 genotype on LSD PK, but the question specifically asks about psilocybin, which is not the primary subject of the PK data (psilocybin is only mentioned in the context of previous/related work). |
| popPK | Brown_2017 | relevant | 10 | 2 | The study reports population PK parameters for psilocybin's active metabolite psilocin (half-life 3h), but specific numeric values for clearance and volume are not present in the provided text. |
| popPK | Dahan_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and pharmacodynamics of ketamine and norketamine, not psilocybin. |
| popPK | Dahmane_2021 | irrelevant | 2 | 0 | The study focuses on exposure-response (QTc) analysis and reports pharmacodynamic metrics and exposure levels rather than population pharmacokinetic disposition parameters (CL, V, ka, Q). |
| popPK | Dai_2026 | irrelevant | 0 | 0 | The paper is an fMRI neuroimaging study of brain network integration-segregation in psychedelic states, not a pharmacokinetic study of psilocybin. |
| PGx | DeBattista_2024 | not_relevant | 0 | 0 | The paper discusses a CYP2D6 drug-drug interaction (bupropion inhibiting dextromethorphan), not a pharmacogenomic (genetic) effect on psilocybin PK/PD. |
| popPK | Dolder_2017 | irrelevant | 0 | 0 | The study characterizes the pharmacokinetics of LSD, not psilocybin, which is the subject drug. |
| popPK | Drexler_2025 | irrelevant | 0 | 0 | The paper investigates the mechanistic effects of psilocybin on glioma proliferation and mentions its clearance qualitatively but does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Eckernäs_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of N,N-dimethyltryptamine (DMT), not psilocybin. |
| popPK | Erkizia-Santamaría_2022 | irrelevant | 0 | 0 | no_text gate: only 192 chars of text extracted (&lt; 400) |
| popPK | Erritzoe_2024 | irrelevant | 0 | 0 | The study is a post hoc analysis of clinical trial outcomes regarding depression symptoms and does not report any pharmacokinetic parameters for psilocybin. |
| popPK | Fernández-Guarino_2026 | irrelevant | 0 | 0 | The paper is a review of psychotropic compounds in cutaneous biology and does not report pharmacokinetic parameters for psilocybin. |
| PGx | Forsyth_2026 | not_relevant | 0 | 0 | The study investigates behavioral responses to psilocybin in fish and explicitly states that effects were independent of genotype; it does not report pharmacogenomic effects on PK/PD parameters. |
| PGx | Halman_2025 | not_relevant | 4 | 5 | The paper is a review that discusses pharmacogenomics for psychedelics but only reports a specific pharmacodynamic effect for psilocin on HTR2A mutants in vitro, while stating there are no studies on human pharmacokinetic/PD variants for psilocybin itself. |
| popPK | Hastings_2026 | irrelevant | 0 | 0 | The paper is a computational analysis of mental health literature trends (GALENOS project) and does not report pharmacokinetic data for psilocybin. |
| popPK | Jaster_2025 | irrelevant | 6 | 0 | The study describes a PK profile (absorption, half-life, distribution) for psilocin/psilocybin in mice, but the specific numeric parameter values are contained in figures (Fig. 1c, d) that are not provided in the evidence. |
| popPK | Jones_2026 | irrelevant | 0 | 0 | The study is a mechanistic and biomarker analysis where psilocybin is used as a comparative agent in iPSC assays, not a pharmacokinetic study reporting quantitative disposition parameters for psilocybin. |
| popPK | Kelly_2026 | irrelevant | 0 | 0 | The study reports clinical outcome measures (anxiety, quality of life) and does not provide any pharmacokinetic parameters. |
| popPK | Kuypers_2026 | irrelevant | 0 | 0 | The paper is a mechanistic perspective review discussing psychedelic therapy mechanisms (neurochemistry, breathwork, VNS) and does not report any quantitative pharmacokinetic parameters for psilocybin. |
| PGx | Liechti_2022 | not_relevant | 1 | 1 | The text is a general overview of psychedelic dosing and does not report specific pharmacogenomic effects on PK/PD parameters. |
| PGx | Meshkat_2025 | not_relevant | 1 | 2 | This paper is a systematic review of general pharmacokinetics and mentions CYP2D6/3A4 metabolism, but it does not report specific pharmacogenomic effects (genotype-phenotype links) on PK/PD parameters. |
| PGx | Meyer_2011 | not_relevant | 0 | 0 | The paper is a review of isoenzymes involved in metabolism and does not report specific pharmacogenomic associations (genotype-to-PK/PD links) for psilocybin. |
| popPK | Morse_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for LSD, not psilocybin. |
| popPK | Olsen_2022 | irrelevant | 0 | 0 | The study examines neuroimaging (fMRI) connectivity dynamics in response to psilocybin and does not report quantitative pharmacokinetic parameters (CL, V, ka) for the drug. |
| popPK | Pellegrini_2025 | irrelevant | 0 | 0 | The paper is a clinical trial focused on the efficacy of psilocybin in OCD and reports only clinical outcomes, containing no pharmacokinetic parameter data. |
| popPK | Purohit_2023 | irrelevant | 0 | 0 | The paper is a theoretical computational model of visual-spatial perception under psilocybin influence and does not report quantitative population pharmacokinetic parameters (CL, V, Q, ka) for psilocybin. |
| PGx | Raffa_2026 | not_relevant | 0 | 0 | This is a narrative review of regulatory and pharmacy practice implications, not a primary study reporting specific pharmacogenomic changes to psilocybin PK/PD parameters. |
| PGx | Sarris_2022 | not_relevant | 0 | 0 | The paper is a general review of psychedelic medications for mood disorders and does not report specific pharmacogenomic effects on psilocybin's pharmacokinetic or pharmacodynamic parameters. |
| PGx | Silva_2026 | not_relevant | 1 | 0 | The paper discusses toxicity prediction and metabolic pathways (CYP2C9) for psilocybin/psilocin and pesticides, but does not report specific pharmacogenomic effects (gene variants changing PK/PD) for psilocybin. |
| popPK | Studerus_2012 | irrelevant | 0 | 0 | The paper analyzes predictors of subjective psychological response to psilocybin (set and setting) and does not report any pharmacokinetic parameters (CL, V, ka, t1/2) or PK models. |
| popPK | Sutherland_2026 | irrelevant | 0 | 0 | The study focuses on EEG electrophysiological effects (neural plasticity/consciousness) and does not report quantitative pharmacokinetic disposition parameters (CL, V, ka) for psilocybin. |
| popPK | Thaoboonruang_2026 | relevant | 8 | 2 | The paper describes a PBPK/PD model for psilocybin/psilocin, which is a relevant disposition model, but the specific numeric parameter values (CL, V, etc.) are not explicitly listed in the provided evidence text. |
| PGx | Thomann_2024 | not_relevant | 3 | 2 | The study explicitly reports that CYP2D6 genotype did not influence psilocin plasma concentrations in the investigated population. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-09 08:42 UTC</sub>
