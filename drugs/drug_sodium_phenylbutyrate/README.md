<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;sodium phenylbutyrate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;SodiumPhenylbutyrate_Eriksen2023_reference&quot;,&quot;label&quot;:&quot;Eriksen_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sodium_phenylbutyrate/SodiumPhenylbutyrate_Eriksen2023_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;SodiumPhenylbutyrate_Wang2022_reference&quot;,&quot;label&quot;:&quot;Wang_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sodium_phenylbutyrate/SodiumPhenylbutyrate_Wang2022_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# sodium phenylbutyrate

- **generic name:** sodium phenylbutyrate
- **ATC codes:** `A16AX03`, `N07XX19`
- **DrugBank:** [DB06819](https://go.drugbank.com/drugs/DB06819) · **PubChem:** [CID 4775](https://pubchem.ncbi.nlm.nih.gov/compound/4775)
- **molar mass:** 164.2011 g/mol (C10H12O2) — DrugBank
- **groups:** approved, investigational

## About

Sodium phenylbutyrate is used to treat urea cycle disorders, and has also been studied or used for conditions such as cystic fibrosis, sickle-cell disease, beta thalassemia and myeloproliferative disorders. It is an approved medicine, with additional investigational uses, and is classified for both metabolic and nervous system indications.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7553358](https://www.wikidata.org/wiki/Q7553358) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| phenylacetate | metabolite | 135.142 | C8H7O2- | PubChem | [4409936](https://pubchem.ncbi.nlm.nih.gov/compound/4409936) | Piscitelli_1995 |
| phenylacetylglutamine | metabolite | 264.281 | C13H16N2O4 | PubChem | [92258](https://pubchem.ncbi.nlm.nih.gov/compound/92258) | Piscitelli_1995 |
| sodium_phenylbutyrate (phenylbutyrate) | metabolite | 164.201 | C10H12O2 | DrugBank | [4775](https://pubchem.ncbi.nlm.nih.gov/compound/4775) | Eriksen_2023, Piscitelli_1995, Wang_2022 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 03:00 | 0:42 | 1/1/1 | 0/1/0 | 0/0/0 | 14,018/597 | ollama / qwen3.8:27b-mtp-q8_0 | 15 | 2/13 | 15/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Eriksen_2023_reference](drugs/drug_sodium_phenylbutyrate/SodiumPhenylbutyrate_Eriksen2023_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Eriksen PL et al., Clearance and production of ammonia qua…, Journal of hepatology (2023) | [10.1016/j.jhep.2023.03.042](https://doi.org/10.1016/j.jhep.2023.03.042) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: unreported model parameter default(s): ka</sub><br><sub>route_to: `scholar`</sub> | [Wang_2022_reference](drugs/drug_sodium_phenylbutyrate/SodiumPhenylbutyrate_Wang2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Wang X et al., Population Pharmacokinetic Analysis to…, Clinical pharmacokinetics (2022) | [10.1007/s40262-021-01075-1](https://doi.org/10.1007/s40262-021-01075-1) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Piscitelli_1995_reference](drugs/drug_sodium_phenylbutyrate/SodiumPhenylbutyrate_Piscitelli1995_reference.md) | — | general linear (no model) | 0 | Piscitelli SC et al., Disposition of phenylbutyrate and its m…, Journal of clinical pharmac… (1995) | [10.1002/j.1552-4604.1995.tb04075.x](https://doi.org/10.1002/j.1552-4604.1995.tb04075.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">mouse</span> | [Consalvi_2013_CSA](drugs/drug_sodium_phenylbutyrate/pd_Consalvi_2013_CSA.md) | muscle fiber cross-sectional area ← givinostat · stimulation effect | — | Consalvi S et al., Preclinical studies in the mdx mouse mo…, Molecular medicine (Cambrid… (2013) | [10.2119/molmed.2013.00011](https://doi.org/10.2119/molmed.2013.00011) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">mouse</span> | [Consalvi_2013_fatty_infiltration](drugs/drug_sodium_phenylbutyrate/pd_Consalvi_2013_fatty_infiltration.md) | fatty infiltration ← givinostat · stimulation effect | — | Consalvi S et al., Preclinical studies in the mdx mouse mo…, Molecular medicine (Cambrid… (2013) | [10.2119/molmed.2013.00011](https://doi.org/10.2119/molmed.2013.00011) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">mouse</span> | [Consalvi_2013_fibrotic_scar_area](drugs/drug_sodium_phenylbutyrate/pd_Consalvi_2013_fibrotic_scar_area.md) | fibrotic scar area ← givinostat · stimulation effect | — | Consalvi S et al., Preclinical studies in the mdx mouse mo…, Molecular medicine (Cambrid… (2013) | [10.2119/molmed.2013.00011](https://doi.org/10.2119/molmed.2013.00011) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">mouse</span> | [Consalvi_2013_inflammatory_infiltrate](drugs/drug_sodium_phenylbutyrate/pd_Consalvi_2013_inflammatory_infiltrate.md) | inflammatory infiltrate ← givinostat · stimulation effect | — | Consalvi S et al., Preclinical studies in the mdx mouse mo…, Molecular medicine (Cambrid… (2013) | [10.2119/molmed.2013.00011](https://doi.org/10.2119/molmed.2013.00011) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">mouse</span> | [Consalvi_2013_membrane_stability](drugs/drug_sodium_phenylbutyrate/pd_Consalvi_2013_membrane_stability.md) | membrane stability ← givinostat · stimulation effect | — | Consalvi S et al., Preclinical studies in the mdx mouse mo…, Molecular medicine (Cambrid… (2013) | [10.2119/molmed.2013.00011](https://doi.org/10.2119/molmed.2013.00011) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">mouse</span> | [Consalvi_2013_treadmill_endurance_performance](drugs/drug_sodium_phenylbutyrate/pd_Consalvi_2013_treadmill_endurance_performance.md) | treadmill endurance performance ← givinostat · stimulation effect | — | Consalvi S et al., Preclinical studies in the mdx mouse mo…, Molecular medicine (Cambrid… (2013) | [10.2119/molmed.2013.00011](https://doi.org/10.2119/molmed.2013.00011) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=sodium_phenylbutyrate) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: HDAC1 (inhibitor), PRKCA (modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 168 matched, 61 returned
- **screened:** 6  ·  **relevant:** 2
- **records:** 3  ·  extracted 1  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Monteleone_2013.pdf` | Monteleone JP et al., Population pharmacokinetic modeling and…, Journal of clinical pharmac… (2013) | popPK | 9 | [10.1002/jcph.92](https://doi.org/10.1002/jcph.92) | [23775211](https://pubmed.ncbi.nlm.nih.gov/23775211) | A population PK model for sodium phenylbutyrate is clearly the subject, but no numeric parameter values (CL, V, ka, etc.) appear in the evidence—likely in tables/figures not provided. |
| `Piscitelli_1995.pdf` | Piscitelli SC et al., Disposition of phenylbutyrate and its m…, Journal of clinical pharmac… (1995) | popPK | 9 | [10.1002/j.1552-4604.1995.tb04075.x](https://doi.org/10.1002/j.1552-4604.1995.tb04075.x) | [7650225](https://pubmed.ncbi.nlm.nih.gov/7650225) | Original PK study of phenylbutyrate with compartmental modeling; some numeric parameters (Km, Vmax) present, but full CL/V parameter values likely in tables/figures not fully included. |

<sub>queue written 2026-09-27T11:04:57.528618+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Al-Keilani_2018 | not_relevant | 2 | 5 | In vitro cell-line MTT study reporting only IC50 values and synergy ratios; no in vivo exposure- or dose-response PD relationship for NaPB. |
| popPK | Anderson_2019 | irrelevant | 0 | 0 | The paper concerns a phenylbutyrate-based integrin inhibitor (compound 39), not sodium phenylbutyrate, and no PK parameters for sodium phenylbutyrate are reported. |
| PD | Begum_2025 | not_relevant | 1 | 0 | Pharmacovigilance/ADR database study with physicochemical and in-vitro IC50 comparisons; no concentration-effect or dose-response PD analysis or PD parameters for sodium phenylbutyrate. |
| popPK | Bekele_2018 | irrelevant | 0 | 0 | Clinical efficacy trial of PBA adjunctive therapy with no PK parameters reported. |
| popPK | Berry_2018 | irrelevant | 3 | 2 | The subject drug is glycerol phenylbutyrate (with PBA as a metabolite), not sodium phenylbutyrate, and no numeric PK parameter values (CL, V, half-life) appear in the evidence. |
| popPK | Bowser_2024 | irrelevant | 0 | 0 | This is a biomarker (YKL-40, CHIT1, CRP) efficacy study of sodium phenylbutyrate in ALS with no PK disposition parameters (CL, V, ka, half-life, or PK model) reported. |
| PD | Brunetti-Pierri_2011 | not_relevant | 2 | 1 | Reports qualitative reduction of BCAA/BCKA after phenylbutyrate therapy and a mechanistic enzyme-activation explanation, but no numeric PD parameters or effect-vs-concentration/dose relationship are stated or derivable. |
| popPK | Cai_2024 | irrelevant | 0 | 0 | This is a disease-course (OS/ALSFRS-R) model of ALS placebo groups; sodium phenylbutyrate is only mentioned as part of AMX0035, with no PK parameters for it. |
| PD | Cai_2024 | not_relevant | 0 | 0 | This is a placebo-group disease-course (natural history) model for ALS; no sodium phenylbutyrate exposure- or dose-response relationship or drug PD parameters are reported. |
| popPK | Cederlund_2014 | irrelevant | 0 | 0 | In-vitro proteomics study of LL-37 expression with PBA as a cell stimulus; no PK parameters for sodium phenylbutyrate are reported. |
| popPK | Chou_1976 | irrelevant | 0 | 0 | The paper concerns phenoxybenzamine (PBA) and renal sodium excretion in dogs, not sodium phenylbutyrate, and contains no PK disposition parameters. |
| popPK | Consalvi_2013 | irrelevant | 0 | 0 | The PK/PD model and AUC values pertain to givinostat, not sodium phenylbutyrate, which is only mentioned as a comparator HDAC inhibitor. |
| popPK | Coussens_2015 | irrelevant | 0 | 0 | This is an in vitro microbiology/immunology study of PBA against M. tuberculosis with no PK disposition parameters (CL, V, half-life, or population-PK model) reported. |
| PD | Deng_2023 | not_relevant | 2 | 1 | In vitro mechanistic toxicity study of OTA with sodium phenylbutyrate as an intervention; no concentration-effect PD parameters (Emax, EC50, etc.) for phenylbutyrate are reported or derivable. |
| popPK | Deng_2024 | irrelevant | 0 | 0 | This is a nanoparticle drug delivery study for XTS in rheumatoid arthritis with no pharmacokinetic parameters for sodium phenylbutyrate. |
| popPK | Ding_2026 | irrelevant | 0 | 0 | This is a biomaterials study on a glucose-responsive hydrogel for bone regeneration with no PK parameters for sodium phenylbutyrate. |
| popPK | Eriksen_2023 | irrelevant | 1 | 1 | The study measures ammonia clearance/production, not PK parameters of sodium phenylbutyrate; glycerol phenylbutyrate is only an intervention with no drug disposition parameters (CL/V/ka) reported. |
| popPK | Fong_2025 | irrelevant | 0 | 0 | This is an in silico docking/MD study of montelukast targeting Cav3.1; sodium phenylbutyrate is not the subject drug and no PK disposition parameters are reported. |
| PD | Fong_2025 | not_relevant | 1 | 1 | Purely in silico docking/MD/MCell simulation study of montelukast (not sodium phenylbutyrate) with no PK data, no concentration-effect relationship from real subjects, and no extractable PD parameters like Emax/EC50. |
| popPK | Fujimoto_2025 | irrelevant | 0 | 0 | This is a histology/gene-expression study of biliary atresia with no pharmacokinetic parameters for sodium phenylbutyrate. |
| PD | Gore_2000 | not_relevant | 1 | 0 | Narrative review of clinical development; no numeric PD parameters or concentration-effect data reported. |
| PD | Gore_2002 | not_relevant | 3 | 2 | Only qualitative statements that end-of-infusion concentrations fell within an HDAC-inhibitory range; no numeric PD parameters or concentration-effect relationships reported. |
| PD | Hogarth_2007 | not_relevant | 3 | 1 | Dose-finding/tolerability study with only a qualitative mention of inverse dose-response in gene expression; no numeric PD parameters or effect-vs-concentration data reported. |
| popPK | Irth_1994 | irrelevant | 0 | 0 | The paper is an analytical LC method for CGS 21680, not sodium phenylbutyrate, and reports no PK disposition parameters. |
| PD | Juarez_2024 | not_relevant | 1 | 0 | Narrative review of NaPB mechanisms in neurological disorders with no concentration-effect or dose-response data or numeric PD parameters. |
| popPK | Kaur_2026 | irrelevant | 0 | 0 | The paper concerns a different compound (IP-045) with no PK parameters for sodium phenylbutyrate; 4-PBA is only mentioned as prior art. |
| popPK | Kim_2013 | irrelevant | 3 | 2 | PET biodistribution study of tracer doses in baboons; no CL/V/ka or population-PK parameter values for sodium phenylbutyrate are reported. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The paper concerns puerarin hydrogel delivery in cancer cachexia; sodium phenylbutyrate is not the subject drug and no PK parameters appear. |
| PD | Lin_2009 | not_relevant | 2 | 1 | Phase I trial mentions PD correlative studies (DNMT activity, histone acetylation) but reports no numeric exposure-response or dose-effect parameters for phenylbutyrate. |
| popPK | Longo_2021 | irrelevant | 2 | 1 | The drug studied is glycerol phenylbutyrate (a prodrug), not sodium phenylbutyrate, and no numeric PK disposition parameters (CL, V, half-life) are reported in the evidence. |
| PD | Longo_2021 | not_relevant | 2 | 1 | Reports ammonia levels and PK of GPB metabolites descriptively, but no concentration-effect or dose-response relationship or numeric PD parameters are presented. |
| PD | Mazzio_2017 | not_relevant | 1 | 1 | Sodium phenylbutyrate appears only as an assay-validation HDACi panel drug in an in vitro screening; no exposure- or dose-response relationship or numeric PD parameters for the drug are reported. |
| popPK | McGuire_2010 | irrelevant | 3 | 2 | Sodium phenylbutyrate is only a comparator to the subject drug glycerol phenylbutyrate, and no numeric PK parameter values for NaPBA appear in the evidence. |
| PD | McGuire_2010 | not_relevant | 2 | 1 | Reports PK and urinary PAGN excretion comparisons but no concentration-effect or dose-response relationship with numeric PD parameters. |
| popPK | Monteleone_2013 | relevant | 9 | 2 | A population PK model for sodium phenylbutyrate is clearly the subject, but no numeric parameter values (CL, V, ka, etc.) appear in the evidence—likely in tables/figures not provided. |
| PD | Monteleone_2013 | not_relevant | 2 | 1 | This is a population PK/metabolite-disposition and dosing-simulation study; no concentration-effect or dose-response PD relationship (e.g., ammonia control vs exposure) with numeric PD parameters is reported. |
| PD | Nogalska_2014 | not_relevant | 2 | 0 | In vitro cell-culture dose effects only; no concentration-effect data or numeric PD parameters reported. |
| PD | Omene_2026 | not_relevant | 1 | 0 | Review article mentioning sodium phenylbutyrate-mediated glutamine depletion qualitatively; no concentration-effect data or numeric PD parameters reported or derivable. |
| popPK | Palla_2026 | irrelevant | 4 | 2 | It is a bioanalytical LC-MS/MS method paper with a rat PK application, but no numeric disposition parameters (CL, V, half-life) appear in the evidence. |
| popPK | Palleis_2026 | irrelevant | 2 | 0 | This is a study protocol for a clinical trial of glycerol phenylbutyrate; PK is only mentioned as a planned exploratory analysis with no quantitative disposition parameters reported. |
| PD | Qian_2018 | not_relevant | 3 | 2 | In vitro IC50 values (4.0, 3.7, 3.0 mM) are cytotoxicity potency measures, not in-vivo exposure-response PD parameters; no concentration-effect modeling or PK/PD analysis is reported. |
| popPK | Schewe_1991 | irrelevant | 0 | 0 | In-vitro/mechanistic enzyme inhibition study with no PK parameters for sodium phenylbutyrate; it only calls for future pharmacokinetic studies. |
| PD | Shtilbans_2025 | not_relevant | 2 | 1 | In vitro combination screening in iPSC-derived neurons; no concentration-effect curves or numeric PD parameters (Emax/EC50) reported for sodium phenylbutyrate. |
| popPK | Sun_2022 | irrelevant | 0 | 0 | The paper concerns voriconazole ocular nanomicelles; sodium phenylbutyrate is not the subject drug and no PK parameters for it appear. |
| popPK | Wang_2021 | irrelevant | 2 | 1 | The study's subject drug is ornithine phenylacetate (phenylacetic acid/PAA), not sodium phenylbutyrate, which is only mentioned as a related approved product; PK parameters reported are for PAA/PAGN, not sodium phenylbutyrate. |
| PD | Wang_2021 | not_relevant | 3 | 2 | The paper reports exposure–AE correlation analyses (Fig. 3, Table 5) but explicitly finds no correlation between PAA exposure and neurologic adverse events, with no numeric PD parameters (Emax, EC50, slope) or effect-vs-concentration model derivable. |
| popPK | Wang_2022 | irrelevant | 1 | 0 | The subject drug is l-ornithine phenylacetate (PAA/PAGN); sodium phenylbutyrate is only mentioned as an approved comparator, and no PK parameters for sodium phenylbutyrate are reported. |
| PD | Wang_2022 | not_relevant | 2 | 1 | This is a population PK (PAA/PAGN/ORN) dose-selection analysis; ammonia removal was considered a PD marker but was explicitly omitted from the final model, and no numeric PD parameters (Emax, EC50, effect-concentration relationship) are reported or derivable. |
| popPK | Wolfram_2026 | irrelevant | 0 | 0 | A systematic review of cerebral organoid models with no pharmacokinetic data or sodium phenylbutyrate parameters. |
| PD | Wolfram_2026 | not_relevant | 0 | 0 | Systematic review of cerebral organoid models; no drug exposure-response or dose-effect data for sodium phenylbutyrate. |
| PD | Yadav_2021 | not_relevant | 1 | 0 | In vitro/in vivo mechanistic study using a single PBA concentration (150 µM) with no concentration- or dose-response modeling and no numeric PD parameters (Emax, EC50, etc.) reported or derivable. |
| popPK | Yang_2024 | irrelevant | 0 | 0 | This is a doxorubicin nanoparticle study; sodium phenylbutyrate is not the subject drug and no PK parameters for it appear. |
| PD | Zhang_2024 | not_relevant | 1 | 0 | Narrative review of HDAC inhibitors in neurology with no concentration- or dose-effect data or numeric PD parameters for sodium phenylbutyrate. |
| popPK | Zhang_2024_2 | irrelevant | 0 | 0 | This is a photothermal/photodynamic antibacterial nanomaterial study with no pharmacokinetic parameters for sodium phenylbutyrate. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | This is a review on ER stress and neurogenesis with no PK data for sodium phenylbutyrate. |
| PD | Zhang_2025 | not_relevant | 0 | 0 | Review article on ER stress and neurogenesis; no phenylbutyrate PD or dose/concentration-effect data reported. |
| popPK | Zheng_2025 | irrelevant | 0 | 0 | The paper concerns loteprednol etabonate ocular delivery; sodium phenylbutyrate is not the subject drug and no PK parameters appear. |
| popPK | Zheng_2025_2 | irrelevant | 0 | 0 | The paper is about a bacteria-responsive nanoplatform for diabetic wound healing with no pharmacokinetic parameters for sodium phenylbutyrate. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-27 11:05 UTC</sub>
