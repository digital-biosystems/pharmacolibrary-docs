<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;Bictegravir&quot;}]"></div>

# Bictegravir

- **generic name:** Bictegravir
- **ATC codes:** `J05AR20`
- **DrugBank:** [DB11799](https://go.drugbank.com/drugs/DB11799) · **PubChem:** [CID 90311989](https://pubchem.ncbi.nlm.nih.gov/compound/90311989)
- **molar mass:** 449.386 g/mol (C21H18F3N3O5) — DrugBank
- **groups:** approved, investigational

## About

Bictegravir is an antiviral medicine used to treat HIV infections. It is an approved drug, given as part of combination antiviral therapy for HIV.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27270406](https://www.wikidata.org/wiki/Q27270406) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| bictegravir | parent | 449.386 | C21H18F3N3O5 | DrugBank | [90311989](https://pubchem.ncbi.nlm.nih.gov/compound/90311989) | Ekobena_2025 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 14:01 | 14:47 | 0/0/1 | 1/0/0 | 0/0/0 | 532,827/22,030 | einfracz / qwen3.8-27b | 31 | 1/29 | 31/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q352 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Ekobena_2025_reference](drugs/drug_bictegravir/Bictegravir_Ekobena2025_reference.md) | — | 1-compartment (no model) | 4 | Ekobena P et al., Population pharmacokinetics of bictegra…, The Journal of antimicrobia… (2025) | [10.1093/jac/dkaf297](https://doi.org/10.1093/jac/dkaf297) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Vegas_2025_CD4](drugs/drug_bictegravir/pd_Vegas_2025_CD4.md) | CD4 + T cells ← bictegravir · disease-progression model | — | Vegas Rodriguez A et al., Integrated Population Pharmacokinetic-p…, The AAPS journal (2025) | [10.1208/s12248-025-01136-4](https://doi.org/10.1208/s12248-025-01136-4) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Vegas_2025_HIV_RNA](drugs/drug_bictegravir/pd_Vegas_2025_HIV_RNA.md) | HIV-RNA ← bictegravir · disease-progression model | — | Vegas Rodriguez A et al., Integrated Population Pharmacokinetic-p…, The AAPS journal (2025) | [10.1208/s12248-025-01136-4](https://doi.org/10.1208/s12248-025-01136-4) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=bictegravir) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP3A4` substrate, `UGT1A1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `UGT1A1` substrate | DrugBank actor |
| excretion | kidney | `SLC47A1` inhibitor | DrugBank actor |
| excretion | liver | `SLC47A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: POU2F2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 110 matched, 67 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Sun_2026.pdf` | Sun S et al., Population Pharmacokinetics of Bictegra…, Journal of clinical pharmac… (2026) | popPK | 10 | [10.1002/jcph.70134](https://doi.org/10.1002/jcph.70134) | [41405169](https://pubmed.ncbi.nlm.nih.gov/41405169) | The study reports a population PK model with numeric covariate effect percentages (e.g., 61% increase in CL/F) in the abstract, but the specific absolute parameter estimates (e.g., CL/F value in L/h) are likely in the full text or tables not fully included in this evidence snippet. |
| `Imaz_2021.pdf` | Imaz A et al., Dynamics of the Decay of Human Immunode…, Clinical infectious disease… (2021) | pd | 5 | [10.1093/cid/ciaa1416](https://doi.org/10.1093/cid/ciaa1416) | [32945851](https://www.ncbi.nlm.nih.gov/pubmed/32945851) | metadata signals extractable PD data (EC50) |
| `Taylor_2026.pdf` | Taylor JH et al., Pharmacogenomics of current antiretrovi…, Pharmacogenomics (2026) | pgx | 8 | [10.1080/14622416.2026.2658477](https://doi.org/10.1080/14622416.2026.2658477) | [42116767](https://www.ncbi.nlm.nih.gov/pubmed/42116767) | metadata signals extractable PGX data (UGT1A1, PK/PD-context) |
| `Tsuchiya_2025.pdf` | Tsuchiya K et al., High plasma concentration of tenofovir…, Journal of infection and ch… (2025) | pgx | 8 | [10.1016/j.jiac.2024.10.009](https://doi.org/10.1016/j.jiac.2024.10.009) | [39426598](https://www.ncbi.nlm.nih.gov/pubmed/39426598) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |
| `Zeuli_2019.pdf` | Zeuli J et al., Bictegravir, a novel integrase inhibito…, Drugs of today (Barcelona,… (2019) | pgx | 7 | [10.1358/dot.2019.55.11.3068796](https://doi.org/10.1358/dot.2019.55.11.3068796) | [31840682](https://www.ncbi.nlm.nih.gov/pubmed/31840682) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-07T13:53:24.581248+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Arora_2025 | not_relevant | 0 | 0 | The paper evaluates drug-drug interactions (DDIs) involving CYP3A4 and UGT1A1 enzymes but does not report data on genetic variants or genotypes affecting pharmacokinetics. |
| popPK | Barski_2019 | irrelevant | 0 | 0 | The study reports in vitro antiviral efficacy (EC50 values) for bictegravir against HTLV-1, not pharmacokinetic disposition parameters. |
| PGx | Berkan-Kawińska_2024 | not_relevant | 0 | 0 | The paper evaluates the clinical efficacy and safety of a drug interaction in a general population, with no mention of specific genetic variants, genotypes, or pharmacogenomic analysis. |
| popPK | Blanco_2026 | irrelevant | 0 | 0 | The study measures circulating inflammatory and metabolic biomarkers, not pharmacokinetic disposition parameters for bictegravir. |
| popPK | Bourgi_2026 | irrelevant | 0 | 0 | The study reports weight gain outcomes associated with bictegravir use, not pharmacokinetic parameters such as clearance, volume, or half-life. |
| PGx | Camici_2024 | not_relevant | 0 | 0 | The paper reports a clinical trial evaluating efficacy and safety, with no data on gene variants or their effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Cheung_2022 | irrelevant | 0 | 0 | The study is a molecular/in vitro phenotypic resistance assessment of HIV integrase inhibitors, not a pharmacokinetic study reporting disposition parameters for bictegravir. |
| PGx | Courlet_2020 | not_relevant | 0 | 0 | The paper describes the development of an analytical method and contains no pharmacogenomic data. |
| popPK | Coyle_2024 | irrelevant | 0 | 0 | The study measures intracellular concentrations of tenofovir-diphosphate and emtricitabine-triphosphate, not pharmacokinetic parameters for bictegravir. |
| PGx | De_2024 | not_relevant | 3 | 5 | The study reports 'no significant difference' in PK parameters between genotypes, indicating a null finding for the specific variants tested. |
| popPK | Dudnyk_2025 | irrelevant | 0 | 0 | The paper is a review of tuberculosis drug dosing and mentions bictegravir only as part of a co-administered antiretroviral regimen, providing no pharmacokinetic parameters for bictegravir. |
| popPK | Hassounah_2017 | irrelevant | 1 | 0 | The study reports in-vitro antiviral efficacy (EC50s) and resistance data, not population pharmacokinetic parameters (CL, V, etc.). |
| popPK | Hsu_2022 | irrelevant | 0 | 0 | The paper is an observational pharmaco-epidemiology study focused on weight gain outcomes, not a pharmacokinetic study reporting quantitative disposition parameters for bictegravir. |
| PGx | Huang_2023 | not_relevant | 0 | 0 | The study investigates the effect of bictegravir on blood-brain barrier integrity in animal and cell models, but contains no data regarding gene variants or pharmacogenomics. |
| popPK | Imaz_2021 | irrelevant | 0 | 0 | no_text gate: only 287 chars of text extracted (&lt; 400) |
| popPK | Ivashchenko_2020 | irrelevant | 0 | 0 | This is a medicinal chemistry paper describing the synthesis and in silico modeling of novel INSTIs, not a pharmacokinetic study of bictegravir itself. |
| PGx | Jadav_2024 | not_relevant | 2 | 5 | The study investigates the induction of efflux transporters by bictegravir in rat models, not the impact of a patient's gene variant/genotype on the drug's PK or PD parameters. |
| popPK | Kang_2026 | irrelevant | 0 | 0 | The paper describes a computational knowledge graph model for predicting drug-food interactions and does not report quantitative pharmacokinetic parameters for bictegravir. |
| popPK | Khoei_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for dolutegravir, not bictegravir. |
| PGx | Kolakowska_2019 | not_relevant | 0 | 0 | The paper is a general review of adverse effects and mentions pharmacogenetics only as a promising future tool, without reporting specific gene-variant-PK/PD data for bictegravir. |
| popPK | Lahiri_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of raltegravir, dolutegravir, and elvitegravir, and explicitly states that bictegravir was not included in the analysis. |
| popPK | Li_2022 | irrelevant | 0 | 0 | The paper is a review of HIV reverse transcriptase inhibitors and only mentions bictegravir as part of combination regimens without providing specific quantitative pharmacokinetic parameters for bictegravir itself. |
| PGx | Lu_2021 | not_relevant | 0 | 0 | The paper is a review of drug-drug interactions and general pharmacokinetics; while it mentions UGT1A1 polymorphisms for raltegravir, it does not report specific pharmacogenomic effect sizes or genotype-stratified PK data for bictegravir. |
| popPK | Mandal_2019 | irrelevant | 2 | 0 | The study is in-vitro focusing on formulation characteristics (encapsulation, cytotoxicity, EC50) rather than reporting quantitative systemic or population pharmacokinetic parameters (CL, V, ka) for bictegravir. |
| popPK | Mezzogori_2025 | irrelevant | 0 | 0 | This is a retrospective clinical effectiveness study reporting virological and immunological outcomes, containing no pharmacokinetic parameter values. |
| PGx | Nwadiugwu_2025 | not_relevant | 0 | 0 | The study focuses on drug repurposing via in silico molecular docking and simulations for Alzheimer's, without analyzing pharmacogenomic effects on the PK or PD parameters of bictegravir. |
| popPK | Patel_2026 | irrelevant | 0 | 0 | The study reports virologic and anthropometric outcomes (viral load, CD4, weight) for bictegravir, but contains no pharmacokinetic parameters (CL, V, ka, etc.). |
| PGx | Pennetzdorfer_2026 | not_relevant | 0 | 0 | The study analyzes HIV-1 drug resistance mutations (RAMs) and their impact on viral suppression, not human pharmacogenomic variants affecting bictegravir PK/PD. |
| PGx | Pozniak_2025 | not_relevant | 0 | 0 | The study focuses on the efficacy (virologic outcomes) and adherence of the B/F/TAF regimen in HIV patients, with no analysis of pharmacogenomic impacts on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Prosperi_2026 | irrelevant | 0 | 0 | The paper evaluates the causal reasoning capabilities of large language models in HIV clinical scenarios and does not report any pharmacokinetic parameters for bictegravir. |
| PGx | Sax_2022 | not_relevant | 1 | 0 | The paper reports on the clinical efficacy of bictegravir in patients with a specific HIV drug resistance mutation (M184V/I), not on human host pharmacogenomic variants affecting bictegravir pharmacokinetics or pharmacodynamics. |
| popPK | Schneiderman_2022 | irrelevant | 0 | 0 | The study is an in vitro virology assay evaluating the antiviral efficacy of cabotegravir against HTLV-1, not a pharmacokinetic study for bictegravir (which is only mentioned as a comparative reference for EC50 potency). |
| popPK | Serrano-Villar_2026 | irrelevant | 0 | 0 | The study is a clinical trial assessing inflammatory and metabolic outcomes, not pharmacokinetic parameters. |
| PGx | Stader_2021 | not_relevant | 0 | 0 | The paper focuses on PBPK modeling of drug-drug interactions with CYP3A and UGT1A1 inhibitors/inducers, but does not report how specific gene variants or genotypes alter bictegravir's PK or PD parameters. |
| popPK | Sun_2026 | relevant | 10 | 2 | The study reports a population PK model with numeric covariate effect percentages (e.g., 61% increase in CL/F) in the abstract, but the specific absolute parameter estimates (e.g., CL/F value in L/h) are likely in the full text or tables not fully included in this evidence snippet. |
| PGx | Sánchez-Cano_2026 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions (rifampicin) and dosing strategies, but does not report pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| PGx | Taylor_2026 | not_relevant | 0 | 0 | The text is a title for a general review and contains no specific data, variants, or pharmacokinetic parameters for bictegravir. |
| PGx | Tsuchiya_2025 | not_relevant | 1 | 5 | The paper reports a pharmacogenomic effect on the PK of tenofovir alafenamide (TAF), not bictegravir. |
| PGx | Uddin_2022 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of dofetilide (MATE1 transporter deficiency) and does not report PK/PD parameters for bictegravir. |
| PGx | VanderVeen_2026 | not_relevant | 0 | 0 | The study analyzes HIV-1 resistance mutations in the virus, not host pharmacogenomics (gene variants) affecting the PK/PD of bictegravir. |
| popPK | Vegas_2025 | relevant | 7 | 2 | The paper develops a population PKPD model for bictegravir in humans, but the specific numeric PK parameter values (CL, V, ka) are reported in Supplementary Material 1 and Table 2, which are not included in the provided evidence. |
| popPK | Yan_2026 | irrelevant | 0 | 0 | The study focuses on tenofovir, lamivudine, and emtricitabine; bictegravir is not the subject drug and no PK parameters for it are reported. |
| PGx | Zeuli_2019 | not_relevant | 0 | 0 | The paper describes general pharmacokinetics and metabolism of bictegravir but does not report specific pharmacogenomic effects of gene variants on PK or PD parameters. |
| popPK | van_2026 | irrelevant | 3 | 2 | The study is a non-compartmental lactation study in healthy humans reporting AUC and half-life but lacks compartmental parameters (CL, V, Q) or a population PK model required for the screen. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 13:53 UTC</sub>
