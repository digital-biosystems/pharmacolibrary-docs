<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;heparin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Heparin_Salem2022_reference&quot;,&quot;label&quot;:&quot;Salem_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_heparin/Heparin_Salem2022_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# heparin

- **generic name:** heparin
- **ATC codes:** `B01AB01`, `C05BA03`, `S01XA14`
- **DrugBank:** [DB01109](https://go.drugbank.com/drugs/DB01109) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Heparin is an anticoagulant (blood thinner) used to treat and prevent blood clots, including pulmonary embolism, and is also used in antiphospholipid syndrome. It is a widely used medicine and appears on the WHO list of essential medicines.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q190016](https://www.wikidata.org/wiki/Q190016) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:11 | 2:21 | 1/0/2 | 0/0/2 | 0/0/0 | 126,854/7,016 | einfracz / qwen3.8-27b | 19 | 10/9 | 17/2 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Salem_2022_reference](drugs/drug_heparin/Heparin_Salem2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Salem AM et al., Reassessing the Pediatric Dosing Recomm…, Journal of clinical pharmac… (2022) | [10.1002/jcph.2007](https://doi.org/10.1002/jcph.2007) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.625). The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Gouin-Thibault_2024_reference](drugs/drug_heparin/Heparin_GouinThibault2024_reference.md) | — | 1-compartment (no model) | 3 | Gouin-Thibault I et al., Tinzaparin, an alternative to subcutane…, Journal of thrombosis and h… (2024) | [10.1016/j.jtha.2024.07.006](https://doi.org/10.1016/j.jtha.2024.07.006) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.125). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — clearance/elimination from this paper; review-gap-fill…</sub><br><sub>route_to: `human_review`</sub> | [Lanoiselée_2026_reference](drugs/drug_heparin/Heparin_Lanoisele2026_reference.md) | — | 1-compartment (no model) | 4 | Lanoiselée J et al., Optimising protamine dosing for heparin…, British journal of anaesthe… (2026) | [10.1016/j.bja.2025.11.057](https://doi.org/10.1016/j.bja.2025.11.057) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Delavenne_2017_ACT](drugs/drug_heparin/pd_Delavenne_2017_ACT.md) | activated clotting time biomarker turnover ← heparin | — | Delavenne X et al., Pharmacokinetic/pharmacodynamic model f…, British journal of anaesthe… (2017) | [10.1093/bja/aex044](https://doi.org/10.1093/bja/aex044) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Delavenne_2017_anti_Xa](drugs/drug_heparin/pd_Delavenne_2017_anti_Xa.md) | anti-factor Xa activity biomarker turnover ← heparin | — | Delavenne X et al., Pharmacokinetic/pharmacodynamic model f…, British journal of anaesthe… (2017) | [10.1093/bja/aex044](https://doi.org/10.1093/bja/aex044) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Salem_2022_aPTT](drugs/drug_heparin/pd_Salem_2022_aPTT.md) | activated partial thromboplastin time ← unfractionated heparin · direct linear effect | model (no simulator) | Salem AM et al., Reassessing the Pediatric Dosing Recomm…, Journal of clinical pharmac… (2022) | [10.1002/jcph.2007](https://doi.org/10.1002/jcph.2007) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=heparin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: F10 (inhibitor), FGF1 (activator), FGF19 (activator), FGF2 (activator), FGF4 (activator), FGFR1 (activator), FGFR2 (activator), FGFR4 (unknown), HGF (allosteric modulator), HPSE (substrate), PF4 (allosteric modulator), SELP (inhibitor), SERPINC1 (potentiator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 462 matched, 70 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 1  ·  needs_review 2  ·  rejected 0  ·  stale 3
- **scholar-agent fallback query used:** not captured

## Full text wanted

_10 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Abe_2013.pdf` | Abe S et al., Low-molecular-weight heparin pharmacoki…, International journal of cl… (2013) | popPK | 10 | [10.5414/CP201858](https://doi.org/10.5414/CP201858) | [23587152](https://pubmed.ncbi.nlm.nih.gov/23587152) | The paper reports a population PK model for dalteparin (LMWH), but the specific numeric parameter values are not present in the provided abstract text. |
| `Delavenne_2017.pdf` | Delavenne X et al., Pharmacokinetic/pharmacodynamic model f…, British journal of anaesthe… (2017) | popPK | 10 | [10.1093/bja/aex044](https://doi.org/10.1093/bja/aex044) | [28510738](https://pubmed.ncbi.nlm.nih.gov/28510738) | The paper describes a population PK/PD model for heparin, but the specific numeric parameter values (CL, V, Q, etc.) are not listed in the provided abstract/evidence. |
| `Gibert_2024.pdf` | Gibert A et al., Factors Influencing Unfractionated Hepa…, Clinical pharmacokinetics (2024) | popPK | 10 | [10.1007/s40262-023-01334-3](https://doi.org/10.1007/s40262-023-01334-3) | [38169065](https://pubmed.ncbi.nlm.nih.gov/38169065) | The study describes a population pharmacokinetic model for heparin and identifies covariates for clearance and volume, but specific numeric parameter values are not present in the provided evidence text. |
| `Salem_2022.pdf` | Salem AM et al., Reassessing the Pediatric Dosing Recomm…, Journal of clinical pharmac… (2022) | popPK | 10 | [10.1002/jcph.2007](https://doi.org/10.1002/jcph.2007) | [34816442](https://pubmed.ncbi.nlm.nih.gov/34816442) | The study is a population PK/PD modeling study for heparin in pediatric humans and explicitly reports numeric values for clearance and volume of distribution in the abstract. |
| `Konecki_2024.pdf` | Konecki C et al., Population pharmacokinetics of unfracti…, Biomedicine & pharmacothera… (2024) | popPK | 9 | [10.1016/j.biopha.2024.117700](https://doi.org/10.1016/j.biopha.2024.117700) | [39571244](https://pubmed.ncbi.nlm.nih.gov/39571244) | The paper describes a population PK-PD model for heparin, but the specific numeric parameter estimates (clearance, volume, etc.) are not provided in the extracted evidence. |
| `Bosch_2016.pdf` | Bosch R et al., A PK-PD model-based assessment of sugam…, European journal of pharmac… (2016) | pd | 5 | [10.1016/j.ejps.2015.12.028](https://doi.org/10.1016/j.ejps.2015.12.028) | [26747019](https://www.ncbi.nlm.nih.gov/pubmed/26747019) | metadata signals extractable PD data (PK-PD) |
| `Jung_2024.pdf` | Jung D et al., Pharmacokinetics of Human Plasma-Derive…, Journal of clinical pharmac… (2024) | pd | 5 | [10.1002/jcph.2493](https://doi.org/10.1002/jcph.2493) | [38953605](https://www.ncbi.nlm.nih.gov/pubmed/38953605) | metadata signals extractable PD data (turnovermodel) |
| `Robson_2000.pdf` | Robson R, The use of bivalirudin in patients with…, The Journal of invasive car… (2000) | pd | 5 | not captured | [11156732](https://www.ncbi.nlm.nih.gov/pubmed/11156732) | metadata signals extractable PD data (Emax) |
| `Schmitt_2015.pdf` | Schmitt C et al., Absence of pharmacodynamic interaction…, Journal of cardiovascular p… (2015) | pd | 5 | [10.1097/FJC.0000000000000211](https://doi.org/10.1097/FJC.0000000000000211) | [25602360](https://www.ncbi.nlm.nih.gov/pubmed/25602360) | metadata signals extractable PD data (Emax) |
| `Nahar_2014.pdf` | Nahar R et al., CYP2C9, VKORC1, CYP4F2, ABCB1 and F5 va…, Pharmacological reports : PR (2014) | pgx | 5 | [10.1016/j.pharep.2013.09.006](https://doi.org/10.1016/j.pharep.2013.09.006) | [24911077](https://www.ncbi.nlm.nih.gov/pubmed/24911077) | metadata signals extractable PGX data (CYP2C9) |

<sub>queue written 2026-10-07T18:10:11.817522+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abe_2013 | relevant | 10 | 2 | The paper reports a population PK model for dalteparin (LMWH), but the specific numeric parameter values are not present in the provided abstract text. |
| PGx | Aldiban_2022 | not_relevant | 0 | 0 | The paper reports pharmacogenomics for warfarin, not heparin. |
| PGx | Baldo_2023 | not_relevant | 0 | 0 | The paper discusses general adverse drug reactions in anesthesia and pharmacogenomics (CYP, HLA) but does not report any pharmacogenomic effects on the PK or PD of heparin. |
| popPK | Bosch_2016 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamic effects of sugammadex on coagulation parameters, using heparin only as a co-administered background therapy rather than as the subject of pharmacokinetic modeling. |
| PGx | Carew_1992 | not_relevant | 0 | 0 | The study examines the effect of glycosylation status on vWF binding properties, not a pharmacogenomic effect of a gene variant on heparin PK/PD. |
| PGx | Chen_2014 | not_relevant | 0 | 0 | The paper investigates heparin's interaction with drug transporters in cancer cell lines to reduce multidrug resistance, but it does not report any pharmacogenomic effects (gene variants altering PK/PD) of heparin itself. |
| PGx | Chen_2018 | not_relevant | 0 | 0 | The paper focuses on surface immobilization strategies for bone morphogenetic protein-2 (BMP-2) and does not investigate the pharmacokinetics or pharmacodynamics of heparin or any genetic variants. |
| PGx | Conde_2007 | not_relevant | 0 | 0 | The paper investigates the structural properties of CENP-A nucleosomes and mentions heparin only as a reagent to destabilize histone tetramers in vitro, not as a subject of pharmacogenomic analysis for PK or PD parameters. |
| PGx | Connelly_1998 | not_relevant | 0 | 0 | The paper discusses genetic variants of the Hepatic Lipase enzyme and their effect on lipid metabolism, not the pharmacokinetics or pharmacodynamics of heparin as a drug. |
| PGx | Czyrek_2026 | not_relevant | 0 | 0 | The paper reports pharmacokinetic data for FGF1 variants but does not investigate any genetic variants affecting heparin pharmacokinetics. |
| popPK | Delavenne_2017 | relevant | 10 | 2 | The paper describes a population PK/PD model for heparin, but the specific numeric parameter values (CL, V, Q, etc.) are not listed in the provided abstract/evidence. |
| PGx | Eljilany_2021 | not_relevant | 0 | 0 | The paper investigates warfarin pharmacogenetics, not heparin. |
| PGx | Galvan_2019 | not_relevant | 0 | 0 | The paper investigates the interaction between PCSK9, LDL, and cell-surface heparin-like molecules (HSPGs), not the pharmacokinetics or pharmacodynamics of the drug heparin. |
| PGx | Gao_1995 | not_relevant | 0 | 0 | The paper describes a protein engineering experiment involving the SOD enzyme binding to heparin, rather than a pharmacogenomic study of heparin's pharmacokinetics or pharmacodynamics. |
| popPK | Gibert_2024 | relevant | 10 | 2 | The study describes a population pharmacokinetic model for heparin and identifies covariates for clearance and volume, but specific numeric parameter values are not present in the provided evidence text. |
| popPK | Gouin-Thibault_2024 | irrelevant | 1 | 8 | The study reports population pharmacokinetic parameters (clearance, volume, ka) for the specific drug tinzaparin, not for heparin. |
| PGx | Hernandez-Suarez_2016 | not_relevant | 0 | 0 | The paper discusses the pharmacogenomics of warfarin, not heparin. |
| PGx | Huang_2021 | not_relevant | 0 | 0 | The paper studies the structure and receptor binding of a viral protein, not the pharmacogenetics of heparin pharmacokinetics or pharmacodynamics. |
| PGx | Ikeda_2021 | not_relevant | 0 | 0 | The paper is a general review of cancer-associated venous thromboembolism and the treatment with heparins and DOACs, but it does not report any pharmacogenomic data or effects of gene variants on PK/PD parameters. |
| PGx | Ivanova_2025 | not_relevant | 0 | 0 | The paper is a case report describing thrombotic events and genetic associations with thrombophilia risk, but it does not report any pharmacogenomic effects on the pharmacokinetic or pharmacodynamic parameters of heparin. |
| PGx | Jiang_2011 | not_relevant | 0 | 0 | The paper investigates the association between heparan sulfate metabolism gene variants and fatty acid composition in cattle, not the pharmacokinetic or pharmacodynamic effects of heparin as a drug. |
| popPK | Jung_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of antithrombin, not heparin, with heparin serving only as a clinical context for anticoagulation. |
| PD | Jung_2024 | not_relevant | 0 | 0 | The paper reports pharmacokinetic parameters for antithrombin (AT) but does not provide a pharmacodynamic model or numeric exposure-response/dose-response parameters for heparin. |
| PGx | Karlsson_1993 | not_relevant | 0 | 0 | The study describes the pharmacokinetics of a protein drug (EC-SOD) in rabbits, with "variants" referring to engineered truncations of the drug itself, not human genetic polymorphisms affecting heparin response. |
| PGx | Karlsson_1994 | not_relevant | 0 | 0 | The paper studies the protein turnover of EC-SOD and its binding to heparan sulfate, not the pharmacokinetics or pharmacodynamics of heparin as a therapeutic drug influenced by genetic variants. |
| PGx | Karnes_2018 | not_relevant | 2 | 0 | The text is a review discussing genetic risk factors for the immune-mediated adverse reaction HIT, but it does not report pharmacogenomic effects on standard PK/PD parameters (e.g., AUC, Cmax, platelet counts as a direct drug effect) of heparin. |
| PGx | Kayashima_2022 | not_relevant | 0 | 0 | The paper investigates the role of Stabilin-2 in atherosclerosis plaque size, and while heparin is mentioned as a binding molecule, no pharmacokinetic or pharmacodynamic parameters of heparin are reported. |
| popPK | Konecki_2024 | relevant | 9 | 0 | The paper describes a population PK-PD model for heparin, but the specific numeric parameter estimates (clearance, volume, etc.) are not provided in the extracted evidence. |
| PGx | Kurtz_2002 | not_relevant | 0 | 0 | The paper discusses antiangiogenesis and neurofibromatosis, not the pharmacokinetics or pharmacodynamics of heparin therapy. |
| popPK | Lanoiselée_2024 | relevant | 10 | 1 | The paper describes a population PK model for heparin, but the specific numeric parameter values are in Table 2, which is not included in the provided evidence. |
| PGx | Lerch_2007 | not_relevant | 0 | 0 | The study focuses on the biophysical and structural binding of heparin to follistatin isoforms in a non-clinical context, lacking any clinical pharmacokinetic or pharmacodynamic assessment. |
| PGx | Lund_2021 | not_relevant | 0 | 0 | The paper describes a protein expression and purification method for lipoprotein lipase (LPL) and does not investigate pharmacogenomic effects on heparin pharmacokinetics or pharmacodynamics. |
| PGx | Mann_1995 | not_relevant | 0 | 0 | The study examines the pharmacokinetics of an endogenous protein (ApoE) and its binding to heparin, not the pharmacokinetics or pharmacodynamics of heparin as a therapeutic drug. |
| PGx | McCarley_2023 | not_relevant | 0 | 0 | The paper reviews variant prevalence in genes associated with anticoagulants (including heparin) in HHT patients but does not report any specific pharmacogenomic effect on heparin's PK or PD parameters. |
| PGx | Miklosz_2018 | not_relevant | 4 | 2 | The paper is a general review of anticoagulant pharmacogenetics with no specific, quantitative data linking a genetic variant to a PK or PD parameter of heparin. |
| PGx | Milner_2022 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions affecting apixaban PK, not a pharmacogenomic effect on heparin. |
| PGx | Minnich_1995 | not_relevant | 1 | 0 | The paper discusses a heparin binding affinity of the ApoE3' variant, but this relates to lipoprotein metabolism and not the PK/PD parameters of heparin itself. |
| PGx | Mortensen_1984 | not_relevant | 6 | 5 | The paper describes a qualitative change in pharmacodynamic efficacy (slow thrombin inhibition and decreased factor Xa inhibition) due to an AT-III variant, but it does not report a quantitative pharmacokinetic effect on heparin itself, nor a fitted effect size. |
| PGx | Nahar_2014 | not_relevant | 0 | 0 | The study focuses on warfarin (indicated by INR monitoring and CYP2C9/VKORC1 variants), not heparin. |
| popPK | Nguyen_2019 | irrelevant | 0 | 0 | The study investigates the molecular mechanisms of heparin's modulation of cytokine bioactivity (in vitro) and does not report any pharmacokinetic disposition parameters for heparin. |
| PGx | Park_2018 | not_relevant | 0 | 0 | The paper investigates gene delivery and genetic stability using heparin-coated nanoparticles, not the pharmacokinetic or pharmacodynamic effects of gene variants on heparin therapy. |
| PGx | Petito_2025 | not_relevant | 0 | 0 | The paper is a review on the pathophysiology of VITT and does not report pharmacogenomic effects on heparin pharmacokinetics or pharmacodynamics. |
| PGx | Poehlman_1986 | not_relevant | 0 | 0 | The paper focuses on the genetic influence on adipose tissue metabolism (lipogenesis/lipolysis) and does not report a pharmacogenomic effect on the PK or PD of heparin as a drug. |
| PGx | Poehlman_1987 | not_relevant | 0 | 0 | The paper uses heparin only as a reagent to measure lipoprotein lipase activity in adipose tissue biopsies, not as a therapeutic drug whose PK/PD is being studied in relation to genetic variants. |
| PGx | Porebska_2021 | not_relevant | 0 | 0 | The paper investigates FGF1 oligomerization and FGFR signaling; heparin is only mentioned as a binding partner with FGF1, and no pharmacogenomic effects on heparin PK/PD parameters are reported. |
| popPK | Raner_2024 | irrelevant | 2 | 1 | This is a meta-analysis of clinical outcomes (blood loss, dosing ratios) comparing dosing strategies, and while it mentions PK models, it does not report original quantitative PK parameters (CL, V, etc.) for heparin. |
| popPK | Rider_1997 | irrelevant | 0 | 0 | The paper describes the in-vitro antiviral mechanism and structural specificity of heparin against HIV-1, without reporting any pharmacokinetic parameters for heparin itself. |
| PD | Rider_1997 | not_relevant | 3 | 4 | The text is a review/summary that mentions a single EC50 value (5 microg/ml) for in vitro HIV-1 inhibition but does not report a full dose-response curve, PK/PD model, or detailed pharmacodynamic analysis. |
| popPK | Robson_2000 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of bivalirudin in renal impairment, with heparin mentioned only as a comparator for bleeding incidence and ACT values, not as the subject of a PK study. |
| PGx | Rüfer_2003 | not_relevant | 0 | 0 | The text is a general review of anticoagulation therapy for venous thromboembolism and does not report any pharmacogenomic effects of gene variants on heparin PK or PD parameters. |
| PGx | Saavedra_2006 | not_relevant | 0 | 0 | The paper discusses regulatory approval and interchangeability of biogeneric heparin, not pharmacogenomic effects on PK/PD. |
| popPK | Schmitt_2015 | irrelevant | 0 | 0 | Heparin is used as a comparator/co-administered agent in a pharmacodynamic interaction study, and no quantitative pharmacokinetic disposition parameters for heparin are reported. |
| PGx | Stöllberger_2017 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction between rivaroxaban and carbamazepine, not a pharmacogenomic effect of a gene variant on heparin. |
| PGx | Sylvers-Davie_2021 | not_relevant | 0 | 0 | The paper investigates lipoprotein metabolism and the role of ANGPTL8 in enzyme inhibition, mentioning heparin only as a non-pharmacokinetic experimental condition (cell binding) and not analyzing heparin's PK/PD. |
| popPK | Tan_2025 | irrelevant | 0 | 0 | The study is a clinical cohort comparing therapeutic strategies for acute pancreatitis where heparin is used as a treatment, but it does not report pharmacokinetic parameters (CL, Vd, etc.). |
| PGx | Tang_2016 | not_relevant | 0 | 0 | The paper investigates paclitaxel resistance in ovarian cancer and does not report pharmacogenomic effects on heparin pharmacokinetics or pharmacodynamics. |
| PGx | Underwood_2025 | not_relevant | 0 | 0 | The paper identifies procoagulant ligands for the receptor stabilin-2; it does not report how a gene variant affects the pharmacokinetics or pharmacodynamics of the drug heparin. |
| popPK | Upchurch_2001 | irrelevant | 0 | 0 | The study investigates the chemical interaction between heparin and nitric oxide (mechanistic/chemical) rather than pharmacokinetic disposition parameters like clearance or volume. |
| PGx | Vandell_2017 | not_relevant | 0 | 0 | The paper focuses on the pharmacogenetics of warfarin and edoxaban, not heparin. |
| PGx | Vos_2019 | not_relevant | 0 | 0 | The paper discusses genetic variants of the RSV virus G-protein, not human pharmacogenomics affecting heparin PK/PD. |
| PGx | Wei_2024 | not_relevant | 0 | 0 | The paper is a protocol for a clinical trial comparing rivaroxaban and enoxaparin, not a study reporting pharmacogenomic effects on heparin pharmacokinetics. |
| PGx | Westmark_2025 | not_relevant | 0 | 0 | The paper studies protein engineering variants of Factor IX, not the effect of human gene variants (polymorphisms) on the pharmacokinetics or pharmacodynamics of heparin. |
| PGx | Wu_2023 | not_relevant | 1 | 1 | The paper reports a genetic cause for hyperlipoproteinemia and renal lipidosis, mentioning "post-heparin LPL activity" only as a diagnostic test for the enzyme, not as a pharmacokinetic or pharmacodynamic parameter of heparin therapy. |
| PGx | Xi_2023 | not_relevant | 0 | 0 | The paper is about the enzyme engineering of heparan sulfate N-sulfotransferase for the synthesis of heparin, not about pharmacogenomics of heparin pharmacokinetics or pharmacodynamics. |
| PGx | Xu_1992 | not_relevant | 0 | 0 | The paper focuses on the expression and structural analysis of fibroblast growth factor receptor isoforms, not on pharmacogenomics or pharmacokinetics of the drug heparin. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 18:10 UTC</sub>
