<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;abiraterone&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Abiraterone_Stuyckens2014_final&quot;,&quot;label&quot;:&quot;Stuyckens_2014_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_abiraterone/Abiraterone_Stuyckens2014_final.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Abiraterone_Stuyckens2014_final_chemotherapy_pretreated_pati&quot;,&quot;label&quot;:&quot;Stuyckens_2014_final_chemotherapy_pretreated_patients_final_model_1&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_abiraterone/Abiraterone_Stuyckens2014_final_chemotherapy_pretreated_pati.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# abiraterone

- **generic name:** abiraterone
- **ATC codes:** `L01XK52`, `L02BX03`, `L02BX53`
- **DrugBank:** [DB05812](https://go.drugbank.com/drugs/DB05812) · **PubChem:** [CID 132971](https://pubchem.ncbi.nlm.nih.gov/compound/132971)
- **molar mass:** 349.509 g/mol (C24H31NO) — DrugBank
- **groups:** approved, investigational

## About

Abiraterone is an anticancer medicine used to treat prostate cancer. It is authorised in the European Union and widely used as an endocrine cancer therapy.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q321431](https://www.wikidata.org/wiki/Q321431) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| abiraterone (abiraterone acetate) | parent | 349.509 | C24H31NO | DrugBank | [132971](https://pubchem.ncbi.nlm.nih.gov/compound/132971) | Stuyckens_2014 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:48 | 9:17 | 2/0/0 | 0/0/2 | 0/0/0 | 233,214/15,776 | ollama / qwen3.8:27b-mtp-q8_0 | 7 | 4/3 | 5/2 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Stuyckens_2014_final](drugs/drug_abiraterone/Abiraterone_Stuyckens2014_final.md) | ▶ model + simulator | 1-compartment, oral | 5 | Stuyckens K et al., Population pharmacokinetic analysis of…, Clinical pharmacokinetics (2014) | [10.1007/s40262-014-0178-6](https://doi.org/10.1007/s40262-014-0178-6) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Stuyckens_2014_final_chemotherapy_pretreated_patients_final_model_1](drugs/drug_abiraterone/Abiraterone_Stuyckens2014_final_chemotherapy_pretreated_pati.md) | ▶ model + simulator | 1-compartment, oral | 5 | Stuyckens K et al., Population pharmacokinetic analysis of…, Clinical pharmacokinetics (2014) | [10.1007/s40262-014-0178-6](https://doi.org/10.1007/s40262-014-0178-6) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Boerrigter_2022_OS](drugs/drug_abiraterone/pd_Boerrigter_2022_OS.md) | overall survival ← abiraterone · time-to-event model | — | Boerrigter E et al., The effect of chemotherapy on the expos…, British journal of clinical… (2022) | [10.1111/bcp.15057](https://doi.org/10.1111/bcp.15057) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Boerrigter_2022_PFS](drugs/drug_abiraterone/pd_Boerrigter_2022_PFS.md) | progression-free survival ← abiraterone · time-to-event model | — | Boerrigter E et al., The effect of chemotherapy on the expos…, British journal of clinical… (2022) | [10.1111/bcp.15057](https://doi.org/10.1111/bcp.15057) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [van_2020_PSA_PFS](drugs/drug_abiraterone/pd_van_2020_PSA_PFS.md) | prostate-specific antigen (PSA) independent progression-free survival ← abiraterone · time-to-event model | — | van Nuland M et al., Exposure-response analyses of abiratero…, Prostate cancer and prostat… (2020) | [10.1038/s41391-019-0179-5](https://doi.org/10.1038/s41391-019-0179-5) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=abiraterone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| distribution | blood-brain barrier | `ABCC1` inhibitor | DrugBank actor |
| distribution | lung | `ABCC1` inhibitor | DrugBank actor |
| metabolism | blood | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` inhibitor | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor, `CYP2C19` inhibitor, `CYP2C8` inhibitor, `CYP2C9` inhibitor, `CYP2D6` inhibitor, `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor, `SLCO1B1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| — | adrenal gland | `CYP17A1` inhibitor | DrugBank actor |
| — | testis | `CYP17A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: SULT2A1 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 17 matched, 17 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 2  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Merdita_2024.pdf` | Merdita S et al., Evaluation of adherence to abiraterone…, British journal of clinical… (2024) | popPK | 10 | [10.1111/bcp.16155](https://doi.org/10.1111/bcp.16155) | [38958217](https://pubmed.ncbi.nlm.nih.gov/38958217) | The paper describes a population pharmacokinetic model for abiraterone, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| `Russu_2025.pdf` | Russu A et al., Population Pharmacokinetics of Nirapari…, Advances in therapy (2025) | popPK | 10 | [10.1007/s12325-025-03104-y](https://doi.org/10.1007/s12325-025-03104-y) | [40016438](https://pubmed.ncbi.nlm.nih.gov/40016438) | The paper describes a population PK model for abiraterone in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |

<sub>queue written 2026-10-07T21:41:16.583852+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Blanchet_2018 | irrelevant | 2 | 0 | The study reports only trough concentrations (Cmin) and metabolic ratios for a PK/PD association analysis, lacking quantitative disposition parameters (CL, V, ka) or a compartmental/population PK model. |
| popPK | Boerrigter_2022 | relevant | 8 | 2 | The study performs a population PK analysis for abiraterone, but the specific numeric parameter estimates (CL, V, etc.) are located in the Supporting Information (Table S1, Figures S1-S2) which is not provided in the evidence. |
| popPK | Cella_2016 | irrelevant | 0 | 0 | The paper reports patient-reported outcomes (quality of life) and does not contain any pharmacokinetic parameters for abiraterone. |
| popPK | Chiong_2025 | relevant | 8 | 2 | The study reports PK parameters for abiraterone in humans, but the specific numeric values are explicitly stated to be in Supplementary Materials which are not provided. |
| popPK | Janssen_2020 | irrelevant | 2 | 0 | This is a simulation study evaluating TDM extrapolation methods using a pre-existing population PK model, and it does not report the underlying quantitative PK parameter values (CL, V, etc.) for abiraterone. |
| popPK | Kuzma_2024 | irrelevant | 0 | 0 | The study evaluates health-related quality of life (HRQoL) outcomes and contains no pharmacokinetic parameters for abiraterone. |
| popPK | Li_2015 | irrelevant | 2 | 0 | This is a clinical trial simulation study using virtual data to evaluate trial design power, not an original pharmacokinetic study reporting measured quantitative disposition parameters for abiraterone. |
| popPK | Masamrekh_2020 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CYP3A4 binding and inhibition, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Merdita_2024 | relevant | 10 | 0 | The paper describes a population pharmacokinetic model for abiraterone, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| popPK | Myint_2020 | irrelevant | 0 | 0 | The paper is a systematic review and meta-analysis of fall and fracture risks, not a pharmacokinetic study, and abiraterone is only mentioned as a control agent. |
| popPK | Russu_2025 | relevant | 10 | 0 | The paper describes a population PK model for abiraterone in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| popPK | Serbian_2020 | irrelevant | 0 | 0 | The paper describes the synthesis of abiraterone conjugates for cytotoxicity screening, not the pharmacokinetics of abiraterone itself. |
| popPK | Su_2018 | irrelevant | 0 | 0 | The paper focuses on CD46 as a therapeutic target and antibody-drug conjugate efficacy, with no pharmacokinetic modeling or disposition parameters for abiraterone. |
| popPK | Yoshida_2021 | irrelevant | 0 | 0 | The study characterizes the population pharmacokinetics of ipatasertib and its metabolite M1, with abiraterone serving only as a co-administered covariate affecting ipatasertib clearance. |
| popPK | Yuan_2020 | irrelevant | 0 | 0 | The paper is an in-vitro antiviral screening study reporting EC50 values for SARS-CoV-2 inhibition, not a pharmacokinetic study of abiraterone. |
| popPK | van_2020 | irrelevant | 2 | 0 | The study is an exposure-response analysis reporting clinical outcomes (PSA-PFS) and concentration thresholds (Cmin), but it does not report quantitative pharmacokinetic disposition parameters (CL, V, ka, t1/2) or a compartmental/population-PK model. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 21:41 UTC</sub>
