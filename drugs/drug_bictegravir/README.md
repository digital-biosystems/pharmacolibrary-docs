<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;Bictegravir&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Bictegravir_Ekobena2025_reference&quot;,&quot;label&quot;:&quot;Ekobena_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bictegravir/Bictegravir_Ekobena2025_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Bictegravir_Khoei2026_reference&quot;,&quot;label&quot;:&quot;Khoei_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bictegravir/Bictegravir_Khoei2026_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

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
| bictegravir | parent | 449.386 | C21H18F3N3O5 | DrugBank | [90311989](https://pubchem.ncbi.nlm.nih.gov/compound/90311989) | Ekobena_2025, Sun_2026 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 15:51 | 8:17 | 2/1/0 | 1/0/0 | 0/0/0 | 413,845/32,923 | ollama / glm-5.3-flash | 31 | 1/29 | 31/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Ekobena_2025_reference](drugs/drug_bictegravir/Bictegravir_Ekobena2025_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Ekobena P et al., Population pharmacokinetics of bictegra…, The Journal of antimicrobia… (2025) | [10.1093/jac/dkaf297](https://doi.org/10.1093/jac/dkaf297) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Khoei_2026_reference](drugs/drug_bictegravir/Bictegravir_Khoei2026_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Khoei A et al., Dolutegravir population pharmacokinetic…, HIV medicine (2026) | [10.1111/hiv.70278](https://doi.org/10.1111/hiv.70278) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Sun_2026_reference](drugs/drug_bictegravir/Bictegravir_Sun2026_reference.md) | — | 1-compartment (no model) | 4 | Sun S et al., Population Pharmacokinetics of Bictegra…, Journal of clinical pharmac… (2026) | [10.1002/jcph.70134](https://doi.org/10.1002/jcph.70134) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Vegas_2025_HIV_RNA](drugs/drug_bictegravir/pd_Vegas_2025_HIV_RNA.md) | HIV-RNA (viral load, via inhibition of viral infectivity in the viral dynamics model) ← bictegravir · direct sigmoid Emax (Hill) effect | model (no simulator) | Vegas Rodriguez A et al., Integrated Population Pharmacokinetic-p…, The AAPS journal (2025) | [10.1208/s12248-025-01136-4](https://doi.org/10.1208/s12248-025-01136-4) |

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
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 2  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Sun_2026.pdf` | Sun S et al., Population Pharmacokinetics of Bictegra…, Journal of clinical pharmac… (2026) | popPK | 10 | [10.1002/jcph.70134](https://doi.org/10.1002/jcph.70134) | [41405169](https://pubmed.ncbi.nlm.nih.gov/41405169) | Population PK model of bictegravir in humans with CL/F and Vd/F covariate effects reported, but full numeric parameter estimates (typical values, IIV, residual error) are not in the abstract. |
| `Imaz_2021.pdf` | Imaz A et al., Dynamics of the Decay of Human Immunode…, Clinical infectious disease… (2021) | pd | 5 | [10.1093/cid/ciaa1416](https://doi.org/10.1093/cid/ciaa1416) | [32945851](https://www.ncbi.nlm.nih.gov/pubmed/32945851) | metadata signals extractable PD data (EC50) |
| `Taylor_2026.pdf` | Taylor JH et al., Pharmacogenomics of current antiretrovi…, Pharmacogenomics (2026) | pgx | 8 | [10.1080/14622416.2026.2658477](https://doi.org/10.1080/14622416.2026.2658477) | [42116767](https://www.ncbi.nlm.nih.gov/pubmed/42116767) | metadata signals extractable PGX data (UGT1A1, PK/PD-context) |
| `Tsuchiya_2025.pdf` | Tsuchiya K et al., High plasma concentration of tenofovir…, Journal of infection and ch… (2025) | pgx | 8 | [10.1016/j.jiac.2024.10.009](https://doi.org/10.1016/j.jiac.2024.10.009) | [39426598](https://www.ncbi.nlm.nih.gov/pubmed/39426598) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |
| `Zeuli_2019.pdf` | Zeuli J et al., Bictegravir, a novel integrase inhibito…, Drugs of today (Barcelona,… (2019) | pgx | 7 | [10.1358/dot.2019.55.11.3068796](https://doi.org/10.1358/dot.2019.55.11.3068796) | [31840682](https://www.ncbi.nlm.nih.gov/pubmed/31840682) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-07T15:44:36.265266+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Arora_2025 | not_relevant | 0 | 0 | This is a drug–drug interaction study (CYP3A4/UGT1A1/P-gp inhibitors/inducers), not a pharmacogenomic variant/genotype effect on bictegravir PK. |
| popPK | Barski_2019 | irrelevant | 0 | 0 | In vitro antiviral potency study (EC50/IC50 against HTLV-1 integrase), not a PK study; no disposition parameters for bictegravir. |
| PGx | Berkan-Kawińska_2024 | not_relevant | 0 | 0 | No pharmacogenomic data; study compares DAA regimens' efficacy/safety in coinfected patients, no gene variant effects on bictegravir PK/PD. |
| popPK | Blanco_2026 | irrelevant | 0 | 0 | This is a biomarker/inflammation study in HIV patients on INSTI regimens; bictegravir is only a treatment group, with no PK parameters (CL, V, ka, half-life, or PK model) reported. |
| popPK | Bourgi_2026 | irrelevant | 0 | 0 | Clinical weight-gain outcomes study with no PK parameters for bictegravir. |
| PGx | Camici_2024 | not_relevant | 0 | 0 | No pharmacogenomic analysis; genotype review only for HIV resistance, no effect of host gene variants on bictegravir PK/PD parameters. |
| popPK | Cheung_2022 | irrelevant | 0 | 0 | In-vitro phenotypic resistance study (EC50 susceptibility), no pharmacokinetic disposition parameters for bictegravir. |
| PGx | Courlet_2020 | not_relevant | 0 | 0 | This is an analytical method development/validation paper for TDM of bictegravir; no gene variant/genotype/phenotype effects on PK or PD are reported. |
| popPK | Coyle_2024 | irrelevant | 0 | 0 | Study measures TFV-DP/FTC-TP adherence markers, not bictegravir PK parameters; bictegravir is only a co-administered drug. |
| popPK | Dudnyk_2025 | irrelevant | 0 | 0 | This is a viewpoint on TB dosing; bictegravir is only mentioned as co-administered ART with no PK parameters for it. |
| popPK | Hassounah_2017 | irrelevant | 0 | 0 | In vitro antiviral susceptibility study (EC50s), no PK disposition parameters for bictegravir. |
| popPK | Hsu_2022 | irrelevant | 0 | 0 | Observational weight-gain outcomes study; no PK parameters for bictegravir are reported. |
| PGx | Huang_2023 | not_relevant | 0 | 0 | The paper studies drug effects on BBB integrity in vitro/in vivo; no gene variant/genotype/phenotype is linked to bictegravir PK or PD parameters. |
| popPK | Imaz_2021 | irrelevant | 0 | 0 | no_text gate: only 287 chars of text extracted (&lt; 400) |
| popPK | Isaacs_2020 | irrelevant | 0 | 0 | This is a computational molecular modelling/docking study of HIV integrase binding; no pharmacokinetic parameters (CL, V, ka, half-life, PK model) for bictegravir are reported. |
| popPK | Ivashchenko_2020 | irrelevant | 0 | 0 | Bictegravir is only a comparator; PK data concern a new compound 1{26}, and no numeric PK values appear in the evidence. |
| PGx | Jadav_2024 | not_relevant | 2 | 3 | Study examines bictegravir's induction of transporter gene expression in rat PBMCs, not a gene variant/genotype altering bictegravir PK/PD parameters. |
| popPK | Kang_2026 | irrelevant | 0 | 0 | This is a computational drug–food interaction prediction study with no bictegravir PK parameters; bictegravir is not even mentioned. |
| popPK | Khoei_2026 | irrelevant | 0 | 0 | This is a population-PK study of dolutegravir (DTG), not bictegravir; bictegravir is not the subject drug. |
| PGx | Kolakowska_2019 | not_relevant | 2 | 1 | Review mentions pharmacogenetics as promising for INSTI adverse effects but reports no gene-variant effect on bictegravir PK/PD parameters. |
| popPK | Lahiri_2026 | irrelevant | 1 | 0 | Bictegravir is only mentioned as a newer agent not included; the study covers RAL/DTG/EVG with no BIC PK parameters reported. |
| popPK | Li_2022 | irrelevant | 1 | 1 | This is a review of RT inhibitors; bictegravir is only mentioned as a component of Biktarvy with no PK parameters for BIC reported. |
| PGx | Lu_2021 | not_relevant | 2 | 2 | Review of drug-drug interactions for INSTIs; no gene variant/genotype effect on bictegravir PK/PD parameters reported. |
| popPK | Mandal_2019 | irrelevant | 3 | 2 | In-vitro nanoformulation study with no quantitative PK disposition parameters (CL, V, half-life) for bictegravir; only LC-MS/MS intracellular PK mentioned without numeric values. |
| popPK | Mezzogori_2025 | irrelevant | 0 | 0 | Clinical effectiveness study with no PK parameters or model for bictegravir. |
| PGx | Nwadiugwu_2025 | not_relevant | 0 | 0 | In silico drug repurposing study; no gene variant/genotype effect on bictegravir PK/PD parameters reported. |
| popPK | Patel_2026 | irrelevant | 0 | 0 | This is a clinical effectiveness/weight-gain cohort study of INSTI switches with no PK parameters (CL, V, ka, half-life, or PK model) for bictegravir reported anywhere in the evidence. |
| PGx | Pennetzdorfer_2026 | not_relevant | 0 | 0 | Paper reports HIV resistance mutations' impact on efficacy, not a host/variant pharmacogenomic effect on bictegravir PK or PD parameters. |
| PGx | Pozniak_2025 | not_relevant | 0 | 0 | The paper reports HIV genotype/resistance and virologic outcomes, not a pharmacogenomic effect on bictegravir PK/PD parameters. |
| popPK | Prosperi_2026 | irrelevant | 0 | 0 | This is an LLM causal-reasoning evaluation study with no pharmacokinetic parameters for bictegravir or any drug. |
| PGx | Sax_2022 | not_relevant | 2 | 3 | Reports efficacy/virologic suppression by M184V/I resistance genotype, not a PK or PD parameter effect of a gene variant on bictegravir. |
| popPK | Schneiderman_2022 | irrelevant | 0 | 0 | In vitro antiviral potency study of cabotegravir against HTLV-1; bictegravir is only a comparator with no PK disposition parameters reported. |
| popPK | Serrano-Villar_2026 | irrelevant | 0 | 0 | Clinical trial of inflammatory/metabolic outcomes after ART switch; no PK parameters (CL, V, ka, half-life, or population-PK model) for bictegravir are reported anywhere in the evidence. |
| PGx | Stader_2021 | not_relevant | 0 | 0 | This is a PBPK DDI modeling study of enzyme inhibitors/inducers; no gene variant/genotype/phenotype effect on bictegravir PK is reported. |
| PGx | Sánchez-Cano_2026 | not_relevant | 0 | 0 | Letter discusses rifampicin drug-drug interaction with bictegravir PK; no gene variant/genotype effect reported. |
| PGx | Taylor_2026 | not_relevant | 0 | 0 | The paper explicitly states no relevant pharmacogenetic studies were identified for bictegravir. |
| PGx | Tsuchiya_2025 | not_relevant | 0 | 0 | The paper reports ABCB1 4036 A&gt;G effects on tenofovir alafenamide concentrations only; no pharmacogenomic effect on bictegravir PK/PD parameters is reported. |
| PGx | Uddin_2022 | not_relevant | 0 | 0 | Bictegravir is only mentioned as a contraindicated MATE1 inhibitor; no gene variant effect on bictegravir PK/PD is reported. |
| PGx | VanderVeen_2026 | not_relevant | 0 | 0 | Paper reports HIV resistance analysis for islatravir/lenacapavir, not pharmacogenomic effects on bictegravir PK/PD parameters. |
| popPK | Vegas_2025 | relevant | 7 | 2 | A population PKPD model including bictegravir monotherapy was developed, but the PK parameter values are in supplementary material 1, not provided in the evidence; only EC50 IIV (243.5% for BIC) appears. |
| popPK | Yan_2026 | irrelevant | 0 | 0 | The paper models tenofovir, lamivudine, and emtricitabine PK; bictegravir is never mentioned and no bictegravir parameters appear. |
| PGx | Zeuli_2019 | not_relevant | 3 | 2 | Mentions UGT1A1/CYP3A4 metabolism and inducer interactions but no gene variant/genotype effect on BIC PK/PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 15:44 UTC</sub>
