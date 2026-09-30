<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;govorestat&quot;}]"></div>

# govorestat

- **generic name:** govorestat
- **ATC codes:** `A16AX24`
- **DrugBank:** [DB16707](https://go.drugbank.com/drugs/DB16707) · **PubChem:** not captured
- **molar mass:** 425.4 g/mol (C17H10F3N3O3S2) — DrugBank
- **groups:** investigational

## About

**Description.** Gavorestat is under investigation in clinical trial NCT04902781 (Clinical Benefit, Safety, PK and PD Study of AT-007 in Pediatric Subjects With Classic Galactosemia).

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-27 11:08 | 35:01 | 0/0/0 | 0/3/0 | 0/0/0 | 238,546/11,058 | ollama / qwen3.8:27b-mtp-q8_0 | 10 | 2/8 | 8/2 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.786). The first reading is what the record holds.">cross-check: disputed</span> | [Cao_2025_IgG](drugs/drug_govorestat/pd_Cao_2025_IgG.md) | IgG level ← KJ103 · delayed effect through an effect compartment | — | Cao M et al., Safety, efficacy, and immunogenicity of…, Gene therapy (2025) | [10.1038/s41434-025-00512-1](https://doi.org/10.1038/s41434-025-00512-1) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | [Darwish_2024_CGI_I](drugs/drug_govorestat/pd_Darwish_2024_CGI_I.md) | Clinical Global Impression–Improvement ← trofinetide · direct linear effect | — | Darwish M et al., Exposure-Response Efficacy Modeling to…, Advances in therapy (2024) | [10.1007/s12325-024-02796-y](https://doi.org/10.1007/s12325-024-02796-y) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | [Darwish_2024_CSBS_DP_IT_Social_Composite](drugs/drug_govorestat/pd_Darwish_2024_CSBS_DP_IT_Social_Composite.md) | Communication and Symbolic Behavior Scales Developmental Profile Infant–Toddler Checklist Social Composite ← trofinetide · direct linear effect | — | Darwish M et al., Exposure-Response Efficacy Modeling to…, Advances in therapy (2024) | [10.1007/s12325-024-02796-y](https://doi.org/10.1007/s12325-024-02796-y) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | [Darwish_2024_RSBQ](drugs/drug_govorestat/pd_Darwish_2024_RSBQ.md) | Rett Syndrome Behaviour Questionnaire total score ← trofinetide · direct linear effect | — | Darwish M et al., Exposure-Response Efficacy Modeling to…, Advances in therapy (2024) | [10.1007/s12325-024-02796-y](https://doi.org/10.1007/s12325-024-02796-y) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | [Darwish_2024_RTT_COMC](drugs/drug_govorestat/pd_Darwish_2024_RTT_COMC.md) | Rett Syndrome Clinician Rating of Ability to Communicate Choices ← trofinetide · direct linear effect | — | Darwish M et al., Exposure-Response Efficacy Modeling to…, Advances in therapy (2024) | [10.1007/s12325-024-02796-y](https://doi.org/10.1007/s12325-024-02796-y) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Parra-Guillen_2025_titer](drugs/drug_govorestat/pd_Parra_Guillen_2025_titer.md) | ADA ← V937 · indirect response — drug inhibits the production of ADA | — | Parra-Guillen ZP et al., Role of Antidrug Antibodies in Oncolyti…, Clinical pharmacokinetics (2025) | [10.1007/s40262-025-01546-9](https://doi.org/10.1007/s40262-025-01546-9) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=govorestat) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: AKR1B1 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 222 matched, 35 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Perfetti_2024.pdf` | Perfetti R et al., Safety, Pharmacokinetics, and Pharmacod…, Journal of clinical pharmac… (2024) | popPK | 9 | [10.1002/jcph.2495](https://doi.org/10.1002/jcph.2495) | [38988185](https://pubmed.ncbi.nlm.nih.gov/38988185) | The paper describes a population PK study for govorestat with a 2-compartment model, but specific numeric parameter values (CL, V, Q, ka) are not present in the provided text, only the half-life (~10 h) and qualitative model description. |

<sub>queue written 2026-09-27T11:02:34.430889+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aljanabi_2026 | irrelevant | 0 | 0 | The paper describes a computational web server for retrosynthesis and ADMET prediction and does not report any pharmacokinetic parameters for govorestat. |
| PD | Aljanabi_2026 | not_relevant | 0 | 0 | The paper describes a computational tool for retrosynthesis and ADMET prediction and does not report any pharmacodynamic or exposure-response data for govorestat. |
| PD | Bailey_2025 | not_relevant | 2 | 1 | The study reports group-level mean changes and a Pearson correlation between galactitol levels and clinical outcomes, but does not provide individual concentration-effect data, dose-response curves, or numeric PD parameters (e.g., Emax, EC50) for govorestat. |
| popPK | Balaguer-Lluna_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of inavolisib and ipatasertib, not govorestat. |
| popPK | Bauer_2025 | irrelevant | 0 | 0 | The paper is a software tutorial on modeling delays in NONMEM and does not report pharmacokinetic parameters for govorestat. |
| PD | Bauer_2025 | not_relevant | 0 | 0 | The paper is a software tutorial on modeling delays in NONMEM and does not report specific pharmacodynamic data or parameters for govorestat. |
| popPK | Bekker_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of fosfomycin and flomoxef, not govorestat. |
| PD | Bekker_2026 | not_relevant | 0 | 0 | The paper reports PK and safety for fosfomycin and flomoxef, not govorestat, and does not provide PD parameters. |
| popPK | Boccarella_2026 | irrelevant | 0 | 0 | The paper is an evolutionary biology study on bacterial persistence and antibiotic resistance in E. coli, with no content related to govorestat or pharmacokinetics. |
| PD | Boccarella_2026 | not_relevant | 0 | 0 | The paper discusses bacterial persistence and antibiotic resistance evolution in E. coli, not the pharmacodynamics of the drug govorestat. |
| popPK | Boşnak_2026 | irrelevant | 0 | 0 | The study focuses on levofloxacin pharmacokinetics and is unrelated to govorestat. |
| popPK | Cao_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of KJ103 (an IgG-degrading enzyme), not govorestat. |
| PGx | Cortese_2025 | not_relevant | 0 | 0 | The paper describes the genotype-phenotype spectrum of Charcot-Marie-Tooth disease and sorbitol levels as a biomarker, but does not report pharmacokinetic or pharmacodynamic effects of govorestat modified by genetic variants. |
| popPK | Darwish_2024 | irrelevant | 0 | 0 | The paper focuses on trofinetide, not govorestat, and does not report PK parameters for the target drug. |
| popPK | Darwish_2025 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for trofinetide, not govorestat. |
| PD | Darwish_2025 | not_relevant | 0 | 0 | The paper focuses exclusively on population pharmacokinetic (popPK) modeling and exposure simulations for trofinetide, with no pharmacodynamic (PD) or exposure-response analysis reported. |
| popPK | Darwish_2025_2 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for trofinetide, not govorestat. |
| PD | Darwish_2025_2 | not_relevant | 0 | 0 | The paper focuses exclusively on population pharmacokinetic (popPK) modeling for trofinetide and does not report any pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Fu_2022 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for teicoplanin, not govorestat. |
| PD | Fu_2022 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics (PopPK) of teicoplanin, not govorestat, and does not report any pharmacodynamic (PD) or exposure-response relationship. |
| popPK | Gaurav_2026 | irrelevant | 0 | 0 | The paper studies favezelimab, not govorestat. |
| PD | Gaurav_2026 | not_relevant | 0 | 0 | The paper analyzes favezelimab, not govorestat. |
| popPK | Gieselmann_2025 | irrelevant | 0 | 0 | The paper characterizes an HIV-1 broadly neutralizing antibody (007) and does not involve the drug govorestat. |
| PD | Gieselmann_2025 | not_relevant | 0 | 0 | The paper characterizes a broadly neutralizing antibody (007) against HIV-1, not the drug govorestat, and does not report pharmacodynamic parameters for govorestat. |
| popPK | Gieselmann_2026 | irrelevant | 0 | 0 | The paper characterizes an HIV broadly neutralizing antibody (007) and does not mention or study the drug govorestat. |
| PD | Gieselmann_2026 | not_relevant | 0 | 0 | The paper characterizes an HIV-1 broadly neutralizing antibody (007) and does not mention the drug govorestat or report any pharmacodynamic parameters for it. |
| popPK | Han_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of Ainuovirine, not govorestat. |
| PD | Han_2024 | not_relevant | 0 | 0 | The paper analyzes Ainuovirine (ANV), not govorestat. |
| popPK | Hansel_2024 | irrelevant | 0 | 0 | The paper is a systematic review of β-lactam antimicrobials and does not study govorestat. |
| PD | Hansel_2024 | not_relevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic (PK) covariates for beta-lactams and does not report any pharmacodynamic (PD) or exposure-response data for govorestat. |
| popPK | He_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of oral paclitaxel, not govorestat. |
| PD | He_2022 | not_relevant | 0 | 0 | The paper describes population pharmacokinetics (PK) for oral paclitaxel, not govorestat, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Hoglund_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for ivermectin and its metabolites, not govorestat. |
| PD | Hoglund_2026 | not_relevant | 0 | 0 | not captured |
| popPK | Hu_2026 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for clesrovimab, not govorestat. |
| PD | Hu_2026 | not_relevant | 0 | 0 | The paper reports population pharmacokinetics (PK) for clesrovimab, not govorestat, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Maroselli_2025 | irrelevant | 0 | 0 | The study focuses on imatinib pharmacokinetics, not govorestat. |
| PD | Maroselli_2025 | not_relevant | 0 | 0 | The paper analyzes the impact of BMI on imatinib pharmacokinetics (exposure), not pharmacodynamics (effect), and does not report any PD parameters or exposure-response relationships. |
| popPK | Mu_2022 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of a CAR T-cell therapy (CT103A), not the drug govorestat. |
| PD | Mu_2022 | not_relevant | 0 | 0 | The paper describes a population pharmacokinetic (PopPK) model for a CAR T-cell therapy (CT103A), not govorestat, and does not report a pharmacodynamic (PD) or exposure-response model with numeric PD parameters. |
| popPK | Parra-Guillen_2025 | irrelevant | 0 | 0 | The study focuses on the oncolytic virus V937, not govorestat. |
| popPK | Perfetti_2024 | relevant | 9 | 2 | The paper describes a population PK study for govorestat with a 2-compartment model, but specific numeric parameter values (CL, V, Q, ka) are not present in the provided text, only the half-life (~10 h) and qualitative model description. |
| popPK | Pokorná_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of meropenem, not govorestat. |
| PD | Pokorná_2024 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of meropenem, not govorestat, and does not report any pharmacodynamic or exposure-response parameters. |
| popPK | Scarpignato_2022 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for vonoprazan, not govorestat. |
| PD | Scarpignato_2022 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (popPK) model for vonoprazan, not govorestat, and contains no pharmacodynamic or exposure-response analysis. |
| popPK | Stäubli_2026 | irrelevant | 0 | 0 | The paper is a neuroimaging study on CRB1 retinopathy and does not involve govorestat or pharmacokinetic parameters. |
| PD | Stäubli_2026 | not_relevant | 0 | 0 | The paper investigates visual evoked potentials in CRB1 retinopathy and does not mention govorestat or any pharmacodynamic exposure-response relationship. |
| popPK | Vaddady_2024 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for quizartinib, not govorestat. |
| PD | Vaddady_2024 | not_relevant | 0 | 0 | The paper describes a population pharmacokinetic (PK) analysis of quizartinib, not govorestat, and does not report any pharmacodynamic (PD) or exposure-response parameters. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of serplulimab, not govorestat. |
| PD | Wang_2026 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics of serplulimab (not govorestat) and explicitly states that exposure-response analyses revealed no meaningful association, providing no numeric PD parameters. |
| popPK | Wassef_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of cefazolin, not govorestat. |
| PD | Wassef_2026 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics (popPK) of cefazolin, not govorestat, and does not report any pharmacodynamic or exposure-response parameters. |
| popPK | Yao_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of acalabrutinib, not govorestat. |
| PD | Yao_2025 | not_relevant | 0 | 0 | The paper analyzes acalabrutinib, not govorestat. |
| popPK | Yin_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ceftazidime, not govorestat. |
| PD | Yin_2026 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics (PK) of ceftazidime in neonates and does not report any pharmacodynamic (PD) or exposure-response relationship for govorestat. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
