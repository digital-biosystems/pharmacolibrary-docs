<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D07A&quot;,&quot;href&quot;:&quot;atc/D07A.md&quot;},{&quot;label&quot;:&quot;mometasone&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Mometasone_Vlachou2021_reference&quot;,&quot;label&quot;:&quot;Vlachou_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mometasone/Mometasone_Vlachou2021_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# mometasone

- **generic name:** mometasone
- **ATC codes:** `D07AC13`, `D07XC03`, `R01AD09`, `R03AK09`, `R03AK14`, `R03AL12`, `R03BA07`
- **DrugBank:** [DB00764](https://go.drugbank.com/drugs/DB00764) · **PubChem:** [CID 441335](https://pubchem.ncbi.nlm.nih.gov/compound/441335)
- **molar mass:** 427.361 g/mol (C22H28Cl2O4) — DrugBank
- **groups:** approved, investigational

## About

Mometasone is a corticosteroid used to treat nasal conditions such as rhinitis, sinusitis, and nasal polyps, and is also applied to the skin as a potent topical corticosteroid. It is an approved medicine, available in nasal, inhalation, and skin preparations, and is widely used.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q28208887](https://www.wikidata.org/wiki/Q28208887) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| mometasone (mometasone furoate) | parent | 427.361 | C22H28Cl2O4 | DrugBank | [441335](https://pubchem.ncbi.nlm.nih.gov/compound/441335) | Bartels_2021 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-08 00:54 | 25:09 | 1/1/0 | 4/0/3 | 0/0/0 | 540,573/29,530 | ollama / qwen3.8:27b-mtp-q8_0 | 13 | 1/8 | 13/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Vlachou_2021_reference](drugs/drug_mometasone/Mometasone_Vlachou2021_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Vlachou M et al., An In Vitro-In Vivo Simulation Approach…, Materials (Basel, Switzerla… (2021) | [10.3390/ma14030555](https://doi.org/10.3390/ma14030555) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Bartels_2021_reference](drugs/drug_mometasone/Mometasone_Bartels2021_reference.md) | — | 1-compartment (no model) | 4 (+4 cov.) | Bartels C et al., Population Pharmacokinetic Analysis of…, European journal of drug me… (2021) | [10.1007/s13318-021-00689-x](https://doi.org/10.1007/s13318-021-00689-x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Dirks_2008_AP_1](drugs/drug_mometasone/pd_Dirks_2008_AP_1.md) | SEAP expression (AP-1 mediated transrepression) ← mometasone furoate · direct sigmoid Emax (Hill) effect | — | Dirks NL et al., Transrepression and transactivation pot…, Die Pharmazie (2008) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Dirks_2008_GRE](drugs/drug_mometasone/pd_Dirks_2008_GRE.md) | SEAP expression (GRE mediated transactivation) ← mometasone furoate · direct sigmoid Emax (Hill) effect | — | Dirks NL et al., Transrepression and transactivation pot…, Die Pharmazie (2008) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Dirks_2008_NF_jB](drugs/drug_mometasone/pd_Dirks_2008_NF_jB.md) | SEAP expression (NF-jB mediated transrepression) ← mometasone furoate · direct sigmoid Emax (Hill) effect | — | Dirks NL et al., Transrepression and transactivation pot…, Die Pharmazie (2008) | — |
| <span class="pk-badge pk-badge--green">extracted</span> | [Rath_2022_VCA](drugs/drug_mometasone/pd_Rath_2022_VCA.md) | skin blanching responses ← mometasone furoate · direct Emax (saturable) effect | — | Rath S et al., Application of Emax model to assess the…, Basic & clinical pharmacolo… (2022) | [10.1111/bcpt.13759](https://doi.org/10.1111/bcpt.13759) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Tapfumaneyi_2022_skin_blanching](drugs/drug_mometasone/pd_Tapfumaneyi_2022_skin_blanching.md) | skin blanching ← mometasone furoate · direct Emax (saturable) effect | — | Tapfumaneyi P et al., Fitting Pharmacodynamic Data to the Ema…, Molecular pharmaceutics (2022) | [10.1021/acs.molpharmaceut.2c00254](https://doi.org/10.1021/acs.molpharmaceut.2c00254) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Tayab_2007_urinary_cortisol_creatinine](drugs/drug_mometasone/pd_Tayab_2007_urinary_cortisol_creatinine.md) | urinary cortisol/creatinine ← mometasone furoate · direct Emax (saturable) effect | — | Tayab ZR et al., Pharmacokinetic/pharmacodynamic evaluat…, British journal of clinical… (2007) | [10.1111/j.1365-2125.2007.02919.x](https://doi.org/10.1111/j.1365-2125.2007.02919.x) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Llanos-Paez_2023_FEV1](drugs/drug_mometasone/pd_Llanos_Paez_2023_FEV1.md) | FEV1 ← mometasone · direct Emax (saturable) effect | model (no simulator) | Llanos-Paez C et al., Joint longitudinal model-based meta-ana…, Journal of pharmacokinetics… (2023) | [10.1007/s10928-023-09853-z](https://doi.org/10.1007/s10928-023-09853-z) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Zhang_2002_constitutive_human_eosinophil_apoptosis](drugs/drug_mometasone/pd_Zhang_2002_constitutive_human_eosinophil_apoptosis.md) | constitutive human eosinophil apoptosis ← mometasone · direct Emax (saturable) effect | model (no simulator) | Zhang X et al., Divergent effect of mometasone on human…, Life sciences (2002) | [10.1016/s0024-3205(02)01921-5](https://doi.org/10.1016/s0024-3205(02)01921-5) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Zhang_2002_human_neutrophil_apoptosis](drugs/drug_mometasone/pd_Zhang_2002_human_neutrophil_apoptosis.md) | human neutrophil apoptosis ← mometasone · direct Emax (saturable) effect | model (no simulator) | Zhang X et al., Divergent effect of mometasone on human…, Life sciences (2002) | [10.1016/s0024-3205(02)01921-5](https://doi.org/10.1016/s0024-3205(02)01921-5) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Zvidzayi_2021_AUEC](drugs/drug_mometasone/pd_Zvidzayi_2021_AUEC.md) | skin blanching response ← mometasone furoate · direct Emax (saturable) effect | model (no simulator) | Zvidzayi M et al., A Novel Approach to Assess the Potency…, Pharmaceutics (2021) | [10.3390/pharmaceutics13091456](https://doi.org/10.3390/pharmaceutics13091456) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=mometasone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | kidney | `CYP3A5` inducer | DrugBank actor |
| metabolism | liver | `CYP2C8` inhibitor, `CYP3A4` inducer/substrate, `CYP3A5` inducer | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate, `CYP3A5` inducer | DrugBank actor |

<sub>Actors without a tissue in the table: NR3C1 (target), PGR (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 97 matched, 61 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Austin_2002 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic assessment of receptor specificity and does not report pharmacokinetic parameters. |
| popPK | Beuschlein_2024 | irrelevant | 0 | 0 | The paper is a clinical guideline regarding glucocorticoid-induced adrenal insufficiency and does not report pharmacokinetic parameters for mometasone. |
| PGx | Bhumbra_2007 | not_relevant | 0 | 0 | The paper describes a drug-drug interaction (CYP3A4 inhibition by lopinavir/ritonavir) affecting fluticasone, not a pharmacogenomic effect on mometasone. |
| popPK | Brunetti_2024 | irrelevant | 0 | 0 | The paper is a mathematical modeling study of leukemia stem cell dynamics and does not report quantitative pharmacokinetic disposition parameters (CL, V, etc.) for mometasone. |
| popPK | Cornely_2021 | irrelevant | 0 | 0 | no_text gate: only 181 chars of text extracted (&lt; 400) |
| popPK | Daley-Yates_2004 | irrelevant | 2 | 0 | The study is a meta-analysis modeling growth velocity (PD) based on exposure, not a primary PK study reporting quantitative disposition parameters (CL, V, etc.) for mometasone. |
| popPK | Dirks_2008 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of transcriptional potency (EC50 for gene expression) in cell lines, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | García-Martín_2013 | not_relevant | 2 | 1 | The paper is a general review of drug metabolism in allergic diseases and mentions mometasone only in the context of potential metabolic interactions or pre-systemic metabolism, without reporting specific pharmacogenomic effects on its PK/PD parameters. |
| popPK | Hochhaus_2008 | irrelevant | 2 | 1 | This is a review article that summarizes pharmacokinetic properties (bioavailability, AUC) but does not report original quantitative compartmental parameters (CL, V, ka) or a population PK model. |
| popPK | Kagoshima_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of gene transcription and histone acetylation, reporting no pharmacokinetic parameters for mometasone. |
| popPK | Lax_2022 | irrelevant | 0 | 0 | This is a clinical review of topical corticosteroid strategies for eczema and does not report pharmacokinetic parameters for mometasone. |
| popPK | Llanos-Paez_2023 | irrelevant | 0 | 0 | The paper is a model-based meta-analysis of FEV1 and exacerbation rates in COPD, not a pharmacokinetic study, and mometasone is only listed as a comparator drug with efficacy parameters. |
| popPK | Obrador_2026 | irrelevant | 0 | 0 | The paper is a review of radiomitigators for radiation injury and does not contain any pharmacokinetic data for mometasone. |
| popPK | Ouassaf_2026 | irrelevant | 0 | 0 | The paper describes a machine learning framework for predicting drug-drug interactions and does not report any pharmacokinetic parameters for mometasone. |
| popPK | Pu_2026 | irrelevant | 0 | 0 | The paper is a meta-analysis of adverse events and does not report pharmacokinetic parameters for mometasone. |
| popPK | Rath_2022 | irrelevant | 0 | 0 | The study assesses topical potency via vasoconstrictor assay (Emax model) and does not report pharmacokinetic disposition parameters (CL, V, t1/2) for mometasone. |
| PGx | Reichmuth_2000 | not_relevant | 0 | 0 | The paper is a general review of allergic rhinitis therapies and does not report any pharmacogenomic effects on the PK or PD of mometasone. |
| popPK | Sakor_2023 | irrelevant | 0 | 0 | The paper is a computational study on constructing a knowledge graph for COVID-19 drug interactions and does not report any pharmacokinetic parameters for mometasone. |
| PGx | Seymour_2021 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions between intranasal steroids and HIV protease inhibitors, not pharmacogenomic effects of gene variants on mometasone PK/PD. |
| popPK | Tapfumaneyi_2022 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of topical corticosteroid potency using the Emax model, not a pharmacokinetic study reporting disposition parameters for mometasone. |
| popPK | Tayab_2007 | irrelevant | 2 | 0 | The study focuses on pharmacodynamic effects (urinary cortisol suppression) and relative bioavailability comparisons rather than reporting quantitative disposition parameters (CL, V, ka) for mometasone. |
| popPK | Vlachou_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of amlodipine, irbesartan, and hydrochlorothiazide, with mometasone only mentioned in passing as an example of an inhaled corticosteroid. |
| PGx | Winter_2008 | not_relevant | 0 | 0 | The paper reports mometasone furoate as an inhibitor of ABCB1-mediated drug resistance to daunorubicin, not a pharmacogenomic effect on mometasone's own PK/PD parameters. |
| popPK | Zhang_2002 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of mometasone's effect on cell apoptosis, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | The paper is a clinical trial for stapokibart (an anti-IL-4Rα antibody) and does not report pharmacokinetic parameters for mometasone. |
| popPK | Zvidzayi_2021 | irrelevant | 0 | 0 | The study is a pharmacodynamic potency assessment using the vasoconstrictor assay (skin blanching) and does not report pharmacokinetic disposition parameters (CL, V, ka, etc.) for mometasone. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-08 00:38 UTC</sub>
