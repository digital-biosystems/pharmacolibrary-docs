<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A11C&quot;,&quot;href&quot;:&quot;atc/A11C.md&quot;},{&quot;label&quot;:&quot;colecalciferol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Colecalciferol_Deb2020_reference&quot;,&quot;label&quot;:&quot;Deb_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_colecalciferol/Colecalciferol_Deb2020_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Colecalciferol_Jia2026_reference&quot;,&quot;label&quot;:&quot;Jia_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_colecalciferol/Colecalciferol_Jia2026_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# colecalciferol

- **generic name:** colecalciferol
- **ATC codes:** `A11CC05`, `M05BB03`, `M05BB07`, `M05BB09`, `M05BX53`
- **DrugBank:** [DB00169](https://go.drugbank.com/drugs/DB00169) · **PubChem:** [CID 5280795](https://pubchem.ncbi.nlm.nih.gov/compound/5280795)
- **molar mass:** 384.6377 g/mol (C27H44O) — DrugBank
- **groups:** approved, investigational, nutraceutical

## About

Colecalciferol (vitamin D3) is a vitamin used to treat or prevent vitamin D deficiency and support bone health, including in osteoporosis. It is widely used worldwide, appears on the WHO essential medicines list, and is also available as a supplement.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q139347](https://www.wikidata.org/wiki/Q139347) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| colecalciferol | parent | 384.638 | C27H44O | DrugBank | [5280795](https://pubchem.ncbi.nlm.nih.gov/compound/5280795) | Hidiroglou_1979 |
| 25-hydroxycholecalciferol | metabolite | 400.647 | C27H44O2 | PubChem | [5283731](https://pubchem.ncbi.nlm.nih.gov/compound/5283731) | Hidiroglou_1979 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 08:01 | 26:11 | 1/0/2 | 0/0/0 | 0/0/0 | 530,989/57,898 | ollama / qwen3.8:27b-mtp-q8_0 | 25 | 5/24 | 25/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Deb_2020_reference](drugs/drug_colecalciferol/Colecalciferol_Deb2020_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Deb S et al., Simulation of Physicochemical and Pharm…, Pharmaceuticals (Basel, Swi… (2020) | [10.3390/ph13080160](https://doi.org/10.3390/ph13080160) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.571). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">sheep</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>route_to: `human_review`</sub> | [Hidiroglou_1979_reference](drugs/drug_colecalciferol/Colecalciferol_Hidiroglou1979_reference.md) | — | 1-compartment (no model) | 5 | Hidiroglou M et al., Pharmacokinetics and amounts of 25-hydr…, Journal of dairy science (1979) | [10.3168/jds.S0022-0302(79)83291-9](https://doi.org/10.3168/jds.S0022-0302(79)83291-9) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.875). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: T6_deviations</sub><br><sub>route_to: `engineer`</sub> | [Jia_2026_reference](drugs/drug_colecalciferol/Colecalciferol_Jia2026_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Jia M et al., Population pharmacokinetics of rivaroxa…, European journal of clinica… (2026) | [10.1007/s00228-026-04034-6](https://doi.org/10.1007/s00228-026-04034-6) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=colecalciferol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | heart | `CYP2J2` substrate | DrugBank actor |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP2C8` inhibitor, `CYP3A4` substrate | DrugBank actor |
| metabolism | lung | `CYP1A1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP1A1` inhibitor, `CYP2J2` substrate, `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CYP11A1 (substrate), CYP27A1 (substrate), CYP2R1 (substrate), GC (unknown), VDR (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 9645 matched, 70 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 3  ·  extracted 1  ·  needs_review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wan_2022.pdf` | Wan M et al., Population pharmacokinetics and dose op…, British journal of clinical… (2022) | popPK | 10 | [10.1111/bcp.15064](https://doi.org/10.1111/bcp.15064) | [34449087](https://pubmed.ncbi.nlm.nih.gov/34449087) | The paper describes a population PK model for colecalciferol (via its metabolite 25(OH)D), but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| `Huang_2021.pdf` | Huang Z et al., Personalise vitamin D3 using physiologi…, CPT: pharmacometrics & syst… (2021) | popPK | 9 | [10.1002/psp4.12640](https://doi.org/10.1002/psp4.12640) | [33960722](https://pubmed.ncbi.nlm.nih.gov/33960722) | The paper describes a PBPK model for vitamin D3 (colecalciferol) and its metabolite 25(OH)D3, but the specific numeric parameter values (clearance, volume, etc.) are not explicitly listed in the provided abstract text. |
| `Hidiroglou_1979.pdf` | Hidiroglou M et al., Pharmacokinetics and amounts of 25-hydr…, Journal of dairy science (1979) | popPK | 8 | [10.3168/jds.S0022-0302(79)83291-9](https://doi.org/10.3168/jds.S0022-0302(79)83291-9) | [222820](https://pubmed.ncbi.nlm.nih.gov/222820) | The study reports pharmacokinetic parameters (half-life) for the metabolite 25-hydroxycholecalciferol following dosing of colecalciferol (vitamin D3) in sheep. |
| `Plourde_1988.pdf` | Plourde V et al., Severe cholestasis leads to vitamin D d…, Hepatology (Baltimore, Md.) (1988) | popPK | 8 | [10.1002/hep.1840080618](https://doi.org/10.1002/hep.1840080618) | [3192171](https://pubmed.ncbi.nlm.nih.gov/3192171) | The study reports hepatic clearance and extraction of vitamin D3 (colecalciferol) in dogs, but specific numeric values are not present in the provided abstract text. |

<sub>queue written 2026-10-05T07:41:46.257165+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aarbakke_1978 | irrelevant | 0 | 0 | The paper is a review of the pharmacokinetics of phenylbutazone, not colecalciferol. |
| popPK | Alamro_2020 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of neuroprotection in Alzheimer's disease models, not a pharmacokinetic study of colecalciferol. |
| popPK | Baur_2016 | irrelevant | 0 | 0 | The study is a food science/nutritional study analyzing vitamin D content in plant oils and measuring 25(OH)D status in mice, not a pharmacokinetic study reporting disposition parameters (CL, V, ka) for colecalciferol. |
| popPK | Ben-Eltriki_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of calcitriol (1,25-dihydroxyvitamin D3), not colecalciferol (vitamin D3), and thus does not report parameters for the target drug. |
| popPK | Best_2021 | irrelevant | 2 | 0 | The study reports concentration changes and dose-response relationships for vitamin D3 but does not provide quantitative pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Bonavia_2017 | irrelevant | 0 | 0 | The paper investigates the effects of resistin on neutrophil function and bacterial clearance, and does not involve colecalciferol or its pharmacokinetics. |
| popPK | Bräm_2026 | irrelevant | 0 | 0 | The paper describes a methodological approach for automated pharmacometric model development using neural ODEs and LASSO regression, demonstrating it on warfarin and generic PK data, but does not study colecalciferol. |
| PD | Bräm_2026 | not_relevant | 0 | 0 | The paper focuses on a methodological approach for automated pharmacometric model development using Neural ODEs and LASSO, demonstrating it on warfarin PK/PD data, but does not report any PD relationship or parameters for colecalciferol. |
| popPK | Bussanich_1985 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of methotrexate in dogs, not colecalciferol. |
| popPK | Chen_2022 | irrelevant | 0 | 0 | The study is a formulation and characterization paper (liposome preparation, TEM, HPLC quantification) and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for colecalciferol. |
| popPK | Cheng_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of CC-122, not colecalciferol. |
| popPK | Choyke_1995 | irrelevant | 0 | 0 | The study investigates the in vitro dialysis clearance of gadolinium chelates, not colecalciferol. |
| popPK | Christiansen_1978 | irrelevant | 0 | 0 | The study is a clinical trial assessing the therapeutic effects and renal safety of 1,25-dihydroxycholecalciferol, not a pharmacokinetic study reporting disposition parameters for colecalciferol. |
| popPK | Dahan_2026 | irrelevant | 0 | 0 | The paper is a narrative review of Model-Informed Drug Development for analgesics and does not report any pharmacokinetic parameters for colecalciferol. |
| PD | Dahan_2026 | not_relevant | 1 | 0 | The paper is a narrative review of MIDD methodologies and does not report specific numeric PD parameters or exposure-response data for colecalciferol. |
| popPK | Dałek_2022 | irrelevant | 2 | 0 | The study focuses on formulation and bioavailability mechanisms (calorimetry/simulations) and reports qualitative changes in calcidiol concentration without providing quantitative PK parameters (CL, V, ka) for colecalciferol. |
| popPK | Deb_2020 | irrelevant | 2 | 5 | The study is an in silico simulation (GastroPlus) rather than an experimental pharmacokinetic study, and it does not report a compartmental model or volume of distribution for colecalciferol. |
| popPK | Dima_2020 | irrelevant | 0 | 0 | The study is an in vitro bioaccessibility analysis of emulsions and does not report pharmacokinetic parameters for colecalciferol. |
| popPK | Ding_1994 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of [11C]dl-threo-methylphenidate, not colecalciferol. |
| popPK | Ellis_1978 | irrelevant | 2 | 0 | The study measures the metabolite 25-OHD3 but does not report quantitative compartmental PK parameters (CL, V, ka) for colecalciferol itself, and no numeric values are provided in the evidence. |
| popPK | Giménez-Romero_2023 | irrelevant | 0 | 0 | The paper is an epidemiological modeling study of Xylella fastidiosa in plants and is unrelated to the pharmacokinetics of colecalciferol. |
| popPK | Gough_2017 | irrelevant | 0 | 0 | The study investigates the immunomodulatory effects of vitamin D3 on Mycobacterium infection in host cells, not the pharmacokinetic disposition parameters of colecalciferol. |
| popPK | Han_2016 | irrelevant | 0 | 0 | The study evaluates relative bioavailability using growth and bone mineralization endpoints, not pharmacokinetic parameters like clearance or volume. |
| popPK | Hoeben_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of calaspargase pegol (CalPEG), not colecalciferol. |
| popPK | Huang_2021 | relevant | 9 | 2 | The paper describes a PBPK model for vitamin D3 (colecalciferol) and its metabolite 25(OH)D3, but the specific numeric parameter values (clearance, volume, etc.) are not explicitly listed in the provided abstract text. |
| popPK | Huang_2026 | irrelevant | 0 | 0 | The paper is a methodological study evaluating an automated PopPK modeling framework (nlmixr2auto) on 22 unspecified datasets and does not report specific PK parameters for colecalciferol. |
| PD | Huang_2026 | not_relevant | 0 | 0 | The paper focuses on automated population pharmacokinetic (PopPK) modeling methods and does not report any pharmacodynamic (PD) or exposure-response relationships for colecalciferol or any other drug. |
| popPK | Jafarifar_2022 | irrelevant | 0 | 0 | The study focuses on the formulation and in-vitro characterization of nanostructured lipid carriers and nanoemulsions, reporting no pharmacokinetic parameters (CL, V, ka, etc.) for colecalciferol. |
| popPK | Jia_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for rivaroxaban, not colecalciferol. |
| PD | Jia_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PopPK) model for rivaroxaban, not colecalciferol, and does not provide a pharmacodynamic (PD) model or numeric PD parameters (e.g., Emax, EC50) for the drug of interest. |
| popPK | Jones_2008 | irrelevant | 2 | 0 | The paper is a review discussing mechanisms of toxicity and general half-lives, but it does not report quantitative compartmental PK parameters (CL, V, Q, ka) or a population PK model for colecalciferol. |
| popPK | Junqueira_2022 | irrelevant | 0 | 0 | The study is a formulation and ex vivo permeation assessment without in vivo pharmacokinetic modeling or quantitative disposition parameters (CL, V, etc.). |
| popPK | Juttmann_1981 | irrelevant | 0 | 0 | The study measures steady-state serum concentrations of vitamin D metabolites in patients with chronic renal failure to assess disease progression, rather than reporting pharmacokinetic disposition parameters (CL, V, ka) for colecalciferol. |
| popPK | Kang_2026 | irrelevant | 0 | 0 | The study focuses on population pharmacokinetics for multiple myeloma drugs (carfilzomib, daratumumab, lenalidomide, melphalan, panobinostat) and does not involve colecalciferol. |
| PD | Kang_2026 | not_relevant | 0 | 0 | The paper focuses on multiple myeloma drugs (carfilzomib, daratumumab, lenalidomide, melphalan, panobinostat) and does not mention or analyze colecalciferol. |
| popPK | Karlsen_2026 | irrelevant | 0 | 0 | The paper describes a simulated benchmarking framework for covariate model building using a generic "molecule developed by Sanofi" and does not identify the drug as colecalciferol or report specific PK parameters for it. |
| PD | Karlsen_2026 | not_relevant | 0 | 0 | The paper describes a framework for benchmarking covariate model building in population pharmacokinetics (popPK) using simulated data; it does not report any pharmacodynamic (PD) or exposure-response relationships for colecalciferol or any other drug. |
| popPK | Khalid_2023 | irrelevant | 0 | 0 | The study is a formulation and physicochemical characterization of a vitamin D3 nanoemulsion, reporting no pharmacokinetic parameters (CL, V, ka, etc.) for colecalciferol. |
| popPK | Kim_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for bevacizumab (a monoclonal antibody), not colecalciferol. |
| PD | Kim_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for bevacizumab (a biosimilar), not colecalciferol, and does not provide a pharmacodynamic (PD) or exposure-response model with numeric PD parameters. |
| popPK | Kobayashi_1983 | irrelevant | 2 | 1 | The study measures plasma levels of the metabolite 25-OH-D2 (and 25-OH-D3) rather than the parent drug colecalciferol, and only provides a rough estimate of the metabolite's half-life without a compartmental PK model or clearance/volume parameters for the parent compound. |
| popPK | Korade_2023 | irrelevant | 0 | 0 | The study investigates the effects of aripiprazole and trazodone on cholesterol biosynthesis in mice and does not involve colecalciferol or its pharmacokinetics. |
| popPK | Latif_2021 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the therapeutic efficacy of intralesional vitamin D3 for warts and does not report any pharmacokinetic parameters. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of PF-06804103, an anti-HER2 antibody-drug conjugate, and does not involve colecalciferol. |
| PD | Li_2026 | not_relevant | 0 | 0 | The paper reports PK/PD models for PF-06804103, not colecalciferol. |
| popPK | Lucas_1986 | irrelevant | 0 | 0 | The study measures serum concentrations of vitamin D metabolites in response to dietary changes but does not report pharmacokinetic parameters (CL, V, ka, etc.) for colecalciferol. |
| PD | Miraglia_2018 | not_relevant | 1 | 0 | The text is a qualitative review of vitamin D immunology and mentions a dose-response association with infection risk but provides no numeric PD parameters, curves, or quantitative exposure-response data. |
| popPK | Mishler_1979 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of hydroxyethyl starch (HES), not colecalciferol. |
| popPK | Monke_1940 | irrelevant | 0 | 0 | The study investigates the renal clearance of hemoglobin in dogs, not the pharmacokinetics of colecalciferol. |
| popPK | Nair_2018 | irrelevant | 2 | 0 | The study reports clinical outcomes (prevalence of deficiency and correction rates) rather than quantitative pharmacokinetic parameters (CL, V, ka) for colecalciferol. |
| popPK | Nakov_2024 | irrelevant | 0 | 0 | The paper is an epidemiological study on HPV infection and diet, containing no pharmacokinetic data for colecalciferol. |
| popPK | Navab_2024 | irrelevant | 0 | 0 | The study is an in-vitro formulation and release kinetics study of encapsulated vitamin D3, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Offermann_1975 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of a synthetic analogue (5,6-trans-25-hydroxycholecalciferol), not colecalciferol itself. |
| popPK | Ooi_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of elafibranor, not colecalciferol. |
| PD | Ooi_2026 | not_relevant | 0 | 0 | The paper analyzes the pharmacokinetics and pharmacodynamics of elafibranor, not colecalciferol. |
| popPK | Papadopoulos_1987 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics of tissue-type plasminogen activator (TPA) in rats, not the pharmacokinetics of colecalciferol. |
| popPK | Plourde_1988 | relevant | 8 | 2 | The study reports hepatic clearance and extraction of vitamin D3 (colecalciferol) in dogs, but specific numeric values are not present in the provided abstract text. |
| popPK | Puschett_1972 | irrelevant | 0 | 0 | The study investigates the renal physiological effects (phosphate, sodium, and calcium excretion) of cholecalciferol and its metabolite, not its pharmacokinetic disposition parameters (CL, V, ka). |
| popPK | Qureshi_2022 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for tocotrienols (Vitamin E), not colecalciferol (Vitamin D3). |
| popPK | Ritz_1991 | irrelevant | 0 | 0 | The study measures 1,25(OH)2D3 (a metabolite) levels in response to PTH stimulation, not the pharmacokinetic parameters (CL, V, ka) of the parent drug colecalciferol. |
| popPK | Ron_1984 | irrelevant | 0 | 0 | The study is an in vitro placental transfer experiment measuring clearance indices of metabolites, not a pharmacokinetic study of colecalciferol disposition. |
| popPK | Smith_1977 | irrelevant | 0 | 0 | The paper is a review of urological surgery (augmentation cystoplasty) and contains no pharmacokinetic data for colecalciferol. |
| popPK | Soeorg_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of meropenem and colistin/polymyxin B, not colecalciferol. |
| PD | Soeorg_2026 | not_relevant | 0 | 0 | The paper reports a PK/PD model for meropenem and colistin/polymyxin B, not colecalciferol. |
| popPK | Stadalnik_1980 | irrelevant | 0 | 0 | The study investigates renal clearance of ortho-iodohippurate (OIH) in dogs, not colecalciferol. |
| PD | Sun_1996 | not_relevant | 0 | 0 | The paper studies the dose-response of m-nisoldipine, not colecalciferol; colecalciferol is only used as a vehicle to induce the disease model. |
| popPK | Suthahar_2026 | irrelevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic models for 5-fluorouracil (5-FU), not colecalciferol. |
| PD | Suthahar_2026 | not_relevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic (PK) models for 5-fluorouracil, not colecalciferol, and it does not report any pharmacodynamic (PD) or exposure-response relationships. |
| popPK | Sürmelioğlu_2026 | irrelevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic studies for vancomycin, not colecalciferol. |
| PD | Sürmelioğlu_2026 | not_relevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic (PopPK) studies for vancomycin, not colecalciferol, and focuses on PK parameters rather than pharmacodynamic (PD) or exposure-response relationships. |
| popPK | Tan_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of busulfan, not colecalciferol. |
| PD | Tan_2026 | not_relevant | 0 | 0 | The paper focuses on busulfan PK and limited sampling strategies, not colecalciferol, and contains no pharmacodynamic or exposure-response analysis. |
| popPK | Torrisi_2024 | irrelevant | 0 | 0 | The study is a spectroscopic analysis of formulation interactions (FTIR/UV-Vis) and does not report any pharmacokinetic parameters. |
| popPK | Tsujino_2019 | irrelevant | 0 | 0 | The study investigates the preventive effects of vitamin D3 on pulmonary fibrosis in mice and cell lines, reporting histological and gene expression data rather than pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Wan_2022 | relevant | 10 | 0 | The paper describes a population PK model for colecalciferol (via its metabolite 25(OH)D), but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| popPK | Wang_2023 | irrelevant | 0 | 0 | The study investigates the therapeutic efficacy of Vitamin D3 against a viral infection in fish, reporting immune and biochemical markers rather than pharmacokinetic disposition parameters. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The paper is a population pharmacokinetic model library for polymyxin B, not colecalciferol. |
| PD | Wang_2026 | not_relevant | 0 | 0 | The paper focuses on population pharmacokinetic (PK) modeling of polymyxin B, not colecalciferol, and does not report any pharmacodynamic (PD) or exposure-response relationships. |
| popPK | Wanika_2026 | irrelevant | 0 | 0 | The paper is a methodological study using simulated data to demonstrate a statistical metric (95% CDIRAs) and does not report pharmacokinetic parameters for colecalciferol. |
| PD | Wanika_2026 | not_relevant | 0 | 0 | The paper is a methodological case study on uncertainty quantification using simulated PK data and does not report any pharmacodynamic or exposure-response relationship for colecalciferol. |
| popPK | Wu_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for bosutinib, not colecalciferol. |
| PD | Wu_2026 | not_relevant | 0 | 0 | The paper focuses exclusively on the population pharmacokinetics (PK) of bosutinib and does not report any pharmacodynamic (PD) or exposure-response relationship for colecalciferol or any other drug. |
| popPK | Xajil-Ramos_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for tacrolimus, not colecalciferol. |
| PD | Xajil-Ramos_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PopPK) model for tacrolimus, not colecalciferol, and contains no pharmacodynamic or exposure-response analysis. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-05 07:41 UTC</sub>
