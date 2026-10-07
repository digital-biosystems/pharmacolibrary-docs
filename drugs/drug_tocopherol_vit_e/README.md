<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A11H&quot;,&quot;href&quot;:&quot;atc/A11H.md&quot;},{&quot;label&quot;:&quot;tocopherol (vit E)&quot;}]"></div>

# tocopherol (vit E)

- **generic name:** tocopherol (vit E)
- **ATC codes:** `A11HA03`
- **DrugBank:** [DB11251](https://go.drugbank.com/drugs/DB11251) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Tocopherol is a form of vitamin E, an antioxidant vitamin used as a vitamin supplement. It is an approved vitamin preparation, widely available as a dietary supplement.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q910277](https://www.wikidata.org/wiki/Q910277) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:10 | 8:17 | 0/2/0 | 0/0/0 | 0/0/0 | 612,417/41,519 | einfracz / qwen3.8-27b | 22 | 6/25 | 22/0 | 0 |

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
- **screened:** 4  ·  **relevant:** 3
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 2
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hidiroglou_1990.pdf` | Hidiroglou M et al., Kinetics of intravenously administered…, Annales de recherches veter… (1990) | popPK | 9 | not captured | [2389927](https://pubmed.ncbi.nlm.nih.gov/2389927) | The paper reports a population PK model (2-compartment) for vitamin E in sheep, but the specific numeric parameter values (CL, V, etc.) are not present in the extracted evidence. |
| `Bjørneboe_1987.pdf` | Bjørneboe A et al., Serum half-life, distribution, hepatic…, Biochimica et biophysica ac… (1987) | popPK | 6 | [10.1016/0005-2760(87)90016-6](https://doi.org/10.1016/0005-2760(87)90016-6) | [3651482](https://pubmed.ncbi.nlm.nih.gov/3651482) | The study reports quantitative kinetic parameters (half-life, biliary excretion %) for alpha-tocopherol in rats, but lacks explicit values for clearance (CL) and volume (V). |

<sub>queue written 2026-10-07T17:04:39.468972+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abd-Rahman_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of antimalarial drugs (artefenomel and piperaquine), and tocopherol is mentioned only as an excipient (alpha-tocopherol polyethylene glycol 1000 succinate), not as the subject drug. |
| PD | Abd-Rahman_2024 | not_relevant | 0 | 0 | The paper reports a PD model for the antimalarial combination artefenomel-piperaquine, not for tocopherol (vit E). |
| popPK | Alkholief_2019 | irrelevant | 0 | 0 | The study focuses on the ocular pharmacokinetics of Acyclovir in rabbits, not tocopherol_vit_e. |
| popPK | Alum_2026 | irrelevant | 0 | 0 | The paper studies neuroprotective effects of Jimson weed extract in rats and in silico docking of various compounds, but does not report pharmacokinetic parameters for tocopherol. |
| PD | Alum_2026 | not_relevant | 0 | 0 | The paper studies Jimson weed extract and methotrexate, not tocopherol (vit E), and reports only group-level mean comparisons without dose-response curves or PD parameters. |
| popPK | Amaliah_2025 | irrelevant | 0 | 0 | The paper is a review of ternary solid dispersions for various drugs and does not provide pharmacokinetic parameters for tocopherol/vitamin E. |
| PD | Amaliah_2025 | not_relevant | 0 | 0 | The paper is a review of ternary solid dispersions and does not report any pharmacodynamic or exposure-response data for tocopherol (vit E). |
| popPK | Binkhathlan_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of paclitaxel delivered via a PCL-TPGS carrier, where vitamin E (TPGS) is the delivery vehicle rather than the subject drug. |
| popPK | Bjørneboe_1987 | relevant | 6 | 4 | The study reports quantitative kinetic parameters (half-life, biliary excretion %) for alpha-tocopherol in rats, but lacks explicit values for clearance (CL) and volume (V). |
| popPK | Bolatkyzy_2025 | irrelevant | 0 | 0 | The paper is a review of medicinal plants for skin disorders and does not report pharmacokinetic parameters for tocopherol. |
| PD | Bolatkyzy_2025 | not_relevant | 0 | 0 | The paper is a review of medicinal plants for skin disorders and does not mention tocopherol or report any pharmacodynamic or exposure-response data. |
| popPK | Christodoulou_2025 | irrelevant | 0 | 0 | The paper is a review of the antioxidant and anticancer properties of hemp oils and contains no pharmacokinetic data or models for tocopherol (vitamin E). |
| PD | Christodoulou_2025 | not_relevant | 0 | 0 | The paper is a review of hemp oils and cannabinoids (CBD/THC) in cancer, with no specific pharmacodynamic or exposure-response analysis for tocopherol (vitamin E). |
| popPK | Corlatti_2026 | irrelevant | 0 | 0 | The paper is a phytochemical review of the Helianthus genus and does not report pharmacokinetic parameters for tocopherol. |
| PD | Corlatti_2026 | not_relevant | 0 | 0 | The paper is a general review of the Helianthus genus and does not report specific pharmacodynamic or exposure-response data for tocopherol. |
| popPK | Davis_1994 | irrelevant | 0 | 0 | The study measures serum concentrations of vitamin E as a marker of disease severity in malaria patients, but does not report any pharmacokinetic parameters (CL, V, Ka, t1/2, etc.) or model the disposition of the drug. |
| popPK | Davran_2026 | irrelevant | 0 | 0 | This is a review of marine bioactive compounds and does not report specific pharmacokinetic parameters for tocopherol/vitamin E. |
| PD | Davran_2026 | not_relevant | 0 | 0 | The text is a general review of marine bioactive compounds and does not contain specific pharmacodynamic data, exposure-response relationships, or numeric PD parameters for tocopherol. |
| popPK | Fatima_2025 | irrelevant | 0 | 0 | The paper is a general review of nutraceuticals and does not report specific quantitative pharmacokinetic parameters (CL, V, etc.) for tocopherol/vitamin E. |
| PD | Fatima_2025 | not_relevant | 0 | 0 | The paper is a narrative review of nutraceuticals and does not report specific pharmacodynamic or exposure-response data for tocopherol. |
| popPK | Gansane_2023 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of artefenomel and ferroquine for malaria treatment, and while tocopherol polyethylene glycol succinate is mentioned as an excipient, no PK parameters for tocopherol/vitamin E are reported. |
| popPK | García-Caballero_2017 | irrelevant | 0 | 0 | The study reports the pharmacokinetics of GDNF, the active agent delivered by the microspheres, whereas tocopherol (Vitamin E) is only an excipient/material component. |
| popPK | Główka_2024 | irrelevant | 0 | 0 | The study reports descriptive plasma concentrations of vitamin E (α-tocopherol) in CVD patients but does not present pharmacokinetic disposition parameters (e.g., clearance, volume, half-life) or PK models. |
| PD | Główka_2024 | not_relevant | 0 | 0 | The study is a cross-sectional observational analysis of vitamin concentrations and psychosocial factors in CVD patients, reporting no dose-response or exposure-response pharmacodynamic model or parameters for tocopherol. |
| popPK | Hafez_2024 | irrelevant | 0 | 0 | The paper is a review of the plant Vachellia nilotica and does not report any pharmacokinetic data for tocopherol_vit_e. |
| PD | Hafez_2024 | not_relevant | 0 | 0 | The paper is a review of Vachellia nilotica (Acacia) and does not report any pharmacodynamic or exposure-response data for tocopherol (vitamin E). |
| popPK | Hall_1986 | irrelevant | 0 | 0 | The study focuses on spinal cord blood flow and pathophysiology after trauma, with vitamin E used only as a pre-treatment antioxidant without reporting any quantitative pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Hidiroglou_1977 | irrelevant | 2 | 0 | The study reports radioactivity distribution and qualitative excretion trends in sheep but does not provide quantitative pharmacokinetic parameters (CL, V, ka) or a compartmental model. |
| popPK | Hidiroglou_1990 | relevant | 9 | 2 | The paper reports a population PK model (2-compartment) for vitamin E in sheep, but the specific numeric parameter values (CL, V, etc.) are not present in the extracted evidence. |
| popPK | Huang_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of a curcumin-VE conjugate (CUR-VE), not tocopherol (Vitamin E) as the subject drug. |
| popPK | Islam_2023 | irrelevant | 0 | 0 | The paper is a network pharmacology study using in silico drug-likeness and bioavailability filters to identify potential cancer targets, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, t1/2) for tocopherol. |
| popPK | Isot_2025 | irrelevant | 0 | 0 | The study investigates the mechanistic effects of garcinoic acid (a vitamin E analogue) on inflammation, not the pharmacokinetics of tocopherol. |
| popPK | Jitta_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ritonavir, using alpha-tocopherol (vitamin E) solely as an excipient/liquid lipid in the formulation, not as the subject drug. |
| popPK | Kadkhodaee_2005 | irrelevant | 0 | 0 | The study investigates the protective effects of Vitamin E on gentamicin-induced nephrotoxicity using nephrotoxicity markers (LDH, NAG, ALP, GFR) and does not report any pharmacokinetic parameters (CL, V, t1/2) for tocopherol itself. |
| popPK | Kato_1993 | irrelevant | 0 | 0 | The provided evidence consists only of metadata about the GROBID software used for extraction and contains no scientific content regarding tocopherol or pharmacokinetics. |
| popPK | Ko_2023 | relevant | 8 | 2 | The study reports pharmacokinetic parameters (clearance, volume, half-life) for Vitamin E in humans, but the specific numeric values are not present in the provided text and are likely located in tables or supplementary material. |
| popPK | Kobrinsky_1982 | irrelevant | 0 | 0 | The paper is a review of anthracycline cardiomyopathy where tocopherol is only mentioned as a potential antioxidant adjunct, with no PK data for tocopherol itself. |
| PD | Langer_2001 | not_relevant | 0 | 0 | The paper focuses on dexrazoxane's protective effect against anthracycline-induced lesions and only qualitatively mentions that alpha-tocopherol was ineffective, providing no PD or exposure-response data for tocopherol. |
| popPK | Lee_2025 | irrelevant | 0 | 0 | The paper is a synthesis study for organic compounds (bicyclo[1.1.1]pentane derivatives) and does not report pharmacokinetic parameters for tocopherol. |
| PD | Lee_2025 | not_relevant | 0 | 0 | The paper describes the chemical synthesis of bicyclo[1.1.1]pentane derivatives and contains no pharmacodynamic, exposure-response, or dose-response data for tocopherol or any other drug. |
| popPK | Leiva-Castro_2025 | irrelevant | 0 | 0 | This is a systematic review of nutraceutical interventions for rheumatoid arthritis that does not report original quantitative population-pharmacokinetic parameters for tocopherol (vitamin E). |
| PD | Leiva-Castro_2025 | not_relevant | 1 | 0 | The paper is a systematic review of nutraceuticals in rheumatoid arthritis and does not report specific numeric pharmacodynamic parameters (e.g., Emax, EC50) or exposure-response curves for tocopherol. |
| popPK | Li_2025 | irrelevant | 0 | 0 | This is a systematic review and meta-analysis regarding the association between nutrition and HPV infection/cancer outcomes, not a pharmacokinetic study; it reports standardized mean differences for disease risk, not PK parameters for tocopherol. |
| popPK | Lim_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of entecavir (an antiviral), while tocopherol acetate is used only as a formulation excipient. |
| popPK | Marcello_2025 | irrelevant | 0 | 0 | The study investigates dialyzer performance and uraemic toxin removal, not the pharmacokinetics of tocopherol/vitamin E. |
| popPK | Mnisi_2025 | irrelevant | 0 | 0 | The paper is a review of the ethnomedicinal uses and phytochemistry of Senna petersiana, and does not contain any pharmacokinetic studies or quantitative disposition parameters for tocopherol (Vitamin E). |
| PD | Mnisi_2025 | not_relevant | 0 | 0 | The paper is a review of Senna petersiana and does not report any pharmacodynamic or exposure-response data for tocopherol (vit E). |
| PD | Moabedi_2025 | not_relevant | 2 | 1 | The paper is a meta-analysis of RCTs reporting pooled mean differences in biomarkers; it does not provide a pharmacokinetic-pharmacodynamic model, concentration-effect curve, or specific PD parameters (e.g., Emax, EC50) for tocopherol. |
| popPK | Mustafa_2017 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of the antibiotic Kanamycin Sulphate (KS) delivered via nanoparticles containing Vitamin E-TPGS as an excipient, rather than the pharmacokinetics of Vitamin E itself. |
| popPK | Naim_2026 | irrelevant | 0 | 0 | The paper is a review of nanoengineered delivery systems for phytochemicals in neurodegenerative disorders and does not report specific quantitative pharmacokinetic parameters for tocopherol (Vitamin E). |
| PD | Naim_2026 | not_relevant | 1 | 0 | The paper is a review of nanoengineered delivery systems for phytochemicals and does not report specific numeric pharmacodynamic parameters (e.g., Emax, EC50) or exposure-response curves for tocopherol. |
| popPK | Nakano_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cannabidiol (CBD), not tocopherol (vitamin E), which is only an excipient in the formulation. |
| popPK | Obrador_2026 | irrelevant | 0 | 0 | This is a review on radiation countermeasures (radiomitigators) and does not contain pharmacokinetic data for tocopherol_vit_e. |
| PD | Obrador_2026 | not_relevant | 0 | 0 | The text is a general review of radiomitigators and does not contain specific data, models, or numeric parameters for tocopherol (vit E) pharmacodynamics. |
| popPK | Owolabi_2024 | irrelevant | 0 | 0 | The paper is an in vitro antimicrobial and in silico study of plant extracts against Salmonella Typhi, and does not contain any pharmacokinetic data for tocopherol or vitamin E. |
| PD | Owolabi_2024 | not_relevant | 0 | 0 | The paper investigates antimicrobial activity of plant fractions against bacteria using MIC/MBC and molecular docking, which is not a pharmacodynamic (exposure-response) analysis for tocopherol in a biological system. |
| popPK | Pereira-Silva_2025 | irrelevant | 0 | 0 | The study focuses on the formulation and in vitro characterization of gemcitabine-loaded vitamin E micelles for cancer therapy, not on the pharmacokinetic parameters of tocopherol (vitamin E) itself. |
| popPK | Qureshi_2016 | irrelevant | 1 | 5 | The study focuses on tocotrienols and only provides qualitative/limited data for tocopherol isomers (specifically alpha-tocopherol Tmax), lacking quantitative disposition parameters for the subject drug tocopherol_vit_e. |
| popPK | Qureshi_2022 | irrelevant | 2 | 0 | The study discusses tocotrienols and uses alpha-tocopherol only as a comparator for bioavailability, and no specific numerical PK parameter values for tocopherol_vit_e are provided in the evidence. |
| popPK | Raclariu-Manolică_2023 | irrelevant | 0 | 0 | The paper describes the authentication of milk thistle products and does not involve tocopherol or pharmacokinetic studies. |
| PD | Raclariu-Manolică_2023 | not_relevant | 0 | 0 | The paper focuses on the authentication and quality control of milk thistle products using metabolomics and DNA metabarcoding, with no pharmacodynamic or exposure-response analysis for tocopherol or any other compound. |
| popPK | Rao_2018 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of rilpivirine, with tocopherol polyethylene glycol succinate serving only as an excipient/comparator for solubility enhancement, not as the subject drug. |
| popPK | Ravon_2025 | irrelevant | 0 | 0 | The paper studies inhalation of vancomycin and tetrahydrolipstatin for tuberculosis, not the pharmacokinetics of tocopherol (vitamin E). |
| PD | Ravon_2025 | not_relevant | 0 | 0 | The paper focuses on the formulation and efficacy of vancomycin and tetrahydrolipstatin, with no mention of tocopherol (vit E) or any pharmacodynamic modeling. |
| popPK | Ren_2022 | irrelevant | 2 | 0 | The study focuses on the pharmacokinetics of the nanocarrier TPGS (a vitamin E prodrug), not native tocopherol, and no quantitative parameter values are provided in the evidence. |
| popPK | Rezazadeh_2016 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of paclitaxel (PTX) loaded into micelles, not tocopherol or vitamin E, which is only part of the carrier system name (tocopherol succinate). |
| popPK | Saldanha_2023 | irrelevant | 0 | 0 | The paper is a review of in silico methods for vaccine development and does not contain pharmacokinetic data for tocopherol_vit_e. |
| PD | Saldanha_2023 | not_relevant | 0 | 0 | The paper is a review of in silico methods for vaccine development and does not report any pharmacodynamic or exposure-response data for tocopherol. |
| popPK | Sharma_2026 | irrelevant | 0 | 0 | The paper discusses polyamines and ferroptosis mechanisms and does not report any pharmacokinetic data for tocopherol or Vitamin E. |
| PD | Sharma_2026 | not_relevant | 0 | 0 | The paper focuses on polyamines and ferroptosis mechanisms, with no mention of tocopherol (vit E) or any pharmacodynamic modeling. |
| popPK | Shen_2018 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of genistein (GEN), using Vitamin E-TPGS only as an excipient for the micelle system, not as the subject drug. |
| popPK | Sklan_1982 | irrelevant | 4 | 0 | The study measures clearance of labeled tocopherol from plasma in chicks, but provides only qualitative descriptions (e.g., "sixfold increase") rather than quantitative parameter values (CL, V, t1/2) in the evidence provided. |
| popPK | Soltani_2020 | irrelevant | 0 | 0 | The study evaluates the protective effect of Vitamin E against vancomycin-induced nephrotoxicity (renal function markers) but does not report pharmacokinetic parameters (CL, V, ka, etc.) for Vitamin E itself. |
| popPK | Statham_1985 | irrelevant | 0 | 0 | The study examines the pharmacokinetics of nitrofurantoin, using vitamin E status as a modifier, rather than quantifying the disposition parameters of tocopherol/vitamin E itself. |
| popPK | Stevens_2023 | irrelevant | 0 | 0 | The paper is a systematic review on nanoparticle delivery of flavonoids and does not report pharmacokinetic parameters for tocopherol/vitamin E. |
| PD | Stevens_2023 | not_relevant | 0 | 0 | The paper is a systematic review on flavonoids and does not report any pharmacodynamic or exposure-response data for tocopherol (vitamin E). |
| popPK | Sutanto_2022 | irrelevant | 0 | 0 | The paper is an in silico study on naringenin's effect on cardiac electrophysiology and does not involve tocopherol/vitamin E or any pharmacokinetic parameters. |
| PD | Sutanto_2022 | not_relevant | 0 | 0 | The paper studies naringenin, not tocopherol (vit E), and is an in silico electrophysiology study rather than a pharmacodynamic analysis of the target drug. |
| popPK | Talath_2026 | irrelevant | 0 | 0 | The paper is a general review of natural supplements in breast cancer therapy and does not report any quantitative pharmacokinetic parameters for tocopherol (vitamin E). |
| PD | Talath_2026 | not_relevant | 0 | 0 | The text is a general review of natural supplements in breast cancer and does not contain any specific pharmacodynamic data, exposure-response analysis, or numeric PD parameters for tocopherol. |
| popPK | Thanishka_2026 | irrelevant | 0 | 0 | The study focuses on the formulation and in vitro evaluation of a herbal suppository containing Peperomia pellucida, with no data on tocopherol pharmacokinetics. |
| PD | Thanishka_2026 | not_relevant | 0 | 0 | The paper studies Peperomia pellucida, not tocopherol (vit E), and reports in vitro IC50 values for a plant extract rather than a pharmacodynamic model for the specified drug. |
| popPK | Travis_1987 | irrelevant | 0 | 0 | The study investigates the neurophysiological effects of vitamin E supplementation on cerebral blood flow in cats after subarachnoid hemorrhage, reporting hemodynamic parameters (CBF, ICP, CPP) rather than pharmacokinetic disposition parameters (CL, V, ka). |
| popPK | Vargas_2014 | irrelevant | 0 | 0 | The study is an in vitro mechanistic assessment of cell viability and toxicity, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Vasincu_2025 | irrelevant | 0 | 0 | The paper is a review of neuroprotective mechanisms of Ocimum plant species and does not report quantitative pharmacokinetic parameters for tocopherol. |
| PD | Vasincu_2025 | not_relevant | 0 | 0 | The paper is a review of Ocimum species (basil) for neuroprotection and does not report any pharmacodynamic or exposure-response data for tocopherol (vitamin E). |
| popPK | Vijayakumar_2016 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of resveratrol (RSV) liposomes; Vitamin E TPGS (tocopherol derivative) is only a component of the liposome coating, not the subject drug. |
| popPK | Villapiano_2026 | irrelevant | 0 | 0 | This is a review on the formulation of green nanoemulsions and does not report pharmacokinetic parameters for tocopherol. |
| PD | Villapiano_2026 | not_relevant | 0 | 0 | The paper is a review on the formulation of green nanoemulsions and does not report any pharmacodynamic or exposure-response data for tocopherol. |
| popPK | Yang_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of apremilast, while tocopherol (in the form of TPGS) serves only as a solubilizing excipient and not the subject drug. |
| popPK | Yoon_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ursodeoxycholic acid (UDCA), and vitamin E is only a comparator treatment arm without reported PK parameters. |
| popPK | Zamarripa_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of cannabidiol (CBD) and THC, with vitamin E mentioned only as a permeation enhancer in the product formulation, not as the subject drug. |
| popPK | Zhakipbekov_2026 | irrelevant | 0 | 0 | This is a review of the plant Cirsium arvense and does not report any pharmacokinetic parameters for tocopherol_vit_e. |
| PD | Zhakipbekov_2026 | not_relevant | 0 | 0 | The paper is a general review of Cirsium arvense and does not report any pharmacodynamic or exposure-response data for tocopherol. |
| popPK | Şahin_2025 | irrelevant | 0 | 0 | The paper is a review of flavonoids and phenolic compounds for neurodegenerative diseases and does not report pharmacokinetic parameters for tocopherol or vitamin E. |
| PD | Şahin_2025 | not_relevant | 0 | 0 | The paper is a review of flavonoids and phenolic compounds in neurodegenerative diseases and does not report any pharmacodynamic or exposure-response data for tocopherol (vitamin E). |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 17:04 UTC</sub>
