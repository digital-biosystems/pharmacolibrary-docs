<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A11H&quot;,&quot;href&quot;:&quot;atc/A11H.md&quot;},{&quot;label&quot;:&quot;tocopherol (vit E)&quot;}]"></div>

# tocopherol (vit E)

- **generic name:** tocopherol (vit E)
- **ATC codes:** `A11HA03`
- **DrugBank:** [DB11251](https://go.drugbank.com/drugs/DB11251) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Tocopherol is a form of vitamin E, an antioxidant vitamin used as a vitamin supplement. It is an approved vitamin preparation, widely available as a dietary supplement.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q910277](https://www.wikidata.org/wiki/Q910277) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| alpha-tocopherol | metabolite | 430.717 | C29H50O2 | PubChem | [14985](https://pubchem.ncbi.nlm.nih.gov/compound/14985) | Violet_2020 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 09:26 | 32:15 | 0/2/0 | 0/0/0 | 0/0/0 | 738,209/75,595 | ollama / qwen3.8:27b-mtp-q8_0 | 20 | 5/24 | 20/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.167). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Violet_2020_iv_d6_tocopherol](drugs/drug_tocopherol_vit_e/TocopherolVitE_Violet2020_iv_d6_tocopherol.md) | — | 1-compartment (no model) | 5 | Violet PC et al., Vitamin E sequestration by liver fat in…, JCI insight (2020) | [10.1172/jci.insight.133309](https://doi.org/10.1172/jci.insight.133309) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.583). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Violet_2020_po_d3_tocopherol](drugs/drug_tocopherol_vit_e/TocopherolVitE_Violet2020_po_d3_tocopherol.md) | — | 1-compartment (no model) | 5 | Violet PC et al., Vitamin E sequestration by liver fat in…, JCI insight (2020) | [10.1172/jci.insight.133309](https://doi.org/10.1172/jci.insight.133309) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=tocopherol_vit_e) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` transporter | DrugBank actor |
| absorption | kidney | `ABCB1` transporter | DrugBank actor |
| absorption | liver | `ABCB1` transporter | DrugBank actor |
| absorption | placenta | `ABCB1` transporter | DrugBank actor |
| absorption | small intestine | `ABCB1` transporter | DrugBank actor |
| absorption | testis | `ABCB1` transporter | DrugBank actor |
| metabolism | kidney | `CYP4F2` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate, `CYP4F2` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: APOBR (transporter), Free radicals (binder), LDLR (binder), SCARB1 (transporter), SEC14L2 (substrate), SEC14L3 (substrate), SEC14L4 (substrate), TTPA (substrate), VLDLR (binder).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 511 matched, 72 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 2
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hidiroglou_1990.pdf` | Hidiroglou M et al., Kinetics of intravenously administered…, Annales de recherches veter… (1990) | popPK | 9 | not captured | [2389927](https://pubmed.ncbi.nlm.nih.gov/2389927) | The study reports a 2-compartment PK model for tocopherol in sheep, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| `Ko_2023.pdf` | Ko J et al., Pharmacokinetic Analyses of Liposomal a…, Nutrients (2023) | popPK | 9 | [10.3390/nu15133073](https://doi.org/10.3390/nu15133073) | [37447400](https://pubmed.ncbi.nlm.nih.gov/37447400) | The study reports PK parameters (clearance, volume, half-life) for vitamin E in humans, but the specific numeric values are not present in the provided abstract text. |
| `Zhou_2024.pdf` | Zhou J et al., Nano vitamin E improved the antioxidant…, Journal of animal science 1… (2024) | popPK | 9 | [10.1093/jas/skae095](https://doi.org/10.1093/jas/skae095) | [38682465](https://pubmed.ncbi.nlm.nih.gov/38682465) | The study reports pharmacokinetic parameters (AUC, MRT, t1/2, Cmax) for vitamin E in broilers, but the specific numeric values are not present in the provided abstract text. |
| `Bjørneboe_1987.pdf` | Bjørneboe A et al., Serum half-life, distribution, hepatic…, Biochimica et biophysica ac… (1987) | popPK | 8 | [10.1016/0005-2760(87)90016-6](https://doi.org/10.1016/0005-2760(87)90016-6) | [3651482](https://pubmed.ncbi.nlm.nih.gov/3651482) | The study reports quantitative PK parameters (half-life, distribution percentages, biliary excretion) for alpha-tocopherol in rats, though specific clearance or volume values are not explicitly stated. |

<sub>queue written 2026-10-05T08:59:29.117399+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abd-Rahman_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of antimalarials artefenomel and piperaquine, with tocopherol mentioned only as an excipient. |
| PD | Abd-Rahman_2024 | not_relevant | 0 | 0 | The paper reports a PD model for the antimalarial combination artefenomel-piperaquine, not for tocopherol (vit E). |
| popPK | Alkholief_2019 | irrelevant | 0 | 0 | The study investigates the ocular pharmacokinetics of Acyclovir, not tocopherol (vitamin E). |
| popPK | Alum_2026 | irrelevant | 0 | 0 | The study investigates the neuroprotective effects of Jimson weed extract on methotrexate-induced neurotoxicity in rats and does not report pharmacokinetic parameters for tocopherol. |
| PD | Alum_2026 | not_relevant | 0 | 0 | The paper studies Jimson weed extract and methotrexate, not tocopherol (vit E), and reports only group-level mean comparisons without dose-response curves or PD parameters. |
| popPK | Amaliah_2025 | irrelevant | 0 | 0 | The paper is a review of ternary solid dispersions for various drugs (simvastatin, glibenclamide, etc.) and does not report pharmacokinetic parameters for tocopherol/vitamin E. |
| PD | Amaliah_2025 | not_relevant | 0 | 0 | The paper is a review of ternary solid dispersions and does not report any pharmacodynamic or exposure-response data for tocopherol (vit E). |
| popPK | Binkhathlan_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of paclitaxel delivered via a vitamin E TPGS micellar formulation, not the pharmacokinetics of tocopherol/vitamin E itself. |
| popPK | Bolatkyzy_2025 | irrelevant | 0 | 0 | The paper is a review of medicinal plants for skin disorders and does not report pharmacokinetic parameters for tocopherol. |
| PD | Bolatkyzy_2025 | not_relevant | 0 | 0 | The paper is a review of medicinal plants for skin disorders and does not mention tocopherol or report any pharmacodynamic or exposure-response data. |
| popPK | Christodoulou_2025 | irrelevant | 0 | 0 | The paper is a review on the antioxidant and anticancer properties of hemp oils and does not report pharmacokinetic parameters for tocopherol. |
| PD | Christodoulou_2025 | not_relevant | 0 | 0 | The paper is a review of hemp oils and cannabinoids (CBD/THC) in cancer, with no specific pharmacodynamic or exposure-response analysis for tocopherol (vitamin E). |
| popPK | Corlatti_2026 | irrelevant | 0 | 0 | The paper is a review of phytochemicals in the Helianthus genus and does not report pharmacokinetic parameters for tocopherol. |
| PD | Corlatti_2026 | not_relevant | 0 | 0 | The paper is a general review of the Helianthus genus and does not report specific pharmacodynamic or exposure-response data for tocopherol. |
| popPK | Davis_1994 | irrelevant | 0 | 0 | The study measures serum concentrations of vitamin E as a biomarker in malaria patients but does not report pharmacokinetic parameters (CL, V, ka, etc.) for tocopherol. |
| popPK | Davran_2026 | irrelevant | 0 | 0 | The paper is a review of marine bioactive compounds and does not report quantitative pharmacokinetic parameters for tocopherol. |
| PD | Davran_2026 | not_relevant | 0 | 0 | The text is a general review of marine bioactive compounds and does not contain specific pharmacodynamic data, exposure-response relationships, or numeric PD parameters for tocopherol. |
| popPK | Fatima_2025 | irrelevant | 0 | 0 | The paper is a general review of nutraceuticals for chronic diseases and does not report specific pharmacokinetic parameters for tocopherol (Vitamin E). |
| PD | Fatima_2025 | not_relevant | 0 | 0 | The paper is a narrative review of nutraceuticals and does not report specific pharmacodynamic or exposure-response data for tocopherol. |
| popPK | Gansane_2023 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and efficacy of the antimalarials artefenomel and ferroquine, not tocopherol (vitamin E). |
| popPK | García-Caballero_2017 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for GDNF, not for tocopherol (vitamin E), which is used only as a component of the delivery vehicle. |
| popPK | Główka_2024 | irrelevant | 0 | 0 | The study reports cross-sectional plasma concentrations of vitamin E in CVD patients but does not provide pharmacokinetic parameters (CL, V, ka, t1/2) or a PK model. |
| PD | Główka_2024 | not_relevant | 0 | 0 | The study is a cross-sectional observational analysis of vitamin concentrations and psychosocial factors in CVD patients, reporting no dose-response or exposure-response pharmacodynamic model or parameters for tocopherol. |
| popPK | Hafez_2024 | irrelevant | 0 | 0 | The paper is a review of the pharmacological attributes of Acacia (Vachellia nilotica) and does not report pharmacokinetic parameters for tocopherol/vitamin E. |
| PD | Hafez_2024 | not_relevant | 0 | 0 | The paper is a review of Vachellia nilotica (Acacia) and does not report any pharmacodynamic or exposure-response data for tocopherol (vitamin E). |
| popPK | Hall_1986 | irrelevant | 0 | 0 | The study is a pharmacological analysis of spinal cord ischemia in cats where vitamin E is used as a therapeutic antioxidant, not a pharmacokinetic study reporting disposition parameters for tocopherol. |
| popPK | Hidiroglou_1977 | irrelevant | 2 | 0 | The study reports tissue distribution and radioactivity levels in sheep but does not provide quantitative pharmacokinetic parameters (CL, V, ka, t1/2) or a compartmental model. |
| popPK | Hidiroglou_1990 | relevant | 9 | 2 | The study reports a 2-compartment PK model for tocopherol in sheep, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| popPK | Huang_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of a curcumin-vitamin E ester derivative (CUR-VE), not tocopherol (vitamin E) itself as the subject drug. |
| popPK | Islam_2023 | irrelevant | 0 | 0 | The paper is a network pharmacology and molecular docking study of flaxseed phytochemicals (including Vitamin E) against ovarian cancer, reporting no quantitative pharmacokinetic parameters (CL, V, ka, etc.) for tocopherol. |
| popPK | Isot_2025 | irrelevant | 0 | 0 | The study focuses on the mechanistic anti-inflammatory effects of Garcinoic Acid (a vitamin E analogue) and does not report pharmacokinetic parameters for tocopherol. |
| popPK | Jitta_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ritonavir, with tocopherol (vitamin E) used only as an excipient/liquid lipid in the formulation. |
| popPK | Kadkhodaee_2005 | irrelevant | 0 | 0 | The study investigates the protective effects of vitamin E on gentamicin-induced nephrotoxicity in an isolated rat kidney model, reporting renal function markers (GFR, enzyme activities) rather than the pharmacokinetic disposition parameters (CL, V, ka) of vitamin E itself. |
| popPK | Kato_1993 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding tocopherol pharmacokinetics. |
| popPK | Ko_2023 | relevant | 9 | 2 | The study reports PK parameters (clearance, volume, half-life) for vitamin E in humans, but the specific numeric values are not present in the provided abstract text. |
| popPK | Kobrinsky_1982 | irrelevant | 0 | 0 | The paper is a review of anthracycline cardiomyopathy and mentions alpha-tocopherol only as a potential free radical scavenger, without reporting any pharmacokinetic parameters for tocopherol. |
| PD | Langer_2001 | not_relevant | 0 | 0 | The paper focuses on dexrazoxane's protective effect against anthracycline-induced lesions and only qualitatively mentions that alpha-tocopherol was ineffective, providing no PD or exposure-response data for tocopherol. |
| popPK | Lee_2025 | irrelevant | 0 | 0 | The paper is a synthetic chemistry study on bicyclo[1.1.1]pentane derivatives and contains no pharmacokinetic data for tocopherol. |
| PD | Lee_2025 | not_relevant | 0 | 0 | The paper describes the chemical synthesis of bicyclo[1.1.1]pentane derivatives and contains no pharmacodynamic, exposure-response, or dose-response data for tocopherol or any other drug. |
| popPK | Leiva-Castro_2025 | irrelevant | 0 | 0 | The paper is a systematic review of nutraceuticals in rheumatoid arthritis and does not report quantitative pharmacokinetic parameters for tocopherol. |
| PD | Leiva-Castro_2025 | not_relevant | 1 | 0 | The paper is a systematic review of nutraceuticals in rheumatoid arthritis and does not report specific numeric pharmacodynamic parameters (e.g., Emax, EC50) or exposure-response curves for tocopherol. |
| popPK | Li_2025 | irrelevant | 0 | 0 | The paper is a systematic review and meta-analysis of the association between vitamin E intake/status and HPV clearance or cancer risk, not a pharmacokinetic study reporting disposition parameters (CL, V, ka, etc.) for tocopherol. |
| popPK | Lim_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of entecavir, with tocopherol acetate serving only as a formulation component, not the subject drug. |
| popPK | Marcello_2025 | irrelevant | 0 | 0 | The study focuses on dialysis efficacy and albumin loss, with vitamin E only mentioned as a coating on the dialysis membrane, not as a subject drug for PK analysis. |
| popPK | Mnisi_2025 | irrelevant | 0 | 0 | The paper is a review of the ethnomedicinal uses and phytochemistry of Senna petersiana, with no pharmacokinetic data for tocopherol. |
| PD | Mnisi_2025 | not_relevant | 0 | 0 | The paper is a review of Senna petersiana and does not report any pharmacodynamic or exposure-response data for tocopherol (vit E). |
| PD | Moabedi_2025 | not_relevant | 2 | 1 | The paper is a meta-analysis of RCTs reporting pooled mean differences in biomarkers; it does not provide a pharmacokinetic-pharmacodynamic model, concentration-effect curve, or specific PD parameters (e.g., Emax, EC50) for tocopherol. |
| popPK | Mustafa_2017 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of Kanamycin Sulphate (KS) loaded in nanoparticles, where Vitamin E-TPGS is used only as a formulation excipient (emulsifier/solubilizer), not as the subject drug. |
| popPK | Naim_2026 | irrelevant | 0 | 0 | The paper is a review of nanoengineered delivery systems for phytochemicals and does not report specific quantitative pharmacokinetic parameters for tocopherol. |
| PD | Naim_2026 | not_relevant | 1 | 0 | The paper is a review of nanoengineered delivery systems for phytochemicals and does not report specific numeric pharmacodynamic parameters (e.g., Emax, EC50) or exposure-response curves for tocopherol. |
| popPK | Nakano_2019 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of cannabidiol (CBD), not tocopherol (vitamin E), which is only used as an excipient in the formulation. |
| popPK | Obrador_2026 | irrelevant | 0 | 0 | The paper is a review of radiomitigators for radiation injury and does not report pharmacokinetic parameters for tocopherol. |
| PD | Obrador_2026 | not_relevant | 0 | 0 | The text is a general review of radiomitigators and does not contain specific data, models, or numeric parameters for tocopherol (vit E) pharmacodynamics. |
| popPK | Owolabi_2024 | irrelevant | 0 | 0 | The study investigates the antimicrobial potential of plant extracts against Salmonella Typhi in vitro and in silico, and does not report pharmacokinetic parameters for tocopherol. |
| PD | Owolabi_2024 | not_relevant | 0 | 0 | The paper investigates antimicrobial activity of plant fractions against bacteria using MIC/MBC and molecular docking, which is not a pharmacodynamic (exposure-response) analysis for tocopherol in a biological system. |
| popPK | Pereira-Silva_2025 | irrelevant | 0 | 0 | The study focuses on the formulation and in vitro characterization of gemcitabine-loaded vitamin E micelles for cancer therapy, not on the pharmacokinetic parameters of tocopherol itself. |
| popPK | Qureshi_2016 | irrelevant | 2 | 2 | The study focuses on tocotrienols as the subject drug, and while tocopherol values are mentioned, specific quantitative parameters for tocopherol are not provided in the text. |
| popPK | Qureshi_2022 | irrelevant | 2 | 0 | The paper is a review that discusses pharmacokinetic parameters (AUC, Cmax, t1/2, Cl, Vd) for δ-tocotrienol (a different vitamin E isomer) but does not provide specific numeric values for tocopherol (vitamin E) in the text. |
| popPK | Raclariu-Manolică_2023 | irrelevant | 0 | 0 | The paper is a quality control study on milk thistle products using metabolomics and DNA metabarcoding, with no pharmacokinetic data for tocopherol. |
| PD | Raclariu-Manolică_2023 | not_relevant | 0 | 0 | The paper focuses on the authentication and quality control of milk thistle products using metabolomics and DNA metabarcoding, with no pharmacodynamic or exposure-response analysis for tocopherol or any other compound. |
| popPK | Rao_2018 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of rilpivirine, with tocopherol polyethylene glycol succinate serving only as a formulation excipient. |
| popPK | Ravon_2025 | irrelevant | 0 | 0 | The study focuses on the formulation and efficacy of vancomycin and tetrahydrolipstatin for tuberculosis, with no pharmacokinetic data for tocopherol. |
| PD | Ravon_2025 | not_relevant | 0 | 0 | The paper focuses on the formulation and efficacy of vancomycin and tetrahydrolipstatin, with no mention of tocopherol (vit E) or any pharmacodynamic modeling. |
| popPK | Ren_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of d-α-tocopheryl polyethylene glycol 1000 succinate (TPGS), a nanocarrier material, rather than tocopherol (vitamin E) itself. |
| popPK | Rezazadeh_2016 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of paclitaxel (PTX) in mice, using tocopherol succinate only as a component of the delivery vehicle, not as the subject drug. |
| popPK | Saldanha_2023 | irrelevant | 0 | 0 | The paper is a review of in silico studies for vaccine development and does not contain any pharmacokinetic data for tocopherol_vit_e. |
| PD | Saldanha_2023 | not_relevant | 0 | 0 | The paper is a review of in silico methods for vaccine development and does not report any pharmacodynamic or exposure-response data for tocopherol. |
| popPK | Sharma_2026 | irrelevant | 0 | 0 | The paper investigates the role of polyamines in iron buffering and ferroptosis, with no mention of tocopherol or pharmacokinetic parameters. |
| PD | Sharma_2026 | not_relevant | 0 | 0 | The paper focuses on polyamines and ferroptosis mechanisms, with no mention of tocopherol (vit E) or any pharmacodynamic modeling. |
| popPK | Shen_2018 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of genistein, with tocopherol (TPGS) serving only as a formulation excipient. |
| popPK | Sklan_1982 | irrelevant | 2 | 0 | The study reports qualitative changes in clearance and absorption mechanisms in chicks but provides no quantitative PK parameter values (CL, V, ka, t1/2) for tocopherol. |
| popPK | Soltani_2020 | irrelevant | 0 | 0 | The study investigates the nephroprotective effect of vitamin E as a co-administered agent against vancomycin toxicity, reporting renal function markers (BUN, CrCl) rather than the pharmacokinetic disposition parameters (CL, V, ka) of vitamin E itself. |
| popPK | Statham_1985 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of nitrofurantoin, with vitamin E serving only as a dietary variable/comparator rather than the subject drug. |
| popPK | Stevens_2023 | irrelevant | 0 | 0 | The paper is a systematic review on nanoparticle delivery of flavonoids and does not report pharmacokinetic parameters for tocopherol. |
| PD | Stevens_2023 | not_relevant | 0 | 0 | The paper is a systematic review on flavonoids and does not report any pharmacodynamic or exposure-response data for tocopherol (vitamin E). |
| popPK | Sutanto_2022 | irrelevant | 0 | 0 | The study is an in silico electrophysiology model of naringenin's effect on cardiomyocytes and does not involve tocopherol or pharmacokinetic parameters. |
| PD | Sutanto_2022 | not_relevant | 0 | 0 | The paper studies naringenin, not tocopherol (vit E), and is an in silico electrophysiology study rather than a pharmacodynamic analysis of the target drug. |
| popPK | Talath_2026 | irrelevant | 0 | 0 | The paper is a review of natural supplements in breast cancer therapy and does not report quantitative pharmacokinetic parameters for tocopherol. |
| PD | Talath_2026 | not_relevant | 0 | 0 | The text is a general review of natural supplements in breast cancer and does not contain any specific pharmacodynamic data, exposure-response analysis, or numeric PD parameters for tocopherol. |
| popPK | Thanishka_2026 | irrelevant | 0 | 0 | The study focuses on the formulation and in vitro evaluation of a herbal suppository containing Peperomia pellucida, with no mention of tocopherol or its pharmacokinetics. |
| PD | Thanishka_2026 | not_relevant | 0 | 0 | The paper studies Peperomia pellucida, not tocopherol (vit E), and reports in vitro IC50 values for a plant extract rather than a pharmacodynamic model for the specified drug. |
| popPK | Travis_1987 | irrelevant | 0 | 0 | The study investigates the neuroprotective effects of vitamin E on cerebral blood flow in cats, not its pharmacokinetic disposition parameters. |
| popPK | Vargas_2014 | irrelevant | 0 | 0 | The study is an in vitro cytotoxicity/cell viability assay evaluating the protective effect of alpha-tocopherol against hydrogen peroxide, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Vasincu_2025 | irrelevant | 0 | 0 | The paper is a review of neuroprotective potential of Ocimum species in neurodegenerative diseases and does not report pharmacokinetic parameters for tocopherol. |
| PD | Vasincu_2025 | not_relevant | 0 | 0 | The paper is a review of Ocimum species (basil) for neuroprotection and does not report any pharmacodynamic or exposure-response data for tocopherol (vitamin E). |
| popPK | Vijayakumar_2016 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of trans-resveratrol (RSV) in liposomes, with Vitamin E TPGS serving only as a coating agent, not as the subject drug. |
| popPK | Villapiano_2026 | irrelevant | 0 | 0 | The paper is a review on the formulation of green nanoemulsions and does not report quantitative pharmacokinetic parameters for tocopherol. |
| PD | Villapiano_2026 | not_relevant | 0 | 0 | The paper is a review on the formulation of green nanoemulsions and does not report any pharmacodynamic or exposure-response data for tocopherol. |
| popPK | Yang_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of apremilast, using tocopherol (TPGS) only as a solubilizing excipient, not as the subject drug. |
| popPK | Yoon_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ursodeoxycholic acid (UDCA), with vitamin E serving only as a comparator for pharmacodynamic outcomes (liver enzymes), and no PK parameters for vitamin E are reported. |
| popPK | Zamarripa_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of cannabidiol (CBD) and delta-9-tetrahydrocannabinol (THC), with vitamin E mentioned only as a permeation enhancer in the formulation, not as the subject drug. |
| popPK | Zhakipbekov_2026 | irrelevant | 0 | 0 | The paper is a review of the plant Cirsium arvense and does not report pharmacokinetic parameters for tocopherol_vit_e. |
| PD | Zhakipbekov_2026 | not_relevant | 0 | 0 | The paper is a general review of Cirsium arvense and does not report any pharmacodynamic or exposure-response data for tocopherol. |
| popPK | Zhou_2024 | relevant | 9 | 2 | The study reports pharmacokinetic parameters (AUC, MRT, t1/2, Cmax) for vitamin E in broilers, but the specific numeric values are not present in the provided abstract text. |
| popPK | Şahin_2025 | irrelevant | 0 | 0 | The paper is a review of flavonoids and phenolic compounds for neurodegenerative diseases and does not report pharmacokinetic parameters for tocopherol (vitamin E). |
| PD | Şahin_2025 | not_relevant | 0 | 0 | The paper is a review of flavonoids and phenolic compounds in neurodegenerative diseases and does not report any pharmacodynamic or exposure-response data for tocopherol (vitamin E). |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-05 08:59 UTC</sub>
