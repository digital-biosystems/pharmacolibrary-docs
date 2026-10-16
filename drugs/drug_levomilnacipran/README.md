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
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.25), gpt-oss:120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial 0/2</span> | **CYP2B6** | `Q27` · CL/F | metabolism | [Bousman_2023](drugs/drug_levomilnacipran/pgx_Bousman_2023_CYP2B6_Q27.md) | Bousman CA et al., Clinical Pharmacogenetics Implementatio…, Clinical pharmacology and t… (2023) | [10.1002/cpt.2903](https://doi.org/10.1002/cpt.2903) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.25), gpt-oss:120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial 0/2</span> | **CYP2C19** | `Q27` · CL/F | metabolism | [Bousman_2023](drugs/drug_levomilnacipran/pgx_Bousman_2023_CYP2C19_Q27.md) | Bousman CA et al., Clinical Pharmacogenetics Implementatio…, Clinical pharmacology and t… (2023) | [10.1002/cpt.2903](https://doi.org/10.1002/cpt.2903) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.25), gpt-oss:120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial 0/2</span> | **CYP2D6** | `Q27` · CL/F | metabolism | [Bousman_2023](drugs/drug_levomilnacipran/pgx_Bousman_2023_CYP2D6_Q27.md) | Bousman CA et al., Clinical Pharmacogenetics Implementatio…, Clinical pharmacology and t… (2023) | [10.1002/cpt.2903](https://doi.org/10.1002/cpt.2903) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial</span> | **HTR2A** | `Q320` · Emax | target | [Bousman_2023](drugs/drug_levomilnacipran/pgx_Bousman_2023_HTR2A_Q320.md) | Bousman CA et al., Clinical Pharmacogenetics Implementatio…, Clinical pharmacology and t… (2023) | [10.1002/cpt.2903](https://doi.org/10.1002/cpt.2903) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial</span> | **SLC6A4** | `Q320` · Emax | target | [Bousman_2023](drugs/drug_levomilnacipran/pgx_Bousman_2023_SLC6A4_Q320.md) | Bousman CA et al., Clinical Pharmacogenetics Implementatio…, Clinical pharmacology and t… (2023) | [10.1002/cpt.2903](https://doi.org/10.1002/cpt.2903) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=levomilnacipran).

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
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| — | brain | `SLC6A4` inhibitor/target | DrugBank actor |
| — | platelet | `SLC6A4` inhibitor/target | DrugBank actor |

<sub>Actors without a tissue in the table: HTR2A (target), SLC6A2 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 60 matched, 42 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

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
