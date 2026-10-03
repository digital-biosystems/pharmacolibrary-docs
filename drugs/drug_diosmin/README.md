<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C05C&quot;,&quot;href&quot;:&quot;atc/C05C.md&quot;},{&quot;label&quot;:&quot;diosmin&quot;}]"></div>

# diosmin

- **generic name:** diosmin
- **ATC codes:** `C05CA03`
- **DrugBank:** [DB08995](https://go.drugbank.com/drugs/DB08995) · **PubChem:** [CID 5281613](https://pubchem.ncbi.nlm.nih.gov/compound/5281613)
- **molar mass:** 608.5447 g/mol (C28H32O15) — DrugBank
- **groups:** approved, investigational

## About

**Description.** Chronic venous insufficiency is a common condition the western population. Compression and pharmacotherapy are frequently used to manage chronic venous insufficiency, improving circulation and symptoms of venous disease.[A232885]

Diosmin is a bioflavonoid isolated from various plants or synthesized from [hesperidin]. It is used for the improvement of capillary fragility or venous insufficiency, including chronic venous insufficiency (CVI) and hemorrhoids. Diosmin is widely available over-the-counter and demonstrates a favourable a favorable safety profile.[A232890,T840,L33040]

**Indication.** Diosmin is used over-the-counter alone or with ingredients such as [hesperidin] and [diosmetin] to support vein and capillary function.[L32823,L32848]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-01 15:48 | 7:56 | 0/0/0 | 1/2/0 | 0/0/0 | 148,949/5,596 | ollama / glm-5.3-flash | 3 | 3/16 | 3/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Artanti_2024_HepG2_cell_viability](drugs/drug_diosmin/pd_Artanti_2024_HepG2_cell_viability.md) | HepG2 cell viability ← diosmin · direct linear effect | — | Artanti AN et al., Hesperidin and Diosmin Increased Cytoto…, Asian Pacific journal of ca… (2024) | [10.31557/APJCP.2024.25.12.4247](https://doi.org/10.31557/APJCP.2024.25.12.4247) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 0.00).">in vitro</span> | [Kuntz_1999_cell_proliferation_growth_inhibition](drugs/drug_diosmin/pd_Kuntz_1999_cell_proliferation_growth_inhibition.md) | cell proliferation (growth inhibition) ← diosmin · direct Emax (saturable) effect | — | Kuntz S et al., Comparative analysis of the effects of…, European journal of nutriti… (1999) | [10.1007/s003940050054](https://doi.org/10.1007/s003940050054) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Rajasekar_2025_MTT](drugs/drug_diosmin/pd_Rajasekar_2025_MTT.md) | cell proliferation (MTT assay cytotoxicity in Hep-2 cells) ← diosmin · inhibition effect | — | Rajasekar M et al., Diosmin induces mitochondrial-mediated…, Naunyn-Schmiedeberg's archi… (2025) | [10.1007/s00210-024-03690-8](https://doi.org/10.1007/s00210-024-03690-8) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=diosmin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor, `SLCO2B1` unknown | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor, `SLCO2B1` unknown | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | liver | `CYP2C9` inhibitor, `CYP2E1` inhibitor, `CYP3A4` inhibitor, `SLCO1B1` inhibitor, `SLCO1B3` unknown | DrugBank actor |
| metabolism | lung | `CYP1A1` inducer | DrugBank actor |
| metabolism | small intestine | `CYP1A1` inducer, `CYP3A4` inhibitor | DrugBank actor |
| excretion | kidney | <sub>“…Minor metabolites are found to be eliminated in the urine as glucuronic acid conjugates…”</sub> | prose |

<sub>Actors without a tissue in the table: AHR (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 70 matched, 59 returned
- **screened:** 10  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_14 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ma_2007.pdf` | Ma YL et al., [Studies on pharmacokinetics of diosmin…, Zhongguo Zhong yao za zhi =… (2007) | popPK | 9 | not captured | [17511149](https://pubmed.ncbi.nlm.nih.gov/17511149) | The study is a pharmacokinetic investigation of diosmin in rats fitting a one-compartment model, but the specific numeric parameter values (CL, V, ka, etc.) are not present in the provided evidence. |
| `Russo_2015.pdf` | Russo R et al., Pharmacokinetic Profile of µSMIN Plus™,…, Natural product communicati… (2015) | popPK | 8 | not captured | [26594761](https://pubmed.ncbi.nlm.nih.gov/26594761) | The study reports quantitative PK parameters (Cmax, Tmax, AUC, t1/2) for diosmin in rats, but the specific numeric values are not present in the provided text evidence. |
| `El-Shiekh_2024.pdf` | El-Shiekh RA et al., Natural compounds as possible anti-SARS…, Natural product research (2024) | pd | 5 | [10.1080/14786419.2023.2261069](https://doi.org/10.1080/14786419.2023.2261069) | [37752734](https://www.ncbi.nlm.nih.gov/pubmed/37752734) | metadata signals extractable PD data (IC50) |
| `Cho_2020.pdf` | Cho YW et al., Small molecule inhibitors of IκB kinase…, Bioorganic & medicinal chem… (2020) | pd | 4 | [10.1016/j.bmc.2020.115440](https://doi.org/10.1016/j.bmc.2020.115440) | [32205046](https://www.ncbi.nlm.nih.gov/pubmed/32205046) | metadata signals extractable PD data (IC50) |
| `Dubey_2021.pdf` | Dubey K et al., Exploration of Diosmin to Control Diabe…, Current computer-aided drug… (2021) | pd | 4 | [10.2174/1573409916666200324135734](https://doi.org/10.2174/1573409916666200324135734) | [32208122](https://www.ncbi.nlm.nih.gov/pubmed/32208122) | metadata signals extractable PD data (IC50) |
| `Kavutcu_1999.pdf` | Kavutcu M et al., In vitro effects of selected flavonoids…, Die Pharmazie (1999) | pd | 4 | not captured | [10399192](https://www.ncbi.nlm.nih.gov/pubmed/10399192) | metadata signals extractable PD data (IC50) |
| `Kiran_2024.pdf` | Kiran KS et al., Diosmin: A Daboia russelii venom PLA2s…, Journal of ethnopharmacology (2024) | pd | 4 | [10.1016/j.jep.2023.116977](https://doi.org/10.1016/j.jep.2023.116977) | [37544341](https://www.ncbi.nlm.nih.gov/pubmed/37544341) | metadata signals extractable PD data (IC50) |
| `Kuppusamy_2017.pdf` | Kuppusamy A et al., Combining in silico and in vitro approa…, International journal of bi… (2017) | pd | 4 | [10.1016/j.ijbiomac.2016.11.062](https://doi.org/10.1016/j.ijbiomac.2016.11.062) | [27871793](https://www.ncbi.nlm.nih.gov/pubmed/27871793) | metadata signals extractable PD data (IC50) |
| `Liu_2025.pdf` | Liu Y et al., Preparation of monoclonal antibody agai…, Talanta (2025) | pd | 4 | [10.1016/j.talanta.2024.126871](https://doi.org/10.1016/j.talanta.2024.126871) | [39276572](https://www.ncbi.nlm.nih.gov/pubmed/39276572) | metadata signals extractable PD data (IC50) |
| `Vyas_2024.pdf` | Vyas K et al., Study of an inhibitory effect of plant…, International journal of bi… (2024) | pd | 4 | [10.1016/j.ijbiomac.2024.129222](https://doi.org/10.1016/j.ijbiomac.2024.129222) | [38185307](https://www.ncbi.nlm.nih.gov/pubmed/38185307) | metadata signals extractable PD data (IC50) |
| `Wang_2005.pdf` | Wang X et al., Flavonoids as a novel class of human or…, Drug metabolism and disposi… (2005) | pd | 4 | [10.1124/dmd.105.005926](https://doi.org/10.1124/dmd.105.005926) | [16081670](https://www.ncbi.nlm.nih.gov/pubmed/16081670) | metadata signals extractable PD data (IC50) |
| `Bedada_2017.pdf` | Bedada SK et al., Influence of diosmin on the metabolism…, Xenobiotica; the fate of fo… (2017) | pgx | 7 | [10.1080/00498254.2016.1244368](https://doi.org/10.1080/00498254.2016.1244368) | [27690733](https://www.ncbi.nlm.nih.gov/pubmed/27690733) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Poór_2018.pdf` | Poór M et al., Pharmacokinetic interaction of diosmeti…, Biomedicine & pharmacothera… (2018) | pgx | 7 | [10.1016/j.biopha.2018.03.146](https://doi.org/10.1016/j.biopha.2018.03.146) | [29710546](https://www.ncbi.nlm.nih.gov/pubmed/29710546) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Rajnarayana_2007.pdf` | Rajnarayana K et al., Bioavailability of diclofenac sodium af…, Drug metabolism and drug in… (2007) | pgx | 7 | [10.1515/dmdi.2007.22.2-3.165](https://doi.org/10.1515/dmdi.2007.22.2-3.165) | [17708066](https://www.ncbi.nlm.nih.gov/pubmed/17708066) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |

<sub>queue written 2026-10-01T15:47:59.046965+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Al-Mur_2024 | irrelevant | 0 | 0 | This is a phytochemical/bioactivity study of seaweed extract; diosmin appears only as an HPLC-detected flavonoid content (121.745 mg/g), with no pharmacokinetic parameters. |
| PD | Al-Mur_2024 | not_relevant | 1 | 1 | Diosmin is only quantified as a phytochemical constituent of seaweed extract; IC50 values are for crude extract cytotoxicity/antioxidant assays, not a diosmin exposure- or dose-response PD relationship. |
| popPK | Amaliah_2025 | irrelevant | 0 | 0 | The paper is a review of ternary solid dispersions where diosmin is only one of many drugs listed, and the entry for diosmin reports only antioxidant activity, not pharmacokinetic parameters. |
| PD | Amaliah_2025 | not_relevant | 0 | 0 | The paper is a review of ternary solid dispersions and does not report any specific pharmacodynamic or exposure-response data for diosmin. |
| popPK | Amato_1994 | irrelevant | 1 | 0 | Clinical efficacy trial of micronized vs nonmicronized diosmin with no PK disposition parameters reported. |
| PD | Amato_1994 | not_relevant | 2 | 0 | The paper reports clinical and plethysmographic outcomes comparing two formulations but does not provide plasma concentration data or numeric pharmacodynamic parameters (e.g., Emax, EC50) to define an exposure-response relationship. |
| popPK | Amiel_1998 | irrelevant | 1 | 0 | Pharmacodynamic (venous tone) study with no PK disposition parameters or numeric values reported. |
| PD | Amiel_1998 | not_relevant | 2 | 1 | The text describes a qualitative pharmacodynamic effect (venous tone reinforcement) and duration but provides no numeric concentration-effect data, dose-response curve, or PD parameters (Emax, EC50) for diosmin. |
| popPK | Artanti_2024 | irrelevant | 0 | 0 | In vitro cytotoxicity study (IC50, CI values) with no pharmacokinetic disposition parameters for diosmin. |
| PGx | Bedada_2017 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (diosmin affecting carbamazepine PK) and does not report any pharmacogenomic effects (gene variants) on diosmin's PK or PD parameters. |
| popPK | Chinnam_2010 | irrelevant | 0 | 0 | In-vitro enzymology study of bioflavonoids on E. coli ATP synthase; no PK parameters for diosmin. |
| PD | Chinnam_2010 | not_relevant | 4 | 3 | The paper reports a partial inhibition range (40-60%) for diosmin but does not provide a specific IC50 or a full concentration-effect curve with numeric parameters for diosmin, unlike the other compounds listed. |
| popPK | Cho_2020 | irrelevant | 0 | 0 | In vitro enzyme inhibition screening of IKKβ; diosmin is only a hit compound with IC50 comparisons, no PK parameters reported. |
| PD | Cho_2020 | not_relevant | 0 | 0 | The paper focuses on the screening of IKKβ inhibitors and molecular docking, with no mention of diosmin or any pharmacodynamic/exposure-response analysis. |
| popPK | Cornara_2022 | irrelevant | 0 | 0 | This is a phytochemical/micromorphological study of Mentha pulegium; diosmin appears only as a plant metabolite content (mg/100 g, area %), with no PK disposition parameters. |
| PD | Cornara_2022 | not_relevant | 1 | 1 | In vitro IC50 bioassays of plant extracts (not diosmin exposure-response); no PK, no concentration-effect or dose-response PD parameters for diosmin. |
| popPK | Cospite_1989 | irrelevant | 0 | 0 | Clinical efficacy trial with no PK disposition parameters for diosmin reported. |
| PD | Cospite_1989 | not_relevant | 2 | 0 | The paper reports qualitative clinical and plethysmographic improvements comparing two formulations but provides no numeric concentration-effect data, dose-response curves, or PD parameters (Emax, EC50, etc.). |
| popPK | Dubey_2021 | irrelevant | 0 | 0 | In vitro enzyme inhibition and docking study with no pharmacokinetic disposition parameters for diosmin. |
| popPK | El-Shiekh_2024 | irrelevant | 1 | 0 | In-vitro/in-silico antiviral screening with only IC50 values and qualitative predictive ADME; no PK disposition parameters for diosmin. |
| PD | El-Shiekh_2024 | not_relevant | 0 | 0 | The paper is an in-vitro and in-silico study of natural compounds against SARS-CoV-2 and does not report pharmacokinetic or pharmacodynamic modeling, exposure-response relationships, or numeric PD parameters for diosmin. |
| popPK | Fan_2025 | irrelevant | 0 | 0 | The paper is a review of flavonoids in neurological diseases and does not report any pharmacokinetic parameters for diosmin. |
| PD | Fan_2025 | not_relevant | 1 | 0 | The paper is a narrative review of flavonoids in neurological diseases and does not report specific PK/PD data, exposure-response curves, or numeric PD parameters for diosmin. |
| popPK | Habib_2022 | irrelevant | 0 | 0 | This is a pharmacodynamic neuroprotection study in rats with no PK parameters (CL, V, ka, half-life, or PK model) reported for diosmin. |
| PD | Habib_2022 | not_relevant | 3 | 2 | The study reports a qualitative dose-response trend (50, 100, 200 mg/kg) but lacks numeric PD parameters (e.g., EC50, Emax) or concentration-effect data, as it is a preclinical efficacy study without PK/PD modeling. |
| popPK | Harasstani_2010 | irrelevant | 0 | 0 | In-vitro anti-inflammatory study in RAW 264.7 cells with IC50 values, no pharmacokinetic disposition parameters for diosmin. |
| popPK | Islam_2022 | irrelevant | 0 | 0 | The paper is a review on immune system measures against coronavirus and does not contain any pharmacokinetic data or mention of diosmin. |
| PD | Islam_2022 | not_relevant | 0 | 0 | The paper is a general review on immune system rejuvenation and does not contain any pharmacodynamic or exposure-response data for diosmin. |
| popPK | Karetová_2020 | irrelevant | 0 | 0 | Czech narrative review of diosmin/hesperidin clinical efficacy with no PK parameters (no CL, V, ka, half-life, or PK model) reported. |
| PD | Karetová_2020 | not_relevant | 2 | 1 | The paper is a qualitative review discussing mechanisms of action and clinical trial outcomes (e.g., cytokine reduction) but does not report any quantitative exposure-response or dose-response models with numeric PD parameters (Emax, EC50, etc.). |
| popPK | Kataria_2019 | irrelevant | 0 | 0 | In-silico/in-vitro medicinal chemistry study of diosmin derivatives with no pharmacokinetic disposition parameters. |
| PD | Kataria_2019 | not_relevant | 2 | 2 | The paper reports single-point IC50 values for enzyme inhibition and MIC for antibacterial activity, but lacks a full concentration-effect curve, dose-response modeling, or PK/PD analysis required for extractable pharmacodynamic parameters. |
| popPK | Kavutcu_1999 | irrelevant | 0 | 0 | In vitro enzyme inhibition study; diosmin is only one of many flavonoids tested with no PK parameters reported. |
| popPK | Khodja_2025 | irrelevant | 0 | 0 | In silico docking/phytochemistry study with no PK parameters for diosmin. |
| PD | Khodja_2025 | not_relevant | 0 | 0 | The paper reports IC50 values for the whole plant extract and binding affinities for diosmin via docking, but does not provide a concentration-effect curve or numeric PD parameters (Emax, EC50, slope) specifically for diosmin. |
| popPK | Kiran_2024 | irrelevant | 0 | 0 | This is an in vitro/in vivo pharmacodynamic study of diosmin as a PLA2 inhibitor, with no PK parameters (CL, V, ka, half-life, or population-PK model) reported. |
| popPK | Kuntz_1999 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of flavonoid effects on cancer cell proliferation and apoptosis, not a pharmacokinetic study. |
| popPK | Kuppusamy_2017 | irrelevant | 0 | 0 | In silico docking and in vitro AChE inhibition study with no pharmacokinetic disposition parameters for diosmin. |
| PD | Kuppusamy_2017 | not_relevant | 0 | 0 | The paper focuses on in silico and in vitro acetylcholinesterase inhibition of flavonoids for Alzheimer's disease and does not report pharmacokinetic or pharmacodynamic exposure-response relationships for diosmin. |
| popPK | Liu_2025 | irrelevant | 0 | 0 | This is an immunoassay method-development paper (ELISA for flavonoid detection) with no pharmacokinetic parameters for diosmin. |
| PD | Liu_2025 | not_relevant | 0 | 0 | The paper describes the preparation of a monoclonal antibody and the development of an ELISA method for quantifying rhoifolin and diosmin, containing no pharmacodynamic or exposure-response data. |
| popPK | Ma_2007 | relevant | 9 | 0 | The study is a pharmacokinetic investigation of diosmin in rats fitting a one-compartment model, but the specific numeric parameter values (CL, V, ka, etc.) are not present in the provided evidence. |
| popPK | Mahran_2019 | irrelevant | 0 | 0 | This is a natural-product isolation/phytochemistry paper; diosmin is merely an isolated compound with no pharmacokinetic parameters reported. |
| PD | Mahran_2019 | not_relevant | 0 | 0 | The paper is a phytochemical isolation study; diosmin is merely identified as one of the isolated compounds, and no pharmacodynamic or exposure-response analysis is performed for it. |
| popPK | Majnooni_2020 | irrelevant | 0 | 0 | The paper is a review of phytochemicals for lung injury and mentions diosmin only in the context of a clinical trial registration, providing no pharmacokinetic parameters. |
| PD | Majnooni_2020 | not_relevant | 0 | 0 | The paper is a narrative review of phytochemical mechanisms and does not report any specific pharmacokinetic or pharmacodynamic data, exposure-response relationships, or numeric PD parameters for diosmin. |
| popPK | Melzig_1999 | irrelevant | 0 | 0 | In-vitro pharmacodynamic study of diosmin on endothelial cells with no PK parameters. |
| popPK | Miara_2025 | irrelevant | 0 | 0 | This is a phytochemical/biological activity study of Thymbra nabateorum extract; diosmin appears only as a quantified plant constituent (118.75 mg/g), with no PK parameters for diosmin. |
| PD | Miara_2025 | not_relevant | 1 | 1 | In vitro phytochemistry/bioassay study (IC50 enzyme inhibition, cytotoxicity) of plant extracts; no in vivo exposure- or dose-response PD relationship for diosmin. |
| PGx | Michalczyk_2025 | not_relevant | 0 | 0 | The paper investigates the pharmacological interaction between diosmetin and doxorubicin in cancer cells, not the effect of genetic variants on the PK/PD of diosmin. |
| popPK | Nugroho_2013 | irrelevant | 0 | 0 | This is an HPLC quantification and antioxidant assay of plant constituents, not a pharmacokinetic study; diosmin is only a quantified analyte with no disposition parameters. |
| PD | Nugroho_2013 | not_relevant | 3 | 2 | The paper reports IC50 values for various compounds including diosmin in a peroxynitrite-scavenging assay, but this is a simple in vitro bioassay potency metric, not a pharmacodynamic (exposure-response) model or dose-response curve analysis with derivable PD parameters like Emax or slope in a PK/PD context. |
| popPK | Nureye_2025 | irrelevant | 0 | 0 | The paper is a review of medicinal plants for hypertension and does not report pharmacokinetic parameters for diosmin. |
| PD | Nureye_2025 | not_relevant | 0 | 0 | The paper is a review of medicinal plants for hypertension in Ethiopia and does not report any specific pharmacodynamic or exposure-response analysis for diosmin. |
| PGx | Orzetti_2023 | not_relevant | 2 | 3 | Reports drug–natural product interactions via CYP3A4, not a gene variant/genotype effect on diosmin PK/PD parameters. |
| popPK | Ouari_2026 | irrelevant | 0 | 0 | Evidence is only an LC-MS instrument report for a plant leaf extract with no diosmin PK parameters. |
| PD | Ouari_2026 | not_relevant | 0 | 0 | The text is raw LC-MS/MS instrument data for a plant extract sample and contains no pharmacodynamic, exposure-response, or dose-response analysis. |
| popPK | Paul_2026 | irrelevant | 0 | 0 | This is a phytochemical/antimicrobial/docking study of Achillea millefolium extract; diosmin appears only as an identified compound and docking ligand, with no PK parameters. |
| PD | Paul_2026 | not_relevant | 1 | 1 | In vitro phytochemical screening (DPPH IC50, ZOI, docking) of plant extracts; no in vivo diosmin exposure- or dose-response PD relationship or PK/PD parameters. |
| PGx | Poór_2018 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (CYP2C9 inhibition and albumin displacement) of diosmetin, not the effect of a gene variant on diosmin's PK/PD. |
| popPK | Rajasekar_2025 | irrelevant | 0 | 0 | In vitro anticancer mechanism study with no PK parameters for diosmin. |
| PGx | Rajnarayana_2007 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (diosmin affecting diclofenac PK) and does not report any pharmacogenomic effects (gene variants) on diosmin or diclofenac. |
| popPK | Rajnarayana_2008 | irrelevant | 1 | 0 | The study investigates diosmin as a CYP2E1 inhibitor affecting the pharmacokinetics of chlorzoxazone, not the disposition parameters of diosmin itself. |
| popPK | Russo_2015 | relevant | 8 | 2 | The study reports quantitative PK parameters (Cmax, Tmax, AUC, t1/2) for diosmin in rats, but the specific numeric values are not present in the provided text evidence. |
| popPK | Sher_1992 | irrelevant | 0 | 0 | In-vitro mechanistic study of amine uptake inhibition in cell lines; no PK disposition parameters for diosmin. |
| popPK | Sheridan_2022 | irrelevant | 2 | 1 | The paper is a review of polyphenol antiviral mechanisms and pharmacokinetics, mentioning diosmin only as a precursor to diosmetin without reporting original quantitative PK parameters (CL, V, Q) for diosmin itself. |
| PD | Sheridan_2022 | not_relevant | 2 | 1 | The paper is a review discussing mechanisms and citing in vitro IC50s for various polyphenols, but it does not report a specific pharmacodynamic or exposure-response model with numeric parameters for diosmin. |
| popPK | Singh_2021 | irrelevant | 0 | 0 | Diosmin is only listed as a phytochemical constituent of a plant extract; no PK parameters are reported. |
| PD | Singh_2021 | not_relevant | 0 | 0 | The paper reports an IC50 for a crude plant extract, not for the specific drug diosmin, and does not provide a dose-response curve or PD parameters for diosmin itself. |
| popPK | Sovrlić_2022 | irrelevant | 0 | 0 | In-vitro spectroscopic protein-binding study of tigecycline on HSA; diosmin is only a co-ligand, with no PK disposition parameters. |
| PD | Sovrlić_2022 | not_relevant | 0 | 0 | The study investigates in vitro binding affinity and competition for Human Serum Albumin (HSA) using spectroscopy and docking, not in vivo pharmacodynamics or exposure-response relationships. |
| popPK | Stanoiu_2025 | irrelevant | 0 | 0 | The paper focuses on the characterization of Inonotus obliquus delivery systems and does not involve diosmin or pharmacokinetic studies. |
| PD | Stanoiu_2025 | not_relevant | 0 | 0 | The paper focuses on the characterization of Inonotus obliquus delivery systems and does not mention diosmin or report any pharmacodynamic or exposure-response data. |
| popPK | Sun_2022 | irrelevant | 0 | 0 | This is an in-vitro antioxidant/LDL oxidation study of plant flavonoids; diosmin is only a minor identified component (2.88%), with no PK parameters. |
| PD | Sun_2022 | not_relevant | 0 | 0 | The paper reports in vitro antioxidant and anti-glycation activities of a flavonoid mixture (PEF) and identifies diosmin as a constituent, but it does not perform a pharmacokinetic or pharmacodynamic analysis for diosmin specifically, nor does it provide exposure-response or dose-response parameters (e.g., EC50, Emax) for diosmin in a biological system. |
| popPK | Taleghani_2025 | irrelevant | 0 | 0 | Phytochemical screening only; diosmin merely identified as a constituent, no PK parameters. |
| PD | Taleghani_2025 | not_relevant | 0 | 0 | The paper is a phytochemical and in vitro biological activity study of plant fractions; it identifies diosmin as a constituent but does not report any pharmacodynamic or exposure-response analysis for diosmin specifically. |
| popPK | Vyas_2024 | irrelevant | 0 | 0 | In vitro/in silico enzyme inhibition study with no pharmacokinetic disposition parameters for diosmin. |
| PD | Vyas_2024 | not_relevant | 0 | 0 | The paper focuses on in vitro enzyme inhibition and molecular docking of plant polyphenols, not on the pharmacokinetic or pharmacodynamic modeling of diosmin in a biological system. |
| popPK | Wahyuningsih_2026 | irrelevant | 0 | 0 | The paper is a review on nanocarrier delivery for diabetic wound healing and does not report pharmacokinetic parameters for diosmin. |
| PD | Wahyuningsih_2026 | not_relevant | 0 | 0 | The paper is a review of nanocarrier delivery systems for phytochemicals in diabetic wound healing and does not report any specific pharmacodynamic or exposure-response data for diosmin. |
| popPK | Wang_2005 | irrelevant | 1 | 1 | In-vitro transporter inhibition study (OATP1B1 in HeLa cells); diosmin is only a tested modulator, no PK disposition parameters. |
| PD | Wang_2005 | not_relevant | 0 | 0 | The paper reports in vitro transporter inhibition (IC50/Ki) for flavonoids, not a pharmacodynamic exposure-response or dose-response relationship for diosmin in a physiological or clinical context. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The paper describes a molecular foundational model for chemical structure representation and generation, containing no pharmacokinetic data or parameters for diosmin. |
| PD | Wang_2026 | not_relevant | 0 | 0 | The paper describes a molecular foundational model for chemical representation and generation, containing no pharmacodynamic or exposure-response data for diosmin. |
| popPK | Xie_2009 | irrelevant | 0 | 0 | This is a natural product isolation and cytotoxicity study; diosmin is only an isolated compound with IC50 data, no PK parameters. |
| PD | Xie_2009 | not_relevant | 0 | 0 | The paper reports an IC50 for diosmin only qualitatively as "little cytotoxic activity" without providing a specific numeric value or dose-response curve parameters. |
| popPK | Xu_2024 | irrelevant | 0 | 0 | The paper is a critical review of flavonoid drugs and does not report original quantitative pharmacokinetic parameters for diosmin. |
| PD | Xu_2024 | not_relevant | 1 | 0 | The paper is a critical review of flavonoid drug development and informatics analysis, containing no specific pharmacodynamic modeling, exposure-response data, or numeric PD parameters for diosmin. |
| popPK | Xu_2025 | irrelevant | 0 | 0 | The paper is a review of flavonoids in digestive diseases and does not report pharmacokinetic parameters for diosmin. |
| PD | Xu_2025 | not_relevant | 1 | 0 | The paper is a narrative review of flavonoids in digestive diseases and does not report specific pharmacokinetic or pharmacodynamic data, exposure-response relationships, or numeric PD parameters for diosmin. |
| popPK | Zhang_2026 | irrelevant | 0 | 0 | The paper focuses on antibacterial drug repurposing and does not study diosmin or report any pharmacokinetic parameters for it. |
| PD | Zhang_2026 | not_relevant | 0 | 0 | The paper focuses on drug repurposing for antibacterial discovery and does not mention diosmin or report any pharmacodynamic parameters for it. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
